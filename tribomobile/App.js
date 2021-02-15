/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar, Modal} from 'react-native';
import WelcomeScreen from './components/screens/welcome/WelcomeScreen';
import LoadingScreen from './components/screens/welcome/LoadingScreen';
import LoginScreen from './screens/Login';
import EditAccountScreen from './screens/profile/EditAccountScreen';

import {
  ModalDeleteStore,
  ModalDeleteStoreTexts,
} from './components/modals/ModalDeleteStore';
import ModalInfoStore from './components/modals/LittlePinInfo';

const App: () => React$Node = () => {
  const userDummy = {
    name: 'Daniel Peña Sanchez',
    email: 'daniel.peña@gmail.com',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <EditAccountScreen userAccount={userDummy} />
      </SafeAreaView>
    </>
  );
};

export default App;
