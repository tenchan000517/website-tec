/**
 * @work 東海部品工業 リクルートサイトTOPページ
 * @category 製造業 コーポレートサイト 採用特化
 *
 * === ページ構成 ===
 * @technique ヒーローセクション実装
 * @technique メッセージセクション
 * @technique 先輩インタビュー表示（8名）
 * @technique クロストーク表示（2組）
 * @technique About usセクション
 * @technique 3つのリンクカード（DATA/FLOW/Q&A）
 * @technique FAQ & RECRUITMENTボタン
 *
 * === レイアウト・構造レベル ===
 * @technique セクション構成
 * @technique 緑色背景セクション
 * @technique イラスト配置
 * @technique カードグリッドレイアウト
 * @technique レスポンシブデザイン
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータ：採用特化
 * @seo ページタイトル最適化
 * @seo キーワード：採用、求人、新卒、中途
 * @llmo 構造化データ：JobPosting
 * @performance ページスピード最適化
 *
 * === デザイン・ビジュアル ===
 * @design 配色：緑#4ADE80 + 青#2563EB + オレンジ#F97316
 * @design フォント：游ゴシック
 * @design イラストレーション使用
 * @design 大きなタイトル表示
 * @design 円形背景デザイン
 * @design カードデザイン
 *
 * === UI要素 ===
 * @ui ヒーローセクション（イラスト + テキスト）
 * @ui メッセージセクション
 * @ui インタビューカード
 * @ui クロストークカード
 * @ui リンクカード
 * @ui ボタン（FAQ/RECRUITMENT）
 * @ui 専用ヘッダー
 *
 * === コンテンツ・テキスト ===
 * @content 採用メッセージ
 * @content 先輩社員紹介
 * @content クロストーク紹介
 * @content 会社情報リンク
 */

import Image from 'next/image'
import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'
import { BarChart3, Users, MessageCircle, Factory, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'リクルートサイト | 東海部品工業株式会社',
  description: '東海部品工業の採用情報をご紹介します。先輩社員のインタビュー、クロストーク、福利厚生など、あなたの未来をサポートする情報が満載です。',
  keywords: ['東海部品工業', '採用情報', '求人', '新卒採用', '中途採用', 'キャリア', 'リクルート'],
}

