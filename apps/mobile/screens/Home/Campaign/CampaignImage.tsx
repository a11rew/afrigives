import { View } from '@components/Themed';
import normalize from '@utils/normalize';
import {
  ImageBackground,
  StyleSheet,
  type ImageSourcePropType,
} from 'react-native';

const CampaignImageCard = ({
  image,
}: {
  image: ImageSourcePropType;
}): JSX.Element => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.bgCardContainer}>
        <View style={styles.bgCard} />
      </View>
    </View>
  );
};

export default CampaignImageCard;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    marginBottom: 24,
  },
  spriteContainer: {
    padding: normalize(16),
    borderRadius: normalize(16),
    marginRight: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
    marginBottom: normalize(16),
  },
  image: {
    height: normalize(228),
    borderRadius: 16,
    overflow: 'hidden',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  h2: {
    fontFamily: 'sg-bold',
    fontSize: normalize(20),
    lineHeight: normalize(24),
    color: 'white',
  },
  h3: {
    fontFamily: 'sg',
    fontSize: normalize(14),
    color: 'white',
  },
  labelContainer: {
    backgroundColor: '#0C6D3D8F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(24),
    zIndex: 10,
  },
  bgCard: {
    width: '97%',
    height: '100%',
    paddingHorizontal: '3%',
    borderRadius: 16,
    backgroundColor: '#0C6D3D8F',
  },
  bgCardContainer: {
    position: 'absolute',
    zIndex: -1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    transform: [{ translateY: 8 }],
  },
  list: {
    // width: "70%",
  },
  button: {
    backgroundColor: '#0C6D3D',
    borderRadius: 16,
    height: '40%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(24),
  },
});
