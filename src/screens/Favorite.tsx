import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet} from 'react-native';

import {ShoppingCard, Header} from 'components';
import {ShoppingCardProp} from 'components/ShoppingCard';

import {spacing} from 'utils/configScreen';
import colors from 'utils/colors';
import useProduct from 'hooks/useProduct';

export default () => {
  const {data, refetch} = useProduct();

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Header.FavoriteHeader
        id="d50aeb3c"
        imageLink="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.body}>
        {data &&
          data
            .filter((e: ShoppingCardProp) => !!e.isLiked)
            .map((product: ShoppingCardProp, index: number) => (
              <ShoppingCard
                key={index}
                style={styles.card}
                onLikeItem={refetch}
                {...product}
              />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  body: {
    backgroundColor: colors.white,
    paddingBottom: spacing(5),
  },
  card: {margin: spacing(4)},
});
