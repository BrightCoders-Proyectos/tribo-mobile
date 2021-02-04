import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const ClicableLink = () => {
    return (
      <TouchableOpacity style={{alignItems: 'center', marginTop: 85}}>
        <Text style={{textDecorationLine:'underline', color: 'gray'}}>Salir de mi cuenta</Text>
      </TouchableOpacity>
    );
  }

export default ClicableLink;