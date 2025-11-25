/**
 * @work 東海部品工業 リクルートサイト専用ヘッダー
 * @category 製造業 リクルートサイト ナビゲーション
 */

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function RecruitHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: '先輩インタビュー', href: '/works/fujita-dengyo/recruit/interview' },
    { label: 'クロストーク', href: '/works/fujita-dengyo/recruit/crosstalk' },
    { label: 'フジタ電業を知る', href: '/works/fujita-dengyo/recruit/about' },
    { label: 'よくある質問', href: '/works/fujita-dengyo/recruit/faq' },
    { label: 'オフィシャルサイトに戻る', href: '/works/fujita-dengyo' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* 企業認証バッジ */}
      <div className="bg-blue-900 text-white text-xs py-1 px-4">
        <span className="font-semibold">ISO 9001認証取得 | 電気工事業・管工事業 知事許可</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link href="/works/fujita-dengyo/recruit" className="flex items-center">
            <div className="text-xl font-bold">
              <span className="text-blue-900">FUJITA</span>
              <span className="text-sm ml-2 text-gray-700">フジタ電業株式会社</span>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navItems[4].href}
              className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap"
            >
              {navItems[4].label}
            </Link>

            {/* 募集情報ボタン */}
            <Link
              href="/works/fujita-dengyo/recruit/recruitment"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap"
            >
              募集情報
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/works/fujita-dengyo/recruit/recruitment"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                募集情報
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
