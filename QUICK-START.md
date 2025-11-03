# Web Template Library - Quick Start Guide

## 🎯 このシステムは何か

**個人的な技術アーカイブ - 作品の完全実装コレクション**

過去に実装したすべての技術・テクニック・デザインを、タグ付き・検索可能な形で保存するシステムです。

---

## 💡 基本概念

###「作品」とは

**すべてが作品です。**

1つのサイトには、100以上の「作品」が含まれます：
- サイト全体構成
- ページ構成
- 各セクションのレイアウト
- UI一つ一つ
- アニメーション
- SEO・LLMO実装
- 配色・フォント
- 画像の使い方
- コンテンツ構成
- 技術実装
- システム設計
- ...その他すべて

詳細: [WORKS-DEFINITION.md](./WORKS-DEFINITION.md)

### システムの流れ

```
作品画像/パスが共有される
  ↓
完全実装（全技術にタグ付き）
  ↓
Claude Codeが検索・参照
  ↓
即座に再利用・応用
```

---

## 📁 システム構造

```
/mnt/c/web-template-library/
├── src/
│   ├── design-system/           # 共通基盤
│   │   ├── foundations/         # ✅ カラー、タイポグラフィ、スペーシング
│   │   └── components/primitives/ # ✅ Button, Card, Input, Badge
│   │
│   └── app/                     # Next.js App Router
│       ├── page.tsx             # ルートページ
│       └── works/               # 🎨 作品コレクション
│           └── tokai-parts-industry/
│               ├── page.tsx      # TOPページ（タグ付き）
│               ├── recruit/page.tsx
│               └── contact/page.tsx
│
├── public/
│   └── works/
│       └── tokai-parts-industry/
│           └── images/          # 作品の画像
│
├── package.json                 # 単一のNext.jsプロジェクト
├── README.md                    # システム概要
├── WORKS-DEFINITION.md          # 作品の完全な定義
├── PROGRESS.md                  # 進捗管理
├── QUICK-START.md               # このファイル
└── BENCHMARK-ANALYSIS.md        # ベンチマーク分析
```

---

## 🚀 使い方

### Claude Codeとして作品を検索する

#### ユースケース1: 「フェードアップアニメーション」を探す
```bash
Grep "@technique フェードアップアニメーション" /mnt/c/web-template-library/src/app/works/
```

→ 該当する作品が見つかる → ファイルを開いて実装を確認

#### ユースケース2: 「製造業の採用ページ」を探す
```bash
Grep "@category 製造業" /mnt/c/web-template-library/src/app/works/
Grep "@content 採用特化" /mnt/c/web-template-library/src/app/works/
```

#### ユースケース3: 「LLMO対応」を参考にする
```bash
Grep "@llmo 構造化データ" /mnt/c/web-template-library/src/app/works/
```

### 作品を実際に見る

```bash
cd /mnt/c/web-template-library
npm run dev
# → http://localhost:3000/works/tokai-parts-industry でアクセス
```

---

## 📝 新しい作品の追加方法

### ステップ1: 作品情報を受け取る

```
ユーザーから:
- 作品の画像/パス
- 業種・目的などの情報
```

### ステップ2: ページディレクトリ作成

```bash
# 作品用のページディレクトリを作成
mkdir -p /mnt/c/web-template-library/src/app/works/[作品名]

# 画像ディレクトリを作成
mkdir -p /mnt/c/web-template-library/public/works/[作品名]/images
```

### ステップ3: 画像の配置

```bash
# 元画像をコピー
cp -r "/mnt/c/[画像パス]/"* \
     /mnt/c/web-template-library/public/works/[作品名]/images/
```

### ステップ4: 全ページ構成を確認

作品のすべてのページをリストアップ：

**例：東海部品工業（コーポレートサイト）の場合**
```
src/app/works/tokai-parts-industry/
├── page.tsx                    # TOPページ
├── about/page.tsx              # 会社情報
├── product/page.tsx            # 製品紹介
├── manufacturing/page.tsx      # TBKのクルマづくり
├── sustainability/page.tsx     # サステナビリティ
├── news/page.tsx               # お知らせ
├── recruit/page.tsx            # 採用情報
└── contact/page.tsx            # お問い合わせ
```

### ステップ5: 各ページを完全実装 + タグ付け

各ページファイルを作成し、タグ付けしながら実装：

```typescript
/**
 * @work [作品名] [ページ名]
 * @category [業種] [サイト種類]
 *
 * === レイアウト技術 ===
 * @technique セクション間重なり
 * @technique カード重なり
 * @technique コンテナ二重構造
 * @technique レスポンシブ：スマホ/1500以下/1500以上
 *
 * === アニメーション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 *
 * === SEO・LLMO ===
 * @seo 画像最適化
 * @seo メタデータキーワード選定
 * @llmo 構造化データ実装
 * @llmo robots.txt実装
 *
 * === デザイン ===
 * @design 配色：ブルー＋オレンジ
 * @design フォント：游ゴシック
 * @design 角丸：8px
 *
 * === UI要素 ===
 * @ui ドロップダウンメニュー
 * @ui 追従ヘッダー
 * @ui パララックス背景
 *
 * === コンテンツ ===
 * @content 採用特化
 * @content 先輩インタビュー
 * @content 数字・データ活用
 *
 * === パフォーマンス ===
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 */

export default function Page() {
  // 完全実装
  return (
    <div>
      {/* すべての技術を実装 */}
    </div>
  )
}
```

