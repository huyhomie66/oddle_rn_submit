import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import HorizontalScroll from 'components/HorizontalScroll';
import ShoppingCard from 'components/ShoppingCard';
import Header from 'components/Header';
import {spacing} from 'utils/configScreen';
import colors from 'utils/colors';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          image_link="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          id="d50aeb3c-7342-4675-b836-b4f9867eebb4"
        />
        <Text h1>Recommended for you</Text>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <HorizontalScroll style={styles.horizontalScroll}>
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
        </HorizontalScroll>

        <Text h1 style={{paddingLeft: spacing(4)}}>
          Because you like Nyx
        </Text>
        <HorizontalScroll style={styles.horizontalScroll}>
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
        </HorizontalScroll>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalScroll: {paddingLeft: spacing(2)},
  card: {marginHorizontal: spacing(2), marginVertical: spacing(4)},
  header: {padding: spacing(4), backgroundColor: colors.violet},
  body: {
    paddingBottom: spacing(20),
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.violet,
  },
});
