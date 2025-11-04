# TECH-DOC-PROGRESS - 進捗管理

**最終更新**: 2025-11-04

---

## 現在のフェーズ

**Phase 1: ベースシステム構築** （完了）
**Phase 1.5: プロジェクト専用ページ作成** （完了）
**Phase 2: 技術分析と追加** （開始可能）

---

## Phase 1の進捗状況

### 1.1 technologies.ts の作成
- [x] 完了
- ファイル: `src/data/technologies.ts`

### 1.2 CopyButton の作成
- [x] 完了
- ファイル: `src/components/CopyButton.tsx`

### 1.3 技術一覧ページの作成
- [x] 完了
- ファイル: `src/app/tech/page.tsx`

### 1.4 技術詳細ページの作成
- [x] 完了
- ファイル: `src/app/tech/[slug]/page.tsx`

### 1.5 トップページの修正
- [x] 完了
- ファイル: `src/app/page.tsx`

### 1.6 動作確認
- [x] 完了

**Phase 1 完了率**: 100%

---

## Phase 1.5の進捗状況

**Phase 1.5が完了しました。**

### 1.5.1 technologies.ts に project フィールドを追加
- [x] 完了
- ファイル: `src/data/technologies.ts`
- 作業内容: `project: string` フィールドを追加し、既存のダミー技術に `project: "tokai-parts-industry"` を設定

### 1.5.2 東海部品工業専用の技術一覧ページを作成
- [x] 完了
- ファイル: `src/app/works/tokai-parts-industry/tech/page.tsx`
- 作業内容: 東海部品工業の配色でデザインし、technologies.tsから `project === "tokai-parts-industry"` の技術のみ表示

### 1.5.3 東海部品工業専用の技術詳細ページを作成
- [x] 完了
- ファイル: `src/app/works/tokai-parts-industry/tech/[slug]/page.tsx`
- 作業内容: 東海部品工業の配色でデザイン

### 1.5.4 共通ページにフィルター機能を追加
- [x] 完了
- ファイル: `src/app/tech/page.tsx`
- 作業内容: プロジェクトで絞り込み可能にする

### 1.5.5 東海部品工業TOPページにリンクを追加
- [x] 完了
- ファイル: `src/app/works/tokai-parts-industry/page.tsx`
- 作業内容: 技術ドキュメントセクションを追加

**Phase 1.5 完了率**: 100%

---

## Phase 2の進捗状況

**Phase 1.5が完了しました。Phase 2を開始できます。**

### 追加された技術数

- 総数: 60個
- 実際の技術: 59個
- セットアップ・環境構築: 1個

### 追加された技術リスト

#### ヘッダー関連
1. **親会社バッジ - ヘッダー上部配置** (UIコンポーネント)
   - slug: `parent-company-badge`
   - 使用場所: Header.tsx

2. **TBKロゴ - ブランドアイデンティティ** (UIコンポーネント)
   - slug: `tbk-logo-brand-identity`
   - 使用場所: Header.tsx

3. **二段階表記のナビゲーションリンク - 日本語+英語** (UIコンポーネント)
   - slug: `two-tier-navigation-links`
   - 使用場所: Header.tsx

4. **採用情報CTAボタン - オレンジのアクセントカラー** (UIコンポーネント)
   - slug: `recruitment-cta-button`
   - 使用場所: Header.tsx

5. **Sticky Header - スクロール追従ヘッダー** (UI/UX)
   - slug: `sticky-header-scroll-fixed`
   - 使用場所: Header.tsx

6. **ハンバーガーメニュー - 3本線からXへのアニメーション** (アニメーション)
   - slug: `hamburger-menu-animation`
   - 使用場所: Header.tsx

#### ヒーローセクション（カルーセル）関連
7. **カルーセル自動再生 - 5秒間隔のスライド切り替え** (アニメーション)
   - slug: `carousel-auto-play`
   - 使用場所: HeroSection.tsx

8. **スライドフェードイン - 滑らかな切り替えアニメーション** (アニメーション)
   - slug: `slide-fade-in-transition`
   - 使用場所: HeroSection.tsx

9. **カルーセルナビゲーションボタン - 円形の左右ボタン** (UIコンポーネント)
   - slug: `carousel-navigation-buttons`
   - 使用場所: HeroSection.tsx

10. **カルーセルドットインジケーター - 現在位置の視覚化** (UIコンポーネント)
    - slug: `carousel-dot-indicators`
    - 使用場所: HeroSection.tsx

11. **ヒーローテキストオーバーレイ - 画像上の中央配置テキスト** (UI/UX)
    - slug: `hero-text-overlay-centered`
    - 使用場所: HeroSection.tsx

#### セクションレイアウト関連
12. **2カラムレイアウト - 画像とカードの組み合わせ** (レイアウト・構造)
    - slug: `two-column-layout-image-card`
    - 使用場所: CompanySection.tsx, ProductSection.tsx, ManufacturingSection.tsx

