import { useRef, useState } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
// type
import { styles } from './style';
import type { HomeNavBarProps, SearchNavBarProps, PageNavBarProps } from './type';
// stylesheet
// text common component
import { Typography } from '../../../components/atoms/Typography';
// colors token
import { colors } from '../../../theme/colors';
// icons iamges
import BackSvg from '../../assets/icons/chevron.svg';
import SearchSvg from '../../assets/icons/search.svg';
import LogoSvg from '../../assets/images/app-logo.svg';

const Home = ({ style, isSearch }: HomeNavBarProps): JSX.Element => {
  return (
    <View style={[styles.container, styles.home, style]}>
      <View style={styles.logoContainer}>
        <LogoSvg width={72} height={44} />
      </View>
      {isSearch ? <SearchSvg width={24} height={24} /> : <View style={{ width: 24 }} />}
    </View>
  );
};

const Page = ({ style, isSearch, title = 'Page' }: PageNavBarProps): JSX.Element => {
  return (
    <View style={[styles.container, styles.page, style]}>
      <BackSvg transform="rotate(-90)" width={24} height={24} />
      <Typography fontSize="h3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {title}
      </Typography>
      {isSearch ? <SearchSvg width={24} height={24} /> : <View style={{ width: 24 }} />}
    </View>
  );
};

const Search = ({ style, inputStyle, placeholder, backPath, ...rest }: SearchNavBarProps): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<any>(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <View style={[styles.container, styles.search, style]}>
      <BackSvg transform="rotate(-90)" width={24} height={24} />
      <TouchableWithoutFeedback onPress={handleFocus}>
        <View style={[styles.label]}>
          <TextInput
            ref={inputRef}
            value={value}
            placeholder={placeholder}
            style={[styles.textInput, inputStyle]}
            onChangeText={setValue}
            placeholderTextColor={colors.gray500}
            textAlignVertical="top"
            {...rest}
          />
          <SearchSvg width={24} height={24} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const NavBar = { Home, Search, Page };
