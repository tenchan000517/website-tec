# AI Brain Logs 統合 - クイックスタート

**次世代Claude Code へ - 最初に読むファイル**

---

## 📋 このタスクの全体像

**目的**: ai-brain-logsの253個の知識をweb-template-libraryのUIに統合表示

**現状**:
- ✅ ai-brain-logs: 253ファイル完成（5プロジェクト分）
- ✅ web-template-library: UIシステム完成（既存技術表示中）
- ⏳ 統合: 未着手（これから実装）

**完成イメージ**:
```
http://localhost:3000/tech
  ↓
[プロジェクト: novel-automation-system-v2]
  ↓
Skills: 8大システム統合プロンプト生成
       APIスロットリングと優先度キュー管理
       ...（253個の知識が検索可能）
```

---

## 🚀 作業の進め方（推奨順序）

### ステップ1: 引き継ぎドキュメントを読む（必須）

```bash
# 詳細な引き継ぎドキュメント
cat /mnt/c/web-template-library/AI-BRAIN-LOGS-INTEGRATION-HANDOVER.md
```

**読むべきセクション**:
1. 現状理解（ai-brain-logsとweb-template-libraryの構造）
2. 統合戦略（データ変換の方針）
3. 実装タスク（Phase 1-4の全タスク）

### ステップ2: データ変換スクリプトを作成

**目標**: ai-brain-logsのMarkdown → technologies.tsのデータ形式に変換

```bash
# 1. scriptsディレクトリを作成
mkdir -p /mnt/c/web-template-library/scripts

# 2. 変換スクリプトを作成
# → scripts/convert-ai-brain-logs.ts
```

**スクリプトの機能**:
- Markdownファイルを読み込み
- JSONメタデータを抽出
- Technology インターフェースに変換
- ai-brain-logs-technologies.ts に出力

**参考**: AI-BRAIN-LOGS-INTEGRATION-HANDOVER.md の「実装のヒント」セクション

### ステップ3: 変換を実行

```bash
cd /mnt/c/web-template-library
npx tsx scripts/convert-ai-brain-logs.ts
```

**確認**:
```bash
# 出力ファイルを確認
cat /mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts | head -50
```

### ステップ4: technologies.ts に統合

```typescript
// /src/data/technologies.ts
import { aiBrainLogsTechnologies } from './ai-brain-logs-technologies';

export const technologies: Technology[] = [
  ...existingTechnologies,
  ...aiBrainLogsTechnologies  // ← 追加
];
```

### ステップ5: UIを調整

**5.1 プロジェクトフィルターを拡張**

```typescript
// /src/app/tech/page.tsx
const projects = [
  "すべて",
  "tokai-parts-industry",
  "watashi-no-kakugo",
  // --- ai-brain-logs プロジェクト追加 ---
  "ai-blog-generator",
  "novel-automation-system-v2",
  // ...
];
```

**5.2 Markdown表示対応**

```bash
# react-markdownをインストール
npm install react-markdown
```

```typescript
// /src/app/tech/[slug]/page.tsx
import ReactMarkdown from 'react-markdown';

<ReactMarkdown>{tech.code}</ReactMarkdown>
```

### ステップ6: テスト

```bash
npm run dev
# → http://localhost:3000/tech
```

**確認項目**:
- [ ] 253個の知識が表示される
- [ ] プロジェクトフィルターが動作する
- [ ] 詳細ページが正しく表示される
- [ ] Copyボタンが動作する

---

## 📁 主要ファイル一覧

### 新規作成が必要

| ファイル | 説明 |
|---------|------|
| `scripts/convert-ai-brain-logs.ts` | Markdown変換スクリプト |
| `src/data/ai-brain-logs-technologies.ts` | 変換後のデータ |

### 変更が必要

| ファイル | 変更内容 |
|---------|---------|
| `src/data/technologies.ts` | aiBrainLogsTechnologies をインポート |
| `src/app/tech/page.tsx` | プロジェクトフィルター拡張 |
| `src/app/tech/[slug]/page.tsx` | Markdown表示対応 |
| `package.json` | react-markdown 追加 |

---

## 💡 実装のポイント

### 1. Markdownパーサー

```typescript
// JSONメタデータの抽出
const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
const metadata = JSON.parse(jsonMatch[1]);

// タイトルの抽出
const titleMatch = content.match(/^# (.+)$/m);
const title = titleMatch[1];
```

### 2. slug生成

```typescript
// ファイル名 → slug 変換
function generateSlug(fileName: string): string {
  return fileName
    .replace('.md', '')
    .replace(/_\d{4}_\d{2}_\d{2}$/, '')  // 日付除去
    .replace(/_/g, '-')                  // _ → -
    .toLowerCase();
}
```

### 3. related_knowledge の変換

```typescript
// related_knowledge: ["decision_xxx.md"]
// ↓ slug配列に変換
relatedTech: metadata.related_knowledge.map(generateSlug)
```

---

## 🎯 完了条件

- [ ] データ変換スクリプトが完成
- [ ] 253ファイルすべてが変換完了
- [ ] technologies.ts に統合完了
- [ ] UIで正しく表示される
- [ ] プロジェクトフィルターが動作する
- [ ] 詳細ページが正しく表示される
- [ ] パフォーマンスが問題ない（< 2秒）

---

## 🚨 困ったときは

### Q1: Markdownパーサーの書き方がわからない

A: AI-BRAIN-LOGS-INTEGRATION-HANDOVER.md の「実装のヒント」セクションにサンプルコードがあります。

### Q2: 変換結果の検証方法は？

A: 以下を確認：
```bash
# ファイル数確認
ls /mnt/c/ai-brain-logs/skills/*.md | wc -l
ls /mnt/c/ai-brain-logs/decisions/*.md | wc -l
# → 合計が253になるはず

# 変換後のデータ確認
cat /mnt/c/web-template-library/src/data/ai-brain-logs-technologies.ts | grep '"slug"' | wc -l
# → 253行あるはず
```

### Q3: UIが重くなったら？

A: データを分割：
```typescript
// プロジェクトごとに分割
import { novelTechnologies } from './novel-automation-system-v2-technologies';
import { blogTechnologies } from './ai-blog-generator-technologies';
```

---

## 📚 関連ドキュメント

| ドキュメント | 説明 |
|------------|------|
| **AI-BRAIN-LOGS-INTEGRATION-HANDOVER.md** | 詳細な引き継ぎドキュメント（必読） |
| PROGRESS.md | web-template-libraryの進捗管理 |
| README.md | プロジェクト概要 |
| `/mnt/c/ai-brain-logs/SESSION_HANDOFF.md` | ai-brain-logsの現状 |

---

**このドキュメントを読めば、すぐに実装を開始できます！** 🚀

**推奨作業時間**: 2-4時間（変換スクリプト1時間 + UI調整1時間 + テスト1時間）
