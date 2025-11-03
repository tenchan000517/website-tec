/**
 * @work 東海部品工業 サステナビリティページ
 * @category 製造業 コーポレートサイト
 *
 * === ページ構成 ===
 * @technique ページヒーロー実装
 * @technique セクション構成
 * @technique 3カテゴリー構成（お客様・人材・地域環境）
 * @technique タブナビゲーション
 * @technique カテゴリー別コンテンツ表示
 * @technique ミッション・ロール図表
 * @technique 画像グリッドレイアウト
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique セクション間スペーサー
 * @technique グリッドレイアウト
 * @technique 2カラムレイアウト
 * @technique カードレイアウト
 * @technique ベン図デザイン
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータ：サステナビリティ特化
 * @seo ページタイトル最適化
 * @seo キーワード：サステナビリティ、CSR、環境活動
 * @llmo 構造化データ：組織活動
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique スクロール再発火アニメーション
 * @technique ホバーエフェクト
 * @technique カードホバーアニメーション
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + グリーン#10B981 + オレンジ#FF6B35
 * @design フォント：游ゴシック + Inter
 * @design 背景画像オーバーレイ
 * @design ブルー背景透過度調整
 * @design テキストコントラスト最適化
 * @design セクションタイトル下線デザイン
 * @design 角丸：16px
 * @design ベン図（円の重なり）デザイン
 * @design カテゴリー別カラーリング
 * @design グラデーション背景
 * @design アイコンデザイン
 *
 * === UI要素 ===
 * @ui ページヒーロー（背景画像 + オーバーレイ）
 * @ui 英語タイトル + 日本語サブタイトル
 * @ui カテゴリーセクション
 * @ui ミッション・ロール図
 * @ui 画像カード
 * @ui テキストブロック
 * @ui アイコン付きリスト
 * @ui 共通ヘッダー・フッター
 *
 * === コンテンツ・テキスト ===
 * @content お客様への取り組み
 * @content 品質管理活動説明
 * @content 人材への取り組み
 * @content 福利厚生情報
 * @content 地域・環境への取り組み
 * @content 環境保護活動
 * @content CSR活動紹介
 * @content テキスト量調整
 * @content 使命と役割の表現
 *
 * === 技術・システム ===
 * @technique 背景画像固定（background-attachment）
 * @technique オーバーレイ実装
 * @technique コンポーネント分離設計
 * @technique SVGアイコン使用
 * @technique 条件付きスタイリング
 */

import Image from 'next/image'
import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'
import '../animations.css'

