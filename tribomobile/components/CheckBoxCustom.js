import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { CheckBox } from 'native-base';
import Colors from "../src/Colors";

function CheckboxCustom ({title,value}) {
  return (
    <View style={styles.checkBoxView}>
      <CheckBox checked={value} color={Colors.BlueLight}/>
      <Text style={{marginLeft: 15}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxView:{
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent:'center',
    marginLeft:35, 
    marginTop:10
  }
});

export default CheckboxCustom;
