import { Children, isValidElement, ReactElement, useEffect, useId, useMemo, useState } from 'react';
import { View, Dimensions, Pressable } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
// stylesheet
import { styles } from './style';
// type
import type { TabNavProps, TabProps, TabType } from './type';
// atoms component
import { Typography } from '../../atoms/Typography';

const SCREEN_PADDING = 16;
const NAV_GAP = 8;

const TabNav = <Tabs extends TabType>({ children, tabs, initialTab }: TabNavProps<Tabs>) => {
  const [tab, setTab] = useState<Tabs[number]>(initialTab || tabs[0]);
  const key = useId();
  // 개별 nav 너비 측정˝
  const navWidth = useMemo(() => {
    return (Dimensions.get('window').width - SCREEN_PADDING * 2 - (tabs.length - 1) * 8) / tabs.length;
  }, [tabs]);

  // 활성화 nav x 위치 측정
  const getActiveNavPosX = (tabValue: Tabs[number]) => {
    return tabs.findIndex((el) => el === tabValue) * (navWidth + NAV_GAP) + SCREEN_PADDING;
  };

  // translateX 값(init : 활성 인덱스 반영)
  const activeTabPosX = useSharedValue(getActiveNavPosX(tab));

  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((i) => tabs.includes((i.props as Partial<TabProps<Tabs>>).name ?? '')) as Array<
    ReactElement<TabProps<Tabs>>
  >;

  const activatedTab = validChildren.find((child) => child.props.name === tab);

  useEffect(() => {
    activeTabPosX.value = withTiming(getActiveNavPosX(tab), {
      duration: 300,
    });
  }, [tab]);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {tabs.map((value, idx) => {
          return (
            <Pressable key={key + ':' + idx} style={styles.navItem} onPress={() => setTab(value)}>
              <Typography fontSize="h4" color={value === tab ? 'white' : 'gray700'}>
                {value}
              </Typography>
            </Pressable>
          );
        })}
        <Animated.View
          style={[styles.activeBar, { minWidth: navWidth }, { bottom: -2, transform: [{ translateX: activeTabPosX }] }]}
        />
      </View>

      <View>{activatedTab}</View>
    </View>
  );
};

const Tab = <Tabs extends TabType>({ children }: TabProps<Tabs>) => {
  return <>{children}</>;
};

TabNav.Tab = Tab;

type TabNavComponentType = typeof TabNav & { Tab: typeof Tab };

export default TabNav as TabNavComponentType;
