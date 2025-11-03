/**
 * デザインシステム - Foundations
 *
 * このファイルは、デザインシステムの基礎要素をすべてエクスポートします。
 * - カラーシステム（colors）
 * - タイポグラフィシステム（typography）
 * - スペーシングシステム（spacing）
 *
 * 使用方法:
 * ```typescript
 * import { colors, typography, spacing } from '@/design-system/foundations'
 * ```
 */

// カラーシステム
export {
  colors,
  colorSystemDocs,
  tailwindColors,
  type ColorSystem,
  type ColorSystemDocs,
} from './colors';

// タイポグラフィシステム
export {
  typography,
  typographyPresets,
  typographySystemDocs,
  type TypographySystem,
  type TypographyPresets,
  type TypographySystemDocs,
} from './typography';

// スペーシングシステム
export {
  spacing,
  spacingPatterns,
  spacingUtils,
  spacingSystemDocs,
  responsiveSpacing,
  type SpacingSystem,
  type SpacingPatterns,
  type SpacingSystemDocs,
} from './spacing';

/**
 * デザインシステムの完全なドキュメント
 */
export const designSystemDocs = {
  version: '1.0.0',
  lastUpdated: '2025-11-03',

  overview: {
    title: 'デザインシステム - ポートフォリオ級テンプレート集',
    description: `
      このデザインシステムは、単なるコピペ用テンプレートではなく、
      デザインの意図、配色の根拠、SEO対策、LLMO対応まで網羅した
      「教科書」兼「ポートフォリオ」です。

      ## 特徴

      ### 1. 体系的なデザイン思想
      - カラー、タイポグラフィ、スペーシングの一貫性
      - 心理学とアクセシビリティに基づく設計
      - ブランドアイデンティティの明確化

      ### 2. SEO・LLMO完全対応
      - セマンティックHTML
      - 構造化データ（JSON-LD）
      - メタタグ最適化
      - LLMが理解しやすいマークアップ

      ### 3. アクセシビリティ標準準拠
      - WCAG 2.1 AA基準
      - キーボード操作対応
      - スクリーンリーダー対応
      - カラーコントラスト比確保

      ### 4. パフォーマンス最適化
      - システムフォント優先
      - 最小限のCSS
      - 効率的なレイアウト

      ### 5. 完全なドキュメント
      - 各要素の使用意図を明記
      - デザイン決定の根拠を説明
      - コード例とベストプラクティス
    `,
  },

  structure: {
    title: 'システム構成',
    layers: [
      {
        name: 'Foundations（基礎）',
        description: 'カラー、タイポグラフィ、スペーシングなどの基本要素',
        files: [
          'colors.ts - カラーパレットと配色システム',
          'typography.ts - フォントとテキストスタイル',
          'spacing.ts - 余白とレイアウトシステム',
        ],
      },
      {
        name: 'Components（コンポーネント）',
        description: '再利用可能なUIコンポーネント',
        subdirectories: [
          'primitives/ - ボタン、入力フィールドなど基本要素',
          'patterns/ - カード、フォーム、ナビゲーション',
          'sections/ - ヒーロー、CTA、フッターなどセクション',
        ],
      },
      {
        name: 'Templates（テンプレート）',
        description: '完全なページテンプレート',
        types: [
          'landing-pages/ - ランディングページ',
          'corporate/ - コーポレートサイト',
        ],
      },
      {
        name: 'Docs（ドキュメント）',
        description: 'デザインガイドとベストプラクティス',
        contents: [
          'philosophy.mdx - デザイン哲学',
          'seo-guide.mdx - SEO対応ガイド',
          'llmo-guide.mdx - LLMO対応ガイド',
        ],
      },
    ],
  },

  principles: {
    title: 'デザイン原則',
    rules: [
      {
        principle: '一貫性（Consistency）',
        description: 'すべての要素で統一されたスタイルを維持',
        benefits: 'ユーザーの学習コストを削減、ブランド認知向上',
      },
      {
        principle: '階層性（Hierarchy）',
        description: 'サイズ、色、余白で情報の重要度を表現',
        benefits: 'スキャン可能性向上、情報伝達の効率化',
      },
      {
        principle: 'アクセシビリティ（Accessibility）',
        description: 'すべてのユーザーが利用可能なデザイン',
        benefits: 'リーチの拡大、法的リスク軽減、SEO向上',
      },
      {
        principle: 'パフォーマンス（Performance）',
        description: '高速な読み込みと快適な操作',
        benefits: 'ユーザー体験向上、検索ランキング向上',
      },
      {
        principle: 'スケーラビリティ（Scalability）',
        description: '拡張可能で保守しやすいシステム',
        benefits: '開発効率向上、長期的なコスト削減',
      },
    ],
  },

  workflow: {
    title: '開発ワークフロー',
    steps: [
      {
        step: 1,
        name: 'Foundationsから開始',
        description: 'カラー、タイポグラフィ、スペーシングを確認',
      },
      {
        step: 2,
        name: 'Primitivesを選択',
        description: '必要な基本コンポーネント（ボタン、入力など）を選択',
      },
      {
        step: 3,
        name: 'Patternsを組み合わせ',
        description: 'カード、フォームなどのパターンを組み合わせる',
      },
      {
        step: 4,
        name: 'Sectionsで構築',
        description: 'ヒーロー、CTA、フッターでページ構造を作る',
      },
      {
        step: 5,
        name: 'Templatesをカスタマイズ',
        description: '完全なテンプレートをベースに独自デザインを追加',
      },
    ],
  },

  seoLlmo: {
    title: 'SEO・LLMO対応戦略',
    strategies: [
      {
        category: 'セマンティックHTML',
        techniques: [
          '適切なHTML5タグ（header, nav, main, article, section, footer）',
          '見出し階層の正確性（h1→h2→h3）',
          'altテキストとaria-label',
        ],
      },
      {
        category: '構造化データ',
        techniques: [
          'JSON-LD形式（FAQPage, BreadcrumbList, Organization等）',
          'Schema.orgボキャブラリ',
          'リッチリザルト対応',
        ],
      },
      {
        category: 'メタ情報',
        techniques: [
          'タイトルタグ最適化（60字以内）',
          'メタディスクリプション（160字以内）',
          'OGPタグ（SNSシェア最適化）',
        ],
      },
      {
        category: 'コンテンツ最適化',
        techniques: [
          '明確で簡潔な文章',
          '適切なキーワード密度（2-3%）',
          '読みやすい段落構成',
        ],
      },
      {
        category: 'LLMO（LLM最適化）',
        techniques: [
          '明確な見出しと構造',
          '要約セクションの配置',
          'FAQコンテンツの追加',
          '引用と参照の明記',
        ],
      },
    ],
  },

  benchmarks: {
    title: 'ベンチマーク分析',
    source: '東海部品工業株式会社のコーポレートサイト',
    insights: [
      {
        element: 'カラースキーム',
        observation: 'プライマリブルー + アクセントオレンジの対比',
        rationale: '信頼感（ブルー）と行動喚起（オレンジ）の両立',
        application: 'B2B企業に最適な配色パターン',
      },
      {
        element: 'レイアウトパターン',
        observation: '左右交互の画像+カードレイアウト',
        rationale: '視覚的リズム、スキャン可能性の向上',
        application: 'サービス紹介、機能一覧に効果的',
      },
      {
        element: 'ヒーローデザイン',
        observation: 'フルスクリーンカルーセル + オーバーレイテキスト',
        rationale: '強いビジュアルインパクト、ブランディング',
        application: 'コーポレートサイトのトップページ',
      },
      {
        element: 'CTAデザイン',
        observation: '2カラムCTA（RECRUIT/CONTACT）',
        rationale: '明確な行動選択肢、視覚的バランス',
        application: 'ページ下部の誘導セクション',
      },
    ],
  },

  resources: {
    title: '参考リソース',
    links: [
      {
        name: 'WCAG 2.1 ガイドライン',
        description: 'アクセシビリティ標準',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/',
      },
      {
        name: 'Schema.org',
        description: '構造化データのボキャブラリ',
        url: 'https://schema.org/',
      },
      {
        name: 'Google Search Central',
        description: 'SEOベストプラクティス',
        url: 'https://developers.google.com/search/docs',
      },
      {
        name: 'Material Design',
        description: 'デザインシステムの参考',
        url: 'https://material.io/design',
      },
    ],
  },
} as const;

/**
 * クイックスタートガイド
 */
export const quickStart = `
# クイックスタート

## 1. インストール

\`\`\`bash
# プロジェクトのセットアップ（Next.js + Tailwind CSS）
npx create-next-app@latest my-project --typescript --tailwind
cd my-project
\`\`\`

## 2. デザインシステムのインポート

\`\`\`typescript
// src/app/layout.tsx
import { colors, typography, spacing } from '@/design-system/foundations'

export default function RootLayout({ children }) {
  return (
    <html lang="ja" style={{
      fontFamily: typography.fontFamily.sans,
      color: colors.neutral[800],
    }}>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

## 3. Tailwind設定の拡張

\`\`\`javascript
// tailwind.config.js
import { tailwindColors } from './src/design-system/foundations/colors'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
}
\`\`\`

## 4. コンポーネントの使用

\`\`\`typescript
import { Button } from '@/design-system/components/primitives/Button'

export default function Page() {
  return <Button variant="primary">お問い合わせ</Button>
}
\`\`\`
` as const;

// デフォルトエクスポート
export default {
  colors,
  typography,
  spacing,
  docs: designSystemDocs,
  quickStart,
} as const;
