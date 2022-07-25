import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, ButtonProps} from 'react-native-ui-lib';
import {getHeight, getWidth} from 'utils/configScreen';

export default (props: ButtonProps) => (
  <Button style={styles.button} borderRadius={4} {...props} />
);

const styles = StyleSheet.create({
  button: {
    height: getHeight(36),
    width: getWidth(120),
  },
});
