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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ModalInfoStore />
        <Text>Hola Tribo App</Text>
        <LittlePin />
      </SafeAreaView>
    </>
  );
};

export default App;
