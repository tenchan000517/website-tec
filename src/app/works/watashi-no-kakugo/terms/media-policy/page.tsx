'use client'

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import { TermsLayout } from '@/components/works/watashi-no-kakugo/TermsLayout'

export default function MediaPolicyPage() {
  return (
    <>
      <Header />

      <main className="main">
        <TermsLayout activeMenu="media-policy">
          <h1 className="page-title">メディアポリシー</h1>

          <p>私のカクゴを運営する株式会社Enjinは、特定の経済体制に属さない中立的な立場から、ご出演者の意思、アドバイスを日本のビジネスマンや学生の方々に無料提供を行っています。</p>

          <p>ご出演いただいている方は、新所が発想や独自の視点で事業を展開されている起業家や経営者、士業等活躍する文化名人、アスリートの方々を弊社独自の選出基準に基づき選出承諾し、制作会議によってご出演承諾を決定させていただいております。</p>

          <p>・公序良俗に反する事業及び企業体</p>
          <p>・行政機関から行政指導（特に労務問題）などの処分を受けている</p>
          <p>・事業及び企業体が社会問題を起こしている</p>
          <p>・弊社が不適切と判断した場合 については出演をお断りさせていただきます。</p>

          <p>放映期間中においても出演企業の過失による事業との相福が発覚した場合、掲載基準に抵触すると弊社が判断した場合は放映について措置をかける、もしくは即時放映をを中止することがございます。</p>

          <p>掲載情報については、取材を通してご出演企業から提供されて取材時点での内容をもとに編集・放映をしておりますが提供情報については弊社（株式会社Enjin）および協力会社は一切の保証をしないものとします。</p>

          <p>また本サイトからリンクしている各ホームページなど弊社が管理していない外部サイトに記載されている情報についても弊社（株式会社Enjin）および協力会社は一切の責任を負いません。</p>

          <h2>著作権について</h2>
          <p>『私のカクゴ』のホームページ上で配信・公開されている映像・音声・情報に関しては、すべて著作権法で保護されています。また、その権利に関しては、株式会社Enjinに帰属します。</p>

          <p>よって、株式会社Enjinに許可なく、『私のカクゴ』のホームページ上のコンテンツに一部または全部を問わず、複製・公開・配布・譲渡・貸与・翻訳・修正することを禁じます。</p>
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
