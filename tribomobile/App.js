/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import ModalInfoStore from './components/modals/ModalInfoStore';
import LittlePin from './components/modals/LittlePinInfo';
import titlesText from './src/titlesText';
import contentText from './screensText/contentText';
import SplashScreen from './screens/SplashScreen';
import RecomendationScreen from './screens/recomendationScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SplashScreen/>
    </>
  );
};

export default App;
