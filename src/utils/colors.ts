import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();

export default {
  primary: '#2873FF',
  smoke: '#F8FAFC',
  gray: '#D8DDE3',
  green: '#22C36B',
  ashGrey: '#64748B',
  greyTint: '#8E9BAE',
  black: colorScheme === 'dark' ? '#000000' : '#000000',
  red: '#FF3B30',
  ashSmoke: colorScheme === 'dark' ? '#F1F5F9' : '#F1F5F9',
  white: 'white',
  main: colorScheme === 'dark' ? '#000000' : '#000000',
  transparent: 'transparent',
  redTint: 'rgb(255, 0, 0, 0.6)',
  greenTint: 'rgba(34, 195, 107, 0.6)',
  shadowColor: 'rgba(1, 31, 54, 0.1)',
};
