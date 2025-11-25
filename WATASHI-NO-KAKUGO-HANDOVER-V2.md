# 「私のカクゴ」作品 引き継ぎドキュメント V2

作成日: 2025-11-04
作成者: Claude Code (前世代)
対象: 次世代Claude Code

---

## 📋 現在の完了状況

### ✅ 完了したページ・コンポーネント

1. **Header.tsx** - 80%完成
   - 場所: `/mnt/c/web-template-library/src/components/works/watashi-no-kakugo/Header.tsx`
   - 修正内容: ヘッダー高さ72px→80px、フォントサイズ、スペーシング調整
   - 残課題: なし

2. **Footer.tsx** - 80%完成
   - 場所: `/mnt/c/web-template-library/src/components/works/watashi-no-kakugo/Footer.tsx`
   - 修正内容: 背景色、スペーシング、フォントサイズ調整
   - 残課題: なし

3. **TOPページ (page.tsx)** - 70%完成
   - 場所: `/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/page.tsx`
   - **重要な修正**: 2カラムから3カラムレイアウトに変更
   - レイアウト構造:
     ```
     [更新情報 370px] [私のカクゴ一覧 270px] [動画 300px]
     ```
   - コンテナ幅: 1200px → 980px
   - 各カラムにスクロールエリア（高さ290px）
   - 残課題: ベンチマーク画像と細かい調整が必要

4. **aboutページ** - 70%完成
   - 場所: `/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/about/page.tsx`
   - 修正内容: エレメント構造に合わせて再実装
   - コンテナ幅: 900px → 980px
   - フォントサイズ、スペーシング調整
   - 残課題: ベンチマーク画像と細かい調整が必要

### ❌ 未完了のページ

以下のページは**まだ修正していません**。エレメントを見ながら正確に実装する必要があります。

1. **私のカクゴ一覧ページ** (`persons/page.tsx`)
2. **プロフィール詳細ページ** (`profile/page.tsx`)
3. **ブログ・SNSページ** (`sns/page.tsx`)
4. **利用規約系ページ** (`terms/`, `terms/media-policy/`, など)
5. **サイトマップページ** (`sitemap/page.tsx`)

---

## 🔑 重要な発見と学び

### 1. レイアウトの違いに気づく方法

**問題**: 当初、TOPページを2カラム（メインコンテンツ + サイドバー）で実装していた

**エレメントの実際の構造**:
```html
<div id="top_box_wrapper">
  <div class="top_box W370">更新情報</div>
  <div class="top_box W270">私のカクゴ一覧</div>
  <div class="top_box W300">動画</div>
</div>
```

**教訓**: エレメントのHTMLを**最初から最後まで丁寧に読む**こと。`W370`, `W270`, `W300`というクラス名は幅を示している。

### 2. コンテナ幅の発見方法

**エレメントから読み取る**:
```html
<div class="contents_980_inner">
```
→ コンテナ幅は**980px**

**教訓**: クラス名に数字が含まれている場合、それは重要なサイズ情報。

### 3. スペーシングの発見方法

**エレメントから読み取る**:
```html
<div class="contents_wrapper PT40">
  <h3 class="MB25 common_title">
```
- `PT40` = padding-top: 40px
- `MB25` = margin-bottom: 25px

**教訓**: 略語クラス名（PT, MB, MT など）はスペーシングの手がかり。

### 4. スクロールエリアの発見方法

**エレメントから読み取る**:
```html
<div id="update_area" class="cstm_scroll ps-container">
  <div class="ps-scrollbar-y-rail" style="height: 290px;">
```
→ スクロールエリアの高さは**290px**

**教訓**: `ps-scrollbar`, `cstm_scroll`などのクラス名やインラインスタイルを確認。

---

## 📐 実装ルール（次世代への明示的な指示）

### ルール1: エレメントのHTML構造を完全にコピーする

**悪い例**:
```tsx
// 想像で実装
<div className="updates">
  <div className="update-card">...</div>
</div>
```

**良い例**:
```tsx
// エレメントのHTMLをそのまま再現
<div className="top-box updates-box">
  <h2 className="section-title">更新情報</h2>
  <div className="scroll-area">
    <div className="update-item">...</div>
  </div>
</div>
```

### ルール2: クラス名から幅とスペーシングを読み取る

