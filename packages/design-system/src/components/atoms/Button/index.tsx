import { Pressable } from 'react-native';
// type
import { styles, sizeMap, textMap } from './style';
import type { ButtonProps } from './type';
// stylesheet
// colors token
import { colors } from '../../../theme/colors';
// text common component
import { Typography } from '../Typography';

export const Button = ({
  children,
  onPress,
  size = 'medium',
  textColor = 'white',
  bgColor = 'blue500',
  style,
  ...rest
}: ButtonProps): JSX.Element => (
  <Pressable
    onPress={onPress}
    style={[styles.container, sizeMap[size], { backgroundColor: colors[bgColor] }, style]}
    {...rest}
  >
    <Typography fontSize={textMap[size]} color={textColor}>
      {children}
    </Typography>
  </Pressable>
);
