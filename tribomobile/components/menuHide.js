import React, {Component, useState} from 'react';
import {View, Text, Touchable, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MenuHide = (props) => {

  return (
    <Pressable 
      style={{marginTop: 14, marginLeft: 16, maxWidth: 30}}>
      <FontAwesomeIcon icon={faTimes} size={30} color={'white'} />
    </Pressable>
  );
};

export default MenuHide;

