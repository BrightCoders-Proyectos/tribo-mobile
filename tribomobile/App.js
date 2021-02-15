/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar, Modal} from 'react-native';
import titlesText from './src/TitlesText';
import ContentText from './screensText/ContentText';
import LogoTribo from './components/LogoTribo';
import ExampleButtons from './ExampleButtons';
import MainScreen from './components/MainScreen';
import ModalInfoStore from './components/modals/ModalInfoStore';
import LittlePinInfo from './components/modals/LittlePinInfo';
import SideNavScreen from './screens/SideNavScreen';
import RegisterMarket  from './screens/RegisterMarket';
import RegistrationScreen  from './screens/RegistrationScreen';
import WelcomeScreen from './components/screens/welcome/WelcomeScreen';
import LoadingScreen from './components/screens/welcome/LoadingScreen';
import LoginScreen from './screens/Login';
import EditAccountScreen from './screens/profile/EditAccountScreen';

import {
  ModalDeleteStore,
  ModalDeleteStoreTexts,
} from './components/modals/ModalDeleteStore';

const App: () => React$Node = () => {
  const userDummy = {
    name: 'Daniel Peña Sanchez',
    email: 'daniel.peña@gmail.com',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RegistrationScreen/>
        <EditAccountScreen userAccount={userDummy} />
      </SafeAreaView>
    </>
  );
};

export default App;
