# 技術ドキュメンテーションシステム実装指示書

**作成日**: 2025-11-04
**対象**: 次世代Claude Code
**目的**: 東海部品工業サイトで使用された技術を一覧化し、再利用可能なドキュメンテーションサイトを構築する

---

## 🎯 実装する機能

### 1. サイト構造
```
/
├── app/
│   ├── page.tsx                 # トップページ（技術一覧へのリンク）
│   └── tech/
│       ├── page.tsx            # 技術一覧ページ
│       └── [slug]/
│           └── page.tsx        # 個別技術の詳細ページ
```

### 2. 各ページの役割

#### A. トップページ (`app/page.tsx`)
- 現在の内容を保持しつつ、新規セクションを追加
- 「技術ドキュメント」へのリンクボタンを目立つ位置に配置
- デザイン: 青ボタン、大きめのサイズ

#### B. 技術一覧ページ (`app/tech/page.tsx`)
**表示内容**:
- ページタイトル: "技術ドキュメント一覧"
- 説明文: "東海部品工業サイトで使用されている技術の一覧です。各技術をクリックすると、実装コードとClaude Codeへの指示文を確認できます。"
- カテゴリー別に技術をグループ化して表示:
  1. **レイアウト・構造**
  2. **UI コンポーネント**
  3. **アニメーション**
  4. **SEO・LLMO**
  5. **セットアップ・環境構築**

**カード形式で表示**:
- 各技術カード:
  - タイトル
  - 簡単な説明（1-2行）
  - 使用場所の例
  - タグ（カテゴリー）
  - クリックで詳細ページへ

#### C. 個別技術詳細ページ (`app/tech/[slug]/page.tsx`)
**表示内容**:
1. **技術名とタグ**
2. **概要**: この技術の説明
3. **使用場所**: 東海部品工業サイトのどこで使われているか（ファイルパスとリンク）
4. **実装コード**:
   - コピペ可能なコードブロック
   - シンタックスハイライト
   - コピーボタン付き
5. **Claude Codeへの指示文**:
   - この技術を実装する際にClaude Codeに渡すプロンプト
   - コピペ可能
6. **セットアップ手順**（該当する場合）
7. **ワイヤーフレーム**（該当する場合）
   - 画像または図解
8. **関連技術**: 他の技術へのリンク

---

## 📋 技術リストの定義

以下の技術を`src/data/technologies.ts`に定義する:

```typescript
export interface Technology {
  slug: string              // URL用
  title: string             // 技術名
  category: string          // カテゴリー
  description: string       // 短い説明
  usedIn: string[]         // 使用場所（ファイルパス）
  code: string             // 実装コード
  prompt: string           // Claude Codeへの指示文
  setup?: string           // セットアップ手順
  wireframe?: string       // ワイヤーフレーム画像パス
  relatedTech: string[]    // 関連技術のslug
}
```

### 技術リストの例（最低限実装するもの）:

#### 1. レイアウト・構造
- **hero-carousel**: ヒーローセクション with カルーセル
- **responsive-header**: レスポンシブヘッダー（ハンバーガーメニュー）
- **footer**: フッター
- **two-column-layout**: 2カラムレイアウト
- **card-grid**: カードグリッドレイアウト

#### 2. UI コンポーネント
- **accordion-faq**: アコーディオンFAQ
- **tab-switcher**: タブ切り替えUI
- **flowchart**: フローチャート
- **image-overlay**: 画像オーバーレイ
- **cta-button**: CTAボタン

#### 3. アニメーション
- **fade-in**: フェードインアニメーション
- **scroll-trigger**: スクロールトリガーアニメーション
- **hover-effects**: ホバーエフェクト

#### 4. SEO・LLMO
- **metadata-setup**: メタデータ設定
- **structured-data**: 構造化データ（JSON-LD）
- **image-optimization**: 画像最適化
- **tagging-system**: タグ付けシステム（@work, @technique など）

#### 5. セットアップ
- **nextjs-setup**: Next.js 15プロジェクトセットアップ
- **tailwind-config**: Tailwind CSS設定
- **typescript-config**: TypeScript設定
- **folder-structure**: フォルダ構造のベストプラクティス

---

## 🎨 デザイン仕様

### カラー
- Primary: `#2563EB` (青)
- Secondary: `#4ADE80` (緑)
- Accent: `#F97316` (オレンジ)
- Background: `#F9FAFB` (薄いグレー)
- Text: `#1F2937` (濃いグレー)

### コンポーネント
- **コードブロック**:
  - 背景: `#1E293B` (ダークグレー)
  - テキスト: `#E2E8F0` (薄いグレー)
  - フォント: `monospace`
  - コピーボタン: 右上に配置

- **技術カード**:
  - 白背景
  - ホバー時: shadow-xl
  - 角丸: `rounded-lg`
  - パディング: `p-6`

---

## 📝 実装手順

### ステップ1: データ定義ファイルの作成
**ファイル**: `src/data/technologies.ts`

