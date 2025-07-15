import { styles } from 'packages/design-system/src/components/atoms/Divider/style';
import type { DividerProps } from 'packages/design-system/src/components/atoms/Divider/type';
import { View } from 'react-native';

export const Divider = ({ weight = 'thin', direction = 'horizon', style }: DividerProps) => {
  const strokeWidth = weight === 'thin' ? 1 : 8;

  return (
    <View
      style={[
        styles.container,
        { maxHeight: direction === 'horizon' ? strokeWidth : undefined },
        {
          maxWidth: direction === 'vertical' ? strokeWidth : undefined,
          borderRadius: direction === 'vertical' ? strokeWidth : 0,
        },
        style,
      ]}
    ></View>
  );
};
