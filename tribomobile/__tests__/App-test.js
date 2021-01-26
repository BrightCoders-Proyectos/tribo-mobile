/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';
import colors from '../src/Colors';
import renderer from 'react-test-renderer';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{width: 50, height: 50, backgroundColor: colors.GreenContent}}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: colors.mediumvioletred,
        }}
      />
      <View style={{width: 150, height: 150, backgroundColor: colors.blueP}} />
    </View>
  );
};

It(){

}

export default App-test;
