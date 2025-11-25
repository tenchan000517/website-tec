import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OGPFetcher/1.0)',
      },
      next: { revalidate: 86400 }, // 24時間キャッシュ
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch URL' }, { status: 500 });
    }

    const html = await response.text();

    // OGP画像を抽出
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);

    // OGPタイトルを抽出
    const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:title["']/i);

    // OGP説明を抽出
    const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:description["']/i);

    // フォールバック: 通常のtitleタグ
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);

    // フォールバック: meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);

    // favicon を抽出
    const faviconMatch = html.match(/<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']+)["']/i)
      || html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["'](?:shortcut )?icon["']/i);

    const ogImage = ogImageMatch?.[1] || null;
    const title = ogTitleMatch?.[1] || titleMatch?.[1] || '';
    const description = ogDescMatch?.[1] || descMatch?.[1] || '';
    const favicon = faviconMatch?.[1] || null;

    // 相対パスを絶対パスに変換
    const baseUrl = new URL(url);
    const resolveUrl = (path: string | null) => {
      if (!path) return null;
      if (path.startsWith('http')) return path;
      if (path.startsWith('//')) return `${baseUrl.protocol}${path}`;
      if (path.startsWith('/')) return `${baseUrl.origin}${path}`;
      return `${baseUrl.origin}/${path}`;
    };

    return NextResponse.json({
      ogImage: resolveUrl(ogImage),
      title: title.trim(),
      description: description.trim(),
      favicon: resolveUrl(favicon),
    });
  } catch (error) {
    console.error('OGP fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch OGP data' }, { status: 500 });
  }
}
