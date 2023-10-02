import Colors from '@constants/Colors';
import { View } from '@Themed';
import normalize from '@utils/normalize';
import { useState } from 'react';
import { StyleSheet, Switch, Text } from 'react-native';

const SwitchInput = ({
  title,
  on,
  subtitle,
  containerStyle,
  value,
  onValueChange,
}: {
  title: string;
  on?: boolean;
  subtitle?: string;
  containerStyle?: Record<string, unknown>;
  value?: boolean;
  onValueChange?: () => void;
}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(on);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={[styles.cardContainer, containerStyle]}>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        {subtitle != null ? (
          <Text style={styles.cardState}>{subtitle}</Text>
        ) : (
          <Text style={styles.cardState}>{isEnabled ? 'On' : 'Off'}</Text>
        )}
      </View>
      <Switch
        trackColor={{ false: '#0C6D3D29', true: Colors.primary }}
        thumbColor="#fff"
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange ?? toggleSwitch}
        value={value ?? isEnabled}
      />
    </View>
  );
};

export default SwitchInput;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '4%',
  },
  cardTitle: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(6),
  },
  cardState: {
    fontFamily: 'ps-bold',
    opacity: 0.56,
  },
});
