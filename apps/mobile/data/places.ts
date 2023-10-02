const trendingPlaces = [
  {
    name: 'Kenya',
    event: 'Raging wildfire at Aberdare',
    id: '1',
    added: '3 hours ago',
    article: {
      title: 'Kenyan forest fire spirals out of control',
      source: 'AA News',
      link: 'https://www.aa.com.tr/en/africa/kenyan-forest-fire-spirals-out-of-control/2496292',
    },
    donation: {
      donatedCount: 102,
      lastDonated: '6m ago',
      target: 500,
      donated: 102,
    },
  },
  {
    name: 'Tanzania',
    event: '5.7 magnitude earthquake',
    id: '2',
    added: '3 weeks ago',
    article: {
      title: 'A magnitude 5.7 earthquake hits Tanzania',
      source: 'BBC News',
      link: 'https://www.bbc.com/news/world-africa-37330418',
    },
    donation: {
      donatedCount: 345,
      lastDonated: '1w ago',
      target: 1000,
      donated: 395,
    },
  },
];

interface TrendingPlace {
  name: string;
  event: string;
  id: string;
  added: string;
  article: {
    title: string;
    source: string;
    link: string;
  };
  donation: {
    donatedCount: number;
    lastDonated: string;
    target: number;
    donated: number;
  };
}

export const findTrendingPlace = (id: string): TrendingPlace | undefined => {
  return trendingPlaces.find((e) => e.id === id);
};

export default trendingPlaces;
