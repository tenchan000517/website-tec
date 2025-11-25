'use client'

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import { TermsLayout } from '@/components/works/watashi-no-kakugo/TermsLayout'

export default function CompanyPage() {
  return (
    <>
      <Header />

      <main className="main">
        <TermsLayout activeMenu="company">
          <h1 className="page-title">会社概要</h1>

          <table className="company-table">
            <tbody>
              <tr>
                <th>社名</th>
                <td>株式会社Enjin</td>
              </tr>
              <tr>
                <th>東京本社</th>
                <td>
                  〒104-0061　東京都中央区銀座5-13-16 ヒューリック銀座イーストビル8F<br />
                  (03)4590-0808
                </td>
              </tr>
              <tr>
                <th>事業開始日</th>
                <td>2006年6月</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>代表取締役CEO兼CHRO　本田幸大</td>
              </tr>
              <tr>
                <th>取引先銀行</th>
                <td>
                  三菱東京ＵＦＪ銀行<br />
                  りそな銀行
                </td>
              </tr>
            </tbody>
          </table>
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

        .company-table {
          width: 100%;
          border-collapse: collapse;
        }

        .company-table th,
        .company-table td {
          padding: 20px;
          border: 1px solid #e5e5e5;
          font-size: 14px;
          line-height: 1.8;
        }

        .company-table th {
          background: #f5f5f5;
          font-weight: bold;
          text-align: left;
          width: 200px;
        }

        .company-table td {
          color: #333333;
        }
      `}</style>
    </>
  )
}
