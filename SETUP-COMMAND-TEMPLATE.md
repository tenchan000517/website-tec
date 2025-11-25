# WEBサイト完全セットアップ指示書（Claude Code用）

## 📋 概要

このドキュメントは、新規WEBサイトプロジェクトに対して、以下の3つを完全実装するためのClaude Code向け指示書です：

1. **SEO基本設定**
2. **LLMO（Large Language Model Optimization）設定**
3. **UI基本設定**

**特徴**：
- 環境依存なし（どのPCでも使用可能）
- 具体的なコード例付き
- 実装後のチェックリスト完備

---

## 🎯 Claude Codeへの指示文（コピペ用）

```
新規WEBサイトのSEO、LLMO、UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [プロジェクト名]
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]

【実装内容】

## 1. SEO基本設定

### 1.1 layout.tsx のメタデータ設定

以下を参考に、完全なMetadata設定を実装してください：

```typescript
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "サイト名 | サービス説明・キャッチコピー",
    template: "%s | サイト名"
  },
  description: "サービスの説明文を150文字程度で記載。主要なキーワードを自然に含めつつ、ユーザーにとって魅力的な文章にする。",
  keywords: [
    "サイト名",
    "業種名",
    "サービスカテゴリ",
    "地域名 業種",
    "主要キーワード1",
    "主要キーワード2",
    "主要キーワード3"
  ],
  authors: [{ name: "会社名・運営者名" }],
  creator: "会社名",
  publisher: "会社名",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://example.com",
    siteName: "サイト名",
    title: "サイト名 | サービス説明・キャッチコピー",
    description: "サービスの説明文を150文字程度で記載。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "サイト名 - サービス説明"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "サイト名 | サービス説明",
    description: "サービスの説明文",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* フォント最適化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Performance optimization */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Google Analytics - 超遅延読み込み（10秒後またはユーザー操作後） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              // 超遅延読み込み関数
              function loadGoogleAnalytics() {
                if (window.gtagLoaded) return;
                window.gtagLoaded = true;

                const script = document.createElement('script');
                script.async = true;
                script.defer = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}';
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
                    page_title: document.title,
                    page_location: window.location.href
                  });
                };
                document.head.appendChild(script);
              }

              // ユーザー操作検知（一度だけ実行）
              const userEvents = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
              userEvents.forEach(function(event) {
                document.addEventListener(event, loadGoogleAnalytics, {
                  once: true,
                  passive: true,
                  capture: true
                });
              });

              // 10秒後にも読み込み（ユーザー操作がない場合）
              setTimeout(loadGoogleAnalytics, 10000);
            `,
          }}
        />
      </head>
      <body className={\`\${geistSans.variable} antialiased\`}>
        <div className="min-h-screen flex flex-col">
          {/* Header コンポーネント */}
          <main className="flex-grow">
            {children}
          </main>
          {/* Footer コンポーネント */}
        </div>
      </body>
    </html>
  );
}
```

### 1.2 sitemap.ts の実装

src/app/sitemap.ts を作成：

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://example.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://example.com/works',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://example.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://example.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://example.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // 他のページを追加
  ]
}
```

**優先度の目安**：
- トップページ: 1.0
- 主要サービス・製品: 0.9
- 会社情報・実績: 0.8
- サブページ: 0.6-0.7
- お問い合わせ: 0.5
- 法的ページ: 0.3

### 1.3 robots.ts の実装

src/app/robots.ts を作成：

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/dashboard/'],
    },
    sitemap: 'https://example.com/sitemap.xml',
  };
}
```


## 2. LLMO設定

### 2.1 構造化データコンポーネント作成

src/components/StructuredData.tsx を作成：

```typescript
interface StructuredDataProps {
  data: object | object[]
}

export default function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data]

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item)
          }}
        />
      ))}
    </>
  )
}
```

### 2.2 ページ別JSON-LD実装

トップページ（src/app/page.tsx）に以下を実装：

```typescript
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  // JSON-LD構造化データ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': \`\${baseUrl}/#website\`,
        url: baseUrl,
        name: 'サイト名',
        alternateName: ['別名1', '別名2'],
        description: 'サービスの説明',
        inLanguage: 'ja',
        publisher: {
          '@type': 'Organization',
          name: '会社名',
          logo: {
            '@type': 'ImageObject',
            url: \`\${baseUrl}/logo.png\`,
          },
        },
      },
      {
        '@type': 'Organization',
        '@id': \`\${baseUrl}/#organization\`,
        name: '会社名',
        alternateName: '会社略称',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: \`\${baseUrl}/logo.png\`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: '営業部',
          telephone: '+81-XX-XXXX-XXXX',
          email: 'info@example.com',
          areaServed: ['JP'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressRegion: '都道府県名',
          addressLocality: '市区町村名',
          streetAddress: '番地',
          postalCode: '郵便番号',
        },
        foundingDate: '設立年',
        sameAs: [
          // SNSのURLがあれば追加
          // 'https://twitter.com/example',
          // 'https://www.facebook.com/example',
        ],
      },
      {
        '@type': 'Service',
        '@id': \`\${baseUrl}/#service\`,
        name: 'サービス名',
        description: 'サービスの詳細説明',
        serviceType: 'サービスカテゴリ',
        provider: {
          '@type': 'Organization',
          name: '会社名',
        },
        areaServed: {
          '@type': 'Country',
          name: '日本',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ホーム',
            item: baseUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <StructuredData data={jsonLd} />

      {/* ページコンテンツ */}
      <div>
        {/* コンテンツをここに実装 */}
      </div>
    </>
  );
}
```

### 2.3 FAQページ構造化データ（FAQがある場合）

FAQコンポーネント例：

```typescript
import StructuredData from './StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
```

