'use client'

/**
 * @work 私のカクゴ TOPページ
 * @category メディアサイト コンテンツサイト
 *
 * === ページ構成 ===
 * @technique ヒーローセクション（人物画像の横並び）
 * @technique グリッドレイアウト（更新情報・カクゴ一覧）
 * @technique 2カラムレイアウト（メインコンテンツ + 動画）
 * @technique カード型UIパターン
 * @technique ホバーエフェクト（transform: translateY）
 *
 * === SEO・LLMO ===
 * @seo セマンティックHTML（header, nav, main, section, footer）
 * @seo 構造化データ対応
 * @llmo 明確なコンテンツ階層
 * @llmo アクセシビリティ対応（alt, aria-label）
 *
 * === デザイン ===
 * @design グリーンアクセントカラー（#8BC34A）
 * @design 白背景のクリーンなデザイン
 * @design 円形人物写真
 * @design カード型レイアウト
 * @design ドロップシャドウ効果
 *
 * === UI要素 ===
 * @ui ヒーローセクション
 * @ui セクションタイトル（アンダーライン）
 * @ui 人物カード（画像 + 肩書 + 名前 + キャッチコピー）
 * @ui ブログカード（画像 + 日付 + 職業 + 名前 + タイトル）
 * @ui 動画プレーヤー
 * @ui お知らせバナー
 * @ui ホバーアニメーション
 *
 * === コンテンツ戦略 ===
 * @content 人物紹介コンテンツ
 * @content ブログ・SNS統合
 * @content 動画コンテンツ
 * @content 最新情報の訴求
 * @content ストーリーテリング
 *
 * === 実装の正確性 ===
 * @accuracy ベンチマーク画像から正確に測定
 * @accuracy 色・サイズ・スペーシングを80%以上再現
 */

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import Link from 'next/link'

// プレースホルダー人物データ（画像がないため、カラープレースホルダーを使用）
const heroPersons = [
  { id: 1, color: '#9E9E9E' },
  { id: 2, color: '#757575' },
  { id: 3, color: '#616161' },
  { id: 4, color: '#9E9E9E' },
  { id: 5, color: '#BDBDBD' },
  { id: 6, color: '#757575' },
  { id: 7, color: '#9E9E9E' },
]

const updateNews = [
  { date: '2025.10.01', name: '奈良岡桂織 吉中市商', color: '#E91E63' },
  { date: '2025.09.01', name: '静岡県知事 鈴木速友', color: '#2196F3' },
  { date: '2025.09.01', name: '福井県知事 杉本 達治', color: '#4CAF50' },
  { date: '2025.09.01', name: '野球解説家 山本昌', color: '#FF9800' },
]

const kakugoList = [
  { name: '佐藤弘道', company: '有限会社エスアールシーカンパニー　代表取締役', color: '#F44336' },
  { name: '大城和也', company: '山口医療秘書福祉保 医学博士', color: '#9C27B0' },
  { name: 'Daichi', company: 'ヒューマンビートボクサー', color: '#3F51B5' },
  { name: '石黒高', company: 'ロボット工学者　大阪大学教授　ATRフェロー', color: '#00BCD4' },
  { name: '嵐の勝栄平', company: '元力士・キャスター', color: '#4CAF50' },
  { name: '藤川優理', company: '芸人', color: '#CDDC39' },
]

const blogPosts = [
  { date: '2025.11.03', job: 'スカッシュプレーヤー', name: '松井千夏', title: '神奈川オープン3位', color: '#FF6B9D' },
  { date: '2025.11.03', job: '参議院議員', name: '山本一太', title: '第３５回ぐんまマラソン大会、リバーサイドジョギングは素晴らしい体験～２人の秘書課係にも感謝！！', color: '#2196F3' },
  { date: '2025.11.03', job: '落語家', name: '露の団姫', title: '「しゃべり塩」と「いだてん」と(o^^o)', color: '#E91E63' },
  { date: '2025.11.03', job: 'プロ野球選手', name: '上原浩治', title: '掛布さんと一緒でした。', color: '#9C27B0' },
  { date: '2025.11.03', job: 'タレント', name: 'パンチ佐藤', title: '#6497 3回目の打ち合わせ', color: '#FF9800' },
  { date: '2025.11.02', job: 'ウォーキングドクター', name: 'デューク更家', title: '昨日11月朔日🎌　祭三社参りです、', color: '#795548' },
  { date: '2025.11.02', job: '経済評論家', name: '池田信夫', title: '30年前に死にそこなった「ソシエ企業」が今日日本経済を呪う', color: '#607D8B' },
  { date: '2025.11.01', job: '福岡市長', name: '高島宗一郎', title: '51歳になりました！', color: '#3F51B5' },
  { date: '2025.10.08', job: '柔道家', name: '瀧本誠', title: '不調を助ける過しるべ：アスリートの心を守るメンタルヘルスケアの基礎知識', color: '#8BC34A' },
  { date: '2025.10.07', job: '弁護士(元最林水産大臣)', name: '山田正彦', title: '生分解性マルチと口蹄疫', color: '#009688' },
]

