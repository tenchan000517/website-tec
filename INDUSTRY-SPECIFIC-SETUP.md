# 業種別セットアップテンプレート

## 📋 概要

業種・用途に特化したSEO・LLMO設定のテンプレート集

**ベースドキュメント**：
- [SETUP-COMMAND-TEMPLATE.md](./SETUP-COMMAND-TEMPLATE.md) - 基本設定はこちらを参照
- このドキュメントは業種特有の設定のみを記載

**使い方**：
1. SETUP-COMMAND-TEMPLATE.md の指示文をコピー
2. 下記の業種別セクションから該当する部分を追加・上書き
3. Claude Codeに送信

---

## 🏭 製造業・BtoB企業向け

### Claude Code指示文

```
新規製造業企業サイトのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [会社名]
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]
業種: 製造業（[具体的な業種]）
地域: [都道府県・市区町村]

【基本設定】
SETUP-COMMAND-TEMPLATE.md の内容に従って基本設定を実装してください。

【業種特化の設定】

## Metadataカスタマイズ
- title: "[会社名] | [製品・サービス]の製造・販売 - [地域名]"
- description: "[会社名]は[地域]の[業種]です。[主力製品・技術]で[顧客のベネフィット]を実現します。"
- keywords: [
    "[会社名]",
    "[業種名]",
    "[製品カテゴリ]",
    "[地域名] [業種]",
    "[技術名・工法名]",
    "[強み・特徴]"
  ]

## 構造化データ（JSON-LD）
以下をすべて実装：

1. Organization
```json
{
  "@type": "Organization",
  "name": "[会社名]",
  "url": "[サイトURL]",
  "logo": "[ロゴURL]",
  "foundingDate": "[設立年]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP",
    "addressRegion": "[都道府県]",
    "addressLocality": "[市区町村]",
    "streetAddress": "[番地]"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "営業部",
    "telephone": "[電話番号]",
    "email": "[メールアドレス]"
  }
}
```

2. Product（主力製品ごと）
```json
{
  "@type": "Product",
  "name": "[製品名]",
  "description": "[製品説明]",
  "brand": {
    "@type": "Brand",
    "name": "[会社名]"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "[会社名]"
  }
}
```

3. Place（工場・事業所）
```json
{
  "@type": "Place",
  "name": "[工場名・事業所名]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP",
    "addressRegion": "[都道府県]",
    "addressLocality": "[市区町村]"
  }
}
```

## sitemap.ts 優先度設定
- トップページ: 1.0
- 製品・サービスページ: 0.9
- 会社情報: 0.8
- 技術・設備: 0.8
- 実績・事例: 0.7
- 採用情報: 0.7
- お問い合わせ: 0.6
- 法的ページ: 0.3

実装お願いします。
```

---

## 🎓 教育・スクール・アカデミー向け

### Claude Code指示文

```
新規教育サービスサイトのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [サービス名]
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]
サービス: [教育内容・対象]
地域: [対応地域]

【基本設定】
SETUP-COMMAND-TEMPLATE.md の内容に従って基本設定を実装してください。

【業種特化の設定】

## Metadataカスタマイズ
- title: "[サービス名] | [学習内容・コース名] - [対象者]向け[地域]"
- description: "[サービス名]は[対象者]向けの[教育内容]サービスです。[実績・特徴]で[学習者のゴール]を実現します。"
- keywords: [
    "[サービス名]",
    "[教育カテゴリ]",
    "[対象者] [教育内容]",
    "[地域名] [教育カテゴリ]",
    "[コース名]",
    "[資格名・スキル名]"
  ]

## 構造化データ（JSON-LD）
以下をすべて実装：

1. Service
```json
{
  "@type": "Service",
  "name": "[サービス名]",
  "serviceType": "[教育サービスカテゴリ]",
  "description": "[サービス説明]",
  "provider": {
    "@type": "Organization",
    "name": "[運営会社名]"
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "[対応地域]"
    }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
}
```

2. Course（コースごと）
```json
{
  "@type": "Course",
  "name": "[コース名]",
  "description": "[コース説明]",
  "provider": {
    "@type": "Organization",
    "name": "[サービス名]"
  },
  "educationalLevel": "[対象レベル]",
  "offers": {
    "@type": "Offer",
    "category": "[カテゴリ]"
  }
}
```

3. FAQPage（必須）
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[よくある質問]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[回答]"
      }
    }
  ]
}
```

