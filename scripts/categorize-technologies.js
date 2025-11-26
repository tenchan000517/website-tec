/**
 * 技術データのカテゴリを新体系に分類するスクリプト
 *
 * タブ構成:
 * 1. UIパーツ - 見た目のコードをコピペしたい時
 * 2. フロントエンド - Next.js/Reactの実装方法を探したい時
 * 3. API連携 - 外部サービスとの連携方法を探したい時
 * 4. AI生成 - AI機能を実装したい時
 * 5. サービス別 - 特定サービス向けの実装を探したい時
 * 6. ナレッジ - 判断理由・トラブル対処を探したい時
 */

const fs = require('fs');
const path = require('path');

// 分類ルール定義
const classificationRules = {
  // タブ1: UIパーツ
  uiParts: {
    tab: 'UIパーツ',
    // 既存カテゴリからの判定
    existingCategories: [
      'UIコンポーネント',
      'デザイン・ビジュアル',
      'レイアウト・構造',
      'アニメーション',
      'UI/UX',
      'フォーム',
      'インタラクション',
      'デザインカンプ・モックアップ',
      'ワイヤーフレイム・設計'
    ],
    // Skills系でもUIに関連するキーワード
    keywords: ['スクロール連動', 'スライダー', 'カルーセル', 'アコーディオン', 'モーダル', 'ドロップダウン', 'tooltip', 'badge', 'バッジ', 'tab', 'タブ', 'html2canvas', 'canvas api', 'svg', 'cssグラデーション', 'cssアニメーション', 'プログレスバー', 'ステータス色'],
    subCategories: {
      'ボタン・CTA': ['button', 'cta', 'ボタン', 'btn'],
      'ナビゲーション': ['nav', 'menu', 'ナビ', 'ヘッダー', 'フッター', 'header', 'footer', 'hamburger', 'ハンバーガー', 'scroll', 'スクロール'],
      'カード・リスト': ['card', 'カード', 'リスト', 'list', 'grid', 'グリッド', 'table', 'テーブル'],
      'レイアウト': ['layout', 'カラム', 'column', 'レイアウト', 'section', 'セクション', '2カラム', '3カラム', 'sidebar', 'サイドバー'],
      'エフェクト': ['animation', 'gradient', 'アニメーション', 'グラデーション', 'effect', 'エフェクト', 'transition', 'glassmorphism', 'wave', 'overlay', 'オーバーレイ', 'フェード', 'fade']
    }
  },

  // タブ2: フロントエンド
  frontend: {
    tab: 'フロントエンド',
    keywords: ['next.js', 'react', 'tailwind', 'zustand', 'redux', 'context', 'hook', 'useState', 'useEffect', 'styled-jsx', 'typescript', 'ssg', 'ssr', 'server component', 'client component', 'app router', 'radix ui', 'shadcn', 'prosemirror', 'pwa', 'manifest', 'デザインシステム', 'design system', 'primitives', 'mdx', 'markdown', 'remark', 'zod', 'バリデーション', 'validation', 'json-ld', 'seo', 'ogp', 'metadata', 'sitemap', 'robots.txt'],
    existingCategories: ['技術スタック', 'セットアップ・環境構築'],
    subCategories: {
      'Next.js': ['next.js', 'app router', 'ssg', 'ssr', 'server component', 'client component', 'metadata', 'routing', 'mdx', 'sitemap', 'robots'],
      'React': ['react', 'hook', 'useState', 'useEffect', 'useRef', 'useMemo', 'component', 'radix', 'shadcn', 'prosemirror'],
      'Tailwind CSS': ['tailwind', 'css', 'スタイル', 'カラー', 'theme', 'テーマ', 'responsive', 'レスポンシブ', 'デザインシステム', 'design system', 'design token'],
      '状態管理': ['zustand', 'redux', 'context', 'localstorage', '状態', 'state'],
      'SEO・メタデータ': ['seo', 'ogp', 'json-ld', 'metadata', '構造化データ', 'sitemap']
    }
  },

  // タブ3: API連携
  apiIntegration: {
    tab: 'API連携',
    keywords: ['google sheets', 'spreadsheet', 'gas', 'apps script', 'api route', 'webhook', 'axios', 'fetch', 'cognito', 'nextauth', 'auth', '認証', 'lambda', 'dynamodb', 'api gateway', 'ec2', 'aws', 'キャッシュ', 'cache', 'arrayformula', 'countif', 'sumif', 'filter関数', 'index関数', 'シート', 'スプレッドシート', 'urlエンコード'],
    subCategories: {
      'Google連携': ['google sheets', 'spreadsheet', 'gas', 'apps script', 'google drive', 'google forms', 'google analytics', 'arrayformula', 'countif', 'sumif', 'filter関数', 'index関数', 'シート', 'スプレッドシート'],
      '外部API': ['api route', 'webhook', 'axios', 'fetch', 'http', 'エンドポイント', 'endpoint', 'リクエスト', 'レスポンス'],
      '認証': ['auth', 'cognito', 'nextauth', '認証', 'security', 'セキュリティ', 'permission', 'role', 'アクセス制御'],
      'AWS': ['lambda', 'dynamodb', 'api gateway', 'ec2', 's3', 'cognito', 'cloudfront', 'websocket'],
      'キャッシュ': ['cache', 'キャッシュ', 'ttl', 'プリロード', 'メモリ']
    }
  },

  // タブ4: AI生成
  aiGeneration: {
    tab: 'AI生成',
    keywords: ['gemini', 'openai', 'gpt', 'llm', 'ai', 'claude', 'プロンプト', 'prompt', '生成', 'generation', 'temperature', 'token', '自動生成', 'aiフィードバック', 'jsonパース', 'aiレスポンス', '章生成', '品質評価', 'コンテキスト', '8大システム', '統合記憶', 'キャラクター成長', '伏線', 'foreshadow', '感情', 'emotion', 'ストーリー', 'story', 'plot', 'プロット', 'シーン', 'scene'],
    subCategories: {
      'プロンプト設計': ['prompt', 'プロンプト', 'template', 'テンプレート', '指示文', 'コンテキスト', 'context'],
      '画像生成': ['画像生成', 'image', 'マンガ', 'manga', 'キャラクター', 'character', 'イラスト', 'illustration', 'visual', 'レイヤー', 'layer', 'キャンバス'],
      'テキスト生成': ['テキスト生成', 'text generation', '小説', 'novel', 'ブログ', 'blog', 'キャプション', 'caption', '記事', 'article', '章生成', 'chapter', 'シーン', 'scene', 'ストーリー'],
      '品質・分析': ['品質', 'quality', '評価', 'evaluation', '分析', 'analysis', '一貫性', 'consistency', 'フィードバック', 'feedback', '伏線', 'foreshadow'],
      'システム統合': ['8大システム', '統合記憶', 'memory', '7サービス', 'キャラクターシステム', '感情アーク', 'emotion']
    }
  },

  // タブ5: サービス別
  serviceSpecific: {
    tab: 'サービス別',
    keywords: ['discord', 'instagram', 'インスタ', 'nft', 'web3', 'wallet', 'ethers', 'blockchain', 'stripe', 'payment', '決済', 'placid', 'youtube', 'pdf', 'jspdf', 'jszip', 'github actions', 'cron'],
    subCategories: {
      'Discord Bot': ['discord', 'bot', 'ガチャ', 'gacha', 'ポイント', 'point', 'cog', 'バトル'],
      'Instagram': ['instagram', 'インスタ', 'post', '投稿', 'hashtag', 'ハッシュタグ', 'reel', 'リール', '1080'],
      'NFT・Web3': ['nft', 'web3', 'wallet', 'ethers', 'blockchain', 'mint', 'token', 'contract', 'opensea', 'magiceden', 'multichain', 'チェーン'],
      'Stripe決済': ['stripe', 'payment', '決済', 'checkout', 'intent'],
      'ファイル処理': ['pdf', 'jspdf', 'jszip', 'zip', 'download', 'ダウンロード', 'エクスポート', 'export'],
      '自動化': ['github actions', 'cron', '自動', 'automation', 'placid', 'video', '動画']
    }
  },

  // タブ6: ナレッジ
  knowledge: {
    tab: 'ナレッジ',
    existingCategories: [
      'Decisions（技術選定・判断）',
      'Workflows（ワークフロー）',
      'Failures（失敗・トラブル対処）',
      'Design Patterns（設計パターン）',
      'Active Systems（稼働中システム）'
    ],
    // Skills系でもナレッジ的なものを拾う
    keywords: ['リサーチ', 'research', 'セールス', 'sales', '営業', 'バイアス', 'データ根拠', '仮説', '信頼性', 'ドキュメント', 'ドキュメンテーション', '引き継ぎ', '命名規則'],
    subCategories: {
      '技術選定': ['Decisions', '選択', '選定', 'vs', '比較', '判断', '理由'],
      'エラー対処': ['Failures', 'エラー', 'error', '問題', '失敗', 'トラブル', '対処', '解決'],
      'ワークフロー': ['Workflows', 'フロー', 'flow', '手順', 'プロセス', 'process', '作成', '構築'],
      '設計パターン': ['Design Patterns', 'Active Systems', 'アーキテクチャ', 'architecture', 'パターン', 'pattern', '設計'],
      'リサーチ・分析': ['リサーチ', 'research', 'バイアス', 'データ根拠', '仮説', '信頼性', 'セールス', '営業']
    }
  }
};

