import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MenuHide = () => {
  return (
    <View style={{maxWidth: '80%', alignItems: 'flex-end'}}>
      <FontAwesomeIcon icon={faTimes} size={30} color={'lightgray'} />
    </View>
  );
};

export default MenuHide;
