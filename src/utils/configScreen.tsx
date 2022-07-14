import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

const currentSpacing = 4;
const standardWidth = 375; // ty le man iphone SE
const standardHeight = 812; // ty le man iphone SE

const smallWidth = 414;
const smallHeight = 736;

// const superSmallHeight = 620;

export const getWidth = value => (value / standardWidth) * width;
export const getHeight = value => (value / standardHeight) * height;

export const spacing = value =>
  (value / standardWidth) * width * currentSpacing;

export const getFontSize = fontSize => {
  const ratio = fontSize / standardWidth; // get ratio based on your standard scale
  const newSize = Math.round(ratio * width);
  return newSize;
};

export const headerHeight =
  Platform.OS === 'ios' ? getHeight(70) : getHeight(60);

export const isSmallScreen = () => height <= smallHeight;

export const is169Screen = () => {
  const currentRatio = height / width;
  const fixedCurrentRatio = Number(currentRatio.toFixed(2));
  const aspectRatio = 1.78;
  return fixedCurrentRatio === aspectRatio;
};
