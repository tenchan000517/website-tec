'use client'

/**
 * @work 私のカクゴ サイトご利用にあたって
 * @category メディアサイト コンテンツサイト
 */

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import { TermsLayout } from '@/components/works/watashi-no-kakugo/TermsLayout'

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="main">
        <TermsLayout activeMenu="terms">
          <h1 className="page-title">サイトご利用にあたって</h1>

          <section className="section">
            <h2 className="section-title">ご利用環境</h2>
            <p>「私のカクゴ」を快適にご利用いただくために、下記の環境を推奨いたします。</p>
            <p>推奨環境以外でのご利用や推奨環境下でもお客様のブラウザの設定によっては、正しく表示されない場合、もしくはご利用できない場合がございます。</p>

            <h3>パソコン</h3>
            <p>[OS]<br />
            Windows 10、Windows 11、Mac OS X 10.12以降</p>

            <p>[ブラウザ]<br />
            Google Chrome　最新版<br />
            Microsoft Edge　最新版<br />
            Safari　最新版</p>

            <h3>スマートフォン</h3>
            <p>[OS]<br />
            iOS 最新3世代<br />
            Android 最新3世代</p>

            <p>[ブラウザ]<br />
            各OSで標準搭載されているブラウザの最新版（Safari、Google Chrome）</p>

            <h3>その他</h3>
            <p>ご使用の環境によっては、セキュリティソフト等により正常に閲覧できない場合があります。<br />
            正常に閲覧できない場合は、お使いのソフトウェアを確認し、各メーカー様へご確認ください。</p>
          </section>
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

        .section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 16px;
        }

        .section p {
          font-size: 14px;
          line-height: 1.8;
          color: #333333;
          margin: 0 0 16px;
        }

        .section h3 {
          font-size: 16px;
          font-weight: bold;
          margin: 24px 0 12px;
        }
      `}</style>
    </>
  )
}
