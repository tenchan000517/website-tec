# フジタ電業サイト - 画像配置完了＆引き継ぎドキュメント

**作成日:** 2025年11月10日
**対象:** 次世代Claude Code
**重要度:** 🔴 CRITICAL

---

## 🚨 最重要事項

### 会社名について
- **正しい会社名:** フジタ電業株式会社（FUJITA Dengyo Co., Ltd.）
- **ディレクトリ名:** `tokai-parts-industry` ← これは誤りまたは過去の名前だが、変更しない
- **コード内:** 「フジタ電業」が正しい（48箇所）、「東海部品」は古い記述（20箇所残存）

### ⚠️ 重要な注意
- ドキュメント作成時に「東海部品工業」と書いてしまったものがあるが、**全て無視してください**
- 正しくは「フジタ電業株式会社」です

---

## ✅ 完了した作業

### 1. リクルートTOPページ (`recruit/page.tsx`)

#### インタビューカード（8枚）
全てのカードに実際の社員写真を配置完了：

| Interview ID | 使用画像 | 人物 |
|-------------|---------|------|
| 09 | `RECRUIT/interview/9.jpg` | K.Mさん（2022年入社・製造課・知立工場） |
| 10 | `RECRUIT/interview/1.jpg` | S.Tさん（2019年入社・生産課・工場管理） |
| 01 | `RECRUIT/interview/2.jpg` | N.Iさん（2019年入社・製造課） |
| 02 | `RECRUIT/interview/3.jpg` | M.Iさん（2022年入社・生産管理） |
| 03 | `RECRUIT/interview/4.jpg` | K.Sさん（2019年入社・技術課） |
| 04 | `RECRUIT/interview/5.jpg` | N.Tさん（2020年入社・技術課） |
| 05 | `RECRUIT/interview/6.jpg` | K.Mさん（2011年入社・製造課） |
| 06 | `RECRUIT/interview/7.jpg` | K.Nさん（2022年入社・製造課） |

**注意:** Interview 07と08は両方とも `interview/8.jpg` を使用（画像不足のため）

#### クロストークカード（2枚）
- クロストーク01（3人の座談会）: `RECRUIT/crosstalk/1.jpg`
- クロストーク02（2人の座談会）: `RECRUIT/corsstalk2/1.jpg`

#### About us下の3つのカード
- **DATA（数字で見るフジタ電業）**: `RECRUIT/TOP/2.jpg`
- **FLOW（フジタ電業 工場見学）**: `RECRUIT/TOP/3.jpg`
- **Q&A（若手社員アンケート）**: `RECRUIT/corsstalk2/2.jpg` ← 若手向けの画像に変更済み

---

### 2. インタビュー一覧ページ (`recruit/interview/page.tsx`)

#### ヒーローセクション
**✅ 6列グリッドレイアウトに変更完了**
- 緑（#4ADE80）と青（#2563EB）のオーバーレイを交互に配置
- 使用画像：`interview/2.jpg` ~ `7.jpg`（6枚）

```
[緑]2.jpg | [青]3.jpg | [緑]4.jpg | [青]5.jpg | [緑]6.jpg | [青]7.jpg
```

#### 事務・技術職カード（3枚）
| Interview ID | 使用画像 | 色 |
|-------------|---------|-----|
| 01 | `interview/2.jpg` | 緑 |
| 02 | `interview/3.jpg` | 青 |
| 03 | `interview/4.jpg` | 緑 |

#### 技能職カード（6枚）
| Interview ID | 使用画像 | 色 |
|-------------|---------|-----|
| 05 | `interview/5.jpg` | 青 |
| 06 | `interview/6.jpg` | 緑 |
| 07 | `interview/7.jpg` | 青 |
| 08 | `interview/8.jpg` | 緑 |
| 09 | `interview/9.jpg` | 青 |
| 10 | `interview/1.jpg` | 緑 |

---

### 3. クロストーク一覧ページ (`recruit/crosstalk/page.tsx`)

#### ヒーローセクション（2分割）
- **左側（3人の座談会）**: `RECRUIT/crosstalk/1.jpg` + 青オーバーレイ
- **右側（2人の座談会）**: `RECRUIT/corsstalk2/1.jpg` + 緑オーバーレイ

#### クロストーク01（技術部門の先輩・後輩座談会）
| 人物 | 使用画像 |
|------|---------|
| N.Tさん | `corsstalk2/1.jpg` |
| I.Rさん | `crosstalk/4.jpg` |
| M.Rさん | `corsstalk2/5.jpg` |

#### クロストーク02（製造部門の上司・部下座談会）
| 人物 | 使用画像 |
|------|---------|
| H.Sさん | `corsstalk2/2.jpg` |
| S.Sさん | `corsstalk2/5.jpg` |

**重要:** クロストーク02は `corsstalk2/` ディレクトリから画像を取得（整合性重視）

---

## 📁 画像ディレクトリ構造

