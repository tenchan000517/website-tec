/**
 * タイポグラフィシステム - Typography System
 *
 * このファイルでは、デザインシステム全体で使用するタイポグラフィを定義します。
 * 可読性、階層構造、ブランドイメージを考慮した設計です。
 */

export const typography = {
  // =====================================
  // フォントファミリー（Font Families）
  // =====================================
  fontFamily: {
    /**
     * 日本語 + ラテン文字のフォントスタック
     * 優先順位:
     * 1. システムUI フォント（最速レンダリング）
     * 2. 游ゴシック体（Windows/Mac標準、可読性が高い）
     * 3. Noto Sans JP（Webフォント、一貫性）
     * 4. sans-serif（フォールバック）
     *
     * 選定理由:
     * - システムフォント優先でパフォーマンス最適化
     * - 日本語の可読性を重視（游ゴシック）
     * - モダンで洗練された印象（sans-serif系）
     */
    sans: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Yu Gothic UI"',
      '"Noto Sans JP"',
      'sans-serif',
    ].join(', '),

    /**
     * 英数字用のフォント（見出しやロゴ）
     * 用途: 英語の見出し、数字、ロゴ
     * 特徴: モダンで読みやすい、ビジネス感
     */
    heading: [
      '"Inter"',
      'system-ui',
      '-apple-system',
      'sans-serif',
    ].join(', '),

    /**
     * 等幅フォント（コード表示用）
     * 用途: コードブロック、技術情報
     */
    mono: [
      '"Consolas"',
      '"Monaco"',
      '"Courier New"',
      'monospace',
    ].join(', '),
  },

  // =====================================
  // フォントサイズ（Font Sizes）
  // =====================================
  fontSize: {
    /**
     * 極小テキスト
     * 用途: キャプション、補足情報、法的表示
     * 最小推奨: モバイルで12px以上（アクセシビリティ）
     */
    xs: {
      size: '0.75rem', // 12px
      lineHeight: '1rem', // 16px
      letterSpacing: '0.025em',
      use: 'キャプション、補足情報',
    },

    /**
     * 小テキスト
     * 用途: メタ情報、日付、タグ
     */
    sm: {
      size: '0.875rem', // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.016em',
      use: 'メタ情報、日付、タグ',
    },

    /**
     * ベーステキスト
     * 用途: 本文、一般的なテキスト
     * 推奨: デスクトップで16px（読みやすさの標準）
     */
    base: {
      size: '1rem', // 16px
      lineHeight: '1.5rem', // 24px
      letterSpacing: '0',
      use: '本文、一般的なテキスト',
    },

    /**
     * やや大きいテキスト
     * 用途: リード文、強調テキスト
     */
    lg: {
      size: '1.125rem', // 18px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '-0.011em',
      use: 'リード文、強調テキスト',
    },

    /**
     * 大きいテキスト
     * 用途: セクション見出し（h3相当）
     */
    xl: {
      size: '1.25rem', // 20px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '-0.017em',
      use: 'セクション見出し（h3）',
    },

    /**
     * より大きいテキスト
     * 用途: ページ内見出し（h2相当）
     */
    '2xl': {
      size: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
      letterSpacing: '-0.021em',
      use: 'ページ内見出し（h2）',
    },

    /**
     * 大見出し
     * 用途: セクションタイトル、カード見出し
     */
    '3xl': {
      size: '1.875rem', // 30px
      lineHeight: '2.25rem', // 36px
      letterSpacing: '-0.024em',
      use: 'セクションタイトル',
    },

    /**
     * 超大見出し
     * 用途: ページタイトル（h1相当）
     */
    '4xl': {
      size: '2.25rem', // 36px
      lineHeight: '2.5rem', // 40px
      letterSpacing: '-0.027em',
      use: 'ページタイトル（h1）',
    },

    /**
     * ヒーロー見出し
     * 用途: トップページのヒーロータイトル
     */
    '5xl': {
      size: '3rem', // 48px
      lineHeight: '1',
      letterSpacing: '-0.031em',
      use: 'ヒーロータイトル',
    },

    /**
     * 超大型ヒーロー見出し
     * 用途: ランディングページのメインビジュアル
     */
    '6xl': {
      size: '3.75rem', // 60px
      lineHeight: '1',
      letterSpacing: '-0.035em',
      use: 'LPメインビジュアル',
    },
  },

  // =====================================
  // フォントウェイト（Font Weights）
  // =====================================
  fontWeight: {
    /**
     * 細字
     * 用途: 補足情報、繊細な表現
     * 注意: 小さいテキストには使用しない（可読性低下）
     */
    light: '300',

    /**
     * 通常
     * 用途: 本文テキスト
     * 推奨: 最も読みやすいウェイト
     */
    normal: '400',

    /**
     * 中太
     * 用途: 強調、サブ見出し
     */
    medium: '500',

    /**
     * 太字
     * 用途: 見出し、重要な情報
     */
    semibold: '600',

    /**
     * 極太
     * 用途: ヒーロータイトル、強い主張
     */
    bold: '700',

    /**
     * 超極太
     * 用途: 特別な強調（使用は限定的に）
     */
    extrabold: '800',
  },

  // =====================================
  // 行間（Line Heights）
  // =====================================
  lineHeight: {
    /**
     * 詰め気味
     * 用途: 見出し、タイトル
     * 理由: タイトルは行間を詰めて力強く
     */
    tight: '1.25',

    /**
     * やや詰め
     * 用途: サブタイトル、短いテキスト
     */
    snug: '1.375',

    /**
     * 通常
     * 用途: 本文テキスト
     * 推奨: 日本語は1.5〜1.75が読みやすい
     */
    normal: '1.5',

    /**
     * ゆったり
     * 用途: 長文、説明文
     * 理由: 行間を広げて読みやすく
     */
    relaxed: '1.625',

    /**
     * かなりゆったり
     * 用途: 引用、特別な強調
     */
    loose: '2',
  },

  // =====================================
  // 字間（Letter Spacing）
  // =====================================
  letterSpacing: {
    /**
     * 詰め気味
     * 用途: 大きな見出し
     * 理由: 大きいテキストは字間を詰めてバランス
     */
    tighter: '-0.05em',
    tight: '-0.025em',

    /**
     * 通常
     * 用途: 本文
     */
    normal: '0',

    /**
     * 広め
     * 用途: 小さいテキスト、大文字
     * 理由: 可読性向上
     */
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

/**
 * タイポグラフィプリセット
 * 各要素に対する完全なスタイル定義
 */
export const typographyPresets = {
  // =====================================
  // 見出しスタイル（Heading Styles）
  // =====================================
  h1: {
    fontSize: typography.fontSize['4xl'].size,
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.fontSize['4xl'].letterSpacing,
    fontFamily: typography.fontFamily.heading,
    description: 'ページタイトル - SEO最重要',
    seo: 'ページごとに1つのみ使用、キーワードを含める',
    llmo: 'ページの主題を明確に表現、構造化データと連携',
  },

  h2: {
    fontSize: typography.fontSize['3xl'].size,
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.fontSize['3xl'].letterSpacing,
    fontFamily: typography.fontFamily.heading,
    description: 'セクションタイトル',
    seo: 'セクションの内容を要約、キーワードを自然に含める',
    llmo: 'セクションの階層構造を示す',
  },

  h3: {
    fontSize: typography.fontSize['2xl'].size,
    lineHeight: typography.lineHeight.snug,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.fontSize['2xl'].letterSpacing,
    fontFamily: typography.fontFamily.heading,
    description: 'サブセクションタイトル',
  },

  h4: {
    fontSize: typography.fontSize.xl.size,
    lineHeight: typography.lineHeight.snug,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.fontSize.xl.letterSpacing,
    fontFamily: typography.fontFamily.sans,
    description: '小見出し',
  },

  // =====================================
  // 本文スタイル（Body Styles）
  // =====================================
  body: {
    fontSize: typography.fontSize.base.size,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.sans,
    description: '標準本文',
    seo: '自然な文章、適切なキーワード密度（2-3%）',
    llmo: '明確で簡潔な文章、適切な段落分け',
  },

  lead: {
    fontSize: typography.fontSize.lg.size,
    lineHeight: typography.lineHeight.relaxed,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.sans,
    description: 'リード文 - ページの要約',
    seo: 'ページ上部に配置、検索スニペットに表示される可能性',
    llmo: 'ページ内容の要約、ユーザーの関心を引く',
  },

  caption: {
    fontSize: typography.fontSize.sm.size,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.sans,
    description: 'キャプション、補足情報',
  },

  // =====================================
  // 特殊スタイル（Special Styles）
  // =====================================
  hero: {
    fontSize: typography.fontSize['5xl'].size,
    lineHeight: '1.1',
    fontWeight: typography.fontWeight.extrabold,
    letterSpacing: typography.fontSize['5xl'].letterSpacing,
    fontFamily: typography.fontFamily.heading,
    description: 'ヒーローセクションのタイトル',
    seo: 'ブランドメッセージ、感情的訴求',
    llmo: '印象的なコピー、行動喚起',
  },

  button: {
    fontSize: typography.fontSize.base.size,
    lineHeight: '1',
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.wide,
    fontFamily: typography.fontFamily.sans,
    description: 'ボタンテキスト',
    seo: '明確な行動指示（「お問い合わせ」など）',
    llmo: '動詞を使用、具体的なアクション',
  },

  label: {
    fontSize: typography.fontSize.sm.size,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.wide,
    fontFamily: typography.fontFamily.sans,
    description: 'フォームラベル、タグ',
  },
} as const;

/**
 * タイポグラフィシステムのデザインドキュメント
 */
export const typographySystemDocs = {
  philosophy: {
    title: 'タイポグラフィの哲学',
    description: `
      このタイポグラフィシステムは、以下の原則に基づいて設計されています：

      1. **可読性最優先**
         - 本文は16px以上（デスクトップ）
         - 日本語は行間1.5〜1.75倍
         - 適切なコントラスト比の確保

      2. **視覚階層の明確化**
         - サイズと太さで重要度を表現
         - 一貫したスケーリング（1.2倍の等比数列）
         - 見出しは詰め、本文は広めの行間

      3. **パフォーマンス重視**
         - システムフォント優先
         - Webフォントは必要最小限
         - フォント読み込みの最適化

      4. **アクセシビリティ**
         - 最小12px（キャプション）
         - 本文は16px推奨
         - 拡大しても崩れないレイアウト

      5. **SEO・LLMO対策**
         - セマンティックなHTML（h1, h2, h3...）
         - 適切な見出し階層
         - 読みやすい文章構造
    `,
  },

  usage: {
    title: '使用ガイドライン',
    rules: [
      {
        rule: '見出しは階層を守る（h1→h2→h3）',
        rationale: 'SEOとアクセシビリティのため、階層をスキップしない',
      },
      {
        rule: '本文は16px以上',
        rationale: 'モバイルでも読みやすいサイズを維持',
      },
      {
        rule: '行間は日本語1.5倍以上',
        rationale: '可読性向上、目の疲労軽減',
      },
      {
        rule: '1行の文字数は40-75字',
        rationale: '読みやすい行長を維持（max-width設定）',
      },
      {
        rule: '見出しは簡潔に（1-2行）',
        rationale: 'スキャン可能性、視覚的インパクト',
      },
    ],
  },

  responsive: {
    title: 'レスポンシブ対応',
    mobile: '見出しサイズを20-30%縮小、行間は維持',
    tablet: '見出しサイズを10-20%縮小',
    desktop: 'ベースサイズを使用',
  },
} as const;

// 型定義をエクスポート
export type TypographySystem = typeof typography;
export type TypographyPresets = typeof typographyPresets;
export type TypographySystemDocs = typeof typographySystemDocs;
