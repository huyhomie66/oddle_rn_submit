import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet} from 'react-native';
import Header from 'components/Header';
import {ShoppingCard} from 'components';
import {spacing} from 'utils/configScreen';
import colors from 'utils/colors';

export default () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Header.FavoriteHeader
        id="d50aeb3c"
        imageLink="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.body}>
        <ShoppingCard
          style={styles.card}
          name="Super Luscious Mascara"
          tagList={['Dasda']}
          category="adsasd"
          price="dasds"
          imageLink="https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?k=20&m=1161219638&s=612x612&w=0&h=Nvf5VQIsLAXxE-6yz3R5t43rXei2xXPkkDATCyQxicI="
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
          imageLink="https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?k=20&m=1161219638&s=612x612&w=0&h=Nvf5VQIsLAXxE-6yz3R5t43rXei2xXPkkDATCyQxicI="
          productType="dasdas"
          rating="4.5"
          brand="abc"
        />
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
