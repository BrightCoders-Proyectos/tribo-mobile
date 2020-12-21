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
import titlesText from './src/titlesText';
import ModalMyAccount from './components/modals/ModalMyAccount';
import ModalInfoStore from './components/modals/ModalInfoStore';
import LittlePin from './components/modals/LittlePinInfo';
import WelcomeScreen from './components/screens/welcome/WelcomeScreen'; 
import RecomendationScreen from './screens/recomendationScreen';
import RegistrationScreen from './screens/registrationScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <WelcomeScreen /> */}
        <RegistrationScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
