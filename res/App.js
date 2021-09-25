import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  StatusBar,
  RefreshControl,
  Button,
} from 'react-native';
import LottieView from 'lottie-react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './templates/settings';
import HeaderAnim from './templates/headerAnim';
import disappearHeader from './templates/disappearHeader';
import searchheader from './templates/searchheader';

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'space-between',
        backgroundColor: 'pink',
        alignItems: 'center',
      }}>
      <View style={styles.button}>
        <Button
          style={{ margin: 5 }}
          title="Header Anim"
          onPress={() => navigation.navigate('CLASS')}
        />
      </View>
      <Button title="INDEX" onPress={() => navigation.navigate('Index')} />
      <Button title="Disapear Header" onPress={() => navigation.navigate('DA')} />
      <Button title="Disapear Header" onPress={() => navigation.navigate('SH')} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CLASS"
          component={HeaderAnim}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DA"
          component={disappearHeader}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SH"
          component={searchheader}
          options={{
            title: 'Home',
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
});
