# Web Template Library

**個人的な技術アーカイブ - 作品の完全実装コレクション**

過去に実装したすべての技術・テクニック・デザインを、完全実装されたコードとして保存・検索可能にするシステム。

---

## 🎯 システムの目的

このシステムは、**個人の技術的宝庫**です。

### システムの本質

```
作品画像/パスの共有
  ↓
完全実装（全技術にタグ付き）
  ↓
Claude Codeが検索・参照
  ↓
即座に再利用・応用
```

### 「作品」の定義

**すべてが作品です。**

- サイト全体構成
- ページ構成
- 各セクションのレイアウト
- UI一つ一つの設計
- アニメーション
- SEO・LLMO実装
- 配色・フォント
- 画像の使い方
- コンテンツ構成
- 技術実装
- システム設計
- ...その他すべて

詳細: [WORKS-DEFINITION.md](./WORKS-DEFINITION.md)

---

## 📚 ドキュメント

| ドキュメント | 説明 |
|---|---|
| **🚨 [HANDOVER-CRITICAL.md](./HANDOVER-CRITICAL.md)** | **必読** - 現在の問題点と80%の残作業 |
| **[PROGRESS.md](./PROGRESS.md)** | 現在の進捗（20%）、次にやるべきこと |
| **[QUICK-START.md](./QUICK-START.md)** | システムの使い方、作品の追加方法 |
| **[WORKS-DEFINITION.md](./WORKS-DEFINITION.md)** | 「作品」の完全な定義リスト |

### 🚀 使い方

#### 作品を探す（Claude Code向け）
```bash
# 特定の技術を検索
Grep "@technique フェードアップアニメーション" /mnt/c/web-template-library/src/app/works/

# カテゴリで検索
Grep "@category 製造業" /mnt/c/web-template-library/src/app/works/

# SEO技術を検索
Grep "@seo" /mnt/c/web-template-library/src/app/works/
```

#### 作品を見る
```bash
cd /mnt/c/web-template-library
npm run dev
# → http://localhost:3000/works/tokai-parts-industry でアクセス
```

#### 新しい作品を追加
1. `src/app/works/[作品名]/` にページを作成
2. 完全実装 + タグ付き
3. PROGRESS.mdを更新

---

## 🏗️ システム構造

```
web-template-library/
├── src/
│   ├── design-system/
│   │   ├── foundations/           ✅ 共通基盤
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   └── spacing.ts
│   │   └── components/
│   │       └── primitives/        ✅ 共通コンポーネント
│   │           ├── Button.tsx
│   │           ├── Card.tsx
│   │           ├── Input.tsx
│   │           └── Badge.tsx
│   │
│   ├── components/
│   │   └── works/                 🎨 作品専用コンポーネント
│   │       └── tokai-parts-industry/
│   │
│   └── app/                       📄 Next.js App Router
│       ├── page.tsx               # ルートページ
│       └── works/
│           └── tokai-parts-industry/  🚧 実装中
│               ├── page.tsx       # TOPページ（タグ付き実装）
│               ├── recruit/page.tsx
│               └── contact/page.tsx
│
├── public/
│   └── works/
│       └── tokai-parts-industry/
│           └── images/            # 作品の画像
│
├── package.json                   # 単一のNext.jsプロジェクト
├── QUICK-START.md
├── WORKS-DEFINITION.md            ✅ 作品定義
├── PROGRESS.md
└── README.md                      ← このファイル
```

---

## 📊 現在の状況

```
✅ システム基盤    100% (Foundations + Primitives)
🚨 第1作品         20%  (東海部品工業) - 再実装必要
   ❌ 絵文字使用などのルール違反
   ❌ ベンチマーク画像の再現度20%以下
   ❌ 11+ページが未実装
⏳ 第2作品以降      0%   (今後追加)
```

**🚨 重要**: [HANDOVER-CRITICAL.md](./HANDOVER-CRITICAL.md) を必読

詳細: [PROGRESS.md](./PROGRESS.md)

---

## 🤝 次世代Claude Codeへ

**🚨 必ず最初に読むこと**: [HANDOVER-CRITICAL.md](./HANDOVER-CRITICAL.md)

新しいセッションで作業を開始する場合：

1. **[HANDOVER-CRITICAL.md](./HANDOVER-CRITICAL.md)** を熟読（必須）
2. [PROGRESS.md](./PROGRESS.md) で現在の進捗（20%）を確認
3. [WORKS-DEFINITION.md](./WORKS-DEFINITION.md) で「作品」の定義を理解
4. **ベンチマーク画像を見ながら**正確に実装
5. 絵文字は絶対に使用しない
6. 完了後、PROGRESS.mdを更新

詳細: [QUICK-START.md](./QUICK-START.md)

---

**作成日**: 2025-11-03
**最終更新**: 2025-11-03
**システム状態**: 基盤完成、第1作品20%完成（80%要再実装）
