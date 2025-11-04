/**
 * @work 東海部品工業 TOPページ
 * @category 製造業 コーポレートサイト
 *
 * === サイト全体レベル ===
 * @technique サイト全体構成
 * @technique ページ構成
 * @technique メインサイトにリクルートサイトを付随
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique カード重なり表示
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique 2カラムレイアウト（画像+カード）
 * @technique セクション間スペーサー
 * @technique フッターと画像の重なり
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo 画像最適化（Next.js Image）
 * @seo メタデータキーワード選定
 * @llmo 構造化データ実装
 * @performance ページスピード最適化
 * @performance 画像遅延読み込み
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique カルーセル自動再生
 * @technique スクロール再発火アニメーション
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + オレンジ#FF6B35
 * @design フォント：游ゴシック + Inter
 * @design 角丸：8px
 * @design アイコン使用（絵文字なし）
 * @design 背景グラデーション（ライトブルー）
 * @design 画像コントラスト調整
 * @design CTAオレンジ背景 + 高コントラスト
 * @design 円形アイコンエリア
 * @design 画像一部角丸
 *
 * === UI要素・ナビゲーション ===
 * @ui ヘッダー高さ設定
 * @ui ドロップダウンメニュー
 * @ui 追従ヘッダー（sticky）
 * @ui ハンバーガーメニュー（モバイル）
 * @ui ヘッダーメニュー + 英語表記
 * @ui フッター配列
 * @ui カード + アイコンラベル重ね
 * @ui NEWSラベル（角丸なし）
 * @ui リンク表現（＞のみ）
 * @ui トップに戻るボタン
 * @ui カルーセルナビゲーション（左右ボタン）
 *
 * === コンテンツ・テキスト ===
 * @content 会社概要UI
 * @content 福利厚生表現
 * @content テキスト量調整
 * @content 画像とテキストのバランス
 * @content 数字・データ活用
 * @content カード内ボタン配置
 *
 * === 技術・システム ===
 * @technique パララックス背景
 * @technique オーバーレイ実装
 */

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/works/tokai-parts-industry/Header'
import HeroSection from '@/components/works/tokai-parts-industry/HeroSection'
import CompanySection from '@/components/works/tokai-parts-industry/CompanySection'
import ProductSection from '@/components/works/tokai-parts-industry/ProductSection'
import ManufacturingSection from '@/components/works/tokai-parts-industry/ManufacturingSection'
import SustainabilitySection from '@/components/works/tokai-parts-industry/SustainabilitySection'
import CTASection from '@/components/works/tokai-parts-industry/CTASection'
import Footer from '@/components/works/tokai-parts-industry/Footer'

export default function TopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CompanySection />
        <ProductSection />
        <ManufacturingSection />
        <SustainabilitySection />
        <CTASection />

        {/* 技術ドキュメントセクション */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">技術ドキュメント</h2>
            <p className="text-gray-600 mb-8">
              このサイトで使用されている技術の詳細とClaude Codeへの指示文を確認できます
            </p>
            <Link
              href="/works/tokai-parts-industry/tech"
              className="inline-block bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              技術一覧を見る
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
