import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import normalize from '@utils/normalize';
import { Text } from '@Themed';

type Props = TouchableOpacityProps & { loading?: boolean };

const PrimaryActionButton: React.FC<Props> = ({
  loading,
  disabled,
  children,
  ...rest
}) => (
  <TouchableOpacity
    style={{
      ...styles.button,
      backgroundColor: disabled
        ? 'rgba(12, 109, 61, 0.4)'
        : 'rgba(12, 109, 61, 1)',
    }}
    {...(rest as TouchableOpacityProps)}
  >
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={styles.text}>{children}</Text>
    )}
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
