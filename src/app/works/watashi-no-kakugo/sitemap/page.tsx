'use client'

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import { TermsLayout } from '@/components/works/watashi-no-kakugo/TermsLayout'
import Link from 'next/link'

export default function SitemapPage() {
  return (
    <>
      <Header />

      <main className="main">
        <TermsLayout activeMenu="sitemap">
          <h1 className="page-title">サイトマップ</h1>

          <div className="sitemap-grid">
            <div className="sitemap-column">
              <Link href="/works/watashi-no-kakugo" className="sitemap-link top">
                TOP
              </Link>
            </div>

            <div className="sitemap-column">
              <Link href="/works/watashi-no-kakugo/about" className="sitemap-link">
                私のカクゴとは
              </Link>
            </div>

            <div className="sitemap-column">
              <Link href="/works/watashi-no-kakugo/persons" className="sitemap-link">
                私のカクゴ一覧
              </Link>
            </div>

            <div className="sitemap-column">
              <Link href="/works/watashi-no-kakugo/sns" className="sitemap-link">
                ブログ・SNS
              </Link>
            </div>

            <div className="sitemap-column">
              <Link href="/works/watashi-no-kakugo/terms" className="sitemap-link">
                サイトご利用にあたって
              </Link>
              <Link href="/works/watashi-no-kakugo/terms/media-policy" className="sitemap-link sub">
                メディアポリシー
              </Link>
              <Link href="/works/watashi-no-kakugo/terms/privacy-policy" className="sitemap-link sub">
                プライバシーポリシー
              </Link>
              <Link href="/works/watashi-no-kakugo/terms/company" className="sitemap-link sub">
                会社概要
              </Link>
              <Link href="/works/watashi-no-kakugo/terms/contact" className="sitemap-link sub">
                お問い合わせ
              </Link>
              <Link href="/works/watashi-no-kakugo/sitemap" className="sitemap-link sub">
                サイトマップ
              </Link>
            </div>
          </div>
        </TermsLayout>
      </main>

      <Footer />

      <style jsx>{`
        .main {
          padding-top: 72px;
          min-height: 100vh;
          background: #f8f8f8;
        }

        .page-title {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 32px;
          padding-bottom: 12px;
          border-bottom: 2px solid #000000;
          position: relative;
        }

        .page-title::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 80px;
          height: 2px;
          background: #8BC34A;
        }

        .sitemap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .sitemap-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sitemap-link {
          padding: 12px 16px;
          background: #999999;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          transition: background 0.3s;
          text-align: center;
        }

        .sitemap-link:hover {
          background: #8BC34A;
        }

        .sitemap-link.top {
          background: #8BC34A;
          font-weight: bold;
        }

        .sitemap-link.sub {
          padding: 10px 12px;
          font-size: 13px;
          background: #bbbbbb;
        }

        @media (max-width: 768px) {
          .sitemap-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
