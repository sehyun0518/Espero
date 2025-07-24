import { colors } from 'packages/design-system/src/theme/colors';
import { useEffect, useId, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
// stylesheet
import { styles } from './style';
// type
import type { IndicatorProps, DotProps } from './type';
// size calculate util
import { getDotStyle } from './util';
// colors token

const DOT_SPACE = 4 as const;
const DOT_WIDTH = 8 as const;

export const Indicator = ({ currentIndex, size }: IndicatorProps) => {
  const key = useId();
  const scrollViewRef = useRef<ScrollView>(null);
  const containerWidth = size < 6 ? (DOT_WIDTH + DOT_SPACE) * size : (DOT_SPACE + DOT_WIDTH) * 6;

  const moveTo = () => {
    if (currentIndex > 3) {
      scrollViewRef.current?.scrollTo({ x: (currentIndex - 3) * (DOT_SPACE + DOT_WIDTH) });
    }
  };

  useEffect(() => {
    moveTo();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={{ width: containerWidth }}
        contentContainerStyle={styles.wrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {[...Array(size).keys()].map((_, idx) => {
          return <Dot key={key + ':' + idx} currentIndex={currentIndex} index={idx} size={size} />;
        })}
      </ScrollView>
    </View>
  );
};
const Dot = ({ currentIndex, index, size }: DotProps) => {
  const animationSize = useSharedValue(getDotStyle({ index, currentIndex, size }).size);

  useEffect(() => {
    const newSize = getDotStyle({ index, currentIndex, size }).size;
    animationSize.value = withTiming(newSize, { duration: 300 });
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: animationSize.value,
    height: animationSize.value,
    borderRadius: animationSize.value / 2,
    backgroundColor: index === currentIndex ? colors.blue400 : colors.gray200,
  }));

  return (
    <View style={styles.dotWrap}>
      <Animated.View style={[styles.dot, animatedStyle]} />
    </View>
  );
};
