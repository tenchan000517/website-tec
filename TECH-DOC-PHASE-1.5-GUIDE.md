# Phase 1.5 実装ガイド

**作成日**: 2025-11-04
**対象**: 次世代Claude Code
**重要度**: CRITICAL

---

## Phase 1.5の目的

Phase 1で作成した `/tech` は**全プロジェクト共通**の技術一覧ページです。
Phase 1.5では、**東海部品工業専用**の技術一覧ページを作成します。

### 2つの技術一覧ページ

1. **`/tech`** - 全プロジェクト共通（Claude Code向け）
   - フィルター機能付き
   - 共通デザイン

2. **`/works/tokai-parts-industry/tech`** - 東海部品工業専用（人間向け）
   - 東海部品工業の配色（青#2563EB + オレンジ#FF6B35）
   - 東海部品工業の技術のみ表示

---

## 作業手順（5ステップ）

### ステップ1: technologies.ts に project フィールドを追加

**ファイル**: `src/data/technologies.ts`

**現在のコード**:
```typescript
export interface Technology {
  slug: string
  title: string
  category: string
  description: string
  usedIn: string[]
  code: string
  prompt: string
  setup?: string
  wireframe?: string
  relatedTech: string[]
}
```

**修正後のコード**:
```typescript
export interface Technology {
  slug: string
  title: string
  category: string
  description: string
  project: string         // ← 追加
  usedIn: string[]
  code: string
  prompt: string
  setup?: string
  wireframe?: string
  relatedTech: string[]
}
```

**ダミー技術も修正**:
```typescript
export const technologies: Technology[] = [
  {
    slug: 'example-tech',
    title: '例：技術名',
    category: 'レイアウト・構造',
    description: 'これはダミーデータです。Phase 2で実際の技術データに置き換えます。',
    project: 'tokai-parts-industry',  // ← 追加
    usedIn: [
      '/src/app/works/tokai-parts-industry/page.tsx'
    ],
    code: `// 実装コードの例
export default function Example() {
  return <div>Example</div>
}`,
    prompt: `この技術を実装する際の指示文をここに記載します。

1. 具体的な手順
2. 使用する技術スタック
3. レスポンシブ対応
4. その他の注意事項`,
    relatedTech: []
  }
]
```

---

### ステップ2: 東海部品工業専用の技術一覧ページを作成

**ディレクトリを作成**:
```bash
mkdir -p /mnt/c/web-template-library/src/app/works/tokai-parts-industry/tech
```

**ファイル**: `src/app/works/tokai-parts-industry/tech/page.tsx`

**コード**:
```typescript
import { technologies } from '@/data/technologies'
import Link from 'next/link'
import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'

export default function TokaiTechListPage() {
  // 東海部品工業の技術のみフィルター
  const tokaiTechs = technologies.filter(t => t.project === 'tokai-parts-industry')
  
  // カテゴリー別にグループ化
  const categories = [...new Set(tokaiTechs.map(t => t.category))]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* ヒーローセクション（東海部品工業の配色） */}
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-[#2563EB] pb-2">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokaiTechs
                .filter(tech => tech.category === category)
                .map(tech => (
                  <Link
                    key={tech.slug}
                    href={`/works/tokai-parts-industry/tech/${tech.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {tech.description}
                    </p>
                    <span className="text-xs bg-blue-100 text-[#2563EB] px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </main>
      
      <Footer />
    </div>
  )
}
```

---

### ステップ3: 東海部品工業専用の技術詳細ページを作成

**ディレクトリを作成**:
```bash
mkdir -p /mnt/c/web-template-library/src/app/works/tokai-parts-industry/tech/\[slug\]
```

**ファイル**: `src/app/works/tokai-parts-industry/tech/[slug]/page.tsx`

**コード**: `src/app/tech/[slug]/page.tsx` をコピーして、以下を修正：
- Headerを東海部品工業のものに変更
- Footerを東海部品工業のものに変更
- 配色を東海部品工業の配色に変更（bg-[#2563EB]等）
- 戻るリンクを `/works/tokai-parts-industry/tech` に変更

---

### ステップ4: 共通ページにフィルター機能を追加

**ファイル**: `src/app/tech/page.tsx`

**修正内容**:
1. プロジェクトのリストを取得
2. プロジェクトで絞り込めるボタンを追加
3. 選択されたプロジェクトの技術のみ表示

（詳細な実装は共通ページなので、東海部品工業の配色は使用しない）

---

### ステップ5: 東海部品工業TOPページにリンクを追加

**ファイル**: `src/app/works/tokai-parts-industry/page.tsx`

**追加するコード**:
```typescript
{/* 技術ドキュメントセクション */}
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">技術ドキュメント</h2>
    <p className="text-gray-600 mb-8">
      このサイトで使用されている技術の詳細とClaude Codeへの指示文を確認できます
    </p>
    <Link
      href="/works/tokai-parts-industry/tech"
      className="inline-block bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
    >
      技術一覧を見る →
    </Link>
  </div>
</section>
```

---

## 完了の確認

Phase 1.5完了後、以下を確認：

1. `/tech` にアクセスして全プロジェクトの技術が表示される
2. `/works/tokai-parts-industry/tech` にアクセスして東海部品工業の技術のみ表示される
3. 東海部品工業専用ページが東海部品工業の配色になっている
4. 東海部品工業TOPページから技術一覧にアクセスできる

---

## Phase 1.5完了後

TECH-DOC-PROGRESS.mdを更新し、Phase 2に進んでください。