```
public/works/tokai-parts-industry/images/
├── TOP/
│   ├── 1.jpg (ヒーロー1枚目 - 使用中)
│   ├── 2.jpg (会社情報セクション - 使用中)
│   ├── 3.jpg (製品セクション - 使用中)
│   ├── 4.jpg (製造セクション - 使用中)
│   ├── 5.jpg (サステナビリティセクション - 使用中)
│   ├── 6.jpg (未使用)
│   ├── 6.png (未使用)
│   └── footer.jpg (CTAセクション - 使用中)
│
├── RECRUIT/
│   ├── TOP/
│   │   ├── 1.jpg (リクルートヒーロー - 使用中)
│   │   ├── 2.jpg (DATAカード - 使用中)
│   │   ├── 3.jpg (FLOWカード - 使用中)
│   │   └── 4.jpg (未使用)
│   │
│   ├── interview/
│   │   ├── 1.jpg ~ 9.jpg (全て使用中)
│   │
│   ├── crosstalk/
│   │   ├── 1.jpg (ヒーロー左側 - 使用中)
│   │   ├── 2.jpg (未使用)
│   │   ├── 3.png (未使用)
│   │   ├── 4.jpg (I.Rさん - 使用中)
│   │   ├── 5.png (未使用)
│   │   ├── 6.png (未使用)
│   │   └── 7.jpg (未使用)
│   │
│   └── corsstalk2/  ← タイポだが修正しない
│       ├── 1.jpg (ヒーロー右側、N.Tさん - 使用中)
│       ├── 2.jpg (H.Sさん、Q&Aカード - 使用中)
│       ├── 3.jpg (未使用)
│       ├── 4.jpg (未使用)
│       └── 5.jpg (M.Rさん、S.Sさん - 使用中)
│
├── about/ (1枚 - 使用中)
├── product/ (1枚 - 使用中)
├── manufacturing/ (2枚 - 使用中)
├── for_customers/ (2枚 - 使用中)
├── for_region_environment/ (2枚使用中、1枚未使用)
├── contact/ (2枚 - 未使用)
├── news/ (2枚 - 未使用)
└── for_human_resource/ (7枚 - 未使用)
```

---

## 🎯 次のタスク（優先度順）

### 🔴 優先度：最高

#### 1. Manufacturingページのテキスト修正
**ファイル:** `src/app/works/tokai-parts-industry/manufacturing/page.tsx`

**問題:** ページ内のテキストがまだ「東海部品工業」になっている可能性

**対応:**
```bash
# まず確認
grep -n "東海部品" src/app/works/tokai-parts-industry/manufacturing/page.tsx

# 全て「フジタ電業」に置換
```

**具体的な修正箇所の確認が必要**

---

### 🟠 優先度：高

#### 2. 画像の整合性チェックと修正

**目的:** 同じ人物（例：Interview 01のN.Iさん）は、全てのページで同じ画像を使用する

**現状の問題:**
- リクルートTOPのInterview 01は `interview/2.jpg`
- インタビュー一覧のInterview 01も `interview/2.jpg`
- ✅ これは既に一致している

**チェックが必要な箇所:**
1. リクルートTOPとインタビュー一覧で同じIDの人物が同じ画像を使っているか
2. インタビュー詳細ページ（`[id]/page.tsx`）でも同じ画像を使うか

**完全なマッピング表を作成すべき**

---

### 🟡 優先度：中

#### 3. インタビュー詳細ページの画像マッピング

**ファイル:** `src/app/works/tokai-parts-industry/recruit/interview/[id]/page.tsx`

**現状:** コード内で以下の画像パスが参照されているが、ファイルが存在しない
- `hero.jpg` (ヒーロー画像・共通)
- `avatar.jpg` (プロフィール写真・共通プレースホルダー)
- `q1.jpg` ~ `q5.jpg` (Q&Aセクション)
- `flow1.jpg`, `flow2.jpg` (Daily Flowセクション)

**必要な対応:**
- 保存済みの画像ファイルをリネーム/コピーして、コードの参照と一致させる
- または、コードを修正して保存済みファイル名に合わせる

---

### 🟡 優先度：中

#### 4. クロストーク詳細ページの画像マッピング

**ファイル:** `src/app/works/tokai-parts-industry/recruit/crosstalk/[id]/page.tsx`

**現状:** コード内で以下の画像パスが参照されているが、ファイルが存在しない
- `avatar1.jpg` ~ `avatar5.jpg` (メンバープロフィール)
- `hero1.jpg` ~ `hero5.jpg` (メンバー個別写真)
- `final.jpg`, `final2.jpg` (締めくくり写真)

**必要な対応:**
- 保存済みの画像ファイルをリネーム/コピーして、コードの参照と一致させる

---

### 🟢 優先度：低

#### 5. 未使用画像の活用

