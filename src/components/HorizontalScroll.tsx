import React, { ReactNode } from 'react';
import { StyleSheet, ScrollView, ScrollViewProps } from 'react-native';

export interface Props extends ScrollViewProps {
  children: ReactNode;
}

const HorizontalScroll = ({ children, ...props }: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.container, props.style]} {...props}>
      {children}
    </ScrollView>
  );
};

export default HorizontalScroll;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
