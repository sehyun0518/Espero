import { Text } from 'react-native';
import { typography } from './style';
import { TypographyProps } from './type';
import { colors } from '../../theme/colors';

export const Typography = ({
  children,
  fontSize = 'medium500',
  color = 'white',
  ...props
}: TypographyProps): React.ReactNode => (
  <Text style={[typography[fontSize], { color: colors[color] }]} {...props}>
    {children}
  </Text>
);
