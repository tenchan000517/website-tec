/**
 * Button Component - ボタンコンポーネント
 *
 * ユーザーアクションを促進する基本的なボタン要素
 *
 * デザイン意図:
 * - 視覚的階層の明確化（プライマリ/セカンダリ/アクセント）
 * - タッチターゲット44px以上（アクセシビリティ）
 * - ホバー/フォーカス状態の視覚フィードバック
 */

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * ボタンのバリアント
   * - primary: メインアクション（ブルー）
   * - secondary: サブアクション（グレー）
   * - accent: 強い行動喚起（オレンジ）
   * - outline: アウトライン
   * - ghost: 背景なし
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';

  /**
   * ボタンのサイズ
   * - sm: 小（36px高さ）
   * - md: 中（44px高さ - デフォルト）
   * - lg: 大（56px高さ）
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * 全幅表示
   */
  fullWidth?: boolean;

  /**
   * ローディング状態
   */
  loading?: boolean;

  /**
   * アイコン（左側）
   */
  leftIcon?: React.ReactNode;

  /**
   * アイコン（右側）
   */
  rightIcon?: React.ReactNode;

  /**
   * 子要素
   */
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  // ベーススタイル
  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-semibold',
    'rounded-lg',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' ');

  // バリアント別スタイル
  const variantStyles = {
    primary: [
      'bg-[#2563EB] text-white',
      'hover:bg-[#1E40AF]',
      'focus:ring-[#2563EB]',
      'active:bg-[#1E3A8A]',
    ].join(' '),

    secondary: [
      'bg-gray-200 text-gray-900',
      'hover:bg-gray-300',
      'focus:ring-gray-400',
      'active:bg-gray-400',
    ].join(' '),

    accent: [
      'bg-[#FF6B35] text-white',
      'hover:bg-[#E64A19]',
      'focus:ring-[#FF6B35]',
      'active:bg-[#D84315]',
    ].join(' '),

    outline: [
      'border-2 border-[#2563EB] text-[#2563EB] bg-transparent',
      'hover:bg-[#EFF6FF]',
      'focus:ring-[#2563EB]',
      'active:bg-[#DBEAFE]',
    ].join(' '),

    ghost: [
      'text-[#2563EB] bg-transparent',
      'hover:bg-[#EFF6FF]',
      'focus:ring-[#2563EB]',
      'active:bg-[#DBEAFE]',
    ].join(' '),
  };

  // サイズ別スタイル
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm min-h-[36px] gap-1',
    md: 'px-6 py-3 text-base min-h-[44px] gap-2',
    lg: 'px-8 py-4 text-lg min-h-[56px] gap-3',
  };

  // 全幅スタイル
  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyle,
    className,
  ].join(' ');

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}

/**
 * ボタンコンポーネントのデザインドキュメント
 */
