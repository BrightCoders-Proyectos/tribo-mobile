import React, {Component} from 'react';
import {View, Text,Pressable} from 'react-native';
import ContentText from '../screensText/ContentText';

const presionado = ()=>{
  
  console.log('pr')
}

const ClicableLink = () => {
    return (
      <Pressable style={{marginLeft: 60, marginTop: 84}}
        onPress={presionado}
      >
        <Text style={{textDecorationLine:'underline', color: 'white'}}>{ContentText.salirCuenta}</Text>
      </Pressable>
    );
  }

export default ClicableLink;