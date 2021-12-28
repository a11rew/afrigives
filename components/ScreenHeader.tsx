import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { View, Text } from '@Themed';
import normalize from '@utils/normalize';

interface Props {
  title: string;
}

const ScreenHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
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
        <Text style={styles.logo}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(59, 59, 59, 0.16)',
    paddingVertical: '3%',
  },
  logoContainer: {
    flexDirection: 'row',
  },

  backButton: {
    justifyContent: 'center',
    left: 10,
  },

  logo: {
    fontFamily: 'ps-bold',
    fontSize: normalize(20),
    left: 45,
  },
});

export default ScreenHeader;
