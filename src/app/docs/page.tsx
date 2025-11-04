/**
 * ドキュメントページ - Claude Code向け指示文
 */

import Link from 'next/link'
import CopyButton from '@/components/CopyButton'

const claudeInstruction = `新しい作品をこのテンプレートに追加してください。

## 作品情報（以下を置き換えてください）
- 作品ID: [作品ID（例: sample-work）]
- 作品名: [作品名（例: サンプル企業コーポレートサイト）]
- カテゴリ: [カテゴリ（例: 製造業 コーポレートサイト）]
- 説明: [作品の説明]
- タグ: [タグ1, タグ2, タグ3]

## 実装手順

### 1. ディレクトリ構造を作成してください

以下のディレクトリ構造で作成：

\`\`\`
src/app/works/[作品ID]/
├── page.tsx           # TOPページ
├── about/page.tsx     # 会社情報（任意）
├── contact/page.tsx   # お問い合わせ（任意）
└── ...                # その他のページ

src/components/works/[作品ID]/
├── Header.tsx         # ヘッダーコンポーネント
├── Footer.tsx         # フッターコンポーネント
└── ...                # その他のコンポーネント

public/works/[作品ID]/
└── images/
    ├── TOP/           # TOPページの画像
    ├── about/         # 会社情報の画像
    └── ...            # その他の画像
\`\`\`

### 2. 画像を配置してください

**重要**: 画像は必ず以下の場所に保存してください：
\`\`\`
public/works/[作品ID]/images/
\`\`\`

ページ別にディレクトリを作成することを推奨（TOP/、about/、contact/ など）

画像の使用例：
\`\`\`tsx
import Image from 'next/image'

<Image
  src="/works/[作品ID]/images/TOP/hero.jpg"
  alt="説明"
  width={1200}
  height={600}
  className="object-cover"
/>
\`\`\`

### 3. ページを作成してください

\`src/app/works/[作品ID]/page.tsx\` を作成：

\`\`\`tsx
import Header from '@/components/works/[作品ID]/Header'
import Footer from '@/components/works/[作品ID]/Footer'

export default function WorkPage() {
  return (
    <div>
      <Header />
      <main>
        {/* ここにコンテンツを追加 */}
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

### 4. ホームページに追加してください

\`src/app/page.tsx\` の \`works\` 配列に以下を追加：

\`\`\`tsx
{
  id: '[作品ID]',
  title: '[作品名]',
  category: '[カテゴリー]',
  description: '[作品の説明]',
  image: '/works/[作品ID]/images/TOP/thumbnail.jpg',
  tags: ['タグ1', 'タグ2', 'タグ3'],
  path: '/works/[作品ID]',
}
\`\`\`

### 5. 技術をドキュメント化してください（任意）

使用した技術を \`src/data/technologies.ts\` に追加：

\`\`\`tsx
{
  slug: 'example-tech',
  title: '技術名',
  category: 'UIコンポーネント',
  description: '技術の説明',
  project: '[作品ID]',
  usedIn: ['/src/app/works/[作品ID]/page.tsx'],
  code: \`実装コード\`,
  prompt: \`Claude Codeへの指示文\`,
  preview: \`<div>プレビュー用HTML（任意）</div>\`,
  relatedTech: []
}
\`\`\`

## 完了確認

以下を確認してください：
- [ ] ディレクトリが作成されている
- [ ] 画像が \`public/works/[作品ID]/images/\` に配置されている
- [ ] ページが作成されている
- [ ] ホームページの works 配列に追加されている
- [ ] 開発サーバーで確認できる（http://localhost:3000/works/[作品ID]）

以上で新しい作品の追加は完了です。`