**活用可能な画像:**
- `contact/` ディレクトリの2枚 → contactページに追加
- `news/` ディレクトリの2枚 → newsページに追加
- `for_human_resource/` ディレクトリの7枚 → sustainabilityページの「人材への取り組み」セクションに追加

---

## 📝 コーディング規約・注意事項

### 画像パスの記述方法
```tsx
// ✅ 正しい
<Image
  src="/works/tokai-parts-industry/images/RECRUIT/interview/1.jpg"
  alt="説明文"
  fill
  className="object-cover"
/>

// ❌ 間違い（相対パス）
<Image src="../images/RECRUIT/interview/1.jpg" />
```

### オーバーレイの色
- **緑:** `bg-[#4ADE80]/40` または `bg-green-500/30`
- **青:** `bg-[#2563EB]/40` または `bg-blue-500/30`

### 会社名の表記
- **日本語:** フジタ電業株式会社
- **英語:** Fujita Dengyo Co., Ltd. または FUJITA
- **間違い:** 東海部品工業、東海部品 ← これらは使用しない

---

## 🔍 検証方法

### 1. 会社名のチェック
```bash
# 「東海部品」が残っていないか確認
grep -r "東海部品" src/app/works/tokai-parts-industry/ --include="*.tsx" --include="*.ts"

# 正しく「フジタ電業」になっているか確認
grep -r "フジタ電業" src/app/works/tokai-parts-industry/ --include="*.tsx" --include="*.ts" | wc -l
```

### 2. 画像パスのチェック
```bash
# 存在しない画像パスが参照されていないか確認
grep -r "images/RECRUIT" src/app/works/tokai-parts-industry/recruit/ --include="*.tsx" | grep -v "//"
```

### 3. 未使用画像の確認
```bash
# 保存されているが使用されていない画像を確認
cd public/works/tokai-parts-industry/images
find . -name "*.jpg" -o -name "*.png"
```

---

## 📊 画像使用状況サマリー

### 保存済み画像数
- **合計:** 64枚
- **使用中:** 約30枚
- **未使用:** 約34枚

### ディレクトリ別使用状況
| ディレクトリ | 保存数 | 使用数 | 未使用数 |
|------------|--------|--------|---------|
| TOP/ | 7枚 | 6枚 | 1枚 |
| RECRUIT/TOP/ | 4枚 | 3枚 | 1枚 |
| RECRUIT/interview/ | 9枚 | 9枚 | 0枚 |
| RECRUIT/crosstalk/ | 7枚 | 2枚 | 5枚 |
| RECRUIT/corsstalk2/ | 5枚 | 3枚 | 2枚 |
| その他メインサイト | 15枚 | 10枚 | 5枚 |
| 未使用ディレクトリ | 17枚 | 0枚 | 17枚 |

---

## 🎨 デザインパターン

### ヒーローセクション
1. **シンプルパターン（リクルートTOP）**
   - 画像1枚 + グラデーションオーバーレイ + 中央テキスト

2. **グリッドパターン（インタビュー一覧）**
   - 6枚の画像を横一列に配置
   - 緑と青のオーバーレイを交互に
   - 中央にタイトルを重ねる

3. **2分割パターン（クロストーク一覧）**
   - 左右2つの画像
   - それぞれに異なる色のオーバーレイ
   - 中央にタイトルを重ねる

### カード画像
- **アスペクト比:** 3:4（縦長）
- **オーバーレイ:** `bg-gradient-to-t from-black/80 via-black/20 to-transparent`
- **テキスト位置:** 下部

---

## ⚠️ トラブルシューティング

### 画像が表示されない
1. パスが正しいか確認（先頭に `/` が必要）
2. ファイルが実際に存在するか確認
3. ファイル名の大文字小文字が一致しているか確認（特にWindows環境）

### オーバーレイが効いていない
1. `absolute` クラスが付いているか確認
2. `inset-0` が付いているか確認
3. 親要素に `relative` が付いているか確認

### 画像が歪んで表示される
1. `fill` プロパティを使用している場合は `object-cover` を追加
2. アスペクト比を固定する場合は `aspect-[3/4]` などを使用

---

## 📚 参考ドキュメント

- `TOKAI-IMAGE-USAGE-ANALYSIS.md` - 画像使用状況の詳細分析（会社名が間違っているので注意）
- `TOKAI-PARTS-INDUSTRY-IMAGES.md` - 画像一覧ドキュメント（会社名が間違っているので注意）

**⚠️ 重要:** これらのドキュメントは「東海部品工業」として作成されていますが、**正しくは「フジタ電業株式会社」**です。

---

## 🚀 次のステップ

1. **Manufacturingページのテキスト修正** ← 最優先
2. 画像の完全な整合性チェックとマッピング表の作成
3. インタビュー詳細ページの画像マッピング
4. クロストーク詳細ページの画像マッピング
5. 未使用画像の活用

---

このドキュメントは2025年11月10日時点の情報に基づいています。