| エレメントのクラス | 意味 | CSSでの実装 |
|---|---|---|
| `W370` | width: 370px | `.updates-box { width: 370px; }` |
| `W270` | width: 270px | `.kakugo-box { width: 270px; }` |
| `W300` | width: 300px | `.video-box { width: 300px; }` |
| `PT40` | padding-top: 40px | `padding: 40px 20px 0;` |
| `PT50` | padding-top: 50px | `padding-top: 50px;` |
| `MT55` | margin-top: 55px | `margin-top: 55px;` |
| `MB25` | margin-bottom: 25px | `margin: 0 0 25px;` |

### ルール3: インラインスタイルの情報を活用する

エレメントには`style="height: 290px;"`のようなインラインスタイルがある。これは**正確なサイズ情報**。

### ルール4: ベンチマーク画像と比較しながら実装する

**必須手順**:
1. エレメントHTMLを読む
2. ベンチマーク画像を開く（`/mnt/c/WEBサイトUI/私のカクゴ/`）
3. コードを書く
4. ブラウザで確認
5. ベンチマーク画像と比較
6. 80%以上の一致を確認

### ルール5: 略語クラス名の意味

| 略語 | 意味 |
|---|---|
| `PT` | padding-top |
| `PB` | padding-bottom |
| `MT` | margin-top |
| `MB` | margin-bottom |
| `ML` | margin-left |
| `MR` | margin-right |
| `W` | width |
| `FCG` | font-color (gray) |
| `FS` | font-size |

---

## 🚨 次にやるべきこと（優先順位順）

### ステップ1: TOPページの細部調整

**タスク**: ベンチマーク画像と比較して、以下を確認・調整

- [ ] ヘッダーの高さとスペーシング
- [ ] ヒーローセクション（7人の人物）の配置
- [ ] 3カラムの幅とギャップ
- [ ] スクロールバーのスタイル
- [ ] ブログカードのグリッド（5カラム）
- [ ] フッターのスペーシング

**確認方法**:
```bash
# 開発サーバー起動
npm run dev

# ブラウザで確認
# http://localhost:3000/works/watashi-no-kakugo

# ベンチマーク画像と比較
Read /mnt/c/WEBサイトUI/私のカクゴ/top/1.png
Read /mnt/c/WEBサイトUI/私のカクゴ/top/2.png
```

### ステップ2: 私のカクゴ一覧ページの実装

**エレメントの場所**: ユーザーから共有される（まだ未提供）

**ベンチマーク画像**:
```bash
Read /mnt/c/WEBサイトUI/私のカクゴ/persons/1.png
```

**実装ファイル**:
```
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/persons/page.tsx
```

**実装時の注意点**:
- 2カラムレイアウト（サイドバー検索 + メインカード）
- カードは2カラムグリッド
- 検索フォームの配置に注意

### ステップ3: プロフィール詳細ページの実装

**ベンチマーク画像**:
```bash
Read /mnt/c/WEBサイトUI/私のカクゴ/profile/1.png
```

**実装ファイル**:
```
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/profile/page.tsx
```

**実装時の注意点**:
- 複雑なレイアウト（動画プレーヤー、プロフィール、円グラフ、タブ）
- タブ切り替えの実装（useState使用）
- 円グラフの実装

### ステップ4: ブログ・SNSページの実装

**ベンチマーク画像**:
```bash
Read /mnt/c/WEBサイトUI/私のカクゴ/sns/1.png
```

**実装ファイル**:
```
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/sns/page.tsx
```

**実装時の注意点**:
- 5カラムグリッド
- 検索フォーム
- ページネーション

### ステップ5: 利用規約系ページの実装

**ベンチマーク画像**:
```bash
Read /mnt/c/WEBサイトUI/私のカクゴ/terms/1.png
Read /mnt/c/WEBサイトUI/私のカクゴ/terms/2.png
# ... 6.png まで
```

**実装ファイル**:
```
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/terms/page.tsx
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/terms/media-policy/page.tsx
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/terms/privacy-policy/page.tsx
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/terms/company/page.tsx
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/terms/contact/page.tsx
```

**実装時の注意点**:
- サイドバーナビゲーション
- テーブルレイアウト（会社概要）
- 外部リンク（お問い合わせ）

### ステップ6: サイトマップページの実装

**ベンチマーク画像**: なし（シンプルなページ）

