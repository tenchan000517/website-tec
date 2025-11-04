/**
 * @work 東海部品工業 募集情報ページ
 * @category 製造業 リクルートサイト 採用情報
 *
 * === ページ構成 ===
 * @technique ヒーローセクション
 * @technique タブ切り替え（大卒/高卒/中途）
 * @technique 採用情報詳細表示
 * @technique 採用フローチャート
 *
 * === デザイン・ビジュアル ===
 * @design 配色：青#2563EB + 緑#4ADE80 + 白
 * @design タブボタンUI
 * @design テーブルレイアウト
 * @design フローチャート
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Users, ChevronDown } from 'lucide-react'

export default function RecruitmentPage() {
  const [activeTab, setActiveTab] = useState('大卒採用')

  const tabs = ['大卒採用', '高卒採用', '中途採用']

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0">
            <Image
              src="/works/tokai-parts-industry/images/RECRUIT/kyujin/1.jpg"
              alt="募集情報"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#2563EB]/80"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <Users className="w-16 h-16 mb-4 drop-shadow-lg" strokeWidth={1.5} />
            <p className="text-sm font-semibold mb-2 tracking-wider">RECRUITMENT</p>
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">募集情報</h1>
          </div>
        </section>

        {/* Tab Buttons */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === tab
                      ? 'bg-[#2563EB] text-white shadow-lg'
                      : 'bg-white text-[#2563EB] border-2 border-[#2563EB] hover:bg-blue-50'
                  }`}
                >
                  {tab}
                  <ChevronDown className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* 大卒採用 */}
            {activeTab === '大卒採用' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">
                    大卒 事務職・技術職の採用について
                  </h2>

                  <div className="space-y-6 max-w-4xl mx-auto">
                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">募集職種</div>
                        <div className="md:col-span-3 text-gray-700">現在募集しておりません</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">募集学科</div>
                        <div className="md:col-span-3 text-gray-700">現在募集しておりません</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">勤務地</div>
                        <div className="md:col-span-3 text-gray-700">本社工場（愛知県刈谷市）他</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">勤務時間</div>
                        <div className="md:col-span-3 text-gray-700">
                          8：15〜17：15<br />
                          ※1日の標準労働時間8時間（フレックス制度あり）
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">給与</div>
                        <div className="md:col-span-3 text-gray-700">月給：245,000円（2025年度実績）</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">諸手当</div>
                        <div className="md:col-span-3 text-gray-700">
                          通勤手当、高速代通勤手当、時間外勤務手当、家族手当、住宅手当など
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">昇給</div>
                        <div className="md:col-span-3 text-gray-700">年1回（4月）</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">賞与</div>
                        <div className="md:col-span-3 text-gray-700">年2回（7月、12月）</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">休日・休暇</div>
                        <div className="md:col-span-3 text-gray-700">
                          週休2日制（トヨタカレンダーに準ずる）<br />
                          春・夏・冬長期連休有り<br />
                          年間休日121日<br />
                          年次有給休暇（初年度10日、次年度以降17日〜20日、2年間繰越し可能、最大60日）<br />
                          <Link href="/works/tokai-parts-industry/recruit/about" className="text-[#F97316] hover:underline inline-flex items-center">
                            詳しくはこちら →
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">保険</div>
                        <div className="md:col-span-3 text-gray-700">
                          健康保険（トヨタ車体健康保険組合）、厚生年金、労災保険、雇用保険
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">教育制度</div>
                        <div className="md:col-span-3 text-gray-700">
                          階層別教育（新入社員研修、問題解決研修、新任職制研修、管理職研修）<br />
                          MBO面談、育成出向制度（トヨタ車体）、IT活用研修、外部セミナー参加、資格取得制度<br />
                          <Link href="/works/tokai-parts-industry/recruit/about" className="text-[#F97316] hover:underline inline-flex items-center">
                            詳しくはこちら →
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">福利厚生</div>
                        <div className="md:col-span-3 text-gray-700">
                          補助:住宅補助、ウェア購入補助、食事補助<br />
                          施設:ジム（無料）、保養所、託児所<br />
                          その他:確定拠出年金、永年勤続表彰制度（15年以上海外旅行あり）など<br />
                          <Link href="/works/tokai-parts-industry/recruit/about" className="text-[#F97316] hover:underline inline-flex items-center">
                            詳しくはこちら →
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">労働組合</div>
                        <div className="md:col-span-3 text-gray-700">
                          東海部品工業労働組合（全トヨタ労働組合連合会所属）
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 採用までの流れ */}
                <div className="bg-gradient-to-b from-[#DCFCE7] to-[#BBF7D0] py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">
                      採用までの流れ
                    </h2>
                    <p className="text-center text-gray-700 mb-4">
                      エントリー方法から内々定までの流れです。
                    </p>
                    <p className="text-center text-gray-600 text-sm mb-12">
                      ※変更となる場合もあります。
                    </p>

                    <div className="space-y-6">
                      {/* STEP 01 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                          STEP<br />01
                        </div>
                        <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-6 text-center font-bold text-gray-800">
                          会社説明会
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ChevronDown className="w-8 h-8 text-[#2563EB]" />
                      </div>

                      {/* STEP 02 */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-4 md:col-span-1">
                          <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                            STEP<br />02
                          </div>
                          <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-4 text-center text-sm font-bold text-gray-800">
                            1×1面談
                          </div>
                        </div>
                        <div className="flex items-center gap-4 md:col-span-1">
                          <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                            STEP<br />02
                          </div>
                          <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-4 text-center text-sm font-bold text-gray-800">
                            先輩座談会・工場見学
                          </div>
                        </div>
                        <div className="flex items-center gap-4 md:col-span-1">
                          <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                            STEP<br />02
                          </div>
                          <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-4 text-center text-sm font-bold text-gray-800">
                            インターンシップ
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ChevronDown className="w-8 h-8 text-[#2563EB]" />
                      </div>

                      {/* STEP 03 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                          STEP<br />03
                        </div>
                        <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-6 text-center font-bold text-gray-800">
                          書類選考
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ChevronDown className="w-8 h-8 text-[#2563EB]" />
                      </div>

                      {/* STEP 04 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                          STEP<br />04
                        </div>
                        <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-6 text-center font-bold text-gray-800">
                          一次選考（部長面接）
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ChevronDown className="w-8 h-8 text-[#2563EB]" />
                      </div>

                      {/* STEP 05 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                          STEP<br />05
                        </div>
                        <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-6 text-center font-bold text-gray-800">
                          最終選考（役員面接）
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ChevronDown className="w-8 h-8 text-[#2563EB]" />
                      </div>

                      {/* STEP 06 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap">
                          STEP<br />06
                        </div>
                        <div className="flex-1 bg-white border-2 border-[#2563EB] rounded-lg py-4 px-6 text-center font-bold text-gray-800">
                          内々定
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 高卒採用 */}
            {activeTab === '高卒採用' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">
                    高卒 技能職の採用について
                  </h2>

                  <div className="space-y-6 max-w-4xl mx-auto">
                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">募集職種</div>
                        <div className="md:col-span-3 text-gray-700">
                          【技能職】<br />
                          自動車部品を生産するため、各種生産工程と生産設備保全会社への配属となります。<br />
                          「プレス機械、溶接ロボット等を操作し、自動車の部品加工、構内物流」又は<br />
                          「生産設備の保全業務全般」の作業に従事します。<br /><br />
                          入社後、本人の適正と希望を考慮し、配属先を決定します。
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">勤務地</div>
                        <div className="md:col-span-3 text-gray-700">
                          本社工場・柳原工場（愛知県刈谷市）、知立工場（愛知県知立市）、いなべ工場（三重県いなべ市）
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">給与</div>
                        <div className="md:col-span-3 text-gray-700">月給：200,000円（2025年度実績）</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">勤務時間</div>
                        <div className="md:col-span-3 text-gray-700">
                          (1) 8：15〜17：20<br />
                          (2) 6：25〜15：30<br />
                          (3) 17：10〜2：15
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">諸手当</div>
                        <div className="md:col-span-3 text-gray-700">
                          通勤手当、高速代通勤手当、時間外勤務手当、家族手当、住宅手当など
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">昇給</div>
                        <div className="md:col-span-3 text-gray-700">年1回（4月）</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">賞与</div>
                        <div className="md:col-span-3 text-gray-700">年2回（7月、12月）</div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">休日・休暇</div>
                        <div className="md:col-span-3 text-gray-700">
                          週休2日制（トヨタカレンダーに準ずる）、春・夏・冬長期連休有り<br />
                          年間休日121日（2025年度）<br />
                          年次有給休暇（初年度10日、次年度以降17日〜20日、2年間有給繰越し可能、最大60日）<br />
                          <Link href="/works/tokai-parts-industry/recruit/about" className="text-[#F97316] hover:underline inline-flex items-center">
                            詳しくはこちら →
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="font-bold text-[#2563EB]">保険</div>
                        <div className="md:col-span-3 text-gray-700">
                          健康保険（トヨタ車体健康保険組合）、厚生年金、労災保険、雇用保険
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 中途採用 */}
            {activeTab === '中途採用' && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-700">現在、中途採用の募集はございません。</p>
                <p className="text-gray-600 mt-4">募集開始の際は、こちらのページでお知らせいたします。</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              採用に関するお問い合わせ
            </h2>
            <p className="text-gray-700 mb-8">
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/works/tokai-parts-industry/contact"
              className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              お問い合わせはこちら →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
