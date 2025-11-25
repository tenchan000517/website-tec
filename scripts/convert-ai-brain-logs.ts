/**
 * ai-brain-logs Markdown → technologies.ts 変換スクリプト
 *
 * 使用方法:
 *   npx tsx scripts/convert-ai-brain-logs.ts
 *
 * 入力: /mnt/c/ai-brain-logs/{skills,decisions,workflows,design-patterns,failures,active-systems}/*.md
 * 出力: /mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Technology インターフェース（technologies.ts と同じ）
interface Technology {
  slug: string;
  title: string;
  category: string;
  description: string;
  project: string;
  usedIn: string[];
  code: string;
  prompt: string;
  setup?: string;
  preview?: string;
  relatedTech: string[];
}

// ai-brain-logs のメタデータ型
interface AiBrainLogsMetadata {
  id: string;
  type: string;
  name: string;
  tags: string[];
  source_project: string;
  source_file: string;
  related_knowledge: string[];
  confidence: string;
  created: string;
  updated: string;
}

// カテゴリーのマッピング
const categoryMapping: Record<string, string> = {
  'skills': 'Skills（スキル・手法）',
  'decisions': 'Decisions（技術選定・判断）',
  'workflows': 'Workflows（ワークフロー）',
  'design-patterns': 'Design Patterns（設計パターン）',
  'failures': 'Failures（失敗・トラブル対処）',
  'active-systems': 'Active Systems（稼働中システム）'
};

// ファイル名からslugを生成
function generateSlug(fileName: string, category: string): string {
  const prefix = category.replace('-', '_') + '_';
  return fileName
    .replace('.md', '')
    .replace(/_\d{4}_\d{2}_\d{2}$/, '')  // 日付を除去
    .replace(/_/g, '-')
    .toLowerCase();
}

// related_knowledge のファイル名をslugに変換
function convertRelatedToSlug(relatedFileName: string): string {
  return relatedFileName
    .replace('.md', '')
    .replace(/_\d{4}_\d{2}_\d{2}$/, '')  // 日付を除去
    .replace(/_/g, '-')
    .toLowerCase();
}

// Markdownファイルをパース
function parseMarkdownFile(filePath: string, category: string): Technology | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    // JSONメタデータを抽出
    const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch) {
      console.warn(`No JSON metadata found in: ${filePath}`);
      return null;
    }

    let metadata: AiBrainLogsMetadata;
    try {
      metadata = JSON.parse(jsonMatch[1]);
    } catch {
      console.warn(`Failed to parse JSON in: ${filePath}`);
      return null;
    }

    // タイトルを抽出（最初の # 行）
    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : metadata.name;

    // 説明を抽出（## 何をする* セクション）
    const descMatch = content.match(/## 何をする[^\n]*\n\n?([\s\S]*?)(?=\n## |$)/);
    const description = descMatch
      ? descMatch[1].trim().split('\n')[0].substring(0, 200)  // 最初の行、最大200文字
      : metadata.name;

    // 再現方法セクションを抽出（Claude Code指示文として使用）
    const reproMatch = content.match(/## 再現方法\n\n?([\s\S]*?)(?=\n## |$)/);
    const prompt = reproMatch
      ? reproMatch[1].trim()
      : `このスキル「${title}」を実装してください。\n\n詳細は以下のMarkdownコンテンツを参照してください。`;

    // usedIn を source_file から作成
    const usedIn = metadata.source_file ? [metadata.source_file] : [];

    // slug を生成
    const slug = generateSlug(fileName, category);

    // related_knowledge を slug 配列に変換
    const relatedTech = (metadata.related_knowledge || [])
      .map(convertRelatedToSlug)
      .filter(Boolean);

    return {
      slug,
      title,
      category: categoryMapping[category] || category,
      description,
      project: metadata.source_project || 'ai-brain-logs',
      usedIn,
      code: content,  // Markdown全文
      prompt,
      relatedTech
    };
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
  }
}

// メイン処理
function main() {
  const aiLogsPath = '/mnt/c/ai-brain-logs';
  const outputPath = '/mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts';

  const categories = ['skills', 'decisions', 'workflows', 'design-patterns', 'failures', 'active-systems'];

  const technologies: Technology[] = [];
  const slugSet = new Set<string>();  // 重複チェック用

  for (const category of categories) {
    const categoryPath = path.join(aiLogsPath, category);

    if (!fs.existsSync(categoryPath)) {
      console.warn(`Category directory not found: ${categoryPath}`);
      continue;
    }

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
    console.log(`Processing ${files.length} files in ${category}...`);

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const tech = parseMarkdownFile(filePath, category);

      if (tech) {
        // slug重複チェック
        if (slugSet.has(tech.slug)) {
          console.warn(`Duplicate slug: ${tech.slug}, adding category prefix`);
          tech.slug = `${category}-${tech.slug}`;
        }
        slugSet.add(tech.slug);
        technologies.push(tech);
      }
    }
  }

  console.log(`\nTotal technologies converted: ${technologies.length}`);

  // TypeScriptファイルとして出力
  const output = `// Auto-generated from ai-brain-logs
// Generated at: ${new Date().toISOString()}
// Total: ${technologies.length} entries

import type { Technology } from './technologies';

export const aiBrainLogsTechnologies: Technology[] = ${JSON.stringify(technologies, null, 2)};
`;

  fs.writeFileSync(outputPath, output);
  console.log(`\nOutput written to: ${outputPath}`);

  // 統計情報
  const byCategory = technologies.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('\nBy category:');
  Object.entries(byCategory).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
  });

  const byProject = technologies.reduce((acc, t) => {
    acc[t.project] = (acc[t.project] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('\nBy project:');
  Object.entries(byProject).forEach(([proj, count]) => {
    console.log(`  ${proj}: ${count}`);
  });
}

main();
