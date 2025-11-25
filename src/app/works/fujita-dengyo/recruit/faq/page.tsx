/**
 * @work フジタ電業 よくある質問ページ
 * @category 製造業 リクルートサイト FAQ
 *
 * === ページ構成 ===
 * @technique ヒーローセクション
 * @technique カテゴリータブ
 * @technique アコーディオンFAQ
 * @technique 状態管理（useState）
 *
 * === デザイン・ビジュアル ===
 * @design 配色：青#2563EB + 緑#4ADE80
 * @design アコーディオンUI
 * @design カテゴリーボタン
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('採用について')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = ['採用について', '入社後について', '部署技術について', 'その他']

  const faqs = {
    '採用について': [
      {
        question: '会社説明会に参加するにはどうすればいいですか？',
        answer: `人こちらの説明会ページからエントリーをお願いします。

新卒採用　中途採用

ご不明な点がありましたら、下記までご連絡ください。

【問い合わせ先】
総務管理部　人事・経理G　採用担当
TEL:0566-23-4411`
      },
      {
        question: '勤務地はどこになりますか？',
        answer: `人委採用：技能職・事務技術職（内定者）

技能職：本社工場・知立工場・いなべ工場（内定者）、知立工場（既卒者）、いなべ工場（正規職員となる）`
      },
      {
        question: '理系も文系も共に就職活動に雇用はありますか？',
        answer: `人製用内容を制限なら女性に応募は、入社時で専攻する確認わせますが何店舗以外の準拠の条件はありません。選考の条件には一切関係ありません。`
      },
      {
        question: '企業とスキル・価値は重視されますか？',
        answer: `人の問いじいずるのはありません。

自身がどのようも充実する人生を送りたくて、なぜ私しができていた方も使んのか。

白己理解と業界企業理解をしっかりとこなせば成ると認識しています。選考には採用担当ややはせん。

改善も独自経緯的に人社族に証明ホーンもミングがありますので、総合的に運営理するお願いしています。（採用担当）

【従業員の声例】
新卒がない方も入りしても業務関数等を慣例は就業できませんでした。やる気さえあればまじょくいた大丈夫！`
      }
    ],
    '入社後について': [],
    '部署技術について': [],
    'その他': []
  }

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0">
            <Image
              src="/works/tokai-parts-industry/images/RECRUIT/faq/1.jpg"
              alt="よくある質問"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <MessageCircle className="w-16 h-16 mb-4 drop-shadow-lg" />
            <p className="text-sm font-semibold mb-2 tracking-wider">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">よくある質問</h1>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category)
                    setOpenIndex(null)
                  }}
                  className={`px-6 py-4 rounded-lg font-bold text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-8 text-center">
                {activeCategory}
              </h2>

              <div className="space-y-4">
                {faqs[activeCategory as keyof typeof faqs].length > 0 ? (
                  faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-green-100 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-200 transition-colors"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <span className="text-green-700 font-bold flex-shrink-0">Q.</span>
                          <span className="text-gray-900 font-medium">{faq.question}</span>
                        </div>
                        {openIndex === index ? (
                          <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                        )}
                      </button>

                      {openIndex === index && (
                        <div className="px-6 py-5 bg-white border-t border-green-200">
                          <div className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold flex-shrink-0">A.</span>
                            <div className="text-gray-700 whitespace-pre-line">{faq.answer}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    このカテゴリーの質問は準備中です。
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & RECRUITMENT Buttons */}
        <section className="py-16 bg-gradient-to-b from-green-400 to-green-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* RECRUITMENT */}
              <Link
                href="/works/fujita-dengyo/recruit#recruitment"
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
