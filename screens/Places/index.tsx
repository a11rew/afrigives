import { StyleSheet } from 'react-native';
import { View, Text } from '@Themed';

interface Props {}

const Places = (props: Props): JSX.Element => {
  return (
    <View>
      <Text>Places</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Places;
