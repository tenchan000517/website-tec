/**
 * @work 東海部品工業 TBKのクルマづくりページ
 * @category 製造業 コーポレートサイト
 *
 * === ページ構成 ===
 * @technique ページヒーロー実装
 * @technique セクション構成
 * @technique 特徴説明レイアウト
 * @technique ポイント別表示（POINT 01-03）
 * @technique 画像+テキストレイアウト
 * @technique イラスト活用
 * @technique 地図表示
 * @technique CTAセクション配置
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique 左右交互レイアウト
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique セクション間スペーサー
 * @technique 2カラムレイアウト（画像+テキスト）
 * @technique 画像とイラストの使い分け
 * @technique ポイント番号装飾
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータ：製造プロセス特化
 * @seo ページタイトル最適化
 * @seo キーワード：製造、クルマづくり、品質管理
 * @llmo 構造化データ：製造プロセス
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique スクロール再発火アニメーション
 * @technique 左右からのスライドインアニメーション
 * @technique ホバーエフェクト
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + オレンジ#FF6B35 + シアン#06B6D4
 * @design フォント：游ゴシック + Inter
 * @design 背景画像オーバーレイ
 * @design ブルー背景透過度調整
 * @design テキストコントラスト最適化
 * @design ポイント番号デザイン（POINT 01、02、03）
 * @design 角丸：16px
 * @design イラスト活用（製造プロセス）
 * @design 地図デザイン
 * @design グラデーション背景
 *
 * === UI要素 ===
 * @ui ページヒーロー（背景画像 + オーバーレイ）
 * @ui 英語タイトル + 日本語サブタイトル
 * @ui ポイント番号バッジ
 * @ui テキストブロック
 * @ui 画像カード
 * @ui イラスト表示
 * @ui 地図表示
 * @ui CTAボタン（RECRUIT、CONTACT）
 * @ui アイコン付きボタン
 * @ui 詳しくはこちらボタン
 * @ui 共通ヘッダー・フッター
 *
 * === コンテンツ・テキスト ===
 * @content TBKの特徴説明
 * @content 多品種自動生産の説明
 * @content 骨格部品製造の説明
 * @content 客先ニーズ対応の説明
 * @content テキスト量調整
 * @content 技術情報表現
 * @content 製造プロセス説明
 * @content 地理的優位性の表現
 *
 * === 技術・システム ===
 * @technique 背景画像固定（background-attachment）
 * @technique オーバーレイ実装
 * @technique コンポーネント分離設計
 * @technique SVGアイコン使用
 * @technique 条件付きスタイリング
 */

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'
import '../animations.css'

export const metadata: Metadata = {
  title: 'TBKのクルマづくり | 東海部品工業株式会社',
  description: '東海部品工業の製造プロセスと特徴をご紹介します。多品種自動生産、骨格部品の製造、お客様のそばでの生産体制により、高品質な製品を提供しています。',
  keywords: ['東海部品工業', 'TBK', 'クルマづくり', '製造プロセス', '多品種生産', '骨格部品', '品質管理'],
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/works/tokai-parts-industry/images/manufacturing/1.jpg"
              alt="TBKのクルマづくり"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/70"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">
              MANUFACTURING
            </h1>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-xl md:text-2xl font-medium">
              TBKのクルマづくり
            </p>
          </div>
        </section>

        {/* TBK Features Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  TBKの特徴
                </h2>
              </div>

              {/* Features Content */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 animate-fade-up">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  当社は、トヨタ車体グループに属し、自動車の骨格であるプラットホームの製造を担っています。トヨタ車体に隣接した立地にあり、２つの工場を構え、そのメリットを最大限に活かしながら「実車」と「信頼」を軸として、トヨタ生産方式で培った技術を駆使し、安定した高品質を創り続けています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Point 01: Multi-variety Production */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1 animate-fade-up">
                <div className="mb-6">
                  <span className="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
                  <span className="text-cyan-500 font-bold text-5xl ml-2">01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  多品種自動生産
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    複雑なポイントを融合により、
                  </p>
                  <p>
                    多品種車種に対応する自動設備を実現し、
                  </p>
                  <p>
                    高い生産効率で製造をしています。
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/works/tokai-parts-industry/images/manufacturing/1.jpg"
                    alt="多品種自動生産 - 製造設備"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Point 02: Body Frame Manufacturing */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image/Illustration */}
              <div className="order-1 animate-fade-up">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/works/tokai-parts-industry/images/manufacturing/2.jpg"
                      alt="骨格（足回り）部品の製造 - 製造プロセスイラスト"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="mb-6">
                  <span className="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
                  <span className="text-cyan-500 font-bold text-5xl ml-2">02</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  骨格（足回り）部品の製造
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                  <p>
                    ミニバン・SUV車中心に車の骨格部品であるプラットホーム部品を製造しています。
                  </p>
                  <p>
                    製造している部品は材料・溶接など中型車であり、それに応じた設備や製造管理・安全の徹底を実施しています。これからの自動運転時代の骨格（EV化）に対応、出迎え対応を目指しています。
                  </p>
                </div>
                <Link
                  href="/works/tokai-parts-industry/product"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  詳しくはこちら
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Point 03: Customer-Centric */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1 animate-fade-up">
                <div className="mb-6">
                  <span className="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
                  <span className="text-cyan-500 font-bold text-5xl ml-2">03</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  常にお客様のそばに（客先ニーズ）
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    お客様に近い立地条件により、客先ラインの組立工程に合わせてジャストインタイムな供給。
                  </p>
                  <p>
                    リードタイムを短縮することで在庫の抑制に貢献しています。
                  </p>
                  <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                    <p className="text-sm font-semibold text-blue-900">
                      ※お客様のことを、必要なときに、必要なだけお届けすること
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Illustration */}
              <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <div className="relative aspect-square">
                    <Image
                      src="/works/tokai-parts-industry/images/manufacturing/2.jpg"
                      alt="立地マップ - TBK工場と顧客の位置関係"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 font-medium">
                      トヨタ車体グループとの近接した立地
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
                  私たちのこだわり
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">高品質</h3>
                  <p className="text-gray-600 leading-relaxed">
                    徹底した品質管理により、安定した高品質を実現しています。
                  </p>
                </div>

                {/* Efficiency */}
                <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">高効率</h3>
                  <p className="text-gray-600 leading-relaxed">
                    多品種自動生産により、効率的な製造を実現しています。
                  </p>
                </div>

                {/* Flexibility */}
                <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">柔軟性</h3>
                  <p className="text-gray-600 leading-relaxed">
                    お客様のニーズに迅速に対応し、ジャストインタイム供給を実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Recruit CTA */}
              <Link href="/works/tokai-parts-industry/recruit" className="group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-12 text-center text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">RECRUIT</h3>
                  <p className="text-base mb-4">人材採用に興味ある方</p>
                  <p className="text-sm mb-6">一緒にたたかいませんもっともやかいになるとこ</p>
                  <div className="inline-block px-8 py-3 bg-white text-orange-600 rounded-full font-bold group-hover:bg-orange-50 transition-colors">
                    詳しくはこちら
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
                  <h3 className="text-3xl font-bold mb-3">CONTACT</h3>
                  <p className="text-base mb-4">各種提示工事、製品に関する工事</p>
                  <p className="text-sm mb-6">お問い合わせにご連絡はこちらからお願いください。</p>
                  <div className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-bold group-hover:bg-blue-50 transition-colors">
                    お問い合わせ
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
