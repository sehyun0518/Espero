import { GestureResponderEvent, PressableProps, ViewProps } from 'react-native';

export interface ChipsProps extends ViewProps {
  children?: React.ReactNode;
}

export interface ChipProps extends PressableProps {
  children?: React.ReactNode;
  onPress?: (e?: GestureResponderEvent) => void;
  onClose?: () => void;
}
