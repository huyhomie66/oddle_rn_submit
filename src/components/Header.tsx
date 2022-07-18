import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Image, Text, ViewProps} from 'react-native-ui-lib';
import colors, {genBoxShadow} from 'utils/colors';
import {getHeight, getWidth, spacing} from 'utils/configScreen';

interface IHeader extends ViewProps {
  id: string;
  image_link: string;
}

const HomeHeader = ({id = '', image_link}: IHeader) => {
  const insets = useSafeAreaInsets();

  const viewProps = {
    row: true,
    centerV: true,
    width: '80%',
    style: {
      paddingTop: insets.top,
    },
  };

  return (
    <View {...viewProps}>
      <Image source={{uri: image_link}} style={styles.image} />
      <View>
        <Text bodySmall>Good morning!</Text>
        <Text h1>{id}</Text>
      </View>
    </View>
  );
};

const ShopHeader = ({id = '', image_link, ...props}: IHeader) => {
  const insets = useSafeAreaInsets();
  const viewProps = {
    row: true,
    centerV: true,
    width: '80%',
    style: {
      paddingTop: insets.top,
      ...styles.shopHeader,
    },
    ...props,
  };

  return (
    <View {...viewProps}>
      <Image source={{uri: image_link}} style={styles.image} />
      <View>
        <Text bodySmall>Good morning!</Text>
        <Text h1>{id}</Text>
      </View>
    </View>
  );
};

export default {HomeHeader, ShopHeader};
const styles = StyleSheet.create({
  shopHeader: {
    width: '100%',
    backgroundColor: colors.white,
    paddingLeft: spacing(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    // ...genBoxShadow(5),
  },
  image: {
    height: getHeight(60),
    width: getWidth(60),
    borderRadius: 30,
    marginRight: spacing(2.5),
  },
});
