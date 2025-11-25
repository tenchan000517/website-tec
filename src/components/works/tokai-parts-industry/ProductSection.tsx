/**
 * @work 東海部品工業 ProductSection
 * @category 製造業 コーポレートサイト
 *
 * === レイアウト ===
 * @technique 2カラムレイアウト（左カード + 右画像）逆パターン
 * @technique グリッドレイアウト（grid-flow-dense）
 * @technique レスポンシブ（モバイル：縦積み）
 *
 * === デザイン ===
 * @design 背景グラデーション：ライトブルー
 * @design カード背景：白
 * @design 影：shadow-md
 * @design 角丸：8px
 */

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/design-system/components/primitives'
import { Button } from '@/design-system/components/primitives'

export default function ProductSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左: カード */}
          <Card className="p-12 shadow-md lg:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-[#1E40AF] mb-2">PRODUCT</p>
                <h2 className="text-2xl font-bold text-gray-900">製品紹介</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                空箱供給装置から電磁ブレーキまで
                <br />
                生産ラインの自動化を実現
              </p>
              <p className="text-gray-600">
                空箱供給装置、特殊電磁ブレーキ、各種専用機など、
                豊富な製品ラインナップで産業界のニーズに応えます。
              </p>
              <Link href="/works/fujita-dengyo/product">
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

          {/* 右: 画像 */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden lg:order-2">
            <Image
              src="/works/tokai-parts-industry/images/TOP/3.jpg"
              alt="製品紹介"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
