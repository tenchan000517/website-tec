/**
 * Badge Component - バッジコンポーネント
 *
 * ステータス、カテゴリ、ラベルを表示する小さなUI要素
 *
 * デザイン意図:
 * - 情報の視覚的分類
 * - ステータスの即座の認識
 * - コンパクトな情報表示
 */

import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * バッジのバリアント
   * - primary: プライマリカラー
   * - success: 成功・完了
   * - warning: 警告・注意
   * - error: エラー・重要
   * - info: 情報
   * - neutral: ニュートラル（グレー）
   */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';

  /**
   * サイズ
   * - sm: 小
   * - md: 中（デフォルト）
   * - lg: 大
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * 必須バッジ（赤背景）
   */
  required?: boolean;

  /**
   * ドット付き
   */
  dot?: boolean;

  /**
   * 子要素
   */
  children: React.ReactNode;
}

export function Badge({
  variant = 'neutral',
  size = 'md',
  required = false,
  dot = false,
  children,
  className = '',
  ...props
}: BadgeProps) {
  // 必須バッジの場合はerrorバリアントに上書き
  const effectiveVariant = required ? 'error' : variant;

  // ベーススタイル
  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-medium',
    'rounded-md',
    'whitespace-nowrap',
  ].join(' ');

  // バリアント別スタイル
  const variantStyles = {
    primary: 'bg-[#DBEAFE] text-[#2563EB]',
    success: 'bg-[#D1FAE5] text-[#16A34A]',
    warning: 'bg-[#FEF3C7] text-[#D97706]',
    error: 'bg-[#FEE2E2] text-[#DC2626]',
    info: 'bg-[#E0F2FE] text-[#0284C7]',
    neutral: 'bg-gray-100 text-gray-700',
  };

  // サイズ別スタイル
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-base gap-2',
  };

  const combinedClassName = [
    baseStyles,
    variantStyles[effectiveVariant],
    sizeStyles[size],
    className,
  ].join(' ');

  return (
    <span className={combinedClassName} {...props}>
      {dot && (
        <span
          className={`w-2 h-2 rounded-full ${
            effectiveVariant === 'primary'
              ? 'bg-[#2563EB]'
              : effectiveVariant === 'success'
              ? 'bg-[#16A34A]'
              : effectiveVariant === 'warning'
              ? 'bg-[#D97706]'
              : effectiveVariant === 'error'
              ? 'bg-[#DC2626]'
              : effectiveVariant === 'info'
              ? 'bg-[#0284C7]'
              : 'bg-gray-700'
          }`}
        />
      )}
      {required && <span>必須</span>}
      {!required && children}
    </span>
  );
}

/**
 * バッジコンポーネントのデザインドキュメント
 */
