/**
 * Primitives - 基本コンポーネント
 *
 * デザインシステムの最も基本的なUI要素。
 * すべての複雑なコンポーネントはこれらのプリミティブから構築されます。
 */

// Button
export { Button, ButtonDesignDocs, type ButtonProps } from './Button';

// Card
export {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDesignDocs,
  type CardProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardContentProps,
  type CardFooterProps,
} from './Card';

// Input
export {
  Input,
  Textarea,
  InputDesignDocs,
  type InputProps,
  type TextareaProps,
} from './Input';

// Badge
export { Badge, BadgeDesignDocs, type BadgeProps } from './Badge';

/**
 * プリミティブコンポーネントのドキュメント
 */
export const PrimitivesOverview = {
  title: 'Primitives - 基本コンポーネント',
  description: `
    プリミティブは、デザインシステムの最も基本的なUI要素です。
    これらは単独で使用できるだけでなく、より複雑なパターンやセクションを構築するための
    ビルディングブロックとしても機能します。

    ## 含まれるコンポーネント

    ### Button（ボタン）
    - **用途**: ユーザーアクションを促進
    - **バリアント**: Primary, Secondary, Accent, Outline, Ghost
    - **重要性**: CTAの基礎、コンバージョンに直結

    ### Card（カード）
    - **用途**: コンテンツのグループ化と整理
    - **バリアント**: Elevated（影付き）, Outlined, Flat
    - **重要性**: 情報アーキテクチャの基盤

    ### Input（入力フィールド）
    - **用途**: ユーザーからのデータ収集
    - **機能**: エラー表示、ヘルプテキスト、アイコン
    - **重要性**: フォームの基礎、データ収集の要

    ### Badge（バッジ）
    - **用途**: ステータス、カテゴリ、ラベルの表示
    - **バリアント**: Primary, Success, Warning, Error, Info, Neutral
    - **重要性**: 情報の視覚的分類

    ## 設計原則

    ### 1. 一貫性（Consistency）
    すべてのプリミティブは統一されたデザイン言語を共有：
    - カラーパレット（Foundations/colors）
    - タイポグラフィ（Foundations/typography）
    - スペーシング（Foundations/spacing）

    ### 2. アクセシビリティ（Accessibility）
    WCAG 2.1 AA基準に準拠：
    - キーボード操作対応
    - スクリーンリーダー対応
    - 適切なコントラスト比
    - フォーカス状態の明確化

    ### 3. 再利用性（Reusability）
    すべてのプリミティブは：
    - TypeScriptで型安全
    - プロップスでカスタマイズ可能
    - 独立して機能
    - 組み合わせ可能

    ### 4. SEO・LLMO対応
    - セマンティックHTML
    - 明確な構造
    - アクセシブルな実装
    - 適切な命名規則

    ## 使用方法

    \`\`\`typescript
    import { Button, Card, Input, Badge } from '@/design-system/components/primitives'

    // ボタンの使用
    <Button variant="primary" size="md">送信する</Button>

    // カードの使用
    <Card variant="elevated" hoverable>
      <CardHeader>
        <CardTitle>タイトル</CardTitle>
      </CardHeader>
      <CardContent>コンテンツ</CardContent>
    </Card>

    // 入力フィールドの使用
    <Input
      label="メールアドレス"
      type="email"
      required
      error="正しい形式で入力してください"
    />

    // バッジの使用
    <Badge variant="success">完了</Badge>
    <Badge required />
    \`\`\`

    ## 組み合わせ例

    ### フォームカード
    \`\`\`typescript
    <Card>
      <CardHeader>
        <CardTitle>お問い合わせ</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          label="お名前"
          required
        />
        <Input
          label="メールアドレス"
          type="email"
          required
        />
        <Textarea
          label="お問い合わせ内容"
          required
        />
      </CardContent>
      <CardFooter>
        <Button variant="accent" fullWidth>送信する</Button>
      </CardFooter>
    </Card>
    \`\`\`

    ### ステータスカード
    \`\`\`typescript
    <Card hoverable clickable>
      <Badge variant="success">完了</Badge>
      <CardTitle>タスク名</CardTitle>
      <CardContent>説明文...</CardContent>
      <Button variant="outline" size="sm">詳細</Button>
    </Card>
    \`\`\`

    ## ベストプラクティス

    ### バリアントの使い分け
    - **Primary**: 最も重要なアクション（1ページに1-2個）
    - **Secondary**: 補助的なアクション
    - **Accent**: 強い行動喚起（コンバージョンポイント）
    - **Outline/Ghost**: 軽量なアクション

    ### サイズの選択
    - **sm**: コンパクトなUI、ダッシュボード
    - **md**: 標準的なサイズ（デフォルト）
    - **lg**: ヒーローセクション、重要なCTA

    ### アクセシビリティチェックリスト
    - [ ] すべてのボタンに明確なラベル
    - [ ] フォーカス状態が視覚的に明確
    - [ ] コントラスト比4.5:1以上
    - [ ] キーボードで操作可能
    - [ ] スクリーンリーダーで理解可能

    ### パフォーマンス考慮
    - Tailwind CSSでビルド時に最適化
    - 最小限のJavaScript
    - 効率的なCSSクラス
    - 不要な再レンダリングなし

    ## 次のステップ

    プリミティブを組み合わせて、より複雑なパターンを構築：
    - **Patterns**: Form, Navigation, Hero, CTA
    - **Sections**: Header, Footer, Features, Testimonials
    - **Templates**: Landing Page, Corporate Site

    詳細は各コンポーネントの \`DesignDocs\` を参照してください。
  `,
} as const;
