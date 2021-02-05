import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import MenuComp from '../components/MenuComponent'


const BtnHideShowMenu = () => {

  const [showMenu, setShowMenu] = useState(false)

  console.log(showMenu + ' menu');

  return (
    <>
    <View>
      {showMenu && <MenuComp tap={()=>{setShowMenu(!showMenu)}}/>}
      <Pressable 
        style={{width: 30, height:30, marginTop: 14, marginLeft: 16}}
        onPress={()=> {setShowMenu(!showMenu)}}>
        <FontAwesomeIcon icon={faBars} size={30} color={'#9CA3AF'} />
      </Pressable>
    </View>
    </>
  );
};

export default BtnHideShowMenu;
