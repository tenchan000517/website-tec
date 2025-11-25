# AI Brain Logs 統合 - 完全引き継ぎドキュメント

**作成日**: 2025-11-25
**対象**: 次世代Claude Code
**目的**: ai-brain-logsの253個の知識ファイルをweb-template-libraryのUIに統合表示する

---

## 🎯 このタスクの目的

88プロジェクト分析で蓄積した**253個の知識ファイル**（Skills, Decisions, Workflows, Design Patterns, Failures）を、web-template-libraryの既存UIシステムに統合し、検索可能・参照可能にする。

**期待される成果**:
- `/tech` ページで ai-brain-logs の知識を閲覧可能
- プロジェクトフィルター: "ai-brain-logs" で絞り込み可能
- 各知識に対して詳細ページ（/tech/[slug]）を表示
- Claude Code が Grep でタグ検索可能

---

## 📊 現状理解

### web-template-library の構造

```
web-template-library/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # ホーム（作品一覧）
│   │   ├── tech/
│   │   │   ├── page.tsx             # 技術一覧 ← ここに追加
│   │   │   └── [slug]/page.tsx      # 技術詳細 ← ここで表示
│   │   └── works/                   # 既存作品
│   │
│   ├── data/
│   │   └── technologies.ts          # 技術データ ← ここにデータ追加
│   │
│   └── components/                  # UIコンポーネント
│
└── public/
    └── works/                       # 作品画像
```

### ai-brain-logs の構造

```
ai-brain-logs/
├── skills/                          # 41ファイル（novel-automation-system-v2のみで）
│   ├── seo_blog_structure_2025_04_22.md
│   ├── eight_system_integrated_prompt_generation_2025_11_25.md
│   └── ...
│
├── decisions/                       # 27ファイル
│   ├── tech_nextjs_vs_vite_2025_04_22.md
│   ├── why_promise_allsettled_over_all_2025_11_25.md
│   └── ...
│
├── workflows/                       # 13ファイル
│   ├── blog_auto_generation_flow_2025_04_22.md
│   └── ...
│
├── design_patterns/                 # 7ファイル
├── failures/                        # 複数ファイル
├── active-systems/                  # 複数ファイル
│
└── projects/                        # プロジェクトインデックス
    ├── ai-blog-generator_index.json
    ├── novel-automation-system-v2_index.json
    └── ...
```

**合計**: 253ファイル（5プロジェクト分）

---

## 🔧 既存システムの仕組み

### technologies.ts のデータ構造

```typescript
// /src/data/technologies.ts
export interface Technology {
  slug: string;          // URL用（例: "seo-blog-structure"）
  title: string;         // 技術名
  category: string;      // カテゴリー（例: "UIコンポーネント"）
  description: string;   // 短い説明
  project: string;       // プロジェクト名（例: "tokai-parts-industry"）
  usedIn: string[];      // ファイルパス配列
  code: string;          // 実装コード全文
  prompt: string;        // Claude Code指示文
  setup?: string;        // セットアップ手順（オプション）
  preview?: string;      // プレビューHTML（オプション）
  relatedTech: string[]; // 関連技術のslug配列
}

export const technologies: Technology[] = [
  // ... 現在のデータ
];
```

### /tech ページの表示フロー

```
1. technologies.ts からデータ読み込み
   ↓
2. プロジェクトでフィルター（現在: tokai-parts-industry, watashi-no-kakugo）
   ↓
3. カテゴリーごとにグループ化
   ↓
4. 各技術をカードで表示（タイトル・説明・プロジェクト名）
   ↓
5. クリック → /tech/[slug] で詳細表示
```

### /tech/[slug] 詳細ページの構成

- **ヘッダー**: カテゴリー・タイトル・説明
- **使用場所**: `usedIn` 配列のファイルパス一覧
- **プレビュー**: `preview` HTMLを表示
- **実装コード**: `code` を表示 + Copyボタン
- **Claude Code指示文**: `prompt` を表示 + Copyボタン
- **セットアップ手順**: `setup` を表示（あれば）
- **関連技術**: `relatedTech` のリンク

---

## 📋 統合戦略

### ステップ1: データ変換スクリプトの作成

ai-brain-logsのMarkdownファイルを `Technology` インターフェースに変換するスクリプトを作成する。

**入力**: `/mnt/c/ai-brain-logs/**/*.md`
**出力**: `technologies.ts` に追加するデータ

**変換マッピング**:

