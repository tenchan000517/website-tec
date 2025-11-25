'use client'

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import { TermsLayout } from '@/components/works/watashi-no-kakugo/TermsLayout'

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="main">
        <TermsLayout activeMenu="contact">
          <h1 className="page-title">お問い合わせ</h1>

          <p>「私のカクゴ」を運営している株式会社Enjinの問い合わせフォームよりお問い合わせ内容のご入力をお願いします。</p>

          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            株式会社Enjin お問い合わせフォーム はコチラ
          </a>
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

        p {
          font-size: 14px;
          line-height: 1.8;
          color: #333333;
          margin: 0 0 24px;
        }

        .contact-link {
          display: inline-block;
          padding: 12px 24px;
          background: #8BC34A;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          border-radius: 4px;
          transition: background 0.3s;
        }

        .contact-link:hover {
          background: #7AA93A;
        }
      `}</style>
    </>
  )
}
