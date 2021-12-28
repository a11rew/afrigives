import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import PromoFirst from './PromoFirst';
import PromoSecond from './PromoSecond';
import PromoThird from './PromoThird';

interface Props {
  offsetAnimate: {
    transform: {
      translateX: number;
    }[];
  };
}

const PromoView = ({ offsetAnimate }: Props): JSX.Element => (
  <Animated.View style={[{ ...styles.carousel }, offsetAnimate]}>
    <PromoFirst />
    <PromoSecond />
    <PromoThird />
  </Animated.View>
);

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
  },
});

export default PromoView;
