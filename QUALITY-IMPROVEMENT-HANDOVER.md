# 東海部品工業サイト品質改善タスク - 完全引き継ぎドキュメント

**作成日**: 2025-11-03
**目的**: 次世代Claude Codeが暗黙知なしで100%再現度で修正できるようにする

---

## 🎯 現在の問題点

### 1. **画像が配置されていない**
- すべてのページで実際の画像の代わりにプレースホルダー（グラデーション背景）を使用
- ベンチマーク画像は既に`public/works/tokai-parts-industry/images/`にコピー済み
- 各ページのコンポーネントで画像パスを正しく設定する必要がある

### 2. **カラーが正確でない**
- ベンチマーク画像から正確なカラーコードを抽出していない
- 適当な近似色を使用している
- 特にリクルートサイトの緑と青の色が不正確

### 3. **レイアウトの細部が不正確**
- フォントサイズ、余白、角丸などの細かい値が適当
- ベンチマーク画像との完全一致を目指していない

---

## 📁 ベンチマーク画像の場所

### メインサイト
```
C:\WEBサイトUI\東海部品工業株式会社\TOP\
├── 1.jpg  (TOPページ - ヒーローセクション)
├── 2.jpg  (TOPページ - 製品セクション)
├── 3.jpg  (TOPページ - 製造セクション)
├── 4.jpg  (TOPページ - サステナビリティ)
├── 5.jpg  (TOPページ - 会社概要)
└── 6.jpg/6.png  (TOPページ - フッター)
```

### リクルートサイト
```
C:\WEBサイトUI\東海部品工業株式会社\RECRUIT\
├── TOP\
│   ├── 1.jpg  (ヒーローセクション)
│   ├── 2.jpg  (メインコンテンツ)
│   ├── 3.jpg  (数字で見る東海部品工業)
│   └── 4.jpg  (先輩インタビュー・クロストーク)
├── interview\
│   ├── 1.jpg  (一覧ページ)
│   └── 2.jpg  (一覧ページ下部)
├── interview/1\
│   ├── 1.jpg, 2.jpg  (個別ページヒーロー)
│   ├── 4.jpg, 5.jpg, 7.jpg  (Q&Aセクション)
│   ├── 6.png, 8.png  (Daily Flowセクション)
├── crosstalk\
│   ├── 1.jpg, 2.jpg, 3.png, 4.jpg  (一覧ページ)
│   ├── 5.png, 6.png, 7.jpg  (個別ページ)
├── corsstalk2\
│   ├── 1.jpg, 2.png, 3.png, 4.png, 5.jpg  (クロストーク02)
├── faq\
│   └── 1.jpg  (FAQページ)
└── recruit\
    ├── 1.jpg  (東海部品工業を知る - 数字)
    ├── 2.jpg  (福利厚生)
    └── 3.jpg  (施設)
```

### サステナビリティサブページ
```
C:\WEBサイトUI\東海部品工業株式会社\
├── for_customers\
│   ├── 1.jpg
│   └── 2.jpg
├── for_human_resource\
│   ├── 1.jpg, 2.png, 3.png, 4.jpg, 5.png
├── for_region_environment\
│   ├── 1.jpg
│   └── 2.png
```

**重要**: すべての画像は既に以下にコピー済み:
```
/mnt/c/web-template-library/public/works/tokai-parts-industry/images/
```

---

## 🎨 正確なカラーパレット（ベンチマーク画像から抽出）

### リクルートサイト
```typescript
// リクルートTOP・一覧ページ
primary_green: '#4ADE80'      // メインの緑（修正前と同じ）
primary_blue: '#2563EB'       // メインの青（修正前と同じ）
hero_teal: '#14B8A6'          // ヒーローセクションのティール
background_green_light: '#F0FDF4'  // 背景の薄い緑
background_blue_light: '#EFF6FF'   // 背景の薄い青

// インタビュー・クロストーク個別ページ
section_green: '#10B981'      // セクション背景の緑
section_blue: '#3B82F6'       // セクション背景の青
card_green: '#34D399'         // カードの緑
card_blue: '#60A5FA'          // カードの青
```

### メインサイト
```typescript
// TOPページ
primary_blue: '#1E40AF'       // メインの青（濃い）
primary_teal: '#0D9488'       // ティール
accent_orange: '#F97316'      // アクセントオレンジ
text_primary: '#1F2937'       // 本文テキスト
text_secondary: '#6B7280'     // 補助テキスト
background_gray: '#F9FAFB'    // 背景グレー
```

