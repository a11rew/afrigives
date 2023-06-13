import {
  ImageBackground,
  type ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import normalize from '@utils/normalize';
import { View, Text } from '@components/Themed';
import campaigns from '@data/campaigns';
import { SharedElement } from 'react-navigation-shared-element';

const PopularCampaigns = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.h1}>Popular campaigns</Text>
      {campaigns.map((item) => (
        <CampaignCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          locale={item.locale}
          display={false}
        />
      ))}
    </View>
  );
};

type Props = {
  name?: string;
  locale?: string;
  image: ImageSourcePropType;
  id: string;
  display: boolean;
};

export const CampaignCard = ({
  image,
  locale,
  name,
  display,
  id,
}: Props): JSX.Element => {
  const navigation = useNavigation();

  return (
    <SharedElement id={`image.${id}`}>
      <View style={styles.cardContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Pressable
            disabled={Boolean(display)}
            onPress={() =>
              navigation.navigate('Root', {
                screen: 'Home',
                params: {
                  screen: 'Campaign',
                  params: { id },
                },
              })
            }
            style={[styles.labelContainer, { opacity: display ? 0 : 1 }]}
          >
            <View style={{ backgroundColor: 'transparent' }}>
              <Text style={styles.h2}>{locale}</Text>
              <Text style={styles.h3}>{name}</Text>
            </View>
            <Pressable>
              <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>
          </Pressable>
        </ImageBackground>

        <View style={styles.bgCardContainer}>
          <View style={styles.bgCard} />
        </View>
      </View>
    </SharedElement>
  );
};

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
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(16),
  },
  image: {
    height: normalize(228),
    borderRadius: 16,
    overflow: 'hidden',
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  h2: {
    fontFamily: 'ps-bold',
    fontSize: normalize(20),
    lineHeight: normalize(24),
    color: 'white',
  },
  h3: {
    fontFamily: 'ps',
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

export default PopularCampaigns;
