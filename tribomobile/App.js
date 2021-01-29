/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import titlesText from './src/TitlesText';
import ContentText from './screensText/ContentText';
import CheckboxCustom from './components/CheckBoxCustom';
import RadioButtomCustom from './components/RadioButtonCustom';
import LogoTribo from './components/LogoTribo';
import ExampleButtons from './ExampleButtons';
//import ModalInfoStore from './components/modals/ModalInfoStore'
import ModalInfoStore from './components/modals/LittlePinInfo'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <LogoTribo width={256} height={86} line={false}/> */}
        <ModalInfoStore iconColor={"#ffd087"}/>
      </SafeAreaView>
    </>
  );
};

export default App;