**実装ファイル**:
```
/mnt/c/web-template-library/src/app/works/watashi-no-kakugo/sitemap/page.tsx
```

---

## 📁 重要なファイルパス

### ベンチマーク画像
```
/mnt/c/WEBサイトUI/私のカクゴ/
├── top/
│   ├── 1.png
│   └── 2.png
├── about/
│   └── 1.png
├── persons/
│   └── 1.png
├── profile/
│   └── 1.png
├── sns/
│   └── 1.png
└── terms/
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    ├── 5.png
    └── 6.png
```

### 実装ファイル
```
/mnt/c/web-template-library/
├── src/
│   ├── app/
│   │   └── works/
│   │       └── watashi-no-kakugo/
│   │           ├── page.tsx                      # TOPページ
│   │           ├── about/page.tsx                # 私のカクゴとは
│   │           ├── persons/page.tsx              # 私のカクゴ一覧
│   │           ├── profile/page.tsx              # プロフィール詳細
│   │           ├── sns/page.tsx                  # ブログ・SNS
│   │           ├── terms/
│   │           │   ├── page.tsx
│   │           │   ├── media-policy/page.tsx
│   │           │   ├── privacy-policy/page.tsx
│   │           │   ├── company/page.tsx
│   │           │   └── contact/page.tsx
│   │           └── sitemap/page.tsx
│   │
│   └── components/
│       └── works/
│           └── watashi-no-kakugo/
│               ├── Header.tsx
│               ├── Footer.tsx
│               └── TermsLayout.tsx
```

---

## 🎨 デザイン仕様（確定版）

### カラーパレット
```css
/* グリーンアクセント */
--primary-green: #8BC34A;

/* 背景 */
--bg-white: #ffffff;
--bg-light: #f8f8f8;
--bg-gray: #eeeeee;

/* テキスト */
--text-black: #000000;
--text-dark: #333333;
--text-gray: #666666;
--text-light: #999999;
--text-lighter: #aaaaaa;
--text-lightest: #cccccc;

/* ボーダー */
--border-light: #f0f0f0;
--border-gray: #e8e8e8;
--border-dark: #e0e0e0;
--border-darker: #d0d0d0;

/* ボタン */
--button-gray: #999999;
```

### レイアウト
```css
/* コンテナ */
--container-width: 980px;

/* ヘッダー */
--header-height: 80px;

/* カラム幅（TOPページ） */
--column-updates: 370px;
--column-kakugo: 270px;
--column-video: 300px;

/* スクロールエリア */
--scroll-height: 290px;

/* スペーシング */
--spacing-xs: 4px;
--spacing-s: 8px;
--spacing-m: 16px;
--spacing-l: 24px;
--spacing-xl: 32px;
--spacing-xxl: 48px;
```

### タイポグラフィ
```css
/* 見出し */
--font-size-h1: 28px;
--font-size-h2: 18px;
--font-size-h3: 16px;

/* 本文 */
--font-size-base: 15px;
--font-size-small: 13px;
--font-size-xs: 12px;
--font-size-xxs: 11px;
--font-size-tiny: 10px;

/* 行間 */
--line-height-tight: 1.4;
--line-height-normal: 1.6;
--line-height-loose: 2;
```

---

## 🔍 エレメントの読み方（具体例）

### 例1: TOPページの3カラムレイアウト

**エレメント（提供されたHTML）**:
```html
<div id="top_box_wrapper">
  <div class="top_box W370">
    <h3 class="MB25 common_title">更新情報</h3>
    <div id="update_area" class="cstm_scroll ps-container">
      <!-- スクロール可能なコンテンツ -->
    </div>
  </div>

  <div class="top_box W270">
    <h3 class="MB25 common_title">私のカクゴ一覧</h3>
    <!-- リスト -->
  </div>

  <div class="top_box W300">
    <div class="PT60">
      <iframe src="..." width="300" height="290">
    </div>
  </div>
</div>
```

**読み取り方**:

1. **構造**: `top_box_wrapper`の中に3つの`top_box`がある → 3カラムレイアウト
2. **幅**: `W370`, `W270`, `W300` → 各カラムの幅が決まっている
3. **スクロール**: `cstm_scroll ps-container` → スクロール可能なエリア
4. **スペーシング**: `MB25` → margin-bottom: 25px、`PT60` → padding-top: 60px
5. **動画サイズ**: `width="300" height="290"` → 動画の正確なサイズ

