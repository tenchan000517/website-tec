# 「私のカクゴ」技術ドキュメント追加タスク - 引き継ぎ

**作成日**: 2025-11-04
**対象**: 次世代Claude Code
**重要度**: CRITICAL

---

## 現在の状況

**watashi-no-kakugoプロジェクトの技術を23個追加しましたが、品質が東海部品工業レベルに達していません。**

### 問題点

1. **プレビューが不足**: 23技術中、12技術にしかpreviewがない（11技術に追加が必要）
2. **promptの詳細度不足**: 東海部品工業レベルの詳細さに達していない
3. **setupの欠如**: 必要な技術にsetupが書かれていない
4. **relatedTechの未設定**: 関連技術の紐付けが不完全

---

## あなた（次世代Claude Code）がやるべきこと

### タスク概要

**watashi-no-kakugoプロジェクトの23技術すべてを、東海部品工業レベルの品質に引き上げる。**

---

## 東海部品工業レベルの品質基準

### 必須要素（すべての技術に必要）

1. **preview（プレビュー）**
   - HTMLとTailwind CSSで視覚的なプレビューを作成
   - 実際の見た目が分かるように
   - コンパクトで見やすいサイズ
   - 静的なHTML（JavaScriptなし）

2. **prompt（指示文）**
   - 構造化された詳細な指示
   - 「## 要件」セクション: 詳細な仕様
   - 「## 実装手順」セクション: ステップバイステップの手順
   - 「## デザインのポイント」セクション: なぜこの実装なのか
   - 次世代Claude Codeが迷わず実装できるレベル

3. **code（コード）**
   - 完全で動作するコード
   - styled-jsx使用
   - コメント付き

4. **description（説明）**
   - 1-2行で技術の概要を説明
   - 何のための技術なのかを明確に

5. **relatedTech（関連技術）**
   - 関連する技術のslugを配列で指定
   - 空配列ではなく、実際の関連技術を設定

### 任意要素（必要に応じて）

6. **setup（セットアップ）**
   - 技術スタック系（Next.js、styled-jsx等）に必須
   - パッケージインストール手順
   - 設定ファイルの記述
   - コマンド例

---

## プレビューが未追加の技術リスト（11個）

以下の技術にpreviewを追加してください：

1. `hero-section-person-silhouettes-watashi` - ヒーローセクション
2. `sidebar-search-form-watashi` - サイドバー検索フォーム
3. `tab-switching-history-watashi` - タブ切り替え機能
4. `two-column-layout-sidebar-watashi` - 2カラムレイアウト
5. `header-search-form-watashi` - ヘッダー検索フォーム
6. `footer-navigation-watashi` - フッターナビゲーション
7. `float-two-column-layout-watashi` - フロート2カラム
8. `favorite-card-horizontal-watashi` - お気に入りカード
9. `profile-card-circular-image-watashi` - プロフィールカード
10. `two-column-person-grid-watashi` - 2カラムグリッド
11. `styled-jsx-integration-watashi` - styled-jsx統合

---

## promptが不十分な技術リスト（全23個）

すべての技術のpromptを、以下の構造に従って書き直してください：

```
## 要件

### 基本構造
- 具体的なスペック

### デザイン仕様
- 色、サイズ、フォント等

### インタラクション
- ホバー、クリック等の動作

## 実装手順

1. ステップ1
   - 詳細な説明

2. ステップ2
   - 詳細な説明

（以下続く）

## デザインのポイント
- なぜこの実装なのか
- どんな効果があるのか
```

---

## relatedTechの設定が必要な技術

すべての技術について、関連する技術を適切に設定してください。

### 例

- `fixed-header-green-accent-watashi` の relatedTech:
  - `brand-logo-svg-icon-watashi`
  - `nav-hover-underline-effect-watashi`
  - `header-search-form-watashi`

- `three-column-layout-watashi` の relatedTech:
  - `custom-scroll-area-watashi`

---

## 作業手順

### ステップ1: 現在のtechnologies.tsを確認

```bash
Read /mnt/c/web-template-library/src/data/technologies.ts
```

offsetとlimitを使って、watashi-no-kakugo関連の技術を確認してください。

### ステップ2: 1つずつ技術を修正

**重要**: 1つずつ丁寧に修正してください。一気に修正しないこと。

1. 技術を1つ選ぶ
2. previewを追加（未追加の場合）
3. promptを東海部品工業レベルに書き直し
4. relatedTechを設定
5. setupを追加（必要な場合）
6. Editツールで修正
7. 次の技術へ

### ステップ3: 進捗を記録

修正するたびに、以下のファイルを更新してください：

```
/mnt/c/web-template-library/WATASHI-NO-KAKUGO-TECH-DOC-PROGRESS.md
```

---

## プレビューの作成方法

### 基本ルール