13. **背景グラデーション - ライトブルーから白へ** (デザイン・ビジュアル)
    - slug: `background-gradient-light-blue`
    - 使用場所: CompanySection.tsx, SustainabilitySection.tsx, page.tsx

14. **大きな英語カテゴリラベル - セクション識別** (UIコンポーネント)
    - slug: `large-english-category-label`
    - 使用場所: CompanySection.tsx, ProductSection.tsx, ManufacturingSection.tsx

15. **CTAボタン with 矢印アイコン - アクション促進** (UIコンポーネント)
    - slug: `cta-button-with-arrow-icon`
    - 使用場所: CompanySection.tsx, ProductSection.tsx, ManufacturingSection.tsx

#### サステナビリティセクション関連
16. **フル幅の背景画像 + グラデーションオーバーレイ** (デザイン・ビジュアル)
    - slug: `full-width-background-image-gradient-overlay`
    - 使用場所: SustainabilitySection.tsx

17. **白いアウトラインボタン - 背景画像上での使用** (UIコンポーネント)
    - slug: `white-outline-button-overlay`
    - 使用場所: SustainabilitySection.tsx

18. **3カラムアイコンカード - 均等配置** (レイアウト・構造)
    - slug: `three-column-icon-cards`
    - 使用場所: SustainabilitySection.tsx

19. **トップに戻るボタン - 右下固定配置** (UI/UX)

#### CTAセクション関連
20. **2カラムCTAカード - オレンジ×ブルーの配色** (レイアウト・構造)
    - slug: `two-column-cta-cards`
    - 使用場所: CTASection.tsx

#### フッター関連
21. **ダークブルー背景のフッター - 統一感のあるデザイン** (デザイン・ビジュアル)

#### RECRUITページ関連
22. **円形背景デザイン - セクションタイトルの装飾** (UIコンポーネント)

23. **交互配色のカードグリッド - チェッカーボードパターン** (レイアウト・構造)

24. **ドットパターン背景 - CSSグラデーションで実現** (デザイン・ビジュアル)
    - slug: `dot-pattern-background`
    - 使用場所: recruit/page.tsx

25. **半透明背景のメッセージカード - Glassmorphism** (デザイン・ビジュアル)

26. **グラデーション背景セクション - 緑系のグラデーション** (デザイン・ビジュアル)
    - slug: `gradient-section-background`
    - 使用場所: recruit/page.tsx

27. **丸型CTAボタン - rounded-full** (UIコンポーネント)
    - slug: `rounded-full-cta-button`
    - 使用場所: recruit/page.tsx

#### CTAセクション関連
20. **2カラムCTAカード - オレンジ×ブルーの配色** (レイアウト・構造)
    - slug: `two-column-cta-cards`
    - 使用場所: CTASection.tsx

#### フッター関連
21. **ダークブルー背景のフッター - 統一感のあるデザイン** (デザイン・ビジュアル)

#### RECRUITページ関連
22. **円形背景デザイン - セクションタイトルの装飾** (UIコンポーネント)

23. **交互配色のカードグリッド - チェッカーボードパターン** (レイアウト・構造)

24. **ドットパターン背景 - CSSグラデーションで実現** (デザイン・ビジュアル)
    - slug: `dot-pattern-background`
    - 使用場所: recruit/page.tsx

25. **半透明背景のメッセージカード - Glassmorphism** (デザイン・ビジュアル)

26. **グラデーション背景セクション - 緑系のグラデーション** (デザイン・ビジュアル)
    - slug: `gradient-section-background`
    - 使用場所: recruit/page.tsx

27. **丸型CTAボタン - rounded-full** (UIコンポーネント)
    - slug: `rounded-full-cta-button`
    - 使用場所: recruit/page.tsx

#### 求人情報ページ関連
28. **タブ切り替えボタン - アクティブ状態の視覚化** (UIコンポーネント)
    - slug: `tab-navigation-buttons`
    - 使用場所: recruit/recruitment/page.tsx

#### 会社情報ページ関連
29. **タイトル下線装飾 - border-bottomで実現** (デザイン・ビジュアル)
    - slug: `title-underline-decoration`
    - 使用場所: about/page.tsx

#### 製品紹介ページ関連
30. **番号付きカードリスト - 円形バッジで順序を表示** (UIコンポーネント)
    - slug: `numbered-card-list`
    - 使用場所: product/page.tsx

#### TBKのクルマづくりページ関連
31. **POINTラベル - 装飾的な番号表示** (デザイン・ビジュアル)
    - slug: `point-number-label`
    - 使用場所: manufacturing/page.tsx

#### お知らせページ関連
32. **カテゴリーバッジ - 色分けされたラベル** (UIコンポーネント)
    - slug: `category-badge`
    - 使用場所: news/page.tsx

#### お問い合わせページ関連
33. **必須・任意バッジ - フォームフィールドのラベル** (UIコンポーネント)
    - slug: `required-optional-badge`
    - 使用場所: contact/page.tsx

