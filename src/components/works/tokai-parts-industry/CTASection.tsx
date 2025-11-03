/**
 * @work 東海部品工業 CTASection
 * @category 製造業 コーポレートサイト
 *
 * === レイアウト ===
 * @technique 2カラムレイアウト（50% / 50%）
 * @technique フルスクリーン背景画像
 * @technique モバイル：縦積み
 *
 * === デザイン ===
 * @design 背景画像：工場航空写真（夕暮れ）
 * @design オーバーレイ：rgba(0, 0, 0, 0.6)
 * @design 左カード：オレンジ#FF6B35
 * @design 右カード：ブルー#2563EB
 * @design テキスト：白色
 * @design アイコン：線画スタイル
 *
 * === UI要素 ===
 * @ui アウトラインボタン（白ボーダー）
 * @ui ホバーエフェクト（白背景 + カラー文字）
 * @ui アイコン配置
 */

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/design-system/components/primitives'

export default function CTASection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/works/tokai-parts-industry/images/TOP/footer.jpg"
          alt="CTA背景"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        {/* RECRUIT カード */}
        <div className="bg-[#FF6B35] px-12 py-24 text-white">
          <div className="max-w-md mx-auto space-y-6">
            {/* アイコン */}
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-4xl font-bold">RECRUIT</h2>
            <p className="text-xl leading-relaxed">
              東海部品工業に興味を
              <br />
              持ってくださった方はこちらへ
            </p>
            <Link href="/recruit">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#FF6B35]"
              >
                詳しくはこちら
                <svg
                  className="w-4 h-4 ml-2 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* CONTACT カード */}
        <div className="bg-[#2563EB] px-12 py-24 text-white">
          <div className="max-w-md mx-auto space-y-6">
            {/* アイコン */}
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-4xl font-bold">CONTACT</h2>
            <p className="text-xl leading-relaxed">
              東海部品工業、製品に関する
              <br />
              お問い合わせ・ご相談窓口はこちらをご覧ください。
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2563EB]"
              >
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
