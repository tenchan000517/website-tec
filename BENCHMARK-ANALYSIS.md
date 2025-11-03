# ベンチマーク詳細分析 - Benchmark Analysis

**参照元**: 東海部品工業株式会社 コーポレートサイト
**分析日**: 2025-11-03
**ベンチマーク場所**: `/mnt/c/WEBサイトUI/東海部品工業株式会社/`

---

## 📊 全体のデザイン分析

### デザインコンセプト
- **業種**: 製造業（自動車部品）
- **ターゲット**: B2B（企業向け）、採用候補者
- **トーン**: プロフェッショナル、信頼感、革新性
- **親会社**: トヨタ車体グループ

### グローバルスタイル

#### カラーパレット
```typescript
// プライマリカラー
primary: {
  blue: '#2563EB',      // メインブランドカラー、信頼感
  darkBlue: '#1E40AF',  // ホバー、強調
  lightBlue: '#DBEAFE', // 背景、セクション
}

// アクセントカラー
accent: {
  orange: '#FF6B35',    // CTA、行動喚起
  darkOrange: '#E64A19', // ホバー
}

// セマンティックカラー
semantic: {
  green: '#22C55E',     // 採用、成長
  yellow: '#F59E0B',    // 警告、注意
}

// ニュートラルカラー
neutral: {
  white: '#FFFFFF',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray700: '#374151',
  gray900: '#111827',
  black: '#000000',
}
```

#### タイポグラフィ
```typescript
// フォントファミリー
fontFamily: {
  sans: 'system-ui, "Yu Gothic UI", "Noto Sans JP", sans-serif',
  heading: '"Inter", system-ui, sans-serif',
}

// フォントサイズ（典型的な使用例）
h1: '3rem (48px)',      // ページタイトル
h2: '2.25rem (36px)',   // セクションタイトル
h3: '1.875rem (30px)',  // サブセクション
body: '1rem (16px)',    // 本文
caption: '0.875rem (14px)', // キャプション
```

#### スペーシング
- グリッドシステム: 8pxベース
- セクション間: 80-96px
- カード padding: 24-32px
- ボタン padding: 24px × 12px

---

## 📄 ページ別分析

### TOP Page

**画像**:
- `TOP/1.jpg` - ヒーローセクション（カルーセル）
- `TOP/2.jpg` - COMPANYセクション（左画像+右カード）
- `TOP/3.jpg` - PRODUCTセクション（左カード+右画像）
- `TOP/4.jpg` - MANUFACTURINGセクション（左画像+右カード）
- `TOP/5.jpg` - SUSTAINABILITYセクション（背景画像+オーバーレイ）
- `TOP/footer.jpg` - CTAセクション（RECRUIT/CONTACT 2カラム）

#### 1. ヒーローセクション (`TOP/1.jpg`)

```markdown
## レイアウト構造
- 高さ: ~700px (デスクトップ)
- 幅: 100vw (フルスクリーン)
- position: relative

## 背景
- 画像: 工場作業員（黄色いヘルメット）+ 部品
- オーバーレイ: rgba(0, 0, 0, 0.3) 程度
- background-size: cover
- background-position: center

## ヘッダーナビゲーション
- 親会社バッジ: "トヨタ車体グループ"（左上、青背景）
- ロゴ: "TBK 東海部品工業株式会社"（左、高さ40px）
- メニュー項目: 会社情報、製品紹介、TBKのクルマづくり、サステナビリティ、お知らせ、お問い合わせ
- ドロップダウン: 下向き矢印アイコン付き
- CTAボタン: "採用情報"（右端、オレンジ背景）

## ヒーローコンテンツ
- 配置: 中央
- タイトル: "夢ある未来へ\n変革と挑戦"
  - サイズ: ~48-56px
  - ウェイト: 800 (extrabold)
  - 色: 白
  - 行間: tight (1.2)
- サブタイトル:
  "未来に向かって、\n社会全体の高い目標を掲げて\n進化する企業を目指し続けます。"
  - サイズ: ~18-20px
  - 色: 白
  - 行間: relaxed (1.75)

## カルーセルナビゲーション
- 左右ボタン:
  - 形状: 円形
  - 背景: #2563EB（プライマリブルー）
  - アイコン: 白い矢印（< >）
  - サイズ: 48px × 48px
  - 配置: 左右端（絶対配置）
  - ホバー: 少し暗く

## 背景グラデーション
- 下部に淡いグラデーション（オプション）
```

