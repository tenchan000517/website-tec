'use client'

import { technologies } from '@/data/technologies'
import Link from 'next/link'
import { useState, useMemo } from 'react'

// タブの順番を定義
const TAB_ORDER = [
  'UIパーツ',
  'フロントエンド',
  'API連携',
  'AI生成',
  'サービス別',
  'ナレッジ',
  '開発スキル'
]

// タブの色を定義
const TAB_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'UIパーツ': { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600' },
  'フロントエンド': { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600' },
  'API連携': { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600' },
  'AI生成': { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500' },
  'サービス別': { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500' },
  'ナレッジ': { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600' },
  '開発スキル': { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-600' }
}

export default function TechListPage() {
  // カテゴリからタブとサブカテゴリを抽出
  const parseCategory = (category: string) => {
    const parts = category.split(' > ')
    return {
      tab: parts[0] || 'その他',
      subCategory: parts[1] || 'その他'
    }
  }

  // タブ一覧を取得（定義した順番で）
  const tabs = useMemo(() => {
    const existingTabs = [...new Set(technologies.map(t => parseCategory(t.category).tab))]
    return TAB_ORDER.filter(tab => existingTabs.includes(tab))
  }, [])

  // 選択されたタブ
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0] || 'UIパーツ')

  // 選択されたサブカテゴリ（nullは全サブカテゴリ）
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)

  // 選択されたプロジェクト（nullは全プロジェクト）
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // 選択されたタブ内のサブカテゴリ一覧
  const subCategories = useMemo(() => {
    const subCats = technologies
      .filter(t => parseCategory(t.category).tab === selectedTab)
      .map(t => parseCategory(t.category).subCategory)
    return [...new Set(subCats)].sort()
  }, [selectedTab])

  // プロジェクト一覧
  const projects = useMemo(() => {
    return [...new Set(technologies.map(t => t.project))].sort()
  }, [])

  // フィルター後の技術
  const filteredTechs = useMemo(() => {
    return technologies.filter(t => {
      const { tab, subCategory } = parseCategory(t.category)
      const tabMatch = tab === selectedTab
      const subCatMatch = selectedSubCategory === null || subCategory === selectedSubCategory
      const projectMatch = selectedProject === null || t.project === selectedProject
      return tabMatch && subCatMatch && projectMatch
    })
  }, [selectedTab, selectedSubCategory, selectedProject])

  // タブ内のサブカテゴリ別にグループ化
  const groupedBySubCategory = useMemo(() => {
    const groups: Record<string, typeof technologies> = {}
    filteredTechs.forEach(tech => {
      const { subCategory } = parseCategory(tech.category)
      if (!groups[subCategory]) groups[subCategory] = []
      groups[subCategory].push(tech)
    })
    return groups
  }, [filteredTechs])

  // タブ切り替え時にサブカテゴリをリセット
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab)
    setSelectedSubCategory(null)
  }

  // 現在のタブの色を取得
  const currentTabColor = TAB_COLORS[selectedTab] || TAB_COLORS['開発スキル']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-[#2563EB] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-blue-200 hover:text-white mb-4 inline-block text-sm">
            ← ホームに戻る
          </Link>
          <h1 className="text-3xl font-bold mb-2">技術ドキュメント一覧</h1>
          <p className="text-blue-200 text-sm">
            全 {technologies.length} 件 / 表示中 {filteredTechs.length} 件
          </p>
        </div>
      </header>

      {/* タブナビゲーション */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {tabs.map(tab => {
              const tabColor = TAB_COLORS[tab] || TAB_COLORS['開発スキル']
              const isSelected = selectedTab === tab
              const count = technologies.filter(t => parseCategory(t.category).tab === tab).length
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                    isSelected
                      ? `${tabColor.text} ${tabColor.border}`
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                  <span className={`ml-2 text-xs ${isSelected ? tabColor.text : 'text-gray-400'}`}>
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* フィルターエリア */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            {/* サブカテゴリフィルター */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                サブカテゴリ
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSubCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedSubCategory === null
                      ? `${currentTabColor.bg} text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  すべて
                </button>
                {subCategories.map(subCat => (
                  <button
                    key={subCat}
                    onClick={() => setSelectedSubCategory(subCat)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedSubCategory === subCat
                        ? `${currentTabColor.bg} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {subCat}
                  </button>
                ))}
              </div>
            </div>

            {/* プロジェクトフィルター */}
            <div className="w-full lg:w-auto">
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                プロジェクト
              </label>
              <select
                value={selectedProject || ''}
                onChange={(e) => setSelectedProject(e.target.value || null)}
                className="w-full lg:w-48 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">すべて</option>
                {projects.map(project => (
                  <option key={project} value={project}>
                    {project}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 技術一覧 */}
        {filteredTechs.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">条件に一致する技術が見つかりませんでした。</p>
            <button
              onClick={() => {
                setSelectedSubCategory(null)
                setSelectedProject(null)
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              フィルターをリセット
            </button>
          </div>
        ) : (
          Object.entries(groupedBySubCategory)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([subCategory, techs]) => (
              <section key={subCategory} className="mb-10">
                <h2 className={`text-xl font-bold mb-4 pb-2 border-b-2 ${currentTabColor.border} ${currentTabColor.text}`}>
                  {subCategory}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({techs.length}件)
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techs.map(tech => (
                    <Link
                      key={tech.slug}
                      href={`/tech/${tech.slug}`}
                      className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg hover:border-gray-300 transition-all"
                    >
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                        {tech.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {tech.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${currentTabColor.bg} bg-opacity-10 ${currentTabColor.text}`}>
                          {parseCategory(tech.category).subCategory}
                        </span>
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
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
