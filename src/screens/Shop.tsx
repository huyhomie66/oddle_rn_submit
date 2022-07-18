import {Text, View} from 'react-native-ui-lib';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, ShoppingCard} from 'components';
import colors from 'utils/colors';
import {spacing} from 'utils/configScreen';

export default () => {
  const onScroll = e => {
    console.log({e: e.nativeEvent.contentOffset.y});
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Header.ShopHeader
        id="d50aeb3c"
        image_link="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      />
      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}>
        <ShoppingCard
          style={styles.card}
          name="Super Luscious Mascara"
          tagList={['Dasda']}
          category="adsasd"
          price="dasds"
          image_link="https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?k=20&m=1161219638&s=612x612&w=0&h=Nvf5VQIsLAXxE-6yz3R5t43rXei2xXPkkDATCyQxicI="
          productType="dasdas"
          rating="4.5"
          brand="abc"
        />
        <ShoppingCard
          style={styles.card}
          name="Super Luscious Mascara"
          tagList={['Dasda']}
          category="adsasd"
          price="dasds"
          image_link="https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?k=20&m=1161219638&s=612x612&w=0&h=Nvf5VQIsLAXxE-6yz3R5t43rXei2xXPkkDATCyQxicI="
          productType="dasdas"
          rating="4.5"
          brand="abc"
        />
        <ShoppingCard
          style={styles.card}
          name="Super Luscious Mascara"
          tagList={['Dasda']}
          category="adsasd"
          price="dasds"
          image_link="https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?k=20&m=1161219638&s=612x612&w=0&h=Nvf5VQIsLAXxE-6yz3R5t43rXei2xXPkkDATCyQxicI="
          productType="dasdas"
          rating="4.5"
          brand="abc"
        />
        <ShoppingCard
          style={styles.card}
          name="Super Luscious Mascara"
          tagList={['Dasda']}
          category="adsasd"
          price="dasds"
          image_link="https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?k=20&m=1161219638&s=612x612&w=0&h=Nvf5VQIsLAXxE-6yz3R5t43rXei2xXPkkDATCyQxicI="
          productType="dasdas"
          rating="4.5"
          brand="abc"
        />
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
