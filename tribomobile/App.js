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
//import ModalInfoStore from './components/modals/ModalInfoStore';
import SideNavScreen from './screens/SideNavScreen';

import {
  ModalDeleteStore,
  ModalDeleteStoreTexts,
} from './components/modals/ModalDeleteStore';
import ModalInfoStore from './components/modals/LittlePinInfo'

const App: () => React$Node = () => {
  const nameBusinessDummy = 'La fonda de Doña Luisa';
  const fullTextExampleWhenDeleteABussiness = `${ModalDeleteStoreTexts.description.business} "${nameBusinessDummy}" ?`;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
<<<<<<< HEAD
        <MainScreen />
=======
        <ModalDeleteStore
          title={ModalDeleteStoreTexts.title.business}
          description={fullTextExampleWhenDeleteABussiness}
        />
        <ModalDeleteStore
          title={ModalDeleteStoreTexts.title.account}
          description={ModalDeleteStoreTexts.description.account}
        />
        <ModalInfoStore serviceType="Service"/>
        <SideNavScreen/>
>>>>>>> 73c00c8385dfa2e22f2cb4b6d02e87deffb55aed
      </SafeAreaView>
    </>
  );
};

export default App;
