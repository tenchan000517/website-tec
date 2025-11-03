/**
 * Input Component - 入力フィールドコンポーネント
 *
 * フォームでユーザーからの入力を受け取る基本要素
 *
 * デザイン意図:
 * - 明確な入力領域の視覚化
 * - エラー状態の明確な表示
 * - アクセシビリティとユーザビリティ
 */

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * ラベル
   */
  label?: string;

  /**
   * 必須フィールド
   */
  required?: boolean;

  /**
   * エラーメッセージ
   */
  error?: string;

  /**
   * ヘルプテキスト
   */
  helperText?: string;

  /**
   * 左側のアイコン
   */
  leftIcon?: React.ReactNode;

  /**
   * 右側のアイコン
   */
  rightIcon?: React.ReactNode;

  /**
   * サイズ
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * 全幅表示
   */
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required = false,
      error,
      helperText,
      leftIcon,
      rightIcon,
      size = 'md',
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    // 一意なIDを生成（ラベルとの紐付け用）
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // ベーススタイル
    const baseStyles = [
      'border rounded-lg',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2',
      'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50',
    ].join(' ');

    // サイズ別スタイル
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    };

    // 状態別スタイル
    const stateStyles = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-[#2563EB] focus:border-[#2563EB] hover:border-gray-400';

    // アイコン用のパディング調整
    const iconPadding = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';

    // 全幅スタイル
    const widthStyle = fullWidth ? 'w-full' : '';

    const inputClassName = [
      baseStyles,
      sizeStyles[size],
      stateStyles,
      iconPadding,
      widthStyle,
      className,
    ].join(' ');

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {/* ラベル */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* 入力フィールド */}
        <div className="relative">
          {/* 左アイコン */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* 入力要素 */}
          <input
            ref={ref}
            id={inputId}
            className={inputClassName}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            {...props}
          />

          {/* 右アイコン */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* エラーメッセージ */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* ヘルプテキスト */}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/**
 * Textarea Component - テキストエリアコンポーネント
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      required = false,
      error,
      helperText,
      fullWidth = true,
      className = '',
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    const baseStyles = [
      'border rounded-lg',
      'px-4 py-3 text-base',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2',
      'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50',
      'resize-vertical',
    ].join(' ');

    const stateStyles = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-[#2563EB] focus:border-[#2563EB] hover:border-gray-400';

    const widthStyle = fullWidth ? 'w-full' : '';

    const textareaClassName = [baseStyles, stateStyles, widthStyle, className].join(' ');

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClassName}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          {...props}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={`${textareaId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

/**
 * 入力コンポーネントのデザインドキュメント
 */
export const InputDesignDocs = {
  intent: {
    title: 'デザイン意図',
    description: `
      入力フィールドは、ユーザーがデータを入力するための重要なUI要素です。

      ## 主な目的
      1. **データ収集**: ユーザーから情報を収集
      2. **明確性**: 何を入力すべきかを明示
      3. **フィードバック**: エラー状態を視覚的に表現
      4. **アクセシビリティ**: すべてのユーザーが入力可能
    `,
  },

  visualDesign: {
    border: {
      default: 'border-gray-300 - グレーボーダー',
      rationale: '入力領域を明確に区別、邪魔にならない色',
      hover: 'border-gray-400 - ホバーでやや濃く',
      focus: 'border-[#2563EB] + ring-[#2563EB] - フォーカスで青く',
      error: 'border-red-500 + ring-red-500 - エラーで赤く',
    },
    background: {
      default: '白背景',
      disabled: 'bg-gray-100 - グレー背景で入力不可を示す',
    },
    padding: {
      value: '16px（横）× 12px（縦）',
      rationale: '快適な入力スペース、タップしやすい',
    },
  },

  states: {
    default: {
      visual: 'グレーボーダー、白背景',
      interaction: 'ホバーでボーダーが濃くなる',
    },
    focus: {
      visual: '青いボーダー + リング',
      rationale: 'キーボード操作で現在の入力欄を明確化',
      accessibility: 'フォーカスリングは必須（WCAG）',
    },
    error: {
      visual: '赤いボーダー + リング + エラーメッセージ',
      rationale: 'バリデーション失敗を即座に伝える',
      aria: 'aria-invalid="true" + role="alert"',
    },
    disabled: {
      visual: 'グレー背景 + 透明度50%',
      rationale: '入力不可を視覚的・機能的に示す',
      accessibility: 'cursor: not-allowed',
    },
  },

  labels: {
    importance: {
      title: 'ラベルは必須',
      rationale: [
        'ユーザーが何を入力すべきか理解',
        'スクリーンリーダーがフィールドを認識',
        'SEO（構造化されたフォーム）',
      ],
    },
    placement: {
      position: '入力欄の上',
      rationale: '視線の流れに沿う、モバイルで見やすい',
    },
    required: {
      indicator: '赤いアスタリスク（*）',
      rationale: '必須フィールドを視覚的に示す',
      accessibility: 'required属性も併用',
    },
  },

  errorHandling: {
    timing: {
      onBlur: '入力欄から離れた時にバリデーション',
      onSubmit: 'フォーム送信時に全体バリデーション',
      realtime: 'パスワード強度などリアルタイム表示',
    },
    messaging: {
      specific: '「メールアドレスの形式が正しくありません」（具体的）',
      avoid: '「エラー」（曖昧）',
      tone: '丁寧で分かりやすい日本語',
    },
    visual: {
      color: '赤（error）',
      position: '入力欄の下',
      icon: 'エラーアイコンを併用（色だけでなく）',
    },
  },

  accessibility: {
    features: [
      '<label>要素でラベルを関連付け（htmlFor/id）',
      'aria-invalid でエラー状態を明示',
      'aria-describedby でエラーメッセージを関連付け',
      'role="alert" で即座にエラーを通知',
      'required属性で必須を示す',
      'フォーカスリング（focus:ring）',
      'placeholder は補助的に使用（ラベルの代替にしない）',
    ],
    wcag: 'WCAG 2.1 AA準拠',
  },

  seo: {
    considerations: [
      'セマンティックなHTML（<label>, <input>）',
      'name属性で送信データを明確化',
      'autocomplete属性でブラウザの自動入力を有効化',
      'type属性を適切に設定（email, tel, urlなど）',
    ],
    bestPractices: [
      'フォームは<form>要素で囲む',
      'ラベルは明確で簡潔',
      'プレースホルダーは例を示す',
    ],
  },

  llmo: {
    optimization: [
      '明確なラベル（LLMがフィールドの目的を理解）',
      '構造化されたマークアップ（label + input）',
      'エラーメッセージも含めて構造化',
      'ヘルプテキストで説明を提供',
    ],
  },

  usage: {
    examples: [
      {
        scenario: '基本的な入力',
        code: '<Input label="メールアドレス" type="email" required />',
      },
      {
        scenario: 'エラー表示',
        code: '<Input label="パスワード" type="password" error="8文字以上入力してください" />',
      },
      {
        scenario: 'アイコン付き',
        code: '<Input label="検索" leftIcon={<SearchIcon />} />',
      },
      {
        scenario: 'ヘルプテキスト',
        code: '<Input label="電話番号" helperText="ハイフンなしで入力してください" />',
      },
    ],
  },

  bestPractices: {
    dos: [
      'ラベルは常に表示（placeholder だけにしない）',
      'エラーは具体的に',
      '必須フィールドを明示',
      'オートコンプリートを活用',
      'タブ順序を考慮',
    ],
    donts: [
      'placeholder をラベルの代わりにしない',
      '曖昧なエラーメッセージ',
      '小さすぎる入力欄',
      '不要な必須フィールド',
    ],
  },

  inputTypes: {
    text: '一般的なテキスト',
    email: 'メールアドレス（バリデーション付き）',
    password: 'パスワード（マスク表示）',
    tel: '電話番号（モバイルでテンキー）',
    url: 'URL（モバイルでURL用キーボード）',
    number: '数値',
    date: '日付',
    search: '検索（クリアボタン付き）',
  },

  performance: {
    optimization: [
      'transition-all で滑らかなアニメーション',
      'フォーカスリングのみアニメーション（パフォーマンス）',
    ],
  },
} as const;
