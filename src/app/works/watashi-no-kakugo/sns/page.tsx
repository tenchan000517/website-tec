'use client'

/**
 * @work 私のカクゴ ブログ・SNSページ
 * @category メディアサイト コンテンツサイト
 *
 * === ページ構成 ===
 * @technique サイドバー検索フォーム
 * @technique グリッドレイアウト
 * @technique カード型UI
 */

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import Link from 'next/link'

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

export default function SnsPage() {
  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <div className="layout">
            {/* Sidebar Search */}
            <aside className="sidebar">
              <h2 className="sidebar-title">検索</h2>
              <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">名 前：</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">肩 書：</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">性 別：</label>
                  <select className="form-select">
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">血液型：</label>
                  <select className="form-select">
                    <option value="">選択してください</option>
                    <option value="A">A型</option>
                    <option value="B">B型</option>
                    <option value="O">O型</option>
                    <option value="AB">AB型</option>
                  </select>
                </div>
                <button type="submit" className="search-button">検 索</button>
              </form>
            </aside>

            {/* Main Content */}
            <div className="main-content">
              <h1 className="page-title">ブログ・SNS</h1>
              <div className="blog-grid">
                {blogPosts.map((post, index) => (
                  <div key={index} className="blog-card">
                    <div className="blog-image">
                      <div className="blog-placeholder" style={{ background: post.color }}></div>
                    </div>
                    <div className="blog-info">
                      <time className="blog-date">{post.date}</time>
                      <p className="blog-job">{post.job}</p>
                      <h3 className="blog-name">{post.name}</h3>
                      <p className="blog-title">{post.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="more-button-wrapper">
                <button className="more-button">もっと見る +</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .main {
          padding-top: 72px;
          min-height: 100vh;
          background: #f8f8f8;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
        }

        /* Sidebar */
        .sidebar {
          background: #ffffff;
          padding: 24px;
          border-radius: 4px;
          height: fit-content;
          position: sticky;
          top: 92px;
        }

        .sidebar-title {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 24px;
          padding-bottom: 10px;
          border-bottom: 2px solid #000000;
          position: relative;
        }

        .sidebar-title::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #8BC34A;
        }

        .search-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #cccccc;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus,
        .form-select:focus {
          border-color: #8BC34A;
        }

        .form-select {
          background: #ffffff;
          cursor: pointer;
        }

        .search-button {
          width: 100%;
          padding: 12px;
          background: #8BC34A;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 8px;
        }

        .search-button:hover {
          background: #7AA93A;
        }

        /* Main Content */
        .main-content {
          min-width: 0;
        }

        .page-title {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 28px;
          padding-bottom: 10px;
          border-bottom: 2px solid #000000;
          position: relative;
        }

        .page-title::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 60px;
          height: 2px;
          background: #8BC34A;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          transition: all 0.3s;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .blog-image {
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .blog-placeholder {
          width: 100%;
          height: 100%;
        }

        .blog-info {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-date {
          display: block;
          font-size: 12px;
          color: #cccccc;
          margin-bottom: 6px;
        }

        .blog-job {
          font-size: 12px;
          color: #666666;
          margin: 0 0 4px;
        }

        .blog-name {
          font-size: 15px;
          font-weight: bold;
          color: #000000;
          margin: 0 0 8px;
        }

        .blog-title {
          font-size: 13px;
          color: #333333;
          margin: 0;
          line-height: 1.5;
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
          padding: 14px 48px;
          background: #999999;
          color: #ffffff;
          border: none;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .more-button:hover {
          background: #8BC34A;
        }

        @media (max-width: 1024px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
          }

          .blog-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
