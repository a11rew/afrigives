import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { Feather } from '@expo/vector-icons';
import normalize from '@utils/normalize';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const languages = [
  'Mandarin',
  'Hindi',
  'Spanish',
  'French',
  'Arabic',
  'Bengali',
  'Russian',
  'Portuguese',
];

const Language = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Settings" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Select language</Text>
        <Text
          style={{
            opacity: 0.56,
            fontFamily: 'sg-bold',
            paddingHorizontal: '3%',
          }}
        >
          The app would need to restart to effect the changes.
        </Text>
        <LanguageCard title="English" selected />
        {languages.map((lang) => (
          <LanguageCard title={lang} key={lang} disabled />
        ))}
      </ScrollView>
    </View>
  );
};

interface LanguageCardProps {
  title: string;
  selected?: boolean;
  disabled?: boolean;
}

const LanguageCard = ({ title, selected, disabled }: LanguageCardProps) => (
  <TouchableOpacity
    style={[styles.cardContainer, { opacity: disabled ? 0.35 : 1 }]}
  >
    <Text style={styles.cardText}>{title}</Text>
    {selected && (
      <View style={styles.button}>
        <Feather name="check" size={normalize(20)} color={Colors.primary} />
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'sg-bold',
    color: Colors.primary,
    fontSize: normalize(16),
    marginVertical: '2%',
    paddingHorizontal: '3%',
  },
  container: {
    paddingVertical: '3%',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3B3B3B29',
    paddingHorizontal: '4%',
    height: normalize(75),
  },
  cardText: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
  },

  button: {
    backgroundColor: '#F5F5F5',
    width: normalize(40),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
  },
});

export default Language;
