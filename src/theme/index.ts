import {
  Assets,
  Colors,
  Typography,
  Spacings,
  Incubator,
  ViewProps,
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

interface IView extends ViewProps {
  around: boolean;
  between: boolean;
}

const loadTheme = () => {
  ThemeManager.setComponentTheme('Text', props => {
    return {
      color: colors.main,
      fontWeight: props.bold && 'bold',
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
  });

  Assets.loadAssetsGroup('images', {});

  Assets.loadAssetsGroup('svg', {});

  Typography.loadTypographies({
    h1: {...Typography.text40},
    h2: {...Typography.text50},
    h3: {...Typography.text70M},
    body: Typography.text70,
    bodySmall: Typography.text80,
  });

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
      // screenBG: Colors.grey10,
      // textColor: Colors.white,
      // moonOrSun: Colors.grey80,
      // mountainForeground: Colors.violet10,
      // mountainBackground: Colors.violet20,
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
