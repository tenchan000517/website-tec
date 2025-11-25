# 東海部品工業サイト - 画像使用状況完全分析レポート

**作成日:** 2025年11月10日
**分析対象:** フジタ電業（東海部品工業）サイト

---

## 📊 概要

- **保存済み画像数:** 64枚
- **コード内で使用中:** 13枚
- **未使用（要マッピング）:** 51枚
- **使用率:** 20.3%

---

## ✅ 現在使用されている画像（13枚）

### メインサイト（10枚）

#### TOP/ ディレクトリ（5枚使用 / 7枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `TOP/1.jpg` | `HeroSection.tsx:41`<br>`page.tsx:17` | ヒーロースライド1枚目<br>作品一覧サムネイル |
| `TOP/2.jpg` | `HeroSection.tsx:47`<br>`CompanySection.tsx:37` | ヒーロースライド2枚目<br>会社情報セクション背景 |
| `TOP/3.jpg` | `HeroSection.tsx:52`<br>`ProductSection.tsx:67` | ヒーロースライド3枚目<br>製品紹介セクション背景 |
| `TOP/4.jpg` | `ManufacturingSection.tsx:30` | 製造技術セクション背景 |
| `TOP/5.jpg` | `SustainabilitySection.tsx:66` | サステナビリティセクション背景 |
| `TOP/footer.jpg` | `CTASection.tsx:34` | CTAセクション（フッター上）背景 |

**未使用:** `TOP/6.jpg`、`TOP/6.png`

#### about/ ディレクトリ（1枚使用 / 1枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `about/1.jpg` | `about/page.tsx:84` | 会社概要ページヒーロー画像 |

#### product/ ディレクトリ（1枚使用 / 1枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `product/1.jpg` | `product/page.tsx:105`<br>`product/page.tsx:152` | 製品ページヒーロー背景<br>製品セクション画像 |

#### manufacturing/ ディレクトリ（2枚使用 / 2枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `manufacturing/1.jpg` | `manufacturing/page.tsx:108`<br>`manufacturing/page.tsx:179` | 製造ページヒーロー画像<br>プレス加工説明画像 |
| `manufacturing/2.jpg` | `manufacturing/page.tsx:199`<br>`manufacturing/page.tsx:272` | 溶接・組立説明画像<br>検査・品質管理説明画像 |

#### for_customers/ ディレクトリ（2枚使用 / 2枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `for_customers/1.jpg` | `sustainability/page.tsx:192` | お客様への取り組み説明画像 |
| `for_customers/2.jpg` | `sustainability/page.tsx:208` | 顧客満足度向上説明画像 |

#### for_region_environment/ ディレクトリ（2枚使用 / 3枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `for_region_environment/1.jpg` | `sustainability/page.tsx:106`<br>`sustainability/page.tsx:425` | サステナビリティページヒーロー背景<br>地域・環境への取り組み説明画像 |
| `for_region_environment/2.png` | `sustainability/page.tsx:433` | 環境活動の具体例画像 |

**未使用:** `for_region_environment/2.jpg`

### リクルートサイト（3枚）

#### RECRUIT/TOP/ ディレクトリ（1枚使用 / 4枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `RECRUIT/TOP/1.jpg` | `recruit/page.tsx:95` | リクルートTOPページヒーロー画像 |

**未使用:** `RECRUIT/TOP/2.jpg`、`RECRUIT/TOP/3.jpg`、`RECRUIT/TOP/4.jpg`

#### RECRUIT/recruit/ ディレクトリ（1枚使用 / 3枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `RECRUIT/recruit/1.jpg` | `recruit/about/page.tsx:54` | リクルート会社紹介ページヒーロー画像 |

**未使用:** `RECRUIT/recruit/2.jpg`、`RECRUIT/recruit/3.jpg`

#### RECRUIT/faq/ ディレクトリ（1枚使用 / 1枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `RECRUIT/faq/1.jpg` | `recruit/faq/page.tsx:84` | FAQページヒーロー画像 |

#### RECRUIT/kyujin/ ディレクトリ（1枚使用 / 7枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `RECRUIT/kyujin/1.jpg` | `recruit/recruitment/page.tsx:41` | 求人情報ページヒーロー画像 |

**未使用:** `RECRUIT/kyujin/2.png`、`RECRUIT/kyujin/3.png`、`RECRUIT/kyujin/4.png`、`RECRUIT/kyujin/5.png`、`RECRUIT/kyujin/6.png`、`RECRUIT/kyujin/7.png`

