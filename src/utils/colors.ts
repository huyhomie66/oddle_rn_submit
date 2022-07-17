import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();

export default {
  primary: '#1C0056',
  violet: '#F3EFFF',
  greenTint: '#F7FDFF',
  smoke: '#F8FAFC',
  darkGray: '#BBBBBB',
  gray: '#E5E5E5',
  lightGray: '#F1F1F1',
  green: '#22C36B',
  ashGrey: '#64748B',
  greyTint: '#8E9BAE',
  black: colorScheme === 'dark' ? '#000000' : '#000000',
  red: '#FF3B30',
  ashSmoke: colorScheme === 'dark' ? '#F1F5F9' : '#F1F5F9',
  white: 'white',
  main: colorScheme === 'dark' ? '#000000' : '#000000',
  transparent: 'transparent',
};
