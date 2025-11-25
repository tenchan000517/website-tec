export interface Project {
  name: string;
  url: string;
  category: 'yumesuta' | 'relic' | 'find-to-do' | 'nft' | 'game' | 'other';
}

export const projects: Project[] = [
  // ゆめスタ系
  { name: 'yumesuta-hp', url: 'https://yumesuta.com', category: 'yumesuta' },
  { name: 'yumesuta-academy-lp', url: 'https://academy.yumesuta.com', category: 'yumesuta' },
  { name: 'engineer-course', url: 'https://course.yumesuta.com', category: 'yumesuta' },
  { name: 'mbti-app', url: 'https://mbti.yumesuta.com', category: 'yumesuta' },
  { name: 'yumesuta-company-form', url: 'https://company.yumesuta.com', category: 'yumesuta' },
  { name: 'yumesuta-survey', url: 'https://survey.yumesuta.com', category: 'yumesuta' },
  { name: 'yumesuta-management-system', url: 'https://yumesuta-management-system.vercel.app', category: 'yumesuta' },
  { name: 'yumesuta-portfolio', url: 'https://yumesuta-portfolio.vercel.app', category: 'yumesuta' },

  // Relic系
  { name: 'relic-event-lp', url: 'https://event.relic-v.com', category: 'relic' },
  { name: 'relimobva', url: 'https://mobile.relic-v.com', category: 'relic' },
  { name: 'relimoba-simulator', url: 'https://simulator.relic-v.com', category: 'relic' },

  // Find To Do系
  { name: 'nagoya-boost', url: 'https://app.find-to-do.com', category: 'find-to-do' },
  { name: 'find-to-do-site', url: 'https://find-to-do.com', category: 'find-to-do' },
  { name: 'find-to-do-brochure', url: 'https://find-to-do-brochure.vercel.app', category: 'find-to-do' },

  // NFT/Web3系
  { name: 'satoshi-nakamoto-app', url: 'https://www.dotsatoshi.xyz', category: 'nft' },
  { name: 'villain-burn-nft', url: 'https://villain-burn-nft.vercel.app', category: 'nft' },
  { name: 'nft-mint-site3', url: 'https://nft-mint-site3.vercel.app', category: 'nft' },
  { name: '0xmavillain', url: 'https://0xmavillain.vercel.app', category: 'nft' },

  // ゲーム系
  { name: 'alien-tap-game4', url: 'https://alien-tap-game4.vercel.app', category: 'game' },

  // ツール/その他
  { name: 'instagram-manga-generator', url: 'https://instagram-manga-generator.vercel.app', category: 'other' },
  { name: 'web-template-library', url: 'https://web-template-library.vercel.app', category: 'other' },
  { name: 'works', url: 'https://works-jet.vercel.app', category: 'other' },
  { name: 'ui', url: 'https://ui-two-pied.vercel.app', category: 'other' },
  { name: 'portfolio-site', url: 'https://tenchan.nft-mint.xyz', category: 'other' },
  { name: 'yutaka-ink-hp', url: 'https://yutaka-ink-hp.vercel.app', category: 'other' },
  { name: 'community-tool', url: 'https://community-tool.vercel.app', category: 'other' },
  { name: 'link-collection', url: 'https://link-collection-seven.vercel.app', category: 'other' },
  { name: 'kurimaro', url: 'https://kurimaro.vercel.app', category: 'other' },
];

export const categoryLabels: Record<Project['category'], string> = {
  'yumesuta': 'ゆめスタ',
  'relic': 'Relic',
  'find-to-do': 'Find To Do',
  'nft': 'NFT/Web3',
  'game': 'ゲーム',
  'other': 'その他',
};