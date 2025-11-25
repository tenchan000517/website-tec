'use client'

/**
 * @work 私のカクゴ 私のカクゴ一覧ページ
 * @category メディアサイト コンテンツサイト
 *
 * === ページ構成 ===
 * @technique サイドバー検索フォーム
 * @technique 2カラムグリッドレイアウト
 * @technique カード型UI
 *
 * === UI要素 ===
 * @ui 検索フォーム（テキスト入力 + ドロップダウン）
 * @ui 人物カード（画像 + 情報）
 * @ui グリーンアクセントボタン
 */

import { Header } from '@/components/works/watashi-no-kakugo/Header'
import { Footer } from '@/components/works/watashi-no-kakugo/Footer'
import Link from 'next/link'

const persons = [
  { name: '片岡女花織', job: '社会人野球クラブチーム京滝ゴールデンゴールズ監督・タレント 片岡女花織', message: '夢ある限り努力は無限', color: '#2196F3' },
  { name: '岩野歩', job: 'プロギャーパレー選手', message: '天真爛漫', color: '#E91E63' },
  { name: 'なるようになる', job: 'WBC世界ストロー級初代王者 井岡弘樹', message: 'ハートのラブ', color: '#FF9800' },
  { name: '三ツ矢雄二', job: '声優', message: 'なるようになる', color: '#9C27B0' },
  { name: '中西国治', job: '参議院議員', message: '人生常にチャレンジ', color: '#3F51B5' },
  { name: '大村秀章', job: '愛知県知事', message: '敬天愛人', color: '#00BCD4' },
  { name: '河合純一', job: 'パラリンピック競泳金メダリスト', message: '夢への努力は今しかない', color: '#4CAF50' },
  { name: '世耕弘成', job: '参議院議員', message: 'グローバルに考え、日本人として行動する', color: '#607D8B' },
  { name: '西村春子', job: '福田記念大阪医科内科医院 開科医師', message: '愛の反対は無関心', color: '#E91E63' },
  { name: '高市早苗', job: '参議院議員', message: '一日一生', color: '#3F51B5' },
  { name: '坂部鳴一', job: '戦場カメラマン', message: '死して悔い、捨うちのなし', color: '#795548' },
  { name: '中村江里子', job: 'フリーアナウンサー', message: 'あなた自身を愛するように、あなたの隣人も愛せよ', color: '#FF6B9D' },
  { name: '京谷和幸', job: '元パラリンピック陸上金メダリスト', message: '失敗は成長の素', color: '#FF9800' },
  { name: '高山哲利', job: '日本大学学部　医学部同・温化路外科教授', message: '「諦めと希望」で神経治療に挑む！', color: '#2196F3' },
  { name: '白石康次郎', job: '海洋冒険家', message: '天知水！', color: '#00BCD4' },
  { name: '佐藤弘道', job: '有限会社エスアールシーカンパニー　代表取締役', message: '初心忘れるべからず', color: '#4CAF50' },
  { name: '菅田真一郎', job: '三井建設株式', message: '努力、努力、努力', color: '#607D8B' },
  { name: '橘島千鶴', job: '陸上選手', message: 'いい加減（良い加減）', color: '#E91E63' },
  { name: '清山崇清', job: '独立会議研究所社長・作家', message: '脱私的', color: '#9C27B0' },
  { name: '稲田朋美', job: '衆議院議員', message: '宮過な情報で決断し、断面として行動する', color: '#3F51B5' },
]

export default function PersonsPage() {
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
              <h1 className="page-title">私のカクゴ一覧</h1>
              <div className="persons-grid">
                {persons.map((person, index) => (
                  <Link key={index} href="/works/watashi-no-kakugo/profile" className="person-card">
                    <div className="person-image">
                      <div className="person-placeholder" style={{ background: person.color }}></div>
                    </div>
                    <div className="person-info">
                      <p className="person-job">{person.job}</p>
                      <h3 className="person-name">{person.name}</h3>
                      <p className="person-message">{person.message}</p>
                    </div>
                  </Link>
                ))}
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

        .persons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .person-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .person-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .person-image {
          flex-shrink: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
        }

        .person-placeholder {
          width: 100%;
          height: 100%;
        }

        .person-info {
          flex: 1;
          min-width: 0;
        }

        .person-job {
          font-size: 12px;
          color: #666666;
          margin: 0 0 4px;
          line-height: 1.4;
        }

        .person-name {
          font-size: 16px;
          font-weight: bold;
          color: #000000;
          margin: 0 0 8px;
        }

        .person-message {
          font-size: 14px;
          color: #333333;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
          }

          .persons-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