/**
 * テキストに対してキーワードが含まれるかチェック
 */
function containsKeyword(text, keywords) {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  return keywords.some(kw => lowerText.includes(kw.toLowerCase()));
}

/**
 * 技術データを分類する
 */
function classifyTechnology(tech) {
  const { title, category, description } = tech;
  const searchText = `${title} ${category} ${description || ''}`.toLowerCase();

  // 1. 既存カテゴリでナレッジ系を判定
  if (classificationRules.knowledge.existingCategories.some(c => category.includes(c.split('（')[0]))) {
    let subCat = '技術選定'; // デフォルト
    if (category.includes('Workflows')) subCat = 'ワークフロー';
    if (category.includes('Failures')) subCat = 'エラー対処';
    if (category.includes('Design Patterns') || category.includes('Active Systems')) subCat = '設計パターン';
    return `ナレッジ > ${subCat}`;
  }

  // 2. 既存カテゴリでUIパーツ系を判定
  if (classificationRules.uiParts.existingCategories.some(c => category === c)) {
    // サブカテゴリ判定
    for (const [subCat, keywords] of Object.entries(classificationRules.uiParts.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `UIパーツ > ${subCat}`;
      }
    }
    return 'UIパーツ > その他';
  }

  // 3. サービス別を判定（優先度高め）
  if (containsKeyword(searchText, classificationRules.serviceSpecific.keywords)) {
    for (const [subCat, keywords] of Object.entries(classificationRules.serviceSpecific.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `サービス別 > ${subCat}`;
      }
    }
    return 'サービス別 > その他';
  }

  // 4. AI生成を判定
  if (containsKeyword(searchText, classificationRules.aiGeneration.keywords)) {
    for (const [subCat, keywords] of Object.entries(classificationRules.aiGeneration.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `AI生成 > ${subCat}`;
      }
    }
    return 'AI生成 > その他';
  }

  // 5. API連携を判定
  if (containsKeyword(searchText, classificationRules.apiIntegration.keywords)) {
    for (const [subCat, keywords] of Object.entries(classificationRules.apiIntegration.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `API連携 > ${subCat}`;
      }
    }
    return 'API連携 > その他';
  }

  // 6. UIパーツのキーワードで判定（Skills系からUI関連を拾う）
  if (containsKeyword(searchText, classificationRules.uiParts.keywords)) {
    for (const [subCat, keywords] of Object.entries(classificationRules.uiParts.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `UIパーツ > ${subCat}`;
      }
    }
    return 'UIパーツ > エフェクト';
  }

  // 7. ナレッジのキーワードで判定（Skills系からナレッジ関連を拾う）
  if (containsKeyword(searchText, classificationRules.knowledge.keywords)) {
    for (const [subCat, keywords] of Object.entries(classificationRules.knowledge.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `ナレッジ > ${subCat}`;
      }
    }
    return 'ナレッジ > リサーチ・分析';
  }

  // 8. フロントエンドを判定
  if (containsKeyword(searchText, classificationRules.frontend.keywords) ||
      classificationRules.frontend.existingCategories.some(c => category === c)) {
    for (const [subCat, keywords] of Object.entries(classificationRules.frontend.subCategories)) {
      if (containsKeyword(searchText, keywords)) {
        return `フロントエンド > ${subCat}`;
      }
    }
    return 'フロントエンド > その他';
  }

  // 9. どれにも当てはまらない場合は「開発スキル > その他」
  return `開発スキル > 汎用`;
}

