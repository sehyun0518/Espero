import { Icon } from 'packages/design-system/src/components/atoms/Icon';
import { useRef, useState } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
// stylesheet
import { styles } from './style';
// type
import type { HomeNavBarProps, SearchNavBarProps, PageNavBarProps } from './type';
// icons iamges
import LogoSvg from '../../../assets/images/app-logo.svg';
// text common component
import { Typography } from '../../../components/atoms/Typography';
// colors token
import { colors } from '../../../theme/colors';

const Home = ({ style, isSearch }: HomeNavBarProps): JSX.Element => {
  return (
    <View style={[styles.container, styles.home, style]}>
      <View style={styles.logoContainer}>
        <LogoSvg width={72} height={44} />
      </View>
      {isSearch ? <Icon name="search" width={24} height={24} /> : <View style={{ width: 24 }} />}
    </View>
  );
};

const Page = ({ style, isSearch, title = 'Page' }: PageNavBarProps): JSX.Element => {
  return (
    <View style={[styles.container, styles.page, style]}>
      <Icon name="chevron" transform="rotate(-90)" width={24} height={24} />
      <Typography fontSize="h3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {title}
      </Typography>
      {isSearch ? <Icon name="search" width={24} height={24} /> : <View style={{ width: 24 }} />}
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
      <Icon name="chevron" transform="rotate(-90)" width={24} height={24} />
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
          <Icon name="search" width={24} height={24} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const NavBar = { Home, Search, Page };