#### ヒーローセクション関連（追加）
34. **3スライド同時表示カルーセル - 中央フォーカスデザイン** (UIコンポーネント)
    - slug: `triple-slide-carousel-center-focus`
    - 使用場所: HeroSection.tsx

#### 横スクロール関連
41. **横スクロールカルーセル - 多数のカードを水平スクロール表示** (UIコンポーネント)
    - slug: `horizontal-scroll-carousel`
    - 使用場所: recruit/page.tsx

#### 非対称レイアウト関連
42. **非対称カードレイアウト - 画像とテキストを交互に配置** (レイアウト・構造)
    - slug: `asymmetric-card-layout`
    - 使用場所: recruit/page.tsx

#### カラーオーバーレイ関連
43. **カラーオーバーレイ付き画像カード - 色で雰囲気を変える** (デザイン・ビジュアル)
    - slug: `color-overlay-image-cards`
    - 使用場所: recruit/page.tsx

### Phase 2の作業方針

1. 元デザイン画像（`/mnt/c/WEBサイトUI/東海部品工業株式会社`）を1枚ずつReadで確認
2. 現在の実装コードと比較
3. 差異を洗い出し
4. technologies.tsに技術を1つ追加
5. 動作確認
6. このファイルを更新
7. 繰り返し

---

## 次にやるべきこと

1. **Phase 2を継続する（現在51個まで完了）**
   - 次の画像: `/mnt/c/WEBサイトUI/東海部品工業株式会社/RECRUIT/interview/2.jpg`
   - 作業手順:
     1. `Read`ツールで上記の画像を確認
     2. 現在の実装コードと比較
     3. 差異や新しい技術を1つ抽出
     4. `technologies.ts`に追加（プレビュー付き）
     5. `TECH-DOC-PROGRESS.md`を更新（技術数を+1、履歴に追加）
     6. 次の画像へ
   - 詳細は `TECH-DOC-PLAN.md` の「Phase 2: 技術分析と追加」セクションを参照

### 分析済み画像
- ✅ TOP/1.jpg〜6.jpg（全6枚完了）
- ✅ RECRUIT/TOP/1.jpg〜4.jpg（全4枚完了）
- ✅ RECRUIT/crosstalk/1.jpg〜7.jpg（全7枚完了）
- ✅ RECRUIT/interview/1.jpg〜2.jpg（全2枚完了）
- ✅ RECRUIT/faq/1.jpg（全1枚完了）
- ✅ about/1.jpg（全1枚完了）
- ✅ contact/1.png, 2.png（全2枚完了）

### 全画像の分析が完了しました
主要なデザイン画像の分析は全て完了しました。合計55個の技術をドキュメント化しました。

### 今後の方針
- 追加で見つかった技術パターンがあれば随時追加
- 既存技術の改善やバリエーションの追加
- 他のプロジェクトからの技術追加

---

## 履歴

### 2025-11-04
- ドキュメント作成完了
- Phase 1 完了（100%）
- Phase 1.5 完了（100%）
  - technologies.tsにprojectフィールドを追加
  - 東海部品工業専用の技術一覧・詳細ページを作成
  - 共通ページにプロジェクトフィルター機能を追加
  - 東海部品工業TOPページに技術ドキュメントリンクを追加
