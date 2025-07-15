import { StyleSheet } from 'react-native';
import type { TypographyType } from '../Typography/type';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const sizeMap = StyleSheet.create({
  xsmall: {
    paddingVertical: 4,
    paddingLeft: 12,
    paddingRight: 10,
    gap: 6,
    borderRadius: 6,
  },
  small: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 10,
    borderRadius: 8,
  },
  medium: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 10,
    borderRadius: 12,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 10,
    borderRadius: 12,
  },
});

export const textMap: Record<keyof typeof sizeMap, TypographyType> = {
  xsmall: 'exSmall500',
  small: 'small500',
  medium: 'medium500',
  large: 'h4',
};

export const IconSizeMap: Record<keyof typeof sizeMap, any> = {
  xsmall: {
    width: 16,
    height: 16,
  },
  small: {
    width: 20,
    height: 20,
  },
  medium: {
    width: 24,
    height: 24,
  },
  large: {
    width: 27,
    height: 27,
  },
};