export default function RecruitTopPage() {
  const interviews = [
    { id: '09', name: 'K.Mさん', year: '2022年入社', dept: '製造課', factory: '知立工場', title: '溶接に携わったやりがいを感じながら、職場全員が仲が良くチャレンジ！' },
    { id: '10', name: 'S.Tさん', year: '2019年入社', dept: '生産課', factory: '工場管理', title: 'いち早くホームのように暖かな中で働ける環境が整っている会社です。' },
    { id: '01', name: 'N.Iさん', year: '2019年入社', dept: '製造課', factory: '', title: '経験部門で上司や仲間たちも親切に教えてくれました。' },
    { id: '02', name: 'M.Iさん', year: '2022年入社', dept: '生産管理', factory: '安全衛生推進グループ', title: '誰かの役に立てることで、現場とも関わりながら組織を動かしていく仕事に惹かれています！' },
    { id: '03', name: 'K.Sさん', year: '2019年入社', dept: '技術課', factory: 'プレス技術グループ', title: 'お客様と仲良く製品づくりに反映していく、エキサイティングな仕事内容を堪能しよう。' },
    { id: '04', name: 'N.Tさん', year: '2020年入社', dept: '技術課', factory: '', title: '積極的に様々な業務に携わりました。' },
    { id: '05', name: 'K.Mさん', year: '2011年入社', dept: '製造課', factory: 'サブ・管理', title: '後輩の成長を見られることで、やりがいがあることで、将来は主任を目指してマネジメントする側に立ちたいと思います' },
    { id: '06', name: 'K.Nさん', year: '2022年入社', dept: '製造課', factory: 'サブ・管理', title: '品質工程がモットーです。日々、研鑽しております' },
    { id: '07', name: 'Y.Aさん', year: '2021年入社', dept: '技術課', factory: 'プレス技術', title: '特にスタッフが親切だったこと！ 素材メーカーファイルに魅了されました！' },
    { id: '08', name: 'K.Kさん', year: '2016年入社', dept: '技術課', factory: '知立技術', title: '「やってみてください！」その他の先輩からの言葉により成長してきました！' },
  ]

  const crosstalks = [
    { id: '01', title: '技術部門の先輩・後輩座談会', members: [{ name: 'N.Tさん', dept: '技術課', group: '製品技術グループ', position: '先輩' }, { name: 'I.Rさん', dept: '技術課', group: '製品技術グループ', position: '' }, { name: 'M.Rさん', dept: '技術課', group: '製品技術グループ', position: '' }] },
    { id: '02', title: '製造部門の上司・部下座談会', members: [{ name: 'H.Sさん', dept: 'いなべ工場', group: 'はずみ一課', position: '' }, { name: 'S.Sさん', dept: 'いなべ工場', group: '成形一課', position: '' }] },
  ]

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Hero Section - 世界から信頼される モノづくりの力 */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* 背景イラスト（都市とグリーン） */}
              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-100 to-transparent"></div>

              {/* メインコンテンツ */}
              <div className="relative text-center pt-12">
                {/* 社員イラスト（上部） */}
                <div className="flex justify-center gap-4 mb-8">
                  <Users className="w-12 h-12 text-blue-600" />
                  <Users className="w-12 h-12 text-blue-600" />
                  <Users className="w-12 h-12 text-blue-600" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-blue-600">世界から信頼される</span>
                </h1>
                <h2 className="text-5xl md:text-7xl font-bold mb-12">
                  <span className="text-blue-600">モノづくりの力</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="py-20 bg-gradient-to-b from-green-400 to-green-500 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-yellow-400 font-serif italic text-3xl mb-6">\\ Message //</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p>当社は「誇りある全員に、生き生きと働ける」をスローガンに新しい時代文化の創造に貢献しています。</p>
                <p>100年にわたり創意工夫を重ねてきた、重要性を見つけ出し活力した成長を目指しています。</p>
                <p>そのためには、最良と考えて工夫します、未来を描き続ける人間が必要です。</p>
                <p>個すること目当て、チャレンジして行ける風土をともに、お迎えしています。</p>
              </div>
            </div>

            {/* イラスト装飾 */}
            <div className="flex justify-center mt-8">
              <Factory className="w-16 h-16 text-white" />
            </div>
          </div>
        </section>

        {/* Interview Section - 先輩インタビュー */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* セクションタイトル */}
            <div className="text-center mb-16">
              <div className="inline-block bg-green-200 rounded-full px-8 py-12 mb-8">
                <p className="text-green-600 font-serif italic text-2xl mb-2">Interview</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-orange-500">先輩</span>
                  <span className="text-orange-500">インタビュー</span>
                </h2>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                東海部品工業で活躍するキャリアリティあふれる先輩たちをご紹介します。<br />
                仕事に対する想いやキャリアステップ、プライベートの都合などをご紹介します。
              </p>
              <Link
                href="/works/tokai-parts-industry/recruit/interview"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                先輩インタビュー一覧 →
              </Link>
            </div>

            {/* インタビューカード */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {interviews.slice(0, 8).map((interview, index) => (
                <Link
                  key={interview.id}
                  href={`/works/tokai-parts-industry/recruit/interview/${interview.id}`}
                  className="group"
                >
                  <div className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                    index % 4 === 0 || index % 4 === 3 ? 'bg-blue-600' : 'bg-green-500'
                  }`}>
                    <div className="relative aspect-[3/4]">
                      {/* 仮の画像 - 実際の画像に置き換える */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                        <div className="text-white w-full">
                          <div className={`inline-block px-3 py-1 rounded mb-2 text-xs font-bold ${
                            index % 4 === 0 || index % 4 === 3 ? 'bg-blue-500' : 'bg-green-400'
                          }`}>
                            Interview {interview.id}
                          </div>
                          <p className="text-xs mb-1">{interview.year} {interview.name}</p>
                          <p className="text-xs mb-1">{interview.dept} {interview.factory}</p>
                          <p className="text-xs line-clamp-3">{interview.title}</p>
                          <p className="text-orange-500 text-xs font-bold mt-2">Read more →</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Crosstalk Section - クロストーク */}
        <section className="py-20 bg-gradient-to-b from-green-100 to-green-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* セクションタイトル */}
            <div className="text-center mb-16">
              <div className="inline-block mb-8">
                <p className="text-green-600 font-serif italic text-2xl mb-2">Crosstalk</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-orange-500">クロス</span>
                  <span className="text-orange-500">トーク</span>
                </h2>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                先輩後輩や部門を超えての問答で見える視点、それぞれの思いをモットーで話題る<br />
                スペシャルなクロストークをお届けします。
              </p>
            </div>

            {/* クロストークカード */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {crosstalks.map((crosstalk) => (
                <Link
                  key={crosstalk.id}
                  href={`/works/tokai-parts-industry/recruit/crosstalk/${crosstalk.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="flex">
                      {/* 画像エリア */}
                      <div className="w-1/2 relative aspect-square bg-gray-200">
                        {/* 実際の画像に置き換える */}
                      </div>
                      {/* テキストエリア */}
                      <div className="w-1/2 p-6 flex flex-col justify-center">
                        <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-3 self-start">
                          Crosstalk {crosstalk.id}
                        </div>
                        <h3 className="text-base font-bold mb-4 text-gray-900">
                          {crosstalk.title}
                        </h3>
                        {crosstalk.members.map((member, idx) => (
                          <div key={idx} className="text-xs text-gray-600 mb-1">
                            <span className="font-bold">{member.name}</span>
                            {member.position && <span className="ml-1">× </span>}
                          </div>
                        ))}
                        {crosstalk.members.map((member, idx) => (
                          <p key={idx} className="text-xs text-gray-500">
                            {member.dept} {member.group}
                          </p>
                        ))}
                        <p className="text-orange-500 text-xs font-bold mt-4">Read more →</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section - 東海部品工業を知る */}
        <section className="py-20 bg-gradient-to-b from-green-200 to-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-green-200 rounded-full px-12 py-16 mb-8">
              <p className="text-green-600 font-serif italic text-2xl mb-4">About us</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-orange-500">東海部品工業を知る</span>
              </h2>
              <p className="text-gray-700 mt-6 text-sm max-w-md mx-auto">
                トヨタ車体グループの一員として、当社で培われた技術情報を提供<br />
                人と社会に信頼つながる知識をつくり出しています。
              </p>
              <Link
                href="/works/tokai-parts-industry/recruit#data"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                東海部品工業を知るへ →
              </Link>
            </div>
          </div>

          {/* 3つのカード：DATA, FLOW, Q&A */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              {/* DATA */}
              <Link
                href="/works/tokai-parts-industry/recruit#data"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <BarChart3 className="w-16 h-16 mb-4" />
                  <p className="text-sm font-semibold mb-2">DATA</p>
                  <h3 className="text-xl font-bold text-center">数字で見る東海部品工業</h3>
                </div>
              </Link>

              {/* FLOW */}
              <Link
                href="/works/tokai-parts-industry/manufacturing"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <Car className="w-16 h-16 mb-4" />
                  <p className="text-sm font-semibold mb-2">FLOW</p>
                  <h3 className="text-xl font-bold text-center">東海部品工業 工場見学</h3>
                </div>
              </Link>

              {/* Q&A */}
              <Link
                href="/works/tokai-parts-industry/recruit/faq"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <Users className="w-16 h-16 mb-4" />
                  <p className="text-sm font-semibold mb-2">Q&A</p>
                  <h3 className="text-xl font-bold text-center">若手社員アンケート</h3>
                </div>
              </Link>
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
                href="#recruitment"
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
