import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  title: string;
  children: string;
}

const HeaderWithBack: React.FC<Props> = ({ title, children }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{title}</Text>
        <View style={styles.backButton}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrowleft" size={20} />
          </Pressable>
        </View>
      </View>

      <Text style={styles.h1}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },

  backButton: {
    position: 'absolute',
    height: '100%',
    width: 100,
    justifyContent: 'center',
    left: 10,
  },

  logo: {
    fontFamily: 'ps-bold',
    fontSize: 24,
    color: '#0C6D3D',
    textAlign: 'center',
  },

  h1: {
    fontFamily: 'ps-bold',
    paddingHorizontal: normalize(50),
    textAlign: 'center',
  },
});

export default HeaderWithBack;
