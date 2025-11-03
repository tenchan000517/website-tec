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
  title: '製品紹介 | 東海部品工業株式会社',
  description: '東海部品工業の主要生産部品をご紹介します。当社は主として車体を形成しているボデー部品を車体を車の骨格作りを担うボデーメーカーとして車両の種類に応じた技術力を生産方式で社会に貢献しています。',
  keywords: ['東海部品工業', '製品紹介', '自動車部品', 'アンダーボデー', 'ボデー部品', 'エントリーカー', 'アルファード', 'ヴェルファイア'],
}

export default function ProductPage() {
  const vehicles = [
    'エントリーカー',
    'アルファード',
    'ヴェルファイア',
    'ヴォクシー',
    'ノア'
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
                  主要生産部品
                </h2>
              </div>

              {/* Product Description */}
              <div className="mb-16 animate-fade-up">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    当社は主として車体を形成しているボデー部品を車体を車の骨格づくりを担うボデーメーカーとして車両の種類に応じた技術力を生産方式で社会に貢献しています。
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    ボデー部品メーカーとして車両の種類に応じた技術力と生産方式により高い品質の製品を生産致しております。
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

              {/* Vehicle Types */}
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
                    主な車種
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vehicles.map((vehicle, index) => (
                      <div
                        key={vehicle}
                        className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                            {index + 1}
                          </div>
                          <span className="text-lg font-semibold text-gray-800">
                            {vehicle}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <p className="text-sm md:text-base text-gray-600 text-center">
                      ※ その他、トヨタ車体グループの各種車両に対応した部品を生産しています
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
                {/* Pressing */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">プレス加工</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    高精度なプレス加工技術により、複雑な形状の部品を高品質で生産します。最新の設備と熟練の技術者により、お客様のニーズに応えます。
                  </p>
                </div>

                {/* Welding */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">溶接組立</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    最先端の溶接技術により、確実で強固な接合を実現します。自動化ラインと熟練技術の融合により、高品質な組立を提供します。
                  </p>
                </div>

                {/* Quality */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">品質管理</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    厳格な品質管理体制のもと、すべての工程で徹底した検査を実施。お客様に安心していただける製品をお届けします。
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">技術革新</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    常に新しい技術開発に取り組み、生産性向上と品質改善を追求。お客様の期待を超える製品づくりを目指します。
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
              <Link href="/works/tokai-parts-industry/recruit" className="group">
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
              <Link href="/works/tokai-parts-industry/contact" className="group">
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
