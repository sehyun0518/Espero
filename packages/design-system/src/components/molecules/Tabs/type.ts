import type { GestureResponderEvent, PressableProps, ViewProps } from 'react-native';

type TabType = 'single' | 'multi';

export interface TabsProps extends ViewProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  type: TabType;
  onSelect?: (value: string[]) => void;
}

export interface TabProps extends PressableProps {
  label: string;
  active?: boolean;
  onPress?: (event?: GestureResponderEvent) => void | null;
}
