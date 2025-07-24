import { Icon } from 'packages/design-system/src/components/atoms/Icon';
import { Typography } from 'packages/design-system/src/components/atoms/Typography';
import { Pressable, View } from 'react-native';
// stylesheet
import { styles } from './style';
// type
import type { ChipsProps, ChipProps } from './type';
// atoms component

export const Chips = ({ children, ...rest }: ChipsProps) => {
  return (
    <View style={[styles.container]} {...rest}>
      {children}
    </View>
  );
};

const Chip = ({ children, onPress, onClose, ...rest }: ChipProps) => {
  return (
    <Pressable style={[styles.wrapper]} onPress={onPress} {...rest}>
      <Typography color="black" fontSize="small400">
        {children}
      </Typography>
      <Icon name="close" color="black" width={12} height={12} onClick={onClose} />
    </Pressable>
  );
};

Chips.Chip = Chip;
