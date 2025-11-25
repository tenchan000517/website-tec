'use client'

/**
 * @work 私のカクゴ プロフィール詳細ページ
 * @category メディアサイト コンテンツサイト
 *
 * === ページ構成 ===
 * @technique 2カラムレイアウト（480px + 480px）
 * @technique 動画プレーヤー
 * @technique タブ切り替え機能
 * @technique 円グラフ表示
 * @technique フロートレイアウト
 */

import { useState } from 'react'
import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import Link from 'next/link'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(1)

  const historyData = [
    {
      id: 1,
      title: '幼少～学生時代',
      content: '幼少のころは内向的でした。小学校3年生で転校したことを契機に、少しだけ活発に振舞えるようになりました。両親が共働きだったため、6歳下の弟の面倒をみるのに追われていましたが、おかげで今でも乳幼児の扱いは上手です。学生時代は、阪神タイガースの応援、バンド活動（ヘビメタ・バンドでドラムスを担当）、バイク（愛車はZ400GP）で走り回ることに熱中していました。'
    },
    {
      id: 2,
      title: '現在の道へ進んだきっかけ',
      content: '24歳の春（1985年）に松下幸之助氏から、1990年以降に起こり得る大きな変化（安全保障の枠組み、産業構造、日本経済等）についての予測を伺い、政策的な備えの必要性を痛感。国政の場で働くことを決意しました。'
    },
    {
      id: 3,
      title: 'ターニングポイント',
      content: '大学4年の夏、初めてお目にかかった松下幸之助氏の眼光の鋭さに圧倒されました。すでに内定していた就職先を断り、松下政経塾に進むことについて、「夢があって、いいじゃない」と応援してくれた両親に感謝しています。'
    },
    {
      id: 4,
      title: '覚悟の瞬間',
      content: '1993年の衆議院選挙への出馬です。当時は中選挙区制度でしたが、奈良県選挙区では、有力な現職5名と保守系新人に加え、大ブームだった日本新党の新人候補も出馬を予定しておられ、私のような無所属新人が当選できる可能性は皆無と言われていました。知人や友人が出馬に猛反対する中で父が背中を押してくれ、思い切って立候補しました。'
    },
    {
      id: 5,
      title: '今後の目標',
      content: '国家観をともにする同志とともに、内閣を作ることです。「国民の生命、国家の主権と名誉」を守り抜ける政府の体制を構築すること、「自立と勤勉の倫理」を復活させること、オープンイノベーション推進によって国際競争力を再生すること、日本国憲法を改正すること等、やるべき仕事があります。'
    }
  ]

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <div className="content-wrapper">
            {/* Left Column */}
            <div className="left-column">
              {/* Video Area */}
              <div className="movie-area">
                <div className="vimeo-thumb-wrapper">
                  <div className="video-placeholder"></div>
                  <div className="play-button">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.6)"/>
                      <path d="M30 24L56 40L30 56V24Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="video-time">09:08</div>
                </div>
              </div>

              {/* Person Profile */}
              <div className="person-det-wrapper">
                <div className="person-det-inner">
                  <div className="mask-img-area">
                    <div className="person-image"></div>
                    <span className="mask-img"></span>
                  </div>
                  <div className="mg-ctrl">
                    <div className="ruby">たかいちさなえ</div>
                    <div className="name">
                      <h1 className="name-title">高市早苗</h1>
                      <span>奈良県生まれ</span>
                      <span>A型</span>
                    </div>
                    <div className="auto-break">職業：衆議院議員</div>
                    <div className="auto-break">趣味：スキューバダイビング、楽器演奏</div>
                    <div className="auto-break">座右の銘：一日一生涯</div>
                  </div>
                  <p className="person-bio">
                    神戸大学経営学部卒業、財団法人松下政経塾卒塾、近畿大学経済学部教授。衆議院文部科学委員長、衆議院憲法調査会小委員長、通商産業政務次官、経済産業副大臣（小泉・福田・麻生内閣）、内閣府特命担当大臣（安倍内閣）などを歴任。現在、衆議院議員（5期）、自民党奈良2区支部長、自民党政調副会長。
                  </p>
                </div>

                <a href="https://www.sanae.gr.jp/" target="_blank" rel="noopener noreferrer" className="official-link">
                  オフィシャルサイト
                </a>
                <div className="clear"></div>
              </div>

              {/* History Section */}
              <h2 className="section-title mt50">来歴</h2>
              <div className="history-area">
                <table className="history-num">
                  <tbody>
                    <tr>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <td key={num}>
                          <a
                            href="javascript:void(0)"
                            className={`hist-link ${activeTab === num ? 'act' : ''}`}
                            onClick={() => setActiveTab(num)}
                          >
                            {num}
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <div className="history-doc-wrapper">
                  {historyData.map((item) => (
                    <div
                      key={item.id}
                      className="history-doc-inner"
                      id={`hist${item.id}`}
                      style={{ display: activeTab === item.id ? 'block' : 'none' }}
                    >
                      <h3 className="history-title">{item.title}</h3>
                      <p className="history-content">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Videos */}
              <h2 className="section-title mt50">
                おすすめ動画
                <span className="section-note">※この動画を見た人はこの人の動画も観ています</span>
              </h2>
              <div className="recommend-area">
                {[
                  { name: '中西健治', subtitle: '参議院議員' },
                  { name: '宇都宮隆', subtitle: 'ボーカリスト' },
                  { name: 'マーキー　', subtitle: 'ラジオDJ' }
                ].map((person, i) => (
                  <div key={i} className="person-box-wrapper">
                    <div className="person-box-inner">
                      <div className="mask-img-area">
                        <Link href="/works/watashi-no-kakugo/profile" className="target-link">
                          <div className="person-thumb"></div>
                          <span className="mask-img"></span>
                        </Link>
                      </div>
                      <h4 className="person">
                        <span className="auto-break">{person.subtitle}</span>
                        <br />
                        {person.name}
                      </h4>
                    </div>
                  </div>
                ))}
                <div className="clear"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Schedule Chart */}
              <iframe
                className="graph-frame"
                src="/works/watashi-no-kakugo/person/graph.html?contentId=takaichi_sanae"
                scrolling="no"
              ></iframe>

              {/* Favorites */}
              <h2 className="section-title mb25">お気に入り</h2>

              <div className="favorite-box-wrapper">
                <div className="favorite-box-inner">
                  <div className="favorite-image-left">
                    <div className="favorite-img"></div>
                  </div>
                  <div className="favorite-text-right">
                    <h4 className="item-title">リカちゃん人形</h4>
                    <p className="auto-break">
                      奈良限定・万葉リカちゃんです。限定品なので、奈良に帰った際には買いこんで、女性議員仲間に配ったりしています。
                    </p>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>

              <div className="favorite-box-wrapper">
                <div className="favorite-box-inner">
                  <div className="favorite-image-left">
                    <div className="favorite-img"></div>
                  </div>
                  <div className="favorite-text-right">
                    <h4 className="item-title">張子の虎</h4>
                    <p className="auto-break">
                      こちらも奈良県のもので、信貴山で売っています。阪神タイガースの選手たちも必勝祈願に来るお寺とのことです。
                    </p>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        /* Main */
        .main {
          padding-top: 80px;
          background: #ffffff;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 10px;
        }

        .content-wrapper {
          padding-top: 40px;
        }

        /* Layout */
        .left-column {
          width: 480px;
          float: left;
        }

        .right-column {
          width: 480px;
          float: right;
        }

        .clear {
          clear: both;
        }

        /* Video Area */
        .movie-area {
          margin-bottom: 20px;
        }

        .vimeo-thumb-wrapper {
          position: relative;
          width: 480px;
          height: 270px;
          background: #e0e0e0;
          overflow: hidden;
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        .video-time {
          position: absolute;
          bottom: 8px;
          left: 8px;
          background: rgba(0, 0, 0, 0.7);
          color: #ffffff;
          padding: 4px 8px;
          font-size: 12px;
          font-weight: bold;
        }

        /* Person Profile */
        .person-det-wrapper {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          padding: 20px;
          margin-bottom: 20px;
        }

        .person-det-inner {
          overflow: hidden;
        }

        .mask-img-area {
          width: 100px;
          height: 100px;
          float: left;
          margin-right: 20px;
          position: relative;
        }

        .person-image {
          width: 100%;
          height: 100%;
          background: #e91e63;
          border-radius: 50%;
        }

        .mask-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }

        .mg-ctrl {
          overflow: hidden;
        }

        .ruby {
          font-size: 11px;
          color: #666666;
          margin-bottom: 2px;
        }

        .name {
          margin-bottom: 8px;
        }

        .name-title {
          display: inline;
          font-size: 24px;
          font-weight: bold;
          margin: 0;
          margin-right: 10px;
        }

        .name span {
          font-size: 13px;
          color: #333333;
          margin-right: 10px;
        }

        .auto-break {
          font-size: 13px;
          color: #333333;
          line-height: 1.6;
          margin: 2px 0;
        }

        .person-bio {
          margin-top: 15px;
          font-size: 15px;
          line-height: 2;
          color: #333333;
          clear: both;
        }

        .official-link {
          display: block;
          width: 100%;
          padding: 12px;
          background: #999999;
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          margin-top: 15px;
          transition: background 0.3s;
        }

        .official-link:hover {
          background: #8BC34A;
        }

        /* Section Title */
        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 25px;
          padding-bottom: 10px;
          border-bottom: 2px solid #000000;
          position: relative;
        }

        .section-title::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 50px;
          height: 2px;
          background: #8BC34A;
        }

        .mt50 {
          margin-top: 50px;
        }

        .mb25 {
          margin-bottom: 25px;
        }

        .section-note {
          color: #cccccc;
          font-size: 10px;
          font-weight: normal;
          margin-left: 10px;
        }

        /* History */
        .history-area {
          margin-bottom: 30px;
        }

        .history-num {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .history-num td {
          width: 20%;
          text-align: center;
        }

        .hist-link {
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: #eeeeee;
          color: #333333;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .hist-link:hover {
          background: #e0e0e0;
        }

        .hist-link.act {
          background: #8BC34A;
          color: #ffffff;
        }

        .history-doc-wrapper {
          background: #f8f8f8;
          padding: 20px;
          border-radius: 3px;
        }

        .history-title {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 10px;
        }

        .history-content {
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 2;
          color: #333333;
        }

        /* Recommend Videos */
        .recommend-area {
          overflow: hidden;
          margin-bottom: 30px;
        }

        .person-box-wrapper {
          width: 33.33%;
          float: left;
          padding: 0 10px;
          box-sizing: border-box;
        }

        .person-box-inner {
          text-align: center;
        }

        .person-box-inner .mask-img-area {
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          position: relative;
          margin: 0 0 10px;
          float: none;
        }

        .target-link {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .person-thumb {
          width: 100%;
          height: 100%;
          background: #9c27b0;
          border-radius: 50%;
        }

        .person-box-inner .mask-img {
          border-radius: 50%;
        }

        .person {
          font-size: 13px;
          font-weight: normal;
          margin: 0;
          line-height: 1.4;
        }

        .person .auto-break {
          font-size: 11px;
          color: #666666;
          display: block;
          margin: 0;
        }

        /* Right Column */
        .graph-frame {
          width: 480px;
          height: 700px;
          border: none;
          margin-bottom: 30px;
        }

        /* Favorites */
        .favorite-box-wrapper {
          margin-bottom: 20px;
        }

        .favorite-box-inner {
          overflow: hidden;
        }

        .favorite-image-left {
          width: 160px;
          float: left;
          margin-right: 10px;
        }

        .favorite-img {
          width: 160px;
          height: 120px;
          background: #ff6b6b;
          border-radius: 3px;
        }

        .favorite-text-right {
          width: 300px;
          float: right;
        }

        .item-title {
          font-size: 16px;
          font-weight: bold;
          color: #8BC34A;
          margin: 0 0 8px;
        }

        .favorite-text-right .auto-break {
          font-size: 13px;
          line-height: 1.6;
          color: #333333;
        }

        @media (max-width: 1024px) {
          .left-column,
          .right-column {
            width: 100%;
            float: none;
          }

          .vimeo-thumb-wrapper {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .graph-frame {
            width: 100%;
          }

          .person-box-wrapper {
            width: 33.33%;
          }
        }

        @media (max-width: 768px) {
          .person-box-wrapper {
            width: 50%;
          }

          .favorite-image-left,
          .favorite-text-right {
            width: 100%;
            float: none;
          }

          .favorite-image-left {
            margin: 0 0 10px;
          }

          .favorite-img {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
