import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, Pressable} from 'react-native';
import MenusHide from '../components/menuHide';
import SideBarOption from '../components/SideBarOption';
import TitlesText from '../screensText/ContentText';
import LogoTribo from '../components/LogoTribo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MenuComp = (props) => {

  const options = [1,2,3,4,5]

  return(
    
    <View style={{width: '80 %', height: '100%', backgroundColor: '#197d94',marginTop: 0, marginLeft: -16, borderTopRightRadius: 24}}>
      <Pressable 
        style={{ alignSelf: 'flex-end',marginTop: 24, marginRight: 24}}
        onPress={props.tap}
      >
        <FontAwesomeIcon icon={faTimes} size={30} color={'white'} />
      </Pressable>
      <View>
        {/* <LogoTribo height={50} width={100} line={false}/> */}
      </View>
      {options.map((item) => 
        <SideBarOption
          textBold={TitlesText.title_1}
        /> 
      )}
    
    </View>
  );
}

export default MenuComp;