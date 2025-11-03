/**
 * @work 東海部品工業 Footer
 * @category 製造業 コーポレートサイト
 *
 * === デザイン ===
 * @design 背景：ダークブルー#1E3A8A
 * @design テキスト：白色
 * @design ロゴ：白色
 *
 * === UI要素 ===
 * @ui フッターリンク配列
 * @ui リンク表現（＞記号）
 * @ui コピーライト表示
 *
 * === レイアウト ===
 * @technique 中央配置
 * @technique レスポンシブフッター
 */

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12">
      <div className="container mx-auto px-6">
        {/* ロゴ */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl font-bold">TBK</span>
            <span className="text-base font-medium">東海部品工業株式会社</span>
          </div>
        </div>

        {/* リンク */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/works/tokai-parts-industry/contact" className="hover:underline">
            お問い合わせ &gt;
          </Link>
          <Link href="/works/tokai-parts-industry/about" className="hover:underline">
            会社情報 &gt;
          </Link>
        </div>

        {/* コピーライト */}
        <div className="text-center text-xs text-white/70">
          <p>&copy; 東海部品工業 ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
