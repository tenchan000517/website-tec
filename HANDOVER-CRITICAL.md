# 🚨 重要な引き継ぎ事項 - 東海部品工業サイト品質改善

**作成日**: 2025-11-03
**最終更新**: 2025-11-03 23:20
**状態**: リクルートサイト構造実装完了（100%）、品質改善が必要（画像・カラー未調整）

## 🎯 現在の状況（2025-11-03 23:20時点）

### ✅ 完了したこと
- リクルートサイト全ページの構造実装（100%）
  - リクルートTOPページ
  - 先輩インタビュー一覧・個別ページ（10名分）
  - クロストーク一覧・個別ページ（2件）
  - 東海部品工業を知るページ
  - FAQページ
- RecruitHeader実装（ナビゲーション完備）
- すべてのページ間導線設定完了
- Next.js 15対応（params Promise）

### ⚠️ 品質改善が必要
**すべてのページで画像とカラーが未調整**
- 画像: プレースホルダー（グラデーション）のまま → 実際の写真に置き換え必要
- カラー: 近似色を使用 → ベンチマーク画像から正確に抽出が必要
- レイアウト: おおよそ再現 → ピクセルパーフェクトを目指す

### 📄 次世代Claude Codeが読むべきドキュメント
**最重要**: `QUALITY-IMPROVEMENT-HANDOVER.md`
- すべてのベンチマーク画像の場所
- 正確なカラーパレット
- 修正が必要なファイルリスト（優先順位付き）
- ステップバイステップの修正手順
- 作業ログテンプレート

---

## 🔴 以下は古い情報（参考用）

---

## ❌ 現在の実装の重大な問題

### 1. ルール違反
- **recruitページで絵文字を使用**（💰🏥🏖️📚🏠🚗）
  - ファイル: `src/app/works/tokai-parts-industry/recruit/page.tsx`
  - 絵文字は厳禁。すべて削除してSVGアイコンまたはテキストに置き換える

### 2. サイト構造の根本的な誤り
- **リクルートサイトが独立していない**
  - 現状: メインサイトの一部として実装
  - 正解: `/works/tokai-parts-industry/recruit/` を独立したリクルートサイトとして実装
  - RECRUITディレクトリ構造:
    ```
    RECRUIT/
    ├── TOP/           # リクルートTOPページ
    ├── interview/     # 先輩インタビュー（複数ページ）
    ├── crosstalk/     # クロストーク（複数ページ）
    ├── corsstalk2/    # クロストーク2
    └── faq/           # FAQ
    ```

### 3. 不足ページ（実装されていない）
- [ ] リクルートサイトTOPページ
- [ ] 先輩インタビューページ（複数）
- [ ] クロストークページ（複数）
- [ ] FAQページ
- [ ] サステナビリティの3つのサブページ:
  - for_customers（お客様への取り組み）
  - for_human_resource（人材への取り組み）
  - for_region_environment（地域・環境への取り組み）

### 4. デザイン再現度の問題
- **現在の再現度: 20%以下**
- ベンチマーク画像を見ながら実装していない
- レイアウト、スペーシング、色、フォントサイズが適当
- 画像の配置位置が不正確

---

## 📋 正確な実装手順（80%の残作業）

### ステップ1: ベンチマーク画像の確認

**すべての画像を確認する**:
```bash
# メインサイト画像
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/TOP/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/about/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/product/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/manufacturing/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/news/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/contact/

# サステナビリティ
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/for_customers/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/for_human_resource/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/for_region_environment/

# リクルートサイト
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/RECRUIT/TOP/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/RECRUIT/interview/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/RECRUIT/crosstalk/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/RECRUIT/corsstalk2/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/RECRUIT/faq/
ls -la /mnt/c/web-template-library/public/works/tokai-parts-industry/images/RECRUIT/recruit/
```

