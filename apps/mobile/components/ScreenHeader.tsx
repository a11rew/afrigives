import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  title: string;
  noBack?: boolean;
}

const ScreenHeader: React.FC<Props> = ({ title, noBack }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {!noBack && (
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
        )}
        <Text style={[styles.logo, { left: noBack ? 10 : 45 }]}>{title}</Text>
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
    fontFamily: 'sg-bold',
    fontSize: normalize(20),
  },
});

export default ScreenHeader;
