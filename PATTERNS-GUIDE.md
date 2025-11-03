# パターン実装ガイド - Patterns Implementation Guide

このガイドでは、ベンチマーク画像からデザインパターンを抽出し、実装する方法を説明します。

---

## 📐 パターンとは？

**パターン**は、複数のプリミティブコンポーネントを組み合わせた、再利用可能なUIパターンです。

### Primitives vs Patterns vs Sections

```
Primitives（基本要素）
  ↓ 組み合わせ
Patterns（パターン）
  ↓ ページ固有の配置
Sections（セクション）
  ↓ 組み合わせ
Templates（テンプレート）
```

**例**:
- **Primitive**: Button, Card, Input
- **Pattern**: Hero（画像+オーバーレイ+テキスト+ボタン）
- **Section**: TopPageHero（Heroパターン + 特定のコンテンツ）
- **Template**: LandingPage（複数のSectionを組み合わせ）

---

## 🔍 ベンチマーク分析の手順

### Step 1: 画像を読み込む

```typescript
// 関連する画像をすべて読み込む
Read("/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/1.jpg")
Read("/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/2.jpg")
Read("/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/3.jpg")
```

### Step 2: レイアウト構造を分析

画像を見て、以下を記録：

#### 📏 レイアウト
- グリッド構造（1カラム、2カラム、3カラム？）
- 要素の配置（左寄せ、中央、右寄せ？）
- レスポンシブブレークポイント
- z-index（重なり順）

#### 🎨 カラースキーム
- 背景色
- テキスト色
- アクセントカラー
- グラデーション

#### 📝 タイポグラフィ
- フォントサイズ（大中小）
- フォントウェイト（bold, semibold, normal）
- 行間
- テキストの配置

#### 🔲 スペーシング
- padding（内側の余白）
- margin（外側の余白）
- gap（要素間の間隔）
- コンテナの幅

#### 💫 インタラクション
- ホバー効果
- トランジション
- アニメーション
- クリック可能な要素

### Step 3: コンポーネント構成を決定

使用するPrimitivesをリストアップ：
- Button
- Card
- Input
- Badge
- その他

### Step 4: プロップスを設計

どんなカスタマイズが必要か：
```typescript
interface HeroProps {
  // コンテンツ
  title: string;
  subtitle?: string;
  description?: string;

  // 画像
  backgroundImage: string;
  overlayOpacity?: number;

  // CTA
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;

  // スタイル
  variant?: 'default' | 'dark' | 'light';
  height?: 'sm' | 'md' | 'lg' | 'full';

  // レイアウト
  contentPosition?: 'left' | 'center' | 'right';
}
```

---

## 🎯 実装パターン別ガイド

### Pattern 1: Hero（ヒーローセクション）

**ベンチマーク**: `/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/1.jpg`

#### 分析チェックリスト
- [x] 背景画像の有無
- [x] オーバーレイの色と透過度
- [x] テキストの配置（左/中央/右）
- [x] タイトルのサイズと色
- [x] CTAボタンの有無
- [x] ナビゲーション（カルーセルなど）
- [x] 高さ（vh単位）

#### 抽出すべき要素

```markdown
## レイアウト
- 幅: 100vw（フルスクリーン）
- 高さ: 600px-700px（デスクトップ）
- position: relative（オーバーレイ用）

## 背景
- 背景画像: 工場や製品の写真
- オーバーレイ: rgba(0, 0, 0, 0.3-0.5)
- background-size: cover
- background-position: center

## テキスト
- 配置: 中央または左寄せ
- タイトル: 48-60px, font-weight: 800, 白色
- サブタイトル: 18-24px, 白色
- z-index: 10（画像の上）

## CTA
- ボタン: 大きめ（lg）
- 色: アクセントオレンジまたはプライマリブルー
- 配置: タイトルの下、適度な余白

## ナビゲーション
- 左右ボタン: 円形、青背景、矢印アイコン
- position: absolute
- 左: 20px, 右: 20px
- top: 50%（中央配置）
```

