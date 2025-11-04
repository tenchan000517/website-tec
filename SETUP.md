# Web Template Library - セットアップガイド

**作成日**: 2025-11-04
**対象**: 新規環境でのプロジェクトセットアップ

---

## プロジェクト概要

**プロジェクト名**: Web Template Library
**コンセプト**: 個人的な技術アーカイブ - 作品の完全実装コレクション
**技術スタック**: Next.js 16 + TypeScript + Tailwind CSS 4
**Node.js**: v20以上推奨

---

## セットアップ手順

### 1. プロジェクトディレクトリに移動

```bash
cd /mnt/c/web-template-library
```

### 2. 依存パッケージのインストール

```bash
npm install
```

インストールされる主なパッケージ：
- Next.js 16.0.1
- React 19.2.0
- Tailwind CSS 4.0
- TypeScript 5.x
- lucide-react（アイコンライブラリ）

### 3. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動したら、ブラウザで以下にアクセス：
- **ホーム**: http://localhost:3000
- **技術一覧**: http://localhost:3000/tech
- **東海部品工業サイト**: http://localhost:3000/works/tokai-parts-industry
- **東海部品工業技術一覧**: http://localhost:3000/works/tokai-parts-industry/tech

### 4. ビルド確認（本番環境用）

```bash
npm run build
npm start
```

---

## プロジェクト構造

```
web-template-library/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # ホームページ
│   │   ├── tech/                     # 技術ドキュメント
│   │   │   ├── page.tsx              # 技術一覧
│   │   │   └── [slug]/page.tsx       # 技術詳細
│   │   └── works/                    # 作品集
│   │       └── tokai-parts-industry/ # 東海部品工業サイト
│   │           ├── page.tsx
│   │           ├── tech/             # プロジェクト専用技術ドキュメント
│   │           ├── recruit/          # リクルートページ
│   │           ├── about/            # 会社情報
│   │           ├── contact/          # お問い合わせ
│   │           └── ...
│   │
│   ├── components/
│   │   ├── CopyButton.tsx            # コピーボタンコンポーネント
│   │   └── works/
│   │       └── tokai-parts-industry/ # 作品専用コンポーネント
│   │
│   ├── data/
│   │   └── technologies.ts           # 技術データベース（59個）
│   │
│   └── design-system/
│       ├── foundations/              # カラー、タイポグラフィ等
│       └── components/primitives/    # 共通UIコンポーネント
│
├── public/
│   └── works/
│       └── tokai-parts-industry/
│           └── images/               # 作品の画像
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 利用可能なコマンド

### 開発

```bash
npm run dev          # 開発サーバー起動（http://localhost:3000）
```

### ビルド

```bash
npm run build        # 本番ビルド
npm start            # 本番サーバー起動
```

### リント

```bash
npm run lint         # ESLintでコードチェック
```

---

## 技術ドキュメントシステムの使い方

### 技術一覧を見る

```bash
# 開発サーバー起動後
open http://localhost:3000/tech
```

### 技術を検索する（Claude Code向け）

```bash
# 特定の技術を検索
grep "@technique フェードアップアニメーション" /mnt/c/web-template-library/src/app/works/

# カテゴリで検索
grep "@category 製造業" /mnt/c/web-template-library/src/app/works/

# プロジェクトで検索
grep "project: \"tokai-parts-industry\"" /mnt/c/web-template-library/src/data/technologies.ts
```

### 新しい技術を追加する

1. `src/data/technologies.ts` を開く
2. 新しい技術オブジェクトを追加
3. `TECH-DOC-PROGRESS.md` を更新

詳細は `TECH-DOC-QUICK-START.md` を参照

---

## 新しい作品を追加する手順

### 1. 作品ディレクトリの作成

```bash
mkdir -p src/app/works/[作品名]
mkdir -p src/components/works/[作品名]
mkdir -p public/works/[作品名]/images
```

### 2. ページの作成

```bash
# src/app/works/[作品名]/page.tsx を作成
# 完全実装 + タグ付き
```

### 3. 技術データの追加

```typescript
// src/data/technologies.ts に技術を追加
{
  slug: 'example-tech',
  title: '技術名',
  description: '技術の説明',
  category: 'UIコンポーネント',
  project: '[作品名]',
  code: '実装コード',
  claudeInstruction: 'Claude Codeへの指示文',
  preview: 'HTMLプレビュー（任意）',
  relatedTech: []
}
```

### 4. 進捗の更新

`PROGRESS.md` を更新

---

## トラブルシューティング

### ビルドエラーが発生する

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSSが適用されない

```bash
# キャッシュをクリア
rm -rf .next
npm run dev
```

### TypeScriptエラーが多発する

```bash
# 型チェック
npm run lint
```

---

## 環境要件

- **Node.js**: v20以上
- **npm**: v10以上
- **OS**: Windows（WSL2）、macOS、Linux

---

## 関連ドキュメント

| ドキュメント | 説明 |
|---|---|
| **[README.md](./README.md)** | プロジェクト概要 |
| **[TECH-DOC-QUICK-START.md](./TECH-DOC-QUICK-START.md)** | 技術ドキュメント作業手順 |
| **[TECH-DOC-PLAN.md](./TECH-DOC-PLAN.md)** | 技術ドキュメント全体計画 |
| **[TECH-DOC-PROGRESS.md](./TECH-DOC-PROGRESS.md)** | 技術ドキュメント進捗 |
| **[PROGRESS.md](./PROGRESS.md)** | プロジェクト全体の進捗 |

---

## 次のステップ

セットアップが完了したら：

1. **技術ドキュメントを見る**: http://localhost:3000/tech
2. **作品を見る**: http://localhost:3000/works/tokai-parts-industry
3. **技術を追加する**: `TECH-DOC-QUICK-START.md` を参照
4. **新しい作品を追加する**: 上記の手順を参照

---

**セットアップ完了！開発を開始できます。**
