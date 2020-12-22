import React, { useState } from 'react';
import   {TouchableOpacity, Text, View} from 'react-native'
import MenuHide from '../components/menuHide'
import SideBarOption from '../components/SideBarOption'

const arrayTextBold = [
  {id:1, title:'Regístrate/Mi cuenta'},
  {id:2, title:'#QuédateEnCasa'}, 
  {id:3, title:'Términos y condiciones'},
  {id:4, title:'FAQ'},
  {id:5, title:'Políticas de privacidad'}
]

const SideBarMapFunc = () => {
  return arrayTextBold.map(item => 
    <SideBarOption
      textBold={item.title}
      textNormal={item.id===2 ? 'Recomendaciones para \nel asilamiento preventivo' : null}
    />
  )
}

const ClicableLink = () => {
  return (
    <TouchableOpacity style={{alignItems: 'center', marginTop: 85}}>
      <Text style={{textDecorationLine:'underline', color: 'gray'}}>Salir de mi cuenta</Text>
    </TouchableOpacity>
  );
}

const SideNavScreen = () => {
  return (
    <>   
      <TouchableOpacity>
        <MenuHide/>
      </TouchableOpacity>    
      <View style={{marginTop: '40%'}}>
        <SideBarMapFunc/>
        <View style={{maxWidth: '80%'}}>
          <ClicableLink/>
        </View>
      </View>  
    </>
  );
}

export default SideNavScreen;