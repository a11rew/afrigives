import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, TextInputProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import normalize from '@utils/normalize';
import PasswordOpen from '@assets/svgs/PasswordOpen.svg';
import PasswordHidden from '@assets/svgs/PasswordHidden';
import { View } from '@Themed';

interface Props extends TextInputProps {
  label: string;
}

const FormInput = ({ label, style, ...props }: Props): JSX.Element => {
  const offset = useSharedValue(10);
  const focusAnimation = useAnimatedStyle(() => ({
    transform: [
      { translateX: withTiming(offset.value) },
      { translateY: withTiming(offset.value) },
    ],
  }));

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start', zIndex: 10 }}>
        <Animated.Text style={[styles.label, focusAnimation]}>
          {label}
        </Animated.Text>
      </View>
      <TextInput
        onFocus={() => {
          offset.value = 0;
        }}
        onEndEditing={(e) => {
          if (!e.nativeEvent.text) {
            offset.value = 10;
          }
        }}
        placeholderTextColor="#3B3B3B"
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

export const FormProtectedInput = ({
  label,
  style,
  ...props
}: Props): JSX.Element => {
  const [hidden, setHidden] = useState(true);
  const offset = useSharedValue(10);
  const focusAnimation = useAnimatedStyle(() => ({
    transform: [
      { translateX: withTiming(offset.value) },
      { translateY: withTiming(offset.value) },
    ],
  }));

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start', zIndex: 10 }}>
        <Animated.Text style={[styles.label, focusAnimation]}>
          {label}
        </Animated.Text>
      </View>
      <View
        style={[
          {
            ...styles.input,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          style,
        ]}
      >
        <TextInput
          onFocus={() => {
            offset.value = 0;
          }}
          secureTextEntry={hidden}
          textContentType="password"
          onEndEditing={(e) => {
            if (!e.nativeEvent.text) {
              offset.value = 10;
            }
          }}
          style={[{ width: '90%', fontFamily: 'ps' }]}
          placeholderTextColor="#3B3B3B"
          {...props}
        />
        <Pressable onPress={() => setHidden((e) => !e)}>
          {hidden ? <PasswordHidden /> : <PasswordOpen />}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(20),
  },
  label: {
    fontFamily: 'ps-bold',
    fontSize: normalize(14),
    color: '#0C6D3D',
    marginBottom: 2,
    zIndex: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    height: normalize(48),
    paddingHorizontal: 16,
    fontFamily: 'ps',
  },
});

export default FormInput;
