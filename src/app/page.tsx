/**
 * Web Template Library - 作品一覧ページ
 *
 * すべての作品をカード形式で表示
 */

import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/design-system/components/primitives'

const works = [
  {
    id: 'tokai-parts-industry',
    title: 'サンプル作品 - 製造業コーポレートサイト',
    category: '製造業 コーポレートサイト',
    description: '自動車部品製造会社のコーポレートサイト。採用特化型のデザインとコンテンツ戦略。',
    image: '/works/tokai-parts-industry/images/TOP/1.jpg',
    tags: ['製造業', 'コーポレートサイト', '採用特化', 'Next.js', 'Tailwind CSS'],
    path: '/works/tokai-parts-industry',
  },
  // 今後追加される作品
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ヘッダー */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Web Template Library
          </h1>
          <p className="text-lg text-gray-600">
            個人的な技術アーカイブ - 作品の完全実装コレクション
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-6 py-12">
        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {works.length}
            </div>
            <div className="text-sm text-gray-600">作品数</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              100+
            </div>
            <div className="text-sm text-gray-600">技術タグ</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              ∞
            </div>
            <div className="text-sm text-gray-600">成長中</div>
          </Card>
        </div>

        {/* 作品一覧 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">作品一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <Link key={work.id} href={work.path}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                  {/* 画像 */}
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* コンテンツ */}
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      {work.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {work.description}
                    </p>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-2">
                      {work.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {work.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{work.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 技術ドキュメントセクション */}
        <section className="mt-20 py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl">
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

        {/* フッター情報 */}
        <footer className="mt-16 pt-8 border-t text-center text-gray-600">
          <p className="mb-2">
            作品を追加するには、
            <code className="mx-2 px-2 py-1 bg-gray-100 rounded text-sm">
              src/app/works/[作品名]/page.tsx
            </code>
            を作成
          </p>
          <p className="text-sm">
            詳細: <Link href="/docs" className="text-blue-600 hover:underline">作品追加手順を見る →</Link>
          </p>
        </footer>
      </main>
    </div>
  )
}
