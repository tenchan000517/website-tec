/**
 * @work 東海部品工業 CompanySection
 * @category 製造業 コーポレートサイト
 *
 * === レイアウト ===
 * @technique 2カラムレイアウト（左画像 + 右カード）
 * @technique グリッドレイアウト
 * @technique レスポンシブ（モバイル：縦積み）
 *
 * === デザイン ===
 * @design 背景グラデーション：ライトブルー
 * @design カード背景：白
 * @design 影：shadow-md
 * @design 角丸：8px
 * @design padding：80px 0
 *
 * === コンテンツ ===
 * @content カテゴリ：COMPANY（大きな英字）
 * @content 日本語タイトル：会社情報
 * @content 説明文
 * @content CTAボタン
 */

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/design-system/components/primitives'
import { Button } from '@/design-system/components/primitives'

export default function CompanySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左: 画像 */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/works/tokai-parts-industry/images/TOP/2.jpg"
              alt="会社情報"
              fill
              className="object-cover"
            />
          </div>

          {/* 右: カード */}
          <Card className="p-12 shadow-md">
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-[#1E40AF] mb-2">COMPANY</p>
                <h2 className="text-2xl font-bold text-gray-900">会社情報</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                産業機械の自動化を支える
                <br />
                技術とノウハウ
              </p>
              <p className="text-gray-600">
                フジタ電業は、昭和41年創業以来、電磁ブレーキ・空箱供給装置・専用機の設計製造を通じて、
                産業界の自動化・効率化に貢献しています。
              </p>
              <Link href="/works/fujita-dengyo/about">
                <Button variant="primary" size="md">
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
          </Card>
        </div>
      </div>
    </section>
  )
}
