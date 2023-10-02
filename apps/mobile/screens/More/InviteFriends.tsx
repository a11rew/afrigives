import ScreenHeader from '@components/ScreenHeader';
import Colors from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import { Share, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-qr-code';

const InviteFriends = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Invite friends" />
      <View style={{ paddingHorizontal: '3%' }}>
        <Text style={styles.h1}>Donating is better with friends</Text>
        <View style={styles.bulletBlock}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <View style={styles.bulletTextBlock}>
            <Text style={styles.bulletTextH1}>
              Send your invite links on social media
            </Text>
            <Text style={styles.bulletTextH2}>
              Share link to friends and family on social media
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            Share.share({
              message: 'https://afrigives.a11rew.dev',
            })
          }
          style={styles.linkContainer}
        >
          <View>
            <Text style={styles.link}>https://afrigives.a11rew.dev</Text>
          </View>
          <AntDesign
            name="arrowright"
            size={normalize(20)}
            color={Colors.primary}
          />
        </TouchableOpacity>

        <View style={styles.bulletBlock}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <View style={styles.bulletTextBlock}>
            <Text style={styles.bulletTextH1}>Invite friends to donate</Text>
            <Text style={styles.bulletTextH2}>
              Scan QR Code with your friends device
            </Text>
          </View>
        </View>
        <View style={styles.qr}>
          <QRCode size={normalize(200)} value="https://afrigives.a11rew.dev" />
          <Text style={styles.qrText}>Scan here</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'sg-bold',
    color: Colors.primary,
    fontSize: normalize(16),
    marginTop: normalize(20),
  },
  bulletBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '3%',
    paddingLeft: '5%',
  },
  bullet: {
    fontSize: normalize(16),
    marginRight: normalize(8),
  },
  bulletTextH1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
  },
  bulletTextH2: {
    fontFamily: 'sg-bold',
    opacity: 0.56,
    marginTop: normalize(4),
  },
  bulletTextBlock: {},
  qr: {
    alignItems: 'center',
    marginTop: '7%',
  },
  qrText: {
    fontFamily: 'sg-bold',
    color: Colors.primary,
    marginTop: '5%',
  },
  link: {
    fontFamily: 'sg-medium',
    fontSize: normalize(15),
    color: Colors.primary,
  },
  linkContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '8%',
  },
});

export default InviteFriends;
