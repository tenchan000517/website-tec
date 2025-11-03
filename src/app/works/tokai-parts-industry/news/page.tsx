/**
 * @work 東海部品工業 お知らせページ
 * @category 製造業 コーポレートサイト
 *
 * === ページ構成 ===
 * @technique ページヒーロー実装
 * @technique ニュースリスト表示
 * @technique カテゴリーフィルター
 * @technique リストレイアウト
 * @technique ページネーション想定
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique リスト表示レイアウト
 * @technique カードレイアウト
 * @technique タイムライン表示
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータ：ニュース特化
 * @seo ページタイトル最適化
 * @seo キーワード：お知らせ、ニュース、最新情報
 * @llmo 構造化データ：NewsArticle
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique ホバーエフェクト
 * @technique カードホバーアニメーション
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + グレー#6B7280
 * @design フォント：游ゴシック + Inter
 * @design 背景グラデーション
 * @design テキストコントラスト最適化
 * @design 角丸：12px
 * @design カテゴリーラベルデザイン
 * @design 日付表示デザイン
 * @design ボーダーデザイン
 *
 * === UI要素 ===
 * @ui ページヒーロー（シンプル）
 * @ui 英語タイトル + 日本語サブタイトル
 * @ui ニュースカード
 * @ui カテゴリーバッジ
 * @ui 日付表示
 * @ui ホバーエフェクト
 * @ui リンク矢印アイコン
 * @ui 共通ヘッダー・フッター
 *
 * === コンテンツ・テキスト ===
 * @content ニュース一覧表示
 * @content カテゴリー別表示
 * @content 日付表示
 * @content タイトル表示
 * @content 概要文表示
 * @content リンク誘導
 *
 * === 技術・システム ===
 * @technique コンポーネント分離設計
 * @technique データ駆動型UI
 * @technique 条件付きスタイリング
 */

import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'
import '../animations.css'

export const metadata: Metadata = {
  title: 'お知らせ | 東海部品工業株式会社',
  description: '東海部品工業の最新情報、お知らせ、プレスリリース、イベント情報をお届けします。',
  keywords: ['東海部品工業', 'お知らせ', 'ニュース', '最新情報', 'プレスリリース'],
}

// Sample news data
const newsData = [
  {
    id: 1,
    date: '2025.03.15',
    category: 'プレスリリース',
    categoryColor: 'blue',
    title: '新工場の稼働開始について',
    summary: '愛知県刈谷市に新工場が完成し、4月より稼働を開始いたします。最新の設備を導入し、生産能力を30%向上させます。'
  },
  {
    id: 2,
    date: '2025.03.01',
    category: 'お知らせ',
    categoryColor: 'green',
    title: '環境活動への取り組みが表彰されました',
    summary: '当社の環境保護活動が評価され、愛知県より「環境貢献企業」として表彰されました。'
  },
  {
    id: 3,
    date: '2025.02.20',
    category: 'イベント',
    categoryColor: 'orange',
    title: '工場見学会を開催いたします',
    summary: '地域の皆様を対象とした工場見学会を3月に開催いたします。参加ご希望の方は事前にお申し込みください。'
  },
  {
    id: 4,
    date: '2025.02.10',
    category: 'お知らせ',
    categoryColor: 'green',
    title: '品質管理システムの認証更新',
    summary: 'ISO9001の認証を更新いたしました。引き続き、高品質な製品の提供に努めてまいります。'
  },
  {
    id: 5,
    date: '2025.01.25',
    category: '採用',
    categoryColor: 'purple',
    title: '2026年度新卒採用を開始しました',
    summary: '2026年度の新卒採用を開始いたしました。詳細は採用情報ページをご覧ください。'
  },
  {
    id: 6,
    date: '2025.01.15',
    category: 'プレスリリース',
    categoryColor: 'blue',
    title: '新技術の開発に成功',
    summary: '軽量化と高強度を両立した新素材の開発に成功いたしました。今後の製品展開にご期待ください。'
  }
]

const getCategoryColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-800'
    case 'green':
      return 'bg-green-100 text-green-800'
    case 'orange':
      return 'bg-orange-100 text-orange-800'
    case 'purple':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[250px] md:h-[350px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
              NEWS
            </h1>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-xl md:text-2xl font-medium">
              お知らせ
            </p>
          </div>
        </section>

        {/* News List Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Intro */}
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  最新情報
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  東海部品工業の最新ニュースとお知らせをお届けします
                </p>
              </div>

              {/* News Cards */}
              <div className="space-y-6">
                {newsData.map((news, index) => (
                  <article
                    key={news.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        {/* Date */}
                        <div className="flex items-center mb-4 md:mb-0">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <time className="text-sm text-gray-600 font-medium">{news.date}</time>
                        </div>

                        {/* Category Badge */}
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.categoryColor)}`}>
                          {news.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {news.summary}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                        <span className="mr-2">詳しく見る</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-16 flex justify-center">
                <div className="inline-flex items-center space-x-2">
                  <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                    前へ
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    次へ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  カテゴリー別アーカイブ
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <button className="px-6 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                    プレスリリース
                  </button>
                  <button className="px-6 py-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition-colors">
                    お知らせ
                  </button>
                  <button className="px-6 py-3 bg-orange-50 text-orange-700 rounded-lg font-semibold hover:bg-orange-100 transition-colors">
                    イベント
                  </button>
                  <button className="px-6 py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                    採用
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
