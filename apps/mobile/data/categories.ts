import type { ImageSourcePropType } from 'react-native';
import { CAMPAIGN_MAP, type Campaign } from './campaigns';

export const CATEGORY_MAP = {
  humanitarian: {
    name: 'Humanitarian',
    image: require('../assets/sprites/heart.png'),
    id: 'humanitarian',
    accent: '#ebb5b5',
    description: 'Donate to support humanitarian efforts in Africa',
    campaigns: [
      CAMPAIGN_MAP.ke_abd,
      CAMPAIGN_MAP.alg_eid,
      CAMPAIGN_MAP.lst_cto,
    ],
  },
  health: {
    name: 'Health',
    image: require('../assets/sprites/virus.png'),
    id: 'health',
    accent: '#ebb5b5',
    description: 'Donate to campaigns helping the health sector in Africa',
    campaigns: [CAMPAIGN_MAP.sa_tsf, CAMPAIGN_MAP.lst_cto, CAMPAIGN_MAP.ke_abd],
  },
  education: {
    name: 'Education',
    image: require('../assets/sprites/wallet.png'),
    id: 'education',
    accent: '#f9d8be',
    description:
      'Donate to aid education quality improvement and delivery in Africa',
    campaigns: [CAMPAIGN_MAP.ng_ufk, CAMPAIGN_MAP.gh_evp],
  },
  sports: {
    name: 'Sports',
    image: require('../assets/sprites/target.png'),
    id: 'sports',
    accent: '#f9d8be',
    description: 'Donate to the development of sports in Africa',
    campaigns: [CAMPAIGN_MAP.gh_evp],
  },
} as Record<string, Category>;

export interface Category {
  name: string;
  image: ImageSourcePropType;
  id: string;
  accent: string;
  description: string;
  campaigns: Campaign[];
}

const categories = Object.values(CATEGORY_MAP);
export default categories;
