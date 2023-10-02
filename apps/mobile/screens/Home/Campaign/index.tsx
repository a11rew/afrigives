import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import { CAMPAIGN_MAP } from '@data/campaigns';
import { useNavigation } from '@react-navigation/native';
import normalize from '@utils/normalize';
import {
  Linking,
  ScrollView,
  StyleSheet,
  type ImageSourcePropType,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { type HomeStackScreenProps } from 'types';
import { CampaignCard } from '../PopularCampaigns';

type Props = HomeStackScreenProps<'Campaign'>;

const Campaign = ({ route }: Props): JSX.Element => {
  const navigation = useNavigation();
  const campaign = CAMPAIGN_MAP[route.params.id];

  if (!campaign) {
    return (
      <View>
        <Text>Invalid campaign</Text>
      </View>
    );
  }

  const onDonatePress = () => {
    if (campaign?.externalLink) {
      const link = campaign.externalLink;
      Linking.openURL(link);
    } else {
      navigation.navigate('Root', {
        screen: 'Donate',
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Campaign" />
      <ScrollView style={{ paddingHorizontal: '3%' }}>
        <View style={styles.titleBlock}>
          <Text style={styles.name}>{campaign?.name}</Text>
          <Text style={styles.date}>Started on {campaign?.date}</Text>
        </View>
        <SharedElement id={`image.${campaign?.id}`}>
          <View style={styles.imageContainer}>
            <CampaignCard
              id={campaign?.id || 'image.0'}
              display
              image={campaign?.image as ImageSourcePropType}
            />
          </View>
        </SharedElement>
        {campaign?.about ? (
          <View>
            <Text style={styles.about}>About</Text>
            <Text style={styles.description}>{campaign?.about}</Text>
          </View>
        ) : null}
      </ScrollView>
      <View style={{ padding: '3%' }}>
        <PrimaryActionButton onPress={onDonatePress}>
          Donate to campaign
        </PrimaryActionButton>
      </View>
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
