# デザインガイド（Tailwind CSS版）

## 📋 概要

このガイドは「わたしの覚悟」サイトの実装から抽出した、デザイン・配色・レイアウトのベースラインです。

**重要な原則**：
- ✅ **Tailwind CSSのみを使用**（globals.cssは触らない）
- ✅ このガイドのデザインをベースに使う
- ❌ 余計な装飾を追加しない
- ❌ 元のサイトの雰囲気を壊さない

**参照実装**: `/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/`

---

## 🎨 カラースキーム（Tailwind CSS）

### tailwind.config.js 拡張設定

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー
        'primary-green': '#8BC34A',

        // テキストカラー
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'text-light': '#999999',
        'text-lighter': '#aaaaaa',
        'text-date': '#cccccc',

        // 背景カラー
        'bg-gray-lightest': '#fafafa',
        'bg-gray-light': '#f5f5f5',
        'bg-gray': '#f8f8f8',
        'bg-hero': '#eeeeee',

        // ボーダー
        'border-light': '#f0f0f0',
        'border-medium': '#e0e0e0',
        'border-dark': '#d0d0d0',
        'border-card': '#e8e8e8',
      },
    },
  },
  plugins: [],
}
```

### Tailwindクラスでの使用例

```jsx
// メインカラー
<button className="bg-primary-green text-white hover:bg-primary-green/90">
  ボタン
</button>

// テキストカラー
<h1 className="text-black font-bold">タイトル</h1>
<p className="text-text-primary">本文テキスト</p>
<span className="text-text-secondary">サブテキスト</span>
<time className="text-text-date text-xs">2025.11.04</time>

// 背景カラー
<div className="bg-white">メインコンテンツ</div>
<div className="bg-bg-gray-lightest">ホバー背景</div>
<section className="bg-bg-hero">ヒーローセクション</section>

// ボーダー
<div className="border border-border-light">軽い枠線</div>
<div className="border-b border-border-medium">区切り線</div>
```

---

## 📐 レイアウト（Tailwind CSS）

### コンテナ

```jsx
// 標準コンテナ（980px）
<div className="max-w-[980px] mx-auto px-5">
  コンテンツ
</div>

// 広めコンテナ（1200px）
<div className="max-w-[1200px] mx-auto px-8">
  コンテンツ
</div>

// 最大幅コンテナ（1400px）
<div className="max-w-[1400px] mx-auto px-8">
  コンテンツ
</div>
```

### グリッドレイアウト

```jsx
// 5カラムグリッド（ブログカード）
<div className="grid grid-cols-5 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  {items.map(item => (
    <div key={item.id}>カード</div>
  ))}
</div>

// 3カラムレイアウト
<div className="flex gap-5 lg:flex-col">
  <div className="w-[370px] lg:w-full">左カラム</div>
  <div className="w-[270px] lg:w-full">中央カラム</div>
  <div className="w-[300px] lg:w-full">右カラム</div>
</div>

// フレックスレイアウト
<div className="flex items-center justify-between gap-12">
  <div>左</div>
  <div>右</div>
</div>
```

### セクション・余白

```jsx
// セクション
<section className="my-[60px] md:my-10">
  <h2 className="text-base font-bold text-text-primary mb-[25px]">
    セクションタイトル
  </h2>
  <div>コンテンツ</div>
</section>

// コンテナ内の余白
<div className="pt-10 px-5 md:pt-[30px] md:px-4">
  コンテンツ
</div>
```

---

## 🔤 タイポグラフィ（Tailwind CSS）

### フォントサイズ・ウェイト

```jsx
// ロゴ・大見出し
<h1 className="text-[26px] font-bold leading-none tracking-wide">
  私のカクゴ
</h1>

// セクションタイトル
<h2 className="text-base font-bold text-text-primary">
  セクションタイトル
</h2>

// カード内見出し
<h3 className="text-[15px] font-bold text-text-primary mb-2.5">
  カード見出し
