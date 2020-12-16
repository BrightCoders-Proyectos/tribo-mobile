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

import {SafeAreaView, Text, StatusBar} from 'react-native';
import ModalInfoStore from './components/modals/ModalInfoStore';
import LittlePin from './components/modals/LittlePinInfo';
import RecomendationScreen from './screens/recomendationScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{alignItems:"center", }}>
          <Text>{titlesText.titleStayHome}</Text>
        </View>
        <View style={{alignItems:'center', marginTop:'50%'}}>
          <ModalMyAccount/> 
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
