import { colors } from 'packages/design-system/src/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  navBar: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
    paddingTop: 4,
    paddingHorizontal: 16,

    borderBottomWidth: 2,
    borderBottomColor: colors.gray900,
  },
  navItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  activeBar: {
    position: 'absolute',
    height: 2,
    backgroundColor: colors.white,
  },
});
