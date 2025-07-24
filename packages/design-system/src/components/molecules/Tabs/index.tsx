import { Typography } from 'packages/design-system/src/components/atoms/Typography';
import { colors } from 'packages/design-system/src/theme/colors';
import { Children, cloneElement, isValidElement, useCallback, useState } from 'react';
import { Pressable, View } from 'react-native';
// type
import { styles } from './styles';
import type { TabsProps, TabProps } from './type';
// stylesheet
// atoms component
// colors token

/**
 * Tabs 컴포넌트 - 다중 또는 단일 선택이 가능한 탭 컴포넌트
 *
 * @component
 * @example
 * ```tsx
 * <Tabs type="multi" onSelect={(selected) => console.log(selected)}>
 *   <Tabs.Tab label="Option 1" />
 *   <Tabs.Tab label="Option 2" />
 * </Tabs>
 * ```
 *
 * @param {TabsProps} props - Tabs 컴포넌트에 전달되는 props
 * @param {'single' | 'multi'} [props.type='single'] - 단일 선택 or 다중 선택 타입 ('single' or 'multi')
 * @param {(selected: string[]) => void} [props.onSelect] - 선택된 탭의 label들을 배열로 전달하는 콜백
 * @param {React.ReactNode} props.children - `Tabs.Tab` 컴포넌트 배열
 *
 * @returns {JSX.Element}
 */
export const Tabs = ({ children, type = 'single', onSelect }: TabsProps): JSX.Element => {
  // value: [[key(number) : value(string)]] 형태로 저장됨(key는 index), ex. [[1: "Hello"], [2, "World"]]
  const [value, setValue] = useState<Map<number, string>>(new Map<number, string>());

  const handleOnPress = useCallback((idx: number, label: string) => {
    setValue((prev) => {
      const temp = new Map(prev);
      // toggle 형태
      if (temp.has(idx)) {
        temp.delete(idx);
      } else {
        // single type일 경우 예외 처리
        if (type === 'single') {
          temp.clear();
        }
        temp.set(idx, label);
      }
      // value 값 배열
      onSelect?.(Array.from(temp.values()));
      return temp;
    });
  }, []);

  return (
    <View style={[styles.container]}>
      {Children.map(children, (child, idx) => {
        if (!isValidElement(child)) {
          return null;
        }
        return cloneElement(child as React.ReactElement<TabProps>, {
          onPress: () => handleOnPress(idx, child.props.label),
          active: value.has(idx),
        });
      })}
    </View>
  );
};

/**
 * Tab 컴포넌트 - Tabs 내부에서 개별 탭
 *
 * @component
 * @example
 * ```tsx
 * <Tabs.Tab label="Option A" />
 * ```
 *
 * @param {TabProps} props - Tab에 전달되는 props
 * @param {string} props.label - 탭에 표시될 텍스트
 * @param {boolean} [props.active] - 현재 활성화 상태 여부
 * @param {() => void} [props.onPress] - 탭이 클릭될 때 실행될 콜백
 *
 * @returns {JSX.Element}
 */
const Tab = ({ label, active, onPress }: TabProps): JSX.Element => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.wrapper,
        { backgroundColor: active ? colors.blue400 : colors.black },
        { borderColor: active ? colors.blue400 : colors.white },
      ]}
    >
      <Typography color={active ? 'black' : 'white'}>{label}</Typography>
    </Pressable>
  );
};

Tabs.Tab = Tab;
