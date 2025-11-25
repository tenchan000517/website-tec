'use client';

import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface OgpData {
  ogImage: string | null;
  title: string;
  description: string;
  favicon: string | null;
}

interface ProjectCardProps {
  name: string;
  url: string;
  category: string;
}

export default function ProjectCard({ name, url, category }: ProjectCardProps) {
  const [ogpData, setOgpData] = useState<OgpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOgp = async () => {
      try {
        const response = await fetch(`/api/ogp?url=${encodeURIComponent(url)}`);
        if (response.ok) {
          const data = await response.json();
          setOgpData(data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOgp();
  }, [url]);

  const displayTitle = ogpData?.title || name;
  const displayDescription = ogpData?.description || '';
  const domain = new URL(url).hostname;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group"
    >
      {/* OGP画像 */}
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : ogpData?.ogImage ? (
          <img
            src={ogpData.ogImage}
            alt={displayTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-white text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>
          </div>
        )}
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {ogpData?.favicon && (
            <img
              src={ogpData.favicon}
              alt=""
              className="w-4 h-4"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          <span className="text-xs text-gray-500">{domain}</span>
          <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
        </div>

        <h3 className="font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {displayTitle}
        </h3>

        {displayDescription && (
          <p className="text-sm text-gray-600 line-clamp-2">{displayDescription}</p>
        )}

        <div className="mt-3">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
    </a>
  );
}
