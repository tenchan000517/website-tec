'use client'

import { technologies } from '@/data/technologies'
import Link from 'next/link'
import { useState, useMemo } from 'react'

export default function TechListPage() {
  // プロジェクトのリストを取得
  const projects = [...new Set(technologies.map(t => t.project))]

  // カテゴリーのリストを取得
  const allCategories = [...new Set(technologies.map(t => t.category))]

  // 選択されたプロジェクト（nullは全プロジェクト）
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // 選択されたカテゴリー（nullは全カテゴリー）
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // フィルター後の技術
  const filteredTechs = useMemo(() => {
    return technologies.filter(t => {
      const projectMatch = selectedProject === null || t.project === selectedProject
      const categoryMatch = selectedCategory === null || t.category === selectedCategory
      return projectMatch && categoryMatch
    })
  }, [selectedProject, selectedCategory])

  // フィルター後のカテゴリー別にグループ化
  const categories = [...new Set(filteredTechs.map(t => t.category))]

  // フィルターをリセット
  const resetFilters = () => {
    setSelectedProject(null)
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl font-bold mb-4">技術ドキュメント一覧</h1>
          <p className="text-blue-100">
            各プロジェクトで使用されている技術の一覧です。各技術をクリックすると、実装コードとClaude Codeへの指示文を確認できます。
          </p>
          <p className="text-blue-200 mt-2 text-sm">
            全 {technologies.length} 件 / 表示中 {filteredTechs.length} 件
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* フィルターセクション */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          {/* フィルターヘッダー */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">絞り込み</h2>
            {(selectedProject || selectedCategory) && (
              <button
                onClick={resetFilters}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                フィルターをリセット
              </button>
            )}
          </div>

          {/* カテゴリーフィルター */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">カテゴリー</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedCategory === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                すべて
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* プロジェクトフィルター */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3">プロジェクト</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedProject(null)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedProject === null
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                すべて
              </button>
              {projects.map(project => (
                <button
                  key={project}
                  onClick={() => setSelectedProject(project)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedProject === project
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {project}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 技術一覧 */}
        {filteredTechs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            条件に一致する技術が見つかりませんでした。
          </div>
        ) : (
          categories.map(category => (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                {category}
                <span className="text-sm font-normal text-gray-500 ml-3">
                  ({filteredTechs.filter(t => t.category === category).length}件)
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechs
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
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {tech.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                          {tech.category}
                        </span>
                        <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                          {tech.project}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  )
}
