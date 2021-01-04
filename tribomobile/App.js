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
import SideNavScreen from './screens/SideNavScreen';
import titlesText from './src/TitlesText';
import LittlePin from './components/modals/LittlePinInfo';
import WelcomeScreen from './components/screens/welcome/WelcomeScreen';
import WelcomeGuestScreen from './components/screens/welcome/WelcomeGuestScreen';
import RecomendationScreen from './screens/recomendationScreen';
import RegistrationScreen from './screens/registrationScreen';
import ContentText from './screensText/ContentText';
import SplashScreen from './screens/SplashScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WelcomeGuestScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
