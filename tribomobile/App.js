/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

import contentText from './screensText/contentText';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{contentText.textoSplash}</Text>
        <Text>{contentText.textoWelcomeScreenGuestLaMArket}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
