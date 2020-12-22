/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ModalMyAccount from './components/modals/ModalMyAccount';

import {SafeAreaView, Text, StatusBar} from 'react-native';
import ModalInfoStore from './components/modals/ModalInfoStore';
import LittlePin from './components/modals/LittlePinInfo';
import TitlesText from './src/TitlesText';
import ContentText from './screensText/ContentText';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './components/screens/welcome/WelcomeScreen'; 
import RecomendationScreen from './screens/RecomendationScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WelcomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
