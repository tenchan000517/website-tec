'use client'

/**
 * @work 私のカクゴ フッター
 * @category メディアサイト コンテンツサイト
 *
 * === レイアウト技術 ===
 * @technique フレックスボックスレイアウト
 * @technique レスポンシブフッター
 *
 * === UI要素 ===
 * @ui フッターナビゲーション
 * @ui コピーライト表示
 * @ui ホバーエフェクト
 *
 * === デザイン ===
 * @design グレー背景（#f5f5f5）
 * @design シンプルなリンク配置
 */

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/works/watashi-no-kakugo/terms" className="footer-link">
          サイトご利用にあたって
        </Link>
        <Link href="/works/watashi-no-kakugo/terms/media-policy" className="footer-link">
          メディアポリシー
        </Link>
        <Link href="/works/watashi-no-kakugo/terms/privacy-policy" className="footer-link">
          プライバシーポリシー
        </Link>
        <Link href="/works/watashi-no-kakugo/terms/company" className="footer-link">
          会社概要
        </Link>
        <Link href="/works/watashi-no-kakugo/sitemap" className="footer-link">
          サイトマップ
        </Link>
      </nav>

      <p className="copyright">
        Copyright © KAKUGO.TV. All rights reserved.
      </p>

      <style jsx>{`
        .footer {
          background: #f8f8f8;
          padding: 36px 32px 40px;
          margin-top: 100px;
          border-top: 1px solid #e8e8e8;
        }

        .footer-nav {
          max-width: 1200px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 28px;
        }

        .footer-link {
          text-decoration: none;
          color: #666666;
          font-size: 13px;
          transition: color 0.3s;
          font-weight: 500;
        }

        .footer-link:hover {
          color: #8BC34A;
        }

        .copyright {
          text-align: center;
          color: #aaaaaa;
          font-size: 11px;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 32px 24px 36px;
          }

          .footer-nav {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
