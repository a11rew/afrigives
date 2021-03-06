/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import normalize from '@utils/normalize';
import { Text as DefaultText, View as DefaultView } from 'react-native';

// import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';

// const useThemeColor = (
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof Colors.light & keyof typeof Colors.dark
// ) => {
//   const theme = useColorScheme();
//   const colorFromProps = props[theme];

//   if (colorFromProps) {
//     return colorFromProps;
//   }
//   return Colors[theme][colorName];
// };

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export const Text = ({ style, ...otherProps }: TextProps): JSX.Element => {
  // const { style, lightColor, darkColor, ...otherProps } = props;
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const color = '#3B3B3B';

  return (
    <DefaultText
      style={[{ color, fontSize: normalize(14) }, style]}
      {...otherProps}
    />
  );
};

export const View = ({ style, ...otherProps }: ViewProps): JSX.Element => {
  // const { style, lightColor, darkColor, ...otherProps } = props;
  // const backgroundColor = useThemeColor(
  //   { light: lightColor, dark: darkColor },
  //   "background"
  // );
  const backgroundColor = 'white';

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
