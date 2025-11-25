/**
 * @work フジタ電業株式会社 お知らせページ
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
  title: 'お知らせ | フジタ電業株式会社',
  description: 'フジタ電業の最新情報、お知らせ、プレスリリース、イベント情報をお届けします。',
  keywords: ['フジタ電業', 'お知らせ', 'ニュース', '最新情報', 'プレスリリース'],
}

// Sample news data
const newsData = [
  {
    id: 1,
    date: '2025.03.15',
    category: 'プレスリリース',
    categoryColor: 'blue',
    title: '新型空箱供給装置の開発完了について',
    summary: '省スペース化と高速化を実現した新型空箱供給装置の開発が完了し、4月より販売を開始いたします。生産性が従来機比30%向上します。'
  },
  {
    id: 2,
    date: '2025.03.01',
    category: 'お知らせ',
    categoryColor: 'green',
    title: '環境活動への取り組みが表彰されました',
    summary: '当社の環境保護活動が評価され、三重県より「環境貢献企業」として表彰されました。'
  },
  {
    id: 3,
    date: '2025.02.20',
    category: 'イベント',
    categoryColor: 'orange',
    title: '技術展示会に出展いたします',
    summary: '3月開催の産業機械展に新製品を出展いたします。ブース番号はA-123です。皆様のご来場をお待ちしております。'
  },
  {
    id: 4,
    date: '2025.02.10',
    category: 'お知らせ',
    categoryColor: 'green',
    title: '品質管理システムの認証更新',
    summary: 'ISO 9001の認証を更新いたしました。引き続き、高品質な製品の提供に努めてまいります。'
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
    title: '特殊電磁ブレーキの新技術開発に成功',
    summary: '省電力化と長寿命化を両立した特殊電磁ブレーキの新技術開発に成功いたしました。今後の製品展開にご期待ください。'
  },
  {
    id: 7,
    date: '2024.12.20',
    category: 'お知らせ',
    categoryColor: 'green',
    title: '年末年始休業のお知らせ',
    summary: '誠に勝手ながら、2024年12月28日（土）～2025年1月5日（日）まで年末年始休業とさせていただきます。'
  },
  {
    id: 8,
    date: '2024.12.10',
    category: 'プレスリリース',
    categoryColor: 'blue',
    title: '協力工場との連携強化について',
    summary: '協力工場ネットワークの拡充により、より多様なニーズに対応可能な体制を構築いたしました。'
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
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">
                NEWS
              </h1>
              <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl font-medium">
                お知らせ
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg text-gray-700">
                フジタ電業の最新ニュースとお知らせをお届けします
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {newsData.map((news, index) => (
                <div
                  key={news.id}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      {/* Date */}
                      <div className="flex-shrink-0">
                        <time className="text-sm md:text-base font-semibold text-gray-500">
                          {news.date}
                        </time>
                      </div>

                      {/* Category Badge */}
                      <div className="flex-shrink-0">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.categoryColor)}`}>
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {news.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {news.summary}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      <span>詳しく見る</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
                  次へ
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                製品に関するお問い合わせ
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                空箱供給装置、特殊電磁ブレーキ、各種専用機について、
                お気軽にお問い合わせください。
              </p>
              <a
                href="/works/fujita-dengyo/contact"
                className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                お問い合わせはこちら
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
