'use client'

/**
 * @work 私のカクゴ 私のカクゴとはページ
 * @category メディアサイト コンテンツサイト
 *
 * === ページ構成 ===
 * @technique シングルカラムレイアウト
 * @technique センタリングレイアウト
 * @technique タイポグラフィ重視のデザイン
 *
 * === SEO・LLMO ===
 * @seo メタデータ設定（タイトル・ディスクリプション）
 * @seo セマンティックHTML
 * @seo 見出し階層の最適化
 * @llmo 明確なメッセージ構造
 * @llmo 読みやすい文字サイズと行間
 *
 * === デザイン ===
 * @design シンプルな白背景
 * @design 大きな見出しタイポグラフィ
 * @design 十分な余白
 * @design 読みやすい行長
 * @design グレーフッター
 *
 * === UI要素 ===
 * @ui セクションタイトル（アンダーライン）
 * @ui テキストコンテンツ
 * @ui フッターナビゲーション
 *
 * === コンテンツ戦略 ===
 * @content サイトの理念・ビジョン
 * @content ブランドメッセージ
 * @content ストーリーテリング
 */

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <h2 className="section-title">私のカクゴとは</h2>
          <div className="about-doc-all">
            <p className="headline">カッコイイ大人には、覚悟がある</p>
            <div className="about-doc">
              <div className="sub-word">
                人生にはいくつかの岐路があり、<br />
                そのたびに人は何かを得たり、何かを捨てたりする。<br />
                そこには決断があり、「覚悟」がある
              </div>
              <br />
              「私のカクゴ」では、経済界、スポーツ界、文学界など、<br />
              様々なカッコイイ大人の生き様に焦点をあてています。<br />
              <br />
              そんなカッコイイ大人たちの取材を通して、<br />
              視聴者の方々に、知恵、成功へのカギ、生きていく上でのヒントになるようなメッセージを<br />
              お届けします。<br />
              <br />
              日本のアカルイミライの為に、<br />
              次世代の「カッコイイ大人」を応援します。<br />
              <br />
              <br />
              『私のカクゴ』編集部 企画・制作・運営：株式会社Enjin
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .main {
          padding-top: 130px;
          min-height: 100vh;
          background: #ffffff;
        }

        .container {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 25px;
          padding-bottom: 0;
          border-bottom: none;
          color: #333333;
        }

        .about-doc-all {
          padding: 40px 0;
        }

        .headline {
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 40px;
          line-height: 1.6;
          color: #333333;
        }

        .about-doc {
          font-size: 15px;
          line-height: 2;
          color: #333333;
        }

        .sub-word {
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 2;
        }

        @media (max-width: 768px) {
          .main {
            padding-top: 100px;
          }

          .container {
            padding: 0 16px;
          }

          .headline {
            font-size: 22px;
          }

          .about-doc {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  )
}