#### 実装テンプレート

```typescript
/**
 * Hero Pattern - ヒーローセクション
 *
 * デザイン意図:
 * - ページの第一印象を決定づける最重要セクション
 * - 視覚的インパクトでブランドメッセージを伝達
 * - 明確なCTAでユーザーアクションを促進
 */

import React from 'react';
import { Button } from '@/design-system/components/primitives';

export interface HeroProps {
  // ... プロップス定義
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  // ...
}: HeroProps) {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white mb-8">
              {subtitle}
            </p>
          )}
          {/* CTA */}
        </div>
      </div>
    </section>
  );
}

export const HeroDesignDocs = {
  // ... ドキュメント
};
```

---

### Pattern 2: CTA（行動喚起セクション）

**ベンチマーク**: `/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/footer.jpg`

#### 分析チェックリスト
- [x] 背景画像の有無
- [x] カラムレイアウト（2カラム、3カラム？）
- [x] 各カラムの背景色
- [x] アイコンの有無
- [x] テキスト内容（タイトル、説明）
- [x] CTAボタンのスタイル

#### 抽出すべき要素

```markdown
## レイアウト
- 2カラムレイアウト（50% / 50%）
- モバイル: 縦積み（100%）

## 背景
- 全体背景: 航空写真（暗めのオーバーレイ）
- 左カード: オレンジ背景（#FF6B35）
- 右カード: ブルー背景（#2563EB）

## カード
- padding: 48px-64px
- 丸角: rounded-lg
- 白文字
- アイコン: 上部に配置

## テキスト
- タイトル: 大きめ（32-40px）, bold
- 説明: 中サイズ（16-18px）
- すべて白色

## ボタン
- variant: outline（白ボーダー + 白文字）
- ホバー: 白背景 + カラー文字
```

#### 実装テンプレート

```typescript
export interface CTAProps {
  leftCard: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  rightCard: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  backgroundImage?: string;
}

export function CTA({ leftCard, rightCard, backgroundImage }: CTAProps) {
  return (
    <section className="relative py-0">
      {/* 背景 */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />

      {/* 2カラムレイアウト */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* 左カード: オレンジ */}
        <div className="bg-[#FF6B35] p-16 text-white text-center">
          {/* アイコン、タイトル、説明、ボタン */}
        </div>

        {/* 右カード: ブルー */}
        <div className="bg-[#2563EB] p-16 text-white text-center">
          {/* アイコン、タイトル、説明、ボタン */}
        </div>
      </div>
    </section>
  );
}
```

---

### Pattern 3: ContentCard（コンテンツカード）

**ベンチマーク**: `/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/2.jpg`, `3.jpg`

#### 分析チェックリスト
- [x] 画像の配置（左/右）
- [x] カードの配置（右/左）
- [x] 背景グラデーション
- [x] カードの影
- [x] テキスト内容
- [x] CTAボタン

#### 抽出すべき要素

```markdown
## レイアウト
- 2カラム: 画像 50% + カード 50%
- 交互配置: 左画像→右カード、右画像→左カード
- モバイル: 縦積み

## 背景
- グラデーション: ライトブルー系
- linear-gradient(135deg, #DBEAFE 0%, #FFFFFF 100%)

## 画像
- 丸角: rounded-lg
- aspect-ratio: 16/9または4/3
- object-fit: cover

## カード
- 白背景
- shadow-md
- padding: 32-48px
- 丸角: rounded-lg

## テキスト
- タイトル: 大きめ（32-36px）, bold
- 説明: 16-18px, グレー文字
- 行間: 広め（1.75）
```

#### 実装テンプレート

