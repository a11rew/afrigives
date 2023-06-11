const campaigns = [
  {
    name: 'Uniform For Kids Campaign',
    locale: 'Nigeria',
    image: require('../assets/stock/ufk-full.jpeg'),
    date: 'May 23, 2021',
    id: '1',
    about: `As the new school session begins, about 67% of Nigerian school children won’t be properly dressed to classes. We saw the problem, we’re deciding to do something about it, and you can help.

Our organisation, givecloths.org aims to bring this number down to the bearest minimum, and over this period have received and disbursed over 3000 clothing units to schools
      `,
  },
  {
    name: 'Clothe the Old Campaign',
    locale: 'Botswana',
    image: require('../assets/stock/wmn-full.png'),
    date: 'September 11, 2021',
    id: '2',
    about: `As the new school session begins, about 67% of Nigerian school children won’t be properly dressed to classes. We saw the problem, we’re deciding to do something about it, and you can help.

Our organisation, givecloths.org aims to bring this number down to the bearest minimum, and over this period have received and disbursed over 3000 clothing units to schools
      `,
  },
  {
    name: 'Jalabunga Wildfire Relief',
    locale: 'Kenya',
    image: require('../assets/stock/wrf-full.png'),
    date: 'August 1 2021',
    id: '3',
    about: `As the new school session begins, about 67% of Nigerian school children won’t be properly dressed to classes. We saw the problem, we’re deciding to do something about it, and you can help.

Our organisation, givecloths.org aims to bring this number down to the bearest minimum, and over this period have received and disbursed over 3000 clothing units to schools
      `,
  },
];

interface Campaign {
  name: string;
  locale: string;
  image: unknown;
  date: string;
  id: string;
  about: string;
}

export const findCampaign = (id: string): Campaign | undefined => {
  return campaigns.find((e) => e.id === id);
};

export default campaigns;