#### 2. COMPANYセクション (`TOP/2.jpg`)

```markdown
## 全体レイアウト
- 背景: ライトブルーグラデーション (linear-gradient(135deg, #DBEAFE, #EFF6FF, #FFFFFF))
- padding: 80px 0

## 2カラムレイアウト
- 左: 画像（工場内作業風景）
- 右: 白カード

## 背景要素（3Dイラスト）
- 右上: 車の3Dワイヤーフレーム（淡いブルー）
- 装飾的要素

## 画像
- 幅: 50%
- 丸角: rounded-lg
- 影: なし
- コンテンツ: 作業員がケーブルを持っている

## カード
- 背景: 白
- padding: 48px
- 丸角: rounded-lg
- 影: shadow-md
- カテゴリ: "COMPANY"（大きな英字、ダークブルー）
- 日本語タイトル: "会社情報"
- 説明文: "モビリティー社会の未来に\nものづくりで貢献"
  - サイズ: 18px
  - 色: gray-700
  - 行間: 1.75
- CTAボタン: "詳しくはこちら" →
  - variant: primary (ブルー)
  - 矢印アイコン付き
```

#### 3. PRODUCTセクション (`TOP/3.jpg`)

```markdown
## レイアウト（逆パターン）
- 左: 白カード
- 右: 画像（工場の大型機械）
- 背景: ライトブルーグラデーション（COMPANYと同様）

## 背景要素
- 左下: 車の3Dワイヤーフレーム（淡いブルー）

## カード
- "PRODUCT"
- "製品紹介"
- "SUV・ミニバンを中心に\nクルマを支える骨格を生産"

## 画像
- 工場内の大型プレス機械
- 緑色の機械（KOMATSU）
```

#### 4. MANUFACTURINGセクション (`TOP/4.jpg`)

```markdown
## レイアウト
- 左: 画像（製造ライン）
- 右: 白カード
- 背景: 淡いブルー（単色、グラデーションなし）

## カード
- "MANUFACTURING"
- "TBKのクルマづくり"
- "高い技術力と設備が作り出す\n安心・安全と高品質の製品"

## 画像
- 製造ライン（緑と黒の機械）
- ロボットアーム
- 複雑な設備
```

#### 5. SUSTAINABILITYセクション (`TOP/5.jpg`)

```markdown
## レイアウト
- フルスクリーン背景画像 + オーバーレイ
- コンテンツ: 中央配置

## 背景
- 画像: 海中（ダイバー、サンゴ、魚）+ 森林（木の伐採）のコラージュ
- オーバーレイ:
  - 上半分: 濃いターコイズブルー/グリーン
  - 下半分: ブルー
  - グラデーション

## コンテンツ
- タイトル: "SUSTAINABILITY"（白、大きめ）
- 日本語: "サステナビリティ"
- 説明: "社会・地球の持続的発展のため、\n地域社会への貢献や環境保全に積極的に取り組んでいます"
- CTAボタン: "詳しくはこちら"（白アウトライン）

## 下部: 3つのアイコンカード
- レイアウト: 横3列
- 各カード:
  - 白背景の円形エリア
  - 上: アイコン（青）
    1. 握手アイコン - "お客様への取り組み"
    2. 3人のアイコン - "人材への取り組み"
    3. 地球アイコン - "地域・環境への取り組み"
  - 下: 写真（丸角）
  - shadow-xl

## 右下: トップに戻るボタン
- 円形
- ライトブルー背景
- 上向き矢印
```

#### 6. CTAセクション (`TOP/footer.jpg`)