- Phase 2 開始
  - 最初の技術追加: 親会社バッジ（UIコンポーネント）
  - 28個目の技術追加: タブ切り替えボタン（UIコンポーネント）
    - 求人情報ページの実装から抽出
    - アクティブ/非アクティブ状態の視覚化
    - 3カラムレスポンシブレイアウト
  - 29個目の技術追加: タイトル下線装飾（デザイン・ビジュアル）
    - 会社情報ページの実装から抽出
    - 2つのパターン: div要素での固定幅下線、border-bottomでの可変幅下線
    - inline-blockと組み合わせて、タイトル幅に合わせた下線を実現
  - 30個目の技術追加: 番号付きカードリスト（UIコンポーネント）
    - 製品紹介ページの実装から抽出
    - 円形の番号バッジ（w-10 h-10、rounded-full）
    - グリッドレイアウト（md:grid-cols-2 lg:grid-cols-3）
    - ホバーエフェクト付きカード
  - 31個目の技術追加: POINTラベル（デザイン・ビジュアル）
    - TBKのクルマづくりページの実装から抽出
    - 「POINT」テキスト（text-lg）と大きな番号（text-5xl）の組み合わせ
    - 水色（cyan-500）で統一された視覚的な強調
    - tracking-widerで文字間隔を広げ視認性を向上
  - 32個目の技術追加: カテゴリーバッジ（UIコンポーネント）
    - お知らせページの実装から抽出
    - 丸型（rounded-full）で色分けされたラベル
    - 淡い背景色（bg-{color}-100）と濃いテキスト色（text-{color}-800）
    - カテゴリーごとに色を変え、視覚的に区別
  - 33個目の技術追加: 必須・任意バッジ（UIコンポーネント）
    - お問い合わせページの実装から抽出
    - 必須（bg-red-100 text-red-800）と任意（bg-gray-100 text-gray-600）
    - フォームフィールドのラベルに配置
    - フォームのユーザビリティ向上に貢献
  - 34個目の技術追加: 3スライド同時表示カルーセル - 中央フォーカスデザイン（UIコンポーネント）
    - TOPページの元デザイン画像（1.jpg）から抽出
    - 中央に大きなメイン画像、左右に前後のスライドのサムネイルを同時表示
    - opacity-50とscale-90で左右のスライドを控えめに表示
    - ユーザーに次の内容を予告し、インタラクションを促進
    - モバイルでは中央のみ表示（hidden md:block）
    - プレビュー付きで視覚的な理解を容易に
  - 35個目の技術追加: 背景装飾画像 - セクション背景の透かし画像（デザイン・ビジュアル）
    - TOPページの元デザイン画像（2.jpg）から抽出
    - セクション背景に半透明（opacity-20）の装飾画像を配置
    - absolute positioning + z-index で背景レイヤーに配置
    - pointer-events-none でクリックイベントを無効化
    - 視覚的な深みと立体感を追加し、ブランドイメージを強化
    - プレビュー付きで視覚的な理解を容易に
  - 36個目の技術追加: 交互レイアウト - セクションごとに左右を反転（レイアウト・構造）
    - TOPページの元デザイン画像（3.jpg）から抽出
    - 連続するセクションで画像とカードの配置を左右反転
    - lg:order-1, lg:order-2で順序を制御
    - 視覚的なリズムを作り出し、単調さを避ける
    - Company（左=画像、右=カード）→ Product（左=カード、右=画像）→ Manufacturing（左=画像、右=カード）のパターン
    - プレビュー付きで視覚的な理解を容易に
  - 37個目の技術追加: 2色分割背景 - 上下で色を分ける（デザイン・ビジュアル）
    - TOPページの元デザイン画像（4.jpg）から抽出
    - セクションの背景を上下2色に分割（上=ブルー、下=ホワイト）
    - linear-gradientで境界線を明確に50%の位置で分割
    - 視覚的な区切りと立体感を作り出す
    - 3つの実装方法を提示（linear-gradient、擬似要素、Tailwindグラデーション）
    - プレビュー付きで視覚的な理解を容易に
  - 38個目の技術追加: Floating Cards - セクション境界をまたぐカード配置（レイアウト・構造）
    - TOPページの元デザイン画像（5.jpg）から抽出
    - カードをセクションの境界線をまたいで配置
    - 負のマージン（-mt-24）またはpb-16で実現
    - 視覚的な連続性と立体感を作り出す
    - 2つのアプローチを提示（セクション内で突き出す、負のマージンで重ねる）
    - shadow-xlで浮遊感を強調
    - プレビュー付きで視覚的な理解を容易に
  - 39個目の技術追加: Wave Section Divider - 波形セクション境界（デザイン・ビジュアル）
    - TOPページの元デザイン画像（6.jpg）から抽出
    - SVGで波形の境界線を作成し、セクション間の遷移を柔らかく自然にする
    - 4つの波形パターンを提示（緩やかな波、急な波、大きな1つの波、複数の小さな波）
    - fill="currentColor"でTailwindのtext-*クラスで色を制御
    - viewBox="0 0 1440 120"とpreserveAspectRatio="none"でレスポンシブ対応
    - プレビュー付きで視覚的な理解を容易に
  - 40個目の技術追加: Isometric Illustration - 3Dアイソメトリックイラスト装飾（デザイン・ビジュアル）
    - RECRUITページの元デザイン画像（TOP/1.jpg）から抽出
    - 3Dアイソメトリック風のイラストを背景やセクションに配置
    - absolute positioningで自由に配置（右上、左下、中央など）
    - opacity-90で背景になじませる
    - ロボットアーム、スマートフォン、工場などの製造業向けイラスト
    - アニメーション（animate-float）でさらに魅力的に
    - プレビュー付きで視覚的な理解を容易に
  - 41個目の技術追加: 横スクロールカルーセル - 多数のカードを水平スクロール表示（UIコンポーネント）
    - RECRUIT/TOP/2.jpgの元デザイン画像から抽出
    - 現在の実装はグリッドレイアウト（grid md:grid-cols-3）だが、元デザインは横スクロール
    - overflow-x-autoで横スクロール可能に
    - flexレイアウトで横並び配置
    - flex-shrink-0でカードの縮小を防止
    - 固定幅（w-80）で一貫性のあるレイアウト
    - scrollbar-hideでスクロールバーを非表示
    - モバイルフレンドリーなスワイプ操作に対応
    - プレビュー付きで視覚的な理解を容易に（4枚のインタビューカードを表示）
  - 42個目の技術追加: 非対称カードレイアウト - 画像とテキストを交互に配置（レイアウト・構造）
    - RECRUIT/TOP/3.jpgの元デザイン画像から抽出
    - クロストークセクションで使用されている交互配置パターン
    - 奇数番目: flex-row で左に画像、右にテキスト
    - 偶数番目: flex-row-reverse で左にテキスト、右に画像
    - space-y-12でカード間にスペース
    - items-centerで垂直方向の中央揃え
    - モバイルでは flex-col で縦積み（統一されたレイアウト）
    - 視覚的なリズムを作り出し、単調さを避ける
    - プレビュー付きで視覚的な理解を容易に（2枚のクロストークカードを表示）

