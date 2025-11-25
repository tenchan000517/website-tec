'use client';

import ProjectCard from './ProjectCard';

const externalWebsites = [
  { name: 'ゆめスタ HP', url: 'https://yumesuta.com', category: 'コーポレートサイト' },
  { name: 'ゆめスタアカデミー LP', url: 'https://academy.yumesuta.com', category: 'LP' },
  { name: 'エンジニアコース', url: 'https://course.yumesuta.com', category: 'LP' },
  { name: 'Relic イベント LP', url: 'https://event.relic-v.com', category: 'イベントLP' },
  { name: 'Find To Do', url: 'https://find-to-do.com', category: 'サービスサイト' },
  { name: '不動産 HP', url: 'https://yutaka-ink-hp.vercel.app', category: 'コーポレートサイト' },
  { name: 'ポートフォリオ', url: 'https://tenchan.nft-mint.xyz', category: 'ポートフォリオ' },
];

export default function ExternalWebsites() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {externalWebsites.map((site) => (
        <ProjectCard
          key={site.url}
          name={site.name}
          url={site.url}
          category={site.category}
        />
      ))}
    </div>
  );
}

export const externalWebsitesCount = externalWebsites.length;