import React, {useMemo} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-ui-lib';
import colors from 'utils/colors';
import {getHeight, getWidth} from 'utils/configScreen';

const TabIcon = ({route, index, descriptors, navigation, state}) => {
  const {options} = descriptors[route.key];

  const isFocused = useMemo(() => state.index === index, [index, state]);

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

  const assetName = useMemo(
    () =>
      isFocused
        ? `${route.name.toLowerCase()}-selected`
        : route.name.toLowerCase(),
    [isFocused],
  );
  const iconSize = route.name === 'Shop' ? 48 : 28;

  return (
    <TouchableOpacity
      key={`${route?.key}_${index}`}
      accessibilityRole="button"
      accessibilityState={{selected: isFocused}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles?.buttonItem}>
      <Icon
        size={iconSize}
        style={styles.icon}
        assetGroup="icons"
        resizeMode="contain"
        assetName={assetName}
      />
      <Text>{route.name}</Text>
    </TouchableOpacity>
  );
};

function TabBottom({state, descriptors, navigation}) {
  return (
    <View style={{position: 'relative'}}>
      <View style={styles?.container}>
        {state.routes.map((route, index) => (
          <TabIcon
            key={index}
            route={route}
            index={index}
            descriptors={descriptors}
            navigation={navigation}
            state={state}
          />
        ))}
      </View>
    </View>
  );
}

export default TabBottom;

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.95,
    shadowRadius: 10.0,
    elevation: 10,
    height: getHeight(84),
    flexDirection: 'row',
    backgroundColor: colors?.white,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    zIndex: -2,
  },
  buttonItem: {
    paddingBottom: Platform.OS === 'ios' ? 30 : 0,
    width: getWidth(80),
    alignItems: 'center',
  },
  icon: {
    zIndex: 2,
    marginBottom: 6,
  },
});
