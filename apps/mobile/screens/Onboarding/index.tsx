import { Text, View } from '@components/Themed';
import { useSwipe } from '@hooks/useSwipe';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import normalize from '@utils/normalize';
import React, { useCallback, useEffect, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import { SharedElement } from 'react-navigation-shared-element';
import PromoView from './PromoView';

const Onbooarding = (): JSX.Element => {
  // Element animations
  const navigation = useNavigation();
  const [position, setPosition] = useState(0);

  const animWidth = useSharedValue((39 / 100) * Dimensions.get('screen').width);
  const widthAnimate = useAnimatedStyle(() => ({
    width: withTiming(animWidth.value),
  }));

  const loginOpacity = useSharedValue(0);
  const loginAnimate = useAnimatedStyle(() => ({
    opacity: withTiming(loginOpacity.value),
  }));

  const backOpacity = useSharedValue(0);
  const backAnimate = useAnimatedStyle(() => ({
    opacity: withTiming(backOpacity.value),
  }));

  const offset = useSharedValue(position);
  const offsetAnimate = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(offset.value) }],
  }));

  // Carousel effect
  useEffect(() => {
    if (position === 2) {
      animWidth.value = (90 / 100) * Dimensions.get('screen').width;
      loginOpacity.value = 1;
    } else {
      animWidth.value = (39 / 100) * Dimensions.get('screen').width;
      loginOpacity.value = 0;
    }

    if (position > 0) {
      backOpacity.value = 1;
    } else {
      backOpacity.value = 0;
    }
  }, [animWidth, backOpacity, loginOpacity, position]);

  // Carousel effect functions
  const moveForward = useCallback(() => {
    if (position < 2) {
      setPosition((e) => {
        offset.value = -((e + 1) * Dimensions.get('screen').width);
        return e + 1;
      });
    }
  }, [offset, position]);

  const moveBackward = useCallback(() => {
    if (position > 0) {
      setPosition((e) => {
        offset.value = (1 - e) * Dimensions.get('screen').width;
        return e - 1;
      });
    } else {
      //
    }
    return true;
  }, [offset, position]);

  // Handle back button when focused and relinquish when not
  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        moveBackward
      );

      return () => backHandler.remove();
      // Disabling because the position directly affects the behavior of the listener registered here
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, moveBackward])
  );

  const { onTouchStart, onTouchEnd } = useSwipe(moveForward, moveBackward, 6);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SharedElement id="afriLogo">
          <Text style={styles.logo}>Afrigives</Text>
        </SharedElement>
        <Animated.View style={[styles.backButton, backAnimate]}>
          <Pressable style={styles.backButton} onPress={moveBackward}>
            <Icon name="arrowleft" size={20} />
          </Pressable>
        </Animated.View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingBottom: '3%',
        }}
      >
        <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <PromoView offsetAnimate={offsetAnimate} />
        </View>

        <View
          style={{
            height: '19%',
          }}
        >
          <View style={styles.carouselDots}>
            <CarouselDot active={position === 0} />
            <CarouselDot active={position === 1} />
            <CarouselDot active={position === 2} />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Animated.View style={[widthAnimate]}>
              <TouchableOpacity
                onPress={
                  position === 2
                    ? () => {
                        navigation.navigate('Signup');
                      }
                    : moveForward
                }
              >
                <SquircleView
                  style={styles.actionButton}
                  squircleParams={{
                    cornerSmoothing: 1,
                    cornerRadius: 8,
                    fillColor: '#0C6D3D',
                  }}
                >
                  {position === 2 ? (
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'ps-bold',
                        fontSize: normalize(14),
                      }}
                    >
                      Register to donate
                    </Text>
                  ) : (
                    <Icon name="arrowright" color="#fff" size={20} />
                  )}
                </SquircleView>
              </TouchableOpacity>
            </Animated.View>

            <View>
              <Pressable
                disabled={position !== 2}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                <Animated.Text style={[styles.loginText, loginAnimate]}>
                  Already have an account? Login
                </Animated.Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const CarouselDot = ({ active }: { active?: boolean }) => (
  <View
    style={{
      ...styles.carouselDot,
      backgroundColor: active ? '#0C6D3D' : '#DDDDDD',
    }}
  />
);

const styles = StyleSheet.create({
  logoContainer: {
    position: 'relative',
    marginTop: '7%',
    marginBottom: '2%',
    alignItems: 'center',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    backgroundColor: 'transparent',
  },

  backButton: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    left: 10,
  },

  logo: {
    fontFamily: 'ps-bold',
    fontSize: normalize(26),
    color: '#0C6D3D',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },

  h1: {
    fontFamily: 'ps-bold',
    paddingHorizontal: normalize(80),
    textAlign: 'center',
    marginBottom: '15%',
  },

  carouselDots: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: normalize(32),
  },

  carouselDot: {
    width: normalize(12),
    height: normalize(12),
    marginRight: 12,
    borderRadius: 9999,
  },

  loginText: {
    fontFamily: 'ps-bold',
    fontSize: normalize(14),
    marginTop: '12%',
  },

  actionButton: {
    paddingVertical: normalize(18),
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
});

export default Onbooarding;