/**
 * 分類結果をプレビュー表示
 */
function previewClassification(technologies) {
  const results = {};

  technologies.forEach(tech => {
    const newCategory = classifyTechnology(tech);
    if (!results[newCategory]) {
      results[newCategory] = [];
    }
    results[newCategory].push({
      title: tech.title,
      oldCategory: tech.category,
      project: tech.project
    });
  });

  // タブごとに集計
  const tabSummary = {};
  Object.keys(results).forEach(cat => {
    const tab = cat.split(' > ')[0];
    if (!tabSummary[tab]) tabSummary[tab] = { count: 0, subCategories: {} };
    tabSummary[tab].count += results[cat].length;

    const subCat = cat.split(' > ')[1] || 'なし';
    if (!tabSummary[tab].subCategories[subCat]) {
      tabSummary[tab].subCategories[subCat] = 0;
    }
    tabSummary[tab].subCategories[subCat] += results[cat].length;
  });

  console.log('\n=== カテゴリ分類プレビュー ===\n');

  Object.entries(tabSummary).sort((a, b) => b[1].count - a[1].count).forEach(([tab, data]) => {
    console.log(`\n【${tab}】 ${data.count}件`);
    Object.entries(data.subCategories).sort((a, b) => b[1] - a[1]).forEach(([subCat, count]) => {
      console.log(`  └ ${subCat}: ${count}件`);
    });
  });

  console.log('\n\n=== 詳細（各カテゴリの代表例）===\n');

  Object.entries(results).sort().forEach(([category, items]) => {
    console.log(`\n【${category}】 ${items.length}件`);
    items.slice(0, 3).forEach(item => {
      console.log(`  - ${item.title.substring(0, 50)}...`);
      console.log(`    (旧: ${item.oldCategory})`);
    });
    if (items.length > 3) {
      console.log(`  ... 他 ${items.length - 3}件`);
    }
  });

  return results;
}

