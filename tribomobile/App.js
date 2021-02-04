/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
// import titlesText from './src/TitlesText';
// import ContentText from './screensText/ContentText';
// import CheckboxCustom from './components/CheckBoxCustom';
// import RadioButtomCustom from './components/RadioButtonCustom';
// import LogoTribo from './components/LogoTribo';
// import ExampleButtons from './ExampleButtons';
import SideNavScreen from './screens/SideNavScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {/* <Text>{titlesText.titleRegistrationVenta}</Text>
          <RadioButtomCustom/>
          <Text>{titlesText.titleRegistrationFormasPago}</Text>
          <CheckboxCustom 
          value={false}
          title={ContentText.textRegistrationScreenCheckboxEfectivo}
          />
          {/* <CheckboxCustom
          value={false}
          title={ContentText.textRegistrationScreenCheckboxTarjeta}
          /> */}
          {/* <ExampleButtons /> */}
        <SideNavScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