const techInstruction = `既存作品から技術を抽出してtechnologies.tsに追加してください。

## 前提条件：元デザイン画像を保存してください

### 元デザイン画像の保存場所
\`\`\`
C:\\WEBサイトUI\\[プロジェクト名]\\
\`\`\`

### 保存手順
1. Windowsエクスプローラーで \`C:\\WEBサイトUI\\\` フォルダを開く（フォルダがない場合は作成）
2. プロジェクト名のフォルダを作成（例：\`フジタ電業\`）
3. その中にページ別のディレクトリを作成
4. 各ディレクトリにデザイン画像（PNG, JPGなど）を保存

### ディレクトリ構造の例
\`\`\`
C:\\WEBサイトUI\\[プロジェクト名]\\
├── TOP/               # TOPページの画像
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── about/             # 会社情報ページの画像
├── contact/           # お問い合わせページの画像
├── service/           # サービス紹介ページの画像
├── news/              # お知らせページの画像
└── recruit/           # 採用情報（必要に応じてサブディレクトリ作成）
    ├── TOP/
    ├── message/
    ├── interview/
    ├── faq/
    └── ...
\`\`\`

**ポイント**:
- ページ構成に応じてディレクトリを作成
- 複雑なセクション（採用情報など）はサブディレクトリを使用
- 画像ファイル名は連番（1.jpg, 2.jpg...）を推奨

WSLからは以下のパスでアクセスできます：
\`\`\`
/mnt/c/WEBサイトUI/[プロジェクト名]/
\`\`\`

## 対象プロジェクト
- プロジェクト名: [プロジェクト名を指定]

## 作業手順

### 1. 元デザイン画像を確認してください

Readツールで以下のパスの画像を1枚ずつ確認：
\`\`\`
/mnt/c/WEBサイトUI/[プロジェクト名]/
\`\`\`

### 2. 現在の実装コードを確認してください

該当するコンポーネントやページのコードを確認。

### 3. 技術を1つ抽出してください

元デザインと実装コードを比較し、使用されている技術を1つ特定。

### 4. technologies.tsに追加してください

\`src/data/technologies.ts\` に以下の形式で追加：

\`\`\`tsx
{
  slug: 'example-tech',
  title: '技術名',
  category: 'UIコンポーネント',  // UIコンポーネント/レイアウト・構造/デザイン・ビジュアル/アニメーション など
  description: '技術の説明（1-2行）',
  project: '[プロジェクトID]',
  usedIn: ['/src/app/works/[プロジェクトID]/page.tsx'],
  code: \\\`実装コード全文\\\`,
  prompt: \\\`Claude Codeへの具体的な指示文

## 要件
1. ...
2. ...

## 実装手順
1. ...
2. ...

## デザインのポイント
- ...
\\\`,
  preview: \\\`<div class="flex justify-center">
  <!-- HTMLとTailwind CSSのみでプレビューを作成 -->
  <!-- 画像は使用禁止 -->
</div>\\\`,
  relatedTech: []
}
\`\`\`

### 5. プレビューを作成してください（UI/デザイン系技術の場合）

**重要なルール**:
- HTMLとTailwind CSSのみ使用
- 外部画像やJavaScriptは使用禁止
- コンパクトで見やすいサイズ（h-32, h-48など）
- 実際のデザインと同じ色・レイアウトを再現
- アニメーション系など静的プレビューで表現困難な技術は省略可

### 6. TECH-DOC-PROGRESS.mdを更新してください

追加した技術をリストに記録。

### 7. 繰り返してください

1枚ずつ画像を確認し、技術を1つずつ追加。一気に大量追加はNG。

## 完了確認

以下を確認してください：
- [ ] technologies.tsに技術が追加されている
- [ ] プレビューが正しく表示される（UI系の場合）
- [ ] 技術一覧ページで確認できる
- [ ] TECH-DOC-PROGRESS.mdが更新されている

以上で技術の追加は完了です。`

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl font-bold mb-4">Claude Code 指示文集</h1>
          <p className="text-blue-100">
            作品追加・技術抽出の指示文をコピペして実行してください
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* 使い方 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
          <h3 className="font-bold text-lg mb-2">使い方</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>必要な指示文（作品追加 or 技術抽出）をコピー</li>
            <li>プレースホルダー（[作品ID]など）を実際の値に置き換える</li>
            <li>Claude Codeに貼り付けて実行</li>
            <li>自動的に作業が完了します</li>
          </ol>
        </div>

        {/* 作品追加の指示文 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2">
            1. 新しい作品を追加する
          </h2>

          <div className="bg-green-50 border-2 border-green-600 rounded-t-lg p-3">
            <span className="text-green-800 font-bold">↓ ここからコピー ↓</span>
          </div>

          <div className="relative">
            <CopyButton text={claudeInstruction} />
            <pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed">
              {claudeInstruction}
            </pre>
          </div>

          <div className="bg-green-50 border-2 border-green-600 rounded-b-lg p-3 mt-0">
            <span className="text-green-800 font-bold">↑ ここまでコピー ↑</span>
          </div>
        </section>

        {/* 技術追加の指示文 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2">
            2. 作品から技術を抽出する
          </h2>

          <div className="bg-green-50 border-2 border-green-600 rounded-t-lg p-3">
            <span className="text-green-800 font-bold">↓ ここからコピー ↓</span>
          </div>

          <div className="relative">
            <CopyButton text={techInstruction} />
            <pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed">
              {techInstruction}
            </pre>
          </div>

          <div className="bg-green-50 border-2 border-green-600 rounded-b-lg p-3 mt-0">
            <span className="text-green-800 font-bold">↑ ここまでコピー ↑</span>
          </div>
        </section>

        {/* 参考リンク */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
            参考リンク
          </h2>
          <div className="grid gap-4">
            <Link
              href="/tech"
              className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <h3 className="font-bold text-blue-600 mb-1">技術一覧</h3>
              <p className="text-sm text-gray-600">実装済みの技術とコードを確認</p>
            </Link>
            <Link
              href="/works/tokai-parts-industry"
              className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <h3 className="font-bold text-blue-600 mb-1">サンプル作品</h3>
              <p className="text-sm text-gray-600">実際の作品例を見る</p>
            </Link>
          </div>
        </section>

        {/* 戻るリンク */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors"
          >
            ← ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