```typescript
export interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

export function ContentCard({
  title,
  description,
  image,
  imagePosition = 'left',
  backgroundColor = '#EFF6FF',
}: ContentCardProps) {
  return (
    <section
      className="py-20"
      style={{ background: backgroundColor }}
    >
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        }`}>
          {/* 画像 */}
          <div>
            <img
              src={image}
              alt={imageAlt}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* カード */}
          <Card variant="elevated" padding="lg">
            <CardTitle as="h2">{title}</CardTitle>
            <CardContent>{description}</CardContent>
            {/* CTA */}
          </Card>
        </div>
      </div>
    </section>
  );
}
```

---

### Pattern 4: Navigation（ナビゲーション）

**ベンチマーク**: `/mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/1.jpg` (上部)

#### 分析チェックリスト
- [x] ロゴの位置とサイズ
- [x] メニュー項目数
- [x] ドロップダウンの有無
- [x] CTAボタンの位置
- [x] 背景色
- [x] スティッキー（固定）の有無

#### 抽出すべき要素

```markdown
## レイアウト
- 横幅: 100%
- 高さ: 80px（デスクトップ）
- 左: ロゴ
- 中央: メニュー
- 右: CTAボタン

## スタイル
- 背景: 白
- border-bottom: 薄いグレー
- shadow: スクロール時に追加

## ロゴ
- サイズ: 高さ40-50px
- リンク: トップページ

## メニュー
- 横並び
- 間隔: 24px
- フォント: 16px, medium
- ホバー: 色変更（ブルー）

## ドロップダウン
- v アイコン
- ホバーで表示
- 白背景 + shadow

## CTAボタン
- variant: accent（オレンジ）
- size: md
- 固定位置（右端）
```

---

### Pattern 5: Form（フォーム）

**ベンチマーク**: `/mnt/c/WEBサイトUI/東海部品工業株式会社/contact/1.png`

#### 分析チェックリスト
- [x] フィールド数と種類
- [x] 必須フィールドの表示
- [x] レイアウト（1カラム/2カラム）
- [x] バリデーション表示
- [x] 送信ボタンのスタイル

#### 抽出すべき要素

```markdown
## レイアウト
- 1カラム（モバイル）
- 2カラム（一部フィールド、デスクトップ）
- max-width: 800px
- 中央配置

## フィールド
- 会社名・団体名: テキスト、必須
- お名前: テキスト、必須
- お名前（フリガナ）: テキスト、必須
- 電話番号: tel、必須
- メールアドレス: email、必須
- 郵便番号: テキスト
- 都道府県: セレクト
- 市区町村: テキスト
- 番地・建物名等: テキスト
- お問い合わせ内容: textarea、必須

## バリデーション
- リアルタイムバリデーション
- エラーメッセージ: 赤文字
- 成功メッセージ: 緑文字

## 送信ボタン
- variant: primary（ブルー）
- size: lg
- fullWidth
```

---

## 🎨 スタイリングのベストプラクティス

### Foundationsの活用

```typescript
// ❌ ハードコーディング
<div className="text-[#2563EB] p-6 mb-4">

// ✅ Foundationsを使用
import { colors, spacing } from '@/design-system/foundations'

<div style={{
  color: colors.primary.DEFAULT,
  padding: spacing[6],
  marginBottom: spacing[4],
}}>
```

### Tailwind CSSの使用

```typescript
// ✅ 推奨
<div className="text-primary bg-white p-6 rounded-lg shadow-md">

// 複雑なスタイルは配列で管理
const cardStyles = [
  'bg-white',
  'rounded-lg',
  'shadow-md',
  'p-6',
  'hover:shadow-xl',
  'transition-shadow',
  'duration-200',
].join(' ')
```

### レスポンシブデザイン

```typescript
// Tailwindのブレークポイント
<div className="
  w-full               // モバイル: 100%
  md:w-1/2             // タブレット: 50%
  lg:w-1/3             // デスクトップ: 33.3%
  xl:w-1/4             // 大画面: 25%
