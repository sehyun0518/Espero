import type { ViewStyle, ViewProps, StyleProp, TextInputProps } from 'react-native';

export interface NavBarBaseProps extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle> | undefined;
}

export interface HomeNavBarProps extends NavBarBaseProps {
  isSearch?: boolean;
}

export interface PageNavBarProps extends NavBarBaseProps {
  title?: string;
  isSearch?: boolean;
}

export interface SearchNavBarProps extends NavBarBaseProps, Omit<TextInputProps, 'style'> {
  inputStyle?: StyleProp<TextInputProps> | undefined;
  placeholder?: string;
  backPath?: string;
}
