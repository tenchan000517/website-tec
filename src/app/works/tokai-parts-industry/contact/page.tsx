/**
 * @work 東海部品工業 お問い合わせページ
 * @category 製造業 コーポレートサイト
 *
 * === ページ構成 ===
 * @technique ページヒーロー実装
 * @technique お問い合わせフォーム
 * @technique バリデーション想定
 * @technique フォーム送信処理想定
 * @technique アクセス情報表示
 * @technique 地図表示想定
 *
 * === レイアウト・構造レベル ===
 * @technique セクション間重なり
 * @technique コンテナ二重構造（中央揃え+左寄せテキスト）
 * @technique レスポンシブ：スマホ/1500px以下/1500px以上
 * @technique ディスプレイ幅対応セクション幅
 * @technique 2カラムレイアウト（フォーム+情報）
 * @technique フォームレイアウト
 * @technique グリッドレイアウト
 *
 * === SEO・LLMO・パフォーマンス ===
 * @seo メタデータ：お問い合わせ特化
 * @seo ページタイトル最適化
 * @seo キーワード：お問い合わせ、連絡先、アクセス
 * @llmo 構造化データ：ContactPage
 * @performance ページスピード最適化
 *
 * === アニメーション・インタラクション ===
 * @technique フェードインアニメーション
 * @technique フェードアップアニメーション（再発火あり）
 * @technique フォーカスエフェクト
 * @technique ホバーエフェクト
 * @technique ボタンホバーアニメーション
 *
 * === デザイン・ビジュアル ===
 * @design 配色：ブルー#2563EB + グレー#6B7280
 * @design フォント：游ゴシック + Inter
 * @design 背景グラデーション
 * @design テキストコントラスト最適化
 * @design 角丸：12px
 * @design フォーム入力フィールドデザイン
 * @design プレースホルダーデザイン
 * @design ボタンデザイン
 * @design フォーカススタイル
 *
 * === UI要素 ===
 * @ui ページヒーロー（シンプル）
 * @ui 英語タイトル + 日本語サブタイトル
 * @ui テキスト入力フィールド
 * @ui メールアドレス入力フィールド
 * @ui セレクトボックス
 * @ui テキストエリア
 * @ui 必須バッジ
 * @ui 送信ボタン
 * @ui アクセス情報カード
 * @ui アイコン表示
 * @ui 共通ヘッダー・フッター
 *
 * === コンテンツ・テキスト ===
 * @content お問い合わせフォーム
 * @content フォーム項目（氏名、メール、電話、件名、本文）
 * @content プライバシーポリシー同意
 * @content 会社情報（住所、電話、FAX、メール）
 * @content アクセス情報
 * @content 営業時間情報
 *
 * === 技術・システム ===
 * @technique フォームコンポーネント設計
 * @technique バリデーションロジック想定
 * @technique 送信処理想定
 * @technique エラーハンドリング想定
 * @technique アクセシビリティ対応
 */

'use client'

import { useState } from 'react'
import Header from '@/components/works/tokai-parts-industry/Header'
import Footer from '@/components/works/tokai-parts-industry/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[250px] md:h-[350px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
              CONTACT
            </h1>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-xl md:text-2xl font-medium">
              お問い合わせ
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Intro */}
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  お気軽にお問い合わせください
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  各種お問い合わせは、下記フォームよりお願いいたします
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12">
                {/* Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-up">
                    {/* Name */}
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        お名前 <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="山田 太郎"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        メールアドレス <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="example@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        電話番号 <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded ml-2">任意</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="090-1234-5678"
                      />
                    </div>

                    {/* Subject */}
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                        お問い合わせ種別 <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">選択してください</option>
                        <option value="製品について">製品について</option>
                        <option value="採用について">採用について</option>
                        <option value="取引について">取引について</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        お問い合わせ内容 <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="お問い合わせ内容をご記入ください"
                      />
                    </div>

                    {/* Privacy Policy */}
                    <div className="mb-8">
                      <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 mr-3" />
                        <span className="text-sm text-gray-600">
                          <a href="#" className="text-blue-600 hover:underline">プライバシーポリシー</a>に同意します
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      送信する
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-2">
                  <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    {/* Company Info */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        会社情報
                      </h3>
                      <div className="space-y-4 text-gray-700">
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">東海部品工業株式会社</p>
                          <p className="text-sm">Tokai Parts Industry Co., Ltd.</p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-sm font-semibold text-gray-600 mb-2">〒 448-0000</p>
                          <p className="text-sm">愛知県刈谷市○○町△△番地</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        お問い合わせ先
                      </h3>
                      <div className="space-y-4 text-gray-700">
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-600">TEL</p>
                            <p className="font-semibold">0566-XX-XXXX</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-600">FAX</p>
                            <p className="font-semibold">0566-XX-XXXX</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-600">Email</p>
                            <p className="font-semibold break-all">info@tokai-parts.co.jp</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        営業時間
                      </h3>
                      <p className="text-gray-700 text-sm">
                        平日 8:00～17:00<br/>
                        （土日祝日、年末年始、GW、夏季休暇を除く）
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                アクセス
              </h2>
            </div>
            <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg font-semibold">Google Maps</p>
                  <p className="text-sm mt-2">（地図表示エリア）</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <span className="font-semibold">電車でお越しの方：</span> JR東海道本線「刈谷駅」より徒歩15分<br/>
                <span className="font-semibold">お車でお越しの方：</span> 伊勢湾岸自動車道「豊田南IC」より10分
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
