import { Text } from 'react-native';
// stylesheet
import { typography } from './style';
// type
import type { TypographyProps } from './type';
// colors token
import { colors } from '../../../theme/colors';

export const Typography = ({
  children,
  fontSize = 'medium500',
  color = 'white',
  style,
  ...rest
}: TypographyProps): JSX.Element => (
  <Text style={[typography[fontSize], { color: colors[color] }, style]} {...rest}>
    {children}
  </Text>
);
