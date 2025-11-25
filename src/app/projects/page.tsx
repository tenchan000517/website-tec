'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects, categoryLabels, type Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | null>(null);

  const categories = Object.keys(categoryLabels) as Project['category'][];

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#2563EB] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl font-bold mb-4">プロジェクト一覧</h1>
          <p className="text-blue-100">
            制作したWebサイト・アプリケーションの一覧です。
          </p>
          <p className="text-blue-200 mt-2 text-sm">
            全 {projects.length} 件 / 表示中 {filteredProjects.length} 件
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* カテゴリーフィルター */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">カテゴリーで絞り込み</h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                フィルターをリセット
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === null
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              すべて
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {categoryLabels[category]}
                <span className="ml-1 text-xs opacity-70">
                  ({projects.filter(p => p.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* プロジェクトカード一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.url}
              name={project.name}
              url={project.url}
              category={categoryLabels[project.category]}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
