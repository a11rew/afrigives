import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import normalize from '@utils/normalize';
import { Text, View } from '@Themed';
import ScreenHeader from '@components/ScreenHeader';

import InviteIcon from '@assets/icons/invite.svg';
import CupIcon from '@assets/icons/cup.svg';
import FAQIcon from '@assets/icons/faq.svg';
import RankingIcon from '@assets/icons/ranking.svg';
import SettingsIcon from '@assets/icons/settings.svg';
import React from 'react';

const More = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader noBack title="More" />
      <ScrollView>
        <MoreCard
          title="Donation groups"
          icon={<CupIcon />}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'More',
              params: {
                screen: 'DonationGroups',
              },
            })
          }
        />
        <MoreCard
          title="Invite friends"
          icon={<InviteIcon />}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'More',
              params: {
                screen: 'InviteFriends',
              },
            })
          }
        />
        <MoreCard
          title="Donation stats"
          icon={<RankingIcon />}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'More',
              params: {
                screen: 'DonationStats',
              },
            })
          }
        />
        <MoreCard
          title="FAQs"
          icon={<FAQIcon />}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'More',
              params: {
                screen: 'FAQs',
              },
            })
          }
        />
        <MoreCard
          title="App settings"
          icon={<SettingsIcon />}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'More',
              params: {
                screen: 'AppSettings',
              },
            })
          }
        />
      </ScrollView>
    </View>
  );
};

interface MoreCardProps {
  title: string;
  icon: React.ReactElement;
  onPress?: (() => void) | undefined;
}

const MoreCard = ({ title, icon, onPress }: MoreCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.titleBlock}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.cardH1}>{title}</Text>
      </View>
      <View
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <View style={styles.button}>
          <AntDesign name="right" size={normalize(14)} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(24),
    paddingHorizontal: '3%',
  },
  h1: {
    fontFamily: 'ps-bold',
    color: '#0C6D3D',
    fontSize: normalize(16),
    marginTop: normalize(20),
  },
  titleBlock: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: normalize(24),
  },
  card: {
    borderBottomColor: '#3B3B3B29',
    borderBottomWidth: 1,
    width: '106%',
    paddingHorizontal: '3%',
    paddingVertical: normalize(24),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    borderBottomColor: '#DDDDDD52',
    borderBottomWidth: 1,
    paddingVertical: normalize(24),
  },
  cardH1: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
  },

  button: {
    backgroundColor: '#F5F5F5',
    width: '65%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
  },
});

export default More;
