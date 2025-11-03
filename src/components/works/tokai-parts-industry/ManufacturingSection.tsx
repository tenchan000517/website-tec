/**
 * @work 東海部品工業 ManufacturingSection
 * @category 製造業 コーポレートサイト
 *
 * === レイアウト ===
 * @technique 2カラムレイアウト（左画像 + 右カード）
 * @technique グリッドレイアウト
 * @technique レスポンシブ（モバイル：縦積み）
 *
 * === デザイン ===
 * @design 背景：淡いブルー（単色）
 * @design カード背景：白
 * @design 影：shadow-md
 * @design 角丸：8px
 */

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/design-system/components/primitives'
import { Button } from '@/design-system/components/primitives'

export default function ManufacturingSection() {
  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左: 画像 */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/works/tokai-parts-industry/images/TOP/4.jpg"
              alt="TBKのクルマづくり"
              fill
              className="object-cover"
            />
          </div>

          {/* 右: カード */}
          <Card className="p-12 shadow-md">
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-[#1E40AF] mb-2">MANUFACTURING</p>
                <h2 className="text-2xl font-bold text-gray-900">TBKのクルマづくり</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                高い技術力と設備が作り出す
                <br />
                安心・安全と高品質の製品
              </p>
              <p className="text-gray-600">
                最先端の製造ラインとロボット技術により、
                高精度な自動車部品を生産しています。
              </p>
              <Link href="/manufacturing">
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
