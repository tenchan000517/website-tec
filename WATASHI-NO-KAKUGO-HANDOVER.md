# 「私のカクゴ」作品 引き継ぎドキュメント

作成日: 2025-11-04
対象: 次世代Claude Code

---

## 📋 現在の状況

### ✅ 完了したこと

**全11ページの基礎実装が完了（50%の再現度）**

1. **TOPページ** (`src/app/works/watashi-no-kakugo/page.tsx`)
   - ヒーローセクション（7人の人物）
   - 更新情報セクション
   - 私のカクゴ一覧
   - 動画プレーヤー
   - ブログ・SNSセクション

2. **私のカクゴとは** (`src/app/works/watashi-no-kakugo/about/page.tsx`)
   - シンプルなテキストページ
   - サイトの理念説明

3. **私のカクゴ一覧** (`src/app/works/watashi-no-kakugo/persons/page.tsx`)
   - サイドバー検索フォーム（名前、肩書、性別、血液型）
   - 人物カードグリッド（2カラム）

4. **プロフィール詳細** (`src/app/works/watashi-no-kakugo/profile/page.tsx`)
   - 動画プレーヤー
   - 人物情報
   - 一日のスケジュール（円グラフ）
   - 来歴（タブ切り替え）
   - おすすめ動画
   - お気に入り

5. **ブログ・SNS** (`src/app/works/watashi-no-kakugo/sns/page.tsx`)
   - サイドバー検索フォーム
   - ブログカードグリッド（5カラム）
   - もっと見るボタン

6. **サイトご利用にあたって** (`src/app/works/watashi-no-kakugo/terms/page.tsx`)
   - 利用環境説明
   - サイドバーナビゲーション

7. **メディアポリシー** (`src/app/works/watashi-no-kakugo/terms/media-policy/page.tsx`)
   - ポリシー説明テキスト

8. **プライバシーポリシー** (`src/app/works/watashi-no-kakugo/terms/privacy-policy/page.tsx`)
   - プライバシーポリシーテキスト

9. **会社概要** (`src/app/works/watashi-no-kakugo/terms/company/page.tsx`)
   - 会社情報テーブル

10. **お問い合わせ** (`src/app/works/watashi-no-kakugo/terms/contact/page.tsx`)
    - 外部フォームへのリンク

11. **サイトマップ** (`src/app/works/watashi-no-kakugo/sitemap/page.tsx`)
    - サイト全体の構造表示

### 📁 ファイル構造

```
src/
├── app/
│   └── works/
│       └── watashi-no-kakugo/
│           ├── page.tsx                      # TOPページ
│           ├── about/page.tsx                # 私のカクゴとは
│           ├── persons/page.tsx              # 私のカクゴ一覧
│           ├── profile/page.tsx              # プロフィール詳細
│           ├── sns/page.tsx                  # ブログ・SNS
│           ├── terms/
│           │   ├── page.tsx                  # サイトご利用にあたって
│           │   ├── media-policy/page.tsx     # メディアポリシー
│           │   ├── privacy-policy/page.tsx   # プライバシーポリシー
│           │   ├── company/page.tsx          # 会社概要
│           │   └── contact/page.tsx          # お問い合わせ
│           └── sitemap/page.tsx              # サイトマップ
│
└── components/
    └── works/
        └── watashi-no-kakugo/
            ├── Header.tsx                     # ヘッダー
            ├── Footer.tsx                     # フッター
            └── TermsLayout.tsx                # 利用規約レイアウト

public/
└── works/
    └── watashi-no-kakugo/
        └── images/                            # ベンチマーク画像
            ├── top/1.png, 2.png
            ├── about/1.png
            ├── persons/1.png
            ├── profile/1.png
            ├── sns/1.png
            └── terms/1.png - 6.png
```

### 🎨 デザイン仕様（現在の実装）

**カラー**:
- グリーンアクセント: `#8BC34A`
- 背景グレー: `#f8f8f8`
- テキスト: `#000000`, `#333333`, `#666666`
- ボーダー: `#e5e5e5`
- ボタングレー: `#999999`

**レイアウト**:
- コンテナ最大幅: `1200px`
- ヘッダー高さ: `72px`
- セクションマージン: `56px`

---

## 🚨 次にやるべきこと - 最重要

### **ユーザーからエレメント（膨大なコード量）が提供される**

ユーザーが次に共有するのは：
- **実際の人物画像**
- **正確なエレメント（HTML/CSS）**
- **100%の再現に必要な全ての情報**

### あなた（次世代Claude Code）がすべきこと

#### 1. エレメントを受け取る

ユーザーから共有される大量のHTML/CSSコードを確認する。

#### 2. 各ページを正確に再実装

**重要な注意事項**:
- ✅ ベンチマーク画像（`/mnt/c/WEBサイトUI/私のカクゴ/`）を**必ず見ながら**実装
- ✅ エレメントのHTML構造を正確にReactコンポーネント化
- ✅ エレメントのCSSをstyled-jsxに変換
- ✅ カラーコード、フォントサイズ、スペーシングを**1px単位で正確に**
- ❌ 想像で実装しない
- ❌ 適当な実装はしない
- ❌ プレースホルダーを残さない

