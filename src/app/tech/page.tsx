'use client'

import { technologies } from '@/data/technologies'
import Link from 'next/link'
import { useState } from 'react'

export default function TechListPage() {
  // プロジェクトのリストを取得
  const projects = [...new Set(technologies.map(t => t.project))]

  // 選択されたプロジェクト（nullは全プロジェクト）
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // フィルター後の技術
  const filteredTechs = selectedProject
    ? technologies.filter(t => t.project === selectedProject)
    : technologies

  // カテゴリー別にグループ化
  const categories = [...new Set(filteredTechs.map(t => t.category))]

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
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* プロジェクトフィルター */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">プロジェクトで絞り込み</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedProject(null)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedProject === null
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              すべて
            </button>
            {projects.map(project => (
              <button
                key={project}
                onClick={() => setSelectedProject(project)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedProject === project
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {project}
              </button>
            ))}
          </div>
        </div>

        {/* 技術一覧 */}
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
              {category}
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
                    <p className="text-sm text-gray-600 mb-4">
                      {tech.description}
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
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
        ))}
      </main>
    </div>
  )
}