## sitemap.ts 優先度設定
- トップページ: 1.0
- コース一覧: 0.9
- 料金・プラン: 0.9
- 実績・事例: 0.8
- 講師紹介: 0.7
- ブログ・記事: 0.7
- お問い合わせ: 0.6
- 法的ページ: 0.3

実装お願いします。
```

---

## 💼 リクルートサイト・採用サイト向け

### Claude Code指示文

```
新規リクルートサイトのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [会社名]採用サイト
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]
業種: [業種]
募集職種: [職種リスト]
地域: [勤務地]

【参照プロジェクト】
/mnt/c/web-template-library/src/app/works/tokai-parts-industry（リクルートページ参照）

【業種特化の設定】

## Metadataカスタマイズ
- title: "[会社名] 採用情報 | [職種]の求人 - [地域]"
- description: "[会社名]の採用情報。[地域]で[職種]を募集中。[働き方の特徴・福利厚生]で、あなたの成長を応援します。"
- keywords: [
    "[会社名] 採用",
    "[業種] 求人",
    "[職種名] 募集",
    "[地域名] [業種] 求人",
    "新卒採用",
    "中途採用",
    "[特徴的な制度名]"
  ]

## 構造化データ（JSON-LD）
以下をすべて実装：

1. Organization（採用情報付き）
```json
{
  "@type": "Organization",
  "name": "[会社名]",
  "url": "[サイトURL]",
  "logo": "[ロゴURL]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP",
    "addressRegion": "[都道府県]",
    "addressLocality": "[市区町村]"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "採用担当",
    "telephone": "[電話番号]",
    "email": "[採用メールアドレス]"
  }
}
```

2. JobPosting（募集職種ごと）
```json
{
  "@type": "JobPosting",
  "title": "[職種名]",
  "description": "[仕事内容]",
  "datePosted": "[掲載日]",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "[会社名]",
    "logo": "[ロゴURL]"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP",
      "addressRegion": "[都道府県]",
      "addressLocality": "[市区町村]"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "JPY",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": "[最低給与]",
      "maxValue": "[最高給与]",
      "unitText": "MONTH"
    }
  }
}
```

3. FAQPage（採用に関するFAQ）
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "応募資格は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[回答]"
      }
    }
  ]
}
```

## sitemap.ts 優先度設定
- トップページ: 1.0
- 募集要項・職種一覧: 0.95
- 社員インタビュー: 0.85
- 福利厚生・働く環境: 0.85
- 会社紹介: 0.8
- 選考フロー: 0.75
- エントリーフォーム: 0.7
- よくある質問: 0.7
- 法的ページ: 0.3

実装お願いします。
```

---

## 🛍️ BtoC サービス・店舗向け

### Claude Code指示文

```
新規店舗・サービスサイトのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [店舗・サービス名]
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]
業種: [業種・サービス内容]
地域: [営業エリア]
店舗数: [店舗数]

【業種特化の設定】

## Metadataカスタマイズ
- title: "[店舗・サービス名] | [サービス内容] - [地域名]"
- description: "[地域]の[サービス内容]なら[店舗・サービス名]。[特徴・強み]で[顧客のベネフィット]を提供します。"
- keywords: [
    "[店舗・サービス名]",
    "[地域名] [サービス内容]",
    "[サービスカテゴリ]",
    "[地域名] [業種]",
    "[特徴的なメニュー・サービス名]"
  ]

## 構造化データ（JSON-LD）
以下をすべて実装：

1. LocalBusiness
```json
{
  "@type": "LocalBusiness",
  "name": "[店舗・サービス名]",
  "image": "[店舗外観画像URL]",
  "url": "[サイトURL]",
  "telephone": "[電話番号]",
  "priceRange": "[価格帯]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP",
    "addressRegion": "[都道府県]",
    "addressLocality": "[市区町村]",
    "streetAddress": "[番地]",
    "postalCode": "[郵便番号]"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[緯度]",
    "longitude": "[経度]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

2. Service
```json
{
  "@type": "Service",
  "name": "[サービス名]",
  "serviceType": "[サービスカテゴリ]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "[店舗・サービス名]"
  },
  "areaServed": {
    "@type": "City",
    "name": "[市区町村]"
  }
}
```

3. Review（実績があれば）
```json
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "[評価点]",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "[レビュアー名]"
  }
}
```

## sitemap.ts 優先度設定
- トップページ: 1.0
- サービス・メニュー: 0.9
- 料金・プラン: 0.9
- 店舗情報・アクセス: 0.85
- お客様の声: 0.75
- スタッフ紹介: 0.7
- ブログ・お知らせ: 0.7
- 予約・問い合わせ: 0.8
- 法的ページ: 0.3

実装お願いします。
```

---

## 📄 LP（ランディングページ）向け

### Claude Code指示文

```
新規ランディングページのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [LP名・キャンペーン名]
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]
目的: [コンバージョン目標]
ターゲット: [ターゲット層]

