/**
 * @work 東海部品工業 クロストーク一覧ページ
 * @category 製造業 リクルートサイト クロストーク
 *
 * === ページ構成 ===
 * @technique ヒーローセクション（社員写真2組）
 * @technique クロストークカード
 * @technique FAQ & RECRUITMENTボタン
 *
 * === デザイン・ビジュアル ===
 * @design 配色：緑#4ADE80 + 青#2563EB + 白
 * @design 写真グリッドレイアウト（左右分割）
 * @design カードデザイン
 */

import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'クロストーク | リクルートサイト | 東海部品工業株式会社',
  description: '東海部品工業の先輩社員によるクロストークをご紹介します。部署を超えた対談で、会社の魅力をお伝えします。',
  keywords: ['東海部品工業', 'クロストーク', '社員対談', '採用', 'リクルート'],
}

export default function CrosstalkListPage() {
  const crosstalks = [
    { id: '01', title: '技術部門の先輩・後輩座談会', members: [{ name: 'N.Tさん', dept: '技術課', group: '製品技術グループ' }, { name: 'I.Rさん', dept: '技術課', group: '製品技術グループ' }, { name: 'M.Rさん', dept: '技術課', group: '製品技術グループ' }] },
    { id: '02', title: '製造部門の上司・部下座談会', members: [{ name: 'H.Sさん', dept: 'いなべ工場', group: 'はずみ一課' }, { name: 'S.Sさん', dept: 'いなべ工場', group: '成形一課' }] },
  ]

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Hero Section - 社員写真 */}
        <section className="relative h-[500px]">
          <div className="grid grid-cols-2 h-full">
            {/* 左側：3人の社員 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-400/70 to-blue-500/80">
              {/* 実際の社員写真を配置 */}
            </div>

            {/* 右側：2人の社員 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-400/70 to-green-500/80">
              {/* 実際の社員写真を配置 */}
            </div>
          </div>

          {/* タイトルオーバーレイ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-serif italic text-3xl mb-4">Crosstalk</p>
              <h1 className="text-4xl md:text-5xl font-bold">クロストーク</h1>
            </div>
          </div>
        </section>

        {/* クロストーク一覧 */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {crosstalks.map((crosstalk, index) => (
                <Link
                  key={crosstalk.id}
                  href={`/works/tokai-parts-industry/recruit/crosstalk/${crosstalk.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                    {/* ヘッダー */}
                    <div className="bg-gradient-to-b from-gray-50 to-white px-8 py-6 text-center">
                      <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        Crosstalk {crosstalk.id}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        {crosstalk.title}
                      </h2>
                      <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                        {index === 0
                          ? '部品技術グループは、製品を支援する大きな役割が入ると、当社は安全部品による最強な工程を推進します。そのためのプロセスを確認せさせていくので、設備工事増税のために最も強いのだと、さまざまを基礎対策します。'
                          : '先輩後輩や部門を超えての問答で見える視点、それぞれの思いをモットーで語るスペシャルなクロストークをお届けします。'}
                      </p>
                    </div>

                    {/* メンバー */}
                    <div className="grid md:grid-cols-3 gap-6 px-8 py-8 bg-white">
                      {crosstalk.members.map((member) => (
                        <div key={member.name} className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                            {/* 実際の社員写真を配置 */}
                          </div>
                          <p className="font-bold text-gray-900 mb-1">{member.name}</p>
                          <p className="text-xs text-gray-600">{member.dept}</p>
                          <p className="text-xs text-gray-600">{member.group}</p>
                        </div>
                      ))}
                    </div>

                    {/* フッター */}
                    <div className="px-8 py-6 bg-gray-50 text-center">
                      <p className="text-orange-500 text-sm font-bold inline-flex items-center">
                        Read more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & RECRUITMENT Buttons */}
        <section className="py-16 bg-gradient-to-b from-green-400 to-green-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* FAQ */}
              <Link
                href="/works/tokai-parts-industry/recruit/faq"
                className="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-4 w-full md:w-auto"
              >
                <div>
                  <p className="text-blue-600 font-bold text-2xl">FAQ</p>
                  <p className="text-sm text-gray-600">よくある質問</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* RECRUITMENT */}
              <Link
                href="/works/tokai-parts-industry/recruit#recruitment"
                className="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-4 w-full md:w-auto"
              >
                <div>
                  <p className="text-blue-600 font-bold text-2xl">RECRUITMENT</p>
                  <p className="text-sm text-gray-600">募集情報</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