---

**重要**: 技術を1つ追加するたびに、このファイルを更新すること。

#### カラーオーバーレイ関連
43. **カラーオーバーレイ付き画像カード - 色で雰囲気を変える** (デザイン・ビジュアル)
    - slug: `color-overlay-image-cards`
    - 使用場所: recruit/page.tsx
  - 43個目の技術追加: カラーオーバーレイ付き画像カード - 色で雰囲気を変える（デザイン・ビジュアル）
    - RECRUIT/TOP/4.jpgの元デザイン画像から抽出
    - DATA、FLOW、Q&Aのカードで使用されている
    - 背景画像の上に半透明の色を重ねる（bg-[color]/60）
    - カード毎に異なる色を使用（緑系、青緑系、青紫系）
    - ホバー時にオーバーレイの透明度を変更（/60 → /70）
    - 色の意味を考慮（緑=自然、青緑=技術、青紫=知識）
    - 白いテキストとアイコンで視認性を確保
    - プレビュー付きで視覚的な理解を容易に（3枚のカードを表示）

---

**重要**: 技術を1つ追加するたびに、このファイルを更新すること。

#### 分割ヒーロー画像関連
44. **分割ヒーロー画像 - 左右で異なる画像を表示** (デザイン・ビジュアル)
    - slug: `split-hero-image`
    - 使用場所: recruit/crosstalk/page.tsx
  - 44個目の技術追加: 分割ヒーロー画像 - 左右で異なる画像を表示（デザイン・ビジュアル）
    - RECRUIT/crosstalk/1.jpgの元デザイン画像から抽出
    - クロストークページのヒーローセクションで使用
    - 左右で異なる背景画像を配置（flex で w-1/2）
    - 左側：技術部門の社員（青系オーバーレイ）
    - 右側：製造部門の社員（緑系オーバーレイ）
    - 中央にテキストを absolute で配置（z-10）
    - 中央に境界線を追加（left-1/2、w-px、bg-white/30）
    - 視覚的なコントラストと物語性を作り出す
    - プレビュー付きで視覚的な理解を容易に

---

**重要**: 技術を1つ追加するたびに、このファイルを更新すること。

#### チャット形式レイアウト関連
45. **チャット形式の対談レイアウト - 会話の流れを視覚化** (UIコンポーネント)
    - slug: `chat-style-dialogue-layout`
    - 使用場所: recruit/crosstalk/page.tsx
  - 45個目の技術追加: チャット形式の対談レイアウト - 会話の流れを視覚化（UIコンポーネント）
    - RECRUIT/crosstalk/2.jpgの元デザイン画像から抽出
    - 対談や会話の流れを視覚的に表現するレイアウト
    - 円形のアバター画像（rounded-full、border-4、shadow-lg）
    - 吹き出し型のコメントボックス（rounded-2xl、片側の角削除）
    - 左右交互に配置（index % 2 で判定）
    - 左側：flex-row、rounded-tl-none（左上の角なし）
    - 右側：flex-row-reverse、rounded-tr-none（右上の角なし）
    - space-y-12 で発言間にスペース
    - プレビュー付きで視覚的な理解を容易に（3つの発言を表示）

---

**重要**: 技術を1つ追加するたびに、このファイルを更新すること。

#### 背景色グラデーション関連
46. **背景色グラデーションによるセクション区切り - 色で流れを作る** (デザイン・ビジュアル)
    - slug: `section-divider-with-background-gradient`
    - 使用場所: recruit/crosstalk/page.tsx
  - 46個目の技術追加: 背景色グラデーションによるセクション区切り - 色で流れを作る（デザイン・ビジュアル）
    - RECRUIT/crosstalk/3.pngの元デザイン画像から抽出
    - ページ内の複数セクションで背景色を微妙に変化させる
    - 境界線なしで自然な区切りを実現
    - 緑系グラデーション（薄い→中間→濃い）
    - 薄い: #F0FDF4 (green-50)
    - 中間: #DCFCE7 (green-100)
    - 濃い: #BBF7D0 (green-200)
    - py-16 で上下に十分なパディング
    - セクションタイトルを中央配置（text-center）
    - 段階的な変化でページの流れを作り出す
    - プレビュー付きで視覚的な理解を容易に（3つのセクションを表示）