export const BadgeDesignDocs = {
  intent: {
    title: 'デザイン意図',
    description: `
      バッジは、ステータス、カテゴリ、ラベルを視覚的に表現する小さなUI要素です。

      ## 主な目的
      1. **情報の分類**: カテゴリやタグを視覚化
      2. **ステータス表示**: 完了、保留、エラーなどの状態
      3. **必須フィールド**: フォームの必須項目を明示
      4. **視覚的注意**: 重要な情報を目立たせる
    `,
  },

  colorPsychology: {
    primary: {
      color: 'ブルー（#2563EB）',
      meaning: '情報、デフォルト、一般的なラベル',
      usage: 'カテゴリ、タグ、情報表示',
    },
    success: {
      color: 'グリーン（#16A34A）',
      meaning: '成功、完了、有効',
      usage: '完了ステータス、承認済み、有効',
    },
    warning: {
      color: 'イエロー（#D97706）',
      meaning: '警告、注意、保留',
      usage: '警告、レビュー待ち、注意事項',
    },
    error: {
      color: 'レッド（#DC2626）',
      meaning: 'エラー、必須、重要',
      usage: 'エラーステータス、必須ラベル、削除',
    },
    info: {
      color: 'ライトブルー（#0284C7）',
      meaning: '情報、ヒント、補足',
      usage: '新着、情報、ヒント',
    },
    neutral: {
      color: 'グレー（#6B7280）',
      meaning: 'ニュートラル、無効、その他',
      usage: 'デフォルト、無効、その他',
    },
  },

  visualDesign: {
    background: {
      approach: '淡い背景色 + 濃いテキスト',
      rationale: '読みやすさとコントラスト確保',
      example: 'bg-[#DBEAFE]（淡いブルー）+ text-[#2563EB]（濃いブルー）',
    },
    borderRadius: {
      value: 'rounded-md（6px）',
      rationale: '柔らかい印象、読みやすい形状',
    },
    padding: {
      sm: '8px × 2px',
      md: '10px × 4px（デフォルト）',
      lg: '12px × 6px',
      rationale: 'コンパクトで目立つ',
    },
  },

  variants: {
    required: {
      use: 'フォームの必須フィールド',
      visual: '赤背景 + 白文字 + 「必須」テキスト',
      placement: 'ラベルの横',
      rationale: 'ユーザーが必須項目を即座に認識',
    },
    status: {
      use: 'ステータス表示（完了、保留、エラー）',
      visual: 'ドット + テキスト',
      examples: [
        '完了（グリーン）',
        '保留（イエロー）',
        'エラー（レッド）',
      ],
    },
    category: {
      use: 'カテゴリ、タグ',
      visual: 'ニュートラルカラー',
      placement: 'コンテンツの上部または横',
    },
  },

  accessibility: {
    features: [
      'セマンティックな<span>要素',
      '十分なコントラスト比（背景と文字）',
      '色だけでなくテキストでも情報を伝える',
      'ドットは装飾的（aria-hidden不要）',
    ],
    wcag: 'WCAG 2.1 AA準拠（コントラスト比4.5:1以上）',
  },

  seo: {
    considerations: [
      'バッジのテキストは意味のある内容',
      'カテゴリバッジは構造化データと連携',
      'ステータスは明確な言葉（「完了」「保留」）',
    ],
  },

  llmo: {
    optimization: [
      '明確なテキストラベル',
      'ステータスを示す語彙を使用',
      'カテゴリは構造化',
    ],
  },

  usage: {
    examples: [
      {
        scenario: '必須バッジ',
        code: '<Badge required />',
        output: '赤背景 + 「必須」',
      },
      {
        scenario: 'カテゴリバッジ',
        code: '<Badge variant="primary">技術</Badge>',
        rationale: 'ブログ記事のカテゴリ',
      },
      {
        scenario: 'ステータスバッジ',
        code: '<Badge variant="success" dot>完了</Badge>',
        rationale: 'タスクの完了状態',
      },
      {
        scenario: '新着バッジ',
        code: '<Badge variant="info">NEW</Badge>',
        rationale: '新しい記事やお知らせ',
      },
    ],
  },

  bestPractices: {
    dos: [
      'ステータスには適切な色を使用',
      '必須バッジはフォームで一貫して使用',
      'バッジのサイズは周囲のテキストに合わせる',
      '色だけでなくテキストでも情報を伝える',
    ],
    donts: [
      '多すぎるバッジで視覚的にごちゃごちゃさせない',
      '意味のない色の使用',
      '小さすぎて読めないバッジ',
    ],
  },

  layoutPatterns: {
    formLabel: {
      pattern: 'ラベル + 必須バッジ',
      code: '<label>メールアドレス <Badge required /></label>',
    },
    card: {
      pattern: 'カードの上部にカテゴリバッジ',
      code: '<Card><Badge>技術</Badge><CardTitle>...</CardTitle></Card>',
    },
    list: {
      pattern: 'リスト項目の横にステータスバッジ',
      code: '<li>タスク名 <Badge variant="success">完了</Badge></li>',
    },
  },

  performance: {
    optimization: [
      'インラインスタイルではなくクラス',
      '軽量な要素（<span>）',
    ],
  },
} as const;
