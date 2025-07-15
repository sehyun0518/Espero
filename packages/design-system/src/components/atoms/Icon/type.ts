import type { IconTypes } from 'packages/design-system/src/components/atoms/Icon/icon-type';
import type { ColorsType } from 'packages/design-system/src/theme/colors';
import type { CSSProperties, SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGElement>, 'ref' | 'style'> {
  width?: number;
  height?: number;
  name: IconTypes;
  color?: ColorsType;
  style?: undefined | CSSProperties;
}
