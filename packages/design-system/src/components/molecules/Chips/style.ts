import { colors } from 'packages/design-system/src/theme/colors';
import { StyleSheet } from 'react-native';
// colors token

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
});
