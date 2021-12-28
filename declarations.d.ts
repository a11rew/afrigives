declare module '@env';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  // Workaround  for styling individual svg paths using .svgrrc
  type AdditionalIconProps = {
    inner?: string;
    outer?: string;
  };

  const content: React.FC<SvgProps & AdditionalIconProps>;
  export default content;
}
