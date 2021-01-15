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
import MainScreen from './components/MainScreen';
import SideNavScreen from './screens/SideNavScreen';
import titlesText from './src/TitlesText';
import LittlePin from './components/modals/LittlePinInfo';
import WelcomeScreen from './components/screens/welcome/WelcomeScreen';
import WelcomeGuestScreen from './components/screens/welcome/WelcomeGuestScreen';
import RecomendationScreen from './screens/RecomendationScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ContentText from './screensText/ContentText';
import SplashScreen from './screens/SplashScreen';
import LogoTribo from './components/LogoTribo';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <LogoTribo width={256} height={86} line={false}/>
      </SafeAreaView>
    </>
  );
};

export default App;
