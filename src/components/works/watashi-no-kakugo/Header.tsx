'use client'

/**
 * @work 私のカクゴ ヘッダー
 * @category メディアサイト コンテンツサイト
 *
 * === レイアウト技術 ===
 * @technique 固定ヘッダー（position: fixed）
 * @technique フレックスボックスレイアウト
 * @technique レスポンシブナビゲーション
 *
 * === UI要素 ===
 * @ui ロゴ（グリーンのアイコン + テキスト）
 * @ui グローバルナビゲーション
 * @ui サイト内検索フォーム
 * @ui ホバーエフェクト
 *
 * === デザイン ===
 * @design 白背景のクリーンなヘッダー
 * @design グリーンアクセントカラー（#8BC34A）
 * @design シンプルなタイポグラフィ
 *
 * === 実装の正確性 ===
 * @accuracy ベンチマーク画像から正確に測定
 * @accuracy 色・サイズ・スペーシングを正確に再現
 */

import Link from 'next/link'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/works/watashi-no-kakugo" className="logo">
          <svg width="40" height="56" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
            <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
            <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
          </svg>
          <div className="logo-text">
            <span className="logo-subtitle">やりたいことを諦めた大人がカッコイイ</span>
            <span className="logo-title">私のカクゴ</span>
          </div>
        </Link>

        <nav className="nav">
          <Link href="/works/watashi-no-kakugo/about" className="nav-link">
            私のカクゴとは
          </Link>
          <Link href="/works/watashi-no-kakugo/persons" className="nav-link">
            私のカクゴ一覧
          </Link>
          <Link href="/works/watashi-no-kakugo/sns" className="nav-link">
            ブログ・SNS
          </Link>
        </nav>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="サイト内検索"
            className="search-input"
          />
          <button type="submit" className="search-button" aria-label="検索">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="6" stroke="white" strokeWidth="1.5"/>
              <path d="M12 12L16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </form>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 1px solid #e0e0e0;
          z-index: 1000;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon {
          flex-shrink: 0;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .logo-subtitle {
          font-size: 10px;
          color: #666666;
          line-height: 1;
          white-space: nowrap;
          letter-spacing: 0.5px;
        }

        .logo-title {
          font-size: 26px;
          font-weight: bold;
          color: #000000;
          line-height: 1;
          white-space: nowrap;
          letter-spacing: 1px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 40px;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          text-decoration: none;
          color: #333333;
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
          transition: color 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #8BC34A;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #8BC34A;
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .search-form {
          display: flex;
          align-items: center;
          position: relative;
          flex-shrink: 0;
        }

        .search-input {
          width: 220px;
          height: 38px;
          padding: 0 46px 0 14px;
          border: 1px solid #d0d0d0;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s;
          background: #fafafa;
        }

        .search-input::placeholder {
          color: #aaaaaa;
        }

        .search-input:focus {
          border-color: #8BC34A;
          background: #ffffff;
        }

        .search-button {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 46px;
          background: #999999;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .search-button:hover {
          background: #8BC34A;
        }

        @media (max-width: 1024px) {
          .container {
            gap: 32px;
            padding: 0 24px;
          }

          .nav {
            gap: 24px;
          }

          .search-input {
            width: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            height: auto;
            flex-wrap: wrap;
            padding: 16px 20px;
            gap: 16px;
          }

          .logo {
            width: 100%;
            justify-content: space-between;
          }

          .search-form {
            order: -1;
          }

          .nav {
            width: 100%;
            gap: 20px;
            font-size: 15px;
            justify-content: flex-start;
          }

          .search-input {
            width: 160px;
          }
        }
      `}</style>
    </header>
  )
}
