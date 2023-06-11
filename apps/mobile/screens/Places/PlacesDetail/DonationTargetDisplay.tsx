import Colors from '@constants/Colors';
import { View, Text } from '@Themed';
import normalize from '@utils/normalize';
import { StyleSheet } from 'react-native';

interface Props {}

const DonationTargetDisplay = (props: Props): JSX.Element => {
  return (
    <View>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '40%' }]} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: normalize(16),
        }}
      >
        <Text style={styles.currentText}>NGN 74,392</Text>
        <Text style={styles.targetText}>NGN 500,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentText: {
    fontFamily: 'ps-bold',
  },
  targetText: {
    fontFamily: 'ps-bold',
    color: Colors.primary,
  },
  progressContainer: {
    position: 'relative',
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: 8,
    borderRadius: normalize(4),
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.primary,
    height: 8,
    borderRadius: normalize(4),
  },
});

export default DonationTargetDisplay;