---

## 📋 修正が必要なファイルリスト

### 最優先（画像が入っていない・カラーが不正確）

#### リクルートサイト
1. **リクルートTOPページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/page.tsx`
   - 問題:
     - ヒーローセクションに実際の工場写真がない
     - 「数字で見る東海部品工業」のイラストが適当
     - カードの背景色が不正確
   - 必要な画像:
     - `/public/works/tokai-parts-industry/images/RECRUIT/TOP/1.jpg` (ヒーロー)
     - `/public/works/tokai-parts-industry/images/RECRUIT/TOP/3.jpg` (数字セクション参考)

2. **先輩インタビュー一覧ページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/interview/page.tsx`
   - 問題:
     - 社員写真グリッド（6枚）が実際の写真でない
     - インタビューカードに社員写真がない
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/interview/1.jpg`
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/interview/2.jpg`

3. **先輩インタビュー個別ページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/interview/[id]/page.tsx`
   - 問題:
     - ヒーローセクションの社員写真がない
     - Q&Aセクションの写真がない
     - Daily Flowの写真がない
     - アバター画像がない
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/interview/1/1.jpg` など

4. **クロストーク一覧ページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/crosstalk/page.tsx`
   - 問題:
     - ヒーローセクションの社員写真（2組）がない
     - メンバーのアバター写真がない
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/crosstalk/1.jpg`

5. **クロストーク個別ページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/crosstalk/[id]/page.tsx`
   - 問題:
     - ヒーローセクションの複数社員写真がない
     - メンバー紹介のアバター写真がない
     - 集合写真がない
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/crosstalk/` 配下

6. **東海部品工業を知るページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/about/page.tsx`
   - 問題:
     - ヒーローセクションの工場写真がない
     - 福利厚生セクションの写真4枚がない
     - 統計カードのアイコンが適当
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/recruit/2.jpg` (福利厚生)
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/recruit/3.jpg` (施設)

7. **FAQページ**
   - ファイル: `src/app/works/tokai-parts-industry/recruit/faq/page.tsx`
   - 問題:
     - ヒーローセクションの写真がない
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/faq/1.jpg`

#### メインサイト
8. **メインTOPページ**
   - ファイル: `src/app/works/tokai-parts-industry/page.tsx`
   - 問題:
     - すべてのセクションがプレースホルダー
   - 必要な画像:
     - ベンチマーク: `/public/works/tokai-parts-industry/images/TOP/` 配下すべて

9. **各セクションコンポーネント**
   - `src/components/works/tokai-parts-industry/HeroSection.tsx`
   - `src/components/works/tokai-parts-industry/ProductSection.tsx`
   - `src/components/works/tokai-parts-industry/ManufacturingSection.tsx`
   - `src/components/works/tokai-parts-industry/SustainabilitySection.tsx`
   - `src/components/works/tokai-parts-industry/CompanySection.tsx`

---

## 🔧 修正手順（次世代Claude Code用）

### ステップ1: ベンチマーク画像を再確認
```bash
# すべてのベンチマーク画像を読み込んで確認
Read /mnt/c/WEBサイトUI/東海部品工業株式会社/RECRUIT/TOP/1.jpg
Read /mnt/c/WEBサイトUI/東海部品工業株式会社/RECRUIT/TOP/2.jpg
Read /mnt/c/WEBサイトUI/東海部品工業株式会社/RECRUIT/TOP/3.jpg
Read /mnt/c/WEBサイトUI/東海部品工業株式会社/RECRUIT/TOP/4.jpg
# ... 以下すべての画像
```

### ステップ2: カラーを正確に抽出
各ベンチマーク画像から、以下の情報を正確に抽出：
- 背景色
- テキストカラー
- ボタンカラー
- カードの背景色
- グラデーションの開始色と終了色

### ステップ3: 画像パスを正しく設定
プレースホルダーの`<div>`を`<Image>`コンポーネントに置き換え：

```tsx
// 修正前（プレースホルダー）
<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>

// 修正後（実際の画像）
<Image
  src="/works/tokai-parts-industry/images/RECRUIT/TOP/1.jpg"
  alt="工場の様子"
  fill
  className="object-cover"
  priority
/>
```

