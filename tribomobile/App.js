/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainScreen from './components/mainScreen';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <Text>Hola Tribo App</Text> */}
        <MainScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