#### RECRUIT/interview/ ディレクトリ（1枚使用 / 9枚保存）
| ファイル名 | 使用箇所 | 用途 |
|-----------|---------|------|
| `RECRUIT/interview/1.jpg` | `recruit/interview/page.tsx:57` | インタビュー一覧ページヒーロー画像 |

**未使用:** `RECRUIT/interview/2.jpg` ~ `9.jpg`（8枚）

**⚠️ 注意:** インタビュー詳細ページ（`[id]/page.tsx`）では、以下の画像パスが参照されていますが、実際のファイルは存在しません：
- `hero.jpg`
- `avatar.jpg`
- `q1.jpg` ~ `q5.jpg`
- `flow1.jpg`、`flow2.jpg`

#### RECRUIT/crosstalk/ ディレクトリ（0枚使用 / 7枚保存）

**全て未使用:** `RECRUIT/crosstalk/1.jpg` ~ `7.jpg`

**⚠️ 注意:** クロストーク詳細ページ（`[id]/page.tsx`）では、以下の画像パスが参照されていますが、実際のファイルは存在しません：
- `avatar1.jpg` ~ `avatar5.jpg`
- `hero1.jpg` ~ `hero5.jpg`
- `final.jpg`、`final2.jpg`

#### RECRUIT/corsstalk2/ ディレクトリ（5枚保存）
**⚠️ 注意:** ディレクトリ名にタイポ（`corsstalk2` → `crosstalk2`）があります。

**全て未使用:** `RECRUIT/corsstalk2/1.jpg`、`2.png`、`3.png`、`4.png`、`5.jpg`

---

## ❌ 未使用の画像（51枚）

### メインサイト（11枚）

| ディレクトリ | ファイル数 | ファイル名 |
|------------|----------|-----------|
| `TOP/` | 2枚 | `6.jpg`、`6.png` |
| `contact/` | 2枚 | `1.png`、`2.png` |
| `news/` | 2枚 | `1.png`、`2.png` |
| `for_human_resource/` | 7枚 | `1.jpg`、`2.png`、`3.png`、`4.jpg`、`5.png`、`6.jpg`、`7.jpg` |
| `for_region_environment/` | 1枚 | `2.jpg` |

### リクルートサイト（40枚）

| ディレクトリ | ファイル数 | ファイル名 |
|------------|----------|-----------|
| `RECRUIT/TOP/` | 3枚 | `2.jpg`、`3.jpg`、`4.jpg` |
| `RECRUIT/recruit/` | 2枚 | `2.jpg`、`3.jpg` |
| `RECRUIT/kyujin/` | 6枚 | `2.png` ~ `7.png` |
| `RECRUIT/interview/` | 8枚 | `2.jpg` ~ `9.jpg` |
| `RECRUIT/crosstalk/` | 7枚 | `1.jpg` ~ `7.jpg` |
| `RECRUIT/corsstalk2/` | 5枚 | `1.jpg`、`2.png`、`3.png`、`4.png`、`5.jpg` |

---

## 🚨 存在しないが参照されている画像

### インタビュー詳細ページ（`recruit/interview/[id]/page.tsx`）

以下の画像パスが参照されていますが、実際のファイルは存在しません：

| 画像パス | 使用箇所 | 用途 |
|---------|---------|------|
| `RECRUIT/interview/hero.jpg` | 8人全員の詳細ページ | ヒーロー画像（共通） |
| `RECRUIT/interview/avatar.jpg` | 8人全員の詳細ページ | プロフィール写真（共通プレースホルダー） |
| `RECRUIT/interview/q1.jpg` | Q&Aセクション | 質問1の画像 |
| `RECRUIT/interview/q2.jpg` | Q&Aセクション | 質問2の画像 |
| `RECRUIT/interview/q3.jpg` | Q&Aセクション | 質問3の画像 |
| `RECRUIT/interview/q4.jpg` | Q&Aセクション | 質問4の画像 |
| `RECRUIT/interview/q5.jpg` | Q&Aセクション | 質問5の画像 |
| `RECRUIT/interview/flow1.jpg` | Daily Flowセクション | 午前の業務風景 |
| `RECRUIT/interview/flow2.jpg` | Daily Flowセクション | 午後の業務風景 |