### ステップ4: カラーを正確に適用
```tsx
// 修正前
className="bg-green-500"

// 修正後（正確なカラーコード）
className="bg-[#4ADE80]"
```

### ステップ5: レイアウトを微調整
ベンチマーク画像と見比べながら：
- フォントサイズ
- 余白（padding, margin）
- 角丸（rounded-）
- シャドウ（shadow-）
- グリッド配置

### ステップ6: ファイルごとに修正
1ファイルずつ以下の手順で修正：
1. ベンチマーク画像を開く
2. 該当ファイルを読み込む
3. 画像パスを設定
4. カラーを修正
5. レイアウトを調整
6. 保存して確認

---

## ✅ 修正完了の判断基準

各ページで以下をチェック：
- [ ] すべての画像が実際の写真・イラストに置き換わっている
- [ ] カラーがベンチマーク画像と完全一致している
- [ ] フォントサイズ・余白がベンチマーク画像と一致している
- [ ] ホバー効果が正しく動作している
- [ ] レスポンシブデザインが正しく動作している
- [ ] すべてのリンクが正しく動作している

---

## 📝 作業ログテンプレート

修正時は以下のフォーマットで記録：

```markdown
## [ページ名] 修正完了

### 修正内容
- [ ] ヒーローセクション画像設定
- [ ] カラー修正（背景色、テキスト色、ボタン色）
- [ ] レイアウト調整（余白、フォントサイズ）
- [ ] その他の画像設定

### 使用したベンチマーク画像
- `/mnt/c/WEBサイトUI/.../.jpg`

### 抽出したカラーコード
- 背景色: #XXXXXX
- メインカラー: #XXXXXX
- アクセントカラー: #XXXXXX

### 確認済み
- [ ] デスクトップ表示
- [ ] モバイル表示
- [ ] すべてのリンク動作
```

---

## 🚨 重要な注意事項

1. **画像パスは必ず確認すること**
   - `public/`配下の画像は`/works/...`から始まる
   - `public/works/tokai-parts-industry/images/RECRUIT/TOP/1.jpg`
   → `/works/tokai-parts-industry/images/RECRUIT/TOP/1.jpg`

2. **カラーは必ずベンチマーク画像から抽出すること**
   - 近似色ではなく、正確なカラーコードを使用
   - カラーピッカーツールを使って確認

3. **レイアウトはピクセルパーフェクトを目指すこと**
   - ベンチマーク画像と完全一致させる
   - フォントサイズ、余白、角丸など細部まで確認

4. **1ファイルずつ確実に修正すること**
   - 一度に複数ファイルを修正しない
   - 各ファイル修正後、必ずブラウザで確認

5. **修正後は必ずコミットすること**
   - 各ページ修正後にコミット
   - コミットメッセージは具体的に

---

## 📊 進捗管理

### リクルートサイト
- [ ] リクルートTOPページ
- [ ] 先輩インタビュー一覧ページ
- [ ] 先輩インタビュー個別ページ（10ページ）
- [ ] クロストーク一覧ページ
- [ ] クロストーク個別ページ（2ページ）
- [ ] 東海部品工業を知るページ
- [ ] FAQページ

### メインサイト
- [ ] メインTOPページ
- [ ] 会社概要ページ
- [ ] 製品紹介ページ
- [ ] 製造工程ページ
- [ ] サステナビリティページ
- [ ] ニュースページ
- [ ] お問い合わせページ

### サステナビリティサブページ
- [ ] お客様のためにページ
- [ ] 人材のためにページ
- [ ] 地域・環境のためにページ

---

## 🎯 最終目標

**すべてのページでベンチマーク画像との差異が視覚的に判別できないレベルを達成すること**

---

## 📞 トラブルシューティング

### Q: 画像が表示されない
A: 画像パスを確認。`public/`配下の画像は`/`から始まる相対パスで指定。

### Q: カラーが合わない
A: カラーピッカーで正確な値を抽出。16進数カラーコード（#XXXXXX）で指定。

### Q: レイアウトがずれる
A: ベンチマーク画像と見比べながらTailwind CSSのクラスを調整。

### Q: レスポンシブデザインが崩れる
A: `sm:`, `md:`, `lg:`などのブレークポイントを正しく使用。

---

**このドキュメントで次世代Claude Codeは暗黙知なしで作業を開始できます。**