| ai-brain-logs | technologies.ts | 変換方法 |
|--------------|----------------|---------|
| ファイル名 | `slug` | ファイル名をkebab-caseに変換 |
| `# タイトル` | `title` | Markdownの最初のh1 |
| ファイルタイプ（skills/decisions） | `category` | "Skills", "Decisions", "Workflows"等 |
| `## 何をするか` セクション | `description` | 該当セクションの内容 |
| JSONメタデータの `source_project` | `project` | 既存のまま使用 |
| JSONメタデータの `source_file` | `usedIn` | 配列として使用 |
| Markdownの全内容 | `code` | Markdown全文をコードとして保存 |
| `## 再現方法` セクション | `prompt` | Claude Code用の指示文として抽出 |
| なし | `setup` | 空（オプション） |
| なし | `preview` | 空（オプション） |
| JSONメタデータの `related_knowledge` | `relatedTech` | slug配列に変換 |

### ステップ2: カテゴリー体系の設計

既存カテゴリー（web-template-library）:
- UIコンポーネント
- レイアウト
- アニメーション
- SEO/LLMO
- コンテンツ戦略

**新規追加カテゴリー（ai-brain-logs）**:
- **Skills（スキル・手法）**
- **Decisions（技術選定・判断）**
- **Workflows（ワークフロー）**
- **Design Patterns（設計パターン）**
- **Failures（失敗・トラブル対処）**
- **Active Systems（稼働中システム）**

### ステップ3: プロジェクトフィルターの拡張

`/tech` ページの既存フィルター:
```typescript
const projects = ["tokai-parts-industry", "watashi-no-kakugo", "fujita-dengyo"];
```

**拡張後**:
```typescript
const projects = [
  "tokai-parts-industry",
  "watashi-no-kakugo",
  "fujita-dengyo",
  "ai-blog-generator",           // ai-brain-logs
  "ai-document-generator",        // ai-brain-logs
  "yumesuta-management-system",   // ai-brain-logs
  "instagram-post-generator",     // ai-brain-logs
  "novel-automation-system-v2"    // ai-brain-logs
];
```

---

## 🚀 実装タスク

### Phase 1: データ変換（優先度: 🔥 最高）

#### タスク1.1: 変換スクリプトの作成

**ファイル**: `/mnt/c/web-template-library/scripts/convert-ai-brain-logs.ts`

```typescript
// スクリプトの骨格
import fs from 'fs';
import path from 'path';

interface MarkdownFile {
  path: string;
  content: string;
  metadata: any; // JSONメタデータ
}

function parseMarkdownFile(filePath: string): MarkdownFile {
  // Markdownファイルを読み込み
  // JSONメタデータを抽出
  // 各セクションを抽出
}

function convertToTechnology(md: MarkdownFile): Technology {
  // MarkdownFile → Technology への変換
}

function main() {
  const aiLogsPath = '/mnt/c/ai-brain-logs';
  const categories = ['skills', 'decisions', 'workflows', 'design_patterns', 'failures'];

  const technologies: Technology[] = [];

  for (const category of categories) {
    const files = fs.readdirSync(path.join(aiLogsPath, category));

    for (const file of files) {
      if (file.endsWith('.md')) {
        const md = parseMarkdownFile(path.join(aiLogsPath, category, file));
        const tech = convertToTechnology(md);
        technologies.push(tech);
      }
    }
  }

  // technologies.ts に追記
  fs.writeFileSync(
    '/mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts',
    `export const aiBrainLogsTechnologies = ${JSON.stringify(technologies, null, 2)};`
  );
}
```

**実装手順**:
1. `/scripts` ディレクトリを作成
2. `convert-ai-brain-logs.ts` を作成
3. Markdownパーサーを実装（JSONメタデータ + 本文）
4. 変換ロジックを実装
5. テスト実行（10ファイル程度で検証）
6. 全253ファイルを変換

#### タスク1.2: 変換結果の検証

- [ ] 全253ファイルが変換されたか確認
- [ ] slug の重複がないか確認
- [ ] 必須フィールドがすべて埋まっているか確認
- [ ] related_knowledge のリンクが正しいか確認

### Phase 2: データ統合（優先度: 🔥 高）

#### タスク2.1: technologies.ts への統合

```typescript
// /src/data/technologies.ts
import { aiBrainLogsTechnologies } from './ai-brain-logs-technologies';

export const technologies: Technology[] = [
  ...existingTechnologies,  // 既存のweb-template-library技術
  ...aiBrainLogsTechnologies // ai-brain-logsの知識
];
```

#### タスク2.2: プロジェクトフィルターの更新

**ファイル**: `/src/app/tech/page.tsx`

