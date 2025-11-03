/**
 * @work 東海部品工業 HeroSection
 * @category 製造業 コーポレートサイト
 *
 * === レイアウト ===
 * @technique フルスクリーン背景（100vw）
 * @technique 高さ700px（デスクトップ）
 * @technique 中央配置コンテンツ
 * @technique position: relative
 *
 * === アニメーション ===
 * @technique カルーセル自動再生（5秒間隔）
 * @technique スライドフェードイン
 * @technique 左右ボタン操作
 * @technique スワイプ対応（モバイル）
 *
 * === デザイン ===
 * @design 背景オーバーレイ：rgba(0, 0, 0, 0.3)
 * @design タイトル：48-56px、白色、extrabold
 * @design サブタイトル：18-20px、白色、行間1.75
 * @design カルーセルボタン：円形48px、ブルー背景
 *
 * === UI要素 ===
 * @ui カルーセルナビゲーション
 * @ui 左右ボタン（円形、青背景）
 * @ui ホバーエフェクト
 *
 * === 背景画像 ===
 * @design background-size: cover
 * @design background-position: center
 * @performance 画像最適化
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/works/tokai-parts-industry/images/TOP/1.jpg',
    title: '夢ある未来へ。\n変革と挑戦',
    subtitle:
      '未来に向かって、\n社会全体の高い目標を掲げて\n進化する企業を目指し続けます。',
  },
  {
    image: '/works/tokai-parts-industry/images/TOP/2.jpg',
    title: 'モビリティー社会の未来に\nものづくりで貢献',
    subtitle: '高い技術力で、次世代の自動車部品を製造しています。',
  },
  {
    image: '/works/tokai-parts-industry/images/TOP/3.jpg',
    title: 'SUV・ミニバンを中心に\nクルマを支える骨格を生産',
    subtitle: '最先端の設備で、高品質な製品をお届けします。',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // 自動再生
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* スライド画像 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed whitespace-pre-line max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* 左ボタン */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors shadow-lg"
        aria-label="前のスライド"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* 右ボタン */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors shadow-lg"
        aria-label="次のスライド"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* インジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
