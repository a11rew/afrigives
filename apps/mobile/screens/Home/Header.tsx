import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

import Notif from '@assets/svgs/Notif.svg';
import normalize from '@utils/normalize';
import { RootState } from '@store/index';
import { View, Text } from '@components/Themed';

const HomeHeader = (): React.ReactElement => {
  const name =
    useSelector((state: RootState) => state.auth.user?.user_metadata.name) ||
    'Stranger';

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

      <View>
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
