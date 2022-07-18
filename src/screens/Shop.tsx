import {Text, View} from 'react-native-ui-lib';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, ShoppingCard} from 'components';
import colors from 'utils/colors';
import {spacing} from 'utils/configScreen';
import useProduct from 'hooks/useProduct';

export default () => {
  const {data} = useProduct();

  const onScroll = e => {
    console.log({e: e.nativeEvent.contentOffset.y});
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Header.ShopHeader
        id="d50aeb3c"
        imageLink="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      />
      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}>
        {data &&
          data.products.map((product, index) => (
            <ShoppingCard key={index} style={styles.card} {...product} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {marginHorizontal: spacing(4), marginBottom: spacing(4)},
  body: {
    backgroundColor: colors.white,
    paddingTop: spacing(4),
    paddingBottom: spacing(30),
  },
  container: {
    backgroundColor: colors.white,
  },
});