</h3>

// 本文
<p className="text-sm text-text-primary leading-relaxed">
  本文テキスト
</p>

// 小さなテキスト
<span className="text-xs text-text-light">補足テキスト</span>

// 日付
<time className="text-[11px] text-text-date">2025.11.04</time>

// サブタイトル
<span className="text-[10px] text-text-secondary tracking-[0.5px]">
  サブタイトル
</span>
```

### 行間

```jsx
// 狭い（タイトル用）
<h1 className="leading-none">タイトル</h1>

// 通常（リスト・短文）
<p className="leading-normal">短文テキスト</p>

// ゆったり（本文）
<p className="leading-relaxed">本文テキスト</p>
```

---

## 🧩 UIコンポーネント（Tailwind CSS）

### ボタン

```jsx
// メインボタン
<button className="px-14 py-4 bg-[#999999] text-white text-sm font-bold rounded-sm transition-all duration-300 hover:bg-primary-green hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(139,195,74,0.3)]">
  ボタンテキスト →
</button>

// 検索ボタン
<button
  className="w-[46px] h-[38px] bg-[#999999] rounded-r flex items-center justify-center transition-colors duration-300 hover:bg-primary-green"
  aria-label="検索"
>
  <svg className="w-[18px] h-[18px]">...</svg>
</button>
```

### カード

```jsx
// ブログカード
<Link
  href="/blog/1"
  className="flex flex-col bg-white border border-border-card rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:border-primary-green"
>
  <div className="w-full aspect-square bg-bg-gray-light overflow-hidden">
    <img src="/image.jpg" alt="" className="w-full h-full object-cover" />
  </div>
  <div className="p-[18px] flex-1 flex flex-col">
    <time className="block text-[11px] text-text-date mb-2 font-medium">
      2025.11.04
    </time>
    <p className="text-xs text-text-light mb-1.5">職業</p>
    <h3 className="text-[15px] font-bold text-text-primary mb-2.5">
      タイトル
    </h3>
    <p className="text-[13px] text-[#555555] leading-relaxed line-clamp-3">
      説明文
    </p>
  </div>
</Link>

// 更新情報カード
<Link
  href="/profile/1"
  className="flex items-center gap-3 p-3 border-b border-border-light transition-colors duration-200 hover:bg-bg-gray-lightest"
>
  <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full overflow-hidden">
    <img src="/image.jpg" alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1 min-w-0">
    <time className="block text-[11px] text-text-light mb-1">
      2025.11.04
    </time>
    <p className="text-[13px] font-normal text-text-primary leading-normal">
      名前
    </p>
  </div>
</Link>
```

### 入力フォーム

```jsx
// 検索フォーム
<form className="flex items-center relative flex-shrink-0">
  <input
    type="search"
    placeholder="サイト内検索"
    className="w-[220px] h-[38px] px-[14px] pr-[46px] border border-border-dark rounded bg-bg-gray-lightest text-sm outline-none transition-all duration-300 placeholder:text-text-lighter focus:border-primary-green focus:bg-white"
  />
  <button
    type="submit"
    className="absolute right-0 top-0 bottom-0 w-[46px] bg-[#999999] border-none rounded-r cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-primary-green"
    aria-label="検索"
  >
    <svg>...</svg>
  </button>
</form>
```

### ナビゲーション

```jsx
// ヘッダーナビ
<nav className="flex items-center gap-10 flex-1 justify-center">
  <Link
    href="/about"
    className="text-base font-medium text-text-primary whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:text-primary-green hover:after:scale-x-100"
  >
    私のカクゴとは
  </Link>
  <Link
    href="/persons"
    className="text-base font-medium text-text-primary whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:text-primary-green hover:after:scale-x-100"
  >
    私のカクゴ一覧
  </Link>
</nav>