">
```

---

## ✅ 実装完了のチェックリスト

各パターン実装後、以下を確認：

### コード品質
- [ ] TypeScript型定義が完全
- [ ] プロップスに適切なデフォルト値
- [ ] エラーハンドリング実装
- [ ] 不要なコードの削除

### デザイン再現度
- [ ] ベンチマークと同じレイアウト
- [ ] 色が正確（Foundationsから取得）
- [ ] フォントサイズが適切
- [ ] スペーシングが一致

### レスポンシブ
- [ ] モバイル（375px-）で動作
- [ ] タブレット（768px-）で動作
- [ ] デスクトップ（1024px-）で動作

### アクセシビリティ
- [ ] セマンティックHTML
- [ ] ARIA属性（必要な場合）
- [ ] キーボード操作可能
- [ ] フォーカス状態が明確
- [ ] スクリーンリーダー対応

### ドキュメント
- [ ] DesignDocsが完備
- [ ] intent（意図）
- [ ] colorRationale（配色根拠）
- [ ] accessibility（アクセシビリティ）
- [ ] seo（SEO）
- [ ] llmo（LLMO）
- [ ] usage（使用例3つ以上）
- [ ] bestPractices（dos & donts）

### テスト
- [ ] ブラウザで表示確認
- [ ] 各プロップスの動作確認
- [ ] エッジケースの確認

---

## 📝 ドキュメント記述のテンプレート

```typescript
export const [ComponentName]DesignDocs = {
  intent: {
    title: 'デザイン意図',
    description: `
      このパターンは、[目的]のために設計されています。

      ## 主な目的
      1. [目的1]
      2. [目的2]
      3. [目的3]
    `,
  },

  benchmark: {
    source: '/mnt/c/WEBサイトUI/東海部品工業株式会社/[path]',
    analysis: '[ベンチマークの分析結果]',
  },

  layoutPattern: {
    structure: '[レイアウト構造の説明]',
    responsive: {
      mobile: '[モバイル時の挙動]',
      tablet: '[タブレット時の挙動]',
      desktop: '[デスクトップ時の挙動]',
    },
  },

  colorRationale: {
    background: {
      color: '[色コード]',
      reasoning: '[選定理由]',
    },
    // ...
  },

  typography: {
    title: {
      size: '[サイズ]',
      weight: '[ウェイト]',
      rationale: '[理由]',
    },
    // ...
  },

  spacing: {
    padding: '[値]',
    margin: '[値]',
    gap: '[値]',
    rationale: '[理由]',
  },

  accessibility: {
    features: [
      '[アクセシビリティ機能1]',
      '[アクセシビリティ機能2]',
    ],
    wcag: 'WCAG 2.1 AA準拠',
  },

  seo: {
    considerations: [
      '[SEO対策1]',
      '[SEO対策2]',
    ],
    structuredData: '[構造化データの内容]',
  },

  llmo: {
    optimization: [
      '[LLMO最適化1]',
      '[LLMO最適化2]',
    ],
  },

  usage: {
    examples: [
      {
        scenario: '[使用シーン1]',
        code: `[コード例]`,
        rationale: '[理由]',
      },
      // 最低3つ
    ],
  },

  bestPractices: {
    dos: [
      '[すべきこと1]',
      '[すべきこと2]',
    ],
    donts: [
      '[すべきでないこと1]',
      '[すべきでないこと2]',
    ],
  },

  performance: {
    optimization: [
      '[パフォーマンス最適化1]',
      '[パフォーマンス最適化2]',
    ],
  },
} as const;
```

---

## 🔄 次のステップ

1. **PROGRESS.mdを確認**: 次に実装するパターンを確認
2. **ベンチマーク画像を読み込み**: 該当するページの画像を分析
3. **このガイドに従って実装**: チェックリストを使用
4. **PROGRESS.mdを更新**: 完了をマーク

---

**重要**: パターン実装は、デザインシステムの核心部分です。丁寧に、完璧に実装しましょう！
