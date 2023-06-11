import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import normalize from '@utils/normalize';
import { Text } from '@Themed';
import { SquircleView } from 'react-native-figma-squircle';

type Props = TouchableOpacityProps & { loading?: boolean };

const PrimaryActionButton: React.FC<Props> = ({
  loading,
  disabled,
  children,
  ...rest
}) => (
  <TouchableOpacity {...(rest as TouchableOpacityProps)}>
    <SquircleView
      style={styles.button}
      squircleParams={{
        cornerSmoothing: 1,
        fillColor: '#0C6D3D',
        cornerRadius: normalize(16),
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </SquircleView>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ps-bold',
    fontSize: normalize(14),
    color: 'white',
  },
  button: {
    backgroundColor: '#0C6D3D',
    paddingVertical: normalize(18),
    marginHorizontal: 'auto',
    borderRadius: normalize(14),
    alignItems: 'center',
  },
});

export default PrimaryActionButton;
