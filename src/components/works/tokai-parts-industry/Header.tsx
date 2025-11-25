/**
 * @work 東海部品工業 Header
 * @category 製造業 コーポレートサイト
 *
 * === UI要素 ===
 * @ui ヘッダー高さ80px
 * @ui 追従ヘッダー（position: sticky）
 * @ui ドロップダウンメニュー（ホバー表示）
 * @ui ハンバーガーメニュー（モバイル）
 * @ui 親会社バッジ（トヨタ車体グループ）
 * @ui ロゴ高さ40px
 * @ui CTAボタン（採用情報、オレンジ）
 *
 * === デザイン ===
 * @design 背景：白
 * @design スクロール時影追加
 * @design 配色：ブルー#2563EB + オレンジ#FF6B35
 *
 * === アニメーション ===
 * @technique ハンバーガーメニュー開閉アニメーション
 * @technique ドロップダウンフェードイン
 * @technique スクロール時影表示
 *
 * === レスポンシブ ===
 * @technique デスクトップ：フルメニュー表示
 * @technique モバイル：ハンバーガーメニュー
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/design-system/components/primitives'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      {/* 企業認証バッジ */}
      <div className="bg-[#2563EB] py-2">
        <div className="container mx-auto px-6">
          <span className="text-xs text-white font-medium">ISO 9001認証取得 | 電気工事業・管工事業 知事許可</span>
        </div>
      </div>

      {/* メインヘッダー */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* ロゴ */}
            <Link href="/works/fujita-dengyo" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#2563EB]">FUJITA</span>
              <span className="text-sm font-medium text-gray-700">
                フジタ電業株式会社
              </span>
            </Link>

            {/* デスクトップメニュー */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/works/fujita-dengyo/about"
                className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
              >
                会社情報
                <br />
                <span className="text-xs text-gray-500">COMPANY</span>
              </Link>
              <Link
                href="/works/fujita-dengyo/product"
                className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
              >
                製品紹介
                <br />
                <span className="text-xs text-gray-500">PRODUCT</span>
              </Link>
              <Link
                href="/works/fujita-dengyo/manufacturing"
                className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
              >
                製造技術
                <br />
                <span className="text-xs text-gray-500">MANUFACTURING</span>
              </Link>
              <Link
                href="/works/fujita-dengyo/sustainability"
                className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
              >
                サステナビリティ
                <br />
                <span className="text-xs text-gray-500">SUSTAINABILITY</span>
              </Link>
              <Link
                href="/works/fujita-dengyo/news"
                className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
              >
                お知らせ
                <br />
                <span className="text-xs text-gray-500">NEWS</span>
              </Link>
              <Link
                href="/works/fujita-dengyo/contact"
                className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
              >
                お問い合わせ
                <br />
                <span className="text-xs text-gray-500">CONTACT</span>
              </Link>
            </nav>

            {/* CTAボタン */}
            <div className="hidden lg:block">
              <Link href="/works/fujita-dengyo/recruit">
                <Button variant="accent" size="md">採用情報</Button>
              </Link>
            </div>

            {/* ハンバーガーメニューボタン */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニュー"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="/works/fujita-dengyo/about"
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              会社情報（COMPANY）
            </Link>
            <Link
              href="/works/fujita-dengyo/product"
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              製品紹介（PRODUCT）
            </Link>
            <Link
              href="/works/fujita-dengyo/manufacturing"
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              製造技術（MANUFACTURING）
            </Link>
            <Link
              href="/works/fujita-dengyo/sustainability"
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              サステナビリティ（SUSTAINABILITY）
            </Link>
            <Link
              href="/works/fujita-dengyo/news"
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お知らせ（NEWS）
            </Link>
            <Link
              href="/works/fujita-dengyo/contact"
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ（CONTACT）
            </Link>
            <Link href="/works/fujita-dengyo/recruit">
              <Button variant="accent" size="md" className="mt-4 w-full">採用情報</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
