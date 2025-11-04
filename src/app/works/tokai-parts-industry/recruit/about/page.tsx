/**
 * @work 東海部品工業 東海部品工業を知るページ
 * @category 製造業 リクルートサイト 会社紹介
 *
 * === ページ構成 ===
 * @technique ヒーローセクション（工場写真）
 * @technique 数字で見る東海部品工業（統計データカード）
 * @technique 福利厚生を知る（休暇・待遇、施設）
 * @technique カードグリッドレイアウト
 *
 * === デザイン・ビジュアル ===
 * @design 配色：青#3B82F6 + 緑#10B981 + 白
 * @design 統計カード（緑背景）
 * @design 年代比グラフ（横棒グラフ）
 * @design 部署別割合（アイコン付き）
 * @design 福利厚生カード（写真+説明）
 *
 * === 技術仕様 ===
 * @technique Next.js 14 App Router
 * @technique TypeScript
 * @technique Tailwind CSS
 * @technique Lucide React Icons
 * @technique Image optimization with next/image
 *
 * === SEO・アクセシビリティ ===
 * @technique メタデータ最適化
 * @technique セマンティックHTML
 * @technique 適切な見出し階層
 */

import Image from 'next/image'
import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Building2, Users, Calendar, TrendingUp, Home, Hotel, Dumbbell, Waves, Factory, BarChart3, Wrench, ClipboardList } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '東海部品工業を知る | リクルートサイト | 東海部品工業株式会社',
  description: '東海部品工業の会社概要、数字で見る会社データ、福利厚生、施設情報をご紹介します。',
  keywords: ['東海部品工業', '会社概要', '福利厚生', '施設', 'データ', 'リクルート'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Hero Section - ヒーローセクション */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/works/tokai-parts-industry/images/RECRUIT/recruit/1.jpg"
              alt="東海部品工業を知る"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="mb-4">
              <BarChart3 className="w-16 h-16 mx-auto drop-shadow-lg" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-semibold mb-2 tracking-wider">DATA</p>
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">東海部品工業を知る</h1>
          </div>
        </section>

        {/* 数字で見る東海部品工業 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
              数字で見る東海部品工業
            </h2>

            {/* 上段：設立年と従業員数 */}
            <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
              {/* 設立 */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 text-center shadow-lg">
                <p className="text-sm font-semibold text-gray-700 mb-4 bg-white inline-block px-6 py-2 rounded-full">設立</p>
                <div className="my-6">
                  <Building2 className="w-20 h-20 mx-auto text-blue-600" strokeWidth={1.5} />
                </div>
                <p className="text-6xl font-bold text-blue-600 mb-2">1999<span className="text-3xl">年</span></p>
              </div>

              {/* 従業員数 */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 text-center shadow-lg">
                <p className="text-sm font-semibold text-gray-700 mb-4 bg-white inline-block px-6 py-2 rounded-full">従業員数</p>
                <div className="my-6">
                  <Users className="w-20 h-20 mx-auto text-blue-600" strokeWidth={1.5} />
                </div>
                <p className="text-6xl font-bold text-blue-600 mb-2">722<span className="text-3xl">人</span></p>
              </div>
            </div>

            {/* 下段：年代比と平均年齢 */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* 年代比 */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 shadow-lg">
                <p className="text-sm font-semibold text-gray-700 mb-6 bg-white inline-block px-6 py-2 rounded-full">年代比</p>
                <div className="space-y-3">
                  {[
                    { age: '10代', percent: 6 },
                    { age: '20代', percent: 29 },
                    { age: '30代', percent: 27 },
                    { age: '40代', percent: 17 },
                    { age: '50代', percent: 14 },
                    { age: '60代', percent: 7 },
                  ].map((item) => (
                    <div key={item.age} className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-700 w-12">{item.age}</span>
                      <div className="flex-1 bg-white/50 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-blue-500 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${item.percent * 2}%` }}
                        >
                          <span className="text-xs font-bold text-white">{item.percent}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 平均年齢 */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 text-center shadow-lg">
                <p className="text-sm font-semibold text-gray-700 mb-4 bg-white inline-block px-6 py-2 rounded-full">平均年齢</p>
                <div className="my-6">
                  <div className="flex justify-center gap-4">
                    <Users className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
                    <Users className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-6xl font-bold text-blue-600 mb-2">36.9<span className="text-3xl">歳</span></p>
              </div>
            </div>

            {/* 部署別の在籍割合 */}
            <div className="mt-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 shadow-lg">
                <p className="text-sm font-semibold text-gray-700 mb-6 bg-white inline-block px-6 py-2 rounded-full">部署別の在籍割合</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {[
                    { name: '本社工場', percent: 20, icon: Building2 },
                    { name: '柳原工場', percent: 17, icon: Factory },
                    { name: '知立工場', percent: 7, icon: Factory },
                    { name: 'いなべ工場', percent: 40, icon: Factory },
                    { name: '技術管理', percent: 5, icon: BarChart3 },
                    { name: '技術', percent: 8, icon: Wrench },
                    { name: '生産管理', percent: 3, icon: ClipboardList },
                  ].map((dept) => {
                    const IconComponent = dept.icon
                    return (
                      <div key={dept.name} className="bg-white/70 rounded-2xl p-4 text-center">
                        <div className="mb-2 flex justify-center">
                          <IconComponent className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <p className="text-xs font-semibold text-gray-700 mb-2">{dept.name}</p>
                        <p className="text-2xl font-bold text-blue-600">{dept.percent}<span className="text-sm">%</span></p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 福利厚生を知る */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
              福利厚生を知る
            </h2>

            {/* 休暇・待遇について */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-white px-8 py-3 rounded-full text-lg font-bold text-blue-600 shadow-md">
                  休暇・待遇について
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* 休暇制度 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    {/* 女性の写真（車と帽子） */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">休暇制度</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <p>東海部品工業の休暇制度は以下のものがあります。</p>
                      <div>
                        <p className="font-semibold">【年間休日】</p>
                        <p>年間休日数は121日（トヨタカレンダー）。長期休暇としてはゴールデンウィーク、お盆休み、正月休みの3つがあります。</p>
                      </div>
                      <div>
                        <p className="font-semibold">【有給休暇】</p>
                        <p>初年度10日、2年目17日、以降1年毎に1日ずつ付与日数が増え、最高年20日付与。有給休暇も取りやすいです。また、半日有給休暇も取得できます。</p>
                      </div>
                      <div>
                        <p className="font-semibold">【特別休暇】</p>
                        <p>慶弔休暇、産前産後休暇、子の看護休暇、介護休暇、乳幼児待機特別休暇などがあります。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 育児・介護 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    {/* 家族の写真（桜と子供） */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">育児・介護</h3>
                    <p className="text-sm text-gray-700 mb-6">
                      当社では女性上司在籍や、男女に関係なく働きやすい職場づくりに取り組んでいます。
                    </p>
                    <Link
                      href="/works/tokai-parts-industry/recruit/about#childcare"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg"
                    >
                      詳しくはこちら →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 施設について */}
            <div>
              <div className="text-center mb-8">
                <span className="inline-block bg-white px-8 py-3 rounded-full text-lg font-bold text-blue-600 shadow-md">
                  施設について
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* 住宅費用補助 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    {/* インテリア写真 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">住宅費用補助</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      定期採用者のうち、次の各号のすべてに該当する者が申請した場合は決められた上限に対し、家賃の半額を補助しています。
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li>①入社時の実家又は現住所から勤務地までの距離が30km を超える者。</li>
                      <li>②30歳未満の者。</li>
                      <li>③本人の申請に基づき会社が必要性を認めた者。</li>
                    </ul>
                  </div>
                </div>

                {/* 寮名寄 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    {/* 建物外観写真 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">寮名寄</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      自宅からの通勤が困難な社員が安心して仕事に取り組めるよう、独身寮を格安で利用できます。（いなべ工場勤務者限定）
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li>①入社時の実家又は現住所から勤務地までの距離が30kmを超える者。</li>
                      <li>②30歳未満の独身男性。</li>
                    </ul>
                  </div>
                </div>

                {/* 保養所 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    {/* プール写真 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Waves className="w-6 h-6 text-blue-600" />
                      保養所
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      保養所は、トヨタ車体グループ・トヨタ車体健康保険組合が提携している施設をお得けな料金で利用することができます。
                    </p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p className="font-semibold">【トヨタ車体グループ】</p>
                      <p>琴和荘 https://www.lsc.jp/tateshina/</p>
                      <p>あららぎ館村科 https://www.lsc.jp/araragi/</p>
                      <p className="font-semibold mt-2">【トヨタ車体健康保険組合】</p>
                      <p>東急ハーヴェストクラブ http://www.harvestclub.com/</p>
                      <p>オテル・ド・マロニエ https://marronnier.info/</p>
                    </div>
                  </div>
                </div>

                {/* ジム */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    {/* ジム写真 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Dumbbell className="w-6 h-6 text-blue-600" />
                      ジム
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      福会社であるトヨタ車体に併設するスタジオ（無料）をご利用いただけます。
                    </p>
                    <p className="text-sm text-gray-700">
                      専任のインストラクターによるレッスンなどもあり、多くの方が利用しています。
                    </p>
                  </div>
                </div>
              </div>
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
