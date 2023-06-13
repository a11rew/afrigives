import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export default layout;