```typescript
// プロジェクト一覧を拡張
const projects = [
  "すべて",
  "tokai-parts-industry",
  "watashi-no-kakugo",
  "fujita-dengyo",
  // --- ai-brain-logs プロジェクト ---
  "ai-blog-generator",
  "ai-document-generator",
  "yumesuta-management-system",
  "instagram-post-generator",
  "novel-automation-system-v2"
];
```

#### タスク2.3: カテゴリー表示の調整

ai-brain-logs のカテゴリーが正しく表示されるようCSSを調整（必要に応じて）。

### Phase 3: UI調整（優先度: 🟡 中）

#### タスク3.1: /tech ページのセクション分け

既存作品とai-brain-logsを視覚的に分離：

```typescript
<section>
  <h2>Web Template Library（作品から抽出）</h2>
  {/* 既存技術 */}
</section>

<section>
  <h2>AI Brain Logs（プロジェクト分析から抽出）</h2>
  {/* ai-brain-logs技術 */}
</section>
```

#### タスク3.2: 詳細ページのMarkdown表示対応

ai-brain-logs の `code` フィールドはMarkdown形式なので、適切にレンダリング：

```typescript
// /src/app/tech/[slug]/page.tsx
import ReactMarkdown from 'react-markdown';

// code フィールドの表示
<ReactMarkdown>{tech.code}</ReactMarkdown>
```

**必要なパッケージ**:
```bash
npm install react-markdown
```

#### タスク3.3: 検索機能の強化（オプション）

タグベースの検索を追加：

```typescript
// /src/app/tech/page.tsx
const [searchTag, setSearchTag] = useState('');

const filteredTech = technologies.filter(tech =>
  tech.code.includes(`@${searchTag}`)
);
```

### Phase 4: テストと検証（優先度: 🔥 高）

#### タスク4.1: ローカル確認

```bash
cd /mnt/c/web-template-library
npm run dev
# → http://localhost:3000/tech でアクセス
```

**確認項目**:
- [ ] 253個の知識が表示されるか
- [ ] プロジェクトフィルターが動作するか
- [ ] 各詳細ページ（/tech/[slug]）が正しく表示されるか
- [ ] Copyボタンが動作するか
- [ ] 関連技術のリンクが正しく動作するか
- [ ] Markdown表示が崩れていないか

#### タスク4.2: パフォーマンス確認

253個のデータで `technologies.ts` が重くなる可能性があるため：

- [ ] ページ読み込み速度を確認（< 2秒目標）
- [ ] 必要に応じて lazy loading や pagination を検討

---

## 📁 作成・変更が必要なファイル

### 新規作成

1. **`/scripts/convert-ai-brain-logs.ts`**
   - ai-brain-logsのMarkdownを変換するスクリプト

2. **`/src/data/ai-brain-logs-technologies.ts`**
   - 変換後のデータを格納

### 変更

1. **`/src/data/technologies.ts`**
   - ai-brain-logs-technologies をインポート・統合

2. **`/src/app/tech/page.tsx`**
   - プロジェクトフィルターを拡張
   - セクション分けを追加（オプション）

3. **`/src/app/tech/[slug]/page.tsx`**
   - Markdown表示対応（react-markdown使用）

4. **`/package.json`**
   - react-markdown を追加

---

## 🎨 表示イメージ

### /tech ページ

```
┌─────────────────────────────────────────────┐
│ 技術一覧                                     │
├─────────────────────────────────────────────┤
│ プロジェクト: [すべて ▼]                     │
│   - すべて                                   │
│   - tokai-parts-industry                    │
│   - novel-automation-system-v2 ← 新規追加   │
│   - ...                                     │
├─────────────────────────────────────────────┤
│                                             │
│ 【Skills】                                   │
│ ┌────────┐ ┌────────┐ ┌────────┐          │
│ │8大シス │ │APIスロ │ │統一メモ│          │
│ │テム統合│ │ットリン│ │リアクセ│          │
│ └────────┘ └────────┘ └────────┘          │
│                                             │
│ 【Decisions】                                │
│ ┌────────┐ ┌────────┐                      │
│ │Promise.│ │優先度キ│                      │
│ │allSett │ │ューのソ│                      │
│ └────────┘ └────────┘                      │
│                                             │
└─────────────────────────────────────────────┘
```

### /tech/[slug] 詳細ページ

