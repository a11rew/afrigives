import Notif from '@assets/svgs/Notif.svg';
import { useUser } from '@clerk/clerk-expo';
import { Text, View } from '@components/Themed';
import normalize from '@utils/normalize';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const HomeHeader = (): React.ReactElement => {
  const auth = useUser();
  const name = auth.user?.firstName || 'Stranger';

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/male.png')}
        />
        <View>
          <Text style={styles.greetingText}>Hi, {formatName(name)}</Text>
          <View style={styles.period}>
            <Text style={styles.periodText}>Welcome </Text>
            <Text style={{ fontSize: normalize(14) }}>👋🏿</Text>
          </View>
        </View>
      </View>

      <View style={{ opacity: 0.4 }}>
        <Notif />
      </View>
    </View>
  );
};

export const formatName = (name: string): string => name?.split(' ')[0];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
  },
  avatar: {
    width: normalize(43),
    aspectRatio: 1,
    marginRight: normalize(14),
    borderRadius: 99999,
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: normalize(16),
    fontFamily: 'ps-bold',
  },
  period: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  periodText: {
    fontSize: normalize(14),
    fontFamily: 'ps-bold',
    color: 'rgba(0, 0, 0, 0.56)',
  },
});

export default HomeHeader;
