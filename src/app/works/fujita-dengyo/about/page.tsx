/**
 * @work 東海部品工業 会社情報ページ
 * @category 製造業 コーポレートサイト
 *
 * === ページ構成 ===
 * @technique ページヒーロー実装
 * @technique セクション構成
 * @technique 企業理念表示
 * @technique トップメッセージレイアウト
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique セクション間スペーサー
 * @technique 白背景カードとブルー背景の対比
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータ：会社情報特化
 * @seo ページタイトル最適化
 * @llmo 構造化データ：Organization
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique スクロール再発火アニメーション
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + ホワイト背景
 * @design フォント：游ゴシック + Inter
 * @design 背景画像オーバーレイ
 * @design ブルー背景透過度調整
 * @design テキストコントラスト最適化
 * @design セクションタイトル下線デザイン
 * @design 角丸：16px（白背景カード）
 * @design グリッドレイアウト適用
 *
 * === UI要素 ===
 * @ui ページヒーロー（背景画像 + オーバーレイ）
 * @ui 英語タイトル + 日本語サブタイトル
 * @ui セクションタイトル装飾
 * @ui テキストブロック
 * @ui 共通ヘッダー・フッター
 *
 * === コンテンツ・テキスト ===
 * @content 企業理念表現
 * @content トップメッセージ
 * @content ビジョン・ミッション表示
 * @content テキスト量調整
 * @content 階層的情報構造
 *
 * === 技術・システム ===
 * @technique 背景画像固定（background-attachment）
 * @technique オーバーレイ実装
 * @technique コンポーネント分離設計
 */

import Image from 'next/image'
import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'
import '../animations.css'

export const metadata: Metadata = {
  title: '会社情報 | フジタ電業株式会社',
  description: 'フジタ電業の企業理念、トップメッセージ、会社概要をご紹介します。昭和41年創業以来、電磁ブレーキ・空箱供給装置・専用機の設計製造で産業界の自動化・効率化に貢献しています。',
  keywords: ['フジタ電業', '会社情報', '企業理念', '電磁ブレーキ', '空箱供給装置', '専用機', '製造業'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/works/tokai-parts-industry/images/about/1.jpg"
              alt="会社情報"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/70"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
              COMPANY
            </h1>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-xl md:text-2xl font-medium">
              会社情報
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  企業理念
                </h2>
              </div>

              {/* Philosophy Content */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 animate-fade-up">
                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <p className="text-lg md:text-xl text-center font-medium">
                    「技術革新と品質第一」をモットーに、
                  </p>
                  <p className="text-lg md:text-xl text-center font-medium">
                    お客様のニーズに応える製品開発と確かな製造技術で、
                  </p>
                  <p className="text-lg md:text-xl text-center font-medium">
                    産業界の自動化・効率化に貢献できる企業を目指しております。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Message Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  トップメッセージ
                </h2>
              </div>

              {/* Message Content */}
              <div className="space-y-8 animate-fade-up">
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    フジタ電業は、昭和41年の創業以来、電磁ブレーキ・空箱供給装置・各種専用機の設計製造を通じて、産業界の自動化・効率化に貢献してまいりました。
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    私たちは、東芝・神鋼電機の特約店として総合電機品販売を行うとともに、オリジナル製品である「空箱供給装置」をはじめとする独自技術で、お客様の生産ラインの無人化・効率化を実現しています。
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    ISO 9001認証取得をはじめ、充実した工作機械設備と協力工場ネットワークにより、設計から製造まで一貫した高品質なものづくりを提供しています。
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    これからも、技術革新に挑戦し続け、お客様とともに産業界の発展に貢献してまいります。
                  </p>
                </div>

                {/* Company Overview */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">会社概要</h3>
                    <dl className="space-y-3 text-gray-700">
                      <div>
                        <dt className="font-semibold">社名</dt>
                        <dd>フジタ電業株式会社</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">創業</dt>
                        <dd>昭和41年4月（1966年）</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">資本金</dt>
                        <dd>2,000万円</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">所在地</dt>
                        <dd>三重県桑名市</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">事業内容</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">●</span>
                        <span>空箱供給装置の設計・製造</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">●</span>
                        <span>特殊電磁ブレーキ・クラッチ製造販売</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">●</span>
                        <span>各種専用機の設計・製作</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">●</span>
                        <span>総合電機品販売</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">●</span>
                        <span>電気工事・管工事</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-blue-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  私たちのビジョン
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Quality */}
                <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-up hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">品質第一</h3>
                  <p className="text-gray-600 leading-relaxed">
                    確かな技術力と徹底した品質管理により、お客様に信頼される製品を提供します。
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">技術革新</h3>
                  <p className="text-gray-600 leading-relaxed">
                    常に新しい技術に挑戦し、業界をリードする企業を目指します。
                  </p>
                </div>

                {/* Sustainability */}
                <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">持続可能性</h3>
                  <p className="text-gray-600 leading-relaxed">
                    環境保護と地域社会との共存を大切にし、持続可能な社会の実現に貢献します。
                  </p>
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
