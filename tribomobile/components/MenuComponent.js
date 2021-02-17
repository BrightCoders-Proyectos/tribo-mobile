import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, Pressable} from 'react-native';
import MenusHide from '../components/menuHide';
import SideBarOption from '../components/SideBarOption';
import TitlesText from '../screensText/ContentText';
import LogoTribo from '../components/LogoTribo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import ClicableLink from '../components/ClicableLink';

const MenuComp = (props) => {

  const options = [
    TitlesText.title_1,
    TitlesText.title_2,
    TitlesText.title_3,
    TitlesText.title_4,
    TitlesText.title_5
  ];

  return(
    
    <View style={{width: '80 %', height: '100%', backgroundColor: '#197d94',marginTop: 0, marginLeft: -16, borderTopRightRadius: 24}}>
      <Pressable 
        style={{ alignSelf: 'flex-end',marginTop: 24, marginRight: 24}}
        onPress={props.tap}
      >
        <FontAwesomeIcon icon={faTimes} size={30} color={'white'} />
      </Pressable>
      <View style={{backgroundColor: 'red', width: '100%', height: 180}}>
        <LogoTribo width={'100%'} height={70} line={false} sideNav={true} />
      </View>
      
      {options.map((item) => 
        <SideBarOption
          textBold={item}
        /> 
      )}
      <ClicableLink/>
    </View>
  );
}

export default MenuComp;