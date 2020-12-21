import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';
import Mountains from '../assets/mountains.png';

const FormInput = (props) => {
  const {title, placeholderString} = props;
  return (
    <View style={{alignItems: 'flex-start', width: '100%'}}>
      <Text style={{fontSize: 16, paddingBottom: 10, color: '#4A4A4A',fontWeight:"bold"}}>
        {title}
      </Text>
      <TextInput
        style={{
          color: '#4A4A4A',
          fontWeight: 'bold',
          height: 50,
          width: '100%',
          marginBottom: 20,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          fontSize: 16,
          borderWidth: 1,
          borderRadius: 5,
        }}
        placeholder={placeholderString}
      />
    </View>
  );
};

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{maxHeight: 100}}
            source={Mountains}
          />
          <Text style={styles.title}> {titlesText.titleLogo} </Text>
          <View>
            <Text style={styles.title}>
              {titlesText.titleRegistrationBienvenida}
            </Text>
            <Text style={{color: '#4A4A4A', fontSize: 18}}>
              {contentText.textRegistrationScreenLaMarket}
            </Text>
          </View>
          <View style={{alignItems: 'flex-start', width: '100%'}}>
            <Text style={[styles.title, {marginTop: 40}]}>
              {titlesText.titleRegistrationRegistro}
            </Text>
            <FormInput
              title={titlesText.titleRegistrationCelular}
              placeholderString={contentText.textRegistrationScreenInputEscribe}
            />
            <FormInput 
              title={titlesText.titleRegistrationCorreo}
              placeholderString={contentText.textRegistrationScreenInputRecibirás}
            />
            <FormInput 
              title={titlesText.titleRegistrationNombreResponsble}
              placeholderString={contentText.textRegistrationScreenInputEgNombre}
            />
            <FormInput 
              title={titlesText.titleRegistrationNombreNegocio}
              placeholderString={contentText.textRegistrationScreenInputEgNegocio}
            />
            <FormInput 
              title={titlesText.titleRegistrationDireccionNegocio}
              placeholderString={contentText.textRegistrationScreenInputCalle}
            />
            <FormInput
              placeholderString={contentText.textRegistrationScreenInputColonia}
            />
            <FormInput 
              placeholderString={contentText.textRegistrationScreenInputCodigo}
            />
            <FormInput 
              title={titlesText.titleRegistrationGiroNegocio}
              placeholderString={contentText.textRegistrationScreenInputRestaurante}
            />
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  title: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default RegistrationScreen;
