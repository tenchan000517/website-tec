# クイックセットアップコマンド（簡易版）

## 🚀 1分で始める - Claude Codeへのコピペ指示文

```
新規WEBサイトのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: [プロジェクト名]
ディレクトリ: [プロジェクトパス]
サイトURL: [本番URL]

【実装内容】

## 1. SEO基本設定

### 1.1 layout.tsx のMetadata設定
以下の例を参考に、完全なMetadata設定を実装：

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "サイト名 | サービス説明",
    template: "%s | サイト名"
  },
  description: "サービスの説明文を150文字程度で記載。主要なキーワードを自然に含める。",
  keywords: ["キーワード1", "キーワード2", "キーワード3", "地域名", "業種名"],
  authors: [{ name: "会社名" }],
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
    title: "サイト名 | サービス説明",
    description: "サービスの説明文",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "サイト名"
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics - 遅延読み込み */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              function loadGoogleAnalytics() {
                if (window.gtagLoaded) return;
                window.gtagLoaded = true;

                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', 'G-XXXXXXXXXX');
                };
                document.head.appendChild(script);
              }

              const userEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];
              userEvents.forEach(event => {
                document.addEventListener(event, loadGoogleAnalytics, {
                  once: true,
                  passive: true
                });
              });

              setTimeout(loadGoogleAnalytics, 10000);
            `,
          }}
        />
      </head>
      <body>
        {children}
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
      url: 'https://example.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // 他のページを追加
  ]
}
```

### 1.3 robots.ts の実装
src/app/robots.ts を作成：

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://example.com/sitemap.xml',
  };
}
```

## 2. LLMO設定

### 2.1 StructuredData.tsx コンポーネント作成
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

### 2.2 トップページにJSON-LD実装
page.tsx に以下を追加：

```typescript
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://example.com/#website',
        url: 'https://example.com',
        name: 'サイト名',
        description: 'サービスの説明',
        inLanguage: 'ja',
        publisher: {
          '@type': 'Organization',
          name: '会社名',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://example.com/#organization',
        name: '会社名',
        url: 'https://example.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://example.com/logo.png',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: '営業',
          telephone: '+81-XX-XXXX-XXXX',
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      {/* ページコンテンツ */}
    </>
  );
}
```

## 3. UI基本設定

### 3.1 画像最適化
- next/image コンポーネント使用
- width, height 属性必須
- loading="lazy" 設定

### 3.2 レスポンシブデザイン
- Tailwind CSS のブレークポイント活用
- モバイルファースト設計

### 3.3 アクセシビリティ
- aria-label 適切に設定
- キーボードナビゲーション対応

## 4. 環境変数設定

.env.local ファイルに以下を追加：

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxx
```

## 5. 必要なファイル

public/ に以下を配置：
- favicon.ico
- favicon-16x16.png
- apple-touch-icon.png（180x180px）
- og-image.jpg（1200x630px）
- site.webmanifest

site.webmanifest の例：
```json
{
  "name": "サイト名",
  "short_name": "略称",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

【完了条件】
- ビルドエラーゼロ
- Lighthouseスコア90点以上
- 構造化データエラーゼロ

TodoWriteツールでタスク管理して、順次実装お願いします。
```

---

## 📝 使い方

### Step 1: プロジェクト情報を記入
上記の `[プロジェクト名]`、`[プロジェクトパス]`、`[本番URL]` を実際の値に置き換える

### Step 2: サイト固有の情報を記入
- `https://example.com` → 実際のURL
- `サイト名`、`会社名` → 実際の名称
- `G-XXXXXXXXXX` → 実際のGoogle Analytics ID
- `説明文` → 実際のサービス説明
- `keywords` → 実際のキーワード

### Step 3: Claude Codeに送信
コピペしてClaude Codeに送信

### Step 4: 実装待ち
Claude Codeが自動でTodoリストを作成し、順次実装

### Step 5: 環境変数設定
実装後に.env.localファイルに実際の値を設定

### Step 6: 画像配置
public/にfavicon、OG画像を配置

---

## 🎯 さらに詳しい説明が必要な場合

**完全版ドキュメント**: [SETUP-COMMAND-TEMPLATE.md](./SETUP-COMMAND-TEMPLATE.md)

---

## 例：実際の使用例

```
新規WEBサイトのSEO・LLMO・UI基本セットアップを実装してください。

【対象プロジェクト】
プロジェクト名: ABC製作所リクルートサイト
ディレクトリ: /mnt/c/abc-recruit
サイトURL: https://recruit.abc-corp.co.jp

（以下、上記のコード例をそのまま貼り付け）
```

---

**作成日**: 2025-11-04
**最終更新**: 2025-11-04
**所要時間**: 実装30-60分程度
**環境依存**: なし（どのPCでも使用可能）
