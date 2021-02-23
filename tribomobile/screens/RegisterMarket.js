import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogoTribo from '../components/LogoTribo';
import Titles from '../components/Titles';
import TextInputs from '../components/TextInputs';

const RegisterMarKet = (props) => {
  
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{width: '100%', height:100, marginTop:20}}>
        <LogoTribo
          width={150}
          height={150}
          line={true}
          sideNav={false}
        />
      </View>
      <View style={{marginTop:50,padding:20}}>
            <View style={{alignItems:'center'}}>
                <Titles titleType="screenTitle" title="Agrega tu negocio" />
                <Titles txtAlign="center" titleType="inputTitle" title="Cuéntanos sobre tu negocio y empieza a conectar con tus clientes" />
            </View>
            <View style={{marginTop:30}}>
                <Titles txtAlign="left" titleType="inputTitle" title="Como se llama tu negocio?"/>
                <TextInputs textInputType="" placeholderText="e.g Abarrotes Carranza"/>
            </View>
            <View style={{marginTop:10}}>
                <Titles txtAlign="left" titleType="inputTitle" title="Telefono de negocio"/>
                <TextInputs textInputType="" placeholderText="Ingresa el telefono celular"/>
                
            </View>
        </View>
    </View>
  );
};

export default RegisterMarKet;
