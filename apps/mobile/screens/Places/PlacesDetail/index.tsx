import Hyperlink from '@assets/svgs/Hyperlink.svg';
import DonateButton from '@components/DonateButton';
import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { findTrendingPlace } from '@data/places';
import { AntDesign } from '@expo/vector-icons';
import normalize from '@utils/normalize';
import { openBrowserAsync } from 'expo-web-browser';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { type PlacesStackScreenProps } from 'types';
import DonationTargetDisplay from './DonationTargetDisplay';

type Props = PlacesStackScreenProps<'PlacesDetail'>;

const PlacesDetail = ({ route }: Props): JSX.Element => {
  const place = findTrendingPlace(route.params.id);
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Places" />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.name}>{place?.name}</Text>
              <Text style={styles.added}>{place?.added}</Text>
            </View>
            <Text style={styles.event}>{place?.event}</Text>
          </View>
          <View style={styles.articleCard}>
            <View>
              <Text style={styles.articleTitle}>{place?.article.title}</Text>
              <Text style={styles.articleSource}>{place?.article.source}</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() =>
                openBrowserAsync(place?.article.link || 'https://cnn.com')
              }
            >
              <Hyperlink />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.quickDonate}>Quick donate</Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.donated}>
                  {place?.donation.donatedCount} people have donated to this
                  campaign
                </Text>
                <AntDesign
                  name="arrowright"
                  size={normalize(20)}
                  color="black"
                />
              </View>
              <Text
                style={{
                  fontFamily: 'ps-bold',
                  opacity: 0.56,
                  marginBottom: normalize(24),
                }}
              >
                Last donation {place?.donation.lastDonated}
              </Text>
              <DonationTargetDisplay />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
            }}
          >
            <View
              style={{
                width: '12%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'ps-bold',
                  fontSize: normalize(16),
                  color: Colors.primary,
                }}
              >
                NGN
              </Text>
            </View>
            <View style={{ width: '85%', marginLeft: '2%' }}>
              <TextInput
                keyboardType="number-pad"
                style={styles.inputContainer}
                placeholder="Enter your donation amount here"
              />
            </View>
          </View>
        </View>
        <View style={{ paddingBottom: normalize(20) }}>
          <DonateButton />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    paddingTop: normalize(24),
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    borderRadius: normalize(16),
    borderColor: '#CCCCCC',
    fontFamily: 'ps-medium',
    fontSize: normalize(15),
    borderWidth: 1,
  },
  name: {
    fontFamily: 'ps-bold',
    fontSize: normalize(18),
  },
  added: {
    fontFamily: 'ps-bold',
    color: Colors.primary,
  },
  event: {
    color: Colors.error,
    fontFamily: 'ps-bold',
    marginTop: normalize(8),
  },
  articleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginTop: normalize(24),
    padding: normalize(20),
    borderRadius: normalize(8),
  },
  articleTitle: {
    fontFamily: 'ps-bold',
  },
  articleSource: {
    fontFamily: 'ps-bold',
    opacity: 0.56,
    marginTop: 2,
  },
  quickDonate: {
    fontFamily: 'ps-bold',
    marginTop: normalize(48),
    fontSize: normalize(16),
    color: Colors.primary,
  },
  donated: {
    fontFamily: 'ps-bold',
    fontSize: normalize(15),
    marginTop: normalize(12),
    marginBottom: normalize(8),
  },
});

export default PlacesDetail;
