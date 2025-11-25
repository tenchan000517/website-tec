'use client'

/**
 * @work 私のカクゴ 利用規約レイアウト
 * @category メディアサイト コンテンツサイト
 *
 * === UI要素 ===
 * @ui サイドバーナビゲーション
 * @ui グリーンアクティブ状態
 */

import Link from 'next/link'
import { ReactNode } from 'react'

interface TermsLayoutProps {
  children: ReactNode
  activeMenu: 'terms' | 'media-policy' | 'privacy-policy' | 'company' | 'contact' | 'sitemap'
}

export function TermsLayout({ children, activeMenu }: TermsLayoutProps) {
  const menuItems = [
    { id: 'terms', label: 'サイトご利用にあたって', href: '/works/watashi-no-kakugo/terms' },
    { id: 'media-policy', label: 'メディアポリシー', href: '/works/watashi-no-kakugo/terms/media-policy' },
    { id: 'privacy-policy', label: 'プライバシーポリシー', href: '/works/watashi-no-kakugo/terms/privacy-policy' },
    { id: 'company', label: '会社概要', href: '/works/watashi-no-kakugo/terms/company' },
    { id: 'contact', label: 'お問い合わせ', href: '/works/watashi-no-kakugo/terms/contact' },
    { id: 'sitemap', label: 'サイトマップ', href: '/works/watashi-no-kakugo/sitemap' },
  ]

  return (
    <div className="layout">
      <aside className="sidebar">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </aside>

      <main className="content">
        {children}
      </main>

      <style jsx>{`
        .layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 0;
          height: fit-content;
          position: sticky;
          top: 92px;
        }

        .menu-item {
          padding: 16px 20px;
          background: #999999;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          border-bottom: 1px solid #888888;
          transition: background 0.3s;
        }

        .menu-item:first-child {
          border-radius: 4px 4px 0 0;
        }

        .menu-item:last-child {
          border-radius: 0 0 4px 4px;
          border-bottom: none;
        }

        .menu-item:hover {
          background: #7AA93A;
        }

        .menu-item.active {
          background: #8BC34A;
        }

        .content {
          background: #ffffff;
          padding: 40px;
          border-radius: 4px;
          min-height: 400px;
        }

        @media (max-width: 1024px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
          }
        }
      `}</style>
    </div>
  )
}
