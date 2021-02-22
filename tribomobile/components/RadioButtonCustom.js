import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioForm  from 'react-native-simple-radio-button';
import ContentText from '../screensText/ContentText';
import Colors from "../src/Colors";

var radio_props = [
    {label: ContentText.textRegistrationScreenCheckboxComida, value: 0 },
    {label: ContentText.textRegistrationScreenCheckboxProducto, value: 1 },
    {label: ContentText.textRegistrationScreenCheckboxServicio, value: 2 }
  ];
 
function RadioButtomCustom ({customStyle, formHorizontal}) {
  return (
    <View>
         <RadioForm
          style={customStyle}
          radio_props={radio_props}
          initial={0}
          formHorizontal={formHorizontal}
          buttonColor={Colors.BlueLight}
        />
    </View>
  );
};

export default RadioButtomCustom;
