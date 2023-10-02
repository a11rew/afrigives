import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

const SplashView = (): JSX.Element => {
  const navigation = useNavigation();

  const positions = useSharedValue({
    sp_1: normalize(-300),
    sp_2: normalize(-300),
    sp_3: normalize(-260),
    h2: 0,
  });

  const Anim_1 = useAnimatedStyle(() => ({
    bottom: withTiming(positions.value.sp_1, {
      duration: 600,
    }),
  }));

  const Anim_2 = useAnimatedStyle(() => ({
    left: withTiming(positions.value.sp_2, {
      duration: 600,
    }),
  }));

  const Anim_3 = useAnimatedStyle(() => ({
    top: withTiming(positions.value.sp_3, {
      duration: 600,
    }),
  }));

  const Anim_Text = useAnimatedStyle(() => ({
    opacity: withTiming(positions.value.h2, {
      duration: 600,
    }),
  }));

  useEffect(() => {
    positions.value = {
      sp_1: normalize(-90),
      sp_2: normalize(-150),
      sp_3: normalize(-50),
      h2: 1,
    };

    setTimeout(() => {
      positions.value = {
        sp_1: normalize(-300),
        sp_2: normalize(-300),
        sp_3: normalize(-300),
        h2: 0,
      };
    }, 1200);

    // @ts-expect-error - screen name not registered right
    setTimeout(() => navigation.navigate('SplashOnboard'), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <SharedElement id="afriLogo">
        <Text style={styles.h1}>Afrigives</Text>
      </SharedElement>
      <Animated.Text style={[styles.h2, Anim_Text]}>Community</Animated.Text>
      <Animated.Image
        style={[styles.sprite_1, Anim_1]}
        source={require('../../assets/sprites/splash_flower.png')}
      />
      <Animated.View style={[styles.sprite_2, Anim_2]}>
        <Image source={require('../../assets/sprites/splash_flower.png')} />
      </Animated.View>
      <Animated.Image
        style={[styles.sprite_3, Anim_3]}
        source={require('../../assets/sprites/splash_flower.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontFamily: 'ps-bold',
    fontSize: normalize(40),
    color: '#0C6D3D',
  },
  h2: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
  },
  sprite_1: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: normalize(-90),
  },
  sprite_2: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    top: normalize(200),
    left: '-40%',
    justifyContent: 'center',
    transform: [{ rotate: '90deg' }],
  },

  sprite_3: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: normalize(-30),
    right: normalize(-50),
    transform: [{ rotateX: '180deg' }],
  },
});

export default SplashView;
