// colors token
import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 62,
    maxHeight: 62,
    backgroundColor: colors.black,
    paddingHorizontal: 20,
  },

  home: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  page: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
  },

  logoContainer: {
    paddingHorizontal: 3.714,
    paddingVertical: 4.962,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxHeight: 40,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,

    backgroundColor: colors.gray950,

    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray800,
  },

  textInput: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    width: 16,

    color: colors.white,
    fontFamily: 'SUIT-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.32,
  },
});
