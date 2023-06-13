import EditIcon from '@assets/icons/edit.svg';
import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { formatName } from '@screens/Home/Header';
import { type RootState } from '@store/index';
import normalize from '@utils/normalize';
import { DateTime } from 'luxon';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const DonationStats = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.auth.user);
  const name =
    useSelector(
      (state: RootState) => state.auth.user?.user_metadata.name as string
    ) || 'Stranger';

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Donation stats" />
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <Image
            style={styles.image}
            source={require('../../assets/images/male.png')}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.name}>{formatName(name)}</Text>
            <EditIcon />
          </View>
        </View>

        <View style={styles.statBlock}>
          <View>
            <Text style={styles.heading}>Member since</Text>
            <Text style={styles.content}>
              {user
                ? DateTime.fromISO(user?.created_at).toLocaleString(
                    DateTime.DATE_FULL
                  )
                : 'You never joined us :/'}
            </Text>
          </View>
        </View>
        <View style={styles.statBlock}>
          <View>
            <Text style={styles.heading}>Campaigns donated to</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={styles.emphasis}>30</Text>
              <Text style={styles.content}> campaigns</Text>
            </View>
          </View>
        </View>
        <View style={styles.statBlock}>
          <View>
            <Text style={styles.heading}>Member since</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={styles.emphasis}>22</Text>
              <Text style={styles.content}> cloths donated</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity disabled style={[styles.statBox, { opacity: 0.5 }]}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.heading}>Your donation group</Text>
            <Text style={styles.content}>
              You&apos;re not in a donation group yet.
            </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity disabled style={[styles.statBox, { opacity: 0.5 }]}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.heading}>Your history</Text>
            <Text style={styles.content}>Request hardcover summary</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingHorizontal: '3%',
  },
  imageBlock: {
    alignItems: 'center',
  },
  image: {
    height: normalize(64),
    aspectRatio: 1,
    borderRadius: normalize(24),
    marginBottom: normalize(16),
  },
  name: {
    fontSize: normalize(18),
    fontFamily: 'ps-bold',
    marginRight: normalize(8),
  },
  heading: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(8),
  },
  content: {
    fontFamily: 'ps-bold',
    opacity: 0.56,
  },
  statBlock: {
    marginVertical: '5%',
  },
  emphasis: {
    color: Colors.primary,
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    opacity: 1,
  },
  statBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: normalize(20),
    borderRadius: 8,
    marginVertical: '3%',
  },
});

export default DonationStats;
