/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import OnBoardScreenConect from './screens/OnBoardScreenReceive';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <OnBoardScreenConect />
      </SafeAreaView>
    </>
  );
};

export default App;
