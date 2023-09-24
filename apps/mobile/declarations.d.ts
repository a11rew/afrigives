declare module '*.svg' {
  import type React from 'react';
  import type { SvgProps } from 'react-native-svg';

  // Workaround  for styling individual svg paths using .svgrrc
  type AdditionalIconProps = {
    inner?: string;
    outer?: string;
  };

  const content: React.FC<SvgProps & AdditionalIconProps>;
  export default content;
}
