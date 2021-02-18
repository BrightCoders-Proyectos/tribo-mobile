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
import ModalInfoStore from './components/modals/ModalInfoStore';
import LittlePinInfo from './components/modals/LittlePinInfo';
import SideNavScreen from './screens/SideNavScreen';
import RegisterMarket from './screens/RegisterMarket';
import RegistrationScreen from './screens/RegistrationScreen';
import EditAccountScreen from './screens/profile/EditAccountScreen';
import MainScreen from './components/MainScreen';
import {
  ModalDeleteStoreOrAccount,
  ModalDeleteTexts,
} from './components/modals/ModalDeleteStoreOrAccout';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/Navigation';

const App: () => React$Node = () => {
  const userDummy = {
    name: 'Daniel Peña Sanchez',
    email: 'daniel.peña@gmail.com',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MainScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