// フッターナビ
<nav className="max-w-[1200px] mx-auto mb-5 flex items-center justify-center flex-wrap gap-7">
  <Link
    href="/terms"
    className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
  >
    サイトご利用にあたって
  </Link>
  <Link
    href="/privacy"
    className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
  >
    プライバシーポリシー
  </Link>
</nav>
```

### 画像

```jsx
// 円形人物画像
<div className="flex-shrink-0 w-[60px] h-[60px] rounded-full overflow-hidden">
  <img
    src="/person.jpg"
    alt="人物名"
    className="w-full h-full object-cover"
  />
</div>

// カード内画像
<div className="w-full aspect-square overflow-hidden bg-bg-gray-light">
  <img
    src="/image.jpg"
    alt="画像説明"
    className="w-full h-full object-cover"
  />
</div>

// next/image 使用時
<Image
  src="/image.jpg"
  alt="画像説明"
  width={300}
  height={300}
  className="w-full h-full object-cover"
/>
```

### スクロールバー

```jsx
// カスタムスクロールバー（Tailwind Plugin必要）
<div className="h-[290px] overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-border-light scrollbar-thumb-text-date hover:scrollbar-thumb-text-lighter">
  コンテンツ
</div>

// または globals.css に最小限追加
/* globals.css */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f0f0f0;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #aaaaaa;
}

// 使用
<div className="h-[290px] overflow-y-auto custom-scrollbar">
  コンテンツ
</div>
```

---

## 🎭 アニメーション・トランジション（Tailwind CSS）

### ホバーエフェクト

```jsx
// カードの浮き上がり
<div className="transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
  カード
</div>

// ボタンの浮き上がり
<button className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(139,195,74,0.3)]">
  ボタン
</button>

// 色変化
<div className="transition-colors duration-300 hover:bg-bg-gray-lightest">
  ホバー要素
</div>

// アンダーラインアニメーション
<Link className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
  リンク
</Link>
```

### トランジション速度

```jsx
// 高速（200ms）
<div className="transition-colors duration-200">背景色変化</div>

// 通常（300ms）
<div className="transition-all duration-300">標準トランジション</div>

// ゆっくり（500ms）
<div className="transition-all duration-500">ゆっくりアニメーション</div>
```

---

## 🏗️ レイアウトパターン（Tailwind CSS）

### 固定ヘッダー

```jsx
// ヘッダー
<header className="fixed top-0 left-0 right-0 bg-white border-b border-border-medium z-[1000] shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
  <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center justify-between gap-12">
    {/* ロゴ・ナビ・検索 */}
  </div>
</header>

// メインコンテンツ
<main className="pt-20 min-h-screen">
  {/* コンテンツ */}
</main>
```

### セクション

```jsx
<section className="my-[60px] md:my-10">
  <h2 className="text-base font-bold text-text-primary mb-[25px]">
    セクションタイトル
  </h2>
  <div>
    {/* コンテンツ */}
  </div>
</section>
```

### ヒーローセクション

```jsx
<section className="bg-bg-hero py-[60px] pb-[50px] overflow-hidden">
  <div className="max-w-[1400px] mx-auto flex justify-center items-end gap-6 px-8">
    {/* 人物画像等 */}
  </div>
</section>
```

### フッター

```jsx
<footer className="bg-bg-gray border-t border-border-card py-9 pb-10 px-8 mt-[100px]">
  <nav className="max-w-[1200px] mx-auto mb-5 flex items-center justify-center flex-wrap gap-7">
    {/* フッターリンク */}
  </nav>
  <p className="text-center text-text-lighter text-[11px] m-0 font-normal">
    Copyright © EXAMPLE. All rights reserved.
  </p>
</footer>
```

---

## 📱 レスポンシブデザイン（Tailwind CSS）

### ブレークポイントの使い方

```jsx
// デスクトップ → タブレット → スマホ
<div className="
  grid grid-cols-5 gap-4
  lg:grid-cols-3
  md:grid-cols-2
  sm:grid-cols-1