/**
 * ファイルのカテゴリを更新する
 */
function updateFileCategories(filePath, isExisting = true) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // slugとtitleとcategoryを抽出してマッピングを作成
  const regex = isExisting
    ? /slug:\s*['"]([^'"]+)['"],\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*category:\s*['"]([^'"]+)['"]/g
    : /"slug":\s*"([^"]+)",\s*\n\s*"title":\s*"([^"]+)",\s*\n\s*"category":\s*"([^"]+)"/g;

  const updates = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    const title = match[2];
    const oldCategory = match[3];
    const newCategory = classifyTechnology({ slug, title, category: oldCategory, description: '' });

    if (oldCategory !== newCategory) {
      updates.push({ slug, title, oldCategory, newCategory });
    }
  }

  // カテゴリを置換
  updates.forEach(({ slug, oldCategory, newCategory }) => {
    if (isExisting) {
      // technologies.ts形式: category: 'xxx'
      const searchPattern = new RegExp(
        `(slug:\\s*['"]${escapeRegex(slug)}['"],\\s*\\n\\s*title:\\s*['"][^'"]+['"],\\s*\\n\\s*category:\\s*['"])${escapeRegex(oldCategory)}(['"])`,
        'g'
      );
      content = content.replace(searchPattern, `$1${newCategory}$2`);
    } else {
      // ai-brain-logs形式: "category": "xxx"
      const searchPattern = new RegExp(
        `("slug":\\s*"${escapeRegex(slug)}",\\s*\\n\\s*"title":\\s*"[^"]+",\\s*\\n\\s*"category":\\s*")${escapeRegex(oldCategory)}(")`,
        'g'
      );
      content = content.replace(searchPattern, `$1${newCategory}$2`);
    }
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  return updates.length;
}

/**
 * 正規表現の特殊文字をエスケープ
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// メイン処理
async function main() {
  const args = process.argv.slice(2);
  const shouldUpdate = args.includes('--update');

  const techFilePath = path.join(__dirname, '../src/data/technologies.ts');
  const brainLogsPath = path.join(__dirname, '../src/data/ai-brain-logs-technologies.ts');

  console.log('データファイルを読み込み中...');

  // TypeScriptファイルから配列データを抽出する簡易パーサー
  const extractTechData = (filePath, isExisting = true) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const results = [];

    // slugとtitleとcategoryを抽出
    const regex = isExisting
      ? /slug:\s*['"]([^'"]+)['"],\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*category:\s*['"]([^'"]+)['"]/g
      : /"slug":\s*"([^"]+)",\s*\n\s*"title":\s*"([^"]+)",\s*\n\s*"category":\s*"([^"]+)"/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
      results.push({
        slug: match[1],
        title: match[2],
        category: match[3],
        description: '' // 簡略化
      });
    }

    return results;
  };

  try {
    const existingTech = extractTechData(techFilePath, true);
    console.log(`technologies.ts から ${existingTech.length} 件読み込み`);

    const brainLogsTech = extractTechData(brainLogsPath, false);
    console.log(`ai-brain-logs-technologies.ts から ${brainLogsTech.length} 件読み込み`);

    const allTech = [...existingTech, ...brainLogsTech];
    console.log(`合計 ${allTech.length} 件`);

    if (shouldUpdate) {
      console.log('\n=== カテゴリを更新中... ===\n');

      const techUpdates = updateFileCategories(techFilePath, true);
      console.log(`technologies.ts: ${techUpdates} 件更新`);

      const brainLogsUpdates = updateFileCategories(brainLogsPath, false);
      console.log(`ai-brain-logs-technologies.ts: ${brainLogsUpdates} 件更新`);

      console.log('\n=== 更新完了 ===\n');
    } else {
      previewClassification(allTech);
      console.log('\n\n=== 実際に更新するには --update オプションを付けて実行してください ===');
      console.log('node scripts/categorize-technologies.js --update\n');
    }

  } catch (error) {
    console.error('エラー:', error.message);
    console.error(error.stack);
  }
}

main();
