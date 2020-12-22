import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';
import Mountains from '../assets/mountains.png';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FormInput = (props) => {
  const {title, placeholderString} = props;
  return (
    <View style={{alignItems: 'flex-start', marginBottom: 10, width: '100%'}}>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 5,
          color: '#4A4A4A',
          fontSize: 16,
          fontWeight: 'bold',
          height: 50,
          paddingHorizontal: 10,
          width: '100%',
        }}
        placeholder={placeholderString}
      />
    </View>
  );
};

const RegistrationCheckbox = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {checkboxLabel} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text
        style={{
          color: '#4A4A4A',
          fontSize: 14,
          fontWeight: 'bold',
        }}>
        {checkboxLabel}
      </Text>
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
            <Text style={styles.subtitle}>{titlesText.titlteMyAccountTelefono}</Text>
            <FormInput
              placeholderString={contentText.textRegistrationScreenInputEscribe}
            />
            <Text style={styles.subtitle}>{titlesText.titleRegistrationCorreo}</Text>
            <FormInput
              placeholderString={
                contentText.textRegistrationScreenInputRecibirás
              }
            />
            <Text style={styles.subtitle}>{titlesText.titleRegistrationNombreResponsble}</Text>
            <FormInput
              placeholderString={
                contentText.textRegistrationScreenInputEgNombre
              }
            />
            <Text style={styles.subtitle}>{titlesText.titleRegistrationNombreNegocio}</Text>
            <FormInput
              placeholderString={
                contentText.textRegistrationScreenInputEgNegocio
              }
            />
            <Text style={styles.subtitle}>{titlesText.titleRegistrationDireccionNegocio}</Text>
            <FormInput
              placeholderString={contentText.textRegistrationScreenInputCalle}
            />
            <FormInput
              placeholderString={contentText.textRegistrationScreenInputColonia}
            />
            <FormInput
              placeholderString={contentText.textRegistrationScreenInputCodigo}
            />
            <Text style={styles.subtitle}>{titlesText.titleRegistrationGiroNegocio}</Text>
            <FormInput
              placeholderString={
                contentText.textRegistrationScreenInputRestaurante
              }
            />

            <Text style={styles.subtitle}>
              {titlesText.titleRegistrationVenta}
            </Text>
            <View style={styles.checkboxContainer}>
              <RegistrationCheckbox
                checkboxLabel={contentText.textRegistrationScreenCheckboxComida}
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxServicio
                }
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxProducto
                }
              />
            </View>

            <Text style={styles.subtitle}>
              {titlesText.titleRegistrationFormasPago}
            </Text>
            <View style={styles.checkboxContainer}>
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxEfectivo
                }
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxTarjeta
                }
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxTransferencia
                }
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxDeposito
                }
              />
            </View>
            <Text style={styles.subtitle}>
              {titlesText.titlteMyAccountTipoEntrega}
            </Text>
            <View style={styles.checkboxContainer}>
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxRecoger
                }
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxServicioDomicilio
                }
              />
            </View>
            <Text style={styles.subtitle}>
              {titlesText.titleRegistrationDiasAbierto}
            </Text>
            <View style={styles.checkboxContainer}>
              <RegistrationCheckbox
                checkboxLabel={contentText.textRegistrationScreenCheckboxLunes}
              />
              <RegistrationCheckbox
                checkboxLabel={contentText.textRegistrationScreenCheckboxMartes}
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxMiercoles
                }
              />
              <RegistrationCheckbox
                checkboxLabel={contentText.textRegistrationScreenCheckboxJueves}
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxViernes
                }
              />
              <RegistrationCheckbox
                checkboxLabel={contentText.textRegistrationScreenCheckboxSabado}
              />
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxDomingo
                }
              />
            </View>
            <Text style={styles.subtitle}>
              {titlesText.titleRegistrationHorario}
            </Text>
            <View style={styles.timeContainer}>
              <TextInput
                style={styles.inputTime}
                placeholder={contentText.textRegistrationScreenInputHoraInicio}
              />
              <Text style={{margin: 15}}>{contentText.textRegistrationScreenA}</Text>
              <TextInput
                style={styles.inputTime}
                placeholder={contentText.textRegistrationScreenInputHoraFin}
              />
            </View>

            <View style={styles.checkboxContainer}>
              <RegistrationCheckbox
                checkboxLabel={
                  contentText.textRegistrationScreenCheckboxHeLeido
                }
              />
              <RegistrationCheckbox
                checkboxLabel={contentText.textRegistrationScreenCheckboxDeseo}
              />
            </View>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>
                {contentText.textRegistrationScreenButtonRegistrarme}
              </Text>
            </TouchableOpacity>
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
    marginBottom: 20,
    marginLeft: -5,
    width: '100%',
  },
  subtitle: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5
  },
  registerButton: {
    alignSelf: 'center',
    backgroundColor: '#4A4A4A',
    borderRadius: 10,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    padding: 25,
  },
  timeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 20 
  },
  inputTime: {
    borderRadius: 10,
    borderWidth: 1, 
    maxWidth: 90,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegistrationScreen;
