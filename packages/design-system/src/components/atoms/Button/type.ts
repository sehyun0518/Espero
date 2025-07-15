import { IconTypes } from 'packages/design-system/src/components/atoms/Icon/icon-type';
import type { GestureResponderEvent, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { sizeMap } from './style';
import type { ColorsType } from '../../../theme/colors';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  children?: React.ReactNode | undefined;
  onPress?: (e?: GestureResponderEvent) => void | undefined | null;
  size?: ButtonSize;
  textColor?: ColorsType;
  bgColor?: ColorsType;
  style?: StyleProp<ViewStyle> | undefined;
  leftIcon?: IconTypes;
  rightIcon?: IconTypes;
}

export type ButtonSize = keyof typeof sizeMap;
