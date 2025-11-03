/**
 * スペーシングシステム - Spacing System
 *
 * このファイルでは、デザインシステム全体で使用する余白（margin/padding）を定義します。
 * 一貫したスペーシングにより、視覚的リズムと整然としたレイアウトを実現します。
 */

export const spacing = {
  // =====================================
  // ベーススケール（Base Scale）
  // =====================================
  /**
   * ベース単位: 4px
   * 理由: 8pxグリッドシステムの半分
   * - 柔軟性と精密性のバランス
   * - ほとんどのデバイスで割り切れる
   */
  base: '0.25rem', // 4px

  // =====================================
  // スペーシングスケール（4の倍数）
  // =====================================
  0: '0',          // 0px
  1: '0.25rem',    // 4px  - 最小の余白
  2: '0.5rem',     // 8px  - 小さい余白
  3: '0.75rem',    // 12px - やや小さい余白
  4: '1rem',       // 16px - 標準余白
  5: '1.25rem',    // 20px - やや大きい余白
  6: '1.5rem',     // 24px - 中程度の余白
  8: '2rem',       // 32px - 大きい余白
  10: '2.5rem',    // 40px - より大きい余白
  12: '3rem',      // 48px - セクション間の余白
  16: '4rem',      // 64px - 大きなセクション間
  20: '5rem',      // 80px - 超大きな余白
  24: '6rem',      // 96px - ヒーローセクション
  32: '8rem',      // 128px - 特大の余白
  40: '10rem',     // 160px - 最大の余白
} as const;

/**
 * コンポーネント別のスペーシングパターン
 */
export const spacingPatterns = {
  // =====================================
  // コンテナ（Container）
  // =====================================
  container: {
    /**
     * 横幅のmax-width
     * 理由: 読みやすい行長を維持（75字前後）
     */
    maxWidth: {
      sm: '640px',   // スマートフォン
      md: '768px',   // タブレット
      lg: '1024px',  // ラップトップ
      xl: '1280px',  // デスクトップ
      '2xl': '1536px', // 大画面
      full: '100%',
    },

    /**
     * 左右のパディング
     * 理由: コンテンツを画面端から離す
     */
    paddingX: {
      mobile: spacing[4],   // 16px
      tablet: spacing[6],   // 24px
      desktop: spacing[8],  // 32px
    },

    /**
     * 上下のパディング
     */
    paddingY: {
      section: spacing[16],  // 64px - セクション間
      subsection: spacing[12], // 48px - サブセクション
    },
  },

  // =====================================
  // ボタン（Button）
  // =====================================
  button: {
    /**
     * 内側の余白
     * 理由: タッチターゲット44px以上（アクセシビリティ）
     */
    padding: {
      sm: {
        x: spacing[3],  // 12px
        y: spacing[2],  // 8px
        minHeight: '36px',
      },
      md: {
        x: spacing[6],  // 24px
        y: spacing[3],  // 12px
        minHeight: '44px', // アクセシビリティ推奨
      },
      lg: {
        x: spacing[8],  // 32px
        y: spacing[4],  // 16px
        minHeight: '56px',
      },
    },

    /**
     * ボタン間の余白
     */
    gap: {
      horizontal: spacing[3], // 12px
      vertical: spacing[2],   // 8px
    },
  },

  // =====================================
  // カード（Card）
  // =====================================
  card: {
    /**
     * カード内の余白
     */
    padding: {
      sm: spacing[4],  // 16px
      md: spacing[6],  // 24px
      lg: spacing[8],  // 32px
    },

    /**
     * カード間の余白
     */
    gap: {
      grid: spacing[6],  // 24px - グリッドレイアウト
      stack: spacing[4], // 16px - 縦積み
    },

    /**
     * カード内要素の余白
     */
    inner: {
      title: spacing[4],      // 16px - タイトル下
      content: spacing[3],    // 12px - コンテンツ間
      footer: spacing[6],     // 24px - フッター上
    },
  },

  // =====================================
  // フォーム（Form）
  // =====================================
  form: {
    /**
     * フィールド間の余白
     */
    fieldGap: spacing[6], // 24px

    /**
     * ラベルと入力欄の余白
     */
    labelGap: spacing[2], // 8px

    /**
     * 入力欄の内側余白
     */
    inputPadding: {
      x: spacing[4], // 16px
      y: spacing[3], // 12px
    },

    /**
     * エラーメッセージの余白
     */
    errorGap: spacing[2], // 8px
  },

  // =====================================
  // セクション（Section）
  // =====================================
  section: {
    /**
     * セクション間の余白
     */
    gap: {
      mobile: spacing[12],   // 48px
      tablet: spacing[16],   // 64px
      desktop: spacing[20],  // 80px
    },

    /**
     * セクション内の余白
     */
    padding: {
      y: {
        mobile: spacing[12],   // 48px
        tablet: spacing[16],   // 64px
        desktop: spacing[24],  // 96px
      },
      x: {
        mobile: spacing[4],    // 16px
        tablet: spacing[6],    // 24px
        desktop: spacing[8],   // 32px
      },
    },
  },

  // =====================================
  // ナビゲーション（Navigation）
  // =====================================
  navigation: {
    /**
     * ナビゲーション項目間の余白
     */
    itemGap: spacing[6], // 24px

    /**
     * ナビゲーションの高さ
     */
    height: {
      mobile: spacing[16], // 64px
      desktop: spacing[20], // 80px
    },

    /**
     * ドロップダウンの余白
     */
    dropdown: {
      padding: spacing[2],   // 8px
      itemPadding: spacing[3], // 12px
    },
  },

  // =====================================
  // ヒーロー（Hero）
  // =====================================
  hero: {
    /**
     * ヒーローセクションの高さ
     */
    height: {
      mobile: '500px',
      tablet: '600px',
      desktop: '700px',
      full: '100vh',
    },

    /**
     * ヒーロー内の余白
     */
    padding: {
      y: spacing[16], // 64px
      x: spacing[6],  // 24px
    },

    /**
     * ヒーローコンテンツの余白
     */
    content: {
      titleGap: spacing[6],  // 24px - タイトル下
      textGap: spacing[4],   // 16px - テキスト間
      ctaGap: spacing[8],    // 32px - CTA上
    },
  },

  // =====================================
  // グリッド（Grid）
  // =====================================
  grid: {
    /**
     * グリッド間の余白
     */
    gap: {
      tight: spacing[4],   // 16px
      normal: spacing[6],  // 24px
      loose: spacing[8],   // 32px
    },

    /**
     * グリッドの列数
     */
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
      wide: 4,
    },
  },
} as const;

