import {icons} from 'assets/index';
import React, {useMemo} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from 'utils/colors';
import {getHeight, getWidth} from 'utils/configScreen';

function TabBottom({state, descriptors, navigation}) {
  const TabIcon = ({route, index}) => {
    const {options} = descriptors[route.key];

    const isFocused = useMemo(() => state.index === index, [index]);

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation?.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    const iconStyle = useMemo(
      () => [
        isFocused ? styles?.iconNormalFocused : styles?.iconNormal,
        route?.name === 'Setting' && styles?.iconSetting,
      ],
      [isFocused, route],
    );

    return (
      <TouchableOpacity
        key={`${route?.key}_${index}`}
        accessibilityRole="button"
        accessibilityState={{selected: isFocused}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[styles?.buttonItem]}>
        <Image source={icons[`icon${route.name}`]} style={iconStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles?.container}>
      {state.routes.map((route, index) => (
        <TabIcon route={route} index={index} />
      ))}
    </View>
  );
}

export default TabBottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors?.white,
    height: getHeight(56),
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowColor: colors?.shadowColor,
  },
  buttonItem: {
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    width: getWidth(80),
    height: getHeight(56),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors?.white,
  },
  iconNormal: {
    height: getHeight(20),
    resizeMode: 'contain',
  },
  iconNormalFocused: {
    height: getHeight(20),
    resizeMode: 'contain',
    tintColor: colors?.primary,
  },
  iconSetting: {
    height: getHeight(24),
    resizeMode: 'contain',
  },
});