### 2.4 セマンティックHTML

すべてのページで以下を遵守：
- `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>` を適切に使用
- 見出しタグ（h1-h6）の階層を正しく設定（h1は1ページに1つ）
- 画像に必ずalt属性を設定


## 3. UI基本設定

### 3.1 レスポンシブデザイン
- Tailwind CSSのブレークポイント活用：
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- モバイルファースト設計（base → sm → md → lg）

### 3.2 フォント最適化
```typescript
// layout.tsx内
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',      // フォント読み込み中もテキスト表示
  preload: true,        // 重要なフォントのみtrue
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,       // サブフォントはfalse
  fallback: ['courier', 'monospace'],
});
```

### 3.3 画像最適化
```typescript
import Image from 'next/image';

// 使用例
<Image
  src="/example.jpg"
  alt="画像の説明"
  width={1200}
  height={630}
  priority={false}  // ファーストビューの画像のみtrue
  loading="lazy"    // 遅延読み込み
/>
```

### 3.4 アクセシビリティ
- aria-label を適切に設定
- キーボードナビゲーション対応（Tab, Enter, Esc）
- フォーカス表示の実装
- カラーコントラスト比 4.5:1 以上


## 4. 環境変数設定

.env.local ファイルを作成し、以下を追加：

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://example.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxx
```

.env.example も作成（実際の値は含めない）：

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=

# Analytics
NEXT_PUBLIC_GA_ID=

# Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```


## 5. 必要なファイル

### 5.1 Favicon・アイコン
public/ に以下を配置：
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png（180x180px）
- og-image.jpg または og-image.png（1200x630px）

### 5.2 Web App Manifest
public/site.webmanifest を作成：

```json
{
  "name": "サイト名",
  "short_name": "略称",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```


## 6. 実装手順

1. TodoWriteツールでタスクリスト作成
2. SEO設定（layout.tsx, sitemap.ts, robots.ts）実装
3. LLMO設定（StructuredData.tsx, JSON-LD）実装
4. UI基本設定（レスポンシブ、フォント、画像）実装
5. 環境変数設定
6. 必要ファイル配置
7. ビルド確認（npm run build）
8. 各セクション完了ごとにコミット
9. 検証実行（チェックリスト参照）


## 7. 実装後のチェックリスト

### SEO確認
- [ ] ビルドエラーがない（npm run build）
- [ ] sitemap.xml が正しく生成されている（/sitemap.xml）
- [ ] robots.txt が正しく生成されている（/robots.txt）
- [ ] OG画像（1200x630px）が存在する
- [ ] すべてのページにtitleとdescriptionが設定されている
- [ ] descriptionが各ページで重複していない
- [ ] Google Search Console に登録・検証

### LLMO確認
- [ ] 構造化データが正しい（Rich Results Test）
- [ ] JSON-LDにエラーがない
- [ ] WebSite, Organization スキーマが実装されている
- [ ] FAQがある場合、FAQPageスキーマが実装されている

### パフォーマンス確認
- [ ] Lighthouse Performance スコア 90点以上
- [ ] Lighthouse SEO スコア 95点以上
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### アクセシビリティ確認
- [ ] Lighthouse Accessibility スコア 95点以上
- [ ] キーボードのみで全機能操作可能
- [ ] 画像にalt属性が設定されている


## 8. 検証コマンド

```bash
# ビルドエラー確認
npm run build

# 開発サーバー起動
npm run dev

# Lighthouse スコア確認（別ターミナルで）
npx lighthouse http://localhost:3000 --view
```

**オンライン検証ツール**：
- 構造化データ検証: https://search.google.com/test/rich-results
- OG画像確認: https://cards-dev.twitter.com/validator
- PageSpeed Insights: https://pagespeed.web.dev/


【完了条件】
- すべてのチェックリスト項目が✅
- Lighthouseスコア90点以上
- ビルドエラーゼロ
- 構造化データエラーゼロ

よろしくお願いします。
```

---

## 📝 使い方

### Step 1: プロジェクト情報を記入
指示文内の以下を実際の値に置き換える：
- `[プロジェクト名]` → 実際のプロジェクト名
- `[プロジェクトパス]` → /mnt/c/your-project
- `[本番URL]` → https://example.com

### Step 2: コード内の値を置き換え
- `https://example.com` → 実際のURL
- `サイト名`、`会社名` → 実際の名称
- `G-XXXXXXXXXX` → Google Analytics ID
- `説明文`、`keywords` → 実際の内容
- 住所、電話番号等 → 実際の情報

### Step 3: Claude Codeに送信
完成した指示文をClaude Codeに送信

### Step 4: 実装完了を待つ
Claude Codeが自動でTodoリストを作成し、順次実装

### Step 5: 環境変数設定
.env.localに実際の値を設定

### Step 6: 画像準備
public/にfavicon、OG画像等を配置

### Step 7: 検証実行
チェックリストに従って検証

---

## 🎨 業種別カスタマイズが必要な場合

**業種別テンプレート**: [INDUSTRY-SPECIFIC-SETUP.md](./INDUSTRY-SPECIFIC-SETUP.md)

対応業種：
- 製造業・BtoB企業
- 教育・スクール・アカデミー
- リクルートサイト・採用サイト
- BtoC サービス・店舗
- LP（ランディングページ）

---

## 🚀 参考リンク

- **Next.js Metadata API**: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Google Search Central**: https://developers.google.com/search
- **Schema.org**: https://schema.org/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Lighthouse**: https://developer.chrome.com/docs/lighthouse/overview

---

**作成日**: 2025-11-04
**最終更新**: 2025-11-04
**対応フレームワーク**: Next.js 15+, React 19+
**環境依存**: なし（どのPCでも使用可能）
