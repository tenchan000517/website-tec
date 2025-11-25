# ai-brain-logs 更新フロー

**目的**: ai-brain-logsに新しい知識が追加されたとき、web-template-libraryのUIに反映する手順

---

## クイックコマンド（1行で実行）

```bash
cd /mnt/c/web-template-library && npx tsx scripts/convert-ai-brain-logs.ts && npm run build
```

---

## 詳細フロー

### ステップ1: 変換スクリプトを実行

```bash
cd /mnt/c/web-template-library
npx tsx scripts/convert-ai-brain-logs.ts
```

**出力例**:
```
Processing 103 files in skills...
Processing 77 files in decisions...
Processing 32 files in workflows...
Processing 6 files in design-patterns...
Processing 26 files in failures...
Processing 9 files in active-systems...

Total technologies converted: 253

Output written to: /mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts
```

### ステップ2: 動作確認（オプション）

```bash
npm run dev
# → http://localhost:3000/tech でアクセスして確認
```

### ステップ3: コミット & デプロイ

```bash
git add src/data/ai-brain-logs-technologies.ts
git commit -m "update: ai-brain-logs データを更新"
git push
vercel --prod
```

---

## 変換スクリプトの仕組み

**入力ディレクトリ**: `/mnt/c/ai-brain-logs/`
```
ai-brain-logs/
├── skills/           → Skills（スキル・手法）
├── decisions/        → Decisions（技術選定・判断）
├── workflows/        → Workflows（ワークフロー）
├── design-patterns/  → Design Patterns（設計パターン）
├── failures/         → Failures（失敗・トラブル対処）
└── active-systems/   → Active Systems（稼働中システム）
```

**出力ファイル**: `/mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts`

**変換内容**:
| ai-brain-logs | technologies.ts |
|--------------|-----------------|
| ファイル名 | `slug` |
| `# タイトル` | `title` |
| フォルダ名 | `category` |
| `## 何をする*` セクション | `description` |
| `source_project` | `project` |
| `source_file` | `usedIn` |
| Markdown全文 | `code` |
| `## 再現方法` セクション | `prompt` |
| `related_knowledge` | `relatedTech` |

---

## トラブルシューティング

### Q1: 変換後の件数が合わない

```bash
# ai-brain-logsの件数を確認
find /mnt/c/ai-brain-logs -name "*.md" | wc -l

# 変換後の件数を確認
grep '"slug"' /mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts | wc -l
```

### Q2: 特定のファイルが変換されない

JSONメタデータがない、または不正な形式の可能性があります。

```bash
# 変換スクリプトを実行するとwarningが出力されます
npx tsx scripts/convert-ai-brain-logs.ts 2>&1 | grep -i warn
```

### Q3: slug重複エラー

同名ファイルがある場合、カテゴリープレフィックスが自動追加されます。
```
Duplicate slug: tech-nextjs-15-app-router, adding category prefix
→ decisions-tech-nextjs-15-app-router
```

### Q4: ビルドエラー

```bash
# TypeScript型エラーの場合
npm run build 2>&1 | head -50

# 大抵はai-brain-logs-technologies.tsの再生成で解決
npx tsx scripts/convert-ai-brain-logs.ts
```

---

## 自動化（オプション）

### GitHub Actionsで自動更新

`.github/workflows/update-ai-brain-logs.yml`:
```yaml
name: Update AI Brain Logs

on:
  repository_dispatch:
    types: [ai-brain-logs-updated]
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Clone ai-brain-logs
        run: |
          git clone https://github.com/YOUR_USER/ai-brain-logs.git /tmp/ai-brain-logs

      - name: Run conversion
        run: |
          npx tsx scripts/convert-ai-brain-logs.ts

      - name: Commit and push
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add src/data/ai-brain-logs-technologies.ts
          git commit -m "update: ai-brain-logs データを自動更新" || exit 0
          git push
```

---

## 関連ファイル

| ファイル | 説明 |
|---------|------|
| `scripts/convert-ai-brain-logs.ts` | 変換スクリプト |
| `src/data/ai-brain-logs-technologies.ts` | 変換後のデータ（自動生成） |
| `src/data/technologies.ts` | データ統合（インポート元） |
| `src/app/tech/page.tsx` | 一覧表示ページ |
| `src/app/tech/[slug]/page.tsx` | 詳細表示ページ |
| `src/components/MarkdownContent.tsx` | Markdown表示コンポーネント |

---

## 更新履歴

| 日付 | 件数 | 備考 |
|-----|------|------|
| 2025-11-25 | 253件 | 初回統合（5プロジェクト分） |

---

**このドキュメントに従えば、ai-brain-logsの更新をUIに反映できます。**