```markdown
## 全体背景
- 画像: 工場の航空写真（夕暮れ時）
- オーバーレイ: rgba(0, 0, 0, 0.6)
- 暗めの背景でテキストを強調

## 2カラムレイアウト
- 50% / 50%
- モバイル: 縦積み

### 左カード: RECRUIT
- 背景: #FF6B35（アクセントオレンジ）
- padding: 64px
- テキスト: 白
- アイコン: 書類アイコン（白、線画）
- タイトル: "RECRUIT"（大きめ、英字）
- 日本語: "東海部品工業に興味を\n持ってくださった方はこちらへ"
- ボタン: "詳しくはこちら" →
  - variant: outline（白ボーダー + 白文字）
  - ホバー: 白背景 + オレンジ文字

### 右カード: CONTACT
- 背景: #2563EB（プライマリブルー）
- padding: 64px
- テキスト: 白
- アイコン: 封筒アイコン（白、線画）
- タイトル: "CONTACT"
- 日本語: "東海部品工業、製品に関する\nお問い合わせ・ご相談窓口はこちらをご覧ください。"
- ボタン: "お問い合わせ"
  - variant: outline（白ボーダー + 白文字）

## フッター
- 背景: ダークブルー (#1E3A8A)
- ロゴ: "TBK 東海部品工業株式会社"（白）
- リンク: "お問い合わせ >", "プライバシーポリシー >"
- コピーライト: "© 東海部品工業 ALL RIGHTS RESERVED."
```

---

### RECRUIT Page

**画像**:
- `RECRUIT/TOP/1.jpg` - ヒーローセクション（イラスト）

#### ヒーローセクション (`RECRUIT/TOP/1.jpg`)

```markdown
## 背景
- イラスト: 都市風景（ビル群 + 緑地 + 風車）
- カラー: グリーン系（#22C55E, #86EFAC）
- スタイル: フラットデザイン、親しみやすい

## ヘッダー（TOPと同じ）
- 親会社バッジ
- ロゴ
- ナビゲーション
- CTAボタン: "採用情報"（オレンジ）

## メインコンテンツ
- 上部: 社員の顔写真（6人、円形）
- タイトル: "世界から信頼される"（青文字、太字）
- 大きなタイトル: "モノづくりの力"（青文字、超大、Bold）
- 背景装飾: ドット模様 + ロボットアーム + オレンジの円

## Message セクション
- 背景: グリーングラデーション
- タイトル: "Message"（黄色、筆記体）
- 本文:
  "当社は「夢ある未来へ。変革と挑戦」をスローガンに掲げています。
   100名を超える若手が主体となり、一丸全体で改革していくチャンスが待っています。
   そのために、独自で支える技術者。来年創業過半数はで活躍され続けます。
   誰すこととなく、チャレンジして

   いれば希望となってます。新規に、お待ちしています。"

## イラスト装飾
- ロボットアーム（産業用、黄色いアーム + 青い人）
- 黄色の円形背景

## Interview セクション
- 背景: クリーム色/薄黄色
- タイトル: "Interview"（緑色、筆記体）
- サブタイトル: "先輩インタビュー"（赤/オレンジ色）
```

**デザインの違い**:
- TOPページ: 写真ベース、プロフェッショナル
- RECRUITページ: イラストベース、親しみやすい、若々しい
- カラー: グリーン中心（成長、希望）

---

### CONTACT Page

**画像**:
- `contact/1.png` - ヒーローセクション + フォーム開始
- `contact/2.png` - フォーム続き

#### ヒーローセクション (`contact/1.png`)

```markdown
## 背景
- 画像: 歯車のクローズアップ（メタリック、ブルー系）
- オーバーレイ: ブルーグラデーション（濃いめ）

## コンテンツ
- タイトル: "CONTACT"（白、大きめ）
- 日本語: "お問い合わせ"

## フォーム
- 背景: 白
- max-width: 800px
- 中央配置
- padding: 48px
- 丸角: rounded-lg
- 影: shadow-lg
```

#### フォームフィールド (`contact/1.png`, `contact/2.png`)

