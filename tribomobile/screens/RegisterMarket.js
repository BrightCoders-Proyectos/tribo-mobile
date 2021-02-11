import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogoTribo from '../components/LogoTribo';
import Titles from '../components/Titles';
import TextInputs from '../components/TextInputs';

const RegisterMarKet = (props) => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{width: '100%', height:100, marginTop:20}}>
        <LogoTribo
          width={150}
          height={150}
          line={true}
          sideNav={false}
        />
      </View>
      <View style={{backgroundColor:'red',flex: 1, marginTop:50, alignItems:'center',flexDirection:'column',height: 500}}>
            <Titles titleType="screenTitle" title="Agrega tu negocio" />
            <Titles txtAlign="center" titleType="inputTitle" title="Cuéntanos sobre tu negocio y empieza a conectar con tus clientes" />
            <View style={{marginTop:30}}>
                <Titles txtAlign="center" titleType="inputTitle" title="Como se llama tu negocio"/>
                <TextInputs textInputType="searchBar" placeholderText="e.g Abarrotes Carranza"/>
            </View>
            <View style={{marginTop:10}}>
                <Titles txtAlign="center" titleType="inputTitle" title="Telefono de negocio"/>
                <TextInputs textInputType="searchBar" placeholderText="312 145 9032"/>
            </View>
        </View>
    </View>
  );
};

export default RegisterMarKet;
