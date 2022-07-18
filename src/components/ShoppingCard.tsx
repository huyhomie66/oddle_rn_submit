import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Card, Text, View, Icon, Image, CardProps} from 'react-native-ui-lib';

import Button from 'components/Button';
import colors, {genBoxShadow} from 'utils/colors';
import {getHeight, getWidth, spacing} from 'utils/configScreen';

export interface ShoppingCardProps extends CardProps {
  image_link: string;
  brand: string;
  tagList: string[];
  rating: string;
  price: string;
  name: string;
  category: string;
  productType: string;
}

type CategoryData = {
  icon?: string;
  text: string;
};

const DEFAULT_TEXT = 'N/A';
const BORDER_RADIUS = 12;

const RatingBlock = ({data}: {data: CategoryData[]}) => {
  return (
    <View row width={getWidth(110)} style={styles.categoryBlock}>
      {data.map((c, i) => (
        <View row centerV key={i}>
          {c.icon ? (
            <Icon assetGroup="icons" assetName={c.icon} style={styles.icon} />
          ) : (
            <Text> - </Text>
          )}
          <Text bodySmall>{c.text || DEFAULT_TEXT}</Text>
        </View>
      ))}
    </View>
  );
};

export default ({
  image_link = '',
  name,
  price,
  rating,
  tagList,
  category,
  productType,
  brand,
  ...props
}: ShoppingCardProps) => {
  const categoryData: CategoryData[] = [
    {
      icon: 'star',
      text: rating,
    },
    {
      icon: 'money',
      text: price,
    },
  ];

  const tagListBlock = (
    <View row paddingB-10>
      {tagList.length > 0 && <Text bodySmall>{tagList.toString()}</Text>}
    </View>
  );

  const CardImageBlock = () => {
    const [isLiked, setLiked] = React.useState(false);

    const onPress = () => setLiked(!isLiked);

    const cardHeaderProps = {
      between: true,
      row: true,
      centerV: true,
    };

    const cardHeader = (
      <View {...cardHeaderProps} style={styles.cardHeader}>
        <Pressable style={styles.brand}>
          <Text>{brand}</Text>
        </Pressable>
        <Pressable style={styles.favoriteButton} onPress={onPress}>
          <Icon
            assetGroup="icons"
            assetName={isLiked ? 'favorite-selected' : 'favorite'}
            size={12}
            style={{
              padding: 10,
            }}
          />
        </Pressable>
      </View>
    );

    return (
      <View>
        {cardHeader}
        <Image style={styles.cardImage} source={{uri: image_link}} />
      </View>
    );
  };

  const buttonBlock = (
    <View row style={styles.buttonBlock}>
      <Button
        label="View brand"
        backgroundColor={colors.white}
        labelStyle={{color: colors.black}}
        style={styles.button}
      />
      <Button
        label="Order now"
        style={styles.button}
        labelStyle={styles.bold}
        backgroundColor={colors.primary}
      />
    </View>
  );

  const categoryBlock = (
    <View row width={getWidth(110)} style={styles.categoryBlock}>
      <View row centerV>
        <Icon assetGroup="icons" assetName={'info'} style={styles.icon} />
        <Text bodySmall>{`${category} - ${productType}`}</Text>
      </View>
    </View>
  );

  const title = (
    <View paddingV-5>
      <Text h2 style={styles.bold}>
        {name}
      </Text>
    </View>
  );

  return (
    <Card style={styles.card} {...props}>
      <CardImageBlock />
      <View style={styles.cardBody}>
        {title}
        {tagListBlock}
        <RatingBlock data={categoryData} />
        {categoryBlock}
        {buttonBlock}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    padding: spacing(2.5),
    backgroundColor: colors.gray,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  bold: {fontWeight: 'bold'},
  brand: {
    backgroundColor: colors.lightGray,
    padding: spacing(1.2),
    borderRadius: 6,
  },
  cardHeader: {
    zIndex: 100,
    position: 'absolute',
    right: 0,
    left: 0,
    paddingTop: spacing(5),
    paddingHorizontal: spacing(4),
  },
  card: {
    backgroundColor: colors.gray,
    borderRadius: BORDER_RADIUS,
  },

  favoriteButton: {
    height: spacing(8),
    width: spacing(8),
    borderRadius: spacing(4),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...genBoxShadow(1),
  },
  cardImage: {
    height: getHeight(200),
    zIndex: -1,
    borderRadius: BORDER_RADIUS,
  },
  button: {borderWidth: 1, borderColor: colors.darkGray, width: getWidth(120)},
  categoryBlock: {justifyContent: 'space-between', paddingBottom: spacing(1)},
  buttonBlock: {
    width: getWidth(250),
    justifyContent: 'space-between',
    paddingTop: spacing(4),
  },
  icon: {marginRight: spacing(1.2), height: spacing(3), width: spacing(3)},
});
