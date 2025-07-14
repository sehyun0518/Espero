import type { IconTypes } from 'packages/design-system/src/components/atoms/Icon/icon-type';
import type { ColorsType } from 'packages/design-system/src/theme/colors';

export interface IconProps {
  width?: number;
  height?: number;
  name: IconTypes;
  color?: ColorsType;
}