【基本設定】
SETUP-COMMAND-TEMPLATE.md の内容に従って基本設定を実装してください。

【LP特化の設定】

## Metadataカスタマイズ
- title: "[キャッチコピー] | [サービス名]"
- description: "[ターゲットの課題] → [解決策の提示] → [ベネフィット] → [CTA]"
- keywords: [
    "[主要キーワード]",
    "[ターゲット] [課題]",
    "[解決策キーワード]",
    "[ベネフィットキーワード]"
  ]
- noindex: false（※キャンペーン期間限定の場合はtrue検討）

## 構造化データ（JSON-LD）
以下をすべて実装：

1. Service または Product
```json
{
  "@type": "Service",
  "name": "[サービス名]",
  "description": "[サービス説明]",
  "offers": {
    "@type": "Offer",
    "price": "[価格]",
    "priceCurrency": "JPY",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "[キャンペーン終了日]"
  }
}
```

2. FAQPage（必須）
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[よくある質問（不安・疑問を解消）]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[明確な回答]"
      }
    }
  ]
}
```

3. HowTo（使い方・導入ステップ）
```json
{
  "@type": "HowTo",
  "name": "[サービスの始め方・利用方法]",
  "step": [
    {
      "@type": "HowToStep",
      "name": "[ステップ1]",
      "text": "[説明]"
    }
  ]
}
```

## LP特有の最適化
- CTAボタンの明確化
- ファーストビューの最適化（2秒以内の表示）
- スクロール誘導アニメーション
- フォーム最適化（入力項目最小化）
- ソーシャルプルーフ（実績・お客様の声）表示

## sitemap.ts 設定
- LPページ: priority 1.0, changeFrequency 'weekly'
- プライバシーポリシー: priority 0.3
- 特商法: priority 0.3

## robots.ts 設定
- allow: '/'
- disallow: ['/api/', '/admin/', '/thank-you/']（サンキューページはクロール不要）

実装お願いします。
```

---

## 🔧 業種判別ガイド

どのテンプレートを使うべきか迷った場合：

| 業種・目的 | 使用テンプレート | 判断基準 |
|---|---|---|
| 製造業、建設業、技術系BtoB | 製造業向け | 製品・技術をアピール、企業信頼性重視 |
| 教育、スクール、講座 | 教育向け | コース・カリキュラム紹介、受講者の成長 |
| 採用・リクルート | リクルート向け | 求人情報、社員紹介、働く環境 |
| 飲食、美容、地域サービス | 店舗向け | 地域性、営業時間、アクセス情報 |
| 単一サービス訴求ページ | LP向け | コンバージョン最優先、シンプル構成 |

---

## 💡 カスタマイズのコツ

### 構造化データの選び方
- **Organization**: 会社情報を伝えたい場合（必須）
- **LocalBusiness**: 実店舗がある場合
- **Product**: 物理的な製品を販売
- **Service**: サービスを提供
- **JobPosting**: 求人募集
- **FAQPage**: どの業種でも推奨（LLM最適化）
- **Review**: 実績・評判を強調したい場合

### 地域SEOを強化する場合
- areaServedに都道府県・市区町村を明記
- addressに詳細な住所を記載
- geoに緯度経度を追加
- キーワードに地域名を含める（例：「愛知県 製造業」）

### コンバージョンを重視する場合
- 問い合わせページのpriority: 0.8以上
- CTAボタンは明確な色・配置
- フォーム項目を最小限に
- サンキューページのnoindex: true

---

**作成日**: 2025-11-04
**参照**: yumesutaHP, yumesuta-academy-lp, web-template-library
