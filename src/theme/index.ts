import { Assets, Colors, Typography, Spacings, Incubator, ViewProps } from 'react-native-ui-lib'; // eslint-disable-line
import { ThemeManager } from 'react-native-ui-lib';
import { Dimensions } from 'react-native';
import colors from 'utils/colors';

export const { width, height } = Dimensions.get('window');

const getJustify = (props) => {
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

const loadDemoConfigurations = () => {
  ThemeManager.setComponentTheme('Text', (props) => {
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
    'arrow-right': require('../assets/arrow-right.png'),
    eye: require('../assets/eye.png'),
    'eye-slash': require('../assets/eye-slash.png'),
    maximize: require('../assets/maximize.png'),
    closeSquare: require('../assets/close-square.png'),
    clock: require('../assets/clock.png'),
    close: require('../assets/close.png'),
    logout: require('../assets/logout.png'),
    share: require('../assets/share.png'),
    trending: require('../assets/trending.png'),
    bestValue: require('../assets/best-value.png'),
    camera: require('../assets/camera.png'),
    info: require('../assets/info.png'),
    lock: require('../assets/lock.png'),
    network: require('../assets/network.png'),
    ring: require('../assets/ring.png'),
    user: require('../assets/user.png'),
  });

  Assets.loadAssetsGroup('images', {
    user: require('../assets/user-default.png'),
    'price-list': require('../assets/price-list.png'),
    'coin-intro': require('../assets/coin-intro.png'),
    noResultSearch: require('../assets/no-result-search.png'),
    noNewNotification: require('../assets/no-new-notification.png'),
  });

  Assets.loadAssetsGroup('svg', {});

  Typography.loadTypographies({
    h1: { ...Typography.text40 },
    h2: { ...Typography.text50 },
    h3: { ...Typography.text70M },
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
  Incubator.TextField.defaultProps = { ...Incubator.TextField.defaultProps, preset: 'default' };
};

export default loadDemoConfigurations;
