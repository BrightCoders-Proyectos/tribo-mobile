import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import titlesText from '../src/TitlesText';
import contentText from '../screensText/ContentText';
import LogoTribo from '../components/LogoTribo';
import Titles from '../components/Titles';
import TextInputs from '../components/TextInputs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CheckBoxCustom from '../components/CheckBoxCustom';
import {CustomButton, ConfigBtnCustom} from '../components/CustomButton';
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
                title={contentText.textRegistrationScreenCuentanos}
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
              title={titlesText.titleRegistrationComoSeLama}
            />
            <TextInputs
              textInputType=""
              placeholderText={contentText.textRegistrationScreenInputEgNegocio}
            />
            <Titles
              txtAlign="left"
              titleType="inputTitle"
              title={titlesText.titleRegistrationTelefonoNegocio}
            />
            <TextInputs
              textInputType=""
              placeholderText={contentText.textRegistrationScreenInputIngresaTelefono}
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
              <View>
                <TextInputs
                  textInputType=""
                  placeholderText={
                    contentText.textRegistrationScreenInputHoraInicio
                  }
                />
              </View>
              <Titles
                txtAlign="left"
                titleType=""
                title={contentText.textRegistrationScreenA}
              />
              <View>
                <TextInputs
                  textInputType=""
                  placeholderText={
                    contentText.textRegistrationScreenInputHoraFin
                  }
                />
              </View>
            </View>
            <View style={{width:'100%'}}>
              <CustomButton
                size={36}
                titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                bgBtn={ConfigBtnCustom.COLOR.GREEN}
                borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
                titleColor={ConfigBtnCustom.COLOR.WHITE}
                widthBtn={246}
                title={contentText.textRegistrationScreenButtonAnadir}
              />
            </View>
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
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    marginBottom: 20,
    justifyContent: 'space-around',
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
