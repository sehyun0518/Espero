export const colors = {
  pink100: '#F4C7F5',
  pink200: '#FBA7FD',

  blue400: '#4F75F9',
  blue500: '#3A64F8',

  yellow200: '#F9F79F',

  green500: '#45E02A',

  red500: '#F55353',

  white: '#FAFAFA',
  gray50: '#F4F4F4',
  gray100: '#E9E9EA',
  gray200: '#D3D4D4',
  gray300: '#BCBEBF',
  gray400: '#A6A9AA',
  gray500: '#909394',
  gray600: '#7A7D7F',
  gray700: '#64686A',
  gray800: '#4D5255',
  gray900: '#373D3F',
  gray950: '#212526',
  black: '#17171B',
} as const;

export type ColorsType = keyof typeof colors;
