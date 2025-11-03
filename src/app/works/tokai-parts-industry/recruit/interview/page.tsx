/**
 * @work 東海部品工業 先輩インタビュー一覧ページ
 * @category 製造業 リクルートサイト インタビュー
 *
 * === ページ構成 ===
 * @technique ヒーローセクション（社員写真グリッド）
 * @technique 事務・技術職セクション
 * @technique 技能職セクション
 * @technique インタビューカードグリッド
 * @technique FAQ & RECRUITMENTボタン
 *
 * === デザイン・ビジュアル ===
 * @design 配色：緑#4ADE80 + 青#2563EB + 白
 * @design 写真グリッドレイアウト（6列）
 * @design カードデザイン（緑・青のバリエーション）
 * @design ホバーエフェクト
 */

import Image from 'next/image'
import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '先輩インタビュー | リクルートサイト | 東海部品工業株式会社',
  description: '東海部品工業で活躍する先輩社員のインタビューをご紹介します。仕事のやりがいや職場の雰囲気を知ることができます。',
  keywords: ['東海部品工業', '先輩インタビュー', '社員紹介', '採用', 'リクルート'],
}

export default function InterviewListPage() {
  const officeInterviews = [
    { id: '01', name: 'N.Iさん', year: '2019年入社', dept: '経営管理', group: '財務・企画グループ', title: '経験を伴わず、組織開発の知識の開拓も親切に教えてくれました！', color: 'green' },
    { id: '02', name: 'M.Iさん', year: '2022年入社', dept: '生産管理', group: '安全衛生推進グループ', title: '会社だけでなく、現場とも向き合いながら組織を整理していく仕事に魅力を感じました！', color: 'blue' },
    { id: '03', name: 'K.Sさん', year: '2019年入社', dept: '技術課', group: 'プレス技術グループ', title: 'お客様と仲良くものづくりに反映していく、職場の住環境を味わおう。実践講義しよう。', color: 'green' },
  ]

  const technicalInterviews = [
    { id: '05', name: 'K.Mさん', year: '2011年入社', dept: '製造課', group: 'サブ・管理', title: 'チームリーダーとして、人をマネジメントする楽しさを実感しています', color: 'blue' },
    { id: '06', name: 'K.Nさん', year: '2022年入社', dept: '製造課', group: 'サブ・管理', title: '先輩にアドバイスをいただきながら、日々、自分の成長を実感しています', color: 'green' },
    { id: '07', name: 'Y.Aさん', year: '2021年入社', dept: '技術課', group: 'プレス技術', title: 'またたまと経験値を上げ！ 新世代ファイルに魅了されこと！', color: 'blue' },
    { id: '08', name: 'K.Kさん', year: '2016年入社', dept: '技術課', group: '知立技術', title: '「説得を守りなさい！」その他の先輩からの言葉により成長してきました！', color: 'green' },
    { id: '09', name: 'E.Mさん', year: '2022年入社', dept: '製造課', group: '知立工場', title: '溶接の技術を学びながら、職場全員が気を配ってくれたのでチャレンジ！', color: 'blue' },
    { id: '10', name: 'S.Tさん', year: '2019年入社', dept: 'いなべ工場', group: '工場管理', title: 'アットホームな雰囲気の中で、神びがに働けるお疲れを', color: 'green' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Hero Section - 社員写真グリッド */}
        <section className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* 6枚の社員写真をグリッド表示 */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-[3/4] overflow-hidden">
                <div className={`absolute inset-0 ${
                  num % 2 === 0 ? 'bg-gradient-to-b from-green-400/60 to-green-400/80' : 'bg-gradient-to-b from-blue-400/60 to-blue-400/80'
                }`}>
                  {/* 実際の社員写真を配置 */}
                </div>
              </div>
            ))}
          </div>

          {/* タイトルオーバーレイ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-serif italic text-2xl mb-2">Interview</p>
              <h1 className="text-4xl md:text-5xl font-bold">先輩インタビュー</h1>
            </div>
          </div>
        </section>

        {/* 事務・技術職 先輩インタビュー */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* セクションタイトル */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                事務・技術職 先輩インタビュー
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* インタビューカード */}
            <div className="grid md:grid-cols-3 gap-6">
              {officeInterviews.map((interview) => (
                <Link
                  key={interview.id}
                  href={`/works/tokai-parts-industry/recruit/interview/${interview.id}`}
                  className="group"
                >
                  <div className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                    interview.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    <div className="relative aspect-[3/4]">
                      {/* 実際の社員写真 */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

                      <div className="absolute top-4 left-4">
                        <div className={`inline-block px-4 py-2 rounded-lg text-white font-bold ${
                          interview.color === 'green' ? 'bg-green-600' : 'bg-blue-600'
                        }`}>
                          Interview {interview.id}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm mb-1">{interview.year} {interview.name}</p>
                        <p className="text-xs mb-3">{interview.dept} {interview.group}</p>
                        <p className="text-sm font-medium mb-4 line-clamp-3">
                          {interview.title}
                        </p>
                        <p className="text-orange-500 text-sm font-bold flex items-center">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 技能職 先輩インタビュー */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* セクションタイトル */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                技能職 先輩インタビュー
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* インタビューカード */}
            <div className="grid md:grid-cols-3 gap-6">
              {technicalInterviews.map((interview) => (
                <Link
                  key={interview.id}
                  href={`/works/tokai-parts-industry/recruit/interview/${interview.id}`}
                  className="group"
                >
                  <div className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                    interview.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    <div className="relative aspect-[3/4]">
                      {/* 実際の社員写真 */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

                      <div className="absolute top-4 left-4">
                        <div className={`inline-block px-4 py-2 rounded-lg text-white font-bold ${
                          interview.color === 'green' ? 'bg-green-600' : 'bg-blue-600'
                        }`}>
                          Interview {interview.id}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm mb-1">{interview.year} {interview.name}</p>
                        <p className="text-xs mb-3">{interview.dept} {interview.group}</p>
                        <p className="text-sm font-medium mb-4 line-clamp-3">
                          {interview.title}
                        </p>
                        <p className="text-orange-500 text-sm font-bold flex items-center">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </p>
                      </div>
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
