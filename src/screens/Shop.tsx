import {Text} from 'react-native-ui-lib';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, ShoppingCard} from 'components';
import colors from 'utils/colors';
import {spacing} from 'utils/configScreen';
import useProduct from 'hooks/useProduct';
import {APP_ACCOUNT_NAME} from 'config';
import {ShoppingCardProp} from 'components/ShoppingCard';

export default () => {
  const {data, refetch} = useProduct();

  const onScroll = e => {
    console.log({e: e.nativeEvent.contentOffset.y});
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Header.ShopHeader
        id={APP_ACCOUNT_NAME.slice(0, 8)}
        imageLink="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      />

      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}>
        <Text bodySmall style={styles.productCount}>
          {data ? data.length : 0} products sorted by price
        </Text>
        {data &&
          data.map((product: ShoppingCardProp, index: number) => (
            <ShoppingCard key={index} style={styles.card} {...product} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productCount: {paddingVertical: spacing(5)},
  card: {marginBottom: spacing(4)},
  body: {
    paddingHorizontal: spacing(4),
    backgroundColor: colors.violet,
    paddingBottom: spacing(30),
  },
  container: {
    backgroundColor: colors.white,
  },
});
