import { Image, StyleSheet } from 'react-native';
import { View, Text } from '@components/Themed';
import normalize from '@utils/normalize';

interface Props {}

const PromoThird = (props: Props): JSX.Element => (
  <View style={{ width: '100%', justifyContent: 'space-between' }}>
    <Text style={styles.h1}>
      Donate with family and friends in donation groups
    </Text>
    <View style={styles.centerContainer}>
      <View style={styles.center}>
        <View style={{ position: 'relative' }}>
          <Image
            style={{ zIndex: -10 }}
            resizeMode="cover"
            source={require('../../assets/sprites/center.png')}
          />
          <Image
            style={styles.promoImage}
            resizeMode="cover"
            source={require('../../assets/stock/wmn.png')}
          />
        </View>
        <Image
          style={{
            position: 'absolute',
            resizeMode: 'contain',
            height: normalize(260),
            aspectRatio: 1,
          }}
          source={require('../../assets/sprites/arms/arm_3.png')}
        />
      </View>

      <View style={styles.promoText}>
        <Text style={styles.promoH1}>Photo: Cloth the Old Campaign</Text>
        <Text style={styles.promoH2}>$3,829 worth donated</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'ps-bold',
    paddingHorizontal: normalize(80),
    textAlign: 'center',
    marginBottom: '15%',
  },

  h2: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    opacity: 0,
  },
  centerContainer: {
    position: 'relative',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: normalize(314),
  },

  promoImage: {
    height: normalize(45),
    width: normalize(45),
    aspectRatio: 1,
    borderRadius: 999999,
    position: 'absolute',
    top: normalize(40),
    right: 0,
    borderWidth: 2,
    borderColor: 'white',
  },

  promoText: {
    marginTop: '10%',
  },

  promoH1: {
    textAlign: 'center',
    fontFamily: 'ps-bold',
    marginBottom: 2,
  },

  promoH2: {
    color: '#0C6D3D',
    textAlign: 'center',
    fontFamily: 'ps-bold',
  },
});

export default PromoThird;