### クロストーク詳細ページ（`recruit/crosstalk/[id]/page.tsx`）

以下の画像パスが参照されていますが、実際のファイルは存在しません：

| 画像パス | 使用箇所 | 用途 |
|---------|---------|------|
| `RECRUIT/crosstalk/avatar1.jpg` | クロストーク1 | 参加者1のプロフィール写真 |
| `RECRUIT/crosstalk/avatar2.jpg` | クロストーク1 | 参加者2のプロフィール写真 |
| `RECRUIT/crosstalk/avatar3.jpg` | クロストーク1 | 参加者3のプロフィール写真 |
| `RECRUIT/crosstalk/hero1.jpg` | クロストーク1 | 参加者1の個別写真 |
| `RECRUIT/crosstalk/hero2.jpg` | クロストーク1 | 参加者2の個別写真 |
| `RECRUIT/crosstalk/hero3.jpg` | クロストーク1 | 参加者3の個別写真 |
| `RECRUIT/crosstalk/final.jpg` | クロストーク1 | 締めくくり集合写真 |
| `RECRUIT/crosstalk/avatar4.jpg` | クロストーク2 | 参加者4のプロフィール写真 |
| `RECRUIT/crosstalk/avatar5.jpg` | クロストーク2 | 参加者5のプロフィール写真 |
| `RECRUIT/crosstalk/hero4.jpg` | クロストーク2 | 参加者4の個別写真 |
| `RECRUIT/crosstalk/hero5.jpg` | クロストーク2 | 参加者5の個別写真 |
| `RECRUIT/crosstalk/final2.jpg` | クロストーク2 | 締めくくり写真 |

---

## 💡 推奨される画像マッピング提案

### 優先度：高（すぐに対応が必要）

#### 1. インタビュー詳細ページの画像マッピング

**現状:** `RECRUIT/interview/2.jpg` ~ `9.jpg` が未使用
**提案:**

| 保存済みファイル | 新しいファイル名 | 用途 |
|---------------|---------------|------|
| `RECRUIT/interview/2.jpg` | `RECRUIT/interview/hero.jpg` | ヒーロー画像（共通） |
| `RECRUIT/interview/3.jpg` | `RECRUIT/interview/avatar.jpg` | プロフィール写真（プレースホルダー） |
| `RECRUIT/interview/4.jpg` | `RECRUIT/interview/q1.jpg` | 質問1の画像 |
| `RECRUIT/interview/5.jpg` | `RECRUIT/interview/q2.jpg` | 質問2の画像 |
| `RECRUIT/interview/6.jpg` | `RECRUIT/interview/q3.jpg` | 質問3の画像 |
| `RECRUIT/interview/7.jpg` | `RECRUIT/interview/q4.jpg` | 質問4の画像 |
| `RECRUIT/interview/8.jpg` | `RECRUIT/interview/q5.jpg` | 質問5の画像 |
| `RECRUIT/interview/9.jpg` | `RECRUIT/interview/flow1.jpg` | 午前の業務風景 |

**追加で必要:** `RECRUIT/interview/flow2.jpg`（保存済み画像では足りない）

#### 2. クロストーク詳細ページの画像マッピング

**現状:** `RECRUIT/crosstalk/1.jpg` ~ `7.jpg` が未使用
**提案:**

| 保存済みファイル | 新しいファイル名 | 用途 |
|---------------|---------------|------|
| `RECRUIT/crosstalk/1.jpg` | `RECRUIT/crosstalk/avatar1.jpg` | 参加者1のプロフィール |
| `RECRUIT/crosstalk/2.jpg` | `RECRUIT/crosstalk/avatar2.jpg` | 参加者2のプロフィール |
| `RECRUIT/crosstalk/3.png` | `RECRUIT/crosstalk/avatar3.jpg` | 参加者3のプロフィール |
| `RECRUIT/crosstalk/4.jpg` | `RECRUIT/crosstalk/hero1.jpg` | 参加者1の個別写真 |
| `RECRUIT/crosstalk/5.png` | `RECRUIT/crosstalk/hero2.jpg` | 参加者2の個別写真 |
| `RECRUIT/crosstalk/6.png` | `RECRUIT/crosstalk/hero3.jpg` | 参加者3の個別写真 |
| `RECRUIT/crosstalk/7.jpg` | `RECRUIT/crosstalk/final.jpg` | 締めくくり集合写真 |

**`RECRUIT/corsstalk2/`の画像も活用:**