**各画像を Read ツールで表示して確認**:
```bash
# 例: TOPページの画像を確認
Read /mnt/c/web-template-library/public/works/tokai-parts-industry/images/TOP/1.jpg
Read /mnt/c/web-template-library/public/works/tokai-parts-industry/images/TOP/2.jpg
# すべての画像で同様に実施
```

### ステップ2: 各ページを画像と照合しながら再実装

#### 実装時の必須チェックリスト

**必ず画像を見ながら以下を確認**:

1. **レイアウト**
   - [ ] セクションの数と順序が一致
   - [ ] 画像の配置位置が正確
   - [ ] テキストの配置位置が正確
   - [ ] 余白（padding/margin）が画像通り

2. **色**
   - [ ] 背景色が画像通り
   - [ ] テキスト色が画像通り
   - [ ] ボタンの色が画像通り
   - [ ] 各セクションの背景色が正確

3. **タイポグラフィ**
   - [ ] フォントサイズが画像通り
   - [ ] 太字・細字の使い分けが正確
   - [ ] 行間が適切

4. **画像**
   - [ ] 使用する画像が正しい（1.jpg, 2.jpg等）
   - [ ] 画像の配置が正確
   - [ ] 画像のサイズが適切

5. **絵文字厳禁**
   - [ ] 絵文字が一切使用されていないことを確認
   - [ ] アイコンはSVGまたはアイコンライブラリを使用

### ステップ3: 各ページの実装優先順位と詳細

#### 優先度1: 絵文字削除と修正

**recruitページの修正**:
```typescript
// ❌ 悪い例（現在）
const benefits = [
  { icon: '💰', title: '充実の給与体系', ... }
]

// ✅ 良い例
const benefits = [
  {
    icon: <svg>...</svg>, // SVGアイコンを使用
    title: '充実の給与体系',
    ...
  }
]
```

#### 優先度2: リクルートサイトの独立実装

**必要なファイル構造**:
```
src/app/works/tokai-parts-industry/recruit/
├── page.tsx                    # リクルートTOPページ
├── interview/
│   ├── page.tsx               # インタビュー一覧
│   ├── [id]/page.tsx          # 個別インタビュー
├── crosstalk/
│   ├── page.tsx               # クロストーク一覧
│   ├── [id]/page.tsx          # 個別クロストーク
└── faq/
    └── page.tsx               # FAQ
```

**リクルートTOPページの実装**:
- ベンチマーク: `/public/works/tokai-parts-industry/images/RECRUIT/TOP/`
- 画像を1枚1枚確認して、正確に再現
- 先輩インタビューへのリンク
- クロストークへのリンク
- FAQへのリンク

#### 優先度3: サステナビリティの3つのサブページ

**実装が必要なページ**:
1. `sustainability/for-customers/page.tsx`
   - ベンチマーク: `images/for_customers/`
   - お客様への取り組み詳細

2. `sustainability/for-human-resource/page.tsx`
   - ベンチマーク: `images/for_human_resource/`
   - 人材への取り組み詳細
   - 画像: 1.jpg, 2.png, 3.png, 4.jpg, 5.png, 6.jpg, 7.jpg

3. `sustainability/for-region-environment/page.tsx`
   - ベンチマーク: `images/for_region_environment/`
   - 地域・環境への取り組み詳細

#### 優先度4: 既存ページの完全再実装

**各ページで実施すること**:

1. **aboutページ**
   - 画像: `images/about/1.jpg`
   - セクション構成を画像通りに修正
   - テキスト量、配置を正確に

2. **productページ**
   - 画像: `images/product/1.jpg`
   - 製品イラストの配置を正確に
   - 車種リストのデザインを画像通りに

3. **manufacturingページ**
   - 画像: `images/manufacturing/1.jpg`, `2.jpg`
   - POINT 01, 02, 03のレイアウトを正確に
   - イラストと写真の使い分けを確認

4. **sustainabilityページ**
   - 画像: `images/for_customers/`, `for_human_resource/`, `for_region_environment/`
   - 3つのカテゴリーの表示方法を画像通りに
   - ミッション・ロール図を正確に再現

