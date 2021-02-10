import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import MenusHide from '../components/MenuHide';
import SideBarOption from '../components/SideBarOption';
import TitlesText from '../screensText/ContentText';
import LogoTribo from '../components/LogoTribo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MenuComp = (props) => {
  const options = [1, 2, 3, 4, 5];
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: '80 %',
        height: windowHeight,
        backgroundColor: '#197d94',
        marginTop: 0,
        marginLeft: -16,
        borderTopRightRadius: 24,
        zIndex: 5,
      }}>
      <Pressable
        style={{alignSelf: 'flex-end', marginTop: 24, marginRight: 24}}
        onPress={props.tap}>
        <FontAwesomeIcon icon={faTimes} size={30} color={'white'} />
      </Pressable>
      <View style={{height: 150}}>
        <LogoTribo height={65} width={192} line={false} sideNav={true} />
      </View>
      {options.map((item) => (
        <SideBarOption key={item.toString()} textBold={TitlesText.title_1} />
      ))}
    </View>
  );
};

export default MenuComp;