/**
 * スペーシングユーティリティ
 * 特定のパターンに対する計算済みの値
 */
export const spacingUtils = {
  /**
   * 黄金比に基づくスペーシング
   * 用途: 美しいプロポーション
   */
  golden: {
    ratio: 1.618,
    small: '1rem',      // 16px
    medium: '1.618rem', // ~26px
    large: '2.618rem',  // ~42px
  },

  /**
   * タイポグラフィのリズム
   * 用途: 見出しと本文の余白
   */
  rhythm: {
    heading: {
      above: spacing[8],  // 32px - 見出しの上
      below: spacing[4],  // 16px - 見出しの下
    },
    paragraph: {
      gap: spacing[4],    // 16px - 段落間
    },
  },

  /**
   * コンポーネント間の余白
   */
  component: {
    stack: spacing[6],  // 24px - 縦積み
    inline: spacing[4], // 16px - 横並び
  },
} as const;

/**
 * スペーシングシステムのデザインドキュメント
 */
export const spacingSystemDocs = {
  philosophy: {
    title: 'スペーシングの哲学',
    description: `
      このスペーシングシステムは、以下の原則に基づいて設計されています：

      1. **8pxグリッドシステム**
         - すべてのスペーシングは4pxまたは8pxの倍数
         - デバイス間で一貫した表示
         - デザイナーと開発者の共通言語

      2. **視覚的リズム**
         - 一貫したスペーシングで統一感
         - 大きい要素には大きい余白
         - グループ化による情報整理

      3. **アクセシビリティ**
         - タッチターゲット44px以上
         - 十分な余白で誤タップ防止
         - 読みやすい段落間隔

      4. **レスポンシブ対応**
         - モバイルは余白を縮小
         - デスクトップは余白を拡大
         - コンテンツ密度の最適化

      5. **パフォーマンス**
         - remベース（ユーザー設定に対応）
         - 計算不要（固定値）
         - CSSの再利用
    `,
  },

  usage: {
    title: '使用ガイドライン',
    rules: [
      {
        rule: '関連する要素は近く、異なるグループは離す',
        rationale: 'ゲシュタルトの近接の法則 - 視覚的グループ化',
      },
      {
        rule: 'セクション間は大きく、要素間は小さく',
        rationale: '階層構造の明確化',
      },
      {
        rule: 'モバイルは余白を25-50%縮小',
        rationale: '限られた画面スペースの有効活用',
      },
      {
        rule: 'ボタンは最低44px×44pxのタッチエリア',
        rationale: 'WCAG 2.1 アクセシビリティ基準',
      },
      {
        rule: 'テキスト行長は40-75字（max-width設定）',
        rationale: '可読性の最適化',
      },
    ],
  },

  examples: {
    title: '使用例',
    patterns: [
      {
        name: 'セクションレイアウト',
        structure: 'padding: spacing.section.padding.y.desktop (96px)',
        rationale: 'セクション間を明確に区別',
      },
      {
        name: 'カードグリッド',
        structure: 'gap: spacing.card.gap.grid (24px)',
        rationale: '視覚的に快適な間隔',
      },
      {
        name: 'ボタン',
        structure: 'padding: spacing.button.padding.md (24px x 12px)',
        rationale: 'タッチターゲット44px確保',
      },
      {
        name: 'フォーム',
        structure: 'gap: spacing.form.fieldGap (24px)',
        rationale: 'フィールドを明確に区別',
      },
    ],
  },

  seo: {
    title: 'SEO・LLMO対応',
    considerations: [
      '適切な余白により、LLMがコンテンツの構造を理解しやすくなる',
      'セクション間の明確な区切りが、検索エンジンの解析を助ける',
      '読みやすいレイアウトが滞在時間を延ばし、SEOに好影響',
      'モバイルフレンドリーな余白設計がモバイルSEOに貢献',
    ],
  },
} as const;

/**
 * レスポンシブスペーシングのヘルパー
 */
export const responsiveSpacing = {
  /**
   * ブレークポイント
   */
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  /**
   * モバイルファーストのスケーリング
   * モバイル: 100% → タブレット: 125% → デスクトップ: 150%
   */
  scale: {
    mobile: 1,
    tablet: 1.25,
    desktop: 1.5,
  },
} as const;

// 型定義をエクスポート
export type SpacingSystem = typeof spacing;
export type SpacingPatterns = typeof spacingPatterns;
export type SpacingSystemDocs = typeof spacingSystemDocs;