#### テキストハイライト関連
47. **テキストハイライト（マーカー効果） - 重要な文章を強調** (デザイン・ビジュアル)
    - slug: `text-highlight-marker`
    - 使用場所: recruit/crosstalk/page.tsx, recruit/page.tsx
  - 47個目の技術追加: テキストハイライト（マーカー効果） - 重要な文章を強調（デザイン・ビジュアル）
    - RECRUIT/crosstalk/4.jpgの元デザイン画像から抽出
    - 重要な文章に黄色のマーカーを引いて視覚的に強調
    - bg-yellow-200（明るい黄色）を使用
    - px-2 py-1 で適度なパディング
    - rounded で角を軽く丸める
    - 見出しやキャッチコピーで使用し、読者の注目を引く
    - 複数のパターンを提示（インライン、ブロック、複数行、markタグ）
    - 色のバリエーション（黄色、緑、青、オレンジ、ピンク）も説明
    - アクセシビリティの考慮（markタグでスクリーンリーダー対応）
    - プレビュー付きで視覚的な理解を容易に（3つのパターンを表示）

#### 質問装飾関連
48. **質問タイトル装飾ブラケット - 斜めのブラケットで質問を強調** (UIコンポーネント)
    - slug: `question-bracket-decoration`
    - 使用場所: recruit/crosstalk/page.tsx, recruit/faq/page.tsx
  - 48個目の技術追加: 質問タイトル装飾ブラケット - 斜めのブラケットで質問を強調（UIコンポーネント）
    - RECRUIT/crosstalk/5.pngの元デザイン画像から抽出
    - 質問やセクションタイトルを青い斜めのブラケット（\ /）で囲んで視覚的に強調
    - text-blue-600で青色のブラケット
    - transform -rotate-12（左）、rotate-12（右）で傾きを付与
    - text-3xl font-lightでタイトルより大きく細めに設定
    - inline-flexで横並び配置、gap-3で適切な間隔
    - 4つの実装パターンを提示（基本形、レスポンシブ対応、SVG版、装飾ボーダー版）
    - 色のバリエーション（青、緑、オレンジ、紫、グレー）も説明
    - レスポンシブ対応（モバイルでブラケット非表示）
    - アクセシビリティ考慮（aria-hidden="true"推奨）
    - Q&A、対談、インタビューページで使用
    - プレビュー付きで視覚的な理解を容易に（3つのパターンを表示）

#### 画像とチャットの組み合わせ関連
49. **画像とチャットの組み合わせレイアウト - 現場写真で臨場感を演出** (レイアウト・構造)
    - slug: `image-chat-combo-layout`
    - 使用場所: recruit/crosstalk/page.tsx, recruit/interview/page.tsx
  - 49個目の技術追加: 画像とチャットの組み合わせレイアウト - 現場写真で臨場感を演出（レイアウト・構造）
    - RECRUIT/crosstalk/6.pngの元デザイン画像から抽出
    - 対談・インタビューページで、右側に大きな現場写真を配置し、左側にチャット形式の吹き出しを配置
    - grid md:grid-cols-2で2カラムレイアウト
    - 左側: space-y-6でチャット形式の対談を縦に並べる
    - 右側: min-h-[400px]以上で大きな現場写真を配置
    - 画像: rounded-2xl shadow-xlで角を丸く、大きな影を付ける
    - object-coverで画像のアスペクト比を保ちながら領域全体を覆う
    - gap-8でチャットと画像の間に適度なスペース
    - 3つの実装パターンを提示（基本形、左右反転、背景画像版）
    - レイアウトのバリエーション（交互配置、全幅画像、複数画像、背景画像）
    - レスポンシブ対応（モバイルでは縦積み）
    - 実際の職場の雰囲気を視覚的に伝え、臨場感を高める
    - プレビュー付きで視覚的な理解を容易に（チャット3つと画像の組み合わせを表示）

#### 手書き風フォント関連
50. **手書き風フォント見出し - 柔らかく親しみやすい印象** (デザイン・ビジュアル)
    - slug: `handwritten-style-heading`
    - 使用場所: recruit/crosstalk/page.tsx, recruit/page.tsx
  - 50個目の技術追加: 手書き風フォント見出し - 柔らかく親しみやすい印象（デザイン・ビジュアル）
    - RECRUIT/crosstalk/7.jpgの元デザイン画像から抽出
    - セクション見出しに手書き風の筆記体フォントを使用
    - font-serif italic で流れるような書体を実現
    - text-4xl md:text-5xl で大きく目立たせる
    - text-blue-600 で青色、text-center で中央揃え
    - my-12 で上下に十分な余白を確保
    - 5つの実装パターンを提示（基本形、Dancing Script、Pacifico、Caveat、Tailwind設定）
    - おすすめのフォント（英語向け：Dancing Script、Pacifico、Caveat、Satisfy、Allura）
    - おすすめのフォント（日本語向け：Klee One、Yuji Syuku、Zen Kurenaido）
    - パフォーマンス最適化（Next.js next/font、display: 'swap'、サブセット）
    - 色のバリエーション（青、紫、ピンク、緑、グラデーション）
    - 柔らかく親しみやすい雰囲気を演出
    - プレビュー付きで視覚的な理解を容易に（4つのパターンを表示）

