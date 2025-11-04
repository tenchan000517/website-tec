# TECH-DOC-PLAN - 計画書

**作成日**: 2025-11-04
**対象**: 次世代Claude Code

---

## プロジェクトの全体像

### 目的

東海部品工業サイトで使用された**全ての技術を完璧にドキュメント化**し、Claude Codeが再利用可能な技術ドキュメントシステムを構築する。

### 背景

- 現在の実装は**80%の再現度**
- 元デザイン画像と細部が異なる
- 使用された技術が200-300個あるが、ドキュメント化されていない

### ゴール

1. 元デザインと100%一致する技術の完璧なドキュメント化
2. Claude Codeがコピペで再利用できる状態にする
3. 各技術に具体的な指示文を付与する

---

## 作業の2つのフェーズ

### Phase 1: ベースシステム構築

**目的**: 技術を追加するための基盤を作る

#### 1.1 technologies.ts の作成

**ファイル**: `src/data/technologies.ts`

```typescript
export interface Technology {
  slug: string              // URL用（例: "hero-carousel"）
  title: string             // 技術名
  category: string          // カテゴリー
  description: string       // 短い説明（1-2行）
  usedIn: string[]         // 使用場所（ファイルパス配列）
  code: string             // 実装コード全文
  prompt: string           // Claude Codeへの指示文
  setup?: string           // セットアップ手順（オプション）
  wireframe?: string       // ワイヤーフレーム画像パス（オプション）
  relatedTech: string[]    // 関連技術のslug配列
}

export const technologies: Technology[] = [
  // ここに技術を追加していく
]
```

#### 1.2 CopyButton の作成

**ファイル**: `src/components/CopyButton.tsx`

TECH-DOCUMENTATION-SYSTEM.mdの仕様通りに実装。

#### 1.3 技術一覧ページの作成

**ファイル**: `src/app/tech/page.tsx`

- カテゴリー別に技術を表示
- カード形式
- クリックで詳細ページへ

#### 1.4 技術詳細ページの作成

**ファイル**: `src/app/tech/[slug]/page.tsx`

- 技術名、カテゴリー、説明
- 使用場所
- 実装コード（コピーボタン付き）
- Claude Codeへの指示文（コピーボタン付き）
- セットアップ手順（該当する場合）
- 関連技術

#### 1.5 トップページの修正

**ファイル**: `src/app/page.tsx`

技術ドキュメントへのリンクセクションを追加。

#### 1.6 動作確認

- 全ページが表示される
- コピーボタンが機能する
- リンクが動作する

**Phase 1完了の定義**:
- 上記6つの作業が完了
- technologies.tsに最低1つのダミー技術が定義されている
- `npm run dev`で全ページが正常に表示される

---

### Phase 1.5: プロジェクト専用技術一覧ページの作成

**重要**: Phase 1で作成した `/tech` は全プロジェクト共通ページです。
各プロジェクト専用の技術一覧ページも必要です。

#### 1.5.1 technologies.ts に project フィールドを追加

**ファイル**: `src/data/technologies.ts`

```typescript
export interface Technology {
  slug: string
  title: string
  category: string
  description: string
  project: string         // ← 追加: プロジェクト名（例: "tokai-parts-industry"）
  usedIn: string[]
  code: string
  prompt: string
  setup?: string
  wireframe?: string
  relatedTech: string[]
}
```

#### 1.5.2 東海部品工業専用の技術一覧ページを作成

**ファイル**: `src/app/works/tokai-parts-industry/tech/page.tsx`

- 東海部品工業の技術のみ表示
- 東海部品工業の配色（青#2563EB + オレンジ#FF6B35）を使用
- 東海部品工業のヘッダー・フッターを使用

#### 1.5.3 東海部品工業専用の技術詳細ページを作成

**ファイル**: `src/app/works/tokai-parts-industry/tech/[slug]/page.tsx`

- 東海部品工業の配色
- 東海部品工業のヘッダー・フッターを使用

#### 1.5.4 共通ページにフィルター機能を追加

**ファイル**: `src/app/tech/page.tsx`

