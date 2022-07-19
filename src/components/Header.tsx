import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Image, Text, ViewProps} from 'react-native-ui-lib';
import colors, {genBoxShadow} from 'utils/colors';
import {getHeight, getWidth, spacing} from 'utils/configScreen';

interface IHeader extends ViewProps {
  id: string;
  imageLink: string;
}

const HomeHeader = ({id = '', imageLink}: IHeader) => {
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
      <Image source={{uri: imageLink}} style={styles.image} />
      <View>
        <Text bodySmall>Good morning!</Text>
        <Text h3Bold>{id}</Text>
      </View>
    </View>
  );
};

const ShopHeader = ({id = '', imageLink, ...props}: IHeader) => {
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
      <Image source={{uri: imageLink}} style={styles.image} />
      <View>
        <Text bodySmall>Good morning!</Text>
        <Text h1>{id}</Text>
      </View>
    </View>
  );
};

const FavoriteHeader = ({id = '', imageLink, ...props}: IHeader) => {
  const insets = useSafeAreaInsets();
  const viewProps = {
    row: true,
    centerV: true,
    between: true,
    width: '80%',
    style: {
      paddingTop: insets.top,
      ...styles.favoriteHeader,
    },
    ...props,
  };

  return (
    <View {...viewProps}>
      <Text h1>Favorite</Text>
      <Image source={{uri: imageLink}} style={styles.image} />
    </View>
  );
};

export default {HomeHeader, ShopHeader, FavoriteHeader};

const styles = StyleSheet.create({
  shopHeader: {
    width: '100%',
    backgroundColor: colors.white,
    paddingLeft: spacing(4),
    paddingBottom: spacing(3),
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
  favoriteHeader: {
    width: '100%',
    paddingHorizontal: spacing(4),
  },
  image: {
    height: getHeight(50),
    width: getWidth(50),
    borderRadius: 25,
    marginRight: spacing(2.5),
  },
});
