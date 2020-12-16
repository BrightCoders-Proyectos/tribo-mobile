import React from 'react';
import   {TouchableOpacity, Text, View} from 'react-native'

import MenuHide from '../components/menuHide'
import SideBarOption from '../components/SideBarOption'

const ClicableLink = () => {
  return(
    <TouchableOpacity style={{alignItems: 'center', marginTop: 85}}>
      <Text style={{textDecorationLine:'underline', color: 'gray'}}>Salir de mi cuenta</Text>
    </TouchableOpacity>
  );
}


const SideNavScreen = ()=>{
  return(
    <>   
      <TouchableOpacity>
        <MenuHide/>
      </TouchableOpacity>    
      <View style={{marginTop: '40%'}}>
        <SideBarOption
           textSideBar={'Regístrate/Mi cuenta'}
        />
        <SideBarOption
          textSideBar={'#QuédateEnCasa' }
          textSideBar2={'Recomendaciones para \nel asilamiento preventivo'}
        />
        <SideBarOption
          textSideBar={'Términos y condiciones '}
        />
        <SideBarOption
          textSideBar={'FAQ'}
        />
        <SideBarOption
          textSideBar={'Políticas de privacidad'}
        />
        <View style={{maxWidth: '80%'}}>
          <ClicableLink/>
        </View>
      </View>  
    </>
  );
}


export default SideNavScreen;