export const ButtonDesignDocs = {
  intent: {
    title: 'デザイン意図',
    description: `
      ボタンは、ユーザーの行動を促進し、視覚的階層を明確化する最も重要なUI要素です。

      ## 主な目的
      1. **行動喚起（CTA）**: ユーザーに次のアクションを促す
      2. **視覚的階層**: 重要度によってバリアントを使い分ける
      3. **フィードバック**: ホバー/フォーカス/アクティブ状態で操作可能性を示す
      4. **アクセシビリティ**: すべてのユーザーが操作可能
    `,
  },

  colorRationale: {
    primary: {
      color: '#2563EB',
      reasoning: 'プライマリブルー - 信頼感、プロフェッショナリズムを表現',
      usage: '最も重要なアクション（フォーム送信、メイン機能）',
      hover: '#1E40AF（20%暗く）- 操作可能性の視覚フィードバック',
    },
    accent: {
      color: '#FF6B35',
      reasoning: 'アクセントオレンジ - 活力、行動促進、緊急性',
      usage: '強い行動喚起（お問い合わせ、今すぐ申し込み）',
      psychology: '暖色が注意を引き、クリック率を向上',
    },
    secondary: {
      color: 'グレー系',
      reasoning: '控えめなアクション、キャンセルボタン',
      usage: '補助的な操作、戻る、閉じる',
    },
  },

  typography: {
    fontWeight: '600（semibold）',
    rationale: '可読性と権威性のバランス',
    letterSpacing: '0.025em（やや広め）',
    reasoning: '小さいテキストでも読みやすく',
  },

  spacing: {
    padding: {
      sm: '12px × 8px',
      md: '24px × 12px（デフォルト）',
      lg: '32px × 16px',
    },
    minHeight: {
      sm: '36px',
      md: '44px - WCAG推奨タッチターゲット',
      lg: '56px',
    },
    rationale: 'タッチ操作でも確実にタップできるサイズ（アクセシビリティ）',
  },

  accessibility: {
    features: [
      'セマンティックな<button>要素を使用',
      'フォーカスリング（focus:ring）でキーボード操作可視化',
      '最小タッチターゲット44px（WCAG 2.1）',
      'disabled状態で視覚的・機能的に無効化',
      'aria-label対応（必要に応じて）',
      'ローディング状態でアニメーション表示',
    ],
    wcag: 'WCAG 2.1 AA準拠',
  },

  seo: {
    considerations: [
      'button要素は検索エンジンにクリック可能と認識される',
      'テキストは明確な行動指示（「お問い合わせ」「詳しくはこちら」）',
      'ページ内の重要なCTAはページ上部に配置（First View）',
      'アンカーリンク（<a>）とボタン（<button>）を適切に使い分け',
    ],
    bestPractices: [
      '動詞を使用（「送信する」「ダウンロード」「登録」）',
      '具体的なアクションを示す（「無料で試す」 > 「こちら」）',
      '緊急性や限定性を活用（「今すぐ」「期間限定」）',
    ],
  },

  llmo: {
    optimization: [
      '明確なテキストラベル（LLMが目的を理解）',
      '構造化されたマークアップ（<button>要素）',
      'aria-label で補足情報を提供（アイコンのみの場合）',
      '一貫した命名規則（バリアント名が意図を表現）',
    ],
  },

  usage: {
    examples: [
      {
        scenario: 'メインCTA（お問い合わせフォーム）',
        code: '<Button variant="accent" size="lg">お問い合わせ</Button>',
        rationale: 'オレンジで目立たせ、大きめサイズで操作しやすく',
      },
      {
        scenario: 'フォーム送信',
        code: '<Button variant="primary">送信する</Button>',
        rationale: 'プライマリブルーで信頼感を演出',
      },
      {
        scenario: 'キャンセル',
        code: '<Button variant="secondary">キャンセル</Button>',
        rationale: 'グレーで控えめに、誤操作を防ぐ',
      },
      {
        scenario: 'アイコン付きボタン',
        code: '<Button variant="primary" rightIcon={<ArrowRight />}>詳しくはこちら</Button>',
        rationale: '矢印アイコンで遷移を示唆',
      },
    ],
  },

  variants: {
    primary: {
      use: '最も重要なアクション（ページごとに1-2個）',
      avoid: '複数のプライマリボタンを並べる（視覚的階層が崩れる）',
    },
    accent: {
      use: '強い行動喚起、コンバージョンポイント',
      avoid: '過度な使用（注意が分散）',
    },
    secondary: {
      use: '補助的なアクション、複数の選択肢',
      avoid: 'メインCTAとしての使用',
    },
    outline: {
      use: '視覚的に軽いアクション、フィルター、タグ',
      avoid: '重要度の高いアクション',
    },
    ghost: {
      use: 'ナビゲーション、閉じるボタン',
      avoid: 'ファーストビューのCTA',
    },
  },

  responsiveDesign: {
    mobile: 'フルワイズ（fullWidth）でタップしやすく',
    tablet: '通常サイズまたは中サイズ',
    desktop: 'サイズはそのまま、ホバー効果を活用',
  },

  performance: {
    optimization: [
      'Tailwind CSSでビルド時に最適化',
      'transition-all で滑らかなアニメーション',
      'duration-200 で適度な速度（遅すぎず速すぎず）',
    ],
  },
} as const;
