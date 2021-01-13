import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RadioForm  from 'react-native-simple-radio-button';
import ContentText from '../screensText/ContentText';
import Colors from "../src/Colors";

var radio_props = [
    {label: ContentText.textRegistrationScreenCheckboxServicio, value: 0 },
    {label: ContentText.textRegistrationScreenCheckboxProducto, value: 1 },
    {label: ContentText.textRegistrationScreenCheckboxEfectivo, value: 2 }
  ];
 
function RadioButtomCustom () {
  return (
    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
         <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          buttonColor={Colors.BlueLight}
        />
    </View>
  );
};

export default RadioButtomCustom;