#### コーナーリボン関連
51. **コーナーリボンラベル - カードの角に配置する装飾ラベル** (UIコンポーネント)
    - slug: `corner-ribbon-label`
    - 使用場所: recruit/interview/page.tsx, recruit/page.tsx
  - 51個目の技術追加: コーナーリボンラベル - カードの角に配置する装飾ラベル（UIコンポーネント）
    - RECRUIT/interview/1.jpgの元デザイン画像から抽出
    - カードやサムネイルの左上に斜めに配置されるリボン風のラベル
    - "Interview 01"などの番号やカテゴリーを表示
    - absolute positioning で左上（top-0 left-0）に配置
    - transform -rotate-45 で45度傾ける
    - translate-x-8 translate-y-4 で位置を微調整
    - bg-green-500 text-white で緑の背景に白文字
    - shadow-lg で立体感を出す
    - 親要素に relative overflow-hidden が必須
    - 5つの実装パターンを提示（斜めリボン左上、斜めリボン右上、三角形リボン、折り返しリボン、シンプルバッジ）
    - 色のバリエーション（緑、青、オレンジ、赤、紫、グレー）
    - 使用例（インタビュー番号、新着バッジ、カテゴリーラベル、ステータス表示など）
    - レスポンシブ対応（モバイル: text-xs px-4、デスクトップ: text-sm px-8）
    - 視覚的なアクセントとして機能
    - プレビュー付きで視覚的な理解を容易に（3つのパターンを表示）

