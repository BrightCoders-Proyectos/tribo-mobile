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
  View,
} from 'react-native';
import SplashScreen from './screens/splash'

const App: () => React$Node = () => {
  return (
    <>
        <SplashScreen/>
    </>
  );
};

export default App;