**Reactコンポーネント化**:
```tsx
<div className="top-box-wrapper">
  <div className="top-box updates-box">  {/* W370 */}
    <h2 className="section-title">更新情報</h2>  {/* MB25 */}
    <div className="scroll-area">  {/* cstm_scroll */}
      {/* コンテンツ */}
    </div>
  </div>

  <div className="top-box kakugo-box">  {/* W270 */}
    <h2 className="section-title">私のカクゴ一覧</h2>
    <div className="scroll-area">
      {/* リスト */}
    </div>
  </div>

  <div className="top-box video-box">  {/* W300 */}
    <div className="video-wrapper">  {/* PT60 */}
      <div className="video-placeholder" style={{ width: 300, height: 290 }}>
        {/* 動画 */}
      </div>
    </div>
  </div>
</div>
```

**CSS**:
```css
.top-box-wrapper {
  display: flex;
  gap: 20px;
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

.section-title {
  margin-bottom: 25px;
}

.scroll-area {
  height: 290px;
  overflow-y: auto;
}
```

### 例2: aboutページのテキストレイアウト

**エレメント（提供されたHTML）**:
```html
<div class="contents_wrapper PT50">
  <div class="contents_980_inner">
    <h2 class="MB25 common_title">私のカクゴとは</h2>
    <div class="about_doc_all">
      <p class="vdl_about_style_text">カッコイイ大人には、覚悟がある</p>
      <div id="about_doc">
        <div class="ab_sub_word">
          人生にはいくつかの岐路があり、<br>
          そのたびに人は何かを得たり、何かを捨てたりする。<br>
          そこには決断があり、「覚悟」がある
        </div>
        <br>
        「私のカクゴ」では、経済界、スポーツ界、文学界など、<br>
        様々なカッコイイ大人の生き様に焦点をあてています。<br>
      </div>
    </div>
  </div>
</div>
```

**読み取り方**:

1. **構造**: `contents_wrapper` > `contents_980_inner` → 980px幅のコンテナ
2. **スペーシング**: `PT50` → padding-top: 50px、`MB25` → margin-bottom: 25px
3. **テキストスタイル**:
   - `vdl_about_style_text` → ヘッドライン（大きめのテキスト）
   - `ab_sub_word` → サブワード（強調されたテキスト）
   - `about_doc` → 本文

**Reactコンポーネント化**:
```tsx
<main className="main">  {/* PT50 */}
  <div className="container">  {/* contents_980_inner */}
    <h2 className="section-title">私のカクゴとは</h2>  {/* MB25 */}
    <div className="about-doc-all">
      <p className="headline">カッコイイ大人には、覚悟がある</p>
      <div className="about-doc">
        <div className="sub-word">
          人生にはいくつかの岐路があり、<br />
          そのたびに人は何かを得たり、何かを捨てたりする。<br />
          そこには決断があり、「覚悟」がある
        </div>
        <br />
        「私のカクゴ」では、経済界、スポーツ界、文学界など、<br />
        様々なカッコイイ大人の生き様に焦点をあてています。<br />
      </div>
    </div>
  </div>
</main>
```

**CSS**:
```css
.main {
  padding-top: 130px;  /* ヘッダー80px + PT50 */
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  margin-bottom: 25px;
}

.headline {
  font-size: 28px;
  margin-bottom: 40px;
}

.sub-word {
  font-size: 15px;
  line-height: 2;
  margin-bottom: 20px;
}

.about-doc {
  font-size: 15px;
  line-height: 2;
}
```

---

## 💡 トラブルシューティング

### 問題1: レイアウトが崩れる

**症状**: カラムが縦に並んでしまう

**原因**: `flex`の指定が足りない、または幅の計算が間違っている

**解決方法**:
```css
/* 正しい */
.top-box-wrapper {
  display: flex;
  gap: 20px;
  /* 370 + 20 + 270 + 20 + 300 = 980px */
}

/* 間違い */
.top-box-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 幅が均等になってしまう */}
```

### 問題2: スクロールバーが表示されない

**症状**: スクロールエリアがあるはずなのにスクロールできない

**原因**: `height`と`overflow-y`の指定が足りない

