import { Icon } from 'packages/design-system/src/components/atoms/Icon';
import { Pressable } from 'react-native';
// type
import { styles, sizeMap, textMap, IconSizeMap } from './style';
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
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps): JSX.Element => (
  <Pressable
    onPress={onPress}
    style={[styles.container, sizeMap[size], { backgroundColor: colors[bgColor] }, style]}
    {...rest}
  >
    {leftIcon && <Icon name={leftIcon} width={IconSizeMap[size].width} height={IconSizeMap[size].height} />}
    <Typography fontSize={textMap[size]} color={textColor}>
      {children}
    </Typography>
    {rightIcon && <Icon name={rightIcon} width={IconSizeMap[size].width} height={IconSizeMap[size].height} />}
  </Pressable>
);