```markdown
## フィールド構成

1. 会社名・団体名
   - type: text
   - label: "会社名・団体名"
   - badge: "必須"（赤）
   - placeholder: "例：東海部品工業株式会社"

2. お名前
   - type: text
   - label: "お名前"
   - badge: "必須"
   - placeholder: "例：田中太郎"

3. お名前（フリガナ）
   - type: text
   - label: "お名前（フリガナ）"
   - badge: "必須"
   - placeholder: "例：タナカタロウ"

4. 電話番号
   - type: tel
   - label: "電話番号"
   - badge: "必須"
   - placeholder: "例：0566-23-4411"

5. メールアドレス
   - type: email
   - label: "メールアドレス"
   - badge: "必須"
   - placeholder: "例：info@example.com"

6. 郵便番号
   - type: text
   - label: "郵便番号"
   - placeholder: "例：448-0003"

7. 都道府県
   - type: select
   - label: "都道府県"
   - placeholder: "愛知県"（セレクトボックス）

8. 市区町村
   - type: text
   - label: "市区町村"
   - placeholder: "刈谷市"

9. 番地・建物名等
   - type: text
   - label: "番地・建物名等"
   - placeholder: "一里山町金山100"

10. お問い合わせ内容
    - type: textarea
    - label: "お問い合わせ内容"
    - rows: 6
    - placeholder: ""

## レイアウト
- 1カラム（モバイル）
- 都道府県 + 市区町村: 2カラム（デスクトップ）
- gap: 24px

## スタイル
- ラベル:
  - font-size: 14px
  - font-weight: 500
  - color: gray-700
  - margin-bottom: 8px
- 必須バッジ:
  - 背景: 赤（#DC2626）
  - テキスト: 白
  - padding: 4px 8px
  - font-size: 12px
  - 丸角: 4px
- 入力フィールド:
  - border: 1px solid gray-300
  - padding: 12px 16px
  - font-size: 16px
  - 丸角: 8px
  - focus: ブルーボーダー + shadow

## 送信ボタン
- テキスト: "確認画面へ進む"
- variant: primary（ブルー）
- size: lg
- fullWidth: true
- margin-top: 32px

## 注意書き
- テキスト: "ご確認いただいた後に送信されます。入力に誤りが無いか必ず確認してください。"
- font-size: 14px
- color: gray-600
- 中央配置

## プライバシーポリシー
- リンク: "プライバシーポリシーについてはこちらをご覧ください。"
- 中央配置
```

---

## 🎨 共通デザインパターン

### 1. セクション構造

```typescript
// 標準的なセクション
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto px-6">
    {/* コンテンツ */}
  </div>
</section>
```

### 2. カード + 画像レイアウト

```typescript
// 左画像 + 右カード
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div>{/* 画像 */}</div>
  <Card>{/* コンテンツ */}</Card>
</div>

// 右画像 + 左カード（逆パターン）
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
  <div className="md:order-2">{/* 画像 */}</div>
  <Card className="md:order-1">{/* コンテンツ */}</Card>
</div>
```

### 3. CTAボタンスタイル

```typescript
// プライマリCTA
<Button variant="primary" size="md">
  詳しくはこちら →
</Button>

// アクセントCTA
<Button variant="accent" size="lg">
  採用情報
</Button>

// アウトラインCTA（白背景）
<Button variant="outline">
  お問い合わせ →
</Button>
```

### 4. オーバーレイパターン

```css
/* 画像 + オーバーレイ */
.hero-overlay {
  position: relative;
}

.hero-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
}
```

---

## 📐 レイアウトグリッド

### ブレークポイント
```typescript
breakpoints: {
  sm: '640px',   // モバイル L
  md: '768px',   // タブレット
  lg: '1024px',  // デスクトップ
  xl: '1280px',  // 大画面
  '2xl': '1536px', // 超大画面
}
```

### コンテナサイズ
```typescript
container: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// デフォルトpadding
padding: {
  mobile: '16px',
  tablet: '24px',
  desktop: '32px',
}
```

---

## 🎯 重要な実装ポイント

### 1. ヘッダーナビゲーション
- スティッキー（position: sticky）
- スクロール時に影を追加
- ドロップダウンメニューはホバーで表示
- モバイルはハンバーガーメニュー

### 2. カルーセル
- 自動再生（5秒間隔）
- 左右ボタンで手動操作
- ドットインジケーター（オプション）
- スワイプ対応（モバイル）

### 3. フォーム
- リアルタイムバリデーション
- 必須フィールドの明示
- エラーメッセージ（具体的）
- 送信前の確認画面

### 4. レスポンシブ
- モバイルファースト
- タッチターゲット最低44px
- フォントサイズの調整
- 画像の最適化

---

## 📝 未分析のページ

以下のページも画像が存在します（必要に応じて分析）：

- `about/` - 会社情報
- `product/` - 製品紹介
- `manufacturing/` - 製造工程
- `for_customers/` - お客様への取り組み
- `for_human_resource/` - 人材への取り組み
- `for_region_environment/` - 地域・環境への取り組み
- `news/` - お知らせ
- `RECRUIT/crosstalk/` - 座談会
- `RECRUIT/interview/` - インタビュー
- `RECRUIT/faq/` - よくある質問

---

**このドキュメントは、実装時の参照用です。詳細が必要な場合は、該当する画像を直接確認してください。**