**解決方法**:
```css
/* 正しい */
.scroll-area {
  height: 290px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 間違い */
.scroll-area {
  max-height: 290px;  /* max-heightではスクロールが発生しない場合がある */
}
```

### 問題3: ベンチマーク画像が見れない

**症状**: `Read`コマンドでエラーが出る

**原因**: パスが間違っている

**解決方法**:
```bash
# 正しい
Read /mnt/c/WEBサイトUI/私のカクゴ/top/1.png

# 間違い
Read /mnt/c/web-template-library/public/works/watashi-no-kakugo/images/top/1.png
```

### 問題4: フォントサイズが合わない

**症状**: テキストが大きすぎる/小さすぎる

**原因**: エレメントのクラス名からフォントサイズを読み取れていない

**解決方法**:
1. エレメントのHTMLで`FS10`のようなクラスを探す → `font-size: 10px`
2. インラインスタイルを確認する
3. ベンチマーク画像で目視確認する

---

## 🎯 成功の定義

### 最低基準（80%の再現度）
- [x] ヘッダー: 高さ80px、正しいフォントサイズ
- [x] フッター: 正しいスペーシング
- [x] TOPページ: 3カラムレイアウト（370px + 270px + 300px）
- [x] aboutページ: 980px幅、正しいフォントサイズ
- [ ] persons: 未実装
- [ ] profile: 未実装
- [ ] sns: 未実装
- [ ] terms: 未実装
- [ ] sitemap: 未実装

### 理想（90%以上の再現度）
- [ ] すべてのページが実装済み
- [ ] ベンチマーク画像との差が10%以内
- [ ] ホバーエフェクトが正確
- [ ] アニメーションが滑らか
- [ ] レスポンシブ対応が完璧

---

## 📝 次世代へのメッセージ

### やってはいけないこと
1. ❌ 想像で実装する
2. ❌ ベンチマーク画像を見ずにコードを書く
3. ❌ エレメントのHTMLを読まずにコードを書く
4. ❌ プレースホルダーを残す
5. ❌ 「だいたい合ってればいい」と考える

### やるべきこと
1. ✅ エレメントのHTMLを**1行ずつ**読む
2. ✅ ベンチマーク画像を**常に開いておく**
3. ✅ クラス名から幅・スペーシングを読み取る
4. ✅ 1ページずつ完成させる（80%以上の再現度を確認してから次へ）
5. ✅ 不明点があればユーザーに質問する

### 実装の流れ（テンプレート）

```
1. ベンチマーク画像を開く
   Read /mnt/c/WEBサイトUI/私のカクゴ/[ページ名]/1.png

2. エレメントのHTMLを読む（ユーザーから提供される）
   - 構造を確認
   - クラス名を確認
   - インラインスタイルを確認

3. Reactコンポーネントを書く
   - エレメントの構造をそのまま再現
   - クラス名を意味のある名前に変換（W370 → updates-box など）

4. CSSを書く
   - クラス名から読み取った幅・スペーシングを反映
   - フォントサイズ、行間を正確に

5. ブラウザで確認
   npm run dev
   http://localhost:3000/works/watashi-no-kakugo/[ページ名]

6. ベンチマーク画像と比較
   - 幅が合っているか
   - スペーシングが合っているか
   - フォントサイズが合っているか
   - 色が合っているか

7. 80%以上の再現度を確認したら次のページへ
```

---

## 📞 困ったときは

### エレメントが理解できない
→ ユーザーに「このエレメントの意味を教えてください」と質問

### ベンチマーク画像との差が大きい
→ もう一度エレメントを読み直す。クラス名、インラインスタイルを見落としていないか確認

### ビルドエラーが出る
→ エラーメッセージを読んで、該当箇所を修正

### 次に何をすべきかわからない
→ このドキュメントの「次にやるべきこと」セクションを読む

---

## 🔗 関連ファイル

- 前世代の引き継ぎドキュメント: `/mnt/c/web-template-library/WATASHI-NO-KAKUGO-HANDOVER.md`
- プロジェクトルート: `/mnt/c/web-template-library/`
- Next.jsバージョン: 16.0.1 (Turbopack)
- styled-jsx使用（Client Componentで`'use client'`必須）

---

**最終更新**: 2025-11-04
**作成者**: Claude Code (前世代)
**次世代へ**: このドキュメントを最初から最後まで読んでから作業を開始してください。暗黙知はありません。すべてここに書かれています。
