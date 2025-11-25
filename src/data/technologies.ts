import { aiBrainLogsTechnologies } from './ai-brain-logs-technologies';

export interface Technology {
  slug: string              // URL用（例: "hero-carousel"）
  title: string             // 技術名（例: "ヒーローセクション with カルーセル"）
  category: string          // カテゴリー（例: "レイアウト・構造"）
  description: string       // 短い説明（1-2行）
  project: string          // プロジェクト名（例: "tokai-parts-industry"）
  usedIn: string[]         // 使用場所（ファイルパス配列）
  code: string             // 実装コード全文
  prompt: string           // Claude Codeへの指示文（具体的で再現可能）
  setup?: string           // セットアップ手順（オプション）
  wireframe?: string       // ワイヤーフレーム画像パス（オプション）
  preview?: string         // プレビュー用のHTMLスニペット（オプション）
  relatedTech: string[]    // 関連技術のslug配列
}

// 既存の技術データ
const existingTechnologies: Technology[] = [
  {
    slug: 'parent-company-badge',
    title: '親会社バッジ - ヘッダー上部配置',
    category: 'UIコンポーネント',
    description: '親会社名をヘッダー最上部に表示するバッジ。ブランディングと信頼性の向上に寄与。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Header.tsx'
    ],
    code: `{/* 親会社バッジ */}
<div className="bg-[#2563EB] py-2">
  <div className="container mx-auto px-6">
    <span className="text-xs text-white font-medium">親会社名</span>
  </div>
</div>`,
    prompt: `ヘッダーの最上部に親会社名を表示するバッジを実装してください。

## 要件
1. 背景色: #2563EB（ブルー）
2. テキスト色: 白
3. パディング: 上下2（py-2）
4. フォントサイズ: text-xs
5. フォントウェイト: font-medium
6. コンテナ内に配置（container mx-auto px-6）

## 実装手順
1. ヘッダーコンポーネントの最上部（<header>タグの直下）に配置
2. 背景色を親会社のブランドカラーに設定
3. コンテナで中央揃え
4. レスポンシブ対応（px-6で左右パディング）

## デザインのポイント
- 親会社とのつながりを明確に示すことでブランド価値を向上
- 小さく控えめなサイズで邪魔にならないように配置
- 高コントラスト（青背景＋白文字）で視認性確保`,
    preview: `<div class="bg-[#2563EB] py-2">
  <div class="mx-auto px-6">
    <span class="text-xs text-white font-medium">親会社名</span>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'brand-logo-identity',
    title: 'ブランドロゴ - 企業アイデンティティ',
    category: 'UIコンポーネント',
    description: '企業のブランドを表現するロゴデザイン。BRANDの文字を大きく、会社名を併記することで視認性と信頼性を両立。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Header.tsx'
    ],
    code: `{/* ロゴ */}
<Link href="/works/tokai-parts-industry" className="flex items-center space-x-2">
  <span className="text-2xl font-bold text-[#2563EB]">BRAND</span>
  <span className="text-sm font-medium text-gray-700">
    企業名（株式会社）
  </span>
</Link>`,
    prompt: `ヘッダーにブランドロゴを実装してください。

## 要件
1. 構造
   - BRANDの略称を大きく表示（text-2xl、font-bold）
   - 正式会社名を小さく併記（text-sm、font-medium）
   - 横並びレイアウト（flex items-center）
   - 間隔: space-x-2

2. デザイン
   - BRAND: 青色（#2563EB）、太字
   - 会社名: グレー（text-gray-700）、中太
   - リンク要素として実装（Linkコンポーネント）
   - ホームページへのリンク

3. レスポンシブ
   - モバイルでも視認性を保つ
   - 必要に応じて会社名を非表示にする選択肢もある

## デザインのポイント
- 略称（BRAND）を大きくすることで、ブランド認知を強化
- 正式名称を併記することで、信頼性を確保
- 青色は親会社名との統一感を演出
- シンプルで現代的なデザイン`,
    preview: `<div class="flex items-center space-x-2">
  <span class="text-2xl font-bold text-[#2563EB]">BRAND</span>
  <span class="text-sm font-medium text-gray-700">
    企業名（株式会社）
  </span>
</div>`,
    relatedTech: ['parent-company-badge']
  },
  {
    slug: 'two-tier-navigation-links',
    title: '二段階表記のナビゲーションリンク - 日本語+英語',
    category: 'UIコンポーネント',
    description: 'ナビゲーションメニューを日本語と英語で二段階表記。国際性と洗練されたデザインを両立するUI手法。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Header.tsx'
    ],
    code: `{/* デスクトップメニュー */}
<nav className="hidden lg:flex items-center space-x-8">
  <Link
    href="/works/tokai-parts-industry/about"
    className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
  >
    会社情報
    <br />
    <span className="text-xs text-gray-500">COMPANY</span>
  </Link>
  <Link
    href="/works/tokai-parts-industry/product"
    className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
  >
    製品紹介
    <br />
    <span className="text-xs text-gray-500">PRODUCT</span>
  </Link>
  <Link
    href="/works/tokai-parts-industry/manufacturing"
    className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
  >
    BRANDのクルマづくり
    <br />
    <span className="text-xs text-gray-500">MANUFACTURING</span>
  </Link>
  <Link
    href="/works/tokai-parts-industry/sustainability"
    className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
  >
    サステナビリティ
    <br />
    <span className="text-xs text-gray-500">SUSTAINABILITY</span>
  </Link>
  <Link
    href="/works/tokai-parts-industry/news"
    className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
  >
    お知らせ
    <br />
    <span className="text-xs text-gray-500">NEWS</span>
  </Link>
  <Link
    href="/works/tokai-parts-industry/contact"
    className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors"
  >
    お問い合わせ
    <br />
    <span className="text-xs text-gray-500">CONTACT</span>
  </Link>
</nav>`,
    prompt: `グローバルナビゲーションを二段階表記（日本語+英語）で実装してください。

## 要件
1. 構造
   - 横並びレイアウト（flex items-center）
   - 各リンク間隔: space-x-8
   - デスクトップのみ表示（hidden lg:flex）
   - 各リンク内で改行（<br />）して二段階表記

2. デザイン
   - 日本語: text-sm、font-medium、text-gray-700
   - 英語: text-xs、text-gray-500（控えめ）
   - ホバー時: text-[#2563EB]（ブルーに変化）
   - トランジション: transition-colors

3. メニュー項目
   - 会社情報（COMPANY）
   - 製品紹介（PRODUCT）
   - BRANDのクルマづくり（MANUFACTURING）
   - サステナビリティ（SUSTAINABILITY）
   - お知らせ（NEWS）
   - お問い合わせ（CONTACT）

## デザインのポイント
- 日本語を主体にしつつ、英語を併記することで国際性をアピール
- 英語を小さく控えめにすることで、視覚的なヒエラルキーを明確化
- ホバー時の色変化でインタラクティブ性を強調
- 製造業の信頼感と現代的なデザインを両立`,
    preview: `<div class="flex items-center space-x-6">
  <a class="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors">
    会社情報
    <br />
    <span class="text-xs text-gray-500">COMPANY</span>
  </a>
  <a class="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors">
    製品紹介
    <br />
    <span class="text-xs text-gray-500">PRODUCT</span>
  </a>
  <a class="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors">
    お知らせ
    <br />
    <span class="text-xs text-gray-500">NEWS</span>
  </a>
</div>`,
    relatedTech: ['tbk-logo-brand-identity']
  },
  {
    slug: 'recruitment-cta-button',
    title: '採用情報CTAボタン - オレンジのアクセントカラー',
    category: 'UIコンポーネント',
    description: 'ヘッダー右側に配置された採用情報へのCTAボタン。オレンジ色で視認性を高め、重要なアクションを促す。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Header.tsx'
    ],
    code: `{/* CTAボタン */}
<div className="hidden lg:block">
  <Link href="/works/tokai-parts-industry/recruit">
    <Button variant="accent" size="md">採用情報</Button>
  </Link>
</div>`,
    prompt: `ヘッダーに採用情報へのCTAボタンを実装してください。

## 要件
1. 配置
   - ヘッダー右端に配置
   - デスクトップのみ表示（hidden lg:block）
   - ナビゲーションメニューの右側

2. デザイン
   - Buttonコンポーネントを使用
   - variant: "accent"（オレンジ色）
   - size: "md"（中サイズ）
   - テキスト: "採用情報"

3. 動作
   - リクルートページへリンク
   - ホバー時のアニメーション（Buttonコンポーネントに組み込み）

## デザインのポイント
- オレンジ色で目立たせ、ユーザーのアクションを促す
- 製造業では人材確保が重要なため、CTAとして最適
- ヘッダーという目立つ位置に配置することで、採用への関心を高める
- デスクトップのみ表示し、モバイルではハンバーガーメニュー内に配置`,
    preview: `<button class="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors">
  採用情報
</button>`,
    relatedTech: ['two-tier-navigation-links']
  },
  {
    slug: 'sticky-header-scroll-fixed',
    title: 'Sticky Header - スクロール追従ヘッダー',
    category: 'UI/UX',
    description: 'スクロールしても画面上部に固定されるヘッダー。ユーザーがどこにいても即座にナビゲーションにアクセス可能。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Header.tsx'
    ],
    code: `<header
  className={\`sticky top-0 z-50 bg-white transition-shadow duration-300 \${
    isScrolled ? 'shadow-md' : ''
  }\`}
>
  {/* ヘッダーコンテンツ */}
</header>`,
    prompt: `スクロールに追従するヘッダーを実装してください。

## 要件
1. 基本設定
   - position: sticky
   - top: 0（画面最上部に固定）
   - z-index: 50（他の要素より前面に表示）
   - 背景色: 白

2. スクロール検知
   - useStateでisScrolledの状態を管理
   - useEffectでスクロールイベントをリスン
   - window.scrollY > 10でスクロール判定

3. 視覚効果
   - スクロール時に影を追加（shadow-md）
   - トランジション: transition-shadow duration-300
   - スムーズな影の出現・消失

## 実装例（React Hooks）
\`\`\`typescript
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
\`\`\`

## デザインのポイント
- ユーザーがページのどこにいても、常にナビゲーションにアクセス可能
- スクロール時の影追加で、ヘッダーがコンテンツから浮いている印象を与える
- ユーザビリティとUXの向上に大きく貢献`,
    preview: `<div class="bg-white shadow-md p-4 rounded">
  <div class="text-sm text-gray-600 mb-2">スクロール時の状態（shadow-md）</div>
  <div class="flex items-center justify-between">
    <span class="text-xl font-bold text-[#2563EB]">BRAND</span>
    <nav class="flex space-x-4 text-sm">
      <a class="text-gray-700">会社情報</a>
      <a class="text-gray-700">製品紹介</a>
      <a class="text-gray-700">お問い合わせ</a>
    </nav>
  </div>
</div>`,
    relatedTech: ['parent-company-badge', 'tbk-logo-brand-identity']
  },
  {
    slug: 'hamburger-menu-animation',
    title: 'ハンバーガーメニュー - 3本線からXへのアニメーション',
    category: 'アニメーション',
    description: 'モバイルメニューの開閉を示す、3本線がXマークに変化するアニメーション。視覚的フィードバックを提供。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Header.tsx'
    ],
    code: `{/* ハンバーガーメニューボタン */}
<button
  className="lg:hidden p-2"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-label="メニュー"
>
  <div className="w-6 h-5 flex flex-col justify-between">
    <span
      className={\`block h-0.5 w-6 bg-gray-700 transition-transform \${
        isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
      }\`}
    />
    <span
      className={\`block h-0.5 w-6 bg-gray-700 transition-opacity \${
        isMobileMenuOpen ? 'opacity-0' : ''
      }\`}
    />
    <span
      className={\`block h-0.5 w-6 bg-gray-700 transition-transform \${
        isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
      }\`}
    />
  </div>
</button>`,
    prompt: `モバイル用のハンバーガーメニューボタンを、3本線からXマークに変化するアニメーション付きで実装してください。

## 要件
1. 基本構造
   - 3本の横線（span要素）
   - 各線: h-0.5（高さ2px）、w-6（幅24px）
   - 色: bg-gray-700
   - モバイルのみ表示（lg:hidden）

2. アニメーション
   - 1本目: rotate-45 + translate-y-2（右下がり45度＋下に移動）
   - 2本目: opacity-0（非表示）
   - 3本目: -rotate-45 + -translate-y-2（左下がり45度＋上に移動）
   - すべてにtransition-transform/transition-opacity

3. 状態管理
   - isMobileMenuOpenでメニューの開閉状態を管理
   - クリックでトグル

## デザインのポイント
- 3本線がXマークに変化することで、ユーザーに「閉じる」アクションを示す
- スムーズなトランジションで、洗練された印象を与える
- アクセシビリティ: aria-label="メニュー"を追加
- モバイルファーストのUI設計`,
    preview: `<div class="flex gap-8 items-center">
  <div>
    <div class="text-xs text-gray-600 mb-2">閉じた状態</div>
    <div class="w-6 h-5 flex flex-col justify-between">
      <span class="block h-0.5 w-6 bg-gray-700"></span>
      <span class="block h-0.5 w-6 bg-gray-700"></span>
      <span class="block h-0.5 w-6 bg-gray-700"></span>
    </div>
  </div>
  <div>
    <div class="text-xs text-gray-600 mb-2">開いた状態（X）</div>
    <div class="w-6 h-5 flex flex-col justify-between">
      <span class="block h-0.5 w-6 bg-gray-700 rotate-45 translate-y-2"></span>
      <span class="block h-0.5 w-6 bg-gray-700 opacity-0"></span>
      <span class="block h-0.5 w-6 bg-gray-700 -rotate-45 -translate-y-2"></span>
    </div>
  </div>
</div>`,
    relatedTech: ['sticky-header-scroll-fixed']
  },
  {
    slug: 'carousel-auto-play',
    title: 'カルーセル自動再生 - 5秒間隔のスライド切り替え',
    category: 'アニメーション',
    description: 'ユーザーの操作なしに、5秒ごとに自動的にスライドが切り替わるカルーセル。エンゲージメント向上に寄与。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx'
    ],
    code: `const [currentSlide, setCurrentSlide] = useState(0)

// 自動再生
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 5000)
  return () => clearInterval(timer)
}, [])`,
    prompt: `カルーセルの自動再生機能を実装してください。

## 要件
1. 状態管理
   - useStateでcurrentSlideを管理
   - 初期値: 0

2. 自動再生ロジック
   - useEffectでsetIntervalを設定
   - 5秒（5000ms）ごとにスライドを進める
   - (prev + 1) % slides.lengthで循環
   - クリーンアップ関数でclearInterval

3. 動作
   - 自動で次のスライドに切り替わる
   - 最後のスライドの後は最初に戻る
   - ページを離れた際にタイマーをクリア

## 実装のポイント
- setIntervalのIDを保持し、クリーンアップで必ずclearIntervalを呼ぶ
- モジュロ演算（%）で循環を実現
- ユーザーが手動で操作した場合もタイマーは継続（UX向上）

## 拡張案
- ユーザーが手動操作した際にタイマーをリセット
- ホバー時に自動再生を一時停止
- アクセシビリティ: 自動再生の停止ボタンを提供`,
    relatedTech: []
  },
  {
    slug: 'slide-fade-in-transition',
    title: 'スライドフェードイン - 滑らかな切り替えアニメーション',
    category: 'アニメーション',
    description: 'カルーセルのスライド切り替え時に、フェードイン/フェードアウトで滑らかに表示。視覚的に洗練された印象を与える。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx'
    ],
    code: `{slides.map((slide, index) => (
  <div
    key={index}
    className={\`absolute inset-0 transition-opacity duration-1000 \${
      index === currentSlide ? 'opacity-100' : 'opacity-0'
    }\`}
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
))}`,
    prompt: `カルーセルのスライド切り替えに、フェードイン/フェードアウトのアニメーションを実装してください。

## 要件
1. レイアウト
   - すべてのスライドを絶対配置（absolute）
   - inset-0で全面を覆う
   - z-indexは不要（opacity-0で非表示）

2. アニメーション
   - transition-opacity（opacityのみアニメーション）
   - duration-1000（1秒かけて切り替え）
   - 現在のスライド: opacity-100（完全に表示）
   - それ以外: opacity-0（完全に非表示）

3. 画像
   - Next.js Imageコンポーネントを使用
   - fill属性で親要素いっぱいに表示
   - object-coverで画像を切り取らずに覆う
   - priority={index === 0}で最初の画像を優先読み込み

4. オーバーレイ
   - bg-black/30（黒30%透明度）
   - テキストの可読性を向上

## デザインのポイント
- 1秒のフェードで、急激な変化を避ける
- 複数のスライドを重ねることで、滑らかな切り替えを実現
- オーバーレイで画像上のテキストを読みやすく`,
    relatedTech: ['carousel-auto-play']
  },
  {
    slug: 'carousel-navigation-buttons',
    title: 'カルーセルナビゲーションボタン - 円形の左右ボタン',
    category: 'UIコンポーネント',
    description: '左右に配置された円形ボタンで、ユーザーが手動でスライドを切り替え可能。青い背景とホバーエフェクトで視認性を確保。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx'
    ],
    code: `{/* 左ボタン */}
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
</button>`,
    prompt: `カルーセルの左右ナビゲーションボタンを実装してください。

## 要件
1. 配置
   - 左ボタン: left-4 md:left-8
   - 右ボタン: right-4 md:right-8
   - 上下中央: top-1/2 -translate-y-1/2
   - z-index: 20（画像より前面）

2. デザイン
   - サイズ: w-12 h-12（48px × 48px）
   - 形状: rounded-full（完全な円形）
   - 背景色: #2563EB（青）
   - テキスト色: 白
   - 影: shadow-lg
   - アイコンサイズ: w-6 h-6

3. ホバーエフェクト
   - ホバー時: bg-[#1E40AF]（濃い青）
   - トランジション: transition-colors

4. アイコン
   - SVGで矢印を実装
   - 左ボタン: 左向き矢印
   - 右ボタン: 右向き矢印
   - strokeWidth: 2

5. アクセシビリティ
   - aria-label: "前のスライド" / "次のスライド"

## デザインのポイント
- 円形ボタンで洗練された印象
- 青色でブランドカラーと統一
- shadow-lgで立体感を演出
- ホバー時の色変化でインタラクティブ性を強調`,
    preview: `<div class="flex gap-4 items-center">
  <button class="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors shadow-lg">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
  <button class="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors shadow-lg">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>
</div>`,
    relatedTech: ['carousel-auto-play', 'slide-fade-in-transition']
  },
  {
    slug: 'carousel-dot-indicators',
    title: 'カルーセルドットインジケーター - 現在位置の視覚化',
    category: 'UIコンポーネント',
    description: 'スライドの総数と現在位置を示すドット。クリックでスライドを直接切り替え可能。UX向上に貢献。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx'
    ],
    code: `{/* インジケーター */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={{\`w-3 h-3 rounded-full transition-colors \${
        index === currentSlide ? 'bg-white' : 'bg-white/50'
      }\`}}
      aria-label={{\`スライド \${index + 1}\`}}
    />
  ))}
</div>`,
    prompt: `カルーセルのドットインジケーターを実装してください。

## 要件
1. 配置
   - 下部中央: bottom-8 left-1/2 -translate-x-1/2
   - z-index: 20（画像より前面）
   - 横並び: flex space-x-2

2. ドットデザイン
   - サイズ: w-3 h-3（12px × 12px）
   - 形状: rounded-full（完全な円形）
   - 現在のスライド: bg-white（白、不透明）
   - それ以外: bg-white/50（白、50%透明度）
   - トランジション: transition-colors

3. インタラクション
   - クリックで対応するスライドに移動
   - setCurrentSlide(index)で状態を更新

4. 生成
   - slides.map()でスライド数分のドットを生成
   - keyにindexを使用

5. アクセシビリティ
   - aria-label: "スライド 1" など

## デザインのポイント
- 小さく控えめだが、現在位置は明確に示す
- クリック可能にすることで、ユーザーが任意のスライドに移動可能
- 白色で、どんな背景画像でも視認性を確保
- 透明度の差で、アクティブ/非アクティブを区別`,
    preview: `<div class="flex space-x-2 bg-gray-800 p-4 rounded">
  <button class="w-3 h-3 rounded-full bg-white"></button>
  <button class="w-3 h-3 rounded-full bg-white/50"></button>
  <button class="w-3 h-3 rounded-full bg-white/50"></button>
  <button class="w-3 h-3 rounded-full bg-white/50"></button>
</div>`,
    relatedTech: ['carousel-auto-play', 'slide-fade-in-transition', 'carousel-navigation-buttons']
  },
  {
    slug: 'hero-text-overlay-centered',
    title: 'ヒーローテキストオーバーレイ - 画像上の中央配置テキスト',
    category: 'UI/UX',
    description: '背景画像の上に大きなテキストを中央配置。視覚的インパクトとメッセージ性を両立。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx'
    ],
    code: `{/* コンテンツ */}
<div className="relative z-10 h-full flex items-center justify-center">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight whitespace-pre-line">
      {slides[currentSlide].title}
    </h1>
    <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed whitespace-pre-line max-w-3xl mx-auto">
      {slides[currentSlide].subtitle}
    </p>
  </div>
</div>`,
    prompt: `画像の上にテキストを中央配置するヒーローセクションのオーバーレイを実装してください。

## 要件
1. レイアウト
   - relative z-10（画像より前面）
   - h-full（親要素いっぱい）
   - flex items-center justify-center（上下左右中央）

2. タイトル（h1）
   - サイズ: text-4xl md:text-5xl lg:text-6xl（レスポンシブ）
   - フォントウェイト: font-extrabold
   - 色: text-white
   - マージン: mb-6
   - 行間: leading-tight
   - 改行対応: whitespace-pre-line

3. サブタイトル（p）
   - サイズ: text-base md:text-lg lg:text-xl（レスポンシブ）
   - 色: text-white
   - 行間: leading-relaxed
   - 改行対応: whitespace-pre-line
   - 幅制限: max-w-3xl mx-auto

4. コンテナ
   - container mx-auto px-6
   - text-center（中央揃え）

## デザインのポイント
- 大きなテキストで視覚的インパクトを与える
- レスポンシブで、デバイスに応じて最適なサイズに調整
- whitespace-pre-lineで改行（\\n）をそのまま表示
- 白色テキストで、暗いオーバーレイ背景と高コントラスト
- max-w-3xlでサブタイトルの幅を制限し、読みやすさを向上`,
    preview: `<div class="relative h-64 rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="relative z-10 text-center px-6 text-white">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
      親会社名の技術力
    </h1>
    <p class="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
      高品質な自動車部品の製造で<br />日本のものづくりを支えます
    </p>
  </div>
</div>`,
    relatedTech: ['slide-fade-in-transition']
  },
  {
    slug: 'two-column-layout-image-card',
    title: '2カラムレイアウト - 画像とカードの組み合わせ',
    category: 'レイアウト・構造',
    description: '左に画像、右に白いカードを配置した2カラムレイアウト。視覚的なバランスとコンテンツの読みやすさを両立。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CompanySection.tsx',
      '/src/components/works/tokai-parts-industry/ProductSection.tsx',
      '/src/components/works/tokai-parts-industry/ManufacturingSection.tsx'
    ],
    code: `<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* 左: 画像 */}
  <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
    <Image
      src="/works/tokai-parts-industry/images/TOP/2.jpg"
      alt="会社情報"
      fill
      className="object-cover"
    />
  </div>

  {/* 右: カード */}
  <Card className="p-12 shadow-md">
    <div className="space-y-6">
      {/* カード内コンテンツ */}
    </div>
  </Card>
</div>`,
    prompt: `画像とカードを横並びに配置する2カラムレイアウトを実装してください。

## 要件
1. グリッドレイアウト
   - grid grid-cols-1 lg:grid-cols-2
   - モバイル: 縦積み（grid-cols-1）
   - デスクトップ: 2カラム（lg:grid-cols-2）
   - gap-12（要素間の余白）
   - items-center（垂直方向中央揃え）

2. 左側：画像エリア
   - relative（親要素）
   - h-[400px] lg:h-[500px]（レスポンシブな高さ）
   - rounded-lg（角丸8px）
   - overflow-hidden（角丸を画像に適用）
   - Next.js Image（fill、object-cover）

3. 右側：カードエリア
   - Cardコンポーネント使用
   - p-12（内側余白）
   - shadow-md（中程度の影）
   - space-y-6（子要素の縦方向余白）

## デザインのポイント
- 画像とテキストを分離することで、情報の階層を明確化
- カードの白背景で、テキストの可読性を向上
- レスポンシブ対応で、モバイルでは縦積みに
- items-centerで垂直方向のバランスを保つ
- 影を使って、カードが浮いているように見せる`,
    preview: `<div class="grid grid-cols-2 gap-8 items-center">
  <div class="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
    画像エリア
  </div>
  <div class="bg-white rounded-lg p-8 shadow-md">
    <h3 class="text-2xl font-bold text-gray-900 mb-4">カードタイトル</h3>
    <p class="text-gray-600 leading-relaxed">カードの内容がここに表示されます。白い背景で読みやすく配置。</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'background-gradient-light-blue',
    title: '背景グラデーション - ライトブルーから白へ',
    category: 'デザイン・ビジュアル',
    description: '淡い青から白へのグラデーション背景。柔らかく洗練された印象を与え、コンテンツを引き立てる。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CompanySection.tsx',
      '/src/components/works/tokai-parts-industry/SustainabilitySection.tsx',
      '/src/app/works/tokai-parts-industry/page.tsx'
    ],
    code: `<section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
  {/* セクションコンテンツ */}
</section>`,
    prompt: `セクション背景に淡い青から白へのグラデーションを実装してください。

## 要件
1. グラデーション設定
   - bg-gradient-to-br（左上から右下へ）
   - from-blue-50（開始色：淡い青）
   - via-blue-50/50（中間色：淡い青50%透明度）
   - to-white（終了色：白）

2. レイアウト
   - py-20（上下パディング80px）
   - relative（子要素の位置基準）
   - overflow-hidden（はみ出し防止）

3. バリエーション
   - bg-gradient-to-b（上から下へ）も使用可能
   - bg-gradient-to-r（左から右へ）も使用可能

## 実装例
\`\`\`jsx
// パターン1: 対角線グラデーション
<section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white">
  {/* コンテンツ */}
</section>

// パターン2: 垂直グラデーション
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  {/* コンテンツ */}
</section>
\`\`\`

## デザインのポイント
- 淡い色を使うことで、テキストの可読性を維持
- グラデーションで柔らかく洗練された印象
- 企業サイトに適した落ち着いた配色
- 白へのフェードで、次のセクションへの自然な流れを作る`,
    preview: `<div class="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white rounded-lg">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">セクションタイトル</h2>
    <p class="text-gray-600">淡い青から白へのグラデーション背景</p>
  </div>
</div>`,
    relatedTech: ['two-column-layout-image-card']
  },
  {
    slug: 'large-english-category-label',
    title: '大きな英語カテゴリラベル - セクション識別',
    category: 'UIコンポーネント',
    description: 'セクションの冒頭に配置される大きな英語ラベル（COMPANY、PRODUCTなど）。視覚的なインパクトと国際性を演出。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CompanySection.tsx',
      '/src/components/works/tokai-parts-industry/ProductSection.tsx',
      '/src/components/works/tokai-parts-industry/ManufacturingSection.tsx'
    ],
    code: `<div>
  <p className="text-5xl font-bold text-[#1E40AF] mb-2">COMPANY</p>
  <h2 className="text-2xl font-bold text-gray-900">会社情報</h2>
</div>`,
    prompt: `セクションの冒頭に大きな英語カテゴリラベルを実装してください。

## 要件
1. 英語ラベル（p要素）
   - text-5xl（48px）
   - font-bold
   - text-[#1E40AF]（濃い青）
   - mb-2（下マージン8px）
   - 全て大文字（COMPANY、PRODUCT、NEWSなど）

2. 日本語タイトル（h2要素）
   - text-2xl（24px）
   - font-bold
   - text-gray-900（黒に近いグレー）
   - 英語ラベルの下に配置

3. コンテナ
   - div要素で囲む
   - 必要に応じてspace-y-2などで間隔調整

## 使用例
\`\`\`jsx
// 会社情報セクション
<p className="text-5xl font-bold text-[#1E40AF] mb-2">COMPANY</p>
<h2 className="text-2xl font-bold text-gray-900">会社情報</h2>

// 製品紹介セクション
<p className="text-5xl font-bold text-[#1E40AF] mb-2">PRODUCT</p>
<h2 className="text-2xl font-bold text-gray-900">製品紹介</h2>

// ニュースセクション
<p className="text-5xl font-bold text-[#1E40AF] mb-2">NEWS</p>
<h2 className="text-2xl font-bold text-gray-900">お知らせ</h2>
\`\`\`

## デザインのポイント
- 英語ラベルを大きくすることで、視覚的インパクトを与える
- 青色でブランドカラーと統一
- 日本語タイトルを併記することで、明確な情報伝達
- 国際性と専門性を演出`,
    preview: `<div>
  <p class="text-5xl font-bold text-[#1E40AF] mb-2">COMPANY</p>
  <h2 class="text-2xl font-bold text-gray-900">会社情報</h2>
</div>`,
    relatedTech: ['two-column-layout-image-card']
  },
  {
    slug: 'cta-button-with-arrow-icon',
    title: 'CTAボタン with 矢印アイコン - アクション促進',
    category: 'UIコンポーネント',
    description: '詳しくはこちらボタンに右向き矢印アイコンを追加。視覚的に次のアクションを示し、クリック率を向上。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CompanySection.tsx',
      '/src/components/works/tokai-parts-industry/ProductSection.tsx',
      '/src/components/works/tokai-parts-industry/ManufacturingSection.tsx'
    ],
    code: `<Link href="/about">
  <Button variant="primary" size="md">
    詳しくはこちら
    <svg
      className="w-4 h-4 ml-2 inline"
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
  </Button>
</Link>`,
    prompt: `CTAボタンに右向き矢印アイコンを追加して実装してください。

## 要件
1. ボタン設定
   - Buttonコンポーネント使用
   - variant: "primary"（青背景）
   - size: "md"（中サイズ）
   - テキスト: "詳しくはこちら"

2. 矢印アイコン（SVG）
   - サイズ: w-4 h-4（16px × 16px）
   - マージン: ml-2（左余白8px）
   - display: inline（テキストと同じ行）
   - fill: none
   - stroke: currentColor（ボタンのテキスト色を継承）
   - viewBox: 0 0 24 24

3. 矢印パス
   - strokeLinecap: round
   - strokeLinejoin: round
   - strokeWidth: 2
   - d: "M9 5l7 7-7 7"（右向き矢印）

4. リンク
   - Linkコンポーネントで囲む
   - href属性で遷移先を指定

## デザインのポイント
- 矢印で次のアクションを視覚的に示す
- テキストとアイコンの組み合わせで、わかりやすさを向上
- currentColorでボタンの色と統一
- ホバー時の動きでインタラクティブ性を強調`,
    preview: `<button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center">
  詳しくはこちら
  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
  </svg>
</button>`,
    relatedTech: ['large-english-category-label']
  },
  {
    slug: 'full-width-background-image-gradient-overlay',
    title: 'フル幅の背景画像 + グラデーションオーバーレイ',
    category: 'デザイン・ビジュアル',
    description: 'セクション全体を覆う背景画像に、グラデーションのオーバーレイを重ねる技術。画像の美しさを保ちつつ、テキストの可読性を向上。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/SustainabilitySection.tsx'
    ],
    code: `<section className="relative py-32 overflow-hidden">
  {/* 背景画像 */}
  <div className="absolute inset-0">
    <Image
      src="/works/tokai-parts-industry/images/TOP/5.jpg"
      alt="サステナビリティ"
      fill
      className="object-cover"
    />
    {/* グラデーションオーバーレイ */}
    <div className="absolute inset-0 bg-gradient-to-b from-teal-600/80 to-blue-600/80" />
  </div>

  {/* コンテンツ */}
  <div className="relative z-10 container mx-auto px-6">
    {/* ... */}
  </div>
</section>`,
    prompt: `フル幅の背景画像にグラデーションオーバーレイを実装してください。

## 要件
1. セクション構造
   - relative（親要素）
   - py-32（上下パディング128px）
   - overflow-hidden（はみ出し防止）

2. 背景画像レイヤー
   - absolute inset-0（全体を覆う）
   - Next.js Imageコンポーネント使用
   - fill属性で親要素いっぱいに表示
   - object-cover（画像を切り取らずに覆う）

3. グラデーションオーバーレイ
   - absolute inset-0（画像の上に重ねる）
   - bg-gradient-to-b（上から下へのグラデーション）
   - from-teal-600/80（開始色：ティール80%透明度）
   - to-blue-600/80（終了色：ブルー80%透明度）
   - 80%透明度で背景画像を透かせる

4. コンテンツレイヤー
   - relative z-10（オーバーレイより前面）
   - container mx-auto px-6（中央揃え）

## 実装パターン
\`\`\`jsx
// パターン1: 2色グラデーション
<div className="absolute inset-0 bg-gradient-to-b from-teal-600/80 to-blue-600/80" />

// パターン2: 単色オーバーレイ
<div className="absolute inset-0 bg-black/50" />

// パターン3: 3色グラデーション
<div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 via-blue-600/80 to-indigo-600/80" />
\`\`\`

## デザインのポイント
- 背景画像の美しさを保ちつつ、テキストを読みやすく
- グラデーションで奥行きと立体感を演出
- ブランドカラー（青系）で統一感を保つ
- 透明度80%で背景画像を適度に透かせる
- z-indexの階層管理（背景 < オーバーレイ < コンテンツ）`,
    preview: `<div class="relative h-48 rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
  <div class="relative z-10 h-full flex items-center justify-center text-white">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-2">コンテンツタイトル</h2>
      <p class="text-lg">背景画像 + グラデーションオーバーレイ</p>
    </div>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'white-outline-button-overlay',
    title: '白いアウトラインボタン - 背景画像上での使用',
    category: 'UIコンポーネント',
    description: '暗い背景画像の上で使用する、白い枠線のボタン。ホバー時に白背景に切り替わり、テキスト色が反転する洗練されたデザイン。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/SustainabilitySection.tsx'
    ],
    code: `<Link href="/sustainability">
  <Button
    variant="outline"
    size="md"
    className="border-white text-white hover:bg-white hover:text-blue-600"
  >
    詳しくはこちら
  </Button>
</Link>`,
    prompt: `背景画像の上で使用する白いアウトラインボタンを実装してください。

## 要件
1. ボタン基本設定
   - Buttonコンポーネント使用
   - variant: "outline"（枠線のみ）
   - size: "md"（中サイズ）

2. カスタムスタイル（className）
   - border-white（白い枠線）
   - text-white（白いテキスト）
   - hover:bg-white（ホバー時：白背景）
   - hover:text-blue-600（ホバー時：青いテキスト）

3. 配置
   - 暗い背景画像やグラデーションオーバーレイの上に配置
   - 十分なコントラストを確保

## 実装パターン
\`\`\`jsx
// パターン1: 基本形（白枠＋白テキスト）
<Button
  variant="outline"
  className="border-white text-white hover:bg-white hover:text-blue-600"
>
  詳しくはこちら
</Button>

// パターン2: 別の色に反転
<Button
  variant="outline"
  className="border-white text-white hover:bg-white hover:text-teal-600"
>
  もっと見る
</Button>

// パターン3: 矢印アイコン付き
<Button
  variant="outline"
  className="border-white text-white hover:bg-white hover:text-blue-600"
>
  詳しくはこちら
  <svg className="w-4 h-4 ml-2 inline">...</svg>
</Button>
\`\`\`

## デザインのポイント
- 白い枠線で、暗い背景との高いコントラストを確保
- ホバー時に背景を白く塗りつぶすことで、明確なフィードバック
- テキスト色を反転させることで、可読性を維持
- シンプルながら洗練された印象
- 背景画像を邪魔しない控えめなデザイン`,
    preview: `<div class="bg-gray-800 p-8 rounded inline-block">
  <button class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md transition-all font-medium">
    詳しくはこちら
  </button>
</div>`,
    relatedTech: ['full-width-background-image-gradient-overlay']
  },
  {
    slug: 'three-column-icon-cards',
    title: '3カラムアイコンカード - 均等配置',
    category: 'レイアウト・構造',
    description: '白いカードに円形アイコンとテキストを配置した3カラムレイアウト。視覚的にバランスの取れた情報提示に最適。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/SustainabilitySection.tsx'
    ],
    code: `const initiatives = [
  {
    icon: <svg>...</svg>,
    title: 'お客様への取り組み',
  },
  {
    icon: <svg>...</svg>,
    title: '人材への取り組み',
  },
  {
    icon: <svg>...</svg>,
    title: '地域・環境への取り組み',
  },
]

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {initiatives.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-lg p-8 shadow-xl text-center"
    >
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        {item.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
    </div>
  ))}
</div>`,
    prompt: `3カラムのアイコンカードレイアウトを実装してください。

## 要件
1. グリッドレイアウト
   - grid grid-cols-1 md:grid-cols-3
   - モバイル: 縦積み（grid-cols-1）
   - タブレット以上: 3カラム（md:grid-cols-3）
   - gap-8（カード間の余白32px）

2. カードデザイン
   - bg-white（白背景）
   - rounded-lg（角丸8px）
   - p-8（内側余白32px）
   - shadow-xl（大きな影）
   - text-center（中央揃え）

3. アイコンエリア
   - サイズ: w-24 h-24（96px × 96px）
   - 形状: rounded-full（完全な円形）
   - 背景色: bg-blue-100（淡い青）
   - テキスト色: text-blue-600（青）
   - 中央配置: mx-auto（水平中央）
   - マージン: mb-6（下余白24px）
   - レイアウト: flex items-center justify-center

4. タイトル
   - text-lg（18px）
   - font-bold（太字）
   - text-gray-900（ほぼ黒）

5. データ構造
   - 配列で管理（map関数で展開）
   - icon: ReactNode（SVGアイコン）
   - title: string（カードタイトル）

## データ例
\`\`\`typescript
const items = [
  {
    icon: <svg>...</svg>,
    title: 'お客様への取り組み',
  },
  {
    icon: <svg>...</svg>,
    title: '人材への取り組み',
  },
  {
    icon: <svg>...</svg>,
    title: '地域・環境への取り組み',
  },
]
\`\`\`

## デザインのポイント
- 3つの要素を均等に配置し、バランスを保つ
- 大きな影で、カードが浮いているように見せる
- 円形アイコンで視線を集め、情報を整理
- 淡い青の背景で、アイコンを引き立てる
- レスポンシブ対応で、モバイルでは縦積みに`,
      preview: `<div class="grid grid-cols-3 gap-8">
    <div class="bg-white rounded-lg p-8 shadow-xl text-center">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900">お客様への取り組み</h3>
    </div>
    <div class="bg-white rounded-lg p-8 shadow-xl text-center">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900">人材への取り組み</h3>
    </div>
    <div class="bg-white rounded-lg p-8 shadow-xl text-center">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900">地域・環境への取り組み</h3>
    </div>
  </div>`,
    relatedTech: ['full-width-background-image-gradient-overlay']
  },
  {
    slug: 'scroll-to-top-button',
    title: 'トップに戻るボタン - 右下固定配置',
    category: 'UI/UX',
    description: 'ページ右下に固定配置された円形ボタン。クリックでページトップにスムーズスクロール。長いページでのUX向上に貢献。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/SustainabilitySection.tsx'
    ],
    code: `'use client'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

<button
  onClick={scrollToTop}
  className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors shadow-lg"
  aria-label="トップに戻る"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
</button>`,
    prompt: `ページトップに戻るボタンを実装してください。

## 要件
1. 配置
   - absolute（親要素基準）
   - bottom-8 right-8（右下に配置、32pxの余白）
   - セクションの右下に固定

2. デザイン
   - サイズ: w-14 h-14（56px × 56px）
   - 形状: rounded-full（完全な円形）
   - 背景色: bg-blue-100（淡い青）
   - テキスト色: text-blue-600（青）
   - 影: shadow-lg（大きな影）
   - アイコンサイズ: w-6 h-6（24px × 24px）

3. ホバーエフェクト
   - hover:bg-blue-200（濃い青）
   - transition-colors（色変化のアニメーション）

4. スクロール機能
   - window.scrollTo({ top: 0, behavior: 'smooth' })
   - スムーズにページトップに移動
   - 'use client'ディレクティブが必要（Next.js App Router）

5. アイコン
   - 上向き矢印のSVG
   - strokeWidth: 2
   - fill: none
   - stroke: currentColor（ボタンのテキスト色を継承）

6. アクセシビリティ
   - aria-label: "トップに戻る"

## 実装パターン
\`\`\`jsx
// パターン1: セクション内固定（absolute）
<section className="relative">
  <button className="absolute bottom-8 right-8 ...">
    {/* アイコン */}
  </button>
</section>

// パターン2: 画面全体固定（fixed）
<button className="fixed bottom-8 right-8 ...">
  {/* アイコン */}
</button>

// パターン3: スクロール量に応じて表示
const [showButton, setShowButton] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setShowButton(window.scrollY > 300)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

{showButton && <button onClick={scrollToTop}>...</button>}
\`\`\`

## デザインのポイント
- 円形ボタンで洗練された印象
- 淡い青で控えめながら視認性を確保
- 影で立体感を演出
- スムーズスクロールでUXを向上
- 右下配置が一般的で、ユーザーが慣れている位置`,
    preview: `<div class="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-end justify-end p-4">
  <button class="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors shadow-lg">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  </button>
</div>`,
    relatedTech: []
  },
  {
    slug: 'two-column-cta-cards',
    title: '2カラムCTAカード - オレンジ×ブルーの配色',
    category: 'レイアウト・構造',
    description: 'RECRUITとCONTACTの2つの大きなCTAカードを横並びに配置。異なる色で視覚的に区別し、ユーザーのアクションを促進。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CTASection.tsx'
    ],
    code: `<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
  {/* RECRUIT カード */}
  <div className="bg-[#FF6B35] px-12 py-24 text-white">
    <div className="max-w-md mx-auto space-y-6">
      {/* アイコン */}
      <svg className="w-16 h-16 mb-4">...</svg>
      <h2 className="text-4xl font-bold">RECRUIT</h2>
      <p className="text-xl leading-relaxed">
        企業名に興味を
        <br />
        持ってくださった方はこちらへ
      </p>
      <Link href="/recruit">
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-[#FF6B35]"
        >
          詳しくはこちら
        </Button>
      </Link>
    </div>
  </div>

  {/* CONTACT カード */}
  <div className="bg-[#2563EB] px-12 py-24 text-white">
    <div className="max-w-md mx-auto space-y-6">
      {/* アイコン */}
      <svg className="w-16 h-16 mb-4">...</svg>
      <h2 className="text-4xl font-bold">CONTACT</h2>
      <p className="text-xl leading-relaxed">
        企業名、製品に関する
        <br />
        お問い合わせ・ご相談窓口はこちらをご覧ください。
      </p>
      <Link href="/contact">
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-[#2563EB]"
        >
          お問い合わせ
        </Button>
      </Link>
    </div>
  </div>
</div>`,
    prompt: `2カラムのCTAカードを実装してください。

## 要件
1. グリッドレイアウト
   - grid grid-cols-1 lg:grid-cols-2
   - モバイル: 縦積み（grid-cols-1）
   - デスクトップ: 2カラム（lg:grid-cols-2）
   - 各カードが50%ずつの幅

2. 左カード（RECRUIT）
   - 背景色: #FF6B35（オレンジ）
   - パディング: px-12 py-24
   - テキスト色: text-white
   - 最大幅: max-w-md mx-auto（中央揃え）
   - 間隔: space-y-6

3. 右カード（CONTACT）
   - 背景色: #2563EB（ブルー）
   - パディング: px-12 py-24
   - テキスト色: text-white
   - 最大幅: max-w-md mx-auto（中央揃え）
   - 間隔: space-y-6

4. 各カード内の要素
   - アイコン: w-16 h-16（64px × 64px）
   - タイトル: text-4xl font-bold
   - 説明文: text-xl leading-relaxed
   - ボタン: 白いアウトライン、ホバー時に白背景＋カラーテキスト

5. ホバーエフェクト
   - RECRUIT: hover:bg-white hover:text-[#FF6B35]
   - CONTACT: hover:bg-white hover:text-[#2563EB]

## デザインのポイント
- 異なる色で2つのCTAを視覚的に区別
- オレンジ（採用）は活気や情熱、青（お問い合わせ）は信頼や安心を象徴
- 大きなパディングで、各CTAに十分な注目を集める
- 白いアウトラインボタンで、背景色とのコントラストを確保
- モバイルでは縦積みにし、読みやすさを優先`,
    preview: `<div class="grid grid-cols-2 gap-0">
  <div class="bg-[#FF6B35] px-8 py-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">RECRUIT</h2>
    <p class="mb-6">採用情報はこちら</p>
    <button class="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-6 py-2 rounded-md transition-all">
      詳しくはこちら
    </button>
  </div>
  <div class="bg-[#2563EB] px-8 py-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">CONTACT</h2>
    <p class="mb-6">お問い合わせ</p>
    <button class="border-2 border-white text-white hover:bg-white hover:text-[#2563EB] px-6 py-2 rounded-md transition-all">
      お問い合わせ
    </button>
  </div>
</div>`,
    relatedTech: ['white-outline-button-overlay']
  },
  {
    slug: 'dark-blue-footer',
    title: 'ダークブルー背景のフッター - 統一感のあるデザイン',
    category: 'デザイン・ビジュアル',
    description: '濃い青色（#1E3A8A）の背景に白いテキストを配置したフッター。ブランドカラーと統一感を保ち、信頼感を演出。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/Footer.tsx'
    ],
    code: `<footer className="bg-[#1E3A8A] text-white py-12">
  <div className="container mx-auto px-6">
    {/* ロゴ */}
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <span className="text-3xl font-bold">BRAND</span>
        <span className="text-base font-medium">企業名（株式会社）</span>
      </div>
    </div>

    {/* リンク */}
    <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
      <Link href="/contact" className="hover:underline">
        お問い合わせ &gt;
      </Link>
      <Link href="/about" className="hover:underline">
        会社情報 &gt;
      </Link>
    </div>

    {/* コピーライト */}
    <div className="text-center text-xs text-white/70">
      <p>&copy; 企業名 ALL RIGHTS RESERVED.</p>
    </div>
  </div>
</footer>`,
    prompt: `ダークブルー背景のフッターを実装してください。

## 要件
1. 基本設定
   - 背景色: #1E3A8A（濃い青）
   - テキスト色: text-white（白）
   - パディング: py-12（上下48px）

2. レイアウト構造
   - container mx-auto px-6（中央揃えコンテナ）
   - 3つのセクション：ロゴ、リンク、コピーライト
   - すべて中央揃え（text-center）

3. ロゴセクション
   - flex items-center justify-center（中央配置）
   - space-x-2（要素間余白）
   - BRAND: text-3xl font-bold
   - 会社名: text-base font-medium
   - mb-8（下余白32px）

4. リンクセクション
   - flex flex-wrap justify-center（中央配置、折り返し）
   - gap-6（リンク間余白24px）
   - text-sm（小さいテキスト）
   - hover:underline（ホバー時下線）
   - リンク末尾に「>」記号

5. コピーライトセクション
   - text-center（中央揃え）
   - text-xs（極小テキスト）
   - text-white/70（白70%透明度）

## デザインのポイント
- 濃い青背景で、ブランドカラーとの統一感
- 白いテキストで高いコントラスト、可読性確保
- シンプルで洗練されたデザイン
- 中央揃えで、バランスの取れたレイアウト
- コピーライトを控えめにすることで、主要情報を引き立てる`,
      preview: `<div class="bg-[#1E3A8A] text-white py-12 px-6 rounded-lg">
    <div class="mb-8 text-center">
      <div class="flex items-center justify-center space-x-2 mb-4">
        <span class="text-3xl font-bold">BRAND</span>
        <span class="text-base font-medium">企業名（株式会社）</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm">
      <a href="#" class="hover:underline">お問い合わせ &gt;</a>
      <a href="#" class="hover:underline">会社情報 &gt;</a>
    </div>
    <div class="text-center text-xs text-white/70">
      <p>&copy; 企業名 ALL RIGHTS RESERVED.</p>
    </div>
  </div>`,
    relatedTech: ['tbk-logo-brand-identity']
  },
  {
    slug: 'circular-background-section-title',
    title: '円形背景デザイン - セクションタイトルの装飾',
    category: 'UIコンポーネント',
    description: 'セクションタイトルの背景に円形（rounded-full）の色付き背景を配置。視覚的なアクセントとなり、セクションの重要性を強調。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `<div className="inline-block bg-[#BBF7D0] rounded-full px-12 py-12 mb-8">
  <p className="text-[#4ADE80] font-serif italic text-2xl mb-2">Interview</p>
  <h2 className="text-3xl md:text-4xl font-bold">
    <span className="text-[#F97316]">先輩</span>
    <span className="text-[#F97316]">インタビュー</span>
  </h2>
</div>`,
    prompt: `セクションタイトルに円形背景を実装してください。

## 要件
1. コンテナ
   - inline-block（インライン要素として配置）
   - rounded-full（完全な円形）
   - px-12 py-12（内側余白48px）
   - 背景色を指定（例: bg-[#BBF7D0]）

2. タイトル構造
   - 英語ラベル: font-serif italic（セリフ体イタリック）
   - 日本語タイトル: 大きな文字（text-3xl md:text-4xl）、font-bold
   - カラーアクセント: text-[#F97316]など

3. 配置
   - text-center（中央揃え）
   - mb-8（下余白32px）

## 実装パターン
\`\`\`jsx
// パターン1: シンプルな円形背景
<div className="inline-block bg-blue-100 rounded-full px-12 py-12">
  <h2 className="text-2xl font-bold">タイトル</h2>
</div>

// パターン2: 英語ラベル付き
<div className="inline-block bg-green-100 rounded-full px-12 py-16">
  <p className="text-green-600 font-serif italic text-xl mb-2">Label</p>
  <h2 className="text-3xl font-bold">タイトル</h2>
</div>

// パターン3: グラデーション背景
<div className="inline-block bg-gradient-to-br from-blue-100 to-blue-200 rounded-full px-12 py-12">
  <h2 className="text-2xl font-bold">タイトル</h2>
</div>
\`\`\`

## デザインのポイント
- 円形背景で視覚的なアクセントを作成
- パステルカラーで柔らかく親しみやすい印象
- 大きなパディングで余白を確保し、タイトルを強調
- inline-blockで必要最小限の幅に調整
- リクルートサイトなど、親しみやすさを重視する場面に最適`,
    preview: `<div class="flex justify-center">
  <div class="inline-block bg-blue-100 rounded-full px-12 py-8">
    <h2 class="text-2xl font-bold text-gray-900">セクションタイトル</h2>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'alternating-color-card-grid',
    title: '交互配色のカードグリッド - チェッカーボードパターン',
    category: 'レイアウト・構造',
    description: '4カラムグリッドで、カードの背景色を交互に変更（青・緑・緑・青のパターン）。視覚的にリズム感のあるデザインを実現。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
  {interviews.slice(0, 8).map((interview, index) => {
    const isBlue = index % 4 === 0 || index % 4 === 3
    return (
      <Link
        key={interview.id}
        href={\`/interview/\${interview.id}\`}
        className="group"
      >
        <div className={\`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all \${
          isBlue ? 'bg-[#2563EB]' : 'bg-[#4ADE80]'
        }\`}>
          <div className="relative aspect-[3/4]">
            {/* カード内容 */}
          </div>
        </div>
      </Link>
    )
  })}
</div>`,
    prompt: `交互配色のカードグリッドを実装してください。

## 要件
1. グリッドレイアウト
   - grid grid-cols-2 md:grid-cols-4（モバイル2列、タブレット以上4列）
   - gap-4（カード間余白16px）
   - max-w-6xl mx-auto（最大幅制限＋中央揃え）

2. 配色ロジック
   - インデックスベースで色を決定
   - \`index % 4 === 0 || index % 4 === 3\`で青
   - それ以外で緑
   - パターン: 青・緑・緑・青（繰り返し）

3. カードデザイン
   - rounded-2xl（大きな角丸）
   - overflow-hidden（角丸を子要素に適用）
   - shadow-lg hover:shadow-xl（影のアニメーション）
   - transition-all（滑らかな遷移）
   - aspect-[3/4]（縦長のアスペクト比）

4. 配色例
   - 青: bg-[#2563EB]
   - 緑: bg-[#4ADE80]

## 実装パターン
\`\`\`jsx
// パターン1: 2色交互（0,3が青、1,2が緑）
const isBlue = index % 4 === 0 || index % 4 === 3

// パターン2: 単純な2色交互
const isBlue = index % 2 === 0

// パターン3: 3色パターン
const getColor = (index) => {
  const pattern = index % 3
  if (pattern === 0) return 'bg-blue-500'
  if (pattern === 1) return 'bg-green-500'
  return 'bg-orange-500'
}
\`\`\`

## デザインのポイント
- チェッカーボード風のパターンで視覚的リズムを作成
- 2色の組み合わせで統一感を保ちつつ、単調さを回避
- リクルートサイトなど、親しみやすさを重視する場面に最適
- モジュロ演算（%）で規則的なパターンを実現
- レスポンシブ対応で、デバイスに応じて列数を調整`,
    preview: `<div class="grid grid-cols-4 gap-4">
  <div class="bg-[#2563EB] rounded-2xl p-8 aspect-square flex items-center justify-center text-white font-bold">1</div>
  <div class="bg-[#4ADE80] rounded-2xl p-8 aspect-square flex items-center justify-center text-white font-bold">2</div>
  <div class="bg-[#4ADE80] rounded-2xl p-8 aspect-square flex items-center justify-center text-white font-bold">3</div>
  <div class="bg-[#2563EB] rounded-2xl p-8 aspect-square flex items-center justify-center text-white font-bold">4</div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'dot-pattern-background',
    title: 'ドットパターン背景 - CSSグラデーションで実現',
    category: 'デザイン・ビジュアル',
    description: 'radial-gradientを使用して、規則的なドットパターンの背景を生成。微細な視覚的テクスチャを追加し、セクションに奥行きを与える。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* ドットパターン背景 */}
<div
  className="absolute inset-0 opacity-30"
  style={{
    backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  }}
></div>`,
    prompt: `CSSグラデーションを使用してドットパターン背景を実装してください。

## 要件
1. レイアウト
   - absolute inset-0（親要素全体を覆う）
   - opacity-30（30%透明度で控えめに）

2. CSSスタイル（style属性）
   - backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)'
   - backgroundSize: '20px 20px'

3. ドットパターンの仕組み
   - radial-gradient: 円形のグラデーションを生成
   - circle: 正円を指定
   - #10B981 1px: 中心から1pxまで緑色
   - transparent 1px: 1px以降は透明
   - backgroundSize: 20px 20px: パターンを20px間隔で繰り返し

## 実装パターン
\`\`\`jsx
// パターン1: 基本的なドットパターン（緑）
<div
  className="absolute inset-0 opacity-30"
  style={{
    backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  }}
/>

// パターン2: 青いドットパターン
<div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
    backgroundSize: '15px 15px'
  }}
/>

// パターン3: より大きなドット
<div
  className="absolute inset-0 opacity-40"
  style={{
    backgroundImage: 'radial-gradient(circle, #F97316 2px, transparent 2px)',
    backgroundSize: '30px 30px'
  }}
/>

// パターン4: Tailwind CSSのみで実装（グリッドパターン）
<div className="absolute inset-0 opacity-30 bg-grid-pattern" />
\`\`\`

## デザインのポイント
- 微細なテクスチャで視覚的な奥行きを追加
- 透明度を調整して、控えめな装飾に
- backgroundSizeで間隔を調整可能
- ドットサイズ（1px, 2pxなど）で密度を調整
- 画像ファイル不要、CSSのみで実装可能
- パフォーマンスに優れる（軽量）`,
    preview: `<div class="relative h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-white">
  <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle, #2563EB 1px, transparent 1px); background-size: 20px 20px;"></div>
  <div class="relative z-10 flex items-center justify-center h-full">
    <p class="text-gray-800 font-medium">ドットパターン背景</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'glassmorphism-message-card',
    title: '半透明背景のメッセージカード - Glassmorphism',
    category: 'デザイン・ビジュアル',
    description: '半透明の白背景にbackdrop-blurを適用し、背景がぼやけて見えるガラスのような効果を実現。モダンで洗練されたデザイン。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-white">
  <div className="space-y-4 text-sm md:text-base leading-relaxed">
    <p>当社は「誇りある全員に、生き生きと働ける」をスローガンに新しい時代文化の創造に貢献しています。</p>
    <p>100年にわたり創意工夫を重ねてきた、重要性を見つけ出し活力した成長を目指しています。</p>
    <p>そのためには、最良と考えて工夫します、未来を描き続ける人間が必要です。</p>
    <p>個すること目当て、チャレンジして行ける風土をともに、お迎えしています。</p>
  </div>
</div>`,
    prompt: `Glassmorphism（グラスモーフィズム）スタイルのカードを実装してください。

## 要件
1. 背景
   - bg-white/10（白10%透明度）
   - backdrop-blur-sm（背景ぼかし効果）
   - これらの組み合わせでガラスのような効果

2. カードデザイン
   - rounded-3xl（大きな角丸）
   - p-8 md:p-12（レスポンシブなパディング）
   - text-white（白いテキスト）

3. テキストコンテナ
   - space-y-4（段落間余白16px）
   - text-sm md:text-base（レスポンシブなフォントサイズ）
   - leading-relaxed（ゆったりとした行間）

## 実装パターン
\`\`\`jsx
// パターン1: 基本的なGlassmorphism
<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
  <p>コンテンツ</p>
</div>

// パターン2: 濃いめの背景
<div className="bg-white/20 backdrop-blur-md rounded-3xl p-8">
  <p>コンテンツ</p>
</div>

// パターン3: 黒ベース
<div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8">
  <p>コンテンツ</p>
</div>

// パターン4: ボーダー付き
<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
  <p>コンテンツ</p>
</div>
\`\`\`

## backdrop-blurの種類
- backdrop-blur-sm: 4px
- backdrop-blur: 8px（デフォルト）
- backdrop-blur-md: 12px
- backdrop-blur-lg: 16px
- backdrop-blur-xl: 24px

## デザインのポイント
- 背景が透けて見えることで、奥行き感を演出
- ぼかし効果で、テキストの可読性を確保しつつ、背景との一体感を保つ
- モダンで洗練された印象を与える
- macOS Big SurやWindows 11などの最新OSでも採用されているデザイン手法
- 色付き背景の上に配置することで効果が映える`,
    preview: `<div class="relative h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
  <div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
    <p class="text-white font-medium">Glassmorphism Effect</p>
    <p class="text-white/80 text-sm">半透明背景 + ぼかし効果</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'gradient-section-background',
    title: 'グラデーション背景セクション - 緑系のグラデーション',
    category: 'デザイン・ビジュアル',
    description: '緑系のグラデーション背景（from-[#F0FDF4] to-[#DCFCE7]）で、柔らかく親しみやすいセクション背景を実現。リクルートサイトに最適。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `<section className="py-20 bg-gradient-to-b from-[#F0FDF4] to-[#DCFCE7]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* セクションコンテンツ */}
  </div>
</section>`,
    prompt: `グラデーション背景のセクションを実装してください。

## 要件
1. セクション設定
   - py-20（上下パディング80px）
   - bg-gradient-to-b（上から下へのグラデーション）
   - from-[#F0FDF4]（開始色：非常に淡い緑）
   - to-[#DCFCE7]（終了色：淡い緑）

2. コンテナ
   - max-w-7xl mx-auto（最大幅＋中央揃え）
   - px-4 sm:px-6 lg:px-8（レスポンシブなパディング）

## カラーパターン例
\`\`\`jsx
// パターン1: 淡い緑グラデーション（親しみやすい）
<section className="py-20 bg-gradient-to-b from-[#F0FDF4] to-[#DCFCE7]">

// パターン2: 淡い青グラデーション（信頼感）
<section className="py-20 bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]">

// パターン3: 緑から白へ（軽やかな印象）
<section className="py-20 bg-gradient-to-b from-[#BBF7D0] to-white">

// パターン4: 3色グラデーション
<section className="py-20 bg-gradient-to-b from-[#F0FDF4] via-[#DCFCE7] to-white">
\`\`\`

## グラデーション方向
- bg-gradient-to-b: 上から下へ
- bg-gradient-to-t: 下から上へ
- bg-gradient-to-r: 左から右へ
- bg-gradient-to-l: 右から左へ
- bg-gradient-to-br: 左上から右下へ

## デザインのポイント
- 淡い色を使うことで、テキストの可読性を維持
- グラデーションで柔らかく親しみやすい印象
- リクルートサイトなど、親しみやすさを重視する場面に最適
- 緑色は「成長」「新鮮」「安心」を象徴
- 白へのフェードで、次のセクションへの自然な流れを作る`,
    preview: `<div class="py-20 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white rounded-lg">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">採用情報</h2>
    <p class="text-gray-600">緑系のグラデーション背景</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'rounded-full-cta-button',
    title: '丸型CTAボタン - rounded-full',
    category: 'UIコンポーネント',
    description: '完全な丸型（rounded-full）のCTAボタン。柔らかく親しみやすい印象を与え、リクルートサイトなどに最適。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `<Link
  href="/works/tokai-parts-industry/recruit/interview"
  className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-full font-bold transition-colors"
>
  先輩インタビュー一覧 →
</Link>`,
    prompt: `丸型（rounded-full）のCTAボタンを実装してください。

## 要件
1. 基本設定
   - inline-block（インライン要素として配置）
   - rounded-full（完全な丸型）
   - px-8 py-3（左右32px、上下12px）
   - font-bold（太字）

2. カラーデザイン
   - bg-[#F97316]（オレンジ）
   - hover:bg-[#EA580C]（濃いオレンジ）
   - text-white（白いテキスト）
   - transition-colors（色変化のアニメーション）

3. テキスト
   - テキスト末尾に矢印アイコン（→）を追加
   - シンプルで分かりやすいラベル

## 実装パターン
\`\`\`jsx
// パターン1: オレンジボタン
<button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-full font-bold transition-colors">
  詳しくはこちら →
</button>

// パターン2: 青ボタン
<button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-full font-bold transition-colors">
  もっと見る →
</button>

// パターン3: 緑ボタン
<button className="bg-[#4ADE80] hover:bg-[#22C55E] text-white px-8 py-3 rounded-full font-bold transition-colors">
  申し込む →
</button>

// パターン4: 大きなボタン
<button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-12 py-4 rounded-full font-bold transition-colors text-lg">
  今すぐ応募 →
</button>
\`\`\`

## デザインのポイント
- rounded-fullで柔らかく親しみやすい印象
- オレンジ色で活気や情熱を象徴（リクルート向き）
- ホバー時の色変化で、インタラクティブ性を強調
- 矢印アイコン（→）で次のアクションを示唆
- シンプルで分かりやすいデザイン`,
    preview: `<button class="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-full font-bold transition-colors">
  先輩インタビュー一覧 →
</button>`,
    relatedTech: []
  },
  {
    slug: 'tab-navigation-buttons',
    title: 'タブ切り替えボタン - アクティブ状態の視覚化',
    category: 'UIコンポーネント',
    description: '複数のタブを切り替えるボタン。アクティブなタブは青背景+白文字、非アクティブは白背景+青枠線で視覚的に区別。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/recruitment/page.tsx'
    ],
    code: `'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const [activeTab, setActiveTab] = useState('大卒採用')
const tabs = ['大卒採用', '高卒採用', '中途採用']

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={\`py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 \${
        activeTab === tab
          ? 'bg-[#2563EB] text-white shadow-lg'
          : 'bg-white text-[#2563EB] border-2 border-[#2563EB] hover:bg-blue-50'
      }\`}
    >
      {tab}
      <ChevronDown className="w-5 h-5" />
    </button>
  ))}
</div>

{/* タブコンテンツ */}
{activeTab === '大卒採用' && (
  <div>大卒採用のコンテンツ</div>
)}
{activeTab === '高卒採用' && (
  <div>高卒採用のコンテンツ</div>
)}
{activeTab === '中途採用' && (
  <div>中途採用のコンテンツ</div>
)}`,
    prompt: `タブ切り替えボタンを実装してください。

## 要件
1. 状態管理
   - useStateでactiveTabを管理
   - 初期値は最初のタブ
   - 'use client'ディレクティブが必要（Next.js App Router）

2. グリッドレイアウト
   - grid grid-cols-1 md:grid-cols-3
   - モバイル: 縦積み（grid-cols-1）
   - タブレット以上: 3カラム（md:grid-cols-3）
   - gap-4（ボタン間余白16px）

3. ボタンデザイン
   - py-4 px-6（上下16px、左右24px）
   - rounded-lg（角丸8px）
   - font-bold text-lg
   - transition-all（滑らかなアニメーション）
   - flex items-center justify-center gap-2（アイコンとテキストの配置）

4. アクティブ状態（activeTab === tab）
   - bg-[#2563EB]（青背景）
   - text-white（白文字）
   - shadow-lg（大きな影）

5. 非アクティブ状態
   - bg-white（白背景）
   - text-[#2563EB]（青文字）
   - border-2 border-[#2563EB]（青枠線2px）
   - hover:bg-blue-50（ホバー時：淡い青背景）

6. アイコン
   - ChevronDown（下向き矢印）
   - w-5 h-5（20px × 20px）
   - lucide-reactを使用

7. タブコンテンツ
   - 条件付きレンダリング（activeTab === '...'）
   - 各タブに対応するコンテンツを表示

## 実装パターン
\`\`\`jsx
// パターン1: 3つのタブ
const tabs = ['大卒採用', '高卒採用', '中途採用']

// パターン2: 2つのタブ
const tabs = ['概要', '詳細']

// パターン3: 4つのタブ
const tabs = ['全て', 'お客様', '人材', '地域・環境']

// パターン4: アイコンなし
<button className={\`...\`}>
  {tab}
</button>

// パターン5: 縦並びタブ（モバイル対応）
<div className="grid grid-cols-1 gap-4">
  {/* タブボタン */}
</div>
\`\`\`

## デザインのポイント
- アクティブ/非アクティブの視覚的な違いを明確に
- 青色でブランドカラーと統一
- 影を使って、アクティブなタブが浮いている印象を与える
- ChevronDownアイコンで、タブを開く動作を示唆
- レスポンシブ対応で、モバイルでは縦積みに
- ホバー時の背景色変化で、インタラクティブ性を強調`,
    preview: `<div class="grid grid-cols-3 gap-4">
  <button class="py-4 px-6 rounded-lg font-bold text-lg bg-[#2563EB] text-white shadow-lg flex items-center justify-center gap-2">
    大卒採用
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <button class="py-4 px-6 rounded-lg font-bold text-lg bg-white text-[#2563EB] border-2 border-[#2563EB] hover:bg-blue-50 flex items-center justify-center gap-2">
    高卒採用
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <button class="py-4 px-6 rounded-lg font-bold text-lg bg-white text-[#2563EB] border-2 border-[#2563EB] hover:bg-blue-50 flex items-center justify-center gap-2">
    中途採用
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
</div>`,
    relatedTech: []
  },
  {
    slug: 'title-underline-decoration',
    title: 'タイトル下線装飾 - border-bottomで実現',
    category: 'デザイン・ビジュアル',
    description: 'セクションタイトルに細いアンダーライン装飾を追加。inline-blockと組み合わせて、タイトルの幅に合わせた下線を実現。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/about/page.tsx'
    ],
    code: `{/* パターン1: ヒーローセクションのタイトル下線 */}
<div className="relative h-full flex flex-col items-center justify-center text-white px-4">
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
    COMPANY
  </h1>
  <div className="h-1 w-20 bg-white mb-6"></div>
  <p className="text-xl md:text-2xl font-medium">
    会社情報
  </p>
</div>

{/* パターン2: セクションタイトルの下線装飾 */}
<div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
    企業理念
  </h2>
</div>`,
    prompt: `タイトルに下線装飾を実装してください。

## 要件
1. パターン1: ヒーローセクションのタイトル下線
   - divタグで実装
   - h-1（高さ4px）
   - w-20（幅80px）
   - 背景色を指定（例: bg-white）
   - mb-6（下マージン24px）
   - タイトルの中央に配置

2. パターン2: セクションタイトルの下線装飾
   - h2タグに直接適用
   - inline-block（タイトルの幅に合わせる）
   - border-b-4（下線太さ4px）
   - border-blue-600（下線色: 青）
   - pb-2（パディング下8px：テキストと下線の間隔）
   - text-center（親要素で中央揃え）

## 実装パターン
\`\`\`jsx
// パターン1: div要素で実装（固定幅）
<div className="flex flex-col items-center">
  <h1 className="text-5xl font-bold mb-4">COMPANY</h1>
  <div className="h-1 w-20 bg-white mb-6"></div>
  <p className="text-xl">会社情報</p>
</div>

// パターン2: border-bottomで実装（タイトル幅に合わせる）
<div className="text-center">
  <h2 className="text-3xl font-bold text-blue-900 inline-block border-b-4 border-blue-600 pb-2">
    企業理念
  </h2>
</div>

// パターン3: 左寄せの下線
<h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 pb-2">
  タイトル
</h2>

// パターン4: 下線の太さを変える
<h2 className="text-3xl font-bold inline-block border-b-2 border-blue-600 pb-2">
  タイトル
</h2>

// パターン5: グラデーション下線
<h2 className="text-3xl font-bold inline-block border-b-4 border-gradient-to-r from-blue-600 to-blue-400 pb-2">
  タイトル
</h2>
\`\`\`

## 下線の太さ
- border-b（1px）
- border-b-2（2px）
- border-b-4（4px）
- border-b-8（8px）

## デザインのポイント
- inline-blockでタイトルの幅に合わせた下線を実現
- pb-2〜pb-4でテキストと下線の間隔を調整
- 中央揃え（text-center）と組み合わせることで、美しい配置
- 色は border-{color} で指定
- ヒーローセクションでは固定幅のdiv要素、セクションタイトルではborder-bottomを使い分け
- 視覚的なアクセントとして、セクションの重要性を強調`,
    preview: `<div class="flex flex-col items-center space-y-8">
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-4">COMPANY</h1>
    <div class="h-1 w-20 bg-blue-600"></div>
  </div>
  <div class="text-center">
    <h2 class="text-3xl font-bold text-blue-900 inline-block border-b-4 border-blue-600 pb-2">
      企業理念
    </h2>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'numbered-card-list',
    title: '番号付きカードリスト - 円形バッジで順序を表示',
    category: 'UIコンポーネント',
    description: 'リスト項目を番号付きカードで表示。円形の番号バッジとテキストを組み合わせたデザインで、順序と内容を視覚的に明確化。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/product/page.tsx'
    ],
    code: `const vehicles = [
  'エントリーカー',
  'アルファード',
  'ヴェルファイア',
  'ヴォクシー',
  'ノア'
]

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {vehicles.map((vehicle, index) => (
    <div
      key={vehicle}
      className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
          {index + 1}
        </div>
        <span className="text-lg font-semibold text-gray-800">
          {vehicle}
        </span>
      </div>
    </div>
  ))}
</div>`,
    prompt: `番号付きカードリストを実装してください。

## 要件
1. グリッドレイアウト
   - grid md:grid-cols-2 lg:grid-cols-3
   - モバイル: 縦積み（1列）
   - タブレット: 2列（md:grid-cols-2）
   - デスクトップ: 3列（lg:grid-cols-3）
   - gap-6（カード間余白24px）

2. カードデザイン
   - bg-gradient-to-br from-blue-50 to-white（グラデーション背景）
   - rounded-xl（角丸12px）
   - p-6（内側余白24px）
   - border-2 border-blue-100（枠線2px、淡い青）
   - hover:border-blue-300（ホバー時：濃い青）
   - transition-all duration-300（滑らかなアニメーション）
   - hover:shadow-md（ホバー時：影を追加）

3. 番号バッジ
   - w-10 h-10（40px × 40px）
   - rounded-full（完全な円形）
   - bg-blue-600（青背景）
   - text-white（白文字）
   - flex items-center justify-center（中央揃え）
   - font-bold（太字）
   - mr-4（右マージン16px）
   - {index + 1}で番号を表示

4. テキスト
   - text-lg（18px）
   - font-semibold（中太）
   - text-gray-800（ダークグレー）

5. レイアウト
   - flex items-center（番号とテキストを横並び）

## 実装パターン
\`\`\`jsx
// パターン1: 基本的な番号付きカード
const items = ['項目1', '項目2', '項目3', '項目4', '項目5']

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <div key={item} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-md">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
          {index + 1}
        </div>
        <span className="text-lg font-semibold text-gray-800">{item}</span>
      </div>
    </div>
  ))}
</div>

// パターン2: 緑色のバッジ
<div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mr-4">
  {index + 1}
</div>

// パターン3: 大きなバッジ
<div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mr-4">
  {index + 1}
</div>

// パターン4: 縦並びレイアウト
<div className="grid grid-cols-1 gap-4">
  {items.map((item, index) => (
    <div key={item} className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300">
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-3">
        {index + 1}
      </div>
      <span className="text-base font-medium text-gray-800">{item}</span>
    </div>
  ))}
</div>

// パターン5: アイコン付き
<div className="flex items-center">
  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
    {index + 1}
  </div>
  <div className="flex-1">
    <span className="text-lg font-semibold text-gray-800">{item.title}</span>
    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
  </div>
</div>
\`\`\`

## デザインのポイント
- 円形バッジで番号を視覚的に強調
- グラデーション背景で柔らかい印象
- ホバーエフェクトでインタラクティブ性を向上
- 枠線の色変化で、ユーザーの注目を集める
- レスポンシブ対応で、デバイスに応じて列数を調整
- 番号付きリストよりも視覚的に魅力的
- リストの順序が重要な場合に最適`,
    preview: `<div class="grid grid-cols-2 gap-4">
  <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
    <div class="flex items-center">
      <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
        1
      </div>
      <span class="text-lg font-semibold text-gray-800">アルファード</span>
    </div>
  </div>
  <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
    <div class="flex items-center">
      <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
        2
      </div>
      <span class="text-lg font-semibold text-gray-800">ヴェルファイア</span>
    </div>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'point-number-label',
    title: 'POINTラベル - 装飾的な番号表示',
    category: 'デザイン・ビジュアル',
    description: '「POINT」という小さなテキストと大きな番号を組み合わせたラベル。水色（cyan）で統一され、視覚的に目立つポイント表示。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/manufacturing/page.tsx'
    ],
    code: `<div className="mb-6">
  <span className="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
  <span className="text-cyan-500 font-bold text-5xl ml-2">01</span>
</div>`,
    prompt: `POINTラベルを実装してください。

## 要件
1. ラベルテキスト（POINT）
   - text-cyan-500（水色）
   - font-bold（太字）
   - text-lg（18px）
   - tracking-wider（文字間隔を広く）

2. 番号テキスト（01、02、03...）
   - text-cyan-500（水色、ラベルと同じ色）
   - font-bold（太字）
   - text-5xl（48px、大きく表示）
   - ml-2（左マージン8px、ラベルとの間隔）

3. コンテナ
   - mb-6（下マージン24px、次の要素との間隔）

## 実装パターン
\`\`\`jsx
// パターン1: 基本的なPOINTラベル
<div className="mb-6">
  <span className="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
  <span className="text-cyan-500 font-bold text-5xl ml-2">01</span>
</div>

// パターン2: 青色バージョン
<div className="mb-6">
  <span className="text-blue-600 font-bold text-lg tracking-wider">POINT</span>
  <span className="text-blue-600 font-bold text-5xl ml-2">01</span>
</div>

// パターン3: オレンジ色バージョン
<div className="mb-6">
  <span className="text-orange-500 font-bold text-lg tracking-wider">POINT</span>
  <span className="text-orange-500 font-bold text-5xl ml-2">02</span>
</div>

// パターン4: STEPラベル
<div className="mb-6">
  <span className="text-cyan-500 font-bold text-lg tracking-wider">STEP</span>
  <span className="text-cyan-500 font-bold text-5xl ml-2">01</span>
</div>

// パターン5: 小さいバージョン
<div className="mb-4">
  <span className="text-cyan-500 font-bold text-base tracking-wider">POINT</span>
  <span className="text-cyan-500 font-bold text-4xl ml-2">01</span>
</div>

// パターン6: 縦並びバージョン
<div className="mb-6 flex flex-col">
  <span className="text-cyan-500 font-bold text-sm tracking-widest mb-1">POINT</span>
  <span className="text-cyan-500 font-bold text-6xl">01</span>
</div>

// パターン7: 動的な番号
{points.map((point, index) => (
  <div key={point.id} className="mb-6">
    <span className="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
    <span className="text-cyan-500 font-bold text-5xl ml-2">
      {String(index + 1).padStart(2, '0')}
    </span>
  </div>
))}
\`\`\`

## カラーバリエーション
- text-cyan-500（水色）- 爽やかで、技術的な印象
- text-blue-600（青）- 信頼性、安定感
- text-orange-500（オレンジ）- 活気、注目を集める
- text-green-500（緑）- 成長、環境
- text-purple-500（紫）- 創造性、革新

## テキストサイズのバリエーション
### ラベル部分（POINT）
- text-sm（14px）
- text-base（16px）
- text-lg（18px）

### 番号部分
- text-3xl（30px）
- text-4xl（36px）
- text-5xl（48px）
- text-6xl（60px）

## デザインのポイント
- 2つのspan要素で、サイズと間隔を調整
- tracking-widerでラベルの文字間隔を広げ、視認性を向上
- 大きな番号で視覚的なインパクトを与える
- 同じ色で統一することで、まとまりを持たせる
- ポイントやステップを強調する際に最適
- セクションの冒頭に配置して、内容の構造を明確化`,
    preview: `<div class="flex flex-col space-y-4">
  <div class="mb-6">
    <span class="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
    <span class="text-cyan-500 font-bold text-5xl ml-2">01</span>
  </div>
  <div class="mb-6">
    <span class="text-cyan-500 font-bold text-lg tracking-wider">POINT</span>
    <span class="text-cyan-500 font-bold text-5xl ml-2">02</span>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'category-badge',
    title: 'カテゴリーバッジ - 色分けされたラベル',
    category: 'UIコンポーネント',
    description: 'カテゴリーごとに色分けされた丸型バッジ。ニュースやブログ記事の分類に最適。淡い背景色と濃いテキスト色の組み合わせ。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/news/page.tsx'
    ],
    code: `const getCategoryColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-800'
    case 'green':
      return 'bg-green-100 text-green-800'
    case 'orange':
      return 'bg-orange-100 text-orange-800'
    case 'purple':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

<span className={\`inline-block px-4 py-1 rounded-full text-sm font-semibold \${getCategoryColor(news.categoryColor)}\`}>
  {news.category}
</span>`,
    prompt: `カテゴリーバッジを実装してください。

## 要件
1. 基本スタイル
   - inline-block（インライン要素として配置）
   - px-4 py-1（左右16px、上下4px）
   - rounded-full（完全な丸型）
   - text-sm（14px）
   - font-semibold（中太）

2. カラーバリエーション
   - 淡い背景色（bg-{color}-100）
   - 濃いテキスト色（text-{color}-800）
   - カテゴリーごとに色を変える

3. カラーパターン（例）
   - blue: bg-blue-100 text-blue-800（プレスリリース）
   - green: bg-green-100 text-green-800（お知らせ）
   - orange: bg-orange-100 text-orange-800（イベント）
   - purple: bg-purple-100 text-purple-800（採用）
   - gray: bg-gray-100 text-gray-800（その他）

## 実装パターン
\`\`\`jsx
// パターン1: 関数で色を管理
const getCategoryColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-800'
    case 'green':
      return 'bg-green-100 text-green-800'
    case 'orange':
      return 'bg-orange-100 text-orange-800'
    case 'purple':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

<span className={\`inline-block px-4 py-1 rounded-full text-sm font-semibold \${getCategoryColor(category)}\`}>
  プレスリリース
</span>

// パターン2: 直接指定
<span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
  お知らせ
</span>

// パターン3: 大きいサイズ
<span className="inline-block px-6 py-2 rounded-full text-base font-semibold bg-green-100 text-green-800">
  イベント
</span>

// パターン4: 小さいサイズ
<span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
  採用
</span>

// パターン5: 角丸を控えめに
<span className="inline-block px-4 py-1 rounded-lg text-sm font-semibold bg-purple-100 text-purple-800">
  重要
</span>

// パターン6: 配列で管理
const categories = [
  { name: 'プレスリリース', color: 'bg-blue-100 text-blue-800' },
  { name: 'お知らせ', color: 'bg-green-100 text-green-800' },
  { name: 'イベント', color: 'bg-orange-100 text-orange-800' }
]

{categories.map(cat => (
  <span key={cat.name} className={\`inline-block px-4 py-1 rounded-full text-sm font-semibold \${cat.color}\`}>
    {cat.name}
  </span>
))}
\`\`\`

## カラーバリエーション一覧
### 青系
- bg-blue-50 text-blue-700
- bg-blue-100 text-blue-800
- bg-blue-200 text-blue-900

### 緑系
- bg-green-50 text-green-700
- bg-green-100 text-green-800
- bg-green-200 text-green-900

### オレンジ系
- bg-orange-50 text-orange-700
- bg-orange-100 text-orange-800
- bg-orange-200 text-orange-900

### 紫系
- bg-purple-50 text-purple-700
- bg-purple-100 text-purple-800
- bg-purple-200 text-purple-900

### 赤系
- bg-red-50 text-red-700
- bg-red-100 text-red-800
- bg-red-200 text-red-900

### グレー系
- bg-gray-50 text-gray-700
- bg-gray-100 text-gray-800
- bg-gray-200 text-gray-900

## デザインのポイント
- rounded-fullで柔らかく親しみやすい印象
- 淡い背景色（100番台）と濃いテキスト色（800番台）のコントラストで視認性を確保
- px-4 py-1で適度な内側余白を確保
- カテゴリーごとに色を変えることで、視覚的に区別しやすくなる
- ニュース、ブログ記事、商品カテゴリーなど、様々な分類に活用可能
- 小さなサイズで情報を効率的に伝える`,
    preview: `<div class="flex flex-wrap gap-2">
  <span class="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
    プレスリリース
  </span>
  <span class="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
    お知らせ
  </span>
  <span class="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-800">
    イベント
  </span>
  <span class="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
    採用
  </span>
</div>`,
    relatedTech: []
  },
  {
    slug: 'required-optional-badge',
    title: '必須・任意バッジ - フォームフィールドのラベル',
    category: 'UIコンポーネント',
    description: 'フォームフィールドに必須・任意を示すバッジ。赤色（必須）とグレー（任意）で視覚的に区別。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/contact/page.tsx'
    ],
    code: `{/* 必須バッジ */}
<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
  お名前 <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
</label>

{/* 任意バッジ */}
<label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
  電話番号 <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded ml-2">任意</span>
</label>`,
    prompt: `必須・任意バッジを実装してください。

## 要件
1. 基本スタイル
   - inline-block（インライン要素として配置）
   - px-2 py-1（左右8px、上下4px）
   - text-xs（12px）
   - rounded（角丸4px）
   - ml-2（左マージン8px）

2. 必須バッジ
   - bg-red-100（淡い赤背景）
   - text-red-800（濃い赤テキスト）
   - テキスト: 「必須」

3. 任意バッジ
   - bg-gray-100（淡いグレー背景）
   - text-gray-600（中間グレーテキスト）
   - テキスト: 「任意」

4. ラベルとの組み合わせ
   - labelタグ内にspanタグでバッジを配置
   - ml-2でラベルテキストとの間隔を確保

## 実装パターン
\`\`\`jsx
// パターン1: 必須フィールド
<label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
  メールアドレス <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
</label>
<input
  type="email"
  id="email"
  name="email"
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>

// パターン2: 任意フィールド
<label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
  会社名 <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded ml-2">任意</span>
</label>
<input
  type="text"
  id="company"
  name="company"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>

// パターン3: 英語表記
<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
  Name <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">Required</span>
</label>

// パターン4: コンポーネント化
const RequiredBadge = () => (
  <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
)

const OptionalBadge = () => (
  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded ml-2">任意</span>
)

<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
  お名前 <RequiredBadge />
</label>

// パターン5: 青色で必須を表現（別バリエーション）
<label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
  メール <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded ml-2">必須</span>
</label>

// パターン6: 大きめのバッジ
<label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
  お問い合わせ内容 <span className="inline-block px-3 py-1.5 bg-red-100 text-red-800 text-sm rounded ml-2">必須</span>
</label>
\`\`\`

## カラーバリエーション
### 必須（赤系）
- bg-red-50 text-red-700
- bg-red-100 text-red-800
- bg-red-200 text-red-900

### 任意（グレー系）
- bg-gray-50 text-gray-500
- bg-gray-100 text-gray-600
- bg-gray-200 text-gray-700

### 必須（青系）
- bg-blue-50 text-blue-700
- bg-blue-100 text-blue-800
- bg-blue-200 text-blue-900

### 必須（オレンジ系）
- bg-orange-50 text-orange-700
- bg-orange-100 text-orange-800
- bg-orange-200 text-orange-900

## デザインのポイント
- 赤色で「必須」を強調し、ユーザーの注意を引く
- グレーで「任意」を控えめに表示
- text-xsで小さく表示し、ラベルテキストより目立たないように
- roundedで柔らかい印象を与える
- ml-2でラベルテキストとの適度な間隔を確保
- フォームのユーザビリティ向上に貢献
- 視覚的に必須・任意の区別が明確`,
    preview: `<div class="space-y-3">
  <div class="text-sm font-semibold text-gray-900">
    お名前 <span class="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
  </div>
  <div class="text-sm font-semibold text-gray-900">
    電話番号 <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded ml-2">任意</span>
  </div>
  <div class="text-sm font-semibold text-gray-900">
    メールアドレス <span class="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded ml-2">必須</span>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'triple-slide-carousel-center-focus',
    title: '3スライド同時表示カルーセル - 中央フォーカスデザイン',
    category: 'UIコンポーネント',
    description: '中央に大きなメイン画像を表示し、左右に前後のスライドのサムネイルを同時表示するカルーセルデザイン。ユーザーに次の内容を予告し、インタラクションを促進。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/HeroSection.tsx'
    ],
    code: `'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { image: '/path/to/image1.jpg', title: 'タイトル1', subtitle: 'サブタイトル1' },
  { image: '/path/to/image2.jpg', title: 'タイトル2', subtitle: 'サブタイトル2' },
  { image: '/path/to/image3.jpg', title: 'タイトル3', subtitle: 'サブタイトル3' },
]

export default function TripleSlideCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // 自動再生
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // 3つのスライドインデックスを計算（前、現在、次）
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length
  const nextIndex = (currentSlide + 1) % slides.length

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-gray-100">
      {/* スライドコンテナ */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center gap-4">
          {/* 前のスライド（左） */}
          <div className="hidden md:block w-1/4 opacity-50 transform scale-90 transition-all duration-500">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={slides[prevIndex].image}
                alt={slides[prevIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 現在のスライド（中央） */}
          <div className="w-full md:w-1/2 relative transform scale-100 transition-all duration-500">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black/30" />

              {/* テキストコンテンツ */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight whitespace-pre-line">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed whitespace-pre-line max-w-3xl mx-auto">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 次のスライド（右） */}
          <div className="hidden md:block w-1/4 opacity-50 transform scale-90 transition-all duration-500">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={slides[nextIndex].image}
                alt={slides[nextIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 左ボタン */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors shadow-lg"
        aria-label="前のスライド"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* 右ボタン */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors shadow-lg"
        aria-label="次のスライド"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* インジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={\\\`w-3 h-3 rounded-full transition-colors \\\${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }\\\`}
            aria-label={\\\`スライド \\\${index + 1}\\\`}
          />
        ))}
      </div>
    </section>
  )
}`,
    prompt: `3スライド同時表示カルーセルを実装してください。中央に大きなメイン画像、左右に前後のスライドのサムネイルを表示します。

## 要件

### レイアウト
1. 親コンテナ
   - relative、h-[500px] md:h-[600px] lg:h-[700px]
   - overflow-hidden、bg-gray-100
   - 全幅表示（w-full）

2. スライドコンテナ
   - flexで横並び（flex items-center justify-center）
   - max-w-7xlで最大幅を制限
   - gap-4で間隔を確保

3. スライド配置
   - 前のスライド: w-1/4、opacity-50、scale-90
   - 現在のスライド: w-full md:w-1/2、scale-100
   - 次のスライド: w-1/4、opacity-50、scale-90
   - モバイルでは中央のみ表示（md:block）

### スライド切り替え
1. 3つのインデックスを計算
   - prevIndex: (currentSlide - 1 + slides.length) % slides.length
   - currentSlide: 現在のインデックス
   - nextIndex: (currentSlide + 1) % slides.length

2. 自動再生（5秒間隔）
   - useEffectでsetInterval
   - クリーンアップ関数でclearInterval

3. 手動操作
   - 左右ボタンでスライド切り替え
   - インジケーターで特定のスライドへジャンプ

### デザイン
1. 中央スライド
   - rounded-lgで角を丸く
   - bg-black/30のオーバーレイ
   - 白いテキストを中央配置

2. 左右のスライド
   - opacity-50で半透明
   - scale-90で縮小
   - hidden md:blockでモバイルでは非表示

3. ナビゲーションボタン
   - 円形（w-12 h-12 rounded-full）
   - 青背景（bg-[#2563EB]）
   - ホバー時に濃くなる（hover:bg-[#1E40AF]）
   - shadow-lgで影を追加

4. インジケーター
   - bottom-8で下部に配置
   - 現在のスライドは白（bg-white）
   - その他は半透明（bg-white/50）

### アニメーション
1. スライド切り替え
   - transition-all duration-500
   - transformとopacityが滑らかに変化

2. ホバーエフェクト
   - ボタンのホバー時に色が変わる
   - transition-colorsで滑らかに

### レスポンシブ
1. モバイル（〜md）
   - 中央のスライドのみ表示
   - 左右のスライドは非表示（hidden）
   - ボタンとインジケーターは表示

2. タブレット〜デスクトップ（md〜）
   - 3スライド同時表示
   - 中央が大きく、左右が小さく表示

## デザインのポイント
- 次の内容を予告することで、ユーザーの興味を引く
- 中央にフォーカスを当てつつ、前後のコンテキストを提供
- スライド切り替え時のアニメーションで滑らかな体験を提供
- モバイルでは中央のみ表示し、UXを損なわない`,
    preview: `<div class="relative h-48 bg-gray-100 flex items-center justify-center gap-2 p-4">
  <div class="w-1/4 h-32 bg-gray-300 rounded-lg opacity-50 flex items-center justify-center text-xs text-gray-600">
    前
  </div>
  <div class="w-1/2 h-40 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
    メイン
  </div>
  <div class="w-1/4 h-32 bg-gray-300 rounded-lg opacity-50 flex items-center justify-center text-xs text-gray-600">
    次
  </div>
  <button class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow">
    ‹
  </button>
  <button class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow">
    ›
  </button>
  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
    <div class="w-2 h-2 rounded-full bg-white"></div>
    <div class="w-2 h-2 rounded-full bg-white/50"></div>
    <div class="w-2 h-2 rounded-full bg-white/50"></div>
  </div>
</div>`,
    relatedTech: ['carousel-auto-play', 'slide-fade-in-transition', 'carousel-navigation-buttons', 'carousel-dot-indicators']
  },
  {
    slug: 'background-decorative-overlay-image',
    title: '背景装飾画像 - セクション背景の透かし画像',
    category: 'デザイン・ビジュアル',
    description: 'セクション背景に半透明の装飾画像を配置し、視覚的な深みと立体感を追加。コンテンツの邪魔にならず、ブランドイメージを強化。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CompanySection.tsx'
    ],
    code: `{/* セクション全体をrelativeで包む */}
<section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
  {/* 背景装飾画像 */}
  <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none z-0">
    <Image
      src="/works/tokai-parts-industry/images/decorative/car-3d-model.png"
      alt=""
      fill
      className="object-cover object-left"
    />
  </div>

  {/* コンテンツ（z-10で前面に） */}
  <div className="container mx-auto px-6 relative z-10">
    {/* メインコンテンツ */}
  </div>
</section>`,
    prompt: `セクション背景に装飾的な透かし画像を追加してください。

## 要件
1. セクション全体を \`relative overflow-hidden\` に設定
2. 装飾画像を \`absolute\` で配置
3. 透明度を20%（\`opacity-20\`）に設定
4. \`pointer-events-none\` でクリックイベントを無効化
5. \`z-0\` で背景レイヤーに配置
6. メインコンテンツを \`relative z-10\` で前面に配置

## 実装手順
1. セクションに \`relative overflow-hidden\` を追加

\`\`\`tsx
<section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
\`\`\`

2. 装飾画像用のdivを追加

\`\`\`tsx
<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none z-0">
  <Image
    src="/path/to/decorative-image.png"
    alt=""
    fill
    className="object-cover object-left"
  />
</div>
\`\`\`

3. メインコンテンツに \`relative z-10\` を追加

\`\`\`tsx
<div className="container mx-auto px-6 relative z-10">
  {/* コンテンツ */}
</div>
\`\`\`

## 配置オプション
### 右側配置（例の実装）
- \`right-0\`: 右端に配置
- \`w-1/2\`: 幅50%
- \`object-left\`: 画像を左寄せ

### 左側配置
- \`left-0\`: 左端に配置
- \`w-1/2\`: 幅50%
- \`object-right\`: 画像を右寄せ

### 全体配置
- \`inset-0\`: 全体に配置
- \`w-full h-full\`: 幅・高さ100%
- \`object-center\`: 画像を中央配置

## 透明度の調整
- \`opacity-10\`: 非常に薄い（10%）
- \`opacity-20\`: 薄い（20%）- 推奨
- \`opacity-30\`: やや濃い（30%）
- \`opacity-40\`: 濃い（40%）

## デザインのポイント
- コンテンツの可読性を損なわない透明度に設定
- ブランドイメージに合った装飾画像を選択
- モバイルでは非表示にすることも検討（\`hidden lg:block\`）
- 画像は軽量化して読み込み速度を最適化

## 注意点
- \`pointer-events-none\` を必ず設定（装飾画像がクリックイベントを妨げないように）
- \`alt=""\` を設定（装飾画像のため代替テキスト不要）
- \`overflow-hidden\` で画像がセクション外にはみ出さないように`,
    preview: `<div class="relative h-48 bg-gradient-to-br from-blue-50 via-blue-100/50 to-white overflow-hidden">
  <!-- 装飾画像（右側に車のシルエット） -->
  <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
    <svg class="w-full h-full" viewBox="0 0 200 200" fill="none">
      <!-- 車のシンプルなシルエット -->
      <path d="M50,120 L60,100 L140,100 L150,120 Z" fill="#2563EB"/>
      <ellipse cx="80" cy="120" rx="15" ry="8" fill="#1E40AF"/>
      <ellipse cx="120" cy="120" rx="15" ry="8" fill="#1E40AF"/>
      <rect x="65" y="95" width="70" height="15" rx="3" fill="#2563EB"/>
    </svg>
  </div>

  <!-- メインコンテンツ（前面） -->
  <div class="relative z-10 flex items-center justify-center h-full">
    <div class="bg-white rounded-lg shadow-md p-6 max-w-xs">
      <div class="text-3xl font-bold text-blue-700 mb-2">CONTENT</div>
      <p class="text-sm text-gray-600">装飾画像の上に配置されたコンテンツ</p>
    </div>
  </div>
</div>`,
    relatedTech: ['background-gradient-light-blue', 'two-column-layout-image-card']
  },
  {
    slug: 'alternating-section-layout',
    title: '交互レイアウト - セクションごとに左右を反転',
    category: 'レイアウト・構造',
    description: '連続するセクションで画像とコンテンツの配置を左右反転させ、視覚的なリズムを作り出す。単調さを避け、ユーザーの興味を維持。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CompanySection.tsx',
      '/src/components/works/tokai-parts-industry/ProductSection.tsx',
      '/src/components/works/tokai-parts-industry/ManufacturingSection.tsx'
    ],
    code: `{/* パターン1: 左=画像、右=カード（CompanySection、ManufacturingSection） */}
<section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* 左: 画像 */}
      <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
        <Image src="/path/to/image.jpg" alt="" fill className="object-cover" />
      </div>

      {/* 右: カード */}
      <Card className="p-12 shadow-md">
        <div className="space-y-6">
          <div>
            <p className="text-5xl font-bold text-[#1E40AF] mb-2">CATEGORY</p>
            <h2 className="text-2xl font-bold text-gray-900">タイトル</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">説明文</p>
          <Button variant="primary" size="md">詳しくはこちら</Button>
        </div>
      </Card>
    </div>
  </div>
</section>

{/* パターン2: 左=カード、右=画像（ProductSection） */}
<section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* 左: カード（lg:order-1で順序指定） */}
      <Card className="p-12 shadow-md lg:order-1">
        <div className="space-y-6">
          <div>
            <p className="text-5xl font-bold text-[#1E40AF] mb-2">CATEGORY</p>
            <h2 className="text-2xl font-bold text-gray-900">タイトル</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">説明文</p>
          <Button variant="primary" size="md">詳しくはこちら</Button>
        </div>
      </Card>

      {/* 右: 画像（lg:order-2で順序指定） */}
      <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden lg:order-2">
        <Image src="/path/to/image.jpg" alt="" fill className="object-cover" />
      </div>
    </div>
  </div>
</section>`,
    prompt: `セクションごとに画像とコンテンツの配置を左右反転させる交互レイアウトを実装してください。

## 要件
1. Grid Layoutを使用（\`grid grid-cols-1 lg:grid-cols-2\`）
2. セクションごとに画像とカードの位置を反転
3. モバイルでは常に上から下へ（カード → 画像）の順序
4. デスクトップでは \`lg:order-*\` で順序を制御

## 実装パターン

### パターン1: 左=画像、右=カード（標準配置）
\`\`\`tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* 左: 画像 */}
  <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
    <Image src="/path/to/image.jpg" alt="" fill className="object-cover" />
  </div>

  {/* 右: カード */}
  <Card className="p-12 shadow-md">
    {/* コンテンツ */}
  </Card>
</div>
\`\`\`

### パターン2: 左=カード、右=画像（反転配置）
\`\`\`tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* 左: カード（lg:order-1で明示的に順序指定） */}
  <Card className="p-12 shadow-md lg:order-1">
    {/* コンテンツ */}
  </Card>

  {/* 右: 画像（lg:order-2で明示的に順序指定） */}
  <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden lg:order-2">
    <Image src="/path/to/image.jpg" alt="" fill className="object-cover" />
  </div>
</div>
\`\`\`

## 実装手順

1. **1つ目のセクション（標準配置）**
   - HTMLの記述順: 画像 → カード
   - デスクトップ表示: 左=画像、右=カード
   - モバイル表示: 上=画像、下=カード

2. **2つ目のセクション（反転配置）**
   - HTMLの記述順: カード → 画像
   - \`lg:order-1\` と \`lg:order-2\` を追加
   - デスクトップ表示: 左=カード、右=画像
   - モバイル表示: 上=カード、下=画像

3. **3つ目のセクション（標準配置に戻す）**
   - 1つ目のセクションと同じパターン

## デザインのポイント

### 視覚的なリズム
- セクションごとに配置を変えることで、単調さを避ける
- スクロール時に視線の動きが左右に移動し、興味を維持
- コンテンツの重要度に応じて配置を選択

### モバイル対応
- モバイルでは常に上から下へ自然な流れ
- カードを先に表示することで、情報を優先
- 画像は補足的な役割として下に配置

### アクセシビリティ
- HTMLの記述順序とビジュアルの順序を考慮
- スクリーンリーダーでの読み上げ順序を配慮
- モバイルでの自然な読み順を維持

## 使用例

\`\`\`tsx
// セクション1（標準）
<CompanySection />     // 左=画像、右=カード

// セクション2（反転）
<ProductSection />     // 左=カード、右=画像

// セクション3（標準）
<ManufacturingSection /> // 左=画像、右=カード
\`\`\`

## 注意点
- \`items-center\` で縦方向の中央揃えを確保
- \`gap-12\` で適切なスペーシング
- モバイルでは \`grid-cols-1\` で縦積み
- デスクトップでは \`lg:grid-cols-2\` で横並び`,
    preview: `<div class="space-y-4 bg-gray-50 p-4">
  <!-- セクション1: 左=画像、右=カード -->
  <div class="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div class="bg-blue-200 rounded flex items-center justify-center h-24 text-xs">
      画像
    </div>
    <div class="bg-white border-2 border-blue-500 rounded flex items-center justify-center h-24 text-xs font-bold">
      カード
    </div>
  </div>

  <!-- セクション2: 左=カード、右=画像（反転） -->
  <div class="grid grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg shadow-sm">
    <div class="bg-white border-2 border-blue-500 rounded flex items-center justify-center h-24 text-xs font-bold">
      カード
    </div>
    <div class="bg-blue-200 rounded flex items-center justify-center h-24 text-xs">
      画像
    </div>
  </div>

  <!-- セクション3: 左=画像、右=カード（標準に戻る） -->
  <div class="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div class="bg-blue-200 rounded flex items-center justify-center h-24 text-xs">
      画像
    </div>
    <div class="bg-white border-2 border-blue-500 rounded flex items-center justify-center h-24 text-xs font-bold">
      カード
    </div>
  </div>

  <div class="text-center text-xs text-gray-600 mt-2">
    セクションごとに左右が交互に反転
  </div>
</div>`,
    relatedTech: ['two-column-layout-image-card', 'background-gradient-light-blue']
  },
  {
    slug: 'split-color-background',
    title: '2色分割背景 - 上下で色を分ける',
    category: 'デザイン・ビジュアル',
    description: 'セクションの背景を上下2色に分割し、視覚的な区切りと立体感を作り出す。単色背景よりもダイナミックで印象的。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/ManufacturingSection.tsx'
    ],
    code: `{/* 方法1: linear-gradientで上下2色に分割（推奨） */}
<section
  className="py-20 relative overflow-hidden"
  style={{
    background: 'linear-gradient(to bottom, #dbeafe 0%, #dbeafe 50%, #ffffff 50%, #ffffff 100%)'
  }}
>
  <div className="container mx-auto px-6 relative z-10">
    {/* コンテンツ */}
  </div>
</section>

{/* 方法2: 擬似要素で背景を2色に分割 */}
<section className="py-20 relative overflow-hidden bg-white">
  {/* 上半分の背景色 */}
  <div className="absolute inset-x-0 top-0 h-1/2 bg-blue-100 z-0"></div>

  {/* コンテンツ */}
  <div className="container mx-auto px-6 relative z-10">
    {/* コンテンツ */}
  </div>
</section>

{/* 方法3: Tailwindのグラデーションで実現（硬い境界線） */}
<section className="py-20 bg-gradient-to-b from-blue-100 from-50% to-white to-50% relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    {/* コンテンツ */}
  </div>
</section>`,
    prompt: `セクションの背景を上下2色に分割する背景デザインを実装してください。

## 要件
1. 背景を上下で明確に2色に分割
2. 境界線は中央（50%の位置）
3. コンテンツは背景の上に表示（\`relative z-10\`）
4. レスポンシブ対応

## 実装方法（3つの選択肢）

### 方法1: linear-gradientで実装（最も柔軟）

\`\`\`tsx
<section
  className="py-20 relative overflow-hidden"
  style={{
    background: 'linear-gradient(to bottom, #dbeafe 0%, #dbeafe 50%, #ffffff 50%, #ffffff 100%)'
  }}
>
  <div className="container mx-auto px-6 relative z-10">
    {/* コンテンツ */}
  </div>
</section>
\`\`\`

**メリット**:
- 正確な50%の位置で色が切り替わる
- 任意の色を使用可能
- パフォーマンスが良い

**デメリット**:
- インラインスタイルを使用する必要がある

### 方法2: 擬似要素で実装

\`\`\`tsx
<section className="py-20 relative overflow-hidden bg-white">
  {/* 上半分の背景色 */}
  <div className="absolute inset-x-0 top-0 h-1/2 bg-blue-100 z-0"></div>

  {/* コンテンツ */}
  <div className="container mx-auto px-6 relative z-10">
    {/* コンテンツ */}
  </div>
</section>
\`\`\`

**メリット**:
- Tailwindのクラスのみで実装可能
- 直感的でわかりやすい

**デメリット**:
- DOM要素が1つ増える

### 方法3: Tailwindのグラデーションで実装

\`\`\`tsx
<section className="py-20 bg-gradient-to-b from-blue-100 from-50% to-white to-50% relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    {/* コンテンツ */}
  </div>
</section>
\`\`\`

**メリット**:
- Tailwindのユーティリティクラスのみ
- 追加のDOM要素不要

**デメリット**:
- ブラウザによって境界線がやや曖昧になる可能性

## 色の組み合わせ例

### パターン1: ブルー + ホワイト（清潔感）
- 上: \`#dbeafe\` (blue-100) または \`#bfdbfe\` (blue-200)
- 下: \`#ffffff\` (white)

### パターン2: グレー + ホワイト（ニュートラル）
- 上: \`#f3f4f6\` (gray-100)
- 下: \`#ffffff\` (white)

### パターン3: グラデーション + ホワイト（ソフト）
- 上: \`linear-gradient(to bottom, #dbeafe, #f0f9ff)\`
- 下: \`#ffffff\` (white)

## デザインのポイント

### 視覚的な効果
- 上下で色を分けることで、セクションに動きと深みを追加
- コンテンツを引き立てる背景として機能
- 単色背景よりも視覚的に興味深い

### レスポンシブ対応
- モバイルでは境界線の位置を調整することも検討
  - デスクトップ: 50%
  - モバイル: 40% または 60%
- 背景装飾画像と組み合わせることも可能

### コンテンツとの調和
- コンテンツが背景の境界線をまたぐ場合は、\`relative z-10\` で前面に配置
- 画像やカードの影が背景に溶け込むように配慮
- 明るい色の組み合わせで可読性を確保

## 実装例（完全版）

\`\`\`tsx
export default function ManufacturingSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #dbeafe 0%, #dbeafe 50%, #ffffff 50%, #ffffff 100%)'
      }}
    >
      {/* 装飾画像（オプション） */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 opacity-20 pointer-events-none z-0">
        <Image src="/decorative.png" alt="" fill className="object-cover" />
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 画像 */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image src="/image.jpg" alt="" fill className="object-cover" />
          </div>

          {/* カード */}
          <Card className="p-12 shadow-md bg-white">
            <h2>タイトル</h2>
            <p>説明文</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
\`\`\`

## 注意点
- \`overflow-hidden\` で背景がセクション外にはみ出さないように
- コンテンツには \`relative z-10\` を設定して前面に配置
- 境界線の位置は \`from-50% to-50%\` で調整可能
- 印刷時の見え方にも配慮（必要に応じて@media print対応）`,
    preview: `<div class="relative h-48 overflow-hidden" style="background: linear-gradient(to bottom, #dbeafe 0%, #dbeafe 50%, #ffffff 50%, #ffffff 100%)">
  <!-- コンテンツエリア -->
  <div class="relative z-10 flex items-center justify-center h-full">
    <div class="grid grid-cols-2 gap-4 w-full max-w-2xl px-4">
      <!-- 左: 画像 -->
      <div class="bg-gray-300 rounded-lg h-32 flex items-center justify-center text-sm text-gray-600 shadow-md">
        画像エリア
      </div>

      <!-- 右: カード -->
      <div class="bg-white rounded-lg p-4 shadow-md">
        <div class="text-lg font-bold text-blue-700 mb-1">TITLE</div>
        <div class="text-xs text-gray-600">背景が上下2色に分かれています</div>
      </div>
    </div>
  </div>

  <!-- 境界線の視覚化 -->
  <div class="absolute left-0 right-0 top-1/2 h-px bg-red-500 opacity-30"></div>

  <!-- ラベル -->
  <div class="absolute top-2 left-2 text-xs text-blue-600 bg-white/80 px-2 py-1 rounded">上半分: ブルー</div>
  <div class="absolute bottom-2 left-2 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">下半分: ホワイト</div>
</div>`,
    relatedTech: ['background-gradient-light-blue', 'background-decorative-overlay-image', 'two-column-layout-image-card']
  },
  {
    slug: 'floating-cards-cross-section',
    title: 'Floating Cards - セクション境界をまたぐカード配置',
    category: 'レイアウト・構造',
    description: 'カードをセクションの境界線をまたいで配置し、視覚的な連続性と立体感を作り出す。負のマージンを使用して実現。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/SustainabilitySection.tsx'
    ],
    code: `{/* パターン1: 上のセクション内でカードを下に突き出す */}
<section className="relative py-32 overflow-visible bg-gradient-to-b from-teal-600 to-blue-600">
  {/* セクション内のコンテンツ */}
  <div className="relative z-10 container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white">SECTION TITLE</h2>
      <p className="text-white">説明文</p>
    </div>

    {/* カードグリッド（下に突き出す） */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-8 shadow-xl">
          {/* カードコンテンツ */}
        </div>
      ))}
    </div>
  </div>
</section>

{/* 次のセクション（背景が白） */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 pt-16">
    {/* 次のセクションのコンテンツ */}
  </div>
</section>

{/* パターン2: 負のマージンで下のセクションに重ねる */}
<section className="relative py-32 bg-gradient-to-b from-teal-600 to-blue-600">
  <div className="relative z-10 container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white">SECTION TITLE</h2>
    </div>
  </div>
</section>

{/* カードグリッド（セクション外に配置し、負のマージンで重ねる） */}
<div className="relative z-20 container mx-auto px-6 -mt-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {items.map((item, index) => (
      <div key={index} className="bg-white rounded-lg p-8 shadow-xl">
        {/* カードコンテンツ */}
      </div>
    ))}
  </div>
</div>

{/* 次のセクション */}
<section className="py-20 bg-white pt-32">
  <div className="container mx-auto px-6">
    {/* コンテンツ */}
  </div>
</section>`,
    prompt: `セクションの境界線をまたいでカードを配置する「Floating Cards」レイアウトを実装してください。

## 要件
1. カードが上のセクションと下のセクションの境界をまたぐ
2. 負のマージンまたはpaddingで配置を調整
3. カードに影（shadow-xl）を追加して浮いている印象を強調
4. z-indexで重なり順を制御

## 実装方法（2つのアプローチ）

### アプローチ1: 上のセクション内で下に突き出す（推奨）

\`\`\`tsx
{/* 上のセクション */}
<section className="relative py-32 overflow-visible bg-blue-600">
  <div className="relative z-10 container mx-auto px-6">
    {/* メインコンテンツ */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white">TITLE</h2>
    </div>

    {/* カードグリッド（下に突き出す） */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <h3>カード1</h3>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <h3>カード2</h3>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <h3>カード3</h3>
      </div>
    </div>
  </div>
</section>

{/* 下のセクション（上部にパディング） */}
<section className="py-20 bg-white pt-32">
  <div className="container mx-auto px-6">
    {/* コンテンツ */}
  </div>
</section>
\`\`\`

**メリット**:
- シンプルで直感的
- セクション内で完結
- レスポンシブ対応が容易

**ポイント**:
- 上のセクションに \`overflow-visible\` を設定
- カードグリッドに \`pb-16\` で下のパディング
- 下のセクションに \`pt-32\` で上のパディング

### アプローチ2: 負のマージンで重ねる

\`\`\`tsx
{/* 上のセクション */}
<section className="relative py-32 bg-blue-600">
  <div className="relative z-10 container mx-auto px-6">
    <div className="text-center">
      <h2 className="text-5xl font-bold text-white">TITLE</h2>
    </div>
  </div>
</section>

{/* カードグリッド（セクション外、負のマージンで配置） */}
<div className="relative z-20 container mx-auto px-6 -mt-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg p-8 shadow-xl">
      <h3>カード1</h3>
    </div>
    <div className="bg-white rounded-lg p-8 shadow-xl">
      <h3>カード2</h3>
    </div>
    <div className="bg-white rounded-lg p-8 shadow-xl">
      <h3>カード3</h3>
    </div>
  </div>
</div>

{/* 下のセクション */}
<section className="py-20 bg-white pt-32">
  <div className="container mx-auto px-6">
    {/* コンテンツ */}
  </div>
</section>
\`\`\`

**メリット**:
- カードをセクション外に配置できる
- より柔軟な配置が可能

**デメリット**:
- DOM構造がやや複雑

**ポイント**:
- カードグリッドに \`-mt-24\` で負のマージン
- カードグリッドに \`z-20\` で前面に配置
- 下のセクションに \`pt-32\` で上のパディング

## マージン・パディングの調整

### 負のマージンの値
- \`-mt-16\`: 小さい重なり（64px）
- \`-mt-24\`: 中程度の重なり（96px）- 推奨
- \`-mt-32\`: 大きい重なり（128px）

### 下のセクションのパディング
- 上のセクションのパディング（pb-16）+ カードの高さの半分
- または負のマージンの絶対値 + 余白
- 例: \`-mt-24\` の場合は \`pt-32\` または \`pt-40\`

## デザインのポイント

### 視覚的な効果
- カードに大きな影（\`shadow-xl\`）を追加して浮遊感を強調
- カードの背景は白で、下のセクションの背景も白にすると自然
- 上のセクションは濃い色（青、緑など）で対比を作る

### レスポンシブ対応
- モバイルでは重なりを小さくすることも検討
  - デスクトップ: \`md:-mt-24\`
  - モバイル: \`-mt-12\`
- カードのグリッドは \`grid-cols-1 md:grid-cols-3\`

### z-indexの管理
- 上のセクション: \`z-10\`
- カードグリッド: \`z-20\`（最前面）
- 下のセクション: z-indexなし（デフォルト）

## 実装例（完全版）

\`\`\`tsx
export default function SustainabilitySection() {
  return (
    <>
      {/* 背景画像付きセクション */}
      <section className="relative py-32 overflow-visible">
        {/* 背景画像 + オーバーレイ */}
        <div className="absolute inset-0">
          <Image src="/bg.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-600/80 to-blue-600/80" />
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">SUSTAINABILITY</h2>
            <p className="text-white">説明文</p>
            <Button variant="outline">詳しくはこちら</Button>
          </div>

          {/* カードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-8 shadow-xl text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 次のセクション */}
      <section className="py-20 bg-white pt-32">
        <div className="container mx-auto px-6">
          {/* コンテンツ */}
        </div>
      </section>
    </>
  )
}
\`\`\`

## 注意点
- \`overflow-visible\` を設定してカードが切れないようにする
- モバイルでのスクロール時にカードが重なりすぎないように調整
- 影の大きさ（\`shadow-xl\`）で浮遊感を表現
- 下のセクションのパディングを十分に取る`,
    preview: `<div class="space-y-0">
  <!-- 上のセクション（青の背景） -->
  <div class="relative h-64 bg-gradient-to-b from-teal-500 to-blue-600 px-4 pt-8 pb-16">
    <div class="text-center text-white">
      <div class="text-2xl font-bold mb-2">SECTION 1</div>
      <div class="text-sm">背景画像付きセクション</div>
    </div>

    <!-- カード（下に突き出す） -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-4 translate-y-1/2">
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-white rounded-lg p-3 shadow-xl text-center">
          <div class="w-8 h-8 mx-auto mb-1 rounded-full bg-blue-100 flex items-center justify-center text-xs">
            1
          </div>
          <div class="text-xs font-bold">カード</div>
        </div>
        <div class="bg-white rounded-lg p-3 shadow-xl text-center">
          <div class="w-8 h-8 mx-auto mb-1 rounded-full bg-blue-100 flex items-center justify-center text-xs">
            2
          </div>
          <div class="text-xs font-bold">カード</div>
        </div>
        <div class="bg-white rounded-lg p-3 shadow-xl text-center">
          <div class="w-8 h-8 mx-auto mb-1 rounded-full bg-blue-100 flex items-center justify-center text-xs">
            3
          </div>
          <div class="text-xs font-bold">カード</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 下のセクション（白の背景） -->
  <div class="h-32 bg-white px-4 pt-16">
    <div class="text-center text-gray-600 text-sm">
      SECTION 2（白い背景）
    </div>
  </div>

  <!-- ラベル -->
  <div class="text-center text-xs text-gray-500 mt-2">
    カードがセクション境界をまたいで配置
  </div>
</div>`,
    relatedTech: ['three-column-icon-cards', 'full-width-background-image-gradient-overlay', 'white-outline-button-overlay']
  },
  {
    slug: 'wave-section-divider',
    title: 'Wave Section Divider - 波形セクション境界',
    category: 'デザイン・ビジュアル',
    description: 'SVGで波形の境界線を作成し、セクション間の遷移を柔らかく自然にする。直線的な境界線よりも視覚的に魅力的。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CTASection.tsx'
    ],
    code: `{/* 方法1: SVG波形を上部に配置 */}
<section className="relative bg-white">
  {/* 波形の境界線（SVG） */}
  <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
        fill="currentColor"
        className="text-white"
      />
    </svg>
  </div>

  {/* セクションコンテンツ */}
  <div className="relative z-10 container mx-auto px-6 pt-24">
    {/* コンテンツ */}
  </div>
</section>

{/* 方法2: SVG波形を下部に配置 */}
<section className="relative bg-blue-600">
  {/* セクションコンテンツ */}
  <div className="relative z-10 container mx-auto px-6 pb-24">
    {/* コンテンツ */}
  </div>

  {/* 波形の境界線（SVG） */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
        fill="currentColor"
        className="text-white"
      />
    </svg>
  </div>
</section>`,
    prompt: `SVGで波形のセクション境界線を実装してください。

## 要件
1. SVGで滑らかな波形を作成
2. セクションの上部または下部に配置
3. レスポンシブ対応（幅100%）
4. 色をTailwindのtext-*で制御

## 実装方法

### 上部に波形を配置

\`\`\`tsx
<section className="relative bg-gray-100">
  {/* 波形の境界線 */}
  <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
        fill="currentColor"
        className="text-white"
      />
    </svg>
  </div>

  {/* コンテンツ（上部にパディング） */}
  <div className="relative z-10 container mx-auto px-6 pt-24">
    <h2>セクションタイトル</h2>
  </div>
</section>
\`\`\`

### 下部に波形を配置

\`\`\`tsx
<section className="relative bg-blue-600">
  {/* コンテンツ（下部にパディング） */}
  <div className="relative z-10 container mx-auto px-6 pb-24">
    <h2 className="text-white">セクションタイトル</h2>
  </div>

  {/* 波形の境界線 */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
        fill="currentColor"
        className="text-white"
      />
    </svg>
  </div>
</section>
\`\`\`

## 波形のパターン

### パターン1: 緩やかな波（推奨）
\`\`\`svg
<path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" />
\`\`\`

### パターン2: 急な波
\`\`\`svg
<path d="M0,32 C180,96 360,96 540,32 C720,96 900,96 1080,32 C1260,96 1380,96 1440,64 L1440,120 L0,120 Z" />
\`\`\`

### パターン3: 大きな1つの波
\`\`\`svg
<path d="M0,96 C360,32 1080,32 1440,96 L1440,120 L0,120 Z" />
\`\`\`

### パターン4: 複数の小さな波
\`\`\`svg
<path d="M0,64 C120,80 240,80 360,64 C480,48 600,48 720,64 C840,80 960,80 1080,64 C1200,48 1320,48 1440,64 L1440,120 L0,120 Z" />
\`\`\`

## SVGの設定

### viewBox
- \`viewBox="0 0 1440 120"\`: 横1440px、縦120pxの座標系
- 横幅は一般的な画面幅の基準値
- 縦幅は波の高さ（調整可能）

### preserveAspectRatio
- \`preserveAspectRatio="none"\`: 画面幅に合わせて伸縮
- これにより、どんな画面幅でもピッタリ収まる

### fill
- \`fill="currentColor"\`: Tailwindのtext-*クラスで色を制御
- 例: \`className="text-white"\` → 白い波
- 例: \`className="text-blue-100"\` → 淡い青の波

## 高さの調整

### SVGの高さクラス
- \`h-8\`: 小さい波（32px）
- \`h-12\`: やや小さい波（48px）
- \`h-16\`: 中程度の波（64px）- 推奨
- \`h-20\`: 大きい波（80px）
- \`h-24\`: とても大きい波（96px）

### レスポンシブな高さ
\`\`\`tsx
<svg className="relative block w-full h-12 md:h-16 lg:h-20">
\`\`\`

## パディングの調整

### 上部に波形がある場合
- セクションのコンテンツに \`pt-20\` 〜 \`pt-32\` を追加
- 波の高さ + 余白分のパディング

### 下部に波形がある場合
- セクションのコンテンツに \`pb-20\` 〜 \`pb-32\` を追加
- 波の高さ + 余白分のパディング

## デザインのポイント

### 視覚的な効果
- 直線的な境界線よりも柔らかい印象
- セクション間の遷移が自然で滑らか
- ブランドイメージに応じて波形のパターンを選択

### 色の組み合わせ
- 波の色 = 前のセクションの背景色
- 例: 白いセクション → 青いセクションの場合
  - 青いセクションの上部に白い波を配置

### レスポンシブ対応
- \`w-full\` で画面幅いっぱいに表示
- \`preserveAspectRatio="none"\` で横方向に伸縮
- モバイルでも波形が崩れない

## 実装例（完全版）

\`\`\`tsx
export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-700">
      {/* 上部の波形 */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CTACard title="RECRUIT" color="orange" />
          <CTACard title="CONTACT" color="blue" />
        </div>
      </div>
    </section>
  )
}
\`\`\`

## 注意点
- \`overflow-hidden\` で余白を削除
- \`leading-none\` で行の高さをリセット
- \`relative block\` でSVGを正しく配置
- z-indexでコンテンツを前面に配置（\`z-10\`）
- 波形の向きは \`rotate-180\` で反転可能`,
    preview: `<div class="space-y-0">
  <!-- 前のセクション（白） -->
  <div class="h-20 bg-white flex items-center justify-center">
    <div class="text-sm text-gray-600">前のセクション（白）</div>
  </div>

  <!-- 波形付きセクション -->
  <div class="relative bg-gradient-to-r from-blue-500 to-blue-600 h-48">
    <!-- 上部の波形 -->
    <div class="absolute top-0 left-0 right-0 overflow-hidden leading-none">
      <svg
        class="relative block w-full h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="white"
        />
      </svg>
    </div>

    <!-- コンテンツ -->
    <div class="relative z-10 flex items-center justify-center h-full pt-8">
      <div class="text-center">
        <div class="text-white font-bold text-lg">波形セクション</div>
        <div class="text-white/80 text-xs mt-1">上部に白い波形の境界線</div>
      </div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="text-center text-xs text-gray-500 bg-gray-50 py-2">
    セクション間を波形で滑らかに遷移
  </div>
</div>`,
    relatedTech: ['two-column-cta-cards', 'full-width-background-image-gradient-overlay']
  },
  {
    slug: 'isometric-illustration-decoration',
    title: 'Isometric Illustration - 3Dアイソメトリックイラスト装飾',
    category: 'デザイン・ビジュアル',
    description: '3Dアイソメトリック風のイラストを背景やセクションに配置し、親しみやすく視覚的に魅力的なデザインを実現。製造業などの硬いイメージを柔らかくする。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* 方法1: 画像として配置 */}
<section className="relative bg-green-400 py-20 overflow-hidden">
  {/* イラスト1: 右上にロボットアーム */}
  <div className="absolute top-20 right-20 w-64 h-64 z-0 opacity-90">
    <Image
      src="/illustrations/robot-arm-isometric.png"
      alt=""
      fill
      className="object-contain"
    />
  </div>

  {/* イラスト2: 左下にスマートフォン */}
  <div className="absolute bottom-20 left-20 w-48 h-48 z-0 opacity-90">
    <Image
      src="/illustrations/smartphone-isometric.png"
      alt=""
      fill
      className="object-contain"
    />
  </div>

  {/* コンテンツ */}
  <div className="relative z-10 container mx-auto px-6">
    <h2 className="text-4xl font-bold text-white">タイトル</h2>
    <p className="text-white">説明文</p>
  </div>
</section>

{/* 方法2: SVGとして直接埋め込み（シンプルなアイコンの場合） */}
<section className="relative bg-blue-100 py-20 overflow-hidden">
  {/* SVGイラスト */}
  <div className="absolute top-10 right-10 w-32 h-32 z-0">
    <svg viewBox="0 0 100 100" fill="none">
      {/* アイソメトリックの立方体の例 */}
      <path d="M50,10 L80,25 L80,55 L50,70 L20,55 L20,25 Z" fill="#60A5FA" />
      <path d="M50,10 L80,25 L50,40 L20,25 Z" fill="#3B82F6" />
      <path d="M50,40 L50,70 L80,55 L80,25 Z" fill="#2563EB" />
    </svg>
  </div>

  {/* コンテンツ */}
  <div className="relative z-10 container mx-auto px-6">
    <h2>タイトル</h2>
  </div>
</section>`,
    prompt: `3Dアイソメトリック風のイラストを背景に配置してください。

## 要件
1. イラストを背景の装飾として配置
2. absolute positioningで自由に配置
3. z-indexでコンテンツの背面に配置
4. 適度な透明度（opacity-90など）で背景になじませる
5. レスポンシブ対応

## 実装方法

### 画像として配置（推奨）

\`\`\`tsx
<section className="relative bg-gradient-to-b from-green-400 to-green-500 py-20 overflow-hidden">
  {/* イラスト1: 右上 */}
  <div className="absolute top-20 right-20 w-64 h-64 z-0 opacity-90 hidden lg:block">
    <Image
      src="/illustrations/robot-arm.png"
      alt=""
      fill
      className="object-contain"
    />
  </div>

  {/* イラスト2: 左下 */}
  <div className="absolute bottom-20 left-20 w-48 h-48 z-0 opacity-90 hidden md:block">
    <Image
      src="/illustrations/smartphone.png"
      alt=""
      fill
      className="object-contain"
    />
  </div>

  {/* イラスト3: 中央右 */}
  <div className="absolute top-1/2 right-10 w-56 h-56 z-0 opacity-80 -translate-y-1/2 hidden xl:block">
    <Image
      src="/illustrations/factory.png"
      alt=""
      fill
      className="object-contain"
    />
  </div>

  {/* コンテンツ */}
  <div className="relative z-10 container mx-auto px-6">
    <h2 className="text-4xl font-bold text-white mb-4">見出し</h2>
    <p className="text-white text-lg">説明文</p>
  </div>
</section>
\`\`\`

### SVGとして埋め込み（シンプルな図形の場合）

\`\`\`tsx
<section className="relative bg-blue-100 py-20 overflow-hidden">
  {/* SVGアイソメトリック図形 */}
  <div className="absolute top-10 right-10 w-40 h-40 z-0 opacity-50">
    <svg viewBox="0 0 100 100" fill="none">
      {/* 立方体の例 */}
      <path d="M50,10 L80,25 L80,55 L50,70 L20,55 L20,25 Z" fill="#60A5FA" opacity="0.8" />
      <path d="M50,10 L80,25 L50,40 L20,25 Z" fill="#3B82F6" opacity="0.9" />
      <path d="M50,40 L50,70 L80,55 L80,25 Z" fill="#2563EB" />
    </svg>
  </div>

  <div className="relative z-10 container mx-auto px-6">
    <h2>タイトル</h2>
  </div>
</section>
\`\`\`

## 配置のポイント

### 位置
- **右上**: \`top-10 right-10\` または \`top-20 right-20\`
- **左下**: \`bottom-10 left-10\` または \`bottom-20 left-20\`
- **中央**: \`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2\`
- **右中央**: \`top-1/2 right-10 -translate-y-1/2\`

### サイズ
- **小**: \`w-32 h-32\` (128px)
- **中**: \`w-48 h-48\` (192px) または \`w-56 h-56\` (224px)
- **大**: \`w-64 h-64\` (256px)

### 透明度
- \`opacity-50\`: 非常に薄い（背景として）
- \`opacity-70\`: やや薄い
- \`opacity-80\`: 少し薄い
- \`opacity-90\`: ほぼ不透明（推奨）

### z-index
- イラスト: \`z-0\` （背景レイヤー）
- コンテンツ: \`z-10\` （前面レイヤー）

## レスポンシブ対応

### モバイルでは非表示
\`\`\`tsx
<div className="hidden lg:block absolute top-20 right-20 w-64 h-64">
  <Image src="/illustration.png" alt="" fill />
</div>
\`\`\`

### モバイルでは小さく表示
\`\`\`tsx
<div className="absolute top-10 right-10 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64">
  <Image src="/illustration.png" alt="" fill />
</div>
\`\`\`

## イラストの種類（アイソメトリック）

### 製造業向け
- ロボットアーム
- 工場の機械
- 製品（自動車部品など）
- 作業者のシルエット

### オフィス・ビジネス向け
- コンピューター
- スマートフォン
- 書類
- グラフ・チャート

### 抽象的な図形
- 立方体
- 円柱
- 階段
- 建物

## デザインのポイント

### 色の選択
- 背景色と調和する色を選ぶ
- 例: 緑の背景 → 青や黄色のイラスト
- 例: 青の背景 → オレンジや白のイラスト

### 配置のバランス
- 1つのセクションに2〜3個のイラスト
- 左右対称ではなく、非対称に配置
- コンテンツを遮らない位置に配置

### アニメーション（オプション）
\`\`\`tsx
<div className="absolute top-20 right-20 w-64 h-64 animate-float">
  <Image src="/illustration.png" alt="" fill />
</div>

{/* Tailwind設定に追加 */}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
}
\`\`\`

## 実装例（完全版）

\`\`\`tsx
export default function RecruitHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-400 via-green-500 to-green-600 py-32 overflow-hidden">
      {/* イラスト装飾 */}
      <div className="absolute top-20 right-20 w-64 h-64 z-0 opacity-90 hidden lg:block">
        <Image
          src="/illustrations/robot-arm-isometric.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-32 left-10 w-48 h-48 z-0 opacity-85 hidden md:block">
        <Image
          src="/illustrations/smartphone-isometric.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-1/3 right-32 w-40 h-40 z-0 opacity-70 hidden xl:block">
        <Image
          src="/illustrations/factory-isometric.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
          世界から信頼される
          <br />
          モノづくりの力
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          100年続く会社を目指して、私たちはチャレンジし続けています。
        </p>
      </div>
    </section>
  )
}
\`\`\`

## 注意点
- \`overflow-hidden\` でイラストがセクション外にはみ出さないように
- \`alt=""\` で装飾画像として扱う
- \`object-contain\` でアスペクト比を維持
- パフォーマンスのため、画像サイズを最適化（WebP推奨）
- モバイルでは非表示または小さく表示して、コンテンツの視認性を確保`,
    preview: `<div class="relative h-64 bg-gradient-to-b from-green-400 to-green-500 overflow-hidden">
  <!-- イラスト装飾（右上） -->
  <div class="absolute top-4 right-4 w-24 h-24 opacity-80">
    <!-- ロボットアームのシンプルな表現 -->
    <svg viewBox="0 0 100 100" class="w-full h-full">
      <!-- アイソメトリックなロボットアーム風 -->
      <rect x="40" y="50" width="20" height="40" fill="#2563EB" transform="skewY(-30)" />
      <rect x="60" y="35" width="15" height="25" fill="#3B82F6" transform="skewY(-30)" />
      <circle cx="70" cy="30" r="8" fill="#60A5FA" />
    </svg>
  </div>

  <!-- イラスト装飾（左下） -->
  <div class="absolute bottom-4 left-4 w-20 h-20 opacity-75">
    <!-- スマートフォン風 -->
    <svg viewBox="0 0 100 100" class="w-full h-full">
      <rect x="30" y="20" width="40" height="60" rx="4" fill="#1E40AF" transform="rotate(-10 50 50)" />
      <rect x="35" y="25" width="30" height="45" fill="#3B82F6" transform="rotate(-10 50 50)" />
    </svg>
  </div>

  <!-- コンテンツ -->
  <div class="relative z-10 flex items-center justify-center h-full">
    <div class="text-center text-white px-4">
      <div class="text-2xl font-bold mb-2">世界から信頼される</div>
      <div class="text-xl font-bold">モノづくりの力</div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="absolute bottom-1 right-1 text-xs text-white/60 bg-black/20 px-2 py-1 rounded">
    3Dイラスト装飾
  </div>
</div>`,
    relatedTech: ['wave-section-divider', 'full-width-background-image-gradient-overlay']
  },
  {
    slug: 'horizontal-scroll-carousel',
    title: '横スクロールカルーセル - 多数のカードを水平スクロール表示',
    category: 'UIコンポーネント',
    description: '複数のカードを横に並べ、スクロールして閲覧できるカルーセル。overflow-x-autoで実現し、モバイルフレンドリーな操作性を提供。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* 横スクロールカルーセル */}
<div className="overflow-x-auto scrollbar-hide">
  <div className="flex gap-6 pb-6">
    {interviews.map((interview) => (
      <Link
        key={interview.id}
        href={\`/recruit/interview/\${interview.id}\`}
        className="group flex-shrink-0 w-80"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-[#4ADE80] to-[#10B981]">
          <div className="relative aspect-[3/4]">
            {/* 背景グラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* ラベル */}
            <div className="absolute top-4 left-4">
              <div className="inline-block px-4 py-2 rounded-lg text-white font-bold bg-[#10B981]">
                Interview {interview.id}
              </div>
            </div>

            {/* テキストコンテンツ */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm mb-1">{interview.year} {interview.name}</p>
              <p className="text-xs mb-3">{interview.dept} {interview.group}</p>
              <p className="text-sm font-medium mb-4 line-clamp-3">
                {interview.title}
              </p>
              <p className="text-[#F97316] text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

{/* Tailwind Config に scrollbar-hide を追加 */}
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

// または、CSSで直接定義
// globals.css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}`,
    prompt: `多数のカードを横にスクロールして表示するカルーセルを実装してください。

## 要件
1. コンテナに overflow-x-auto を設定
2. 内部コンテナに flex を設定し、カードを横並びに
3. 各カードに flex-shrink-0 を設定し、縮小を防ぐ
4. カードの幅を固定（例: w-80）
5. スクロールバーを非表示にする（scrollbar-hide）
6. gap-6 でカード間にスペース
7. pb-6 で下部にパディング（スクロールバーの位置確保）

## 実装手順
1. 外側の div に overflow-x-auto scrollbar-hide を設定
2. 内側の div に flex gap-6 pb-6 を設定
3. 各カードを map で生成し、flex-shrink-0 w-80 を設定
4. scrollbar-hide のスタイルを追加（tailwind-scrollbar-hide プラグインまたは CSS）

## デザインのポイント
- 多数のコンテンツを省スペースで表示できる
- モバイルでのスワイプ操作に対応
- デスクトップではマウスホイールやトラックパッドでスクロール可能
- カードの固定幅で一貫性のあるレイアウト

## 使用例
- インタビューカード一覧
- 製品カード一覧
- ブログ記事一覧
- ポートフォリオ画像一覧

## 注意点
- スクロールバーを完全に非表示にする場合、スクロール可能であることをユーザーに伝える工夫が必要
- カードの数が少ない場合は、グリッドレイアウトの方が適切な場合もある`,
    preview: `<div class="bg-gray-50 p-6 rounded-lg">
  <!-- 横スクロールカルーセル -->
  <div class="overflow-x-auto scrollbar-hide" style="-webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none;">
    <style>
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div class="flex gap-4 pb-4">
      <!-- カード1 -->
      <div class="flex-shrink-0 w-64">
        <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg h-80 relative overflow-hidden">
          <div class="absolute top-3 left-3 bg-green-700 text-white px-3 py-1 rounded-lg text-xs font-bold">
            Interview 01
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p class="text-xs mb-1">2022年入社 K.Mさん</p>
            <p class="text-xs mb-2 opacity-80">製造課 サブ管理</p>
            <p class="text-sm font-medium mb-2 line-clamp-2">
              チームリーダーとして、人をマネジメントする楽しさを実感しています
            </p>
            <p class="text-orange-400 text-xs font-bold">Read more →</p>
          </div>
        </div>
      </div>

      <!-- カード2 -->
      <div class="flex-shrink-0 w-64">
        <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg h-80 relative overflow-hidden">
          <div class="absolute top-3 left-3 bg-blue-800 text-white px-3 py-1 rounded-lg text-xs font-bold">
            Interview 02
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p class="text-xs mb-1">2021年入社 Y.Aさん</p>
            <p class="text-xs mb-2 opacity-80">技術課 プレス技術</p>
            <p class="text-sm font-medium mb-2 line-clamp-2">
              またたまと経験値を上げ、新世代ファイルに魅了されこと
            </p>
            <p class="text-orange-400 text-xs font-bold">Read more →</p>
          </div>
        </div>
      </div>

      <!-- カード3 -->
      <div class="flex-shrink-0 w-64">
        <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg h-80 relative overflow-hidden">
          <div class="absolute top-3 left-3 bg-green-700 text-white px-3 py-1 rounded-lg text-xs font-bold">
            Interview 03
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p class="text-xs mb-1">2019年入社 S.Tさん</p>
            <p class="text-xs mb-2 opacity-80">いなべ工場 工場管理</p>
            <p class="text-sm font-medium mb-2 line-clamp-2">
              アットホームな雰囲気の中で、働けるお疲れを
            </p>
            <p class="text-orange-400 text-xs font-bold">Read more →</p>
          </div>
        </div>
      </div>

      <!-- カード4 -->
      <div class="flex-shrink-0 w-64">
        <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg h-80 relative overflow-hidden">
          <div class="absolute top-3 left-3 bg-blue-800 text-white px-3 py-1 rounded-lg text-xs font-bold">
            Interview 04
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p class="text-xs mb-1">2020年入社 M.Hさん</p>
            <p class="text-xs mb-2 opacity-80">製造課 品質管理</p>
            <p class="text-sm font-medium mb-2 line-clamp-2">
              品質を守る仕事のやりがいを日々感じています
            </p>
            <p class="text-orange-400 text-xs font-bold">Read more →</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="text-center mt-2 text-xs text-gray-500">
    ← 横スクロールできます →
  </div>
</div>`,
    relatedTech: ['carousel-navigation-buttons', 'carousel-dot-indicators']
  },
  {
    slug: 'asymmetric-card-layout',
    title: '非対称カードレイアウト - 画像とテキストを交互に配置',
    category: 'レイアウト・構造',
    description: '複数のカードで画像とテキストの配置を交互に変えるレイアウト。視覚的なリズムを作り出し、単調さを避ける。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* 非対称カードレイアウト */}
<div className="space-y-12">
  {/* カード1: 左に画像、右にテキスト */}
  <div className="flex flex-col lg:flex-row gap-6 items-center">
    {/* 画像エリア */}
    <div className="w-full lg:w-1/2">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/path/to/image1.jpg"
          alt="クロストーク 01"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* テキストエリア */}
    <div className="w-full lg:w-1/2">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <p className="text-[#4ADE80] font-serif italic text-lg mb-2">Crosstalk 01</p>
        <h3 className="text-2xl font-bold text-[#2563EB] mb-4">
          技術部門の先輩・後輩座談会
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <div>
            <p className="font-bold text-lg">N.Tさん</p>
            <p className="text-sm text-gray-600">技術課</p>
            <p className="text-sm text-gray-600">製品設計グループ</p>
          </div>
          <div className="text-[#2563EB] text-2xl">×</div>
          <div>
            <p className="font-bold text-lg">I.Rさん</p>
            <p className="text-sm text-gray-600">技術課</p>
            <p className="text-sm text-gray-600">製品設計グループ</p>
          </div>
        </div>
        <Link
          href="/recruit/crosstalk/01"
          className="text-[#F97316] font-bold flex items-center hover:translate-x-1 transition-transform"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>

  {/* カード2: 左にテキスト、右に画像 */}
  <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
    {/* 画像エリア（flex-row-reverseで右側に） */}
    <div className="w-full lg:w-1/2">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/path/to/image2.jpg"
          alt="クロストーク 02"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* テキストエリア（flex-row-reverseで左側に） */}
    <div className="w-full lg:w-1/2">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <p className="text-[#4ADE80] font-serif italic text-lg mb-2">Crosstalk 02</p>
        <h3 className="text-2xl font-bold text-[#2563EB] mb-4">
          製造部門の上司・部下座談会
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <div>
            <p className="font-bold text-lg">H.Sさん</p>
            <p className="text-sm text-gray-600">いなべ工場</p>
            <p className="text-sm text-gray-600">サブ・管理</p>
          </div>
          <div className="text-[#2563EB] text-2xl">×</div>
          <div>
            <p className="font-bold text-lg">S.Sさん</p>
            <p className="text-sm text-gray-600">いなべ工場</p>
            <p className="text-sm text-gray-600">サブ・管理</p>
          </div>
        </div>
        <Link
          href="/recruit/crosstalk/02"
          className="text-[#F97316] font-bold flex items-center hover:translate-x-1 transition-transform"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>`,
    prompt: `複数のカードで画像とテキストの配置を交互に変える非対称レイアウトを実装してください。

## 要件
1. 複数のカードを縦に配置（space-y-12で間隔を空ける）
2. 奇数番目のカード: flex-row で左に画像、右にテキスト
3. 偶数番目のカード: flex-row-reverse で左にテキスト、右に画像
4. 各カードは lg:w-1/2 で画像とテキストを半々に
5. モバイルでは flex-col で縦積み（画像が上、テキストが下）
6. 画像とテキストエリアに gap-6 でスペース
7. items-center で垂直方向の中央揃え

## 実装手順
1. 外側のコンテナに space-y-12 を設定（カード間のスペース）
2. 奇数番目のカードに flex flex-col lg:flex-row を設定
3. 偶数番目のカードに flex flex-col lg:flex-row-reverse を設定
4. 画像エリアとテキストエリアに w-full lg:w-1/2 を設定
5. gap-6 と items-center を追加

## デザインのポイント
- 交互配置で視覚的なリズムを作り出す
- 単調さを避け、ページに動きを与える
- モバイルでは常に画像が上、テキストが下の統一されたレイアウト
- 大きな画像とテキストが対等な存在感を持つ

## 使用例
- 対談・クロストーク記事一覧
- 製品紹介ページ（画像と説明）
- サービス紹介ページ
- チーム紹介ページ

## 注意点
- flex-row-reverse は画像とテキストの順序を入れ替えるが、HTML上の順序は変わらない
- アクセシビリティのため、HTML上の順序は意味のある順序を保つ
- 3つ以上のカードがある場合は、奇数・偶数を判定してクラスを切り替える`,
    preview: `<div class="bg-gray-50 p-6 rounded-lg space-y-8">
  <!-- カード1: 左に画像、右にテキスト -->
  <div class="flex flex-col lg:flex-row gap-4 items-center">
    <!-- 画像エリア -->
    <div class="w-full lg:w-1/2">
      <div class="bg-blue-500 rounded-xl h-40 flex items-center justify-center text-white font-bold shadow-lg">
        画像エリア 1
      </div>
    </div>
    <!-- テキストエリア -->
    <div class="w-full lg:w-1/2">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <p class="text-green-500 italic text-sm mb-1">Crosstalk 01</p>
        <h3 class="text-lg font-bold text-blue-600 mb-2">
          技術部門の座談会
        </h3>
        <div class="flex items-center gap-2 text-xs mb-3">
          <div>
            <p class="font-bold">N.Tさん</p>
            <p class="text-gray-600">技術課</p>
          </div>
          <div class="text-blue-600 font-bold">×</div>
          <div>
            <p class="font-bold">I.Rさん</p>
            <p class="text-gray-600">技術課</p>
          </div>
        </div>
        <p class="text-orange-500 text-xs font-bold">Read more →</p>
      </div>
    </div>
  </div>

  <!-- カード2: 左にテキスト、右に画像 -->
  <div class="flex flex-col lg:flex-row-reverse gap-4 items-center">
    <!-- 画像エリア -->
    <div class="w-full lg:w-1/2">
      <div class="bg-green-500 rounded-xl h-40 flex items-center justify-center text-white font-bold shadow-lg">
        画像エリア 2
      </div>
    </div>
    <!-- テキストエリア -->
    <div class="w-full lg:w-1/2">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <p class="text-green-500 italic text-sm mb-1">Crosstalk 02</p>
        <h3 class="text-lg font-bold text-blue-600 mb-2">
          製造部門の座談会
        </h3>
        <div class="flex items-center gap-2 text-xs mb-3">
          <div>
            <p class="font-bold">H.Sさん</p>
            <p class="text-gray-600">いなべ工場</p>
          </div>
          <div class="text-blue-600 font-bold">×</div>
          <div>
            <p class="font-bold">S.Sさん</p>
            <p class="text-gray-600">いなべ工場</p>
          </div>
        </div>
        <p class="text-orange-500 text-xs font-bold">Read more →</p>
      </div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="text-center text-xs text-gray-500 pt-2">
    交互に配置が変わります
  </div>
</div>`,
    relatedTech: ['two-column-layout-image-card', 'floating-cards']
  },
  {
    slug: 'color-overlay-image-cards',
    title: 'カラーオーバーレイ付き画像カード - 色で雰囲気を変える',
    category: 'デザイン・ビジュアル',
    description: '背景画像の上に半透明の色を重ねることで、異なる雰囲気を作り出す。カード毎に異なる色を使い、視覚的な区別を明確にする。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* カラーオーバーレイ付き画像カード */}
<div className="grid md:grid-cols-3 gap-6">
  {/* カード1: 緑系オーバーレイ */}
  <Link
    href="/data"
    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
  >
    {/* 背景画像 */}
    <Image
      src="/images/factory-data.jpg"
      alt="DATA"
      fill
      className="object-cover"
    />
    {/* カラーオーバーレイ（緑系） */}
    <div className="absolute inset-0 bg-[#14B8A6]/60 group-hover:bg-[#14B8A6]/70 transition-colors"></div>

    {/* コンテンツ */}
    <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
      <BarChart3 className="w-16 h-16 mb-4" />
      <p className="text-lg font-semibold mb-2">DATA</p>
      <h3 className="text-xl font-bold text-center">数字で見る企業名</h3>
    </div>
  </Link>

  {/* カード2: 青緑系オーバーレイ */}
  <Link
    href="/flow"
    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
  >
    <Image
      src="/images/factory-flow.jpg"
      alt="FLOW"
      fill
      className="object-cover"
    />
    {/* カラーオーバーレイ（青緑系） */}
    <div className="absolute inset-0 bg-[#0891B2]/60 group-hover:bg-[#0891B2]/70 transition-colors"></div>

    <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
      <Car className="w-16 h-16 mb-4" />
      <p className="text-lg font-semibold mb-2">FLOW</p>
      <h3 className="text-xl font-bold text-center">企業名 工場見学</h3>
    </div>
  </Link>

  {/* カード3: 青紫系オーバーレイ */}
  <Link
    href="/qa"
    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
  >
    <Image
      src="/images/factory-qa.jpg"
      alt="Q&A"
      fill
      className="object-cover"
    />
    {/* カラーオーバーレイ（青紫系） */}
    <div className="absolute inset-0 bg-[#6366F1]/60 group-hover:bg-[#6366F1]/70 transition-colors"></div>

    <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
      <MessageCircle className="w-16 h-16 mb-4" />
      <p className="text-lg font-semibold mb-2">Q&A</p>
      <h3 className="text-xl font-bold text-center">若手社員アンケート</h3>
    </div>
  </Link>
</div>`,
    prompt: `背景画像の上に半透明の色を重ねたカードを実装してください。

## 要件
1. 背景画像を配置（Image コンポーネントで fill）
2. 半透明のカラーオーバーレイを配置（bg-[color]/60）
3. カード毎に異なる色を使用（緑系、青緑系、青紫系など）
4. ホバー時にオーバーレイの透明度を変更（/60 → /70）
5. コンテンツは relative で最前面に配置
6. テキストは白色で視認性を確保

## 実装手順
1. relative なコンテナを作成
2. 背景画像を absolute で配置（fill、object-cover）
3. カラーオーバーレイを absolute で配置（bg-[color]/60）
4. コンテンツを relative で配置（z-indexは不要、HTMLの順序で制御）
5. ホバーエフェクトを追加（group-hover:bg-[color]/70）

## デザインのポイント
- 異なる色のオーバーレイで視覚的な区別を明確にする
- 透明度は60-70%が適切（画像が見えつつ、テキストも読める）
- ホバー時に透明度を上げることでインタラクティブ性を表現
- 白いテキストとアイコンで統一感を出す

## 色の選び方
- **緑系（#14B8A6）**: 自然、環境、成長
- **青緑系（#0891B2）**: 信頼、技術、製造
- **青紫系（#6366F1）**: 革新、知識、コミュニケーション
- **オレンジ系（#F97316）**: 活力、情熱、挑戦

## 使用例
- カテゴリー別のナビゲーションカード
- 製品ラインナップの紹介
- サービスメニューの表示
- コンテンツセクションの案内

## 注意点
- 背景画像は適切な明度・コントラストのものを選ぶ
- オーバーレイの色と画像の色が調和するようにする
- テキストの可読性を最優先に考える`,
    preview: `<div class="bg-gray-100 p-6 rounded-lg">
  <div class="grid md:grid-cols-3 gap-4">
    <!-- カード1: 緑系 -->
    <div class="relative aspect-video rounded-xl overflow-hidden shadow-lg">
      <!-- 背景（グレー = 画像のプレースホルダー） -->
      <div class="absolute inset-0 bg-gray-400"></div>
      <!-- カラーオーバーレイ（緑系） -->
      <div class="absolute inset-0 bg-teal-500 opacity-60"></div>
      <!-- コンテンツ -->
      <div class="relative h-full flex flex-col items-center justify-center text-white p-4">
        <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <p class="text-sm font-semibold mb-1">DATA</p>
        <p class="text-xs text-center font-bold">数字で見る</p>
      </div>
    </div>

    <!-- カード2: 青緑系 -->
    <div class="relative aspect-video rounded-xl overflow-hidden shadow-lg">
      <div class="absolute inset-0 bg-gray-400"></div>
      <!-- カラーオーバーレイ（青緑系） -->
      <div class="absolute inset-0 bg-cyan-600 opacity-60"></div>
      <div class="relative h-full flex flex-col items-center justify-center text-white p-4">
        <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <p class="text-sm font-semibold mb-1">FLOW</p>
        <p class="text-xs text-center font-bold">工場見学</p>
      </div>
    </div>

    <!-- カード3: 青紫系 -->
    <div class="relative aspect-video rounded-xl overflow-hidden shadow-lg">
      <div class="absolute inset-0 bg-gray-400"></div>
      <!-- カラーオーバーレイ（青紫系） -->
      <div class="absolute inset-0 bg-indigo-500 opacity-60"></div>
      <div class="relative h-full flex flex-col items-center justify-center text-white p-4">
        <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <p class="text-sm font-semibold mb-1">Q&A</p>
        <p class="text-xs text-center font-bold">アンケート</p>
      </div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="text-center mt-3 text-xs text-gray-500">
    異なる色のオーバーレイで区別
  </div>
</div>`,
    relatedTech: ['full-width-background-image-gradient-overlay', 'hero-text-overlay-centered']
  },
  {
    slug: 'split-hero-image',
    title: '分割ヒーロー画像 - 左右で異なる画像を表示',
    category: 'デザイン・ビジュアル',
    description: '左右で異なる背景画像を使用し、中央にテキストを配置するヒーローセクション。視覚的なコントラストと物語性を作り出す。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx'
    ],
    code: `{/* 分割ヒーロー画像 */}
<section className="relative h-[500px] md:h-[600px] overflow-hidden">
  <div className="absolute inset-0 flex">
    {/* 左側の画像 */}
    <div className="w-1/2 relative">
      <Image
        src="/images/crosstalk-left.jpg"
        alt="技術部門の社員"
        fill
        className="object-cover"
        priority
      />
      {/* 青系のオーバーレイ（オプション） */}
      <div className="absolute inset-0 bg-[#2563EB]/20"></div>
    </div>

    {/* 右側の画像 */}
    <div className="w-1/2 relative">
      <Image
        src="/images/crosstalk-right.jpg"
        alt="製造部門の社員"
        fill
        className="object-cover"
        priority
      />
      {/* 緑系のオーバーレイ */}
      <div className="absolute inset-0 bg-[#4ADE80]/30"></div>
    </div>
  </div>

  {/* 中央のテキストコンテンツ */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white z-10">
      <p className="font-serif italic text-4xl md:text-5xl mb-3 drop-shadow-lg">
        Crosstalk
      </p>
      <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
        クロストーク
      </h1>
    </div>
  </div>

  {/* 中央の境界線（オプション） */}
  <div className="absolute inset-y-0 left-1/2 w-px bg-white/30"></div>
</section>`,
    prompt: `左右で異なる背景画像を使用する分割ヒーローセクションを実装してください。

## 要件
1. 外側のコンテナに relative と固定高さ（h-[500px] md:h-[600px]）
2. flex で左右を等分（w-1/2）
3. 各側に Image コンポーネントで背景画像を配置
4. 各側に異なる色のオーバーレイを配置（オプション）
5. 中央にテキストを absolute で配置
6. 中央に境界線を追加（オプション）

## 実装手順
1. relative なセクションコンテナを作成
2. absolute で flex コンテナを配置（左右分割用）
3. 左側（w-1/2）に画像とオーバーレイを配置
4. 右側（w-1/2）に画像とオーバーレイを配置
5. absolute で中央にテキストコンテンツを配置（z-10）
6. オプションで中央に境界線を追加（left-1/2、w-px）

## デザインのポイント
- 左右で異なるシーンや部門を表現できる
- カラーオーバーレイで視覚的な統一感を出す
- 中央のテキストが両側の画像をつなぐ役割
- drop-shadow-lg でテキストの視認性を確保

## 使用例
- 対談・クロストークページのヒーロー
- Before/After の比較
- 異なる部門・チームの紹介
- 製品の新旧比較

## レスポンシブ対応
- モバイルでは上下に配置（flex-col）に変更可能
- 各画像の object-position で表示位置を調整
- テキストサイズを画面サイズに応じて調整

## 注意点
- 左右の画像は明度が近いものを選ぶと統一感が出る
- テキストの視認性を確保するため、オーバーレイや影を活用
- 境界線は必須ではないが、あると分割感が強調される`,
    preview: `<div class="bg-gray-100 p-6 rounded-lg">
  <!-- 分割ヒーロー画像 -->
  <div class="relative h-64 overflow-hidden rounded-xl shadow-lg">
    <!-- 左右の画像 -->
    <div class="absolute inset-0 flex">
      <!-- 左側 -->
      <div class="w-1/2 relative">
        <!-- 背景（グレー = 画像のプレースホルダー） -->
        <div class="absolute inset-0 bg-gray-500"></div>
        <!-- 青系オーバーレイ -->
        <div class="absolute inset-0 bg-blue-600 opacity-20"></div>
      </div>

      <!-- 右側 -->
      <div class="w-1/2 relative">
        <!-- 背景（グレー = 画像のプレースホルダー） -->
        <div class="absolute inset-0 bg-gray-600"></div>
        <!-- 緑系オーバーレイ -->
        <div class="absolute inset-0 bg-green-500 opacity-30"></div>
      </div>
    </div>

    <!-- 中央のテキスト -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div class="text-center text-white">
        <p class="italic text-2xl mb-1" style="font-family: serif; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">
          Crosstalk
        </p>
        <h1 class="text-3xl font-bold" style="text-shadow: 0 2px 8px rgba(0,0,0,0.5);">
          クロストーク
        </h1>
      </div>
    </div>

    <!-- 中央の境界線 -->
    <div class="absolute inset-y-0 left-1/2 w-px bg-white opacity-30"></div>
  </div>

  <!-- ラベル -->
  <div class="text-center mt-3 text-xs text-gray-500">
    左右で異なる背景画像
  </div>
</div>`,
    relatedTech: ['hero-text-overlay-centered', 'color-overlay-image-cards', 'full-width-background-image-gradient-overlay']
  },
  {
    slug: 'chat-style-dialogue-layout',
    title: 'チャット形式の対談レイアウト - 会話の流れを視覚化',
    category: 'UIコンポーネント',
    description: '円形のアバター画像と吹き出し型のコメントボックスを左右交互に配置し、対談や会話の流れを視覚的に表現する。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx'
    ],
    code: `{/* チャット形式の対談レイアウト */}
<div className="space-y-12 py-12">
  {dialogue.map((item, index) => {
    const isLeft = index % 2 === 0

    return (
      <div
        key={index}
        className={\`flex \${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-6 items-start max-w-4xl mx-auto\`}
      >
        {/* アバター画像 */}
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src={item.avatar}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <p className="text-center text-sm font-bold mt-2">{item.name}</p>
        </div>

        {/* コメントボックス */}
        <div className={\`flex-1 \${isLeft ? 'text-left' : 'text-right'}\`}>
          <div className={\`inline-block bg-white rounded-2xl shadow-lg p-6 \${
            isLeft ? 'rounded-tl-none' : 'rounded-tr-none'
          }\`}>
            <p className="text-gray-700 leading-relaxed">{item.comment}</p>
          </div>
        </div>
      </div>
    )
  })}
</div>`,
    prompt: `対談や会話の流れを視覚的に表現するチャット形式のレイアウトを実装してください。

## 要件
1. 各発言を左右交互に配置（奇数番目=左、偶数番目=右）
2. アバター画像は円形（rounded-full）で border と shadow を追加
3. コメントボックスは吹き出し風（片側の角を削除）
4. 左側の場合：flex-row、rounded-tl-none（左上の角なし）
5. 右側の場合：flex-row-reverse、rounded-tr-none（右上の角なし）
6. アバターの下に名前を表示
7. space-y-12 で発言間にスペース

## 実装手順
1. 外側のコンテナに space-y-12 を設定
2. 各発言をループで表示
3. index % 2 で奇数・偶数を判定
4. 奇数番目：flex-row、アバターが左、コメントが右
5. 偶数番目：flex-row-reverse、アバターが右、コメントが左
6. アバター画像に rounded-full、border-4、shadow-lg
7. コメントボックスに rounded-2xl、吹き出し風に角を削除

## デザインのポイント
- 会話の流れが一目で分かる
- アバターで誰が話しているか明確
- 吹き出し風の角削除で会話感を演出
- 白いコメントボックスで読みやすさを確保
- 影で立体感を出す

## 使用例
- 対談・クロストークページ
- インタビュー記事
- Q&Aページ
- チャット履歴の表示
- ユーザーレビューの表示

## バリエーション
- アバターのサイズを変える（w-16、w-20、w-24など）
- コメントボックスの色を変える（bg-blue-50、bg-green-50など）
- アバターの位置を固定（常に左側など）
- タイムスタンプや日付を追加

## 注意点
- アバター画像は正方形で高品質なものを使用
- コメントが長い場合も見やすいように padding を調整
- モバイルでも見やすいように gap を適切に設定`,
    preview: `<div class="bg-green-50 p-6 rounded-lg space-y-8">
  <!-- 発言1: 左側 -->
  <div class="flex flex-row gap-4 items-start">
    <!-- アバター -->
    <div class="flex-shrink-0 text-center">
      <div class="w-16 h-16 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
        N.T
      </div>
      <p class="text-xs font-bold mt-1">N.Tさん</p>
    </div>
    <!-- コメント -->
    <div class="flex-1">
      <div class="inline-block bg-white rounded-2xl rounded-tl-none shadow-lg p-4">
        <p class="text-sm text-gray-700">
          親会社名の一員として仕事をしている部署です。
        </p>
      </div>
    </div>
  </div>

  <!-- 発言2: 右側 -->
  <div class="flex flex-row-reverse gap-4 items-start">
    <!-- アバター -->
    <div class="flex-shrink-0 text-center">
      <div class="w-16 h-16 rounded-full bg-orange-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
        M.R
      </div>
      <p class="text-xs font-bold mt-1">M.Rさん</p>
    </div>
    <!-- コメント -->
    <div class="flex-1 text-right">
      <div class="inline-block bg-white rounded-2xl rounded-tr-none shadow-lg p-4">
        <p class="text-sm text-gray-700">
          そうですね、協力体制がしっかりしているところが強みです。
        </p>
      </div>
    </div>
  </div>

  <!-- 発言3: 左側 -->
  <div class="flex flex-row gap-4 items-start">
    <!-- アバター -->
    <div class="flex-shrink-0 text-center">
      <div class="w-16 h-16 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
        I.R
      </div>
      <p class="text-xs font-bold mt-1">I.Rさん</p>
    </div>
    <!-- コメント -->
    <div class="flex-1">
      <div class="inline-block bg-white rounded-2xl rounded-tl-none shadow-lg p-4">
        <p class="text-sm text-gray-700">
          技術の仕事ではパソコン作業で在宅勤務も多いです。
        </p>
      </div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="text-center text-xs text-gray-500 pt-2">
    左右交互に配置される対談形式
  </div>
</div>`,
    relatedTech: ['asymmetric-card-layout', 'two-column-layout-image-card']
  },
  {
    slug: 'section-divider-with-background-gradient',
    title: '背景色グラデーションによるセクション区切り - 色で流れを作る',
    category: 'デザイン・ビジュアル',
    description: 'ページ内の複数セクションで背景色を微妙に変化させ、視覚的な区切りと流れを作り出す。境界線なしで自然な区切りを実現。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx'
    ],
    code: `{/* 背景色グラデーションによるセクション区切り */}
<div>
  {/* セクション1: 薄い緑 */}
  <section className="bg-[#F0FDF4] py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#2563EB] text-center mb-12">
        部品技術グループの強みはどんなところでしょうか？
      </h2>

      {/* コンテンツ */}
      <div className="space-y-12">
        {/* チャット形式の対談内容 */}
      </div>
    </div>
  </section>

  {/* セクション2: 少し濃い緑 */}
  <section className="bg-[#DCFCE7] py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#2563EB] text-center mb-12">
        皆さんが仕事をする上で意識していることは何ですか？
      </h2>

      {/* コンテンツ */}
      <div className="space-y-12">
        {/* チャット形式の対談内容 */}
      </div>
    </div>
  </section>

  {/* セクション3: さらに濃い緑 */}
  <section className="bg-[#BBF7D0] py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#2563EB] text-center mb-12">
        今後の目標を教えてください
      </h2>

      {/* コンテンツ */}
      <div className="space-y-12">
        {/* チャット形式の対談内容 */}
      </div>
    </div>
  </section>
</div>`,
    prompt: `複数のセクションで背景色を段階的に変化させ、視覚的な区切りと流れを作るレイアウトを実装してください。

## 要件
1. 各セクションに異なる背景色を設定（同系色で濃淡を変える）
2. セクション間に境界線は不要（色の変化で自然に区切る）
3. py-16 で上下に十分なパディング
4. セクションタイトルを中央配置
5. 色は薄い→濃いへと段階的に変化

## 実装手順
1. 各セクションに section タグを使用
2. 背景色を bg-[color] で設定（薄→濃）
3. py-16 で上下のパディング
4. max-w-6xl mx-auto でコンテンツを中央寄せ
5. セクションタイトルは text-center で中央配置

## デザインのポイント
- 境界線がないため、柔らかく自然な印象
- 同系色の濃淡で統一感を保つ
- 段階的な変化でページの流れを作る
- 各セクションが独立しつつ、全体として調和

## 色の選び方
**緑系グラデーション（自然、成長、環境）**
- 薄い: #F0FDF4 (green-50)
- 中間: #DCFCE7 (green-100)
- 濃い: #BBF7D0 (green-200)

**青系グラデーション（信頼、技術、冷静）**
- 薄い: #EFF6FF (blue-50)
- 中間: #DBEAFE (blue-100)
- 濃い: #BFDBFE (blue-200)

**オレンジ系グラデーション（活力、情熱、温かみ）**
- 薄い: #FFF7ED (orange-50)
- 中間: #FFEDD5 (orange-100)
- 濃い: #FED7AA (orange-200)

## 使用例
- Q&Aセクション（複数の質問を区切る）
- 対談・インタビューページ
- ステップバイステップのガイド
- 複数のトピックを含むページ

## バリエーション
- 逆グラデーション（濃い→薄い）
- 交互配色（A-B-A-Bパターン）
- 3色以上のグラデーション
- 上下グラデーション（linear-gradient）

## 注意点
- テキストの可読性を確保（背景が濃い場合はテキストを白に）
- 色の変化は段階的に（急激な変化は避ける）
- 全体のページデザインと調和する色を選ぶ`,
    preview: `<div class="rounded-lg overflow-hidden shadow-lg">
  <!-- セクション1: 薄い緑 -->
  <div class="bg-green-50 py-8 px-6">
    <h3 class="text-blue-600 font-bold text-center mb-4 text-sm">
      質問1: 強みは何ですか？
    </h3>
    <div class="space-y-4">
      <div class="flex gap-3 items-start">
        <div class="w-10 h-10 rounded-full bg-orange-400 flex-shrink-0"></div>
        <div class="bg-white rounded-xl rounded-tl-none shadow p-3 flex-1">
          <p class="text-xs text-gray-700">協力体制がしっかりしています。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- セクション2: 中間の緑 -->
  <div class="bg-green-100 py-8 px-6">
    <h3 class="text-blue-600 font-bold text-center mb-4 text-sm">
      質問2: 意識していることは？
    </h3>
    <div class="space-y-4">
      <div class="flex gap-3 items-start">
        <div class="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0"></div>
        <div class="bg-white rounded-xl rounded-tl-none shadow p-3 flex-1">
          <p class="text-xs text-gray-700">自分の考えを持って仕事をすることです。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- セクション3: 濃い緑 -->
  <div class="bg-green-200 py-8 px-6">
    <h3 class="text-blue-600 font-bold text-center mb-4 text-sm">
      質問3: 今後の目標は？
    </h3>
    <div class="space-y-4">
      <div class="flex gap-3 items-start">
        <div class="w-10 h-10 rounded-full bg-green-500 flex-shrink-0"></div>
        <div class="bg-white rounded-xl rounded-tl-none shadow p-3 flex-1">
          <p class="text-xs text-gray-700">楽しく仕事をすることです。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ラベル -->
  <div class="bg-gray-100 py-2 text-center">
    <p class="text-xs text-gray-500">背景色が段階的に変化</p>
  </div>
</div>`,
    relatedTech: ['background-gradient-light-blue', 'gradient-section-background', 'two-color-split-background']
  },
  {
    slug: 'text-highlight-marker',
    title: 'テキストハイライト（マーカー効果） - 重要な文章を強調',
    category: 'デザイン・ビジュアル',
    description: '重要な文章に黄色のマーカーを引いて視覚的に強調する。見出しやキャッチコピーで使用し、読者の注目を引く。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx',
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* テキストハイライト（マーカー効果） */}
<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-relaxed">
  <span className="bg-yellow-200 px-2 py-1 rounded">
    自分の考えを提案し、良いアイデアなら採用されることも
  </span>
  <br />
  <span className="bg-yellow-200 px-2 py-1 rounded">
    それが中小企業ならではの魅力
  </span>
</h2>

{/* パターン1: インラインのハイライト */}
<p className="text-lg">
  これは通常のテキストで、
  <span className="bg-yellow-200 px-1 rounded">ここが重要な部分</span>
  です。
</p>

{/* パターン2: ブロック全体のハイライト */}
<div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 my-6 rounded">
  <p className="text-gray-800 font-semibold">
    重要なお知らせや注意事項をブロック全体で強調できます。
  </p>
</div>

{/* パターン3: markタグを使用（セマンティックHTML） */}
<p className="text-lg">
  これは
  <mark className="bg-yellow-200 px-1 rounded text-inherit">
    markタグを使った強調
  </mark>
  です。
</p>`,
    prompt: `重要な文章に黄色のマーカー効果を追加して強調してください。

## 要件
1. 背景色: bg-yellow-200（明るい黄色）
2. パディング: px-2 py-1（左右2、上下1）
3. 角の丸み: rounded（軽く丸める）
4. テキストの可読性を保つ

## 実装パターン

### パターン1: インラインハイライト（部分強調）
\`\`\`tsx
<p>
  通常のテキスト
  <span className="bg-yellow-200 px-1 rounded">重要な部分</span>
  続きのテキスト
</p>
\`\`\`

### パターン2: ブロックハイライト（段落全体）
\`\`\`tsx
<h2>
  <span className="bg-yellow-200 px-2 py-1 rounded">
    強調したい見出し全体
  </span>
</h2>
\`\`\`

### パターン3: 複数行のハイライト
\`\`\`tsx
<h2 className="leading-relaxed">
  <span className="bg-yellow-200 px-2 py-1 rounded inline-block">
    1行目のハイライト
  </span>
  <br />
  <span className="bg-yellow-200 px-2 py-1 rounded inline-block">
    2行目のハイライト
  </span>
</h2>
\`\`\`

### パターン4: セマンティックHTML（markタグ）
\`\`\`tsx
<p>
  通常のテキスト
  <mark className="bg-yellow-200 px-1 rounded text-inherit">
    重要な部分
  </mark>
  続きのテキスト
</p>
\`\`\`

## デザインのポイント
- **色の選択**: bg-yellow-200（明るい黄色）が最も一般的で視認性が高い
- **パディング**: px-1またはpx-2で適度な余白を確保
- **角の丸み**: roundedで柔らかい印象に（オプション）
- **行間**: leading-relaxedで複数行の場合の可読性を向上
- **inline-block**: 改行を含む場合はinline-blockで各行を独立して強調

## 色のバリエーション
- **黄色系**: bg-yellow-100（淡い）、bg-yellow-200（標準）、bg-yellow-300（濃い）
- **緑系**: bg-green-200（環境・自然）
- **青系**: bg-blue-200（技術・信頼）
- **オレンジ系**: bg-orange-200（活力・情熱）
- **ピンク系**: bg-pink-200（柔らかい・女性向け）

## 使用例
- 見出しの重要なキーワード
- キャッチコピーの強調
- 本文中の重要な用語
- CTAのメッセージ
- 注意事項やお知らせ

## アクセシビリティ
- markタグを使用することでスクリーンリーダーが強調を認識
- 色だけに依存せず、太字やアンダーラインとの併用も検討
- 背景色と文字色のコントラスト比を確保（4.5:1以上）

## 注意点
- 使いすぎると効果が薄れるため、本当に重要な部分のみに使用
- 長い文章全体をハイライトすると可読性が低下
- モバイル表示でも読みやすいサイズとパディングを確保`,
    preview: `<div class="space-y-6 p-6 bg-white rounded-lg">
  <!-- パターン1: 見出しの一部をハイライト -->
  <div>
    <h3 class="text-2xl font-bold text-gray-800 mb-2 leading-relaxed">
      <span class="bg-yellow-200 px-2 py-1 rounded">
        自分の考えを提案し、
      </span>
      <br />
      <span class="bg-yellow-200 px-2 py-1 rounded">
        良いアイデアなら採用される
      </span>
    </h3>
    <p class="text-xs text-gray-500 mt-2">複数行の見出しハイライト</p>
  </div>

  <!-- パターン2: インラインのハイライト -->
  <div>
    <p class="text-sm text-gray-700">
      通常のテキストの中に
      <span class="bg-yellow-200 px-1 rounded">重要な部分</span>
      を強調することができます。
    </p>
    <p class="text-xs text-gray-500 mt-2">インラインハイライト</p>
  </div>

  <!-- パターン3: 色のバリエーション -->
  <div class="space-y-2">
    <div class="flex flex-wrap gap-2 items-center">
      <span class="bg-yellow-200 px-3 py-1 rounded text-sm font-medium">黄色</span>
      <span class="bg-green-200 px-3 py-1 rounded text-sm font-medium">緑色</span>
      <span class="bg-blue-200 px-3 py-1 rounded text-sm font-medium">青色</span>
      <span class="bg-orange-200 px-3 py-1 rounded text-sm font-medium">オレンジ</span>
    </div>
    <p class="text-xs text-gray-500">色のバリエーション</p>
  </div>
</div>`,
    relatedTech: ['large-english-category-label', 'point-number-label', 'category-badge']
  },
  {
    slug: 'question-bracket-decoration',
    title: '質問タイトル装飾ブラケット - 斜めのブラケットで質問を強調',
    category: 'UIコンポーネント',
    description: '質問やセクションタイトルを青い斜めのブラケット（\\ /）で囲んで視覚的に強調。Q&Aや対談ページで使用し、質問を明確に区別する。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx',
      '/src/app/works/tokai-parts-industry/recruit/faq/page.tsx'
    ],
    code: `{/* 質問タイトル装飾ブラケット */}
<div className="text-center mb-12">
  <h3 className="text-xl md:text-2xl font-bold text-gray-800 inline-flex items-center gap-3">
    <span className="text-blue-600 text-3xl font-light transform -rotate-12">\\\</span>
    <span>後輩の育成について、大切にしていることを教えてください</span>
    <span className="text-blue-600 text-3xl font-light transform rotate-12">/</span>
  </h3>
</div>

{/* パターン2: 上下配置（モバイル対応） */}
<div className="text-center mb-12">
  <div className="flex flex-col md:flex-row items-center justify-center gap-3">
    <span className="text-blue-600 text-3xl font-light transform -rotate-12 md:inline hidden">\\\</span>
    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
      企業名で働く魅力はどこにあると思いますか？
    </h3>
    <span className="text-blue-600 text-3xl font-light transform rotate-12 md:inline hidden">/</span>
  </div>
</div>

{/* パターン3: SVGでより精密なブラケット */}
<div className="text-center mb-12">
  <div className="inline-flex items-center gap-3">
    <svg className="w-6 h-12 text-blue-600" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="18" y1="0" x2="6" y2="48" />
    </svg>
    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
      質問のタイトルをここに入れる
    </h3>
    <svg className="w-6 h-12 text-blue-600" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="6" y1="0" x2="18" y2="48" />
    </svg>
  </div>
</div>

{/* パターン4: 装飾的なボーダー付き */}
<div className="relative mb-12 py-6">
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600 to-transparent transform -skew-x-12"></div>
  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600 to-transparent transform skew-x-12"></div>
  <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center px-12">
    質問のタイトルをここに入れる
  </h3>
</div>`,
    prompt: `質問やセクションタイトルを青い斜めのブラケット（\\ /）で囲んで強調してください。

## 要件
1. ブラケット色: text-blue-600（青色）
2. ブラケットサイズ: text-3xl（タイトルより大きめ）
3. フォントウェイト: font-light（細め）
4. 傾き: transform -rotate-12（左）、rotate-12（右）
5. 中央揃え: text-center
6. 間隔: gap-3（ブラケットとテキストの間）

## 実装パターン

### パターン1: シンプルな横並び（基本形）
\`\`\`tsx
<div className="text-center mb-12">
  <h3 className="text-xl md:text-2xl font-bold text-gray-800 inline-flex items-center gap-3">
    <span className="text-blue-600 text-3xl font-light transform -rotate-12">\\\</span>
    <span>質問のタイトルをここに入れる</span>
    <span className="text-blue-600 text-3xl font-light transform rotate-12">/</span>
  </h3>
</div>
\`\`\`

### パターン2: レスポンシブ対応（モバイルでブラケット非表示）
\`\`\`tsx
<div className="text-center mb-12">
  <div className="flex flex-col md:flex-row items-center justify-center gap-3">
    <span className="text-blue-600 text-3xl font-light transform -rotate-12 md:inline hidden">\\\</span>
    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
      質問のタイトルをここに入れる
    </h3>
    <span className="text-blue-600 text-3xl font-light transform rotate-12 md:inline hidden">/</span>
  </div>
</div>
\`\`\`

### パターン3: SVGでより精密なブラケット
\`\`\`tsx
<div className="text-center mb-12">
  <div className="inline-flex items-center gap-3">
    <svg className="w-6 h-12 text-blue-600" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="18" y1="0" x2="6" y2="48" />
    </svg>
    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
      質問のタイトルをここに入れる
    </h3>
    <svg className="w-6 h-12 text-blue-600" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="6" y1="0" x2="18" y2="48" />
    </svg>
  </div>
</div>
\`\`\`

### パターン4: 装飾的なボーダー付き
\`\`\`tsx
<div className="relative mb-12 py-6">
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600 to-transparent transform -skew-x-12"></div>
  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600 to-transparent transform skew-x-12"></div>
  <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center px-12">
    質問のタイトルをここに入れる
  </h3>
</div>
\`\`\`

## デザインのポイント
- **傾き**: -rotate-12と+rotate-12で左右対称の傾きを作る
- **色**: text-blue-600で質問を強調（プロジェクトのアクセントカラー）
- **サイズ**: text-3xlでタイトルより大きめに設定し、視覚的なインパクトを出す
- **フォントウェイト**: font-lightで細めにして、重くなりすぎないようにする
- **配置**: inline-flexでブラケットとテキストを横並びに

## 色のバリエーション
- **青系**: text-blue-600（標準）、text-blue-500（明るめ）
- **緑系**: text-green-600（自然・環境）
- **オレンジ系**: text-orange-600（活力・情熱）
- **紫系**: text-purple-600（創造性）
- **グレー系**: text-gray-400（控えめ）

## 使用例
- Q&Aページの質問タイトル
- 対談・クロストークページのトピック
- セクションの見出し
- インタビュー記事の質問
- FAQ

## レスポンシブ対応
- **デスクトップ**: ブラケットを両側に表示
- **タブレット**: ブラケットを両側に表示
- **モバイル**: ブラケットを非表示にして、テキストのみ表示（md:inline hidden）

## アクセシビリティ
- ブラケットは装飾的な要素なので、aria-hidden="true"を追加することを推奨
- スクリーンリーダーはテキストのみを読み上げ
- 色だけに依存せず、テキストの太字やサイズで強調も併用

## 注意点
- バックスラッシュ（\\）を使用する場合、JSXでは\\\でエスケープが必要
- transformは一部の古いブラウザで動作しない場合があるため、フォールバックを検討
- モバイルでは画面幅が狭いため、ブラケットを非表示にすることを推奨`,
    preview: `<div class="space-y-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
  <!-- パターン1: 基本形 -->
  <div class="text-center">
    <h3 class="text-lg font-bold text-gray-800 inline-flex items-center gap-2">
      <span class="text-blue-600 text-2xl font-light transform -rotate-12">\\</span>
      <span>後輩の育成について</span>
      <span class="text-blue-600 text-2xl font-light transform rotate-12">/</span>
    </h3>
    <p class="text-xs text-gray-500 mt-2">基本形（横並び）</p>
  </div>

  <!-- パターン2: 長いテキスト -->
  <div class="text-center">
    <h3 class="text-base font-bold text-gray-800 inline-flex items-center gap-2 max-w-md">
      <span class="text-blue-600 text-2xl font-light transform -rotate-12 flex-shrink-0">\\</span>
      <span class="flex-1">企業名で働く魅力はどこにあると思いますか？</span>
      <span class="text-blue-600 text-2xl font-light transform rotate-12 flex-shrink-0">/</span>
    </h3>
    <p class="text-xs text-gray-500 mt-2">長いテキストの場合</p>
  </div>

  <!-- パターン3: 色のバリエーション -->
  <div class="flex flex-wrap justify-center gap-4">
    <div class="inline-flex items-center gap-1">
      <span class="text-blue-600 text-xl font-light transform -rotate-12">\\</span>
      <span class="text-sm font-semibold text-gray-700">青色</span>
      <span class="text-blue-600 text-xl font-light transform rotate-12">/</span>
    </div>
    <div class="inline-flex items-center gap-1">
      <span class="text-green-600 text-xl font-light transform -rotate-12">\\</span>
      <span class="text-sm font-semibold text-gray-700">緑色</span>
      <span class="text-green-600 text-xl font-light transform rotate-12">/</span>
    </div>
    <div class="inline-flex items-center gap-1">
      <span class="text-orange-600 text-xl font-light transform -rotate-12">\\</span>
      <span class="text-sm font-semibold text-gray-700">オレンジ</span>
      <span class="text-orange-600 text-xl font-light transform rotate-12">/</span>
    </div>
  </div>
  <p class="text-xs text-gray-500 text-center">色のバリエーション</p>
</div>`,
    relatedTech: ['large-english-category-label', 'text-highlight-marker', 'chat-style-dialogue-layout']
  },
  {
    slug: 'image-chat-combo-layout',
    title: '画像とチャットの組み合わせレイアウト - 現場写真で臨場感を演出',
    category: 'レイアウト・構造',
    description: '対談・インタビューページで、右側に大きな現場写真を配置し、左側にチャット形式の吹き出しを配置。実際の職場の雰囲気を視覚的に伝え、臨場感を高める。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx',
      '/src/app/works/tokai-parts-industry/recruit/interview/page.tsx'
    ],
    code: `{/* 画像とチャットの組み合わせレイアウト */}
<div className="grid md:grid-cols-2 gap-8 items-start my-12">
  {/* 左側: チャット形式の対談 */}
  <div className="space-y-6">
    {/* 発言1 */}
    <div className="flex gap-3 items-start">
      <img
        src="/images/avatar1.jpg"
        alt="N.Tさん"
        className="w-16 h-16 rounded-full border-4 border-orange-400 shadow-lg flex-shrink-0"
      />
      <div className="bg-white rounded-2xl rounded-tl-none shadow-lg p-4 flex-1">
        <p className="text-sm text-gray-700 mb-1 font-semibold">N.Tさん</p>
        <p className="text-gray-800">
          いまはコロナ禍でなかなかできないけど、スポーツはみんなでよくやってたよね？
        </p>
      </div>
    </div>

    {/* 発言2 */}
    <div className="flex gap-3 items-start flex-row-reverse">
      <img
        src="/images/avatar2.jpg"
        alt="M.Rさん"
        className="w-16 h-16 rounded-full border-4 border-blue-400 shadow-lg flex-shrink-0"
      />
      <div className="bg-white rounded-2xl rounded-tr-none shadow-lg p-4 flex-1">
        <p className="text-sm text-gray-700 mb-1 font-semibold text-right">M.Rさん</p>
        <p className="text-gray-800">
          そうですね。テニス、バドミントン、フットサルなんかは一緒にやってましたね。
        </p>
      </div>
    </div>

    {/* 発言3 */}
    <div className="flex gap-3 items-start">
      <img
        src="/images/avatar3.jpg"
        alt="I.Rさん"
        className="w-16 h-16 rounded-full border-4 border-green-400 shadow-lg flex-shrink-0"
      />
      <div className="bg-white rounded-2xl rounded-tl-none shadow-lg p-4 flex-1">
        <p className="text-sm text-gray-700 mb-1 font-semibold">I.Rさん</p>
        <p className="text-gray-800">
          ゲームもやりますよね。オンラインで、いかにもコロナ禍での交流って感じですが。
        </p>
      </div>
    </div>
  </div>

  {/* 右側: 現場の写真 */}
  <div className="relative h-full min-h-[400px] md:min-h-[500px]">
    <img
      src="/images/workplace.jpg"
      alt="職場での交流の様子"
      className="w-full h-full object-cover rounded-2xl shadow-xl"
    />
  </div>
</div>

{/* パターン2: 画像を左、チャットを右に配置 */}
<div className="grid md:grid-cols-2 gap-8 items-start my-12">
  {/* 左側: 現場の写真 */}
  <div className="relative h-full min-h-[400px] md:min-h-[500px] order-2 md:order-1">
    <img
      src="/images/workplace2.jpg"
      alt="職場での作業の様子"
      className="w-full h-full object-cover rounded-2xl shadow-xl"
    />
  </div>

  {/* 右側: チャット形式の対談 */}
  <div className="space-y-6 order-1 md:order-2">
    {/* チャットの内容... */}
  </div>
</div>

{/* パターン3: 画像を背景として使用 */}
<div className="relative my-12">
  {/* 背景画像 */}
  <div className="absolute inset-0 rounded-2xl overflow-hidden">
    <img
      src="/images/workplace-bg.jpg"
      alt="背景"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  {/* チャットコンテンツ */}
  <div className="relative z-10 p-8">
    <div className="max-w-2xl mx-auto space-y-6">
      {/* チャットの内容... */}
    </div>
  </div>
</div>`,
    prompt: `対談・インタビューページで、画像とチャット形式の吹き出しを組み合わせたレイアウトを実装してください。

## 要件
1. レイアウト: grid md:grid-cols-2（2カラム）
2. 左側: チャット形式の対談（space-y-6で縦に並べる）
3. 右側: 大きな現場写真（min-h-[400px]以上）
4. 画像: rounded-2xl shadow-xlで角を丸く、影を付ける
5. レスポンシブ: モバイルでは縦積み

## 実装パターン

### パターン1: 左チャット、右画像（基本形）
\`\`\`tsx
<div className="grid md:grid-cols-2 gap-8 items-start my-12">
  {/* 左側: チャット形式の対談 */}
  <div className="space-y-6">
    {/* チャット吹き出し... */}
  </div>

  {/* 右側: 現場の写真 */}
  <div className="relative h-full min-h-[400px] md:min-h-[500px]">
    <img
      src="/images/workplace.jpg"
      alt="職場での交流の様子"
      className="w-full h-full object-cover rounded-2xl shadow-xl"
    />
  </div>
</div>
\`\`\`

### パターン2: 左右を反転（左画像、右チャット）
\`\`\`tsx
<div className="grid md:grid-cols-2 gap-8 items-start my-12">
  {/* 左側: 現場の写真 */}
  <div className="relative h-full min-h-[400px] md:min-h-[500px] order-2 md:order-1">
    <img
      src="/images/workplace.jpg"
      alt="職場での作業の様子"
      className="w-full h-full object-cover rounded-2xl shadow-xl"
    />
  </div>

  {/* 右側: チャット形式の対談 */}
  <div className="space-y-6 order-1 md:order-2">
    {/* チャットの内容... */}
  </div>
</div>
\`\`\`

### パターン3: 画像を背景として使用
\`\`\`tsx
<div className="relative my-12">
  {/* 背景画像 */}
  <div className="absolute inset-0 rounded-2xl overflow-hidden">
    <img
      src="/images/workplace-bg.jpg"
      alt="背景"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  {/* チャットコンテンツ */}
  <div className="relative z-10 p-8">
    <div className="max-w-2xl mx-auto space-y-6">
      {/* チャットの内容... */}
    </div>
  </div>
</div>
\`\`\`

## デザインのポイント
- **画像サイズ**: min-h-[400px]以上で十分な高さを確保
- **object-cover**: 画像のアスペクト比を保ちながら領域全体を覆う
- **rounded-2xl**: 角を丸くして柔らかい印象に
- **shadow-xl**: 大きな影で立体感を出す
- **gap-8**: チャットと画像の間に適度なスペース

## レイアウトのバリエーション
1. **交互配置**: セクションごとに左右を反転（視覚的なリズム）
2. **全幅画像**: 画像を全幅にして、チャットをオーバーレイ
3. **複数画像**: 画像を2-3枚並べて、チャットを間に配置
4. **背景画像**: 画像を背景にして、チャットを前面に配置

## 使用例
- 対談・クロストークページ
- インタビュー記事
- 社員紹介ページ
- 座談会レポート
- ケーススタディ

## レスポンシブ対応
- **デスクトップ**: 2カラム（grid-cols-2）
- **タブレット**: 2カラム（grid-cols-2）
- **モバイル**: 1カラム（縦積み）、画像を上に配置

## 画像の選び方
- **臨場感**: 実際の職場や現場の写真
- **人物**: 笑顔や真剣な表情で雰囲気を伝える
- **明るさ**: 明るく清潔感のある写真を選ぶ
- **構図**: 縦長の構図（人物の全身や作業風景）が適している

## アクセシビリティ
- 画像にはalt属性で適切な説明を追加
- 画像が読み込まれない場合でもチャットの内容だけで理解できるようにする
- 背景画像を使用する場合、テキストの可読性を確保（opacity調整、オーバーレイ）

## 注意点
- 画像の容量を最適化（WebPやNext.js Imageコンポーネントを使用）
- モバイルでは画像の高さを調整（min-h-[300px]など）
- チャットと画像のバランスを取る（50:50が基本、場合によって60:40も）`,
    preview: `<div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
  <!-- 2カラムレイアウト -->
  <div class="grid md:grid-cols-2 gap-6 items-start">
    <!-- 左側: チャット -->
    <div class="space-y-4">
      <!-- 発言1 -->
      <div class="flex gap-2 items-start">
        <div class="w-10 h-10 rounded-full bg-orange-400 flex-shrink-0"></div>
        <div class="bg-white rounded-xl rounded-tl-none shadow-md p-3 flex-1">
          <p class="text-xs text-gray-700 mb-1 font-semibold">N.Tさん</p>
          <p class="text-xs text-gray-600">スポーツはよくやってたよね？</p>
        </div>
      </div>

      <!-- 発言2 -->
      <div class="flex gap-2 items-start flex-row-reverse">
        <div class="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0"></div>
        <div class="bg-white rounded-xl rounded-tr-none shadow-md p-3 flex-1">
          <p class="text-xs text-gray-700 mb-1 font-semibold text-right">M.Rさん</p>
          <p class="text-xs text-gray-600">テニスやバドミントンを一緒に。</p>
        </div>
      </div>

      <!-- 発言3 -->
      <div class="flex gap-2 items-start">
        <div class="w-10 h-10 rounded-full bg-green-500 flex-shrink-0"></div>
        <div class="bg-white rounded-xl rounded-tl-none shadow-md p-3 flex-1">
          <p class="text-xs text-gray-700 mb-1 font-semibold">I.Rさん</p>
          <p class="text-xs text-gray-600">オンラインゲームもやりますね。</p>
        </div>
      </div>
    </div>

    <!-- 右側: 画像 -->
    <div class="bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl shadow-xl h-48 flex items-center justify-center">
      <div class="text-center">
        <svg class="w-12 h-12 mx-auto mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <p class="text-xs text-white font-semibold">現場写真</p>
      </div>
    </div>
  </div>

  <p class="text-xs text-gray-500 text-center mt-4">画像とチャットの組み合わせレイアウト</p>
</div>`,
    relatedTech: ['chat-style-dialogue-layout', 'two-column-layout-image-card', 'asymmetric-card-layout']
  },
  {
    slug: 'handwritten-style-heading',
    title: '手書き風フォント見出し - 柔らかく親しみやすい印象',
    category: 'デザイン・ビジュアル',
    description: 'セクション見出しに手書き風の筆記体フォントを使用。イタリック体で流れるような書体が、柔らかく親しみやすい雰囲気を演出する。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx',
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* 手書き風フォント見出し */}
<h2 className="text-4xl md:text-5xl font-serif italic text-blue-600 text-center my-12">
  Other crosstalk
</h2>

{/* パターン1: Google Fontsを使用（Dancing Script） */}
<style jsx>{\`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
\`}</style>

<h2
  className="text-4xl md:text-5xl text-blue-600 text-center my-12"
  style={{ fontFamily: "'Dancing Script', cursive" }}
>
  Other crosstalk
</h2>

{/* パターン2: Google Fontsを使用（Pacifico） */}
<style jsx>{\`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
\`}</style>

<h2
  className="text-4xl md:text-5xl text-blue-600 text-center my-12"
  style={{ fontFamily: "'Pacifico', cursive" }}
>
  Other crosstalk
</h2>

{/* パターン3: Google Fontsを使用（Caveat） */}
<style jsx>{\`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');
\`}</style>

<h2
  className="text-4xl md:text-5xl text-blue-600 text-center my-12"
  style={{ fontFamily: "'Caveat', cursive" }}
>
  Other crosstalk
</h2>

{/* パターン4: Tailwind CSS + カスタムフォント設定 */}
{/* tailwind.config.js に追加:
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['Dancing Script', 'cursive'],
      },
    },
  },
}
*/}

<h2 className="text-4xl md:text-5xl font-handwriting text-blue-600 text-center my-12">
  Other crosstalk
</h2>

{/* パターン5: 複数色の組み合わせ */}
<h2
  className="text-4xl md:text-5xl text-center my-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
  style={{ fontFamily: "'Dancing Script', cursive" }}
>
  Other crosstalk
</h2>`,
    prompt: `セクション見出しに手書き風の筆記体フォントを使用して、柔らかく親しみやすい雰囲気を演出してください。

## 要件
1. フォントスタイル: 筆記体（cursive）、イタリック体（italic）
2. テキストサイズ: text-4xl md:text-5xl（大きめ）
3. テキスト色: text-blue-600（青色、プロジェクトのアクセントカラー）
4. 配置: text-center（中央揃え）
5. 余白: my-12（上下に十分な余白）

## 実装パターン

### パターン1: CSSのfont-family（基本形）
\`\`\`tsx
<h2 className="text-4xl md:text-5xl font-serif italic text-blue-600 text-center my-12">
  Other crosstalk
</h2>
\`\`\`

### パターン2: Google Fonts（Dancing Script）
\`\`\`tsx
// _app.tsxまたはlayout.tsxに追加
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// 使用
<h2 className={\`\${dancingScript.className} text-4xl md:text-5xl text-blue-600 text-center my-12\`}>
  Other crosstalk
</h2>
\`\`\`

### パターン3: Google Fonts（Pacifico）
\`\`\`tsx
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

<h2 className={\`\${pacifico.className} text-4xl md:text-5xl text-blue-600 text-center my-12\`}>
  Other crosstalk
</h2>
\`\`\`

### パターン4: Google Fonts（Caveat）
\`\`\`tsx
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

<h2 className={\`\${caveat.className} text-4xl md:text-5xl text-blue-600 text-center my-12\`}>
  Other crosstalk
</h2>
\`\`\`

### パターン5: Tailwind CSS設定
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['Dancing Script', 'Pacifico', 'cursive'],
      },
    },
  },
}
\`\`\`

\`\`\`tsx
<h2 className="text-4xl md:text-5xl font-handwriting text-blue-600 text-center my-12">
  Other crosstalk
</h2>
\`\`\`

## おすすめのフォント

### 英語見出し向け
1. **Dancing Script**: 流れるような筆記体、読みやすい
2. **Pacifico**: 太めで力強い手書き風
3. **Caveat**: カジュアルな手書き風
4. **Satisfy**: エレガントな筆記体
5. **Allura**: 華やかな筆記体

### 日本語見出し向け
1. **Klee One**: 手書き風の日本語フォント（Google Fonts）
2. **Yuji Syuku**: 筆で書いたような日本語フォント（Google Fonts）
3. **Zen Kurenaido**: カジュアルな日本語フォント（Google Fonts）

## デザインのポイント
- **サイズ**: text-4xl以上で大きく目立たせる
- **イタリック**: italic で傾きを付けると流れるような印象に
- **色**: 明るめの色（blue-600、purple-600など）で柔らかい印象
- **余白**: my-12で上下に十分なスペースを確保
- **中央揃え**: text-centerで安定感を出す

## 使用例
- セクション見出し（"Other crosstalk"など）
- キャッチコピー
- サブタイトル
- 装飾的な見出し
- ブランド名やロゴテキスト

## 色のバリエーション
- **青系**: text-blue-600（信頼、技術）
- **紫系**: text-purple-600（創造性、優雅）
- **ピンク系**: text-pink-600（柔らかさ、親しみ）
- **緑系**: text-green-600（自然、成長）
- **グラデーション**: bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent

## パフォーマンス最適化
- **Next.js 13+**: next/fontを使用してフォントを最適化
- **フォント読み込み**: display: 'swap'でレイアウトシフトを防ぐ
- **サブセット**: 必要な文字セットのみ読み込む（subsetsオプション）
- **フォールバック**: font-familyに'cursive'を追加してフォールバックを確保

## アクセシビリティ
- 読みやすさを確保（サイズを十分に大きく）
- コントラスト比を確保（背景色との対比）
- 長文には使用しない（見出しのみに限定）

## 注意点
- 手書き風フォントは読みにくい場合があるため、見出しのみに使用
- 日本語と英語で異なるフォントを使い分ける
- フォントサイズは大きめに設定（最低text-3xl以上）
- モバイルでもサイズを調整して可読性を確保`,
    preview: `<div class="space-y-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
  <!-- パターン1: Dancing Script風 -->
  <div class="text-center">
    <h2 class="text-4xl font-serif italic text-blue-600 mb-2">
      Other crosstalk
    </h2>
    <p class="text-xs text-gray-500">Dancing Script風（italic serif）</p>
  </div>

  <!-- パターン2: 太字 -->
  <div class="text-center">
    <h2 class="text-3xl font-serif italic text-purple-600 mb-2 font-bold">
      Our Story
    </h2>
    <p class="text-xs text-gray-500">太字のイタリック体</p>
  </div>

  <!-- パターン3: グラデーション -->
  <div class="text-center">
    <h2 class="text-4xl font-serif italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
      Featured Works
    </h2>
    <p class="text-xs text-gray-500">グラデーション</p>
  </div>

  <!-- パターン4: 色のバリエーション -->
  <div class="flex flex-wrap justify-center gap-4">
    <span class="text-2xl font-serif italic text-blue-600">Blue</span>
    <span class="text-2xl font-serif italic text-purple-600">Purple</span>
    <span class="text-2xl font-serif italic text-pink-600">Pink</span>
    <span class="text-2xl font-serif italic text-green-600">Green</span>
  </div>
  <p class="text-xs text-gray-500 text-center">色のバリエーション</p>
</div>`,
    relatedTech: ['large-english-category-label', 'text-highlight-marker', 'question-bracket-decoration']
  },
  {
    slug: 'corner-ribbon-label',
    title: 'コーナーリボンラベル - カードの角に配置する装飾ラベル',
    category: 'UIコンポーネント',
    description: 'カードやサムネイルの左上に斜めに配置されるリボン風のラベル。"Interview 01"などの番号やカテゴリーを表示し、視覚的なアクセントとして機能する。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/interview/page.tsx',
      '/src/app/works/tokai-parts-industry/recruit/page.tsx'
    ],
    code: `{/* コーナーリボンラベル */}
<div className="relative overflow-hidden rounded-lg">
  {/* カードコンテンツ */}
  <div className="bg-white p-6">
    <img src="/images/interview.jpg" alt="インタビュー" className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold mb-2">インタビュータイトル</h3>
    <p className="text-gray-600">インタビューの内容...</p>
  </div>

  {/* コーナーリボン */}
  <div className="absolute top-0 left-0 bg-green-500 text-white px-8 py-2 transform -rotate-45 -translate-x-8 -translate-y-4 shadow-lg">
    <span className="text-sm font-bold">Interview 01</span>
  </div>
</div>

{/* パターン2: 右上に配置 */}
<div className="relative overflow-hidden rounded-lg">
  <div className="bg-white p-6">
    {/* カードコンテンツ */}
  </div>

  {/* 右上のリボン */}
  <div className="absolute top-0 right-0 bg-blue-500 text-white px-8 py-2 transform rotate-45 translate-x-8 -translate-y-4 shadow-lg">
    <span className="text-sm font-bold">New</span>
  </div>
</div>

{/* パターン3: 三角形のコーナーリボン（CSSのみ） */}
<div className="relative overflow-hidden rounded-lg">
  <div className="bg-white p-6">
    {/* カードコンテンツ */}
  </div>

  {/* 三角形リボン */}
  <div className="absolute top-0 left-0">
    <div className="relative w-0 h-0 border-t-[60px] border-t-green-500 border-r-[60px] border-r-transparent">
      <span className="absolute top-[-50px] left-[5px] text-white text-xs font-bold transform rotate-[-45deg]">
        01
      </span>
    </div>
  </div>
</div>

{/* パターン4: 折り返しのあるリボン */}
<div className="relative overflow-hidden rounded-lg">
  <div className="bg-white p-6">
    {/* カードコンテンツ */}
  </div>

  {/* 折り返しリボン */}
  <div className="absolute top-4 left-0">
    <div className="relative bg-green-500 text-white px-6 py-2 pr-8 shadow-lg">
      <span className="text-sm font-bold">Interview 01</span>
      {/* 折り返し部分 */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[15px] border-r-green-700 border-b-[20px] border-b-transparent"></div>
    </div>
  </div>
</div>

{/* パターン5: シンプルなコーナーバッジ */}
<div className="relative overflow-hidden rounded-lg">
  <div className="bg-white p-6">
    {/* カードコンテンツ */}
  </div>

  {/* シンプルバッジ */}
  <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full shadow-md">
    <span className="text-xs font-bold">01</span>
  </div>
</div>`,
    prompt: `カードやサムネイルの角に配置するコーナーリボンラベルを実装してください。

## 要件
1. 配置: absolute positioning で左上（または右上）に配置
2. 背景色: bg-green-500（緑色、プロジェクトのアクセントカラー）
3. テキスト色: text-white（白）
4. 傾き: transform -rotate-45（左上の場合）
5. シャドウ: shadow-lg で立体感を出す
6. 親要素: relative overflow-hidden が必要

## 実装パターン

### パターン1: 斜めリボン（左上）
\`\`\`tsx
<div className="relative overflow-hidden rounded-lg">
  {/* カードコンテンツ */}
  <div className="bg-white p-6">
    {/* ... */}
  </div>

  {/* コーナーリボン */}
  <div className="absolute top-0 left-0 bg-green-500 text-white px-8 py-2 transform -rotate-45 -translate-x-8 -translate-y-4 shadow-lg">
    <span className="text-sm font-bold">Interview 01</span>
  </div>
</div>
\`\`\`

### パターン2: 斜めリボン（右上）
\`\`\`tsx
<div className="relative overflow-hidden rounded-lg">
  {/* カードコンテンツ */}
  <div className="bg-white p-6">
    {/* ... */}
  </div>

  {/* 右上のリボン */}
  <div className="absolute top-0 right-0 bg-blue-500 text-white px-8 py-2 transform rotate-45 translate-x-8 -translate-y-4 shadow-lg">
    <span className="text-sm font-bold">New</span>
  </div>
</div>
\`\`\`

### パターン3: 三角形リボン（CSSのみ）
\`\`\`tsx
<div className="relative overflow-hidden rounded-lg">
  {/* カードコンテンツ */}
  <div className="bg-white p-6">
    {/* ... */}
  </div>

  {/* 三角形リボン */}
  <div className="absolute top-0 left-0">
    <div className="relative w-0 h-0 border-t-[60px] border-t-green-500 border-r-[60px] border-r-transparent">
      <span className="absolute top-[-50px] left-[5px] text-white text-xs font-bold transform rotate-[-45deg]">
        01
      </span>
    </div>
  </div>
</div>
\`\`\`

### パターン4: 折り返しリボン（水平）
\`\`\`tsx
<div className="relative overflow-hidden rounded-lg">
  {/* カードコンテンツ */}
  <div className="bg-white p-6">
    {/* ... */}
  </div>

  {/* 折り返しリボン */}
  <div className="absolute top-4 left-0">
    <div className="relative bg-green-500 text-white px-6 py-2 pr-8 shadow-lg">
      <span className="text-sm font-bold">Interview 01</span>
      {/* 折り返し部分 */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[15px] border-r-green-700 border-b-[20px] border-b-transparent"></div>
    </div>
  </div>
</div>
\`\`\`

### パターン5: シンプルなバッジ
\`\`\`tsx
<div className="relative overflow-hidden rounded-lg">
  {/* カードコンテンツ */}
  <div className="bg-white p-6">
    {/* ... */}
  </div>

  {/* シンプルバッジ */}
  <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full shadow-md">
    <span className="text-xs font-bold">01</span>
  </div>
</div>
\`\`\`

## デザインのポイント
- **配置**: absolute top-0 left-0（左上）、top-0 right-0（右上）
- **傾き**: -rotate-45（左上）、rotate-45（右上）で斜めに配置
- **移動**: translate-x と translate-y で位置を微調整
- **親要素**: overflow-hidden で はみ出した部分を隠す
- **パディング**: px-8 py-2 で十分なスペースを確保
- **シャドウ**: shadow-lg で立体感を出す

## 色のバリエーション
- **緑系**: bg-green-500（自然、環境、成長）
- **青系**: bg-blue-500（信頼、技術）
- **オレンジ系**: bg-orange-500（活力、情熱）
- **赤系**: bg-red-500（重要、注意）
- **紫系**: bg-purple-500（プレミアム、特別）
- **グレー系**: bg-gray-500（控えめ、中立）

## 使用例
- インタビュー記事の番号表示（"Interview 01"）
- 新着記事のバッジ（"New"）
- カテゴリーラベル（"技術"、"営業"など）
- ステータス表示（"公開中"、"募集中"など）
- おすすめマーク（"おすすめ"、"人気"など）
- 期間限定表示（"期間限定"）

## 注意点
- 親要素に \`relative overflow-hidden\` が必須
- カードの角を丸くしている場合（rounded-lg）、overflow-hiddenでリボンもカットされる
- テキストが長い場合は、px の値を調整
- モバイルではリボンのサイズを小さくすることを推奨（text-xs、px-6など）
- z-index を設定して、他の要素との重なりを制御

## アクセシビリティ
- リボンの内容が重要な情報の場合、本文にも同じ情報を含める
- 色だけで情報を伝えない（テキストも併記）
- 装飾的な要素の場合は aria-hidden="true" を検討

## レスポンシブ対応
- モバイル: text-xs px-4 py-1（小さめ）
- タブレット: text-sm px-6 py-1.5（中サイズ）
- デスクトップ: text-sm px-8 py-2（標準サイズ）`,
    preview: `<div class="space-y-6 p-6 bg-gray-50 rounded-lg">
  <!-- パターン1: 斜めリボン（左上） -->
  <div class="relative overflow-hidden rounded-lg bg-white shadow-md h-32">
    <div class="p-4">
      <h4 class="text-sm font-bold text-gray-800">Interview Card</h4>
      <p class="text-xs text-gray-600 mt-2">インタビュー記事の内容...</p>
    </div>
    <div class="absolute top-0 left-0 bg-green-500 text-white px-8 py-2 transform -rotate-45 -translate-x-8 -translate-y-4 shadow-lg">
      <span class="text-xs font-bold">Interview 01</span>
    </div>
  </div>

  <!-- パターン2: 三角形リボン -->
  <div class="relative overflow-hidden rounded-lg bg-white shadow-md h-32">
    <div class="p-4">
      <h4 class="text-sm font-bold text-gray-800">Article Card</h4>
      <p class="text-xs text-gray-600 mt-2">記事の内容...</p>
    </div>
    <div class="absolute top-0 left-0">
      <div class="relative w-0 h-0 border-t-[50px] border-t-blue-500 border-r-[50px] border-r-transparent">
        <span class="absolute top-[-40px] left-[5px] text-white text-xs font-bold transform rotate-[-45deg]">
          New
        </span>
      </div>
    </div>
  </div>

  <!-- パターン3: シンプルバッジ -->
  <div class="relative overflow-hidden rounded-lg bg-white shadow-md h-32">
    <div class="p-4">
      <h4 class="text-sm font-bold text-gray-800">Product Card</h4>
      <p class="text-xs text-gray-600 mt-2">製品の説明...</p>
    </div>
    <div class="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full shadow-md">
      <span class="text-xs font-bold">03</span>
    </div>
  </div>

  <p class="text-xs text-gray-500 text-center">コーナーリボンラベルのバリエーション</p>
</div>`,
    relatedTech: ['category-badge', 'numbered-card-list', 'large-english-category-label']
  },
  {
    slug: 'large-pill-cta-buttons-section',
    title: '大きな丸型CTAボタン（2カラム配置） - セクション下部のCTAパターン',
    category: 'UIコンポーネント',
    description: 'セクション下部に配置される2つの大きな丸型（pill型）CTAボタン。各ボタンは英語タイトル、日本語サブタイトル、矢印アイコンを含み、白背景でカラフルな背景セクションに配置される。ページ遷移を促進する強力なCTAパターン。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/interview/page.tsx (200-233行目)'
    ],
    code: `{/* FAQ & RECRUITMENT Buttons */}
<section className="py-16 bg-[#4ADE80]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {/* FAQ */}
      <Link
        href="/works/tokai-parts-industry/recruit/faq"
        className="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-6 w-full md:w-auto"
      >
        <div className="text-left">
          <p className="text-[#2563EB] font-bold text-2xl">FAQ</p>
          <p className="text-sm text-gray-600">よくある質問</p>
        </div>
        <svg className="w-6 h-6 text-gray-400 group-hover:text-[#2563EB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* RECRUITMENT */}
      <Link
        href="/works/tokai-parts-industry/recruit/recruitment"
        className="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-6 w-full md:w-auto"
      >
        <div className="text-left">
          <p className="text-[#2563EB] font-bold text-2xl">RECRUITMENT</p>
          <p className="text-sm text-gray-600">募集情報</p>
        </div>
        <svg className="w-6 h-6 text-gray-400 group-hover:text-[#2563EB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</section>`,
    prompt: `セクション下部に2つの大きな丸型（pill型）CTAボタンを実装してください。

## 要件

### レイアウト
1. セクション背景: 緑色（bg-[#4ADE80]）またはブランドカラー
2. パディング: py-16（上下）
3. 最大幅: max-w-4xl（中央揃え）
4. 2カラム配置: flex flex-col md:flex-row gap-6
5. 中央揃え: justify-center items-center

### ボタンデザイン
1. 形状: rounded-full（完全な丸型）
2. 背景: bg-white（白）
3. ホバー: hover:bg-gray-50（薄いグレー）
4. パディング: px-12 py-6（大きめ）
5. 影: shadow-lg hover:shadow-xl
6. トランジション: transition-all（滑らかなアニメーション）
7. レスポンシブ: w-full md:w-auto（モバイルで全幅、デスクトップで自動）

### ボタン内容
1. flex items-center gap-6（横並び、中央揃え、間隔）
2. 左側: テキストエリア（text-left）
   - 英語タイトル: text-[#2563EB] font-bold text-2xl
   - 日本語サブタイトル: text-sm text-gray-600
3. 右側: 矢印アイコン（w-6 h-6）
   - 通常: text-gray-400
   - ホバー: group-hover:text-[#2563EB] transition-colors

### アイコンSVG
- Heroicons の ChevronRight を使用
- strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
- パス: "M9 5l7 7-7 7"

## 実装手順

1. セクションタグで囲む（背景色とパディング設定）
2. max-w-4xlコンテナで中央揃え
3. flexコンテナで2つのボタンを配置
4. 各ボタンをLinkコンポーネントで実装
5. group クラスを追加してホバー効果を一括管理
6. テキストエリアとアイコンを配置

## デザインのポイント

- 大きなサイズ（px-12 py-6）で視認性とクリック領域を確保
- 完全な丸型（rounded-full）でモダンで親しみやすい印象
- 白背景でカラフルな背景セクションから目立つ
- 英語タイトルと日本語サブタイトルで内容を明確化
- 矢印アイコンでクリック可能であることを示唆
- ホバー時の影と色の変化で視覚的フィードバック
- グループホバーで統一感のあるインタラクション

## 使用例

リクルートページ、サービス紹介ページ、ランディングページのセクション下部に配置し、次のアクションへの導線を作る。`,
    preview: `<div class="bg-green-400 p-8 rounded-lg">
  <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
    <!-- FAQボタン -->
    <div class="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg cursor-pointer flex items-center gap-6">
      <div class="text-left">
        <p class="text-blue-600 font-bold text-2xl">FAQ</p>
        <p class="text-sm text-gray-600">よくある質問</p>
      </div>
      <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- RECRUITMENTボタン -->
    <div class="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg cursor-pointer flex items-center gap-6">
      <div class="text-left">
        <p class="text-blue-600 font-bold text-2xl">RECRUITMENT</p>
        <p class="text-sm text-gray-600">募集情報</p>
      </div>
      <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>

  <p class="text-xs text-gray-600 text-center mt-4">大きな丸型CTAボタン（2カラム配置）</p>
</div>`,
    relatedTech: ['cta-button-with-arrow-icon', 'two-column-cta-cards', 'rounded-full-cta-button']
  },
  {
    slug: 'accordion-faq-green-background',
    title: 'アコーディオン型FAQ - 緑色の背景と開閉アニメーション',
    category: 'UIコンポーネント',
    description: 'クリックで質問を開閉できるアコーディオン型FAQ。緑色の背景（bg-green-100）にQ.ラベル、クリックで白背景のA.エリアが表示される。Chevronアイコンで開閉状態を視覚化。ホバーエフェクトとスムーズなアニメーションで優れたUXを提供。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/works/tokai-parts-industry/recruit/faq/page.tsx (128-158行目)'
    ],
    code: `'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '会社説明会に参加するにはどうすればいいですか？',
      answer: 'こちらの説明会ページからエントリーをお願いします。\\n\\n新卒採用　中途採用\\n\\nご不明な点がありましたら、下記までご連絡ください。'
    },
    {
      question: '勤務地はどこになりますか？',
      answer: '新卒採用：技能職・事務技術職（内定者）\\n\\n技能職：本社工場・知立工場・いなべ工場'
    },
    // ... more FAQs
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-green-100 rounded-lg overflow-hidden"
        >
          {/* 質問ヘッダー */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-200 transition-colors"
          >
            <div className="flex items-start gap-3 flex-1">
              <span className="text-green-700 font-bold flex-shrink-0">Q.</span>
              <span className="text-gray-900 font-medium">{faq.question}</span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
            )}
          </button>

          {/* 回答エリア（開いているときのみ表示） */}
          {openIndex === index && (
            <div className="px-6 py-5 bg-white border-t border-green-200">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">A.</span>
                <div className="text-gray-700 whitespace-pre-line">{faq.answer}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}`,
    prompt: `クリックで開閉できるアコーディオン型FAQを実装してください。

## 要件

### 状態管理
1. useState で openIndex を管理（number | null）
2. クリックで開閉をトグル
3. 他の項目をクリックしたら前の項目を閉じる

### 質問ヘッダー
1. 背景色: bg-green-100（淡い緑）
2. ホバー: hover:bg-green-200（少し濃い緑）
3. パディング: px-6 py-5
4. レイアウト: flex items-center justify-between
5. 角丸: rounded-lg
6. オーバーフロー: overflow-hidden

### 質問コンテンツ
1. flex items-start gap-3 で横並び配置
2. Q.ラベル: text-green-700 font-bold flex-shrink-0
3. 質問テキスト: text-gray-900 font-medium
4. アイコン: ChevronUp/ChevronDown（w-6 h-6、text-gray-600）
5. アイコンは開閉状態に応じて切り替え

### 回答エリア
1. 条件付きレンダリング: {openIndex === index && ...}
2. 背景色: bg-white（白）
3. ボーダー: border-t border-green-200
4. パディング: px-6 py-5
5. flex items-start gap-3 で横並び配置
6. A.ラベル: text-blue-600 font-bold flex-shrink-0
7. 回答テキスト: text-gray-700 whitespace-pre-line（改行対応）

### アイコン
- lucide-react の ChevronDown と ChevronUp を使用
- flex-shrink-0 で縮小を防止

## 実装手順

1. useState で openIndex を定義
2. FAQデータを配列で準備（question, answer）
3. map でFAQ項目をレンダリング
4. 各項目を bg-green-100 の div で囲む
5. button要素でヘッダーを作成（onClick で開閉制御）
6. 条件付きレンダリングで回答エリアを表示
7. アイコンは openIndex === index で切り替え

## デザインのポイント

- 緑色（green-100, green-200）で柔らかく親しみやすい印象
- Q.ラベルは緑色（green-700）、A.ラベルは青色（blue-600）で区別
- ホバーエフェクト（hover:bg-green-200）で操作可能であることを示唆
- Chevronアイコンで開閉状態を明確に視覚化
- space-y-4 でFAQ項目間に適度なスペース
- whitespace-pre-line で改行を保持し読みやすく

## アニメーション（オプション）

スムーズな開閉アニメーションを追加する場合:
- max-height と transition を使用
- または @headlessui/react の Disclosure コンポーネントを使用

## 使用例

FAQページ、サポートページ、ヘルプページなどで、多くの質問を効率的に表示するために使用。`,
    preview: `<div class="space-y-4">
  <!-- FAQ項目1（開いている状態） -->
  <div class="bg-green-100 rounded-lg overflow-hidden">
    <button class="w-full px-6 py-5 flex items-center justify-between text-left bg-green-200">
      <div class="flex items-start gap-3 flex-1">
        <span class="text-green-700 font-bold">Q.</span>
        <span class="text-gray-900 font-medium">会社説明会に参加するにはどうすればいいですか？</span>
      </div>
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <div class="px-6 py-5 bg-white border-t border-green-200">
      <div class="flex items-start gap-3">
        <span class="text-blue-600 font-bold">A.</span>
        <div class="text-gray-700 text-sm">こちらの説明会ページからエントリーをお願いします。ご不明な点がありましたら、お問い合わせください。</div>
      </div>
    </div>
  </div>

  <!-- FAQ項目2（閉じている状態） -->
  <div class="bg-green-100 rounded-lg overflow-hidden">
    <button class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-200">
      <div class="flex items-start gap-3 flex-1">
        <span class="text-green-700 font-bold">Q.</span>
        <span class="text-gray-900 font-medium">勤務地はどこになりますか？</span>
      </div>
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>

  <p class="text-xs text-gray-600 text-center mt-4">アコーディオン型FAQ</p>
</div>`,
    relatedTech: ['tab-navigation-buttons', 'question-bracket-decoration', 'category-badge']
  },
  {
    slug: 'section-title-left-border-accent',
    title: 'セクションタイトル左装飾線 - 縦の境界線で強調',
    category: 'デザイン・ビジュアル',
    description: 'セクションタイトルの左側に太い縦線（border-left）を配置して視覚的に強調するデザインパターン。4px〜8pxの太さの縦線と適度な左パディングで、タイトルを目立たせる。ブランドカラーの縦線がモダンで洗練された印象を与える。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/mnt/c/WEBサイトUI/企業名（株式会社）/about/1.jpg（元デザイン）'
    ],
    code: `{/* パターン1: 基本形 - 太い縦線 */}
<h2 className="text-3xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
  企業理念
</h2>

{/* パターン2: より太い縦線（8px） */}
<h2 className="text-3xl font-bold text-blue-900 border-l-8 border-blue-600 pl-6">
  トップメッセージ
</h2>

{/* パターン3: グラデーション縦線（Tailwind 3.0+） */}
<div className="relative">
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>
  <h2 className="text-3xl font-bold text-blue-900 pl-6">
    私たちのビジョン
  </h2>
</div>

{/* パターン4: 複数色の縦線 */}
<div className="relative">
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
  <div className="absolute left-2 top-0 bottom-0 w-1 bg-orange-500"></div>
  <h2 className="text-3xl font-bold text-gray-900 pl-8">
    会社概要
  </h2>
</div>

{/* パターン5: アニメーション付き縦線 */}
<div className="relative group">
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transition-all group-hover:w-2"></div>
  <h2 className="text-3xl font-bold text-blue-900 pl-6 transition-all group-hover:pl-8">
    事業内容
  </h2>
</div>`,
    prompt: `セクションタイトルの左側に太い縦線を配置して視覚的に強調してください。

## 要件

### 基本デザイン
1. 縦線の太さ: border-l-4（4px）または border-l-8（8px）
2. 縦線の色: ブランドカラー（例: border-blue-600）
3. 左パディング: pl-4 または pl-6（縦線の太さに応じて調整）
4. タイトルのフォントサイズ: text-2xl 〜 text-4xl
5. タイトルのフォントウェイト: font-bold
6. タイトルの色: text-blue-900 または text-gray-900

### 実装パターン

#### パターン1: シンプルな縦線（推奨）
- border-l-4 border-blue-600 pl-4
- Tailwindのborder-leftユーティリティを使用
- 最も簡潔で実装しやすい

#### パターン2: より太い縦線
- border-l-8 border-blue-600 pl-6
- より強い視覚的インパクト
- 大きなタイトルに適している

#### パターン3: グラデーション縦線
- 絶対配置のdivでグラデーション背景を作成
- bg-gradient-to-b from-blue-600 to-blue-400
- より洗練された印象

#### パターン4: 複数色の縦線
- 2本以上の縦線を並べて配置
- ブランドカラーの組み合わせ（青+オレンジなど）
- より複雑だが独自性のあるデザイン

#### パターン5: アニメーション付き
- ホバー時に縦線が太くなる（transition-all）
- グループホバーでタイトルと連動

## 実装手順

1. タイトル要素（h2など）を用意
2. border-l-4 と border-blue-600 を追加
3. pl-4 で左パディングを設定（縦線とテキストの間隔）
4. text-3xl font-bold で適切なサイズと太さに
5. text-blue-900 で色を設定

## デザインのポイント

- 縦線の太さは4px（border-l-4）が標準、8px（border-l-8）は大見出しに使用
- 左パディングは縦線の太さの1.5〜2倍が目安（4px→pl-4、8px→pl-6）
- 縦線の色はブランドカラーを使用し、タイトルの色はやや濃いめに
- セクション全体で統一感を持たせる（全てのセクションタイトルで同じスタイル）
- 縦線の高さはタイトルのline-heightに自動的に合わせられる

## 色のバリエーション

- 青系: border-blue-600, text-blue-900
- 緑系: border-green-600, text-green-900
- オレンジ系: border-orange-600, text-orange-900
- グレー系: border-gray-600, text-gray-900
- グラデーション: bg-gradient-to-b from-blue-600 to-purple-600

## 使用例

会社情報ページ、サービス紹介ページ、ブログ記事のセクションタイトルなど、コンテンツを明確に区切りたい場合に使用。`,
    preview: `<div class="space-y-8 bg-gray-50 p-8 rounded-lg">
  <!-- パターン1: 基本形 -->
  <div>
    <h3 class="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
      企業理念
    </h3>
    <p class="text-sm text-gray-600 mt-2 pl-4">border-l-4 + pl-4</p>
  </div>

  <!-- パターン2: より太い縦線 -->
  <div>
    <h3 class="text-2xl font-bold text-blue-900 border-l-8 border-blue-600 pl-6">
      トップメッセージ
    </h3>
    <p class="text-sm text-gray-600 mt-2 pl-6">border-l-8 + pl-6</p>
  </div>

  <!-- パターン3: グラデーション縦線 -->
  <div class="relative">
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
    <h3 class="text-2xl font-bold text-blue-900 pl-6">
      私たちのビジョン
    </h3>
    <p class="text-sm text-gray-600 mt-2 pl-6">グラデーション</p>
  </div>

  <!-- パターン4: 複数色 -->
  <div class="relative">
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
    <div class="absolute left-2 top-0 bottom-0 w-1 bg-orange-500"></div>
    <h3 class="text-2xl font-bold text-gray-900 pl-8">
      会社概要
    </h3>
    <p class="text-sm text-gray-600 mt-2 pl-8">2色の縦線</p>
  </div>

  <p class="text-xs text-gray-500 text-center mt-6">セクションタイトル左装飾線のバリエーション</p>
</div>`,
    relatedTech: ['title-underline-decoration', 'large-english-category-label', 'point-number-label']
  },
  {
    slug: 'large-color-card-cta-split-layout',
    title: '大きなカラーカードCTA - 2カラム分割とアウトラインボタン',
    category: 'UIコンポーネント',
    description: 'ページ下部に配置される2つの大きなカラーカード（RECRUIT/CONTACT）。背景画像とオーバーレイの上に、左右でブランドカラーに塗り分けられたカードを配置。各カードにSVGアイコン、大きなタイトル、説明文、白枠のアウトラインボタンを含む。ホバー時にボタンが白背景に反転し、視覚的フィードバックを提供。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/components/works/tokai-parts-industry/CTASection.tsx'
    ],
    code: `import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/factory-aerial.jpg"
          alt="CTA背景"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        {/* RECRUIT カード */}
        <div className="bg-[#FF6B35] px-12 py-24 text-white">
          <div className="max-w-md mx-auto space-y-6">
            {/* アイコン */}
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-4xl font-bold">RECRUIT</h2>
            <p className="text-xl leading-relaxed">
              企業名に興味を
              <br />
              持ってくださった方はこちらへ
            </p>
            <Link
              href="/recruit"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#FF6B35] transition-all"
            >
              詳しくはこちら
              <svg
                className="w-4 h-4 ml-2 inline"
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
            </Link>
          </div>
        </div>

        {/* CONTACT カード */}
        <div className="bg-[#2563EB] px-12 py-24 text-white">
          <div className="max-w-md mx-auto space-y-6">
            {/* アイコン */}
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-4xl font-bold">CONTACT</h2>
            <p className="text-xl leading-relaxed">
              企業名、製品に関する
              <br />
              お問い合わせ・ご相談窓口はこちらをご覧ください。
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2563EB] transition-all"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}`,
    prompt: `ページ下部に2つの大きなカラーカード（RECRUIT/CONTACT）を実装してください。

## 要件

### 全体構造
1. セクション: relative py-0 overflow-hidden
2. 背景画像: absolute inset-0 で全体を覆う
3. オーバーレイ: bg-black/60 で背景を暗くする
4. カードグリッド: relative z-10 grid grid-cols-1 lg:grid-cols-2

### 背景画像
1. Next.js Imageコンポーネントで実装
2. fill と object-cover で全体を覆う
3. 工場や製造現場の航空写真など

### カードデザイン
1. 左カード（RECRUIT）: bg-[#FF6B35]（オレンジ）
2. 右カード（CONTACT）: bg-[#2563EB]（青）
3. パディング: px-12 py-24
4. テキスト色: text-white
5. 最大幅: max-w-md mx-auto（中央揃え）
6. スペーシング: space-y-6

### カード内容
1. SVGアイコン: w-16 h-16 mb-4
   - RECRUIT: 書類アイコン
   - CONTACT: メールアイコン
2. タイトル: text-4xl font-bold
3. 説明文: text-xl leading-relaxed
   - brタグで改行可能
4. ボタン: アウトラインボタン（下記参照）

### アウトラインボタン
1. 枠線: border-2 border-white
2. テキスト: text-white
3. パディング: px-8 py-3
4. 角丸: rounded-lg
5. ホバー効果: hover:bg-white hover:text-[カードの色]
6. トランジション: transition-all
7. 矢印アイコン（オプション）: ml-2 inline

### SVGアイコン
- Heroicons を使用
- strokeWidth={1.5} で線の太さを調整
- w-16 h-16 で大きめに表示

### レスポンシブ対応
1. モバイル: grid-cols-1（縦積み）
2. デスクトップ: lg:grid-cols-2（横並び）

## 実装手順

1. セクションタグで相対配置を設定
2. 背景画像とオーバーレイを絶対配置で全体に配置
3. grid layout で2カラム配置（レスポンシブ対応）
4. 各カードをブランドカラーで塗りつぶし
5. カード内容: アイコン、タイトル、説明文、ボタンを縦に配置
6. アウトラインボタンでホバー時に反転

## デザインのポイント

- 背景画像とオーバーレイで深みを作る
- 2つのブランドカラー（オレンジ+青）で視覚的なバランス
- 大きなアイコン（w-16 h-16）で視認性を確保
- 白枠ボタンがカラー背景に映える
- ホバー時の反転（白背景+カラー文字）で視覚的フィードバック
- space-y-6 で適度な縦の間隔

## 色のバリエーション

- オレンジ系: bg-[#FF6B35], hover:text-[#FF6B35]
- 青系: bg-[#2563EB], hover:text-[#2563EB]
- 緑系: bg-[#10B981], hover:text-[#10B981]
- 赤系: bg-[#EF4444], hover:text-[#EF4444]

## 使用例

コーポレートサイトのページ下部、フッター直前に配置し、RECRUITとCONTACTへの強力な導線を作る。`,
    preview: `<div class="relative h-64 overflow-hidden rounded-lg">
  <!-- 背景 -->
  <div class="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500"></div>
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- カード -->
  <div class="relative z-10 grid grid-cols-2 h-full">
    <!-- RECRUITカード -->
    <div class="bg-orange-500 px-8 py-12 text-white flex flex-col justify-center items-center">
      <svg class="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 class="text-2xl font-bold mb-2">RECRUIT</h3>
      <p class="text-xs mb-3 text-center">興味を持ってくださった方へ</p>
      <button class="border-2 border-white text-white px-4 py-1.5 rounded text-xs hover:bg-white hover:text-orange-500 transition-all">
        詳しくはこちら
      </button>
    </div>

    <!-- CONTACTカード -->
    <div class="bg-blue-600 px-8 py-12 text-white flex flex-col justify-center items-center">
      <svg class="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <h3 class="text-2xl font-bold mb-2">CONTACT</h3>
      <p class="text-xs mb-3 text-center">お問い合わせ窓口</p>
      <button class="border-2 border-white text-white px-4 py-1.5 rounded text-xs hover:bg-white hover:text-blue-600 transition-all">
        お問い合わせ
      </button>
    </div>
  </div>

  <p class="absolute bottom-2 left-0 right-0 text-center text-xs text-white">大きなカラーカードCTA（2カラム分割）</p>
</div>`,
    relatedTech: ['two-column-cta-cards', 'cta-button-with-arrow-icon', 'white-outline-button-overlay']
  },
  {
    slug: 'figma-wireframe-creation',
    title: 'Figmaでのワイヤーフレイム作成 - ローファイからハイファイまで',
    category: 'ワイヤーフレイム・設計',
    description: 'Figmaを使用したワイヤーフレイム作成の標準的なワークフロー。Auto Layoutを活用したレスポンシブ対応、コンポーネント化による効率化、グレースケールでの情報設計重視のアプローチ。',
    project: 'tokai-parts-industry',
    usedIn: [
      'Figmaファイル: 企業名_ワイヤーフレイム.fig（想定）'
    ],
    code: `// Figmaでのワイヤーフレイム作成手順

## 1. 準備
- 新しいFigmaファイルを作成
- フレームサイズを設定（Desktop: 1440px, Tablet: 768px, Mobile: 375px）
- グリッドシステムを設定（12カラムグリッド、ガター: 24px）

## 2. コンポーネント作成
### ボタンコンポーネント
- 背景: グレー矩形（#E5E5E5）
- テキスト: 14px, Medium
- パディング: 12px 24px
- Auto Layoutで構成（Horizontal, Space Between: 8px）
- Variants: Primary, Secondary, Outline

### カードコンポーネント
- 背景: 白矩形 + ドロップシャドウ（Blur: 4px, Y: 2px）
- 角丸: 8px
- Auto Layoutで内容を配置（Vertical, Spacing: 16px）
- パディング: 24px

### ナビゲーションバー
- 背景: グレー矩形（#F5F5F5）
- Auto Layout: Horizontal, Space Between
- 高さ: 64px

## 3. レイアウト構築
### ヘッダー
- ロゴエリア（placeholder rectangle）
- ナビゲーションメニュー（テキストリスト）
- CTAボタン

### ヒーローセクション
- 背景画像placeholder（斜線パターン）
- 見出しテキスト（32px Bold）
- サブテキスト（16px Regular）
- CTAボタン

### コンテンツセクション
- セクションタイトル（24px Bold）
- カードグリッド（Auto Layout、Wrap）
- 2〜3カラムレイアウト

## 4. アノテーション追加
- テキストボックスでインタラクションを説明
- 矢印でフローを示す
- 赤枠で重要な要素を強調

## 5. レスポンシブ対応
- Auto Layoutの設定（Fill Container、Hug Contents）
- Constraintsの設定（Left & Right、Top）
- 各ブレークポイントで確認

## 6. エクスポート
- PDF形式でエクスポート（開発者共有用）
- PNG形式でエクスポート（プレゼン用）
- Figmaリンクで共有（コラボレーション用）`,
    prompt: `Figmaでワイヤーフレイムを作成してください。

## 要件

### 基本設定
1. フレームサイズ: Desktop 1440px、Tablet 768px、Mobile 375px
2. グリッドシステム: 12カラムグリッド、ガター24px
3. カラーパレット: グレースケールのみ（#FFFFFF、#F5F5F5、#E5E5E5、#333333）
4. フォント: Inter（14px、16px、24px、32px）

### コンポーネント作成
1. ボタン: Auto Layout、Variants（Primary/Secondary/Outline）
2. カード: 白背景、ドロップシャドウ、8px角丸
3. ナビゲーションバー: 64px高さ、Auto Layout（Space Between）
4. フォーム要素: Input、Select、Textarea

### レイアウト構築
1. ヘッダー: ロゴ + ナビゲーション + CTA
2. ヒーローセクション: 背景placeholder + 見出し + CTA
3. コンテンツセクション: グリッドレイアウト、カード配置
4. フッター: 3〜4カラムレイアウト

### Auto Layout活用
1. 全てのコンポーネントにAuto Layoutを適用
2. レスポンシブ対応（Fill Container、Hug Contents）
3. Spacing設定（8px、16px、24px、32pxの倍数）

### アノテーション
1. インタラクション説明（テキストボックス）
2. フロー図（矢印）
3. 重要要素の強調（赤枠）

## 実装手順

1. Figmaで新規ファイル作成
2. フレームとグリッドを設定
3. コンポーネントライブラリを作成
4. ページレイアウトを構築
5. Auto Layoutで整理
6. アノテーションを追加
7. エクスポート（PDF、PNG、Figmaリンク）

## デザインのポイント

- グレースケールで情報設計に集中
- Auto Layoutで効率的なレスポンシブ対応
- コンポーネント化で一貫性を保つ
- 実際のコンテンツ量を想定したサイズ設定
- アノテーションで開発者に意図を伝える

## 使用例

新規プロジェクトの初期設計、クライアントへの提案、開発前の仕様確認に使用。`,
    wireframe: '/wireframes/tokai-parts-industry-wireframe.pdf',
    relatedTech: []
  },
  {
    slug: 'svg-wireframe-inline',
    title: 'SVGインラインワイヤーフレイム - コード内でのワイヤーフレイム表現',
    category: 'ワイヤーフレイム・設計',
    description: 'SVGを使用してコード内に直接ワイヤーフレイムを埋め込む手法。グレーの矩形、テキストplaceholder、斜線パターンで構成。ドキュメントやコメント内での視覚的な説明に有効。',
    project: 'tokai-parts-industry',
    usedIn: [
      'ドキュメント、設計書、コメント内'
    ],
    code: `<!-- シンプルなヘッダーのワイヤーフレイム -->
<svg width="800" height="80" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="800" height="80" fill="#F5F5F5" stroke="#E5E5E5" stroke-width="1"/>

  <!-- ロゴエリア -->
  <rect x="20" y="20" width="120" height="40" fill="#E5E5E5" stroke="#999" stroke-width="1"/>
  <text x="80" y="45" text-anchor="middle" font-size="12" fill="#666">LOGO</text>

  <!-- ナビゲーション -->
  <text x="200" y="45" font-size="14" fill="#333">会社情報</text>
  <text x="300" y="45" font-size="14" fill="#333">製品紹介</text>
  <text x="400" y="45" font-size="14" fill="#333">採用情報</text>

  <!-- CTAボタン -->
  <rect x="680" y="25" width="100" height="30" fill="#2563EB" stroke="#1E40AF" stroke-width="1" rx="4"/>
  <text x="730" y="45" text-anchor="middle" font-size="14" fill="#FFF">お問い合わせ</text>
</svg>

<!-- カードグリッドのワイヤーフレイム -->
<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="800" height="400" fill="#FFFFFF"/>

  <!-- カード1 -->
  <rect x="20" y="20" width="240" height="360" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="2" rx="8"/>
  <!-- 画像placeholder（斜線パターン） -->
  <defs>
    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
      <path d="M0,8 l8,-8 M-2,2 l4,-4 M6,10 l4,-4" stroke="#CCC" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="30" y="30" width="220" height="140" fill="url(#diagonalHatch)" stroke="#CCC" stroke-width="1"/>
  <!-- テキストplaceholder -->
  <line x1="30" y1="190" x2="220" y2="190" stroke="#E5E5E5" stroke-width="8"/>
  <line x1="30" y1="210" x2="180" y2="210" stroke="#E5E5E5" stroke-width="8"/>
  <line x1="30" y1="240" x2="240" y2="240" stroke="#E5E5E5" stroke-width="4"/>
  <line x1="30" y1="260" x2="220" y2="260" stroke="#E5E5E5" stroke-width="4"/>
  <line x1="30" y1="280" x2="200" y2="280" stroke="#E5E5E5" stroke-width="4"/>
  <!-- ボタン -->
  <rect x="30" y="330" width="100" height="30" fill="#E5E5E5" stroke="#CCC" stroke-width="1" rx="4"/>

  <!-- カード2（同様に繰り返し） -->
  <rect x="280" y="20" width="240" height="360" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="2" rx="8"/>
  <!-- ... -->

  <!-- カード3 -->
  <rect x="540" y="20" width="240" height="360" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="2" rx="8"/>
  <!-- ... -->
</svg>`,
    prompt: `SVGを使用してワイヤーフレイムを作成してください。

## 要件

### SVG基本設定
1. viewBox: 適切なサイズ設定（800x600など）
2. 背景色: #FFFFFF または #F5F5F5
3. グリッド: 必要に応じて表示

### 要素の表現
1. 矩形: rect要素、fill="#E5E5E5"、stroke="#999"
2. テキストplaceholder: line要素、stroke="#E5E5E5"、stroke-width="6-8"
3. 画像placeholder: パターン（斜線）で塗りつぶし
4. ボタン: rect + text、角丸（rx="4"）
5. アイコン: 簡単な図形（circle、path）

### 斜線パターン（画像placeholder用）
\`\`\`svg
<defs>
  <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
    <path d="M0,8 l8,-8 M-2,2 l4,-4 M6,10 l4,-4" stroke="#CCC" stroke-width="1"/>
  </pattern>
</defs>
<rect fill="url(#diagonalHatch)"/>
\`\`\`

### レイアウトパターン
1. ヘッダー: ロゴ + ナビ + CTA
2. カード: 画像placeholder + テキストplaceholder + ボタン
3. フォーム: ラベル + 入力フィールド
4. フッター: 3〜4カラム

## 実装手順

1. SVGタグで基本構造を作成
2. 背景とグリッドを設定
3. 各要素を矩形とテキストで配置
4. 画像placeholderは斜線パターンで表現
5. テキストplaceholderは太い線で表現
6. アノテーションをテキストで追加

## デザインのポイント

- シンプルな図形で構成
- グレースケールで情報設計に集中
- 実際のサイズ感を意識
- SVGなので拡大縮小しても劣化しない
- コード内に埋め込み可能

## 使用例

設計書、READMEファイル、コメント内での視覚的な説明、ドキュメント生成ツールとの連携。`,
    preview: `<svg width="100%" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="400" height="200" fill="#F5F5F5"/>

  <!-- ヘッダーエリア -->
  <rect x="10" y="10" width="380" height="40" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1" rx="4"/>
  <rect x="20" y="20" width="60" height="20" fill="#E5E5E5"/>
  <text x="50" y="33" text-anchor="middle" font-size="10" fill="#666">LOGO</text>
  <text x="120" y="33" font-size="11" fill="#333">Nav1</text>
  <text x="170" y="33" font-size="11" fill="#333">Nav2</text>
  <text x="220" y="33" font-size="11" fill="#333">Nav3</text>
  <rect x="320" y="22" width="60" height="16" fill="#2563EB" rx="3"/>
  <text x="350" y="33" text-anchor="middle" font-size="9" fill="#FFF">CTA</text>

  <!-- カードエリア -->
  <rect x="10" y="70" width="120" height="120" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1" rx="4"/>
  <defs>
    <pattern id="hatch1" patternUnits="userSpaceOnUse" width="6" height="6">
      <path d="M0,6 l6,-6" stroke="#DDD" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="15" y="75" width="110" height="60" fill="url(#hatch1)" stroke="#CCC" stroke-width="0.5"/>
  <line x1="15" y1="145" x2="110" y2="145" stroke="#E5E5E5" stroke-width="4"/>
  <line x1="15" y1="155" x2="90" y2="155" stroke="#E5E5E5" stroke-width="4"/>
  <rect x="15" y="170" width="50" height="12" fill="#E5E5E5" rx="2"/>

  <rect x="140" y="70" width="120" height="120" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1" rx="4"/>
  <rect x="145" y="75" width="110" height="60" fill="url(#hatch1)" stroke="#CCC" stroke-width="0.5"/>
  <line x1="145" y1="145" x2="240" y2="145" stroke="#E5E5E5" stroke-width="4"/>
  <line x1="145" y1="155" x2="220" y2="155" stroke="#E5E5E5" stroke-width="4"/>
  <rect x="145" y="170" width="50" height="12" fill="#E5E5E5" rx="2"/>

  <rect x="270" y="70" width="120" height="120" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1" rx="4"/>
  <rect x="275" y="75" width="110" height="60" fill="url(#hatch1)" stroke="#CCC" stroke-width="0.5"/>
  <line x1="275" y1="145" x2="370" y2="145" stroke="#E5E5E5" stroke-width="4"/>
  <line x1="275" y1="155" x2="350" y2="155" stroke="#E5E5E5" stroke-width="4"/>
  <rect x="275" y="170" width="50" height="12" fill="#E5E5E5" rx="2"/>

  <text x="200" y="15" text-anchor="middle" font-size="9" fill="#999">SVGワイヤーフレイム</text>
</svg>`,
    relatedTech: ['figma-wireframe-creation']
  },
  {
    slug: 'figma-design-comp-hifi',
    title: 'Figmaハイファイデザインカンプ - 実装レベルのデザイン',
    category: 'デザインカンプ・モックアップ',
    description: 'Figmaで実装レベルの高精度デザインカンプを作成。実際の色、フォント、画像を使用し、開発者が直接参照できるデザイン仕様を提供。コンポーネント、Auto Layout、Variantsを活用した効率的なデザインシステム構築。',
    project: 'tokai-parts-industry',
    usedIn: [
      'Figmaファイル: 企業名_デザインカンプ.fig（想定）'
    ],
    code: `// Figmaハイファイデザインカンプ作成手順

## 1. デザインシステムの構築

### カラーパレット
- Primary: #2563EB (Blue 600)
- Secondary: #FF6B35 (Orange)
- Success: #10B981 (Green 500)
- Text: #111827 (Gray 900), #6B7280 (Gray 500)
- Background: #FFFFFF, #F9FAFB (Gray 50)

### タイポグラフィ
- 見出し1: Inter 48px/56px Bold
- 見出し2: Inter 36px/44px Bold
- 見出し3: Inter 24px/32px Bold
- 本文: Inter 16px/24px Regular
- キャプション: Inter 14px/20px Regular

### スペーシング
- 8px Grid System
- 間隔: 8px, 16px, 24px, 32px, 48px, 64px

## 2. コンポーネントライブラリ

### ボタンコンポーネント
- Variants: Primary, Secondary, Outline, Ghost
- States: Default, Hover, Active, Disabled
- Sizes: Small (32px), Medium (40px), Large (48px)
- Auto Layout: Horizontal, Padding: 16px 24px
- 角丸: 8px

### カードコンポーネント
- 背景: #FFFFFF
- ドロップシャドウ: 0px 4px 6px rgba(0,0,0,0.1)
- 角丸: 12px
- Auto Layout: Vertical, Spacing: 16px, Padding: 24px
- Variants: Default, Hover (shadow: 0px 8px 12px)

### フォーム要素
- Input: 高さ 48px、角丸 8px、ボーダー #E5E7EB
- Select: 同上 + ドロップダウンアイコン
- Textarea: min-height 120px
- States: Default, Focus, Error, Disabled

## 3. ページレイアウト

### ヘッダー
- 高さ: 80px
- 背景: #FFFFFF、shadow: 0px 2px 4px rgba(0,0,0,0.05)
- ロゴ: 160px x 40px
- ナビゲーション: Inter 16px Medium
- CTA: Primary Button

### ヒーローセクション
- 高さ: 600px
- 背景画像 + グラデーションオーバーレイ
- 見出し: Inter 56px Bold, White
- サブテキスト: Inter 20px Regular, White
- CTA: 2つのボタン（Primary + Outline）

### コンテンツセクション
- セクション間隔: 96px
- セクションタイトル: Inter 36px Bold
- グリッドレイアウト: 3カラム、gap: 32px

## 4. インタラクション

### ホバーエフェクト
- ボタン: 背景色が10%暗くなる + shadow拡大
- カード: shadow: 0px 8px 16px + transform: translateY(-4px)
- リンク: 下線表示 + color変更

### トランジション
- All: 200ms ease-in-out
- Shadow: 300ms ease-in-out
- Transform: 250ms cubic-bezier(0.4, 0, 0.2, 1)

## 5. レスポンシブ

### ブレークポイント
- Desktop: 1440px
- Laptop: 1024px
- Tablet: 768px
- Mobile: 375px

### レイアウト調整
- グリッド: 3カラム → 2カラム → 1カラム
- フォントサイズ: 見出しを20-30%縮小
- スペーシング: パディング・マージンを50%縮小

## 6. デザイントークン

### Figma Variables機能を使用
- Colors: Primitive Colors → Semantic Colors
- Spacing: Space-1 (8px) → Space-8 (64px)
- Typography: Font Size, Line Height, Font Weight
- Shadows: elevation-1 → elevation-5

## 7. 開発者への引き渡し

### Figma Dev Mode
- コンポーネントにコード説明を追加
- Auto Layoutの設定を明示
- CSS変数名を記載

### エクスポート
- アイコン: SVG形式
- 画像: WebP形式（最適化済み）
- デザイントークン: JSON形式`,
    prompt: `Figmaでハイファイデザインカンプを作成してください。

## 要件

### デザインシステム
1. カラーパレット: Primary, Secondary, Success, Text, Background
2. タイポグラフィ: 見出し1-3、本文、キャプション（Inter使用）
3. スペーシング: 8px Grid System
4. コンポーネントライブラリ: ボタン、カード、フォーム要素

### コンポーネント設計
1. Variants: 状態とサイズのバリエーション
2. Auto Layout: レスポンシブ対応
3. States: Default, Hover, Active, Disabled
4. Constraints: 親フレームに対する制約

### ページデザイン
1. ヘッダー: ロゴ + ナビ + CTA
2. ヒーローセクション: 背景画像 + オーバーレイ + 見出し + CTA
3. コンテンツセクション: グリッドレイアウト、カード配置
4. フッター: 3-4カラムレイアウト

### インタラクション
1. ホバーエフェクト: 色変更、shadow拡大、transform
2. トランジション: 200-300ms ease-in-out
3. プロトタイピング: ページ遷移、モーダル表示

### レスポンシブ
1. ブレークポイント: Desktop, Laptop, Tablet, Mobile
2. Auto Layoutで自動調整
3. フォントサイズ・スペーシングの調整

### デザイントークン
1. Figma Variables: 色、スペーシング、タイポグラフィ
2. エクスポート: JSON形式
3. Tailwind CSSとの連携

## 実装手順

1. デザインシステムを構築（カラー、タイポグラフィ、スペーシング）
2. コンポーネントライブラリを作成
3. ページレイアウトをデザイン
4. インタラクションを追加（Prototype機能）
5. レスポンシブ対応を確認
6. デザイントークンをエクスポート
7. 開発者に引き渡し（Dev Mode）

## デザインのポイント

- 実装可能なデザインを心がける
- デザインシステムで一貫性を保つ
- Auto Layoutで効率化
- 開発者が理解しやすいアノテーション
- デザイントークンで開発との連携を強化

## 使用例

プロダクション環境で使用する最終デザイン、開発者への引き渡し、クライアントへの最終提案。`,
    wireframe: '/design-comps/tokai-parts-industry-design.fig',
    relatedTech: ['figma-wireframe-creation']
  },
  {
    slug: 'tailwind-based-design-tokens',
    title: 'Tailwind CSSベースのデザイントークン - 設計と実装の一体化',
    category: 'デザインカンプ・モックアップ',
    description: 'Tailwind CSSの設定ファイルをデザイントークンとして活用。色、スペーシング、タイポグラフィをtailwind.config.jsで一元管理し、FigmaとコードでのUI設計を統一。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/tailwind.config.ts'
    ],
    code: `// tailwind.config.ts

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // カラーパレット
      colors: {
        // ブランドカラー
        brand: {
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB', // Primary
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
          orange: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#FF6B35', // Secondary
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
          },
        },
      },

      // フォントファミリー
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },

      // フォントサイズ
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['60px', { lineHeight: '72px' }],
      },

      // スペーシング
      spacing: {
        '18': '4.5rem',   // 72px
        '112': '28rem',   // 448px
        '128': '32rem',   // 512px
      },

      // ボーダー半径
      borderRadius: {
        '4xl': '2rem',    // 32px
      },

      // ドロップシャドウ
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },

      // アニメーション
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

// デザイントークンのJSONエクスポート（ビルド時に生成）
// design-tokens.json
{
  "colors": {
    "brand-blue-600": "#2563EB",
    "brand-orange-500": "#FF6B35"
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
    "8": "2rem"
  },
  "fontSize": {
    "base": "16px",
    "lg": "18px",
    "2xl": "24px"
  }
}`,
    prompt: `Tailwind CSSベースのデザイントークンを設定してください。

## 要件

### カラーパレット
1. ブランドカラー: Primary（青）、Secondary（オレンジ）
2. 各色に50-900のシェード
3. セマンティックカラー: success, warning, error
4. ニュートラルカラー: gray 50-900

### タイポグラフィ
1. フォントファミリー: sans（Inter, Noto Sans JP）、serif
2. フォントサイズ: xs〜6xl（line-heightも指定）
3. フォントウェイト: 400, 500, 600, 700

### スペーシング
1. デフォルト: 0.25rem刻み（4px刻み）
2. カスタム: 18, 112, 128など
3. 8px Grid Systemに準拠

### ボーダー半径
1. デフォルト: none, sm, md, lg, xl, 2xl, 3xl, full
2. カスタム: 4xl（2rem）

### シャドウ
1. デフォルト: sm, md, lg, xl, 2xl
2. カスタム: soft, medium, strong

### アニメーション
1. fade-in, slide-up, slide-down
2. keyframes定義
3. duration: 200ms, 300ms, 500ms

## 実装手順

1. tailwind.config.tsを作成
2. theme.extendでカスタマイズ
3. カラーパレットを定義
4. タイポグラフィを定義
5. スペーシングを定義
6. その他（shadow、animation等）を定義
7. デザイントークンをJSONエクスポート

## デザインのポイント

- Figmaのデザインと一致させる
- セマンティックな命名（brand-blue-600など）
- 8px Grid Systemに準拠
- line-heightも同時に指定
- JSONエクスポートでFigmaと連携

## 使用例

プロジェクト全体のデザインシステム、Figmaとコードの統一、デザイントークンの一元管理。`,
    relatedTech: ['figma-design-comp-hifi', 'figma-wireframe-creation']
  },
  {
    slug: 'html-tailwind-wireframe-creation',
    title: 'HTML/Tailwindベースのワイヤーフレイム作成 - Claude Codeで完結',
    category: 'ワイヤーフレイム・設計',
    description: 'Figmaを使わず、HTML+Tailwind CSSでワイヤーフレイムを作成。グレースケールのプレースホルダー要素で情報設計に集中。コード内で完結し、Claude Codeが直接作成可能。',
    project: 'tokai-parts-industry',
    usedIn: [
      '/src/app/wireframes/page.tsx（想定）'
    ],
    code: `// HTML/Tailwindワイヤーフレイム作成例

// 1. ヘッダーワイヤーフレイム
export const HeaderWireframe = () => {
  return (
    <div className="border-2 border-gray-300 bg-white p-4">
      <div className="flex items-center justify-between">
        {/* ロゴプレースホルダー */}
        <div className="h-10 w-32 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs text-gray-500">LOGO</span>
        </div>

        {/* ナビゲーションプレースホルダー */}
        <div className="flex space-x-6">
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="h-6 w-20 bg-gray-200 rounded" />
        </div>

        {/* CTAボタンプレースホルダー */}
        <div className="h-10 w-24 bg-gray-400 rounded flex items-center justify-center">
          <span className="text-xs text-white">CTA</span>
        </div>
      </div>
    </div>
  )
}

// 2. ヒーローセクションワイヤーフレイム
export const HeroWireframe = () => {
  return (
    <div className="border-2 border-gray-300 bg-gray-50 p-8 min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl">
        {/* 見出しプレースホルダー */}
        <div className="h-12 w-3/4 mx-auto bg-gray-300 rounded" />
        <div className="h-12 w-2/3 mx-auto bg-gray-300 rounded" />

        {/* サブテキストプレースホルダー */}
        <div className="space-y-2 mt-6">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 mx-auto bg-gray-200 rounded" />
          <div className="h-4 w-4/5 mx-auto bg-gray-200 rounded" />
        </div>

        {/* CTAボタン */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="h-12 w-32 bg-gray-400 rounded" />
          <div className="h-12 w-32 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  )
}

// 3. カードグリッドワイヤーフレイム
export const CardGridWireframe = () => {
  return (
    <div className="border-2 border-gray-300 bg-white p-8">
      {/* セクションタイトル */}
      <div className="mb-8">
        <div className="h-8 w-64 bg-gray-300 rounded mb-2" />
        <div className="h-4 w-96 bg-gray-200 rounded" />
      </div>

      {/* カードグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-2 border-gray-300 rounded-lg p-6 space-y-4">
            {/* 画像プレースホルダー（斜線パターン） */}
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center relative overflow-hidden">
              {/* 斜線パターン */}
              <div className="absolute inset-0 opacity-30"
                   style={{
                     backgroundImage: \`repeating-linear-gradient(
                       45deg,
                       transparent,
                       transparent 10px,
                       #999 10px,
                       #999 11px
                     )\`
                   }}>
              </div>
              <span className="text-gray-400 text-sm relative z-10">IMAGE</span>
            </div>

            {/* タイトルプレースホルダー */}
            <div className="h-6 w-3/4 bg-gray-300 rounded" />

            {/* テキストプレースホルダー */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
              <div className="h-3 w-4/5 bg-gray-200 rounded" />
            </div>

            {/* ボタンプレースホルダー */}
            <div className="h-10 w-24 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

// 4. フォームワイヤーフレイム
export const FormWireframe = () => {
  return (
    <div className="border-2 border-gray-300 bg-white p-8 max-w-2xl">
      <div className="space-y-6">
        {/* フォームフィールド */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            {/* ラベルプレースホルダー */}
            <div className="h-4 w-32 bg-gray-300 rounded" />

            {/* 入力フィールドプレースホルダー */}
            <div className="h-12 w-full border-2 border-gray-300 rounded bg-gray-50" />
          </div>
        ))}

        {/* テキストエリア */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="h-32 w-full border-2 border-gray-300 rounded bg-gray-50" />
        </div>

        {/* 送信ボタン */}
        <div className="h-12 w-32 bg-gray-400 rounded" />
      </div>
    </div>
  )
}

// 5. 完全なページワイヤーフレイム
export const FullPageWireframe = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderWireframe />
      <HeroWireframe />

      <div className="container mx-auto px-6 py-16 space-y-16">
        <CardGridWireframe />
        <FormWireframe />
      </div>

      {/* フッター */}
      <div className="border-2 border-gray-300 bg-gray-800 p-8">
        <div className="grid grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 w-24 bg-gray-600 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-700 rounded" />
                <div className="h-3 w-5/6 bg-gray-700 rounded" />
                <div className="h-3 w-4/5 bg-gray-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`,
    prompt: `HTML+Tailwind CSSでワイヤーフレイムを作成してください。

## 要件

### 基本原則
1. グレースケールのみ使用（色は使わない）
2. bg-gray-200, bg-gray-300で要素を表現
3. border-2 border-gray-300で境界を明確に
4. プレースホルダーテキストは最小限（"LOGO", "IMAGE"など）

### プレースホルダー要素

#### 画像プレースホルダー
\\\`\\\`\\\`tsx
<div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center relative overflow-hidden">
  <div className="absolute inset-0 opacity-30"
       style={{
         backgroundImage: \\\`repeating-linear-gradient(
           45deg,
           transparent,
           transparent 10px,
           #999 10px,
           #999 11px
         )\\\`
       }}>
  </div>
  <span className="text-gray-400 text-sm relative z-10">IMAGE</span>
</div>
\\\`\\\`\\\`

#### テキストプレースホルダー
\\\`\\\`\\\`tsx
{/* 見出し */}
<div className="h-8 w-64 bg-gray-300 rounded" />

{/* 段落 */}
<div className="space-y-2">
  <div className="h-4 w-full bg-gray-200 rounded" />
  <div className="h-4 w-5/6 bg-gray-200 rounded" />
  <div className="h-4 w-4/5 bg-gray-200 rounded" />
</div>
\\\`\\\`\\\`

#### ボタンプレースホルダー
\\\`\\\`\\\`tsx
{/* プライマリボタン */}
<div className="h-12 w-32 bg-gray-400 rounded" />

{/* セカンダリボタン */}
<div className="h-12 w-32 bg-gray-300 rounded" />
\\\`\\\`\\\`

#### 入力フィールドプレースホルダー
\\\`\\\`\\\`tsx
<div className="h-12 w-full border-2 border-gray-300 rounded bg-gray-50" />
\\\`\\\`\\\`

### レイアウトパターン

#### ヘッダー
- ロゴ（左）+ ナビ（中央）+ CTA（右）
- flex items-center justify-between

#### ヒーロー
- min-h-[400px]
- 中央揃え（flex items-center justify-center）
- 見出し + サブテキスト + CTAボタン

#### カードグリッド
- grid grid-cols-1 md:grid-cols-3 gap-6
- 各カード: 画像 + タイトル + テキスト + ボタン

#### フォーム
- space-y-6で縦積み
- ラベル + 入力フィールドのセット

#### フッター
- grid grid-cols-4 gap-8
- bg-gray-800で暗い背景

## 実装手順

1. コンポーネントファイルを作成（例: wireframes/HeaderWireframe.tsx）
2. グレースケールのプレースホルダー要素でレイアウトを構築
3. border-2 border-gray-300で境界を明確に
4. レスポンシブ対応（md:grid-cols-3など）
5. ページ全体のワイヤーフレイムを組み立て
6. ブラウザで確認し、レイアウトを調整

## デザインのポイント

- グレースケールで情報設計に集中
- 実際のサイズ感を意識（h-12, h-48など）
- プレースホルダーテキストは最小限
- 斜線パターンで画像エリアを明確に
- Tailwindクラスのみで実装（CSSファイル不要）
- Claude Codeが直接作成・修正可能

## 使用例

新規プロジェクトの初期設計、クライアントへの提案資料、開発前の情報設計確認、UIレビュー用資料。

## Figmaとの違い

- コード内で完結（別ツール不要）
- Claude Codeが直接編集可能
- バージョン管理（Git）が容易
- 実装と同じTailwindクラスを使用
- レスポンシブ対応が簡単
- ブラウザで即座に確認可能`,
    preview: `<div class="border-2 border-gray-300 bg-white p-4">
  <div class="flex items-center justify-between">
    <!-- ロゴ -->
    <div class="h-10 w-32 bg-gray-200 rounded flex items-center justify-center">
      <span class="text-xs text-gray-500">LOGO</span>
    </div>

    <!-- ナビ -->
    <div class="flex space-x-4">
      <div class="h-6 w-16 bg-gray-200 rounded"></div>
      <div class="h-6 w-16 bg-gray-200 rounded"></div>
      <div class="h-6 w-16 bg-gray-200 rounded"></div>
    </div>

    <!-- CTA -->
    <div class="h-10 w-24 bg-gray-400 rounded flex items-center justify-center">
      <span class="text-xs text-white">CTA</span>
    </div>
  </div>
</div>

<div class="border-2 border-gray-300 bg-gray-50 p-8 mt-4 min-h-[200px] flex items-center justify-center">
  <div class="text-center space-y-4 max-w-md">
    <!-- 見出し -->
    <div class="h-8 w-3/4 mx-auto bg-gray-300 rounded"></div>

    <!-- テキスト -->
    <div class="space-y-2">
      <div class="h-3 w-full bg-gray-200 rounded"></div>
      <div class="h-3 w-5/6 mx-auto bg-gray-200 rounded"></div>
    </div>

    <!-- ボタン -->
    <div class="flex justify-center space-x-3 mt-4">
      <div class="h-10 w-24 bg-gray-400 rounded"></div>
      <div class="h-10 w-24 bg-gray-300 rounded"></div>
    </div>
  </div>
</div>`,
    relatedTech: ['svg-wireframe-inline', 'tailwind-based-design-tokens']
  },
  {
    slug: 'project-setup-web-template-library',
    title: 'プロジェクトセットアップ',
    category: 'セットアップ・環境構築',
    description: '新規環境でこのプロジェクトをセットアップするための手順。依存パッケージのインストールから開発サーバー起動まで。',
    project: 'tokai-parts-industry',
    usedIn: ['/'],
    code: `# プロジェクトセットアップ手順

## 1. プロジェクトディレクトリに移動
cd /mnt/c/web-template-library

## 2. 依存パッケージをインストール
npm install

## 3. 開発サーバーを起動
npm run dev

## 4. ブラウザで確認
- ホーム: http://localhost:3000
- 技術一覧: http://localhost:3000/tech
- 企業名サイト: http://localhost:3000/works/tokai-parts-industry
- 企業名技術一覧: http://localhost:3000/works/tokai-parts-industry/tech

## インストールされる主なパッケージ
- Next.js 16.0.1
- React 19.2.0
- React DOM 19.2.0
- Tailwind CSS 4.0
- TypeScript 5.x
- lucide-react 0.552.0

## ビルド（本番環境用）
npm run build
npm start

## トラブルシューティング

### エラーが発生した場合
rm -rf node_modules package-lock.json
npm install

### Tailwind CSSが適用されない
rm -rf .next
npm run dev

### 型エラーが多発する
npm run lint`,
    prompt: `このプロジェクトを新規環境でセットアップしてください。

## 実行するコマンド

以下のコマンドを順番に実行してください：

\`\`\`bash
# 1. プロジェクトディレクトリに移動
cd /mnt/c/web-template-library

# 2. 依存パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
\`\`\`

## セットアップ完了の確認

開発サーバーが起動したら、以下のURLにアクセスして動作確認してください：

- ホーム: http://localhost:3000
- 技術一覧: http://localhost:3000/tech
- 企業名サイト: http://localhost:3000/works/tokai-parts-industry
- 企業名技術一覧: http://localhost:3000/works/tokai-parts-industry/tech

## インストールされるパッケージ

- Next.js 16.0.1（App Router）
- React 19.2.0
- Tailwind CSS 4.0
- TypeScript 5.x
- lucide-react（アイコンライブラリ）

## プロジェクト構成

- src/app/tech/ - 技術ドキュメント一覧・詳細ページ
- src/app/works/tokai-parts-industry/ - 企業名サイト
- src/data/technologies.ts - 技術データベース（60個）
- src/components/ - 共通コンポーネント

## トラブルシューティング

### エラーが発生した場合
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Tailwind CSSが適用されない
\`\`\`bash
rm -rf .next
npm run dev
\`\`\`

### TypeScript型エラー
\`\`\`bash
npm run lint
\`\`\`

## 環境要件

- Node.js v20以上
- npm v10以上
- OS: Windows（WSL2）、macOS、Linux

## 次のステップ

セットアップ完了後：

1. 技術ドキュメントを確認: http://localhost:3000/tech
2. 作品を確認: http://localhost:3000/works/tokai-parts-industry
3. 新しい技術を追加: TECH-DOC-QUICK-START.mdを参照
4. 新しい作品を追加: READMEを参照`,
    relatedTech: []
  },
  {
    slug: 'three-column-layout-watashi',
    title: '3カラムレイアウト - 固定幅カラム（370px + 270px + 300px）',
    category: 'レイアウト・構造',
    description: '異なる幅の3つのカラムを横並びに配置するレイアウト。更新情報、一覧、動画など異なるコンテンツタイプを同時に表示。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx'
    ],
    code: `{/* 3 Column Layout */}
<div className="top-box-wrapper">
  {/* Left Column - Updates */}
  <div className="top-box updates-box">
    <h2 className="section-title">更新情報</h2>
    <div className="scroll-area">
      {/* コンテンツ */}
    </div>
  </div>

  {/* Center Column - Kakugo List */}
  <div className="top-box kakugo-box">
    <h2 className="section-title">私のカクゴ一覧</h2>
    <div className="scroll-area">
      {/* コンテンツ */}
    </div>
  </div>

  {/* Right Column - Video */}
  <div className="top-box video-box">
    <div className="video-wrapper">
      {/* 動画プレーヤー */}
    </div>
  </div>
</div>

<style jsx>{\`
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

  @media (max-width: 1024px) {
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
  }
\`}</style>`,
    prompt: `TOPページに3カラムレイアウトを実装してください。

## 要件

### レイアウト構造
1. 左カラム（更新情報）: 370px幅
2. 中央カラム（私のカクゴ一覧）: 270px幅
3. 右カラム（動画）: 300px幅
4. カラム間のギャップ: 20px

### デザイン仕様
- 背景色: #ffffff（各カラム）
- マージン下: 55px（全体コンテナ）
- 右カラムのパディング上: 60px

### レスポンシブ対応
- 1024px以下: 縦並びに変更（flex-direction: column）
- モバイル: 全カラムを100%幅に
- ギャップ: 30pxに拡大（縦並び時）

## 実装手順

1. 親コンテナ（.top-box-wrapper）を作成
   - display: flex
   - gap: 20px

2. 3つの子要素（.top-box）を作成
   - 各カラムに固有クラス（.updates-box、.kakugo-box、.video-box）を追加
   - 固定幅を指定

3. レスポンシブメディアクエリを追加
   - @media (max-width: 1024px)で縦並びに変更

4. 各カラムにコンテンツを配置
   - セクションタイトル（<h2>）
   - スクロールエリア（左・中央）
   - 動画プレーヤー（右）

## デザインのポイント
- 異なる幅のカラムで視覚的な優先度を表現
- 更新情報（370px）を最も広く確保
- 動画（300px）も重要コンテンツとして大きめに
- 一覧（270px）はコンパクトに
- 合計幅: 370 + 20 + 270 + 20 + 300 = 980px（コンテナ幅に収まる）`,
    preview: `<div class="flex gap-5 mb-14">
  <div class="bg-white p-4 rounded" style="width: 370px">
    <h3 class="font-bold mb-4 pb-2 border-b-2 border-black">更新情報</h3>
    <div class="h-32 overflow-auto text-sm text-gray-600">
      更新情報がここに表示されます
    </div>
  </div>
  <div class="bg-white p-4 rounded" style="width: 270px">
    <h3 class="font-bold mb-4 pb-2 border-b-2 border-black">私のカクゴ一覧</h3>
    <div class="h-32 overflow-auto text-sm text-gray-600">
      一覧がここに表示されます
    </div>
  </div>
  <div class="bg-white p-4 rounded" style="width: 300px">
    <div class="bg-gradient-to-br from-purple-500 to-indigo-600 h-32 rounded flex items-center justify-center text-white">
      動画
    </div>
  </div>
</div>`,
    relatedTech: ['custom-scroll-area-watashi']
  },
  {
    slug: 'custom-scroll-area-watashi',
    title: 'カスタムスクロールエリア - 290px固定高さ',
    category: 'UIコンポーネント',
    description: '固定高さのスクロールエリアにカスタムスクロールバーを適用。視覚的に洗練されたデザインで多くのコンテンツを限られたスペースに表示。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx'
    ],
    code: `<div className="scroll-area">
  {/* スクロール可能なコンテンツ */}
</div>

<style jsx>{\`
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
\`}</style>`,
    prompt: `カスタムスクロールエリアを実装してください。

## 要件

### 基本設定
- 高さ: 290px（固定）
- 縦スクロール: 有効（overflow-y: auto）
- 横スクロール: 無効（overflow-x: hidden）
- パディング右: 8px（スクロールバー用のスペース）

### スクロールバーのデザイン
1. 幅: 6px
2. トラック（背景）: #f0f0f0
3. サム（つまみ）: #cccccc、角丸3px
4. ホバー時: #aaaaaa

## 実装手順

1. スクロールエリア要素を作成
   - class="scroll-area"
   - 固定高さを設定

2. オーバーフロープロパティを設定
   - overflow-y: auto（縦スクロール）
   - overflow-x: hidden（横スクロール無効）

3. Webkitスクロールバーのスタイリング
   - ::-webkit-scrollbar（幅）
   - ::-webkit-scrollbar-track（トラック）
   - ::-webkit-scrollbar-thumb（つまみ）
   - ::-webkit-scrollbar-thumb:hover（ホバー）

4. パディング調整
   - padding-right: 8px（スクロールバーとコンテンツの間隔）

## デザインのポイント
- 細めのスクロールバー（6px）で現代的なデザイン
- 淡い色使い（#f0f0f0、#cccccc）で主張しすぎない
- ホバー時の色変化で操作性を向上
- 固定高さ（290px）で一貫したレイアウト
- 複数のコンテンツを限られたスペースに効率的に表示`,
    preview: `<div class="h-72 overflow-y-auto overflow-x-hidden pr-2" style="scrollbar-width: thin; scrollbar-color: #cccccc #f0f0f0;">
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 border-b">
      <div class="w-12 h-12 rounded-full bg-blue-500"></div>
      <div class="flex-1">
        <p class="text-xs text-gray-500">2025.10.01</p>
        <p class="text-sm">更新情報アイテム 1</p>
      </div>
    </div>
    <div class="flex items-center gap-3 p-3 border-b">
      <div class="w-12 h-12 rounded-full bg-green-500"></div>
      <div class="flex-1">
        <p class="text-xs text-gray-500">2025.09.01</p>
        <p class="text-sm">更新情報アイテム 2</p>
      </div>
    </div>
    <div class="flex items-center gap-3 p-3 border-b">
      <div class="w-12 h-12 rounded-full bg-purple-500"></div>
      <div class="flex-1">
        <p class="text-xs text-gray-500">2025.09.01</p>
        <p class="text-sm">更新情報アイテム 3</p>
      </div>
    </div>
    <div class="flex items-center gap-3 p-3 border-b">
      <div class="w-12 h-12 rounded-full bg-red-500"></div>
      <div class="flex-1">
        <p class="text-xs text-gray-500">2025.08.01</p>
        <p class="text-sm">更新情報アイテム 4</p>
      </div>
    </div>
    <div class="flex items-center gap-3 p-3 border-b">
      <div class="w-12 h-12 rounded-full bg-yellow-500"></div>
      <div class="flex-1">
        <p class="text-xs text-gray-500">2025.07.01</p>
        <p class="text-sm">更新情報アイテム 5</p>
      </div>
    </div>
  </div>
</div>`,
    relatedTech: ['three-column-layout-watashi']
  },
  {
    slug: 'green-accent-button-watashi',
    title: 'グリーンアクセントボタン - ブランドカラー活用',
    category: 'UIコンポーネント',
    description: 'ブランドカラー（#8BC34A）を使用したCTAボタン。ホバー時のアニメーションとシャドウで視覚的なフィードバックを提供。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx',
      '/src/app/works/watashi-no-kakugo/persons/page.tsx',
      '/src/components/works/watashi-no-kakugo/Header.tsx'
    ],
    code: `<Link href="/works/watashi-no-kakugo/sns" className="more-button">
  ブログ一覧へ →
</Link>

<style jsx>{\`
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
\`}</style>`,
    prompt: `グリーンアクセントボタンを実装してください。

## 要件

### 基本デザイン
- パディング: 16px 56px
- 背景色（通常）: #999999（グレー）
- 背景色（ホバー）: #8BC34A（グリーン）
- 文字色: #ffffff（白）
- フォントサイズ: 14px
- フォントウェイト: bold
- 角丸: 2px

### ホバーアニメーション
- 背景色変化: #999999 → #8BC34A
- Y軸移動: translateY(-2px)
- ボックスシャドウ: 0 4px 12px rgba(139, 195, 74, 0.3)
- トランジション: all 0.3s ease

## 実装手順

1. ボタン要素を作成
   - inline-block で表示
   - text-decoration: none（リンクの下線を削除）

2. 基本スタイルを設定
   - パディング、背景色、文字色、フォント

3. ホバースタイルを追加
   - :hoverセレクタで変化を定義
   - transform、background、box-shadowを変更

4. トランジション効果を設定
   - transition: all 0.3s ease
   - すべてのプロパティ変化を滑らかに

## デザインのポイント
- 通常時はグレー（#999999）で控えめに
- ホバー時にグリーン（#8BC34A）でブランドを強調
- translateY(-2px)で浮き上がる感覚
- シャドウでさらに立体感を強調
- トランジションで心地よい操作感を実現`,
    preview: `<div class="flex justify-center">
  <button class="px-14 py-4 bg-gray-500 text-white text-sm font-bold rounded transition-all duration-300 hover:bg-[#8BC34A] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200">
    ブログ一覧へ →
  </button>
</div>`,
    relatedTech: []
  },
  {
    slug: 'person-card-circular-image-watashi',
    title: '人物カード - 円形画像 + 肩書 + 名前 + メッセージ',
    category: 'UIコンポーネント',
    description: '人物プロフィールを表示するカードコンポーネント。円形画像と階層的なテキスト情報で視認性を確保。ホバー時の浮き上がりアニメーション。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/persons/page.tsx'
    ],
    code: `<Link href="/works/watashi-no-kakugo/profile" className="person-card">
  <div className="person-image">
    <div className="person-placeholder" style={{ background: '#2196F3' }}></div>
  </div>
  <div className="person-info">
    <p className="person-job">社会人野球クラブチーム京滝ゴールデンゴールズ監督・タレント</p>
    <h3 className="person-name">片岡女花織</h3>
    <p className="person-message">夢ある限り努力は無限</p>
  </div>
</Link>

<style jsx>{\`
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
\`}</style>`,
    prompt: `人物カードコンポーネントを実装してください。

## 要件

### レイアウト構造
- フレックスボックス（横並び）
- 画像エリア: 100px × 100px（円形）
- 情報エリア: 可変幅（flex: 1）
- ギャップ: 16px

### デザイン仕様
- パディング: 20px
- 背景色: #ffffff
- ボーダー: 1px solid #e5e5e5
- 角丸: 4px

### テキスト階層
1. 肩書（.person-job）
   - フォントサイズ: 12px
   - 色: #666666
   - マージン下: 4px

2. 名前（.person-name）
   - フォントサイズ: 16px
   - フォントウェイト: bold
   - 色: #000000
   - マージン下: 8px

3. メッセージ（.person-message）
   - フォントサイズ: 14px
   - 色: #333333

### ホバーアニメーション
- Y軸移動: translateY(-4px)
- ボックスシャドウ: 0 6px 16px rgba(0, 0, 0, 0.1)
- トランジション: all 0.3s

## 実装手順

1. カード要素を作成
   - Linkコンポーネントを使用
   - flexレイアウトで横並び

2. 画像エリアを配置
   - 円形（border-radius: 50%）
   - 固定サイズ（100px × 100px）
   - flex-shrink: 0（縮小防止）

3. 情報エリアを配置
   - flex: 1（残りスペースを使用）
   - min-width: 0（テキスト省略を有効化）

4. テキスト要素を階層的に配置
   - 肩書 → 名前 → メッセージの順

5. ホバー効果を追加
   - transform、box-shadow

## デザインのポイント
- 円形画像で人物の顔を強調
- 階層的なテキスト配置で情報を整理
- ホバー時の浮き上がりで操作性を向上
- シンプルなボーダーとシャドウで洗練された印象`,
    preview: `<div class="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  <div class="w-24 h-24 rounded-full bg-blue-500 flex-shrink-0"></div>
  <div class="flex-1 min-w-0">
    <p class="text-xs text-gray-600 mb-1">社会人野球クラブチーム監督・タレント</p>
    <h3 class="text-base font-bold mb-2">片岡女花織</h3>
    <p class="text-sm text-gray-800">夢ある限り努力は無限</p>
  </div>
</div>`,
    relatedTech: ['two-column-person-grid-watashi']
  },
  {
    slug: 'blog-card-five-column-grid-watashi',
    title: 'ブログカード - 5カラムグリッド',
    category: 'UIコンポーネント',
    description: '5カラムグリッドで配置されるブログカード。画像、日付、職業、名前、タイトルを階層的に表示。ホバー時のアニメーションで視覚的フィードバック。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx',
      '/src/app/works/watashi-no-kakugo/sns/page.tsx'
    ],
    code: `<div className="blog-grid">
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

<style jsx>{\`
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

  @media (max-width: 1024px) {
    .blog-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
  }
\`}</style>`,
    prompt: `ブログカードの5カラムグリッドを実装してください。

## 要件

### グリッドレイアウト
- カラム数: 5（デスクトップ）
- ギャップ: 16px
- レスポンシブ:
  - 1024px以下: 3カラム
  - 768px以下: 2カラム
  - 480px以下: 1カラム

### カードデザイン
- 背景色: #ffffff
- ボーダー: 1px solid #e8e8e8
- ボーダー（ホバー）: #8BC34A
- 角丸: 2px
- パディング: 18px（情報エリア）

### 画像エリア
- アスペクト比: 1:1（正方形）
- 背景色: #f5f5f5

### テキスト階層
1. 日付（.blog-date）
   - フォントサイズ: 11px
   - 色: #cccccc
   - マージン下: 8px

2. 職業（.blog-job）
   - フォントサイズ: 12px
   - 色: #777777
   - マージン下: 5px

3. 名前（.blog-name）
   - フォントサイズ: 15px
   - フォントウェイト: bold
   - 色: #333333
   - マージン下: 10px

4. タイトル（.blog-title）
   - フォントサイズ: 13px
   - 色: #555555
   - 行間: 1.6
   - 3行で省略（-webkit-line-clamp: 3）

### ホバーアニメーション
- Y軸移動: translateY(-5px)
- ボックスシャドウ: 0 8px 20px rgba(0, 0, 0, 0.12)
- ボーダー色変化: #e8e8e8 → #8BC34A
- トランジション: all 0.3s ease

## 実装手順

1. グリッドコンテナを作成
   - display: grid
   - grid-template-columns: repeat(5, 1fr)

2. カード要素を作成
   - flex-direction: column（縦並び）
   - 画像 + 情報エリア

3. 画像エリアを実装
   - aspect-ratio: 1（正方形を保つ）

4. 情報エリアを実装
   - padding: 18px
   - flex: 1（残りスペースを使用）

5. テキスト要素を階層的に配置
   - 日付 → 職業 → 名前 → タイトル

6. タイトルの行数制限
   - display: -webkit-box
   - -webkit-line-clamp: 3
   - -webkit-box-orient: vertical

7. ホバー効果を追加
   - transform、box-shadow、border-color

8. レスポンシブ対応
   - メディアクエリでカラム数を変更

## デザインのポイント
- 5カラムで多くの情報を効率的に表示
- 正方形画像で視覚的なバランス
- 階層的なテキスト配置で読みやすさ向上
- ホバー時のグリーンボーダーでブランドを強調
- 3行省略で一貫したカード高さ
- レスポンシブ対応で様々な画面サイズに最適化`,
    preview: `<div class="grid grid-cols-5 gap-4 max-w-full">
  <div class="flex flex-col bg-white border border-gray-200 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#8BC34A]">
    <div class="w-full aspect-square bg-pink-500"></div>
    <div class="p-4 flex-1 flex flex-col">
      <time class="text-xs text-gray-300 mb-2">2025.11.03</time>
      <p class="text-xs text-gray-600 mb-1">スカッシュプレーヤー</p>
      <h3 class="text-sm font-bold mb-2">松井千夏</h3>
      <p class="text-xs text-gray-700 line-clamp-3">神奈川オープン3位</p>
    </div>
  </div>
  <div class="flex flex-col bg-white border border-gray-200 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#8BC34A]">
    <div class="w-full aspect-square bg-blue-500"></div>
    <div class="p-4 flex-1 flex flex-col">
      <time class="text-xs text-gray-300 mb-2">2025.11.03</time>
      <p class="text-xs text-gray-600 mb-1">参議院議員</p>
      <h3 class="text-sm font-bold mb-2">山本一太</h3>
      <p class="text-xs text-gray-700 line-clamp-3">第35回ぐんまマラソン大会</p>
    </div>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'fixed-header-green-accent-watashi',
    title: '固定ヘッダー - グリーンアクセント + ロゴ + ナビ',
    category: 'レイアウト・構造',
    description: '画面上部に固定されるヘッダー。グリーンアクセントのロゴ、グローバルナビゲーション、検索フォームを統合。スクロール時も常に表示され、ナビゲーションの軸となる。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/components/works/watashi-no-kakugo/Header.tsx'
    ],
    code: `<header className="header">
  <div className="container">
    <Link href="/works/watashi-no-kakugo" className="logo">
      <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
        <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
        <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
      </svg>
      <div className="logo-text">
        <span className="logo-subtitle">やりたいことを諦めた大人がカッコイイ</span>
        <span className="logo-title">私のカクゴ</span>
      </div>
    </Link>

    <nav className="nav">
      <Link href="/works/watashi-no-kakugo/about" className="nav-link">私のカクゴとは</Link>
      <Link href="/works/watashi-no-kakugo/persons" className="nav-link">私のカクゴ一覧</Link>
      <Link href="/works/watashi-no-kakugo/sns" className="nav-link">ブログ・SNS</Link>
    </nav>

    <form className="search-form">
      <input type="search" placeholder="サイト内検索" className="search-input" />
      <button type="submit" className="search-button">
        <svg width="18" height="18" viewBox="0 0 18 18">
          <circle cx="7.5" cy="7.5" r="6" stroke="white" strokeWidth="1.5"/>
          <path d="M12 12L16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  </div>
</header>

<style jsx>{\`
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
  }

  .logo-subtitle {
    font-size: 10px;
    color: #666666;
  }

  .logo-title {
    font-size: 26px;
    font-weight: bold;
    color: #000000;
  }

  .nav {
    display: flex;
    gap: 40px;
    flex: 1;
    justify-content: center;
  }

  .nav-link {
    color: #333333;
    font-size: 16px;
    text-decoration: none;
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
    position: relative;
  }

  .search-input {
    width: 220px;
    height: 38px;
    padding: 0 46px 0 14px;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    background: #fafafa;
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
  }

  .search-button:hover {
    background: #8BC34A;
  }
\`}</style>`,
    prompt: `固定ヘッダーを実装してください。

## 要件

### 基本構造
- position: fixed（画面上部に固定）
- 高さ: 80px
- 背景色: #ffffff
- ボーダー下: 1px solid #e0e0e0
- z-index: 1000（他の要素より前面に表示）
- box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05)

### コンテナ
- max-width: 1200px
- margin: 0 auto（中央配置）
- padding: 0 32px
- display: flex
- align-items: center
- justify-content: space-between
- gap: 48px

### ロゴエリア（左側）
- SVGアイコン: 40px × 56px、グリーン（#8BC34A）
- ロゴテキスト:
  - サブタイトル: 10px、#666666
  - タイトル: 26px、bold、#000000

### ナビゲーション（中央）
- flex: 1（残りスペースを使用）
- justify-content: center（中央配置）
- gap: 40px
- リンク:
  - font-size: 16px
  - color: #333333
  - ホバー時: #8BC34A
  - アンダーラインアニメーション（::after疑似要素）

### 検索フォーム（右側）
- 入力幅: 220px
- 高さ: 38px
- 背景: #fafafa
- ボーダー: 1px solid #d0d0d0
- 検索ボタン: 46px幅、#999999
- ホバー時: #8BC34A

## 実装手順

1. Header.tsxファイルを作成
   - 'use client'を追加（styled-jsx使用のため）

2. ヘッダー要素を作成
   - <header>タグ、position: fixed

3. コンテナを作成
   - max-width: 1200px、flex配置

4. ロゴを実装
   - SVGアイコン + テキスト
   - Linkコンポーネントでラップ

5. ナビゲーションを実装
   - 3つのリンク
   - ホバーエフェクト（アンダーライン）

6. 検索フォームを実装
   - input + button
   - position: relativeで相対配置

7. styled-jsxでスタイル追加

8. レスポンシブ対応
   - 768px以下で縦並びに変更

## デザインのポイント
- 固定ヘッダーでナビゲーションの軸を確立
- グリーンアクセントでブランドを強調
- ホバーアニメーションで操作性を向上
- シンプルで洗練されたデザイン`,
    preview: `<div class="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
  <div class="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between gap-12">
    <a href="#" class="flex items-center gap-3">
      <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
        <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
        <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
      </svg>
      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-600">やりたいことを諦めた大人がカッコイイ</span>
        <span class="text-2xl font-bold">私のカクゴ</span>
      </div>
    </a>
    <nav class="flex gap-10 flex-1 justify-center">
      <a href="#" class="text-gray-800 hover:text-[#8BC34A] transition-colors">私のカクゴとは</a>
      <a href="#" class="text-gray-800 hover:text-[#8BC34A] transition-colors">私のカクゴ一覧</a>
      <a href="#" class="text-gray-800 hover:text-[#8BC34A] transition-colors">ブログ・SNS</a>
    </nav>
    <form class="relative">
      <input type="search" placeholder="サイト内検索" class="w-56 h-10 pl-4 pr-12 border border-gray-300 rounded bg-gray-50" />
      <button class="absolute right-0 top-0 bottom-0 w-12 bg-gray-500 hover:bg-[#8BC34A] rounded-r flex items-center justify-center transition-colors">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="7.5" cy="7.5" r="6" stroke="white" strokeWidth="1.5"/>
          <path d="M12 12L16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  </div>
</div>`,
    relatedTech: ['brand-logo-svg-icon-watashi', 'nav-hover-underline-effect-watashi', 'header-search-form-watashi']
  },
  {
    slug: 'hero-section-person-silhouettes-watashi',
    title: 'ヒーローセクション - 7人の人物シルエット',
    category: 'UIコンポーネント',
    description: '7人の人物を横並びで表示するヒーローセクション。丸みを帯びたシルエットと影で立体感を演出。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx'
    ],
    code: `<section className="hero">
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

<style jsx>{\`
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

  .person-placeholder {
    width: 130px;
    height: 190px;
    border-radius: 50% 50% 0 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .person-platform {
    width: 150px;
    height: 24px;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%);
    border-radius: 50%;
    margin-top: -12px;
  }
\`}</style>`,
    prompt: `7人の人物シルエットを表示するヒーローセクションを実装してください。

## 要件

### 基本構造
1. セクション背景: #eeeeee（ライトグレー）
2. パディング: 上60px、下50px
3. コンテナ: max-width 1400px、中央配置
4. パディング左右: 32px

### 人物配置
1. 横並びレイアウト（display: flex）
2. 中央揃え（justify-content: center）
3. 下揃え（align-items: flex-end）
4. ギャップ: 24px
5. 人物数: 7人

### 人物シルエット
1. サイズ: 130px × 190px
2. 形状: 上部が丸い（border-radius: 50% 50% 0 0）
3. ボックスシャドウ: 0 4px 12px rgba(0, 0, 0, 0.1)
4. オーバーフロー: hidden（角丸を維持）
5. 背景色: 各人物ごとに異なる色（動的に指定）

### プラットフォーム（影）
1. サイズ: 150px × 24px
2. 形状: 楕円形（border-radius: 50%）
3. 背景: radial-gradient（中央から外側へ透明度が減少）
   - 中心: rgba(0,0,0,0.18)
   - 50%: rgba(0,0,0,0.08)
   - 70%以降: transparent
4. 位置: 人物の下、margin-top: -12px（重ねる）

## 実装手順

1. ヒーローセクションを作成
   - <section>タグ、className="hero"
   - 背景色 #eeeeee、パディング設定

2. コンテナを作成
   - className="hero-persons"
   - max-width: 1400px
   - margin: 0 auto（中央配置）

3. フレックスレイアウトを設定
   - display: flex
   - justify-content: center
   - align-items: flex-end
   - gap: 24px

4. 人物データを配列で管理
   - heroPersons配列（id、color等）
   - map関数で繰り返し生成

5. 各人物要素を作成
   - .person-item（親要素）
   - .person-placeholder（シルエット本体）
   - .person-platform（影）

6. シルエットのスタイリング
   - 130px × 190px
   - border-radius: 50% 50% 0 0
   - box-shadow追加
   - background色を動的に指定（style属性）

7. プラットフォームのスタイリング
   - 150px × 24px
   - radial-gradientで楕円の影
   - margin-top: -12pxで人物に重ねる

8. レスポンシブ対応（推奨）
   - 画面幅が狭い場合、人物数を減らすかスクロール可能に

## デザインのポイント
- 7人の人物で「多様性」と「コミュニティ」を表現
- 上部が丸い形状で人物の頭部を抽象的に表現
- 下揃え配置で地面に立っている印象を演出
- プラットフォームの影で立体感と奥行きを表現
- ライトグレーの背景で柔らかく親しみやすい雰囲気
- 各人物の異なる色で個性と多様性を強調
- 横並び配置で一体感とチームワークを視覚化`,
    preview: `<div class="bg-[#eeeeee] py-14 overflow-hidden">
  <div class="max-w-7xl mx-auto px-8 flex justify-center items-end gap-6">
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-pink-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-blue-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-green-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-yellow-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-purple-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-red-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-32 h-48 rounded-t-full bg-indigo-500 shadow-md"></div>
      <div class="w-36 h-6 rounded-full mt-[-12px]" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, transparent 70%)"></div>
    </div>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'sidebar-search-form-watashi',
    title: 'サイドバー検索フォーム - テキスト + セレクトボックス',
    category: 'フォーム',
    description: 'サイドバー固定の検索フォーム。テキスト入力、セレクトボックスを組み合わせた多条件検索UI。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/persons/page.tsx'
    ],
    code: `<aside className="sidebar">
  <h2 className="sidebar-title">検索</h2>
  <form className="search-form">
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
    <button type="submit" className="search-button">検 索</button>
  </form>
</aside>

<style jsx>{\`
  .sidebar {
    background: #ffffff;
    padding: 24px;
    border-radius: 4px;
    position: sticky;
    top: 92px;
  }

  .search-button {
    width: 100%;
    padding: 12px;
    background: #8BC34A;
    color: #ffffff;
    border: none;
    font-weight: bold;
  }
\`}</style>`,
    prompt: `サイドバー検索フォームを実装してください。

## 要件

### 基本構造
1. コンテナ要素: <aside>タグ
2. 背景色: #ffffff（白）
3. パディング: 24px
4. 角丸: 4px
5. position: sticky（スクロール時に追従）
6. top: 92px（ヘッダー高さ + マージン）

### タイトル
1. セクションタイトル「検索」
2. className: sidebar-title
3. マージン下: 20px
4. フォントサイズ: 18px
5. フォントウェイト: bold

### フォーム構成
1. テキスト入力フィールド × 2
   - 名前
   - 肩書
2. セレクトボックス × 1
   - 性別（選択してください、男性、女性）
3. 検索ボタン × 1

### フォームグループ
1. マージン下: 16px
2. ラベル:
   - className: form-label
   - display: block
   - フォントサイズ: 14px
   - フォントウェイト: bold
   - マージン下: 8px
   - 色: #333333

### 入力フィールド
1. width: 100%
2. パディング: 10px 12px
3. ボーダー: 1px solid #d0d0d0
4. 角丸: 4px
5. フォントサイズ: 14px
6. 背景: #fafafa
7. フォーカス時: ボーダー色 #8BC34A

### セレクトボックス
1. width: 100%
2. パディング: 10px 12px
3. ボーダー: 1px solid #d0d0d0
4. 角丸: 4px
5. フォントサイズ: 14px
6. 背景: #fafafa
7. cursor: pointer

### 検索ボタン
1. width: 100%
2. パディング: 12px
3. 背景色: #8BC34A（グリーン）
4. 文字色: #ffffff（白）
5. ボーダー: none
6. 角丸: 4px
7. フォントウェイト: bold
8. フォントサイズ: 14px
9. cursor: pointer
10. ホバー時: 背景色 #7AA93A（濃いグリーン）
11. マージン上: 20px

## 実装手順

1. サイドバー要素を作成
   - <aside>タグ、className="sidebar"
   - position: sticky、top: 92px

2. タイトルを追加
   - <h2>タグ、「検索」テキスト

3. フォーム要素を作成
   - <form>タグ、className="search-form"

4. フォームグループを作成（名前用）
   - <div className="form-group">
   - <label>で「名 前：」
   - <input type="text">

5. フォームグループを作成（肩書用）
   - <div className="form-group">
   - <label>で「肩 書：」
   - <input type="text">

6. フォームグループを作成（性別用）
   - <div className="form-group">
   - <label>で「性 別：」
   - <select>で選択肢
   - <option>で「選択してください」「男性」「女性」

7. 検索ボタンを追加
   - <button type="submit">
   - テキスト「検 索」（全角スペース）

8. styled-jsxでスタイルを追加
   - .sidebar、.sidebar-title、.form-group等
   - sticky配置、フォームスタイル、ボタンスタイル

## デザインのポイント
- stickyポジショニングでスクロール時も常に表示
- 白背景で清潔感と視認性を確保
- フォームラベルを太字にして入力項目を明確化
- 全幅ボタンで押しやすさを重視
- グリーンの検索ボタンでブランドカラーを強調
- 淡いグレー背景の入力欄で入力エリアを視覚的に区別
- ラベルの全角スペースで縦の揃えを美しく`,
    preview: `<div class="bg-white p-6 rounded border border-gray-100 shadow-sm">
  <h2 class="text-lg font-bold mb-5">検索</h2>
  <form class="space-y-4">
    <div>
      <label class="block text-sm font-bold mb-2 text-gray-800">名 前：</label>
      <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:border-[#8BC34A]" />
    </div>
    <div>
      <label class="block text-sm font-bold mb-2 text-gray-800">肩 書：</label>
      <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:border-[#8BC34A]" />
    </div>
    <div>
      <label class="block text-sm font-bold mb-2 text-gray-800">性 別：</label>
      <select class="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm cursor-pointer">
        <option>選択してください</option>
        <option>男性</option>
        <option>女性</option>
      </select>
    </div>
    <button type="submit" class="w-full py-3 bg-[#8BC34A] text-white font-bold rounded hover:bg-[#7AA93A] transition-colors mt-5">
      検 索
    </button>
  </form>
</div>`,
    relatedTech: ['two-column-layout-sidebar-watashi']
  },
  {
    slug: 'tab-switching-history-watashi',
    title: 'タブ切り替え機能 - 来歴セクション',
    category: 'インタラクション',
    description: 'useStateを使ったタブ切り替え機能。5つのタブで異なるコンテンツを表示。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/profile/page.tsx'
    ],
    code: `const [activeTab, setActiveTab] = useState(1)

<table className="history-num">
  <tbody>
    <tr>
      {[1, 2, 3, 4, 5].map((num) => (
        <td key={num}>
          <a
            href="javascript:void(0)"
            className={\`hist-link \${activeTab === num ? 'act' : ''}\`}
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
      style={{ display: activeTab === item.id ? 'block' : 'none' }}
    >
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  ))}
</div>

<style jsx>{\`
  .hist-link.act {
    background: #8BC34A;
    color: #ffffff;
  }
\`}</style>`,
    prompt: `タブ切り替え機能を実装してください。

## 要件

### 基本構造
1. useStateでアクティブタブのIDを管理
2. タブナビゲーション: <table>要素
3. コンテンツエリア: 条件付きレンダリング
4. タブ数: 5つ（1, 2, 3, 4, 5）

### タブナビゲーション
1. <table className="history-num">
2. <tbody><tr>で1行のテーブル
3. 各タブ: <td>要素
4. リンク要素:
   - <a href="javascript:void(0)">
   - className: 'hist-link' + アクティブ時 'act'
   - onClick: setActiveTab(num)

### タブボタンのスタイル
1. 通常時:
   - 背景色: #ffffff または #f5f5f5
   - 文字色: #333333
   - パディング: 10px 20px
   - ボーダー: 1px solid #d0d0d0
   - cursor: pointer
   - transition: all 0.3s

2. アクティブ時（.act）:
   - 背景色: #8BC34A（グリーン）
   - 文字色: #ffffff（白）
   - ボーダー: 1px solid #8BC34A
   - フォントウェイト: bold

3. ホバー時:
   - 背景色: #f0f0f0（非アクティブ時）
   - 背景色: #7AA93A（アクティブ時）

### コンテンツエリア
1. <div className="history-doc-wrapper">
2. 各コンテンツをmap関数で生成
3. display制御:
   - activeTab === item.id の場合: 'block'
   - それ以外: 'none'
4. コンテンツ構造:
   - <h3>タイトル
   - <p>内容テキスト

### 状態管理
1. useState初期値: 1（最初のタブがアクティブ）
2. setActiveTab: タブクリック時に実行
3. activeTab: 条件付きレンダリングとクラス名に使用

## 実装手順

1. 'use client'ディレクティブを追加
   - Client Componentで状態管理を使用

2. useStateをインポート
   - import { useState } from 'react'

3. アクティブタブの状態を定義
   - const [activeTab, setActiveTab] = useState(1)

4. 来歴データを定義（配列）
   - historyData配列
   - 各項目: id、title、content

5. タブナビゲーションを作成
   - <table className="history-num">
   - <tbody><tr>
   - [1, 2, 3, 4, 5].map()で繰り返し

6. 各タブボタンを作成
   - <td><a>要素
   - className: 条件付きで'act'追加
   - onClick: () => setActiveTab(num)

7. コンテンツエリアを作成
   - <div className="history-doc-wrapper">
   - historyData.map()で繰り返し

8. 条件付き表示を実装
   - style={{ display: activeTab === item.id ? 'block' : 'none' }}

9. styled-jsxでスタイル追加
   - .hist-link、.hist-link.act
   - タブのアクティブ状態を視覚化

## デザインのポイント
- アクティブタブをグリーン背景で明確に識別
- シンプルな数字表記で直感的な操作性
- スムーズなトランジションで洗練された印象
- テーブルレイアウトで均等な幅のタブ配置
- display制御でシンプルな実装（アニメーション不要な場合）
- useStateによるReactの標準的な状態管理パターン
- ブランドカラー（グリーン）でUI全体の統一感を維持`,
    preview: `<div>
  <table class="w-full mb-6">
    <tbody>
      <tr class="flex gap-2">
        <td class="flex-1">
          <a href="#" class="block text-center py-2 px-4 bg-[#8BC34A] text-white font-bold border border-[#8BC34A] rounded transition-colors">1</a>
        </td>
        <td class="flex-1">
          <a href="#" class="block text-center py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors">2</a>
        </td>
        <td class="flex-1">
          <a href="#" class="block text-center py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors">3</a>
        </td>
        <td class="flex-1">
          <a href="#" class="block text-center py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors">4</a>
        </td>
        <td class="flex-1">
          <a href="#" class="block text-center py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors">5</a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-4 bg-gray-50 rounded border border-gray-200">
    <h3 class="text-lg font-bold mb-2">タブ1の内容</h3>
    <p class="text-sm text-gray-700">ここにコンテンツが表示されます。</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'two-column-layout-sidebar-watashi',
    title: '2カラムレイアウト - サイドバー（280px）+ メイン',
    category: 'レイアウト・構造',
    description: '固定幅サイドバーと可変幅メインコンテンツの2カラムレイアウト。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/persons/page.tsx'
    ],
    code: `<div className="layout">
  <aside className="sidebar">
    {/* サイドバーコンテンツ */}
  </aside>
  <div className="main-content">
    {/* メインコンテンツ */}
  </div>
</div>

<style jsx>{\`
  .layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    .layout {
      grid-template-columns: 1fr;
    }
  }
\`}</style>`,
    prompt: `2カラムレイアウトを実装してください。

## 要件

### 基本構造
1. レイアウトコンテナ: <div className="layout">
2. サイドバー: <aside className="sidebar">
3. メインコンテンツ: <div className="main-content">

### グリッドレイアウト
1. display: grid
2. grid-template-columns: 280px 1fr
   - 左カラム（サイドバー）: 280px固定幅
   - 右カラム（メイン）: 残りのスペース（1fr）
3. gap: 40px（カラム間のギャップ）

### サイドバー仕様
1. 固定幅: 280px
2. 内容: 検索フォーム等
3. position: stickyは個別のコンポーネントで設定
4. 背景色等はサイドバー内のコンポーネントで設定

### メインコンテンツ仕様
1. 可変幅: 1fr（残りのスペースを使用）
2. 内容: 主要なコンテンツ（カード一覧等）
3. min-width: 0（グリッドの縮小を許可）

### レスポンシブ対応
1. ブレークポイント: 1024px以下
2. 変更内容:
   - grid-template-columns: 1fr（1カラムに変更）
   - サイドバーが上、メインが下に配置
   - gap: 30px（縦方向のギャップに変更）

## 実装手順

1. レイアウトコンテナを作成
   - <div className="layout">
   - グリッドレイアウトを適用

2. サイドバーを配置
   - <aside className="sidebar">
   - 280px固定幅
   - 検索フォームやフィルター等を内包

3. メインコンテンツを配置
   - <div className="main-content">
   - 1fr（残りスペース）
   - カード一覧やメインコンテンツを配置

4. グリッドスタイルを定義
   - grid-template-columns: 280px 1fr
   - gap: 40px

5. レスポンシブメディアクエリを追加
   - @media (max-width: 1024px)
   - grid-template-columns: 1fr
   - gap: 30px

6. min-width設定（推奨）
   - .main-content { min-width: 0 }
   - グリッドアイテムの縮小を許可

## デザインのポイント
- サイドバー固定幅（280px）で安定したフィルターエリア
- メインコンテンツは可変幅で画面を有効活用
- 40pxのギャップで適度な余白と視覚的な分離
- グリッドレイアウトで簡潔で保守しやすいコード
- レスポンシブ対応で小画面でも使いやすさを維持
- 縦並び時は検索フォームが上に来て自然な操作順序
- min-width: 0でコンテンツのはみ出しを防止`,
    preview: `<div class="grid grid-cols-[280px_1fr] gap-10">
  <aside class="bg-white p-6 rounded border border-gray-100">
    <h3 class="font-bold mb-4">サイドバー</h3>
    <p class="text-sm text-gray-600">検索フォーム等</p>
  </aside>
  <div class="bg-white p-6 rounded border border-gray-100">
    <h3 class="font-bold mb-4">メインコンテンツ</h3>
    <p class="text-sm text-gray-600">カード一覧やコンテンツがここに表示されます。</p>
  </div>
</div>`,
    relatedTech: ['sidebar-search-form-watashi']
  },
  {
    slug: 'section-title-green-underline-watashi',
    title: 'セクションタイトル - グリーンアンダーライン',
    category: 'UIコンポーネント',
    description: 'セクションの見出しに使用するタイトルデザイン。左端にグリーンのアンダーラインでアクセント。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx',
      '/src/app/works/watashi-no-kakugo/profile/page.tsx'
    ],
    code: `<h2 className="section-title">来歴</h2>

<style jsx>{\`
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
\`}</style>`,
    prompt: `セクションタイトルを実装してください。

## 要件

### 基本スタイル
1. フォントサイズ: 18px
2. フォントウェイト: bold
3. マージン: 0 0 25px（下に25px）
4. パディング下: 10px
5. position: relative（擬似要素の基準点）

### ボーダー仕様
1. 下ボーダー: 2px solid #000000（黒）
2. 全幅に適用

### グリーンアンダーライン
1. 実装方法: ::before擬似要素
2. 幅: 50px
3. 高さ: 2px
4. 背景色: #8BC34A（グリーン）
5. 位置:
   - position: absolute
   - bottom: -2px（ボーダーに重ねる）
   - left: 0（左端）

## 実装手順

1. タイトル要素を作成
   - <h2 className="section-title">
   - テキスト: 例「来歴」「お気に入り」等

2. 基本スタイルを設定
   - font-size: 18px
   - font-weight: bold
   - margin: 0 0 25px

3. パディングとボーダーを追加
   - padding-bottom: 10px
   - border-bottom: 2px solid #000000

4. position relativeを設定
   - ::before擬似要素の配置基準

5. ::before疑似要素を作成
   - content: ''（空）
   - position: absolute
   - bottom: -2px、left: 0
   - width: 50px、height: 2px
   - background: #8BC34A

6. styled-jsxでスタイル追加
   - .section-title、.section-title::before

## デザインのポイント
- 黒の下ボーダーでセクションを明確に区切り
- 左端のグリーンラインでブランドカラーを強調
- 50pxの短いアクセントで洗練された印象
- ::before疑似要素で実装、追加のHTMLタグ不要
- ボーダーに重ねることで一体感のあるデザイン
- 18px boldで視認性と階層性を確保`,
    preview: `<h2 class="text-lg font-bold mb-6 pb-2 border-b-2 border-black relative">
  来歴
  <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#8BC34A] translate-y-0.5"></span>
</h2>`,
    relatedTech: []
  },
  {
    slug: 'video-placeholder-play-button-watashi',
    title: '動画プレースホルダー - 再生ボタン + 時間表示',
    category: 'UIコンポーネント',
    description: '動画のサムネイル表示用プレースホルダー。中央に再生ボタン、右下に時間表示。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx',
      '/src/app/works/watashi-no-kakugo/profile/page.tsx'
    ],
    code: `<div className="video-placeholder">
  <svg width="60" height="60" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,0.6)"/>
    <path d="M23 18L42 30L23 42V18Z" fill="white"/>
  </svg>
  <span className="video-time">01:13</span>
</div>

<style jsx>{\`
  .video-placeholder {
    position: relative;
    width: 300px;
    height: 290px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
  }
\`}</style>`,
    prompt: `動画プレースホルダーを実装してください。

## 要件

### 基本構造
1. コンテナ: <div className="video-placeholder">
2. 再生ボタン（SVG）
3. 時間表示（<span>）

### コンテナスタイル
1. position: relative（時間表示の配置基準）
2. サイズ: 300px × 290px
3. 背景: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
   - 紫系のグラデーション
   - 135度の角度
4. display: flex
5. align-items: center、justify-content: center（中央配置）
6. cursor: pointer（クリック可能を示す）

### 再生ボタン（SVG）
1. サイズ: 60px × 60px
2. viewBox: "0 0 60 60"
3. 構造:
   - 円形背景: <circle>
   - 三角形（再生アイコン）: <path>

### 円形背景仕様
1. <circle cx="30" cy="30" r="30">
2. fill: rgba(0, 0, 0, 0.6)（半透明の黒）
3. 中心: (30, 30)
4. 半径: 30

### 三角形（再生アイコン）仕様
1. <path d="M23 18L42 30L23 42V18Z">
2. fill: white（白）
3. 右向きの三角形
4. 頂点: (23,18)、(42,30)、(23,42)

### 時間表示スタイル
1. className: video-time
2. position: absolute
3. 位置:
   - bottom: 12px（下から12px）
   - right: 12px（右から12px）
4. 背景: rgba(0, 0, 0, 0.75)（半透明の黒）
5. 色: white（白）
6. パディング: 4px 8px
7. 角丸: 3px
8. フォントサイズ: 11px

## 実装手順

1. コンテナ要素を作成
   - <div className="video-placeholder">
   - position: relative

2. 背景グラデーションを設定
   - linear-gradient(135deg, #667eea 0%, #764ba2 100%)
   - 紫からピンク紫へのグラデーション

3. flexレイアウトを設定
   - display: flex
   - align-items: center、justify-content: center

4. SVG再生ボタンを追加
   - <svg width="60" height="60">
   - 中央に配置

5. 円形背景を作成
   - <circle>要素
   - 半透明の黒背景

6. 三角形アイコンを作成
   - <path>要素
   - 白色の再生アイコン

7. 時間表示を追加
   - <span className="video-time">
   - position: absolute、右下配置

8. styled-jsxでスタイル追加

## デザインのポイント
- グラデーション背景で動画プレビューの視覚的魅力
- 半透明の黒円で再生ボタンを目立たせる
- 白い三角形で「再生」を直感的に伝達
- 右下の時間表示で動画の長さを明示
- cursor: pointerでインタラクティブ性を示唆
- 300px × 290pxで適度なサイズ感`,
    preview: `<div class="relative w-full h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded flex items-center justify-center cursor-pointer">
  <svg width="60" height="60" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,0.6)"/>
    <path d="M23 18L42 30L23 42V18Z" fill="white"/>
  </svg>
  <span class="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">01:13</span>
</div>`,
    relatedTech: []
  },
  {
    slug: 'notice-banner-watashi',
    title: 'お知らせバナー - 全幅テキスト通知',
    category: 'UIコンポーネント',
    description: '重要なお知らせを表示する全幅バナー。シンプルなテキスト表示で目立たせる。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx'
    ],
    code: `<div className="notice">
  2023年11月10日より「覚悟の瞬間」は「私のカクゴ」に変更になります。
</div>

<style jsx>{\`
  .notice {
    background: #ffffff;
    text-align: center;
    padding: 22px 32px;
    color: #666666;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    line-height: 1.6;
  }
\`}</style>`,
    prompt: `お知らせバナーを実装してください。

## 要件

### 基本スタイル
1. 背景色: #ffffff（白）
2. テキスト中央揃え: text-align: center
3. パディング: 22px 32px（上下22px、左右32px）
4. 文字色: #666666（グレー）
5. フォントサイズ: 14px
6. 行間: 1.6

### ボーダー
1. 下ボーダー: 1px solid #f0f0f0（淡いグレー）
2. 目的: コンテンツとの視覚的分離

## 実装手順

1. バナー要素を作成
   - <div className="notice">
   - 全幅バナー

2. 背景色とパディングを設定
   - background: #ffffff
   - padding: 22px 32px

3. テキストを中央揃え
   - text-align: center

4. テキストスタイルを設定
   - color: #666666
   - font-size: 14px
   - line-height: 1.6

5. 下ボーダーを追加
   - border-bottom: 1px solid #f0f0f0

6. お知らせテキストを配置
   - 例: 「2023年11月10日より「覚悟の瞬間」は「私のカクゴ」に変更になります。」

7. styled-jsxでスタイル追加

## デザインのポイント
- 白背景で清潔感と視認性を確保
- 中央揃えで重要な情報を目立たせる
- グレー色（#666666）で主張しすぎない
- 22pxのパディングで適度な余白
- 淡いボーダーで自然な区切り
- 14pxフォントで読みやすさを維持
- 行間1.6で複数行でも読みやすく
- 全幅バナーでサイト全体に通知`,
    preview: `<div class="bg-white text-center py-5 px-8 text-gray-600 text-sm border-b border-gray-100">
  2023年11月10日より「覚悟の瞬間」は「私のカクゴ」に変更になります。
</div>`,
    relatedTech: []
  },
  {
    slug: 'header-search-form-watashi',
    title: 'ヘッダー検索フォーム - グレーボタン',
    category: 'フォーム',
    description: 'ヘッダー右端に配置される検索フォーム。グレーの検索ボタン付き。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/components/works/watashi-no-kakugo/Header.tsx'
    ],
    code: `<form className="search-form">
  <input
    type="search"
    placeholder="サイト内検索"
    className="search-input"
  />
  <button type="submit" className="search-button">
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle cx="7.5" cy="7.5" r="6" stroke="white" strokeWidth="1.5"/>
      <path d="M12 12L16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </button>
</form>

<style jsx>{\`
  .search-input {
    width: 220px;
    height: 38px;
    padding: 0 46px 0 14px;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    background: #fafafa;
  }

  .search-button {
    position: absolute;
    right: 0;
    width: 46px;
    background: #999999;
    border-radius: 0 4px 4px 0;
  }

  .search-button:hover {
    background: #8BC34A;
  }
\`}</style>`,
    prompt: `ヘッダー検索フォームを実装してください。

## 要件

### 基本構造
1. フォーム要素: <form className="search-form">
2. 入力フィールド: <input type="search">
3. 検索ボタン: <button type="submit">
4. レイアウト: position relativeで入力とボタンを重ねる

### 入力フィールド仕様
1. type: search
2. placeholder: "サイト内検索"
3. className: search-input
4. 幅: 220px
5. 高さ: 38px
6. パディング: 左14px、右46px（ボタンのスペース）
7. ボーダー: 1px solid #d0d0d0
8. 角丸: 4px
9. 背景色: #fafafa（淡いグレー）
10. フォントサイズ: 14px

### 検索ボタン仕様
1. type: submit
2. className: search-button
3. position: absolute
4. right: 0、top: 0、bottom: 0（入力欄の右端に配置）
5. 幅: 46px
6. 背景色: #999999（グレー）
7. ボーダー: none
8. 角丸: 右側のみ 4px（0 4px 4px 0）
9. cursor: pointer

### SVGアイコン
1. サイズ: 18px × 18px
2. 虫眼鏡デザイン:
   - 円: cx="7.5" cy="7.5" r="6"
   - 柄: d="M12 12L16.5 16.5"
3. ストローク: white
4. strokeWidth: 1.5
5. strokeLinecap: round（柄のみ）

### ホバーエフェクト
1. 検索ボタンホバー時:
   - 背景色: #999999 → #8BC34A（グリーン）
   - トランジション: 0.3s ease

## 実装手順

1. フォーム要素を作成
   - <form className="search-form">
   - position: relativeを設定

2. 入力フィールドを追加
   - <input type="search">
   - 幅220px、高さ38px
   - パディング調整（右側にボタンのスペース）

3. 検索ボタンを追加
   - <button type="submit">
   - position: absolute、right: 0
   - 幅46px、全高

4. SVGアイコンを作成
   - <svg>タグで虫眼鏡
   - <circle>で円部分
   - <path>で柄部分
   - stroke="white"で白色

5. styled-jsxでスタイル追加
   - .search-form: position relative
   - .search-input: 入力欄スタイル
   - .search-button: ボタンスタイル
   - .search-button:hover: ホバー時グリーン

6. 右側の角丸調整
   - border-radius: 0 4px 4px 0
   - 入力欄と一体感のあるデザイン

## デザインのポイント
- 淡いグレー背景（#fafafa）で入力欄を視覚的に区別
- 通常時はグレーボタン（#999999）で控えめに
- ホバー時にグリーン（#8BC34A）でブランドを強調
- position absoluteで入力欄とボタンを一体化
- 右側46pxのパディングでボタンと文字が重ならない
- SVGアイコンでシンプルかつ明確な検索機能を表現
- トランジション効果で滑らかな操作感`,
    preview: `<form class="relative">
  <input
    type="search"
    placeholder="サイト内検索"
    class="w-56 h-10 pl-4 pr-12 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
  />
  <button
    type="submit"
    class="absolute right-0 top-0 bottom-0 w-12 bg-gray-500 hover:bg-[#8BC34A] rounded-r flex items-center justify-center transition-colors duration-300"
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="6" stroke="white" stroke-width="1.5"/>
      <path d="M12 12L16.5 16.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>
</form>`,
    relatedTech: ['fixed-header-green-accent-watashi']
  },
  {
    slug: 'footer-navigation-watashi',
    title: 'フッターナビゲーション - 横並びリンク',
    category: 'UIコンポーネント',
    description: 'フッターに配置される横並びのナビゲーションリンク。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/components/works/watashi-no-kakugo/Footer.tsx'
    ],
    code: `<footer className="footer">
  <nav className="footer-nav">
    <Link href="/works/watashi-no-kakugo/terms" className="footer-link">
      サイトご利用にあたって
    </Link>
    <Link href="/works/watashi-no-kakugo/terms/media-policy" className="footer-link">
      メディアポリシー
    </Link>
  </nav>
  <p className="copyright">
    Copyright © KAKUGO.TV. All rights reserved.
  </p>
</footer>

<style jsx>{\`
  .footer {
    background: #f8f8f8;
    padding: 36px 32px 40px;
    margin-top: 100px;
    border-top: 1px solid #e8e8e8;
  }

  .footer-link {
    color: #666666;
    font-size: 13px;
  }

  .footer-link:hover {
    color: #8BC34A;
  }
\`}</style>`,
    prompt: `フッターナビゲーションを実装してください。

## 要件

### 基本構造
1. フッター要素: <footer className="footer">
2. ナビゲーション: <nav className="footer-nav">
3. リンク: <Link>コンポーネント
4. コピーライト: <p className="copyright">

### フッタースタイル
1. 背景色: #f8f8f8（淡いグレー）
2. パディング: 上36px、左右32px、下40px
3. マージン上: 100px（メインコンテンツとの間隔）
4. ボーダー上: 1px solid #e8e8e8
5. テキスト中央揃え

### ナビゲーション構造
1. <nav className="footer-nav">
2. 横並びレイアウト（display: flex）
3. 中央揃え（justify-content: center）
4. ギャップ: 24px
5. マージン下: 20px

### リンクスタイル
1. className: footer-link
2. 色: #666666（グレー）
3. フォントサイズ: 13px
4. text-decoration: none
5. transition: color 0.3s

### ホバーエフェクト
1. リンクホバー時:
   - 色: #666666 → #8BC34A（グリーン）

### コピーライト
1. className: copyright
2. フォントサイズ: 12px
3. 色: #999999（淡いグレー）
4. マージン: 0
5. テキスト中央揃え

## 実装手順

1. フッター要素を作成
   - <footer className="footer">
   - 背景色、パディング設定

2. ナビゲーション要素を追加
   - <nav className="footer-nav">
   - flexレイアウトで横並び

3. リンクを追加
   - <Link href="...">コンポーネント
   - 例: 「サイトご利用にあたって」「メディアポリシー」

4. コピーライトを追加
   - <p className="copyright">
   - 例: "Copyright © KAKUGO.TV. All rights reserved."

5. styled-jsxでスタイル追加
   - .footer: 背景、パディング、ボーダー
   - .footer-nav: flex配置
   - .footer-link: リンクスタイル、ホバー
   - .copyright: テキストスタイル

6. レスポンシブ対応（推奨）
   - モバイル: ナビゲーションを縦並びに変更
   - @media (max-width: 768px)

## デザインのポイント
- 淡いグレー背景（#f8f8f8）で控えめな存在感
- 上部100pxマージンでメインコンテンツと明確に分離
- 横並びナビゲーションで簡潔な情報配置
- ホバー時のグリーンでブランドカラーを統一
- 小さめフォント（13px）でフッターらしい控えめさ
- 中央揃えで左右対称の美しさ
- 細いボーダーで視覚的な区切り`,
    preview: `<footer class="bg-gray-50 pt-9 px-8 pb-10 mt-24 border-t border-gray-200 text-center">
  <nav class="flex justify-center gap-6 mb-5">
    <a href="#" class="text-gray-600 text-sm hover:text-[#8BC34A] transition-colors">
      サイトご利用にあたって
    </a>
    <a href="#" class="text-gray-600 text-sm hover:text-[#8BC34A] transition-colors">
      メディアポリシー
    </a>
  </nav>
  <p class="text-xs text-gray-500 m-0">
    Copyright © KAKUGO.TV. All rights reserved.
  </p>
</footer>`,
    relatedTech: []
  },
  {
    slug: 'update-card-circular-image-watashi',
    title: '更新情報カード - 円形画像 + 日付 + 名前',
    category: 'UIコンポーネント',
    description: '更新情報を表示するカードコンポーネント。円形画像と日付、名前を横並びに配置。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx'
    ],
    code: `<Link href="/works/watashi-no-kakugo/profile" className="update-item">
  <div className="update-image">
    <div className="update-placeholder" style={{ background: '#E91E63' }}></div>
  </div>
  <div className="update-content">
    <time className="update-date">2025.10.01</time>
    <p className="update-name">奈良岡桂織 吉中市商</p>
  </div>
</Link>

<style jsx>{\`
  .update-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    transition: background 0.2s;
    border-bottom: 1px solid #f5f5f5;
  }

  .update-item:hover {
    background: #fafafa;
  }

  .update-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }

  .update-date {
    font-size: 11px;
    color: #999999;
  }

  .update-name {
    font-size: 13px;
    color: #333333;
  }
\`}</style>`,
    prompt: `更新情報カードを実装してください。

## 要件

### 基本構造
1. リンク要素: <Link className="update-item">
2. 画像エリア: <div className="update-image">
3. コンテンツエリア: <div className="update-content">

### カード全体のスタイル
1. display: flex
2. align-items: center（縦中央揃え）
3. gap: 12px（画像とコンテンツの間隔）
4. padding: 12px
5. transition: background 0.2s
6. border-bottom: 1px solid #f5f5f5（カード間の区切り）

### ホバーエフェクト
1. background: transparent → #fafafa
2. transition: 0.2s
3. マウスオーバーで背景色が変わる

### 画像エリア仕様
1. className: update-image
2. サイズ: 60px × 60px
3. border-radius: 50%（円形）
4. overflow: hidden
5. flex-shrink: 0（縮小防止）

### 画像プレースホルダー
1. className: update-placeholder
2. サイズ: 100%（親要素に合わせる）
3. 背景色: 動的に指定（例: #E91E63）

### コンテンツエリア仕様
1. className: update-content
2. flex: 1（残りスペースを使用）

### 日付スタイル
1. <time className="update-date">
2. フォントサイズ: 11px
3. 色: #999999（淡いグレー）
4. display: block（1行目に配置）
5. マージン下: 4px

### 名前スタイル
1. <p className="update-name">
2. フォントサイズ: 13px
3. 色: #333333（濃いグレー）
4. margin: 0

## 実装手順

1. リンク要素を作成
   - <Link href="...">
   - className="update-item"

2. flexレイアウトを設定
   - display: flex
   - align-items: center
   - gap: 12px

3. 画像エリアを作成
   - <div className="update-image">
   - 60px × 60px、円形

4. 画像プレースホルダーを配置
   - <div className="update-placeholder">
   - style={{ background: color }}

5. コンテンツエリアを作成
   - <div className="update-content">
   - flex: 1

6. 日付を追加
   - <time className="update-date">
   - 例: "2025.10.01"

7. 名前を追加
   - <p className="update-name">
   - 例: "奈良岡桂織 吉中市商"

8. ホバーエフェクトを設定
   - .update-item:hover { background: #fafafa }

9. ボーダーを追加
   - border-bottom: 1px solid #f5f5f5

10. styled-jsxでスタイル追加

## デザインのポイント
- 円形画像（60px）でコンパクトに人物を表示
- flexレイアウトで横並び配置
- 日付を淡いグレーで控えめに
- 名前を濃いグレーで主要情報として強調
- ホバー時の背景変化で操作性を向上
- 細いボーダーで各カードを区切り
- 12pxのパディングで適度な余白
- transition 0.2sでスムーズな操作感`,
    preview: `<div class="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b">
  <div class="w-15 h-15 rounded-full bg-pink-500 flex-shrink-0"></div>
  <div class="flex-1">
    <time class="text-xs text-gray-500 block">2025.10.01</time>
    <p class="text-sm text-gray-800">奈良岡桂織 吉中市商</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'float-two-column-layout-watashi',
    title: 'フロート2カラムレイアウト - 左右480px',
    category: 'レイアウト・構造',
    description: 'float を使った2カラムレイアウト。左右それぞれ480px固定幅。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/profile/page.tsx'
    ],
    code: `<div className="content-wrapper">
  <div className="left-column">
    {/* 左カラム */}
  </div>
  <div className="right-column">
    {/* 右カラム */}
  </div>
  <div className="clear"></div>
</div>

<style jsx>{\`
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

  @media (max-width: 1024px) {
    .left-column,
    .right-column {
      width: 100%;
      float: none;
    }
  }
\`}</style>`,
    prompt: `フロート2カラムレイアウトを実装してください。

## 要件

### 基本構造
1. コンテナ要素: <div className="content-wrapper">
2. 左カラム: <div className="left-column">
3. 右カラム: <div className="right-column">
4. クリア要素: <div className="clear">（float解除用）

### レイアウト仕様
1. 左カラム:
   - 幅: 480px固定
   - float: left
2. 右カラム:
   - 幅: 480px固定
   - float: right
3. 合計幅: 960px（480px + 480px）
4. ギャップ: floatの特性上、中央に自然な余白

### クリア要素
1. className: clear
2. clear: both
3. 目的: フロートの解除、親要素の高さ確保

### レスポンシブ対応
1. ブレークポイント: 1024px以下
2. 変更内容:
   - .left-column、.right-column:
     - width: 100%
     - float: none
     - 縦並びに変更

## 実装手順

1. コンテナ要素を作成
   - <div className="content-wrapper">
   - 子要素をラップ

2. 左カラムを作成
   - <div className="left-column">
   - 幅480px、float: left

3. 右カラムを作成
   - <div className="right-column">
   - 幅480px、float: right

4. クリア要素を追加
   - <div className="clear">
   - clear: both
   - 重要: 必ず左右カラムの後に配置

5. styled-jsxでスタイル追加
   - .left-column: width, float left
   - .right-column: width, float right
   - .clear: clear both

6. レスポンシブメディアクエリを追加
   - @media (max-width: 1024px)
   - floatを解除、100%幅に

7. 各カラムにコンテンツを配置
   - テキスト、画像、その他の要素

## デザインのポイント
- float手法は古典的だが確実なレイアウト手法
- 左右それぞれ480pxで均等な配置
- float: leftとfloat: rightで自然な中央ギャップ
- clear: bothで親要素の高さ崩れを防止
- レスポンシブ対応で小画面でも使いやすさを維持
- Grid/Flexboxが使えない環境での代替手段
- 左右の独立した配置（float特性を活用）

## 注意点
- clear要素を忘れると親要素の高さが0になる
- float解除を適切に行う
- モダンブラウザではGrid/Flexboxが推奨されるが、
  レガシーブラウザ対応や特定のデザイン要件で有用`,
    preview: `<div>
  <div class="flex justify-between gap-8 mb-4">
    <div class="w-full max-w-[480px] bg-white p-6 rounded border border-gray-200">
      <h3 class="font-bold mb-3">左カラム</h3>
      <p class="text-sm text-gray-600">480px固定幅のコンテンツエリア</p>
    </div>
    <div class="w-full max-w-[480px] bg-white p-6 rounded border border-gray-200">
      <h3 class="font-bold mb-3">右カラム</h3>
      <p class="text-sm text-gray-600">480px固定幅のコンテンツエリア</p>
    </div>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'brand-logo-svg-icon-watashi',
    title: 'ブランドロゴ - SVGアイコン + テキスト',
    category: 'UIコンポーネント',
    description: 'グリーンのSVGアイコンとテキストを組み合わせたロゴデザイン。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/components/works/watashi-no-kakugo/Header.tsx'
    ],
    code: `<Link href="/works/watashi-no-kakugo" className="logo">
  <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
    <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
    <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
  </svg>
  <div className="logo-text">
    <span className="logo-subtitle">やりたいことを諦めた大人がカッコイイ</span>
    <span className="logo-title">私のカクゴ</span>
  </div>
</Link>`,
    prompt: `ブランドロゴを実装してください。

## 要件

### 基本構造
1. コンテナ: <Link href="/">
2. レイアウト: display flex、横並び
3. SVGアイコン + テキストエリア

### SVGアイコン仕様
1. サイズ: 40px × 56px
2. viewBox: "0 0 40 56"
3. fill: none（デフォルト）
4. デザイン:
   - 雫型のシルエット（<path>）
   - 下部の小さな点（<ellipse>）
5. 色: #8BC34A（グリーン）

### SVGパス詳細
1. メインシルエット:
   - <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
   - 上部から広がる雫型
2. 下部の点:
   - <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
   - 中心点: (20, 50)
   - 半径: x=3、y=3

### テキストエリア構造
1. className: logo-text
2. display: flex、flex-direction: column
3. gap: 1-2px（サブタイトルとタイトルの間隔）

### サブタイトルスタイル
1. className: logo-subtitle
2. フォントサイズ: 10px
3. 色: #666666（グレー）
4. テキスト: 「やりたいことを諦めた大人がカッコイイ」

### タイトルスタイル
1. className: logo-title
2. フォントサイズ: 26px
3. フォントウェイト: bold
4. 色: #000000（黒）
5. テキスト: 「私のカクゴ」

### ロゴ全体のレイアウト
1. display: flex
2. align-items: center（縦中央揃え）
3. gap: 12px（アイコンとテキストの間隔）
4. text-decoration: none（リンクの下線を削除）

## 実装手順

1. Linkコンポーネントを作成
   - href="/works/watashi-no-kakugo"（ホームページ）
   - className="logo"

2. SVG要素を追加
   - <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
   - グリーン（#8BC34A）で塗りつぶし

3. SVGパスを定義
   - <path>で雫型シルエット
   - <ellipse>で下部の点

4. テキストエリアを作成
   - <div className="logo-text">
   - flex-direction: column

5. サブタイトルを追加
   - <span className="logo-subtitle">
   - 10px、#666666

6. タイトルを追加
   - <span className="logo-title">
   - 26px、bold、#000000

7. styled-jsxでスタイル追加
   - .logo、.logo-text、.logo-subtitle、.logo-title

## デザインのポイント
- SVGアイコンでブランドの独自性を表現
- グリーン（#8BC34A）でブランドカラーを統一
- 雫型は「覚悟」の重みと決意を象徴
- サブタイトルで理念を伝える
- タイトルを大きく（26px）してブランド名を強調
- 縦に並べたテキストで情報の階層化
- アイコンとテキストのバランスの良い配置`,
    preview: `<div class="flex items-center gap-3">
  <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
    <path d="M20 0C20 0 8 12 8 28C8 36.8366 13.1634 44 20 44C26.8366 44 32 36.8366 32 28C32 12 20 0 20 0Z" fill="#8BC34A"/>
    <ellipse cx="20" cy="50" rx="3" ry="3" fill="#8BC34A"/>
  </svg>
  <div class="flex flex-col gap-1">
    <span class="text-xs text-gray-600">やりたいことを諦めた大人がカッコイイ</span>
    <span class="text-2xl font-bold">私のカクゴ</span>
  </div>
</div>`,
    relatedTech: ['fixed-header-green-accent-watashi']
  },
  {
    slug: 'nav-hover-underline-effect-watashi',
    title: 'ナビゲーションホバーエフェクト - アンダーライン',
    category: 'インタラクション',
    description: 'ナビゲーションリンクのホバー時にグリーンのアンダーラインが表示されるアニメーション。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/components/works/watashi-no-kakugo/Header.tsx'
    ],
    code: `<Link href="/works/watashi-no-kakugo/about" className="nav-link">
  私のカクゴとは
</Link>

<style jsx>{\`
  .nav-link {
    position: relative;
    color: #333333;
    transition: color 0.3s;
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
\`}</style>`,
    prompt: `ナビゲーションリンクにホバーエフェクトを実装してください。

## 要件

### 基本スタイル
1. position: relative（擬似要素の基準点）
2. 色: #333333（通常時）
3. text-decoration: none（下線なし）
4. transition: color 0.3s（色変化をスムーズに）

### ホバー時の色変化
1. color: #333333 → #8BC34A（グリーン）
2. transition: 0.3s

### アンダーラインエフェクト（::after疑似要素）
1. content: ''（空）
2. position: absolute
3. 位置:
   - bottom: -4px（テキストの下4px）
   - left: 0
   - right: 0（全幅に配置）
4. 高さ: 2px
5. 背景色: #8BC34A（グリーン）
6. transform: scaleX(0)（初期状態: 非表示）
7. transition: transform 0.3s（アニメーション）

### ホバー時のアンダーライン
1. ::after疑似要素のtransform: scaleX(0) → scaleX(1)
2. 左から右へ伸びるアニメーション

## 実装手順

1. リンク要素を作成
   - <Link href="...">
   - className="nav-link"

2. 基本スタイルを設定
   - position: relative
   - color: #333333
   - text-decoration: none

3. 色のトランジションを追加
   - transition: color 0.3s

4. ホバースタイルを定義
   - .nav-link:hover
   - color: #8BC34A

5. ::after疑似要素を作成
   - content: ''
   - position: absolute
   - bottom: -4px、left: 0、right: 0

6. アンダーラインのスタイル
   - height: 2px
   - background: #8BC34A
   - transform: scaleX(0)（初期非表示）

7. アンダーラインのトランジション
   - transition: transform 0.3s

8. ホバー時のアンダーライン
   - .nav-link:hover::after
   - transform: scaleX(1)（全幅に拡大）

9. styled-jsxでスタイル追加

## デザインのポイント
- テキスト色とアンダーラインのダブルフィードバック
- scaleX(0)→scaleX(1)で左から右へ伸びるアニメーション
- グリーン（#8BC34A）でブランドカラーを強調
- 0.3sのトランジションでスムーズな動き
- ::after疑似要素で追加のHTMLタグ不要
- bottom: -4pxでテキストと適度な間隔
- position relativeとabsoluteで正確な配置`,
    preview: `<a href="#" class="relative text-gray-800 hover:text-[#8BC34A] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8BC34A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
  私のカクゴとは
</a>`,
    relatedTech: ['fixed-header-green-accent-watashi']
  },
  {
    slug: 'favorite-card-horizontal-watashi',
    title: 'お気に入りカード - 画像左 + テキスト右',
    category: 'UIコンポーネント',
    description: 'お気に入りアイテムを表示するカード。左に画像、右にタイトルと説明文。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/profile/page.tsx'
    ],
    code: `<div className="favorite-box-inner">
  <div className="favorite-image-left">
    <div className="favorite-img"></div>
  </div>
  <div className="favorite-text-right">
    <h4 className="item-title">リカちゃん人形</h4>
    <p>奈良限定・万葉リカちゃんです。</p>
  </div>
  <div className="clear"></div>
</div>

<style jsx>{\`
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
\`}</style>`,
    prompt: `お気に入りカードを実装してください。

## 要件

### 基本構造
1. コンテナ: <div className="favorite-box-inner">
2. 画像エリア: <div className="favorite-image-left">
3. テキストエリア: <div className="favorite-text-right">
4. クリア要素: <div className="clear">（float解除用）

### 画像エリア仕様
1. className: favorite-image-left
2. 幅: 160px固定
3. float: left
4. マージン右: 10px（テキストとの間隔）

### 画像仕様
1. className: favorite-img
2. サイズ: 160px × 120px
3. 背景色: プレースホルダー色（例: #ff6b6b）
4. 角丸: 3px
5. 画像がある場合: background-imageで表示

### テキストエリア仕様
1. className: favorite-text-right
2. 幅: 300px固定
3. float: right

### タイトルスタイル
1. className: item-title
2. フォントサイズ: 16px
3. フォントウェイト: bold
4. 色: #8BC34A（グリーン）
5. マージン: 0 0 8px

### 説明文スタイル
1. <p>タグ
2. フォントサイズ: 14px
3. 色: #333333
4. 行間: 1.6
5. マージン: 0

## 実装手順

1. コンテナ要素を作成
   - <div className="favorite-box-inner">

2. 画像エリアを作成
   - <div className="favorite-image-left">
   - float: left、幅160px

3. 画像を配置
   - <div className="favorite-img">
   - 160px × 120px
   - 背景色またはbackground-image

4. テキストエリアを作成
   - <div className="favorite-text-right">
   - float: right、幅300px

5. タイトルを追加
   - <h4 className="item-title">
   - 例: "リカちゃん人形"
   - グリーン色、太字

6. 説明文を追加
   - <p>タグ
   - 例: "奈良限定・万葉リカちゃんです。"

7. クリア要素を追加
   - <div className="clear">
   - clear: both

8. styled-jsxでスタイル追加
   - .favorite-image-left、.favorite-img
   - .favorite-text-right、.item-title

## デザインのポイント
- 横並びレイアウトで画像とテキストを効率的に配置
- 画像160px × 120pxで適度な視覚的インパクト
- タイトルをグリーン（#8BC34A）でブランドカラーを強調
- float手法で左右に自然に配置
- 10pxのマージンで適度な間隔
- 300pxのテキストエリアで十分な説明スペース
- 角丸3pxで柔らかい印象`,
    preview: `<div class="flex gap-3 items-start">
  <div class="w-40 h-30 bg-red-400 rounded flex-shrink-0"></div>
  <div class="flex-1 max-w-[300px]">
    <h4 class="text-base font-bold text-[#8BC34A] mb-2 m-0">リカちゃん人形</h4>
    <p class="text-sm text-gray-800 m-0 leading-relaxed">奈良限定・万葉リカちゃんです。</p>
  </div>
</div>`,
    relatedTech: []
  },
  {
    slug: 'profile-card-circular-image-watashi',
    title: 'プロフィールカード - 円形画像 + 詳細情報',
    category: 'UIコンポーネント',
    description: '人物プロフィールの詳細情報カード。円形画像と名前、生年月日、職業などの情報を表示。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/profile/page.tsx'
    ],
    code: `<div className="person-det-wrapper">
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
      <div className="auto-break">趣味：スキューバダイビング</div>
      <div className="auto-break">座右の銘：一日一生涯</div>
    </div>
    <p className="person-bio">プロフィール本文...</p>
  </div>
</div>

<style jsx>{\`
  .person-det-wrapper {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 20px;
  }

  .mask-img-area {
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 20px;
  }

  .person-image {
    width: 100%;
    height: 100%;
    background: #e91e63;
    border-radius: 50%;
  }

  .ruby {
    font-size: 11px;
    color: #666666;
  }

  .name-title {
    display: inline;
    font-size: 24px;
    font-weight: bold;
  }
\`}</style>`,
    prompt: `プロフィールカードを実装してください。

## 要件

### 基本構造
1. 外側コンテナ: <div className="person-det-wrapper">
2. 内側コンテナ: <div className="person-det-inner">
3. 画像エリア: <div className="mask-img-area">
4. 情報エリア: <div className="mg-ctrl">
5. プロフィール本文: <p className="person-bio">

### コンテナスタイル
1. person-det-wrapper:
   - 背景: #ffffff
   - ボーダー: 1px solid #e0e0e0
   - パディング: 20px
   - 角丸: 4px（推奨）

### 画像エリア仕様
1. className: mask-img-area
2. サイズ: 100px × 100px
3. float: left
4. マージン右: 20px
5. 円形画像を内包

### 円形画像スタイル
1. className: person-image
2. サイズ: 100% × 100%（親要素に合わせる）
3. 背景色: プレースホルダー色（例: #e91e63）
4. border-radius: 50%（完全な円形）

### ふりがなスタイル
1. className: ruby
2. フォントサイズ: 11px
3. 色: #666666
4. マージン下: 4px

### 名前セクション
1. className: name
2. 構造:
   - <h1 className="name-title">名前</h1>
   - <span>出身地</span>
   - <span>血液型</span>

### 名前タイトルスタイル
1. className: name-title
2. display: inline
3. フォントサイズ: 24px
4. フォントウェイト: bold
5. 色: #000000

### 詳細情報スタイル
1. className: auto-break
2. フォントサイズ: 14px
3. 色: #333333
4. マージン: 4px 0
5. 改行可能: word-wrap: break-word

### プロフィール本文
1. className: person-bio
2. マージン上: 16px
3. フォントサイズ: 14px
4. 行間: 1.8
5. clear: both（画像floatの解除）

## 実装手順

1. 外側コンテナを作成
   - <div className="person-det-wrapper">
   - 背景、ボーダー、パディング設定

2. 内側コンテナを作成
   - <div className="person-det-inner">

3. 画像エリアを配置
   - <div className="mask-img-area">
   - float: left、100px × 100px

4. 円形画像を追加
   - <div className="person-image">
   - border-radius: 50%
   - 背景色またはbackground-image

5. 情報エリアを作成
   - <div className="mg-ctrl">

6. ふりがなを追加
   - <div className="ruby">たかいちさなえ</div>

7. 名前セクションを追加
   - <div className="name">
   - <h1>タグで名前
   - <span>で出身地、血液型

8. 詳細情報を追加
   - <div className="auto-break">職業：...</div>
   - <div className="auto-break">趣味：...</div>
   - <div className="auto-break">座右の銘：...</div>

9. プロフィール本文を追加
   - <p className="person-bio">
   - clear: both

10. styled-jsxでスタイル追加
    - 各クラスのスタイル定義

## デザインのポイント
- 円形画像（100px）で人物の顔を強調
- float配置で画像と情報を効率的にレイアウト
- ふりがな（11px）で読み方を明示
- 名前タイトル（24px、bold）で視覚的ヒエラルキー
- 詳細情報で職業、趣味、座右の銘を整理
- white背景とグレーボーダーで清潔な印象
- プロフィール本文で詳細な自己紹介を提供`,
    preview: `<div class="bg-white border border-gray-200 p-5 rounded">
  <div class="flex gap-5">
    <div class="w-25 h-25 rounded-full bg-pink-600 flex-shrink-0"></div>
    <div class="flex-1">
      <p class="text-xs text-gray-600 mb-1">たかいちさなえ</p>
      <div class="mb-2">
        <h1 class="inline text-2xl font-bold mr-3">高市早苗</h1>
        <span class="text-sm text-gray-700">奈良県生まれ</span>
        <span class="text-sm text-gray-700 ml-2">A型</span>
      </div>
      <div class="text-sm text-gray-800 space-y-1">
        <div>職業：衆議院議員</div>
        <div>趣味：スキューバダイビング</div>
        <div>座右の銘：一日一生涯</div>
      </div>
    </div>
  </div>
  <p class="text-sm text-gray-800 mt-4 leading-relaxed">プロフィール本文がここに表示されます。</p>
</div>`,
    relatedTech: []
  },
  {
    slug: 'two-column-person-grid-watashi',
    title: '2カラムグリッド - 人物カード配置',
    category: 'レイアウト・構造',
    description: '人物カードを2カラムで配置するグリッドレイアウト。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/persons/page.tsx'
    ],
    code: `<div className="persons-grid">
  {persons.map((person, index) => (
    <Link key={index} href="/profile" className="person-card">
      {/* カード内容 */}
    </Link>
  ))}
</div>

<style jsx>{\`
  .persons-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 1024px) {
    .persons-grid {
      grid-template-columns: 1fr;
    }
  }
\`}</style>`,
    prompt: `2カラムグリッドを実装してください。

## 要件

### 基本構造
1. コンテナ要素: <div className="persons-grid">
2. 子要素: 人物カード（Linkコンポーネント）
3. レイアウト: CSS Grid

### グリッドレイアウト仕様
1. display: grid
2. grid-template-columns: repeat(2, 1fr)
   - 2カラム
   - 各カラムは均等幅（1fr）
3. gap: 24px（行・列の間隔）

### 子要素
1. map関数で繰り返し生成
2. 各要素: <Link>コンポーネント
3. className: person-card（人物カード）
4. href: プロフィールページへのリンク

### レスポンシブ対応
1. ブレークポイント: 1024px以下
2. 変更内容:
   - grid-template-columns: 1fr（1カラムに変更）
   - カードが縦に並ぶ
   - gap: 24px（そのまま維持）

## 実装手順

1. グリッドコンテナを作成
   - <div className="persons-grid">
   - display: grid

2. グリッドカラムを定義
   - grid-template-columns: repeat(2, 1fr)
   - 2つの均等幅カラム

3. ギャップを設定
   - gap: 24px
   - 行・列の両方に適用

4. データ配列を用意
   - persons配列
   - 各項目: id、job、name、message等

5. map関数で繰り返し
   - persons.map((person, index) => ...)

6. 各カードを生成
   - <Link key={index}>
   - className="person-card"
   - 人物カードコンポーネントの内容

7. styled-jsxでスタイル追加
   - .persons-grid: グリッド設定

8. レスポンシブメディアクエリを追加
   - @media (max-width: 1024px)
   - grid-template-columns: 1fr

## デザインのポイント
- 2カラムグリッドで効率的な空間活用
- 均等幅（1fr）で左右対称の美しさ
- 24pxのギャップで適度な余白と視認性
- Grid Layoutで簡潔で保守しやすいコード
- レスポンシブ対応で小画面でも読みやすさを維持
- map関数との組み合わせでDRY（Don't Repeat Yourself）
- 1024px以下で1カラムに切り替えて縦スクロール`,
    preview: `<div class="grid grid-cols-2 gap-6">
  <div class="bg-white border border-gray-200 rounded p-5">
    <p class="text-sm text-gray-700">人物カード 1</p>
  </div>
  <div class="bg-white border border-gray-200 rounded p-5">
    <p class="text-sm text-gray-700">人物カード 2</p>
  </div>
  <div class="bg-white border border-gray-200 rounded p-5">
    <p class="text-sm text-gray-700">人物カード 3</p>
  </div>
  <div class="bg-white border border-gray-200 rounded p-5">
    <p class="text-sm text-gray-700">人物カード 4</p>
  </div>
</div>`,
    relatedTech: ['person-card-circular-image-watashi']
  },
  {
    slug: 'styled-jsx-integration-watashi',
    title: 'styled-jsx統合 - Next.js 16対応',
    category: '技術スタック',
    description: 'Next.js 16でstyled-jsxを使用したCSS-in-JS実装。Client Componentで\'use client\'必須。',
    project: 'watashi-no-kakugo',
    usedIn: [
      '/src/app/works/watashi-no-kakugo/page.tsx',
      '/src/components/works/watashi-no-kakugo/Header.tsx',
      '/src/components/works/watashi-no-kakugo/Footer.tsx'
    ],
    setup: `1. package.jsonでstyled-jsxを確認:
{
  "dependencies": {
    "styled-jsx": "^5.1.6"
  }
}

2. Client Componentで使用:
'use client'

export default function Component() {
  return (
    <>
      <div className="container">...</div>
      <style jsx>{\\\`
        .container {
          padding: 20px;
        }
      \\\`}</style>
    </>
  )
}`,
    code: `'use client'

export default function WatashiNoKakugoPage() {
  return (
    <>
      <main className="main">
        <section className="hero">
          {/* コンテンツ */}
        </section>
      </main>

      <style jsx>{\`
        .main {
          padding-top: 80px;
          min-height: 100vh;
        }

        .hero {
          background: #eeeeee;
          padding: 60px 0 50px;
        }
      \`}</style>
    </>
  )
}`,
    prompt: `styled-jsxを使ってコンポーネントにスタイルを追加してください。

## 要件

### 基本要件
1. Next.js 16環境
2. styled-jsx: ^5.1.6（package.jsonに記載）
3. Client Component: 'use client'ディレクティブ必須
4. スコープ付きCSS: コンポーネント内のみ有効

### スタイルタグ構文
1. タグ: <style jsx>{\\\`...\\\`}</style>
2. テンプレートリテラル: バッククォート使用
3. 配置: JSXのreturn内、要素と同階層
4. スコープ: デフォルトでローカルスコープ

### スコープの種類
1. ローカルスコープ（デフォルト）:
   - <style jsx>{\\\`...\\\`}</style>
   - 同じコンポーネント内のみ有効
   - クラス名の衝突を防止

2. グローバルスコープ:
   - <style jsx global>{\\\`...\\\`}</style>
   - アプリケーション全体に適用
   - リセットCSSや共通スタイルに使用

### Tailwind CSSとの併用
1. 可能: styled-jsxとTailwindは共存可能
2. 使い分け:
   - Tailwind: ユーティリティクラスで簡潔に
   - styled-jsx: 複雑なスタイル、擬似要素、メディアクエリ

### 動的スタイル
1. インラインstyle属性を使用:
   - style={{ background: color }}
2. テンプレートリテラル内で変数を展開:
   - 制限あり、完全な動的スタイルにはインライン推奨

## 実装手順

1. 'use client'ディレクティブを追加
   - ファイル冒頭（importより前）
   - Client Componentであることを宣言

2. コンポーネントを定義
   - export default function MyComponent()

3. JSXを記述
   - return文内にHTML構造
   - classNameでクラス名を指定

4. <style jsx>タグを追加
   - return内、JSX要素と同階層
   - <></>(Fragment)でラップ推奨

5. CSSを記述
   - テンプレートリテラル内
   - 通常のCSSセレクタとプロパティ

6. スコープを確認
   - ローカルスコープで同じコンポーネント内のみ有効
   - 他のコンポーネントに影響しない

7. ビルドとテスト
   - npm run dev
   - スタイルが正しく適用されることを確認

## デザインのポイント
- コンポーネントスコープでスタイルの衝突を防止
- CSS-in-JSで保守性向上（JSXとCSSが同じファイル）
- 動的スタイルはインラインstyle属性を使用
- グローバルスタイルは最小限に（共通スタイルのみ）
- Tailwindと併用して効率化

## 注意点
- Server Componentでは使用不可（'use client'必須）
- ビルド時にスタイルが最適化される
- クラス名は自動的にユニークな名前に変換される
- 擬似要素（::before、::after）、メディアクエリも使用可能`,
    preview: `<div class="bg-gray-50 p-6 rounded border border-gray-200">
  <h3 class="text-base font-bold mb-3">styled-jsx コード例</h3>
  <pre class="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto"><code>'use client'

export default function MyComponent() {
  return (
    &lt;&gt;
      &lt;div className="container"&gt;
        &lt;h1 className="title"&gt;タイトル&lt;/h1&gt;
      &lt;/div&gt;

      &lt;style jsx&gt;{\\\`
        .container {
          padding: 20px;
          background: #ffffff;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          color: #8BC34A;
        }
      \\\`}&lt;/style&gt;
    &lt;/&gt;
  )
}</code></pre>
</div>`,
    relatedTech: []
  }
];

// ai-brain-logsの知識を統合
export const technologies: Technology[] = [
  ...existingTechnologies,
  ...aiBrainLogsTechnologies
];