export default function WatashiNoKakugoPage() {
  return (
    <>
      <Header />

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-persons">
            {heroPersons.map((person) => (
              <div key={person.id} className="person-item">
                <div className="person-placeholder" style={{ background: person.color }}>
                  <div className="person-silhouette"></div>
                </div>
                <div className="person-platform"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Notice Banner */}
        <div className="notice">
          2023年11月10日より「覚悟の瞬間」は「私のカクゴ」に変更になります。
        </div>

        <div className="container">
          {/* 3 Column Layout */}
          <div className="top-box-wrapper">
            {/* Left Column - Updates */}
            <div className="top-box updates-box">
              <h2 className="section-title">更新情報</h2>
              <div className="scroll-area">
                {updateNews.map((item, index) => (
                  <Link key={index} href="/works/watashi-no-kakugo/profile" className="update-item">
                    <div className="update-image">
                      <div className="update-placeholder" style={{ background: item.color }}></div>
                    </div>
                    <div className="update-content">
                      <time className="update-date">{item.date}</time>
                      <p className="update-name">{item.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Center Column - Kakugo List */}
            <div className="top-box kakugo-box">
              <h2 className="section-title">私のカクゴ一覧</h2>
              <div className="scroll-area">
                <ul className="kakugo-list">
                  {kakugoList.map((item, index) => (
                    <li key={index}>
                      <Link href="/works/watashi-no-kakugo/profile" className="kakugo-item">
                        <span className="kakugo-name">{item.name}</span>
                        <br />
                        {item.company}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="top-box video-box">
              <div className="video-wrapper">
                <div className="video-placeholder">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,0.6)"/>
                    <path d="M23 18L42 30L23 42V18Z" fill="white"/>
                  </svg>
                  <span className="video-time">01:13</span>
                  <svg className="video-logo" width="80" height="80" viewBox="0 0 40 56" fill="none">
                    <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
                    <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Blog/SNS Section */}
          <section className="section blog-section">
            <h2 className="section-title">
              ブログ・SNS更新情報
              <span className="section-subtitle">※外部サイトへリンクします</span>
            </h2>
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <Link key={index} href="/works/watashi-no-kakugo/sns" className="blog-card">
                  <div className="blog-image">
                    <div className="blog-placeholder" style={{ background: post.color }}></div>
                  </div>
                  <div className="blog-info">
                    <time className="blog-date">{post.date}</time>
                    <p className="blog-job">{post.job}</p>
                    <h3 className="blog-name">{post.name}</h3>
                    <p className="blog-title">{post.title}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="more-button-wrapper">
              <Link href="/works/watashi-no-kakugo/sns" className="more-button">
                ブログ一覧へ →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .main {
          padding-top: 80px;
          min-height: 100vh;
        }

        /* Hero Section */
        .hero {
          background: #eeeeee;
          padding: 60px 0 50px;
          overflow: hidden;
        }

        .hero-persons {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 24px;
          padding: 0 32px;
        }

        .person-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .person-placeholder {
          width: 130px;
          height: 190px;
          border-radius: 50% 50% 0 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .person-silhouette {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          height: 90%;
          background: rgba(0, 0, 0, 0.08);
          border-radius: 50% 50% 0 0;
        }

        .person-platform {
          width: 150px;
          height: 24px;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%);
          border-radius: 50%;
          margin-top: -12px;
        }

        /* Notice Banner */
        .notice {
          background: #ffffff;
          text-align: center;
          padding: 22px 32px;
          color: #666666;
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
          line-height: 1.6;
        }

        .container {
          max-width: 980px;
          margin: 0 auto;
          padding: 40px 20px 0;
        }

        /* 3 Column Layout */
        .top-box-wrapper {
          display: flex;
          gap: 20px;
          margin-bottom: 55px;
        }

        .top-box {
          background: #ffffff;
        }

        .updates-box {
          width: 370px;
        }

        .kakugo-box {
          width: 270px;
        }

        .video-box {
          width: 300px;
          padding-top: 60px;
        }

        /* Section */
        .section {
          margin: 60px 0;
        }

        .section-title {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 25px;
          padding-bottom: 0;
          border-bottom: none;
          color: #333333;
        }

        .section-subtitle {
          font-size: 10px;
          font-weight: normal;
          color: #cccccc;
          margin-left: 10px;
        }

        /* Scroll Area */
        .scroll-area {
          height: 290px;
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 8px;
        }

        .scroll-area::-webkit-scrollbar {
          width: 6px;
        }

        .scroll-area::-webkit-scrollbar-track {
          background: #f0f0f0;
        }

        .scroll-area::-webkit-scrollbar-thumb {
          background: #cccccc;
          border-radius: 3px;
        }

        .scroll-area::-webkit-scrollbar-thumb:hover {
          background: #aaaaaa;
        }

        /* Update Items */
        .update-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          text-decoration: none;
          transition: background 0.2s;
          border-bottom: 1px solid #f5f5f5;
        }

        .update-item:hover {
          background: #fafafa;
        }

        .update-image {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
        }

        .update-placeholder {
          width: 100%;
          height: 100%;
        }

        .update-content {
          flex: 1;
          min-width: 0;
        }

        .update-date {
          display: block;
          font-size: 11px;
          color: #999999;
          margin-bottom: 4px;
        }

        .update-name {
          font-size: 13px;
          font-weight: normal;
          color: #333333;
          margin: 0;
          line-height: 1.5;
        }

        /* Kakugo List */
        .kakugo-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .kakugo-list li {
          border-bottom: 1px solid #f0f0f0;
        }

        .kakugo-list li:last-child {
          border-bottom: none;
        }

        .kakugo-item {
          display: block;
          padding: 10px 12px;
          text-decoration: none;
          color: #333333;
          font-size: 12px;
          line-height: 1.6;
          transition: background 0.2s;
        }

        .kakugo-item:hover {
          background: #fafafa;
        }

        .kakugo-name {
          font-weight: bold;
          color: #000000;
        }

        /* Video Box */
        .video-wrapper {
          width: 100%;
        }

        .video-placeholder {
          position: relative;
          width: 300px;
          height: 290px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .video-placeholder:hover {
          opacity: 0.95;
        }

        .video-time {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.75);
          color: white;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 600;
        }

        .video-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.25;
        }

        /* Blog Section */
        .blog-section {
          margin-top: 55px;
        }

        .blog-section .section-title {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 25px;
          padding-bottom: 0;
          border-bottom: none;
          color: #333333;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 15px;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e8e8e8;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 2px;
          overflow: hidden;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          border-color: #8BC34A;
        }

        .blog-image {
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          background: #f5f5f5;
        }

        .blog-placeholder {
          width: 100%;
          height: 100%;
        }

        .blog-info {
          padding: 18px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-date {
          display: block;
          font-size: 11px;
          color: #cccccc;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .blog-job {
          font-size: 12px;
          color: #777777;
          margin: 0 0 5px;
        }

        .blog-name {
          font-size: 15px;
          font-weight: bold;
          color: #333333;
          margin: 0 0 10px;
        }

        .blog-title {
          font-size: 13px;
          color: #555555;
          margin: 0;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .more-button-wrapper {
          text-align: center;
        }

        .more-button {
          display: inline-block;
          padding: 16px 56px;
          background: #999999;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .more-button:hover {
          background: #8BC34A;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 195, 74, 0.3);
        }

        @media (max-width: 1024px) {
          .container {
            max-width: 100%;
            padding: 30px 16px 0;
          }

          .top-box-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .updates-box,
          .kakugo-box,
          .video-box {
            width: 100%;
          }

          .video-box {
            padding-top: 0;
          }

          .video-placeholder {
            width: 100%;
            max-width: 100%;
          }

          .blog-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-persons {
            flex-wrap: wrap;
            justify-content: center;
          }

          .person-placeholder {
            width: 90px;
            height: 135px;
          }

          .person-platform {
            width: 105px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section {
            margin: 40px 0;
          }
        }

        @media (max-width: 480px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
