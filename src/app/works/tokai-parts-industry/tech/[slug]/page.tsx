import { technologies } from '@/data/technologies'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'
import Link from 'next/link'

export default async function TokaiTechDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tech = technologies.find(t => t.slug === slug)

  if (!tech) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/works/tokai-parts-industry/tech" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← 技術一覧に戻る
          </Link>
          <span className="text-xs bg-blue-400 px-3 py-1 rounded-full block mt-4 inline-block">
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

        {/* プレビュー */}
        {tech.preview && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">プレビュー</h2>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
              <div dangerouslySetInnerHTML={{ __html: tech.preview }} />
            </div>
          </section>
        )}

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
                    href={`/works/tokai-parts-industry/tech/${relatedSlug}`}
                    className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {related.title}
                  </Link>
                ) : null
              })}
            </div>
          </section>
        )}

        {/* 戻るリンク */}
        <div className="mt-12">
          <Link
            href="/works/tokai-parts-industry/tech"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors"
          >
            ← 技術一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
