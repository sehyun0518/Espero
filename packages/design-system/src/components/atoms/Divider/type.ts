import type { StyleProp, ViewProps } from 'react-native';

export type Direction = 'horizon' | 'vertical';
export type Weight = 'thin' | 'thick';

export interface DividerProps extends Omit<ViewProps, 'style'> {
  direction?: Direction;
  weight?: Weight;
  style?: StyleProp<ViewProps> | undefined;
}
