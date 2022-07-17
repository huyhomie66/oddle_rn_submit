import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text} from 'react-native-ui-lib';
import {getHeight, getWidth, spacing} from 'utils/configScreen';

interface IHeader {
  id: string;
  image_link: string;
}

export default ({id = '', image_link}: IHeader) => {
  const viewProps = {
    row: true,
    centerV: true,
    width: '80%',
  };
  return (
    <View {...viewProps}>
      <Image source={{uri: image_link}} style={styles.image} />
      <View>
        <Text bodySmall>Good morning</Text>
        <Text h1>{id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: getHeight(60),
    width: getWidth(60),
    borderRadius: 30,
    marginRight: spacing(2.5),
  },
});