```typescript
export const technologies: Technology[] = [
  {
    slug: 'hero-carousel',
    title: 'ヒーローセクション with カルーセル',
    category: 'レイアウト・構造',
    description: '自動再生カルーセル付きのヒーローセクション。複数画像を5秒間隔で切り替え。',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx',
      '/src/app/works/tokai-parts-industry/page.tsx'
    ],
    code: `// HeroSection.tsx の実装コード全文をここに記載`,
    prompt: `以下の指示でヒーローセクションを実装してください：

1. Next.js 15のApp Routerを使用
2. 画像は/public/images/配下に配置
3. カルーセル機能:
   - useState, useEffectを使用
   - 5秒間隔で自動切り替え
   - 左右ボタンで手動切り替え可能
4. レスポンシブ:
   - モバイル: h-[500px]
   - デスクトップ: h-[700px]
5. オーバーレイ: bg-black/30
6. タイトルとサブタイトル表示`,
    relatedTech: ['image-optimization', 'responsive-header']
  },
  // ... 他の技術も同様に定義
]
```

### ステップ2: トップページの修正
**ファイル**: `src/app/page.tsx`

既存の内容を保持しつつ、以下のセクションを追加:
```tsx
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">技術ドキュメント</h2>
    <p className="text-gray-600 mb-8">
      このテンプレートで使用されている技術の詳細とClaude Codeへの指示文を確認できます
    </p>
    <Link
      href="/tech"
      className="inline-block bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
    >
      技術一覧を見る →
    </Link>
  </div>
</section>
```

### ステップ3: 技術一覧ページの作成
**ファイル**: `src/app/tech/page.tsx`

```tsx
import { technologies } from '@/data/technologies'
import Link from 'next/link'

export default function TechListPage() {
  // カテゴリー別にグループ化
  const categories = [...new Set(technologies.map(t => t.category))]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">技術ドキュメント一覧</h1>
          <p className="text-blue-100">
            東海部品工業サイトで使用されている技術の一覧です。各技術をクリックすると、実装コードとClaude Codeへの指示文を確認できます。
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies
                .filter(tech => tech.category === category)
                .map(tech => (
                  <Link
                    key={tech.slug}
                    href={`/tech/${tech.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {tech.description}
                    </p>
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
```

### ステップ4: 個別技術詳細ページの作成
**ファイル**: `src/app/tech/[slug]/page.tsx`

```tsx
import { technologies } from '@/data/technologies'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'

export default function TechDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tech = technologies.find(t => t.slug === slug)

  if (!tech) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs bg-blue-400 px-3 py-1 rounded-full">
            {tech.category}
          </span>
          <h1 className="text-4xl font-bold mt-4">{tech.title}</h1>
          <p className="text-blue-100 mt-4">{tech.description}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* 使用場所 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">使用場所</h2>
          <ul className="list-disc list-inside space-y-2">
            {tech.usedIn.map(path => (
              <li key={path} className="text-gray-700">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {path}
                </code>
              </li>
            ))}
          </ul>
        </section>

        {/* 実装コード */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">実装コード</h2>
          <div className="relative">
            <CopyButton text={tech.code} />
            <pre className="bg-[#1E293B] text-[#E2E8F0] p-6 rounded-lg overflow-x-auto">
              <code>{tech.code}</code>
            </pre>
          </div>
        </section>

        {/* Claude Codeへの指示文 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Claude Codeへの指示文</h2>
          <p className="text-gray-600 mb-4">
            以下の指示文をClaude Codeにコピペして使用してください：
          </p>
          <div className="relative">
            <CopyButton text={tech.prompt} />
            <pre className="bg-green-50 border-2 border-green-200 text-gray-800 p-6 rounded-lg overflow-x-auto whitespace-pre-wrap">
              {tech.prompt}
            </pre>
          </div>
        </section>

        {/* セットアップ */}
        {tech.setup && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">セットアップ手順</h2>
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-800">
                {tech.setup}
              </pre>
            </div>
          </section>
        )}

        {/* 関連技術 */}
        {tech.relatedTech.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">関連技術</h2>
            <div className="flex flex-wrap gap-3">
              {tech.relatedTech.map(relatedSlug => {
                const related = technologies.find(t => t.slug === relatedSlug)
                return related ? (
                  <Link
                    key={relatedSlug}
                    href={`/tech/${relatedSlug}`}
                    className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {related.title}
                  </Link>
                ) : null
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
```

### ステップ5: コピーボタンコンポーネントの作成
**ファイル**: `src/components/CopyButton.tsx`

```tsx
'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium">コピーしました！</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span className="text-sm font-medium">コピー</span>
        </>
      )}
    </button>
  )
}
```

---

## ✅ 完成の定義

以下がすべて動作すること:
1. ✅ トップページから技術一覧へのリンクが機能
2. ✅ 技術一覧ページでカテゴリー別に技術が表示
3. ✅ 各技術カードをクリックで詳細ページへ遷移
4. ✅ 詳細ページでコードとプロンプトが表示
5. ✅ コピーボタンが機能（クリップボードにコピー）
6. ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ）
7. ✅ 最低15個の技術が定義されている

---

## 🚨 重要な注意事項

1. **絶対に絵文字を使用しない**
2. **すべてのコードは実際に東海部品工業サイトで使われているものを抽出**
3. **Claude Codeへの指示文は具体的で再現可能なものにする**
4. **コピペですぐに使えることを最優先**
5. **パスは正確に記載（/src/ から始める）**

---

## 📞 次世代Claude Codeへ

この指示書を読んだら、以下の順序で作業を進めてください：

1. `src/data/technologies.ts` を作成し、最低15個の技術を定義
2. `src/components/CopyButton.tsx` を作成
3. `src/app/tech/page.tsx` を作成（技術一覧）
4. `src/app/tech/[slug]/page.tsx` を作成（詳細ページ）
5. `src/app/page.tsx` に技術ドキュメントセクションを追加
6. 動作確認（すべてのリンクとコピー機能）

各ステップ完了後、必ず動作確認をすること！
