import { useAuth } from '@clerk/clerk-expo';
import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { resetSkipAuth } from '@store/authSlice';
import normalize from '@utils/normalize';
import React from 'react';
import {
  ScrollView,
  Share,
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Language from './Language';
import Notifications from './Notifications';

const AppSettings = (): JSX.Element => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      dispatch(resetSkipAuth());
      await auth.signOut();
    } catch (error) {
      console.error(error);
      //  Error reporting later on
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Settings" />
      <ScrollView contentContainerStyle={{ padding: '3%' }}>
        <Text style={styles.heading}>App settings</Text>
        <SettingsCard
          title="Change language"
          // @ts-expect-error - screen name not registered right
          onPress={() => navigation.navigate('Language')}
        >
          English
        </SettingsCard>
        <SettingsCard
          title="Notification preference"
          // @ts-expect-error - screen name not registered right
          onPress={() => navigation.navigate('Notifications')}
        >
          Choose notifications to recieve
        </SettingsCard>
        <View
          style={{ borderBottomWidth: 1, marginVertical: '5%', opacity: 0.16 }}
        />
        <Text style={styles.heading}>General settings</Text>
        <SettingsCard title="Logout" onPress={handleLogout}>
          Logout on this device
        </SettingsCard>
        <SettingsCard
          title="Share"
          onPress={() =>
            Share.share({ message: 'https://afrigives.a11rew.dev' })
          }
        >
          Share app
        </SettingsCard>
      </ScrollView>
    </View>
  );
};

interface SettingsCardProps {
  title: string;
}

const SettingsCard: React.FC<TouchableOpacityProps & SettingsCardProps> = ({
  title,
  children,
  ...rest
}) => (
  <TouchableOpacity style={styles.cardContainer} {...rest}>
    <View style={styles.titleBlock}>
      <Text style={styles.cardH1}>{title}</Text>
      <Text style={styles.cardH2}>{children}</Text>
    </View>
    <View
      style={{
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <View style={styles.button}>
        <AntDesign name="arrowright" size={normalize(16)} color="black" />
      </View>
    </View>
  </TouchableOpacity>
);

const Stack = createNativeStackNavigator();

const AppSettingsStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="Settings"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Settings" component={AppSettings} />
    <Stack.Screen name="Language" component={Language} />
    <Stack.Screen name="Notifications" component={Notifications} />
  </Stack.Navigator>
);

export default AppSettingsStack;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'sg-bold',
    color: Colors.primary,
    fontSize: normalize(16),
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
    paddingVertical: normalize(4),
    marginTop: '5%',
  },
  cardH1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
  },
  cardH2: {
    opacity: 0.56,
    marginTop: normalize(4),
    fontFamily: 'sg-bold',
  },

  button: {
    backgroundColor: '#F5F5F5',
    width: '65%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
  },
  h1: {
    fontFamily: 'sg-bold',
    color: '#0C6D3D',
    fontSize: normalize(16),
    marginTop: normalize(20),
  },
  titleBlock: {
    width: '70%',
  },
});