5. **newsページ**
   - 画像: `images/news/1.png`, `2.png`
   - ニュース一覧のデザインを正確に
   - カテゴリーラベルのデザインを確認

6. **contactページ**
   - 画像: `images/contact/1.png`, `2.png`
   - フォームのデザインを正確に
   - 地図エリアの表示を確認

---

## 🔍 実装時の作業フロー（厳守）

### 各ページ実装の手順

```bash
# 1. ベンチマーク画像をすべて表示
Read [画像パス]/1.jpg
Read [画像パス]/2.jpg
# ...すべての画像を確認

# 2. 画像をスクリーンショットまたは詳細にメモ
#    - セクション数
#    - 各セクションの構造
#    - 色（背景、テキスト、ボタン）
#    - フォントサイズ
#    - 余白
#    - 画像の配置

# 3. page.tsxを作成
#    - タグ付けを忘れずに（50-100タグ）
#    - 画像通りの構造で実装

# 4. 実装後、画像と見比べて確認
#    - 目視で80%以上の再現度を確認
#    - 違う部分があれば修正

# 5. 次のページに進む
```

---

## ✅ 完成の定義

各ページが以下の基準を満たすこと：

1. **視覚的再現度: 80%以上**
   - ベンチマーク画像と並べて見た時、ほぼ同じに見える
   - レイアウト、色、フォントサイズが正確

2. **絵文字ゼロ**
   - 全ページで絵文字が一切使用されていない
   - すべてSVGアイコンまたはテキスト

3. **タグ付け完了**
   - 各ページに50-100のタグが付与されている
   - すべての技術・デザイン要素が検索可能

4. **リンク正常動作**
   - すべてのページ間でナビゲーションが機能
   - リクルートサイトが独立して動作

5. **画像正確使用**
   - ベンチマークの画像を正しく使用
   - 配置位置が正確

---

## 📊 進捗管理

### 実装状況チェックリスト

#### メインサイト（8ページ）
- [ ] TOPページ - 再実装必要（現在20%）
- [ ] about - 再実装必要（現在20%）
- [ ] product - 再実装必要（現在20%）
- [ ] manufacturing - 再実装必要（現在20%）
- [ ] sustainability - 再実装必要（現在20%）
- [ ] news - 再実装必要（現在20%）
- [ ] contact - 再実装必要（現在20%）

#### リクルートサイト（5+ページ）
- [ ] リクルートTOP - 未実装
- [ ] 先輩インタビュー一覧 - 未実装
- [ ] 先輩インタビュー個別ページ（複数） - 未実装
- [ ] クロストーク一覧 - 未実装
- [ ] クロストーク個別ページ（複数） - 未実装
- [ ] FAQ - 未実装

#### サステナビリティサブページ（3ページ）
- [ ] for-customers - 未実装
- [ ] for-human-resource - 未実装
- [ ] for-region-environment - 未実装

**合計**: 16+ページの実装・再実装が必要

---

## 🚨 絶対に守るべきルール

1. **絵文字は絶対に使用しない**
2. **ベンチマーク画像を必ず確認してから実装**
3. **適当な実装は許されない - 80%以上の再現度が必須**
4. **各ページに50-100のタグを付与**
5. **画像の配置、色、レイアウトを正確に**
6. **リクルートサイトは独立した構造で実装**

---

## 📞 次世代Claude Codeへ

この引き継ぎドキュメントを熟読し、以下の順序で作業を進めてください：

1. **絵文字削除**（最優先）
2. **リクルートサイトの独立実装**
3. **サステナビリティサブページ実装**
4. **既存ページの完全再実装**（画像を見ながら）

各ページ実装時は：
- 必ずベンチマーク画像を Read ツールで表示
- 画像を見ながら1セクションずつ正確に実装
- 完成後、画像と見比べて80%以上の再現度を確認

**現在の実装は参考にしてはいけません。ベンチマーク画像だけを信じて実装してください。**