">
  {items.map(...)}
</div>

// 3カラム → 1カラム
<div className="flex gap-5 lg:flex-col">
  <div className="w-[370px] lg:w-full">左</div>
  <div className="w-[270px] lg:w-full">中</div>
  <div className="w-[300px] lg:w-full">右</div>
</div>

// ヘッダー
<div className="
  h-20 flex items-center justify-between gap-12
  md:h-auto md:flex-wrap md:py-4 md:gap-4
">
  <div className="md:w-full">ロゴ</div>
  <nav className="md:w-full md:gap-5">ナビ</nav>
  <div className="md:order-[-1]">検索</div>
</div>

// フォントサイズ調整
<h1 className="text-[26px] md:text-xl sm:text-lg">
  タイトル
</h1>

// 余白調整
<div className="px-8 md:px-6 sm:px-5">
  コンテンツ
</div>
```

---

## ✨ 使用上の注意

### ✅ やること
- **Tailwind CSSのユーティリティクラスのみを使用**
- **グリーン（`bg-primary-green` または `#8BC34A`）をアクセントに使う**
- **白背景（`bg-white`）をベースに、クリーンなデザインを保つ**
- **ホバーエフェクト**（`hover:-translate-y-[5px]`, `hover:shadow-lg`）
- **余白を適切に取る**（`gap-*`, `p-*`, `m-*`）
- **カード型UIを活用**（`border`, `rounded-sm`, `overflow-hidden`）

### ❌ やらないこと
- **globals.cssに大量のカスタムCSSを書かない**（最小限のみ）
- **styled-jsxやstyled-componentsは使わない**
- **派手な色を追加しない**（グリーン以外のアクセントカラーは不要）
- **過度なアニメーションを追加しない**（シンプルなホバーのみ）
- **装飾的な要素を追加しない**（影、枠線は最小限に）

### 🎯 Tailwind CSS使用の方針
1. **ユーティリティファースト**: すべてTailwindクラスで完結させる
2. **カスタマイズは tailwind.config.js で**: colors, spacing等を拡張
3. **再利用性**: 共通パターンはコンポーネント化
4. **レスポンシブ**: `md:`, `lg:` 等のプレフィックス活用

---

## 🔧 Claude Codeへの指示例

新規サイトでこのデザインガイドを適用する場合：

```
このデザインガイド（/mnt/c/web-template-library/DESIGN-GUIDE.md）に従って、
Tailwind CSSのみを使用してサイトを実装してください。

【重要】
- Tailwind CSSのユーティリティクラスのみを使用
- globals.cssは触らない（最小限のみ）
- styled-jsxやカスタムCSSは使用しない

【カラー】
tailwind.config.js に以下を追加：
- primary-green: #8BC34A
- テキスト色: text-primary, text-secondary等

【レイアウト】
- 固定ヘッダー: fixed top-0 h-20
- コンテナ: max-w-[1200px] mx-auto
- グリッド: grid grid-cols-5 gap-4

【UI】
- カード: border rounded-sm hover:-translate-y-[5px]
- ボタン: bg-[#999999] hover:bg-primary-green
- ホバーエフェクト: transition-all duration-300

余計な装飾は追加せず、Tailwindクラスのみで実装してください。
```

---

## 📚 実装例の参照

**注意**: 参照実装は styled-jsx を使用していますが、新規実装では Tailwind CSS のみを使用してください。

```bash
# ヘッダー実装（styled-jsx版 - 参考のみ）
/mnt/c/web-template-library/src/components/works/watashi-no-kakugo/Header.tsx

# → Tailwind CSS版に変換して実装すること
```

---

**作成日**: 2025-11-04
**ベース**: 「わたしの覚悟」サイト実装
**方針**: Tailwind CSS Only・シンプル・クリーン・機能的
**globals.css**: 最小限のみ（スクロールバー等）
