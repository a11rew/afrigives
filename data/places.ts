const trendingPlaces = [
  {
    name: 'Kenya',
    event: '3.5 magnitude earthquake',
    id: '1',
    added: '3 hours ago',
    article: {
      title: 'Earthquake hits coast of RAC',
      source: 'Arise News',
      link: 'https://cnn.com',
    },
    donation: {
      donatedCount: 345,
      lastDonated: '6m ago',
      target: 1000,
      donated: 395,
    },
  },
  {
    name: 'Burundi',
    event: '3.5 magnitude earthquake',
    id: '2',
    added: '3 hours ago',
    article: {
      title: 'Earthquake hits coast of RAC',
      source: 'Arise News',
      link: 'https://cnn.com',
    },
    donation: {
      donatedCount: 345,
      lastDonated: '6m ago',
      target: 1000,
      donated: 395,
    },
  },
  {
    name: 'Ghana',
    event: '3.5 magnitude earthquake',
    id: '3',
    added: '3 hours ago',
    article: {
      title: 'Earthquake hits coast of RAC',
      source: 'Arise News',
      link: 'https://cnn.com',
    },
    donation: {
      donatedCount: 345,
      lastDonated: '6m ago',
      target: 1000,
      donated: 395,
    },
  },
  {
    name: 'Lesotho',
    event: '3.5 magnitude earthquake',
    id: '4',
    added: '3 hours ago',
    article: {
      title: 'Earthquake hits coast of RAC',
      source: 'Arise News',
      link: 'https://cnn.com',
    },
    donation: {
      donatedCount: 345,
      lastDonated: '6m ago',
      target: 1000,
      donated: 395,
    },
  },
  {
    name: 'Gabon',
    event: '3.5 magnitude earthquake',
    id: '5',
    added: '3 hours ago',
    article: {
      title: 'Earthquake hits coast of RAC',
      source: 'Arise News',
      link: 'https://cnn.com',
    },
    donation: {
      donatedCount: 345,
      lastDonated: '6m ago',
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
