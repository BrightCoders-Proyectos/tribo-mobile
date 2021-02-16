import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const pressed = ()=>{
  console.log('salir')
}

const ClicableLink = () => {
    return (
      <TouchableOpacity 
        style={{marginLeft: 44, marginTop: 85}}
        onPress={pressed}
      >
        <Text style={{textDecorationLine:'underline', color: 'white'}}>Salir de mi cuenta</Text>
      </TouchableOpacity>
    );
  }

export default ClicableLink;