1. HTMLとTailwind CSSのみ使用
2. JavaScriptなし
3. コンパクトなサイズ（h-32〜h-48程度）
4. 実際の色を使用（#8BC34A等）

### 例1: カード系コンポーネント

```html
<div class="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded transition-all hover:-translate-y-1 hover:shadow-lg">
  <div class="w-24 h-24 rounded-full bg-blue-500 flex-shrink-0"></div>
  <div class="flex-1">
    <p class="text-xs text-gray-600 mb-1">肩書</p>
    <h3 class="text-base font-bold mb-2">名前</h3>
    <p class="text-sm text-gray-800">メッセージ</p>
  </div>
</div>
```

### 例2: レイアウト系

```html
<div class="flex gap-5">
  <div class="bg-white p-4 rounded" style="width: 370px">
    <h3 class="font-bold mb-4">カラム1</h3>
    <div class="h-32 overflow-auto text-sm text-gray-600">コンテンツ</div>
  </div>
  <div class="bg-white p-4 rounded" style="width: 270px">
    <h3 class="font-bold mb-4">カラム2</h3>
  </div>
</div>
```

### 例3: フォーム系

```html
<div class="bg-white p-6 rounded-lg border">
  <h2 class="text-lg font-bold mb-4">検索</h2>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-bold mb-2">名前：</label>
      <input type="text" class="w-full px-3 py-2 border rounded" />
    </div>
    <button class="w-full py-3 bg-[#8BC34A] text-white font-bold rounded hover:bg-[#7AA93A]">
      検索
    </button>
  </div>
</div>
```

---

## promptの詳細化方法

### 東海部品工業レベルの例

以下は`parent-company-badge`のprompt（良い例）：

```
ヘッダーの最上部に親会社名を表示するバッジを実装してください。

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
- 高コントラスト（青背景＋白文字）で視認性確保
```

### 現在の不十分な例

```
7人の人物シルエットを表示するヒーローセクションを実装してください。

## 要件
- 背景色: #eeeeee
- 7人の人物を横並び配置
- 各人物: 130px × 190px
- 上部が丸い形状（border-radius: 50% 50% 0 0）
- 影付きのプラットフォーム
```

↓ これを東海部品工業レベルに詳細化してください。

---

## relatedTechの設定方法

### 設定基準

1. **直接的な関連**: 一緒に使われる技術
2. **依存関係**: この技術が別の技術を内包している
3. **代替技術**: 似た目的の異なる実装

### 例

```typescript
{
  slug: 'three-column-layout-watashi',
  // ...
  relatedTech: ['custom-scroll-area-watashi'] // スクロールエリアを含む
}

{
  slug: 'fixed-header-green-accent-watashi',
  // ...
  relatedTech: [
    'brand-logo-svg-icon-watashi',      // ロゴを含む
    'nav-hover-underline-effect-watashi', // ナビを含む
    'header-search-form-watashi'        // 検索を含む
  ]
}
```

---

## setupの追加方法

### 追加が必要な技術

- `styled-jsx-integration-watashi`

### setup内容

```
1. package.jsonの確認:
{
  "dependencies": {
    "styled-jsx": "^5.1.6"
  }
}

2. 'use client'ディレクティブの追加:
すべてのClient Componentで必須

3. 基本的な使用方法:
<style jsx>{`
  .class {
    property: value;
  }
`}</style>
```

---

## 完了の定義

すべての技術について以下が満たされていること：

- [ ] previewが追加されている
- [ ] promptが東海部品工業レベルに詳細化されている
- [ ] relatedTechが適切に設定されている
- [ ] setup（必要な場合）が追加されている
- [ ] descriptionが明確である

---

## 注意事項

1. **1つずつ作業する**: 一気に修正しない
2. **TECH-DOC-QUICK-START.mdの原則に従う**: 丁寧に、1つずつ
3. **東海部品工業の品質を参考にする**: technologies.tsの最初の方を見る
4. **視覚的な技術は必ずpreviewを追加**: UI系は全部
5. **絵文字を使わない**: ドキュメントに絵文字は不要

---

## 参考資料

### 参照すべきファイル

1. `/mnt/c/web-template-library/TECH-DOC-QUICK-START.md` - 作業の原則
2. `/mnt/c/web-template-library/src/data/technologies.ts` - 既存の技術（最初の60個が良い例）
3. `/mnt/c/web-template-library/WATASHI-NO-KAKUGO-HANDOVER-V2.md` - プロジェクトの詳細

### 東海部品工業レベルの技術例

- `parent-company-badge` (slug)
- `brand-logo-identity` (slug)
- `hero-carousel-autoplay` (slug)

これらを参考にして、同じレベルの品質を実現してください。

---

**最終目標**: watashi-no-kakugoプロジェクトの23技術すべてが、東海部品工業プロジェクトと同じ品質レベルになること。

**作業開始前に**: このドキュメント全体を読んで理解してから作業を開始してください。