- プロジェクトで絞り込み可能にする
- デフォルトは全プロジェクト表示

#### 1.5.5 東海部品工業TOPページにリンクを追加

**ファイル**: `src/app/works/tokai-parts-industry/page.tsx`

- 技術ドキュメントセクションを追加
- `/works/tokai-parts-industry/tech` へのリンク

**Phase 1.5完了の定義**:
- technologies.tsに `project` フィールドが追加されている
- `/works/tokai-parts-industry/tech` が作成されている
- `/works/tokai-parts-industry/tech/[slug]` が作成されている
- 共通ページにフィルター機能がある
- 東海部品工業TOPページにリンクがある

---

### Phase 2: 技術分析と追加

**目的**: 元デザインを完璧に分析し、technologies.tsに技術を追加していく

#### 2.1 作業サイクル

```
[ループ開始]
  1. 元デザイン画像を1枚Readで確認
  2. 現在の実装コードをReadで確認
  3. 差異を洗い出し
  4. technologies.tsに技術を1つ追加
  5. ブラウザで動作確認
  6. TECH-DOC-PROGRESS.mdを更新（追加した技術数を記録）
  7. 次の技術へ
[ループ終了条件: 全ての技術が追加されるまで]
```

#### 2.2 技術の抽出方法

**ステップ1: 元デザイン画像を確認**

```bash
Read /mnt/c/WEBサイトUI/東海部品工業株式会社/TOP/1.jpg
```

**ステップ2: 見つけた技術をメモ**

例：
- ヘッダーの「トヨタ車体グループ」バッジ
- ロゴと会社名の配置
- ナビゲーションメニューの2行表示（日本語+英語）
- カルーセルの左右ボタン（青い円形）
- 背景オーバーレイ（bg-black/30）

**ステップ3: 現在のコードを確認**

```bash
Read /mnt/c/web-template-library/src/components/works/tokai-parts-industry/HeroSection.tsx
```

**ステップ4: 差異を洗い出し**

元デザインと現在のコードを比較：
- オーバーレイの透明度が違う？
- ボタンの大きさが違う？
- テキストの位置が違う？

**ステップ5: technologies.tsに追加**

差異があった部分も含めて、正しい実装を技術として追加。

#### 2.3 技術の粒度

**細かい粒度で定義する**（200-300個レベル）

例：
- 「ヒーローセクション」ではなく：
  - 「ヒーローセクション - カルーセル自動再生機能」
  - 「ヒーローセクション - 左右ボタンデザイン」
  - 「ヒーローセクション - オーバーレイ実装」
  - 「ヒーローセクション - レスポンシブ高さ設定」

#### 2.4 カテゴリー

技術を以下のカテゴリーに分類：

1. **レイアウト・構造**
2. **UIコンポーネント**
3. **アニメーション**
4. **SEO・LLMO**
5. **セットアップ・環境構築**
6. **デザイン・ビジュアル**
7. **ナビゲーション**
8. **フォーム**
9. **データ表示**
10. **画像処理**

---

## Phase 2は終わりがない作業

Phase 2は、元デザインを見るたびに新しい技術を発見し、追加し続ける作業です。

**重要**:
- 一度に大量に追加しない
- 1つずつ丁寧に追加
- TECH-DOC-PROGRESS.mdを常に更新

---

## 完成の定義

### Phase 1の完成

- [ ] technologies.ts が作成されている
- [ ] CopyButton.tsx が作成されている
- [ ] /tech/page.tsx が作成されている
- [ ] /tech/[slug]/page.tsx が作成されている
- [ ] トップページに技術ドキュメントセクションが追加されている
- [ ] 動作確認が完了している

### Phase 2の完成（目標）

- [ ] 最低50個の技術が定義されている
- [ ] 各カテゴリーに5個以上の技術がある
- [ ] 全ての技術に実装コードが含まれている
- [ ] 全ての技術にClaude Codeへの指示文が含まれている

**Phase 2は継続的に追加を続ける**

---

## 次のステップ

**TECH-DOC-PROGRESS.md** を読んで現在の進捗を確認してください。
