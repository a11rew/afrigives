import { ImageSourcePropType, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '@components/Themed';
import ScreenHeader from '@components/ScreenHeader';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { findCampaign } from '@data/campaigns';
import normalize from '@utils/normalize';

import CampaignImageCard from './CampaignImage';
import { HomeStackScreenProps } from '../../../types';

type Props = HomeStackScreenProps<'Campaign'>;

const Campaign = ({ route }: Props): JSX.Element => {
  const campaign = findCampaign(route.params.id);

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Campaign" />
      <ScrollView style={{ paddingHorizontal: '3%' }}>
        <View style={styles.titleBlock}>
          <Text style={styles.name}>{campaign?.name}</Text>
          <Text style={styles.date}>Started on {campaign?.date}</Text>
        </View>
        <View style={styles.imageContainer}>
          <CampaignImageCard image={campaign?.image as ImageSourcePropType} />
        </View>
        <View>
          <Text style={styles.about}>About</Text>
          <Text style={styles.description}>{campaign?.about}</Text>
        </View>
        <View>
          <PrimaryActionButton>Donate to campaign</PrimaryActionButton>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBlock: {
    paddingTop: '5%',
  },
  name: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
  },
  date: {
    fontFamily: 'ps',
    opacity: 0.56,
    marginTop: 2,
  },
  imageContainer: {
    marginTop: '8%',
  },
  about: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    color: '#0C6D3D',
    marginVertical: normalize(10),
  },
  description: {
    fontFamily: 'ps-bold',
    lineHeight: normalize(22),
  },
});

export default Campaign;