#### 3. 実装の優先順位

1. **TOPページ** - 最も重要、80%以上の再現度を目指す
2. **私のカクゴ一覧** - 検索機能とカードデザイン
3. **プロフィール詳細** - 複雑なレイアウト
4. **ブログ・SNS** - グリッドレイアウト
5. **その他のページ** - テキストページ

#### 4. 1ページずつ完成させる

- **1ページ実装 → ブラウザで確認 → ベンチマーク画像と比較 → 80%以上なら次へ**
- 中途半端な状態で次のページに進まない
- 各ページ完成後にTodoWriteで進捗を記録

---

## 📐 実装ガイドライン

### HTMLからReactへの変換ルール

```html
<!-- エレメントのHTML例 -->
<div class="person-card">
  <img src="person.jpg" alt="名前">
  <h3>名前</h3>
</div>
```

```tsx
// Reactコンポーネント化
<div className="person-card">
  <Image src="/works/watashi-no-kakugo/images/person.jpg" alt="名前" width={100} height={100} />
  <h3>名前</h3>
</div>

<style jsx>{`
  .person-card {
    /* CSSをここに */
  }
`}</style>
```

### 必須チェックリスト（各ページ）

- [ ] ベンチマーク画像と見比べながら実装
- [ ] 色が正確（#8BC34A など）
- [ ] フォントサイズが正確
- [ ] スペーシング（margin, padding）が正確
- [ ] ホバーエフェクトが実装されている
- [ ] レスポンシブ対応
- [ ] すべてのリンクが動作する
- [ ] 画像パスが正しい
- [ ] ビルドエラーがない

---

## 🔍 現在の問題点

### 1. 画像がプレースホルダー

現在の実装では、実際の人物画像がないため、カラープレースホルダーを使用しています。

**修正方法**:
- エレメントに含まれる画像を適切に配置
- Image コンポーネントで正しいパスを指定

### 2. 再現度が50%

**原因**:
- ベンチマーク画像を丁寧に見ずに想像で実装した
- フォントサイズ、スペーシング、色を正確に測定していない
- エレメントがない状態で作った

**解決方法**:
- エレメントを使って正確に再実装
- 1px単位で測定して実装

### 3. 動的機能が未実装

- 検索フォームの実際の検索機能
- タブ切り替えの実装
- 動画プレーヤーの実装

**解決方法**:
- 必要に応じてuseStateを使って実装
- 実際のUIの動作を確認して実装

---

## 📝 作業手順（推奨）

### ステップ1: エレメントを確認

```bash
# ユーザーからエレメントを受け取る
# 膨大なコード量なので、一つずつ確認する
```

### ステップ2: TOPページから再実装

```bash
# 1. ベンチマーク画像を開く
Read /mnt/c/WEBサイトUI/私のカクゴ/top/1.png

# 2. エレメントのHTMLを確認

# 3. 正確に実装
# src/app/works/watashi-no-kakugo/page.tsx を更新

# 4. ブラウザで確認
npm run dev
# http://localhost:3000/works/watashi-no-kakugo

# 5. ベンチマーク画像と比較して80%以上なら次へ
```

### ステップ3: 各ページを順次実装

1. TOPページ
2. 私のカクゴ一覧
3. プロフィール詳細
4. ブログ・SNS
5. about
6. terms系ページ
7. sitemap

### ステップ4: 全体確認

```bash
# 全ページをブラウザで確認
# ビルドが通るか確認
npm run build

# 問題なければコミット
git add .
git commit -m "feat: 私のカクゴサイト完全実装

エレメントを使用して80%以上の再現度で全11ページを実装

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## 🎯 成功の定義

### 最低基準
- ✅ 全11ページがビルドエラーなく動作
- ✅ 各ページの再現度が**80%以上**
- ✅ レスポンシブ対応
- ✅ すべてのリンクが動作

### 理想
- ✅ 再現度**90%以上**
- ✅ アニメーション実装
- ✅ 検索機能が動作
- ✅ タブ切り替えが動作

---

## 💡 重要なヒント

1. **焦らない**: 1ページずつ丁寧に実装する
2. **測定する**: ブラウザの開発者ツールでサイズを測定
3. **比較する**: 常にベンチマーク画像と比較
4. **質問する**: 不明点があればユーザーに質問

---

## 📞 困ったときは

### エレメントが理解できない
→ ユーザーに「このエレメントの意味を教えてください」と質問

### 再現度が低い
→ ベンチマーク画像をもう一度確認し、1つずつ修正

### ビルドエラー
→ エラーメッセージを読んで、該当箇所を修正

---

## 🎓 参考情報

- ベンチマーク画像: `/mnt/c/WEBサイトUI/私のカクゴ/`
- プロジェクトルート: `/mnt/c/web-template-library/`
- Next.js バージョン: 16.0.1 (Turbopack)
- styled-jsx使用（Client Componentで`'use client'`必須）

---

**作成者より**: 50%の再現度ですが、基礎構造は完成しています。エレメントを使って100%に近づけてください。頑張ってください！

**最終更新**: 2025-11-04