export const metadata: Metadata = {
  title: 'サステナビリティ | 東海部品工業株式会社',
  description: '東海部品工業のサステナビリティ活動をご紹介します。お客様への品質管理活動、人材育成と働きやすい環境づくり、地域社会と環境への貢献活動に取り組んでいます。',
  keywords: ['東海部品工業', 'サステナビリティ', 'CSR', '環境活動', '品質管理', '人材育成', '地域貢献'],
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-blue-600">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("/works/tokai-parts-industry/images/for_region_environment/1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">
              SUSTAINABILITY
            </h1>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-xl md:text-2xl font-medium">
              サステナビリティ
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-green-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  持続可能な社会の実現に向けて
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  東海部品工業は、お客様、従業員、地域社会、環境のすべてに対して責任を持ち、
                  持続可能な社会の実現に向けて積極的に取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOR CUSTOMERS Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center animate-fade-in">
              <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold mb-4">
                FOR CUSTOMERS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                お客様への取り組み
              </h2>
            </div>

            {/* Quality Management */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-up">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-4 inline-block">
                  品質管理活動
                </h3>

                {/* Mission & Role Diagram */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        M
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">MISSION<br/>使命</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      時代と社会の「課題力に応えられる一つ」と共に「高基準価値創造の品質構築を観察」し、当に部品を主要戦略の大道とします
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        R
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">ROLE<br/>役割</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      材料～加工領域～出荷まで工場全体をみる「見る習慣」がすべての品質組織体制を守り続けます
                    </p>
                  </div>
                </div>

                {/* Quality Activities Images */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/works/tokai-parts-industry/images/for_customers/1.jpg"
                        alt="最新の3次元測定器（ベクトロン）で精密結果検査を実施"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-blue-50">
                      <p className="text-sm font-semibold text-gray-800">
                        最新の3次元測定器（ベクトロン）で精密結果検査を実施
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/works/tokai-parts-industry/images/for_customers/2.jpg"
                        alt="測定結果は無線化・デジタル化されカラーマップ化されます"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-blue-50">
                      <p className="text-sm font-semibold text-gray-800">
                        測定結果は無線化・デジタル化されカラーマップ化されます
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    製品品質進化は、検査、品質な製造技術を実施し、お客様に感動のある製品と設計などおもい、当に部品を持続的大変の製造管理を可能としています
                  </p>
                </div>
              </div>
            </div>

            {/* Current Efforts */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
                  現場での取り組み
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">改善提案実施会（QCサークル活動）</h4>
                      <p className="text-gray-700">
                        定期的に職場ごとのQCサークルを毎日で伝え、新技術や効率改善の調査報告を行います。技術は更新された調査技術が部品の生産停止を着床とたどることも可能としています。トヨタ式グループなりになり国際ことがらができること。グループ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOR HUMAN RESOURCE Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center animate-fade-in">
              <div className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-xl font-bold mb-4">
                FOR HUMAN RESOURCE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                人材への取り組み
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefit Cards */}
                <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">教育・研修制度</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    充実した研修プログラムで、従業員のスキルアップを支援します。
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-all" style={{ animationDelay: '0.1s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">働きやすい環境</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    ワークライフバランスを重視し、働きやすい職場環境を整備しています。
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-all" style={{ animationDelay: '0.2s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">安全衛生管理</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    従業員の安全と健康を最優先に、徹底した安全管理を実施しています。
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-all" style={{ animationDelay: '0.3s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">福利厚生</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    充実した福利厚生制度で、従業員とその家族をサポートします。
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-all" style={{ animationDelay: '0.4s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">キャリア形成</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    一人ひとりの成長をサポートし、キャリアアップの機会を提供します。
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-up hover:shadow-xl transition-all" style={{ animationDelay: '0.5s' }}>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ダイバーシティ</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    多様な人材が活躍できる、インクルーシブな職場環境を推進します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOR REGION & ENVIRONMENT Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center animate-fade-in">
              <div className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-xl font-bold mb-4">
                FOR REGION & ENVIRONMENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                地域・環境への取り組み
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Environmental Activities */}
                <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-up">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">環境保護活動</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">●</span>
                      <span>CO2排出削減の取り組み</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">●</span>
                      <span>省エネルギー活動の推進</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">●</span>
                      <span>廃棄物削減とリサイクル促進</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">●</span>
                      <span>水資源の有効活用</span>
                    </li>
                  </ul>
                </div>

                {/* Regional Contribution */}
                <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">地域貢献活動</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">●</span>
                      <span>地域イベントへの参加・支援</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">●</span>
                      <span>工場見学の受け入れ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">●</span>
                      <span>地域清掃活動の実施</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">●</span>
                      <span>地元雇用の創出</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Images */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <Image
                    src="/works/tokai-parts-industry/images/for_region_environment/1.jpg"
                    alt="環境保護活動"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video animate-fade-up" style={{ animationDelay: '0.3s' }}>
                  <Image
                    src="/works/tokai-parts-industry/images/for_region_environment/2.png"
                    alt="地域貢献活動"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  私たちの約束
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  東海部品工業は、お客様、従業員、地域社会、環境のすべてのステークホルダーに対して責任を持ち、
                  持続可能な社会の実現に向けて、これからも積極的に取り組んでまいります。
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  私たちの活動が、より良い未来を創造する一助となることを目指して。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