#### 大きな丸型CTAボタン関連
52. **大きな丸型CTAボタン（2カラム配置） - セクション下部のCTAパターン** (UIコンポーネント)
    - slug: `large-pill-cta-buttons-section`
    - 使用場所: recruit/interview/page.tsx
  - 52個目の技術追加: 大きな丸型CTAボタン（2カラム配置） - セクション下部のCTAパターン（UIコンポーネント）
    - RECRUIT/interview/2.jpgの元デザイン画像から抽出
    - セクション下部に配置される2つの大きな丸型（pill型）CTAボタン
    - 緑色の背景セクション（bg-[#4ADE80]）に白いボタンを配置
    - 各ボタン: rounded-full px-12 py-6 shadow-lg
    - flex flex-col md:flex-row gap-6 で2カラム配置
    - ボタン内容: 英語タイトル（text-2xl font-bold）+ 日本語サブタイトル（text-sm）+ 矢印アイコン
    - ホバー効果: hover:bg-gray-50 hover:shadow-xl
    - グループホバーで矢印アイコンの色が変化（text-gray-400 → text-[#2563EB]）
    - レスポンシブ対応（モバイル: w-full、デスクトップ: w-auto）
    - FAQと募集情報への強力なCTA導線
    - ページ遷移を促進する効果的なデザインパターン
    - プレビュー付きで視覚的な理解を容易に（2つのボタンを表示）

#### アコーディオン型FAQ関連
53. **アコーディオン型FAQ - 緑色の背景と開閉アニメーション** (UIコンポーネント)
    - slug: `accordion-faq-green-background`
    - 使用場所: recruit/faq/page.tsx
  - 53個目の技術追加: アコーディオン型FAQ - 緑色の背景と開閉アニメーション（UIコンポーネント）
    - RECRUIT/faq/1.jpgの元デザイン画像から抽出
    - クリックで質問を開閉できるアコーディオン型FAQ
    - 緑色の背景（bg-green-100）にQ.ラベル（text-green-700 font-bold）
    - クリックで白背景（bg-white）のA.エリアが表示される
    - A.ラベル: text-blue-600 font-bold
    - useState で openIndex を管理（number | null）
    - ホバー効果: hover:bg-green-200（少し濃い緑）
    - Chevronアイコン（ChevronUp/ChevronDown）で開閉状態を視覚化
    - 条件付きレンダリングで回答エリアを表示/非表示
    - whitespace-pre-line で改行を保持
    - space-y-4 でFAQ項目間に適度なスペース
    - border-t border-green-200 で質問と回答を視覚的に区切る
    - 優れたUXで多くの質問を効率的に表示
    - プレビュー付きで視覚的な理解を容易に（開いている状態と閉じている状態を表示）

#### セクションタイトル左装飾線関連
54. **セクションタイトル左装飾線 - 縦の境界線で強調** (デザイン・ビジュアル)
    - slug: `section-title-left-border-accent`
    - 使用場所: about/1.jpg（元デザイン）
  - 54個目の技術追加: セクションタイトル左装飾線 - 縦の境界線で強調（デザイン・ビジュアル）
    - about/1.jpgの元デザイン画像から抽出
    - セクションタイトルの左側に太い縦線（border-left）を配置して視覚的に強調
    - 縦線の太さ: border-l-4（4px）または border-l-8（8px）
    - 縦線の色: ブランドカラー（border-blue-600）
    - 左パディング: pl-4 または pl-6（縦線の太さに応じて調整）
    - タイトル: text-3xl font-bold text-blue-900
    - 5つの実装パターンを提示（基本形、太い縦線、グラデーション、複数色、アニメーション付き）
    - グラデーション縦線: absolute positioning + bg-gradient-to-b
    - 複数色の縦線: 2本以上の縦線を並べて配置（青+オレンジなど）
    - アニメーション付き: ホバー時に縦線が太くなる（transition-all）
    - モダンで洗練された印象を与える
    - 会社情報ページ、サービス紹介ページのセクションタイトルに使用
    - プレビュー付きで視覚的な理解を容易に（4つのパターンを表示）

#### 大きなカラーカードCTA関連
55. **大きなカラーカードCTA - 2カラム分割とアウトラインボタン** (UIコンポーネント)
    - slug: `large-color-card-cta-split-layout`
    - 使用場所: CTASection.tsx
  - 55個目の技術追加: 大きなカラーカードCTA - 2カラム分割とアウトラインボタン（UIコンポーネント）
    - contact/2.pngの元デザイン画像から抽出
    - ページ下部に配置される2つの大きなカラーカード（RECRUIT/CONTACT）
    - 背景画像（工場航空写真）+ オーバーレイ（bg-black/60）
    - 2カラムレイアウト（grid grid-cols-1 lg:grid-cols-2）
    - 左カード: オレンジ色（bg-[#FF6B35]）、右カード: 青色（bg-[#2563EB]）
    - 各カードの構成: SVGアイコン（w-16 h-16）+ タイトル（text-4xl）+ 説明文（text-xl）+ ボタン
    - アウトラインボタン: border-2 border-white、hover:bg-white hover:text-[色]で反転
    - space-y-6 で縦の適度な間隔
    - レスポンシブ対応（モバイル: 縦積み、デスクトップ: 横並び）
    - 強力なCTA導線でRECRUITとCONTACTへ誘導
    - プレビュー付きで視覚的な理解を容易に（2つのカードを表示）

#### ワイヤーフレイム・設計関連
56. **Figmaでのワイヤーフレイム作成 - ローファイからハイファイまで** (ワイヤーフレイム・設計)
    - slug: `figma-wireframe-creation`
    - 使用場所: Figmaファイル
  - 56個目の技術追加: Figmaでのワイヤーフレイム作成
    - Auto Layoutを活用したレスポンシブ対応
    - コンポーネント化による効率化
    - グレースケールでの情報設計重視
    - 12カラムグリッド、ガター24px
    - ボタン、カード、ナビゲーションバー等のコンポーネント作成
    - PDF/PNG/Figmaリンクでエクスポート

57. **SVGインラインワイヤーフレイム - コード内でのワイヤーフレイム表現** (ワイヤーフレイム・設計)
    - slug: `svg-wireframe-inline`
    - 使用場所: ドキュメント、設計書
  - 57個目の技術追加: SVGインラインワイヤーフレイム
    - SVGでコード内に直接ワイヤーフレイムを埋め込み
    - グレーの矩形、テキストplaceholder、斜線パターン
    - 拡大縮小しても劣化しない
    - ドキュメントやコメント内での視覚的な説明に有効
    - プレビュー付きで視覚的な理解を容易に

#### デザインカンプ・モックアップ関連
58. **Figmaハイファイデザインカンプ - 実装レベルのデザイン** (デザインカンプ・モックアップ)
    - slug: `figma-design-comp-hifi`
    - 使用場所: Figmaファイル
  - 58個目の技術追加: Figmaハイファイデザインカンプ
    - 実際の色、フォント、画像を使用
    - コンポーネント、Auto Layout、Variantsを活用
    - デザインシステム構築（カラー、タイポグラフィ、スペーシング）
    - ホバーエフェクト、トランジション、プロトタイピング
    - Figma Dev Modeで開発者への引き渡し

59. **Tailwind CSSベースのデザイントークン - 設計と実装の一体化** (デザインカンプ・モックアップ)
    - slug: `tailwind-based-design-tokens`
    - 使用場所: tailwind.config.ts
  - 59個目の技術追加: Tailwind CSSベースのデザイントークン
    - tailwind.config.tsでデザイントークンを一元管理
    - カラーパレット、タイポグラフィ、スペーシングを定義
    - Figmaとコードでの UI設計を統一
    - JSONエクスポートでFigmaと連携
    - 8px Grid Systemに準拠

#### セットアップ・環境構築関連
60. **Web Template Library - プロジェクトセットアップ** (セットアップ・環境構築)
    - slug: `project-setup-web-template-library`
    - 使用場所: /
  - 60個目の技術追加: Web Template Library - プロジェクトセットアップ
    - 新規環境でこのプロジェクトをセットアップする手順
    - cd /mnt/c/web-template-library → npm install → npm run dev
    - 依存パッケージ: Next.js 16、React 19、Tailwind CSS 4、TypeScript 5、lucide-react
    - トラブルシューティング手順も含む
    - Claude Codeが実行できる具体的なコマンドとして記載
    - yumesutaHP、yumesuta-academy-lpと同様のセットアップパターン

---

**重要**: 技術を1つ追加するたびに、このファイルを更新すること。