| 保存済みファイル | 新しいファイル名 | 用途 |
|---------------|---------------|------|
| `RECRUIT/corsstalk2/1.jpg` | `RECRUIT/crosstalk/avatar4.jpg` | 参加者4のプロフィール |
| `RECRUIT/corsstalk2/2.png` | `RECRUIT/crosstalk/avatar5.jpg` | 参加者5のプロフィール |
| `RECRUIT/corsstalk2/3.png` | `RECRUIT/crosstalk/hero4.jpg` | 参加者4の個別写真 |
| `RECRUIT/corsstalk2/4.png` | `RECRUIT/crosstalk/hero5.jpg` | 参加者5の個別写真 |
| `RECRUIT/corsstalk2/5.jpg` | `RECRUIT/crosstalk/final2.jpg` | 締めくくり写真 |

### 優先度：中（機能追加時に対応）

#### 3. contactページに画像を追加

**現状:** contactページは画像を使用していない（グラデーション背景のみ）
**保存済み画像:** `contact/1.png`、`contact/2.png`
**提案:** ヒーローセクションまたはお問い合わせフォームの装飾に使用

#### 4. newsページに画像を追加

**現状:** newsページは画像を使用していない（グラデーション背景のみ）
**保存済み画像:** `news/1.png`、`news/2.png`
**提案:** ヒーローセクションまたはニュースカードのサムネイルに使用

#### 5. for_human_resource/ ディレクトリの画像活用

**現状:** 7枚全て未使用
**提案:** sustainabilityページの「人材への取り組み」セクションに追加

### 優先度：低（将来の拡張用）

#### 6. その他の未使用画像

- `TOP/6.jpg`、`TOP/6.png`: ヒーロースライドを6枚に増やす場合に使用
- `RECRUIT/TOP/2.jpg` ~ `4.jpg`: リクルートTOPのスライドまたはセクション画像に使用
- `RECRUIT/recruit/2.jpg`、`3.jpg`: リクルート会社紹介ページの追加コンテンツに使用
- `RECRUIT/kyujin/2.png` ~ `7.png`: 求人情報ページの職種別画像に使用

---

## 📋 次のアクションアイテム

### 即座に対応すべき項目

1. **インタビュー詳細ページの画像を正しくマッピング**
   ```bash
   cd public/works/tokai-parts-industry/images/RECRUIT/interview/
   cp 2.jpg hero.jpg
   cp 3.jpg avatar.jpg
   cp 4.jpg q1.jpg
   cp 5.jpg q2.jpg
   cp 6.jpg q3.jpg
   cp 7.jpg q4.jpg
   cp 8.jpg q5.jpg
   cp 9.jpg flow1.jpg
   ```

2. **クロストーク詳細ページの画像を正しくマッピング**
   ```bash
   cd public/works/tokai-parts-industry/images/RECRUIT/crosstalk/
   cp 1.jpg avatar1.jpg
   cp 2.jpg avatar2.jpg
   cp 3.png avatar3.jpg
   cp 4.jpg hero1.jpg
   cp 5.png hero2.jpg
   cp 6.png hero3.jpg
   cp 7.jpg final.jpg

   # corsstalk2からも移動
   cd ../corsstalk2/
   cp 1.jpg ../crosstalk/avatar4.jpg
   cp 2.png ../crosstalk/avatar5.jpg
   cp 3.png ../crosstalk/hero4.jpg
   cp 4.png ../crosstalk/hero5.jpg
   cp 5.jpg ../crosstalk/final2.jpg
   ```

3. **flow2.jpgを追加で用意**（現在不足している1枚）

### 中期的に対応すべき項目

4. **contactページに画像を追加**（ヒーローセクションまたはフォーム周辺）
5. **newsページに画像を追加**（ヒーローセクションまたはニュースカード）
6. **sustainabilityページの人材セクションを拡充**（`for_human_resource/`の7枚を活用）

---

## 📝 補足情報

### ディレクトリ名のタイポ

- `RECRUIT/corsstalk2/` → 正しくは `RECRUIT/crosstalk2/`
  - この画像をcrosstalkディレクトリに統合することを推奨

### ファイル形式の混在

- 一部のディレクトリでJPGとPNGが混在
- PNG画像はアバターやアイコン、JPG画像は写真に使用される傾向

---

このレポートは2025年11月10日時点の情報に基づいています。
