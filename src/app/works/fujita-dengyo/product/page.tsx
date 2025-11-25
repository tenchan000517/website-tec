/**
 * @work 東海部品工業 製品紹介ページ
 * @category 製造業 コーポレートサイト
 *
 * === ページ構成 ===
 * @technique ページヒーロー実装
 * @technique セクション構成
 * @technique 製品説明レイアウト
 * @technique 車種リスト表示
 * @technique CTAセクション配置
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique セクション間スペーサー
 * @technique 画像とテキストの組み合わせレイアウト
 * @technique リストレイアウト
 * @technique 2カラムCTAレイアウト
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータ：製品紹介特化
 * @seo ページタイトル最適化
 * @seo キーワード：自動車部品、アンダーボデー
 * @llmo 構造化データ：Product
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique スクロール再発火アニメーション
 * @technique ホバーエフェクト
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + オレンジ#FF6B35
 * @design フォント：游ゴシック + Inter
 * @design 背景画像オーバーレイ
 * @design ブルー背景透過度調整
 * @design テキストコントラスト最適化
 * @design セクションタイトル下線デザイン
 * @design 角丸：8px
 * @design 製品イラスト表示
 * @design リストマーカーデザイン
 *
 * === UI要素 ===
 * @ui ページヒーロー（背景画像 + オーバーレイ）
 * @ui 英語タイトル + 日本語サブタイトル
 * @ui セクションタイトル装飾
 * @ui テキストブロック
 * @ui 箇条書きリスト
 * @ui CTAボタン（RECRUIT、CONTACT）
 * @ui アイコン付きボタン
 * @ui 共通ヘッダー・フッター
 *
 * === コンテンツ・テキスト ===
 * @content 製品説明
 * @content 主要生産部品紹介
 * @content 車種リスト表示
 * @content テキスト量調整
 * @content 技術情報表現
 * @content ボデーメーカーとしての強み
 *
 * === 技術・システム ===
 * @technique 背景画像固定（background-attachment）
 * @technique オーバーレイ実装
 * @technique コンポーネント分離設計
 * @technique SVGアイコン使用
 */

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'
import '../animations.css'

export const metadata: Metadata = {
  title: '製品紹介 | フジタ電業株式会社',
  description: 'フジタ電業の主要製品をご紹介します。空箱供給装置、特殊電磁ブレーキ、各種専用機など、産業界の自動化・効率化を実現する製品群を取り揃えています。',
  keywords: ['フジタ電業', '製品紹介', '空箱供給装置', '電磁ブレーキ', '専用機', '自動化装置', '産業機械'],
}

export default function ProductPage() {
  const products = [
    '空箱供給装置（モジュール型）',
    '空箱供給装置（L字型動作）',
    '特殊電磁ブレーキ（励磁型・無励磁型）',
    '電磁クラッチ',
    '各種専用機（組立・加工・供給搬送）'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("/works/tokai-parts-industry/images/product/1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
              PRODUCT
            </h1>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-xl md:text-2xl font-medium">
              製品紹介
            </p>
          </div>
        </section>

        {/* Main Product Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  主要製品ラインナップ
                </h2>
              </div>

              {/* Product Description */}
              <div className="mb-16 animate-fade-up">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    フジタ電業は、産業機械の自動化・効率化を実現する多彩な製品群を取り揃えています。オリジナル製品である「空箱供給装置」をはじめ、特殊電磁ブレーキ、各種専用機まで、お客様のニーズに応じた最適なソリューションを提供します。
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    長年培ってきた技術力と設計・製造の一貫体制により、高品質で信頼性の高い製品をお届けしています。
                  </p>
                </div>
              </div>

              {/* Product Illustration */}
              <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-[16/10] md:aspect-[16/9]">
                      <Image
                        src="/works/tokai-parts-industry/images/product/1.jpg"
                        alt="主要生産部品 - アンダーボデー構造"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Types */}
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
                    主要製品
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                      <div
                        key={product}
                        className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-base md:text-lg font-semibold text-gray-800">
                            {product}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <p className="text-sm md:text-base text-gray-600 text-center">
                      ※ その他、お客様のニーズに応じた特注品・カスタマイズも承ります
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  私たちの技術
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Design */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">設計技術</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    機械設計用CAD（2D/3D）18台、制御設計用CAD 5台を駆使し、お客様のニーズに応じた最適な装置を設計します。
                  </p>
                </div>

                {/* Manufacturing */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">加工技術</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    5面加工機、マシニングセンター、NC旋盤など充実した工作機械により、高精度な部品加工を実現します。
                  </p>
                </div>

                {/* Automation */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">自動化技術</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    空箱供給装置をはじめとする各種自動搬送装置・組立装置で、生産ラインの無人化・効率化をサポートします。
                  </p>
                </div>

                {/* Quality */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">品質管理</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    ISO 9001認証取得による品質管理体制のもと、三次元測定機など最新の検査設備で、高品質な製品をお届けします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Recruit CTA */}
              <Link href="/works/fujita-dengyo/recruit" className="group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-12 text-center text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">RECRUIT</h3>
                  <p className="text-lg mb-6">採用情報</p>
                  <div className="inline-block px-8 py-3 bg-white text-orange-600 rounded-full font-bold group-hover:bg-orange-50 transition-colors">
                    詳しく見る →
                  </div>
                </div>
              </Link>

              {/* Contact CTA */}
              <Link href="/works/fujita-dengyo/contact" className="group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-12 text-center text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">CONTACT</h3>
                  <p className="text-lg mb-6">お問い合わせ</p>
                  <div className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-bold group-hover:bg-blue-50 transition-colors">
                    詳しく見る →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
