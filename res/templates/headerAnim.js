import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  PixelRatio,
} from 'react-native';
import Animated from 'react-native-reanimated';

export default function HeaderAnim() {
  const HEADER_HEIGHT = 80;
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;
  const navbarHeight = (screenHeight - windowHeight) / PixelRatio.get();

  return (
    <View style={styles.base}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: HEADER_HEIGHT,
          backgroundColor: 'white',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          elevation: 5,
          alignContent: 'center',
          justifyContent: 'center',
          transform: [{ translateY: headerY }],
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 21,
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}>
          BANANAS
        </Text>
      </Animated.View>
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}>
        <Text style={[styles.texts, { backgroundColor: 'red' }]}>blah blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <Text style={styles.texts}>blah</Text>
        <View style={{ paddingBottom: navbarHeight }} />
        <Text style={[styles.texts, { backgroundColor: 'red' }]}>blah blah</Text>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'grey',
  },

  scrollView: {
    paddingTop: 75,
  },
  texts: {
    backgroundColor: 'yellow',
    fontSize: 21,
    margin: 5,
    padding: 5,
    textAlign: 'center',
    borderRadius: 20,
  },
});
