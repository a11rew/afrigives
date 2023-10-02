export const CAMPAIGN_MAP = {
  ng_ufk: {
    name: 'Uniform For Kids Campaign',
    locale: 'Nigeria',
    image: {
      uri: buildCDNUrl('ng_ufk.jpg'),
    },
    date: 'May 23, 2023',
    id: 'ng_ufk',
    about:
      'As the new school session begins, about 67% of Nigerian school children won’t be properly dressed to classes.\n\nWe saw the problem and decided to do something about it. Our organisation, giveclothes.org aims to bring this number down to the barest minimum, and we need your help to do it.',
    donatedCount: 543,
  },
  sa_tsf: {
    name: 'The Smile Foundation',
    locale: 'South Africa',
    image: {
      uri: buildCDNUrl('sa_tsf.jpg'),
    },
    date: 'December 1, 2022',
    id: 'sa_tsf',
    donatedCount: 127,
    about: `Every child should be able to find joy, no matter their circumstances. By donating to Smile Foundation, you’ll be helping children affected by facial abnormalities and burns in South Africa.
\nEvery little bit counts towards building a better life for these kids, one that’s filled with confidence and possibility.
    `,
    externalLink: 'https://smilefoundationsa.org/',
  },
  lst_cto: {
    name: 'Clothe the Old Campaign',
    locale: 'Lesotho',
    image: {
      uri: buildCDNUrl('lst_cto.jpg'),
    },
    date: 'September 5, 2022',
    id: 'lst_cto',
    donatedCount: 68,
    about: `The elderly are the most vulnerable in our society, and we need to do more to protect them. \n\nWe’re seeking donations to help provide clothing for the elderly in Lesotho, and you can help us reach our goal.`,
  },
  alg_eid: {
    name: 'Eid Campaign',
    locale: 'Algeria',
    image: {
      uri: buildCDNUrl('alg_eid.jpeg'),
    },
    date: 'January 12, 2023',
    id: 'alg_eid',
    donatedCount: 302,
    about: `Eid is a time of celebration, but not everyone can afford to celebrate.\n\nThis Eid, we’re seeking donations to help provide clothing for the less privileged in Algeria, helping them celebrate the season in style.`,
  },
  ke_abd: {
    name: 'Aberdare Wildfire Relief',
    locale: 'Kenya',
    image: {
      uri: buildCDNUrl('ke_abd.jpg'),
    },
    date: 'July 2, 2022',
    id: 'ke_abd',
    donatedCount: 102,
    about: `The Aberdare National Park is a vital water catchment area in Kenya, but it’s under threat from wildfires.\n\nWe’re seeking donations to help the Kenya Wildlife Service put out the fires and protect the park.`,
  },
  gh_evp: {
    name: 'Everybody Plays',
    locale: 'Ghana',
    image: {
      uri: buildCDNUrl('gh_evp.jpeg'),
    },
    date: 'August 1, 2023',
    id: 'gh_evp',
    donatedCount: 6,
    about:
      "Football is a unifying force in Ghana, but not everyone can afford to play safely and in an organised manner. \n\nWe're seeking donations to setup training camps and provide football kits for kids in Ghana, helping them play the game they know and love.",
  },
} as Record<string, Campaign>;

export type Campaign = {
  name: string;
  locale: string;
  image: {
    uri: string;
  };
  date: string;
  id: string;
  about: string;
  donatedCount: number;
  externalLink?: string;
};

function buildCDNUrl(asset: string, production = false) {
  const HOSTED_WEB_URL = 'https://afrigives.a11rew.dev';
  const width = production ? 1920 : 382;

  return `${HOSTED_WEB_URL}/_next/image?url=${HOSTED_WEB_URL}/assets/${asset}&q=100&w=${width}`;
}

const campaigns = Object.values(CAMPAIGN_MAP);

export default campaigns;
