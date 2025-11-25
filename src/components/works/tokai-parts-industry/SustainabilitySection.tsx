/**
 * @work 東海部品工業 SustainabilitySection
 * @category 製造業 コーポレートサイト
 *
 * === レイアウト ===
 * @technique フルスクリーン背景画像
 * @technique 中央配置コンテンツ
 * @technique 3カラムアイコンカード
 *
 * === デザイン ===
 * @design 背景画像 + オーバーレイ（グラデーション）
 * @design 円形アイコンエリア（白背景）
 * @design アイコンカード：shadow-xl
 * @design テキスト：白色
 * @design ボタン：白アウトライン
 *
 * === UI要素 ===
 * @ui トップに戻るボタン（右下）
 * @ui アイコンカード（円形 + 写真）
 * @ui アウトラインボタン
 */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/design-system/components/primitives'

export default function SustainabilitySection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const initiatives = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
      title: 'お客様への取り組み',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: '人材への取り組み',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: '地域・環境への取り組み',
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/works/tokai-parts-industry/images/TOP/5.jpg"
          alt="サステナビリティ"
          fill
          className="object-cover"
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/80 to-blue-600/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* メインコンテンツ */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">SUSTAINABILITY</h2>
          <p className="text-2xl text-white mb-2">サステナビリティ</p>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            社会・地球の持続的発展のため、
            <br />
            地域社会への貢献や環境保全に積極的に取り組んでいます
          </p>
          <Link href="/works/fujita-dengyo/sustainability">
            <Button
              variant="outline"
              size="md"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              詳しくはこちら
            </Button>
          </Link>
        </div>

        {/* 3つのアイコンカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-xl text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* トップに戻るボタン */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors shadow-lg"
        aria-label="トップに戻る"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  )
}
