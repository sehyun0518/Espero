import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  dotWrap: {
    width: 8,
    height: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: 'black',
  },
});
