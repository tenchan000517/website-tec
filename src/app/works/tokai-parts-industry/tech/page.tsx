import { technologies } from '@/data/technologies'
import Link from 'next/link'

export default function TokaiTechListPage() {
  // 東海部品工業の技術のみフィルター
  const tokaiTechs = technologies.filter(t => t.project === 'tokai-parts-industry')

  // カテゴリー別にグループ化
  const categories = [...new Set(tokaiTechs.map(t => t.category))]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl font-bold mb-4">技術ドキュメント一覧</h1>
          <p className="text-blue-100">
            このプロジェクトで使用されている技術の一覧です。各技術をクリックすると、実装コードとClaude Codeへの指示文を確認できます。
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
    </div>
  )
}