### ステップ6: PROGRESS.mdを更新

```markdown
## ✅ 完了した作品

### [作品名]
- [x] TOPページ
- [x] 全ページ実装
- タグ数: 100以上
```

---

## 🎯 タグ付けルール

### タグの種類

| タグ | 用途 | 例 |
|-----|------|-----|
| `@work` | 作品名とページ名 | `@work 東海部品工業 TOPページ` |
| `@category` | 業種・サイト種類 | `@category 製造業 コーポレートサイト` |
| `@technique` | レイアウト・技術 | `@technique セクション間重なり` |
| `@seo` | SEO対策 | `@seo 画像最適化` |
| `@llmo` | LLMO対応 | `@llmo 構造化データ実装` |
| `@design` | デザイン要素 | `@design 配色：ブルー＋オレンジ` |
| `@ui` | UI要素 | `@ui ドロップダウンメニュー` |
| `@content` | コンテンツ戦略 | `@content 採用特化` |
| `@performance` | パフォーマンス | `@performance ページスピード最適化` |

### タグの書き方

✅ **良い例**
```typescript
/**
 * @technique フェードアップアニメーション（再発火あり）
 */
```
- 具体的
- 日本語OK
- Claude Codeが検索しやすい

❌ **悪い例**
```typescript
/**
 * @technique アニメーション
 */
```
- 曖昧すぎる
- 検索で絞り込めない

---

## 🛠️ 開発環境

### 使用技術
- Next.js 16.0.0 (App Router)
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4

### 共通基盤の利用

作品実装時、Foundations/Primitivesを可能な限り再利用：

```typescript
// 共通基盤をインポート
import { colors, typography, spacing } from '@/design-system/foundations'
import { Button, Card, Input, Badge } from '@/design-system/components/primitives'

export default function Page() {
  return (
    <div style={{
      backgroundColor: colors.primary.DEFAULT,
      padding: spacing[6]
    }}>
      <Button variant="accent">お問い合わせ</Button>
    </div>
  )
}
```

### 作品専用のコンポーネント

作品特有のコンポーネントは、`src/components/works/[作品名]/` に実装：

```
src/
├── design-system/          # 共通基盤
└── components/
    └── works/
        └── tokai-parts-industry/
            ├── CarouselHero.tsx
            ├── ParallaxSection.tsx
            └── Header.tsx
```

---

## 📊 品質基準

### 必須事項
- [ ] すべての「作品」にタグが付いている（WORKS-DEFINITION.mdを参照）
- [ ] 完全に動作する（npm run devで確認可能）
- [ ] Foundations/Primitivesを可能な限り再利用
- [ ] Claude Codeが検索可能（タグが適切）

### タグ付け基準
- [ ] 100以上のタグ（1つのサイトの場合）
- [ ] 具体的なタグ名（曖昧NG）
- [ ] すべてのファイルにタグ
- [ ] 日本語でOK

---

## 🔄 作業の引き継ぎ

### 新しいセッションで開始する場合

1. **🚨 HANDOVER-CRITICAL.mdを必ず読む**
   ```bash
   cat /mnt/c/web-template-library/HANDOVER-CRITICAL.md
   ```
   - 現在の実装の問題点を把握
   - 残作業（80%）の詳細を確認

2. **PROGRESS.mdを確認**
   ```bash
   cat /mnt/c/web-template-library/PROGRESS.md
   ```
   - 現在の進捗: 約20%
   - 実装状況と未実装ページを確認

3. **WORKS-DEFINITION.mdを参照**
   ```bash
   cat /mnt/c/web-template-library/WORKS-DEFINITION.md
   ```
   - タグ付けすべき「作品」をすべて確認

4. **ベンチマーク画像を確認してから実装**
   - 必ず Read ツールで画像を表示
   - 画像を見ながら1セクションずつ実装
   - 絵文字は絶対に使用しない
   - 再現度80%以上を目指す

---

## 📞 困ったとき

### 作品の定義がわからない
→ [WORKS-DEFINITION.md](./WORKS-DEFINITION.md) を読む

### 進捗がわからない
→ [PROGRESS.md](./PROGRESS.md) を確認

### 作品の画像が見つからない
```bash
# ベンチマーク画像の確認
find "/mnt/c/WEBサイトUI/東海部品工業株式会社" -name "*.jpg" -o -name "*.png"

# プロジェクト内の画像確認
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/
```

### タグの付け方がわからない
→ このファイルの「タグ付けルール」セクションを参照

---

## 🎯 最終目標

```
作品1: 東海部品工業（100以上のタグ）
作品2: [今後追加]（さらに100以上）
作品3: [今後追加]（さらに...）
  ↓
技術的宝庫が無限に成長
  ↓
Claude Codeが即座に検索・参照
  ↓
次の案件で10倍速開発
```

---

**重要**: このシステムは、あなたの技術的資産です。丁寧に、完璧に実装しましょう。
