'use client'

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import { TermsLayout } from '@/components/works/watashi-no-kakugo/TermsLayout'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="main">
        <TermsLayout activeMenu="privacy-policy">
          <h1 className="page-title">プライバシーポリシー</h1>

          <p>『私のカクゴ』上で収集した全ての個人情報に対してその利用目的と安全対策における方針を以下のように定めます。</p>

          <h2>個人情報の利用目的</h2>
          <p>『私のカクゴ』上で収集した個人情報は、『私のカクゴ』の利用状況を把握するために使用いたします。利用状況の把握のため、他事業者へ情報を提供する場合があります。この際は委託先に対して『私のカクゴ』に関するお知らせのために、登録いただいたメールアドレス宛てに関連情報を配信いたします。</p>

          <h2>個人情報の収集</h2>
          <p>『私のカクゴ』のサービス向上・機能実現のため、個人情報を直接取得する場合は、あらかじめ利用目的を明示します。また個人情報の取扱いは、それらの利用目的内での範囲に限定し、無断でその他の目的のために利用いたしません。</p>

          <h2>個人情報の安全管理</h2>
          <p>『私のカクゴ』の運営において社内規定および社内管理体制の整備、従業員の教育、並びに、個人情報への不正アクセスや個人情報の紛失、破壊、改ざんおよび漏洩防止に関する適切な措置を行い、また、その見直しを継続して図ることにより、個人情報の保護に努めています。</p>

          <h2>個人情報の開示・訂正・削除</h2>
          <p>『私のカクゴ』のホームページ上または、下記メールアドレス宛へ、登録いただいた個人情報の開示・訂正・削除の旨をご連絡ください。内容の確認をさせていただき、速やかが対応をさせていただきます。</p>
          <p>但し、情報の開示に関して困難な場合や、開示にかかる費用が発生する場合は、あらかじめその旨をご連絡させていただきます。</p>
          <p>個人情報に関するお問い合わせ窓口メールアドレス： info@y-enjin.co.jp</p>

          <h2>その他</h2>
          <p>本規定を事前の報告なく変更する場合がございます、その際はご了承います。『私のカクゴ』が何らかの理由によりサービス終了となた場合は、『私のカクゴ』で収集した個人情報のすべてを破棄しますが、買収や合併による事業継続となる場合は、この限りではありません。</p>
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

        p, h2 {
          font-size: 14px;
          line-height: 1.8;
          color: #333333;
          margin: 0 0 16px;
        }

        h2 {
          font-size: 18px;
          font-weight: bold;
          margin: 32px 0 16px;
        }
      `}</style>
    </>
  )
}
