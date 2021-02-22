import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../src/Colors';

function CheckboxCustom({customStyle, onChange, title, value}) {
  return (
    <View style={[customStyle, styles.checkBoxView]}>
      {/* <CheckBox checked={value} color={Colors.BlueLight}/>
       */}
      <CheckBox
        disabled={false}
        value={value}
        onValueChange={onChange}
        tintColors={{true: Colors.BlueP}}
      />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default CheckboxCustom;