```
┌─────────────────────────────────────────────┐
│ Skills > 8大システム統合プロンプト生成        │
├─────────────────────────────────────────────┤
│ プロジェクト: novel-automation-system-v2     │
│                                             │
│ ## 何をするスキルか                          │
│ 8つの独立したシステムから並列にデータを...   │
│                                             │
│ ## 具体的な手法                              │
│ [Markdownで全文表示]                         │
│                                             │
│ ┌─────────────────────────┐                │
│ │ Claude Code指示文       │ [Copy]         │
│ ├─────────────────────────┤                │
│ │ このスキルを再現するに... │                │
│ └─────────────────────────┘                │
│                                             │
│ 関連する知識:                                │
│ - decision_promise_allsettled_vs_all        │
│ - workflow_chapter_generation_full_flow     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🔍 検証チェックリスト

### データ変換の検証

- [ ] 253ファイルすべてが変換されたか
- [ ] slugに重複がないか
- [ ] 必須フィールド（title, category, description, project）がすべて埋まっているか
- [ ] relatedTech のslugが存在するか

### UI表示の検証

- [ ] /tech ページで253個の知識が表示されるか
- [ ] プロジェクトフィルターで正しく絞り込めるか
- [ ] カテゴリーごとにグループ化されているか
- [ ] 各カードにタイトル・説明・プロジェクト名が表示されるか

### 詳細ページの検証

- [ ] /tech/[slug] でMarkdownが正しく表示されるか
- [ ] Claude Code指示文が表示されるか
- [ ] Copyボタンが動作するか
- [ ] 関連知識のリンクが正しく動作するか
- [ ] 使用場所（source_file）が表示されるか

### パフォーマンスの検証

- [ ] ページ読み込み速度が2秒以内か
- [ ] フィルター・検索がスムーズに動作するか
- [ ] ブラウザのコンソールにエラーがないか

---

## 💡 実装のヒント

### Markdownパーサーのサンプル

```typescript
function parseMarkdownFile(filePath: string): MarkdownFile {
  const content = fs.readFileSync(filePath, 'utf-8');

  // JSONメタデータを抽出（```json ... ``` の部分）
  const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
  const metadata = jsonMatch ? JSON.parse(jsonMatch[1]) : {};

  // タイトルを抽出（最初の # 行）
  const titleMatch = content.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1] : '';

  // セクションを抽出
  const sections = {
    description: extractSection(content, '## 何をするか'),
    method: extractSection(content, '## 具体的な手法'),
    reason: extractSection(content, '## なぜこの手法を使うか'),
    reproduction: extractSection(content, '## 再現方法'),
    usage: extractSection(content, '## いつ使うか'),
    notes: extractSection(content, '## 注意点')
  };

  return { path: filePath, content, metadata, title, sections };
}

function extractSection(content: string, heading: string): string {
  const regex = new RegExp(`${heading}\\n([\\s\\S]*?)(?=\\n## |$)`);
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}
```

### slug生成のサンプル

```typescript
function generateSlug(fileName: string): string {
  // ファイル名から .md を除去
  // YYYY_MM_DD を除去
  // アンダースコアをハイフンに変換
  return fileName
    .replace('.md', '')
    .replace(/_\d{4}_\d{2}_\d{2}$/, '')
    .replace(/_/g, '-')
    .toLowerCase();
}

// 例:
// "eight_system_integrated_prompt_generation_2025_11_25.md"
// → "eight-system-integrated-prompt-generation"
```

---

## 🚨 注意事項

### 1. ファイルサイズ

253ファイルを1つの `technologies.ts` に統合すると、ファイルサイズが巨大になる可能性がある。

**対策**:
- プロジェクトごとに分割（例: `ai-blog-generator-technologies.ts`）
- dynamic import でlazy loading

### 2. Markdownの表示崩れ

ai-brain-logsのMarkdownにはコードブロック・テーブル・リストが含まれるため、react-markdownの設定を適切に行う。

```typescript
<ReactMarkdown
  components={{
    code: ({node, inline, className, children, ...props}) => (
      inline ?
        <code className="bg-gray-100 px-1 rounded">{children}</code> :
        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
          <code>{children}</code>
        </pre>
    )
  }}
>
  {tech.code}
</ReactMarkdown>
```

### 3. 関連知識のリンク

`related_knowledge` は元のファイル名を参照しているため、slugに変換する必要がある。

```typescript
// related_knowledge: ["decision_xxx.md"]
// ↓
// relatedTech: ["decision-xxx"]
```

---

## 📝 完了後の確認事項

- [ ] すべてのタスクが完了したか
- [ ] ローカルで正しく動作するか
- [ ] ドキュメントを更新したか（PROGRESS.md等）
- [ ] 次世代Claude Codeへの引き継ぎドキュメントを作成したか

---

**このドキュメントに従えば、暗黙知なしでai-brain-logsをweb-template-libraryに統合できます。** 🚀
