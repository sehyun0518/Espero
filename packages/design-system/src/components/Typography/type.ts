import { typography } from 'packages/design-system/src/components/Typography/style';
import { ColorsType } from 'packages/design-system/src/theme/colors';
import { TextProps } from 'react-native';

export interface TypographyProps extends TextProps {
  children?: React.ReactNode | undefined;
  fontSize?: TypographyType;
  color?: ColorsType;
}

export type TypographyType = keyof typeof typography;
