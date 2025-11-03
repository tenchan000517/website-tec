/**
 * Card Component - カードコンポーネント
 *
 * コンテンツをグループ化し、視覚的に区別するコンテナ要素
 *
 * デザイン意図:
 * - コンテンツの明確なグループ化
 * - 視覚的な奥行き（影による）
 * - スキャン可能性の向上
 */

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * カードのバリアント
   * - elevated: 影付き（デフォルト）
   * - outlined: ボーダーのみ
   * - flat: 影なし、背景色のみ
   */
  variant?: 'elevated' | 'outlined' | 'flat';

  /**
   * パディングサイズ
   * - sm: 16px
   * - md: 24px（デフォルト）
   * - lg: 32px
   * - none: パディングなし
   */
  padding?: 'sm' | 'md' | 'lg' | 'none';

  /**
   * ホバー効果
   */
  hoverable?: boolean;

  /**
   * クリック可能（カーソルがpointerになる）
   */
  clickable?: boolean;

  /**
   * 子要素
   */
  children: React.ReactNode;
}

export function Card({
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  clickable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  // ベーススタイル
  const baseStyles = [
    'bg-white',
    'rounded-lg',
    'transition-all duration-200',
  ].join(' ');

  // バリアント別スタイル
  const variantStyles = {
    elevated: [
      'shadow-md',
      hoverable ? 'hover:shadow-xl' : '',
    ].join(' '),

    outlined: [
      'border-2 border-gray-200',
      hoverable ? 'hover:border-[#2563EB]' : '',
    ].join(' '),

    flat: [
      'bg-gray-50',
    ].join(' '),
  };

  // パディング
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: '',
  };

  // クリック可能スタイル
  const interactionStyles = [
    clickable ? 'cursor-pointer' : '',
    hoverable ? 'hover:scale-[1.02]' : '',
  ].join(' ');

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    paddingStyles[padding],
    interactionStyles,
    className,
  ].join(' ');

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}

/**
 * カードヘッダー
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * カードタイトル
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * 見出しレベル
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export function CardTitle({
  as: Component = 'h3',
  children,
  className = '',
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={`text-xl font-bold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * カードコンテンツ
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ children, className = '', ...props }: CardContentProps) {
  return (
    <div className={`text-gray-700 leading-relaxed ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * カードフッター
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * カードコンポーネントのデザインドキュメント
 */
export const CardDesignDocs = {
  intent: {
    title: 'デザイン意図',
    description: `
      カードは、関連するコンテンツをグループ化し、視覚的に区別するコンテナです。

      ## 主な目的
      1. **コンテンツの整理**: 関連情報を1つのユニットにまとめる
      2. **視覚的階層**: 影や境界線で奥行きを表現
      3. **スキャン可能性**: グリッドレイアウトで情報を整理
      4. **操作性**: ホバー効果でインタラクティブ性を示唆
    `,
  },

  visualDesign: {
    shadow: {
      default: 'shadow-md（中程度の影）',
      rationale: '物理的な「カード」を模倣、ページから浮き上がる印象',
      hover: 'shadow-xl（大きな影） - ホバー時に浮き上がる',
      accessibility: '影だけでなく境界線も併用可能（コントラスト確保）',
    },
    borderRadius: {
      value: '0.5rem（8px）',
      rationale: '柔らかい印象、モダンなデザイン',
      consistency: 'ボタン、入力フィールドと統一',
    },
    padding: {
      sm: '16px - コンパクトなカード',
      md: '24px - 標準的なカード（デフォルト）',
      lg: '32px - 余裕のあるカード',
      rationale: '内容に応じて適切な余白を選択',
    },
  },

  layoutPatterns: {
    grid: {
      description: 'カードをグリッド配置',
      usage: '製品一覧、サービス紹介、ブログ記事一覧',
      responsive: 'モバイル: 1列、タブレット: 2列、デスクトップ: 3列',
    },
    alternating: {
      description: '左右交互にカードを配置',
      usage: 'ストーリーテリング、機能説明',
      visualEffect: '視覚的リズム、スキャン可能性の向上',
    },
    stack: {
      description: 'カードを縦に積む',
      usage: 'タイムライン、コメント、通知',
    },
  },

  variants: {
    elevated: {
      use: '標準的なカード、コンテンツを強調',
      visualEffect: '影で奥行きを表現',
      bestFor: 'サービス紹介、製品カード、ブログカード',
    },
    outlined: {
      use: '軽量なカード、密度の高いレイアウト',
      visualEffect: 'ボーダーのみ、シンプル',
      bestFor: 'フォーム、設定画面、ダッシュボード',
    },
    flat: {
      use: '背景色のみ、最も軽量',
      visualEffect: '控えめ、背景と溶け込む',
      bestFor: 'セクション区切り、情報表示',
    },
  },

  accessibility: {
    features: [
      'セマンティックな構造（CardHeader, CardContent, CardFooter）',
      'クリック可能な場合はcursor: pointer',
      '十分なコントラスト比（白背景 + グレー文字）',
      'ホバー効果でインタラクティブ性を示す',
      'キーボード操作対応（クリック可能な場合）',
    ],
    wcag: 'WCAG 2.1 AA準拠',
  },

  seo: {
    considerations: [
      'カード内の見出し（h2, h3）で構造を明確化',
      '各カードに意味のあるコンテンツを配置',
      'リンクカードの場合、明確なリンクテキスト',
      'alt属性で画像の説明を提供',
    ],
    structuredData: [
      'ブログカード: Article schema',
      '製品カード: Product schema',
      'レビューカード: Review schema',
    ],
  },

  llmo: {
    optimization: [
      '明確な見出し階層（CardTitle）',
      '構造化されたマークアップ（header/content/footer）',
      '関連コンテンツのグループ化',
      'リストとして並べる際は<ul><li>を使用',
    ],
  },

  usage: {
    examples: [
      {
        scenario: '基本的なカード',
        code: `
<Card>
  <CardHeader>
    <CardTitle>タイトル</CardTitle>
  </CardHeader>
  <CardContent>
    <p>コンテンツ...</p>
  </CardContent>
  <CardFooter>
    <Button>詳しくはこちら</Button>
  </CardFooter>
</Card>
        `,
      },
      {
        scenario: 'ホバー可能なカード',
        code: '<Card hoverable clickable onClick={handleClick}>...</Card>',
        rationale: 'クリック可能であることを視覚的に示す',
      },
      {
        scenario: 'アウトラインカード',
        code: '<Card variant="outlined">...</Card>',
        rationale: 'シンプルなデザイン、フォームなどに適用',
      },
    ],
  },

  bestPractices: {
    dos: [
      '関連するコンテンツをまとめる',
      'カード内の情報は簡潔に',
      'ホバー効果でインタラクティブ性を示す',
      'グリッドレイアウトで統一感を出す',
      'カードの高さを揃える（グリッド時）',
    ],
    donts: [
      'カードの中にカードを入れ子にしすぎない',
      '重要な情報をカードに隠さない',
      '多すぎる影や装飾',
      '不均一なカードサイズ（グリッド時）',
    ],
  },

  performance: {
    optimization: [
      'shadow-mdで適度な影（重すぎない）',
      'transition-allで滑らかなアニメーション',
      'hover:scale-[1.02]で控えめな拡大',
    ],
  },

  responsiveDesign: {
    mobile: 'フルワイズ、パディングは小さめ（sm）',
    tablet: 'グリッド2列、パディングはmd',
    desktop: 'グリッド3-4列、パディングはmd-lg',
  },
} as const;
