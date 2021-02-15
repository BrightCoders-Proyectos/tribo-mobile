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
import titlesText from '../src/TitlesText';
import contentText from '../screensText/ContentText';
import Mountains from '../assets/mountains.png';
import LogoTribo from '../components/LogoTribo';
import Titles from '../components/Titles';
import TextInputs from '../components/TextInputs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CheckBoxCustom from '../components/CheckBoxCustom';
import {Dimensions} from 'react-native';

const RegistrationScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={[styles.container, {height: windowHeight}]}>
      <LogoTribo width={'100%'} height={70} line={true} sideNav={false} />
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={{width: '100%', height: 100, marginTop: 20}}>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Titles
                titleType="screenTitle"
                title={titlesText.titleRegistrationBienvenida}
              />
              <Titles
                txtAlign="center"
                titleType="inputTitle"
                title="Cuéntanos sobre tu negocio y empieza a conectar con tus clientes"
              />
            </View>
          </View>
          <View
            style={{alignItems: 'flex-start', width: '100%', marginTop: 50}}>
            <Titles
              txtAlign="center"
              titleType="formTitle"
              title={titlesText.titleRegistrationRegistro}
            />
            <Titles
              txtAlign="left"
              titleType="inputTitle"
              title="Como se llama tu negocio?"
            />
            <TextInputs
              textInputType=""
              placeholderText={contentText.textRegistrationScreenInputEgNegocio}
            />
            <Titles
              txtAlign="left"
              titleType="inputTitle"
              title="Telefono de negocio"
            />
            <TextInputs
              textInputType=""
              placeholderText="Ingresa el telefono celular"
            />
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationDireccionNegocio}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputCalle}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputColonia}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputCodigo}
            />
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationGiroNegocio}
            />
            <TextInputs
              placeholderText={
                contentText.textRegistrationScreenInputRestaurante
              }
            />
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationVenta}
            />
            <View style={styles.checkboxContainer}>
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxComida}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxServicio}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxProducto}
              />
            </View>
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationFormasPago}
            />
            <View style={styles.checkboxContainer}>
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxEfectivo}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxTarjeta}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxTransferencia}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxDeposito}
              />
            </View>
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titlteMyAccountTipoEntrega}
            />
            <View style={styles.checkboxContainer}>
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxRecoger}
              />
              <CheckBoxCustom
                value={false}
                title={
                  contentText.textRegistrationScreenCheckboxServicioDomicilio
                }
              />
            </View>
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationDiasAbierto}
            />
            <View style={styles.checkboxContainer}>
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxLunes}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxMartes}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxMiercoles}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxJueves}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxViernes}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxSabado}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxDomingo}
              />
            </View>
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationHorario}
            />
            <View style={styles.timeContainer}>
              <TextInput
                style={styles.inputTime}
                placeholder={contentText.textRegistrationScreenInputHoraInicio}
              />
              <Titles
                txtAlign="left"
                titleType=""
                title={titlesText.textRegistrationScreenA}
              />
              <TextInput
                style={styles.inputTime}
                placeholder={contentText.textRegistrationScreenInputHoraFin}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxHeLeido}
              />
              <CheckBoxCustom
                value={false}
                title={contentText.textRegistrationScreenCheckboxDeseo}
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
    padding: 24,
  },
  formContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
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
    marginBottom: 5,
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
    marginBottom: 20,
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
