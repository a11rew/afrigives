const categories = [
  {
    name: 'Health',
    campaigns: 10,
    image: require('../assets/sprites/virus.png'),
    id: '1',
    accent: '#ebb5b5',
    description:
      'Donate cloths to refugees and internally displaced persons across Africa',
  },
  {
    name: 'Education',
    campaigns: 22,
    image: require('../assets/sprites/wallet.png'),
    id: '2',
    accent: '#f9d8be',
    description: 'Donate cloths to aid sport related campaigns across Africa',
  },
  {
    name: 'Refugees',
    campaigns: 4,
    image: require('../assets/sprites/heart.png'),
    id: '3',
    accent: '#ebb5b5',
    description:
      'Donate cloths to campaigns helping the education sector in Africa',
  },
  {
    name: 'Sports',
    campaigns: 8,
    image: require('../assets/sprites/target.png'),
    id: '4',
    accent: '#f9d8be',
    description: 'Donate cloths to religious bodies in need across Africa',
  },
];

interface Category {
  name: string;
  campaigns: number;
  image: any;
  id: string;
  accent: string;
  description: string;
}

export const findCategory = (id: string): Category | undefined => {
  return categories.find((e) => e.id === id);
};

export default categories;
