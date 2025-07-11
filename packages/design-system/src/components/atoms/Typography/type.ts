import type { StyleProp, TextProps, TextStyle } from 'react-native';
import { typography } from './style';
// type
import type { ColorsType } from '../../../theme/colors';

export interface TypographyProps extends Omit<TextProps, 'style'> {
  children?: React.ReactNode | undefined;
  fontSize?: TypographyType;
  color?: ColorsType;
  style?: StyleProp<TextStyle> | undefined;
}

export type TypographyType = keyof typeof typography;
