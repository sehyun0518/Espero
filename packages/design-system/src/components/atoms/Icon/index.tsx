import { iconMap } from 'packages/design-system/src/components/atoms/Icon/icon-type';
import { colors } from 'packages/design-system/src/theme/colors';
import { View } from 'react-native';
import type { IconProps } from './type';

export const Icon = ({ name, width = 25, height = 24, color = 'white' }: IconProps): React.ReactNode => {
  const SvgIcon = iconMap[name];
  return (
    <View style={{ width: width, height: height }}>
      <SvgIcon fill={colors[color]} width="100%" height="100%" style={{ color: colors[color] }} />
    </View>
  );
};
