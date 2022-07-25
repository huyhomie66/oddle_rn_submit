import React, {useMemo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HorizontalScroll, ShoppingCard, Header} from 'components';
import {ShoppingCardProp} from 'components/ShoppingCard';

import useProduct from 'hooks/useProduct';

import {spacing} from 'utils/configScreen';
import colors from 'utils/colors';
import {APP_ACCOUNT_NAME} from 'config';

const useProductFormatData = (data: ShoppingCardProp[]) => {
  const likedItems: any[] = useMemo(
    () => (data ? data.filter((e: ShoppingCardProp) => !!e.isLiked) : []),
    [data],
  );

  const likedNames = useMemo(
    () => (likedItems ? likedItems.map((e: ShoppingCardProp) => e.name) : []),
    [data],
  );

  const likedBrands = useMemo(
    () => (likedItems ? likedItems.map((e: ShoppingCardProp) => e.brand) : []),
    [data],
  );

  const recommendedList = useMemo(
    () =>
      data
        ? data.filter((e: ShoppingCardProp) => likedBrands.includes(e.brand))
        : [],
    [data],
  );
  return {likedItems, likedNames, recommendedList};
};

export default () => {
  const {data, isLoading} = useProduct();

  const {likedNames, recommendedList} = useProductFormatData(data);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={styles.header}>
        <Header.HomeHeader
          imageLink="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          id={APP_ACCOUNT_NAME}
        />
        <Text h3Bold style={{paddingTop: spacing(2)}}>
          Recommended for you
        </Text>
      </View>
      {isLoading && <Text>Loading</Text>}
      {!isLoading && (
        <ScrollView
          contentContainerStyle={styles.body}
          showsVerticalScrollIndicator={false}>
          <HorizontalScroll style={styles.horizontalScroll}>
            {data &&
              data.map((product: ShoppingCardProp, index: number) => (
                <ShoppingCard key={index} style={styles.card} {...product} />
              ))}
          </HorizontalScroll>

          <Text h3Bold style={{paddingLeft: spacing(4)}}>
            Because you like: {likedNames.toString()}
          </Text>
          <HorizontalScroll style={styles.horizontalScroll}>
            {recommendedList &&
              recommendedList.map(
                (product: ShoppingCardProp, index: number) => (
                  <ShoppingCard key={index} style={styles.card} {...product} />
                ),
              )}
          </HorizontalScroll>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalScroll: {paddingLeft: spacing(2)},
  card: {marginHorizontal: spacing(2), marginVertical: spacing(4)},
  header: {padding: spacing(4), backgroundColor: colors.violet},
  body: {
    backgroundColor: colors.white,
    paddingBottom: spacing(5),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
