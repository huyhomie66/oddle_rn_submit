import {
  Assets,
  Colors,
  Typography,
  Spacings,
  Incubator,
  ViewProps,
  View,
} from 'react-native-ui-lib'; // eslint-disable-line
import {ThemeManager} from 'react-native-ui-lib';
import {Dimensions} from 'react-native';
import colors from 'utils/colors';

export const {width, height} = Dimensions.get('window');

const getJustify = props => {
  if (props.around) {
    return 'space-around';
  } else if (props.between) {
    return 'space-between';
  }
};

const globalTag = {
  h1: {fontSize: 26, lineHeight: 34, fontWeight: '700'},
  h2: {fontSize: 24, lineHeight: 32},
  h3: {fontSize: 20, lineHeight: 26},
  h3Bold: {fontSize: 20, lineHeight: 26, fontWeight: '700'},
  h4: {fontSize: 18, lineHeight: 24},
  body: {fontSize: 16, lineHeight: 20},
  bodySmall: {fontSize: 14, lineHeight: 20},
};
interface IView extends ViewProps {
  around: boolean;
  between: boolean;
}

const loadTheme = () => {
  ThemeManager.setComponentTheme('Text', props => {
    return {
      color: colors.main,
      fontWeight: props.bold ? 'bold' : '400',
    };
  });

  ThemeManager.setComponentTheme('View', (props: IView) => {
    return {
      justifyContent: getJustify(props),
    };
  });

  ThemeManager.setComponentTheme('TouchableOpacity', (props: IView) => {
    return {
      justifyContent: getJustify(props),
    };
  });

  Assets.loadAssetsGroup('icons', {
    home: require('../assets/home.png'),
    'home-selected': require('../assets/home-selected.png'),
    shop: require('../assets/shop.png'),
    'shop-selected': require('../assets/shop-selected.png'),
    favorite: require('../assets/favorite.png'),
    'favorite-selected': require('../assets/favorite-selected.png'),
    info: require('../assets/info.png'),
    money: require('../assets/money.png'),
    star: require('../assets/star.png'),
  });

  Assets.loadAssetsGroup('images', {});

  Assets.loadAssetsGroup('svg', {});

  Typography.loadTypographies(globalTag);

  Spacings.loadSpacings({
    s12: Spacings.s10 + Spacings.s2,
  });

  /* Dark Mode Schemes */
  Colors.loadSchemes({
    light: {
      screenBG: Colors.white,
      textColor: Colors.grey10,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
    },
    dark: {
      screenBG: Colors.white,
      textColor: Colors.grey10,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
    },
  });

  Colors.loadColors(colors);

  /* Components */
  Incubator.TextField.defaultProps = {
    ...Incubator.TextField.defaultProps,
    preset: 'default',
  };
};

export default loadTheme;
