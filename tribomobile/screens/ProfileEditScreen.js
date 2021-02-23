import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CustomButton, ConfigBtnCustom} from '../components/CustomButton';
import Colors from '../src/Colors';
import ContentText from '../screensText/ContentText';
import CheckBox from '../components/CheckBoxCustom';
import Profile from '../data/ProfileData';
import RadioButtom from '../components/RadioButtonCustom';
import TriboLogo from '../assets/tribologo.png';
import TextInput from '../components/TextInputs';
import Titles from '../components/Titles';
import TitlesText from '../src/TitlesText';

export default EditProfile = () => {
  const [toggleCheckBoxEfectivo, setToggleCheckBoxEfectivo] = useState(false);
  const [toggleCheckBoxTarjeta, setToggleCheckBoxTarjeta] = useState(false);
  const [toggleCheckBoxTransferencia, setToggleCheckBoxTransferencia] = useState(false);
  const [toggleCheckBoxDeposito, setToggleCheckBoxDeposito] = useState(false);
  const [toggleCheckBoxRecoger, setToggleCheckBoxRecoger] = useState(false);
  const [toggleCheckBoxServicioDomicilio, setToggleCheckBoxServicioDomicilio] = useState(false);
  const [toggleCheckBoxLunes, setToggleCheckBoxLunes] = useState(false);
  const [toggleCheckBoxMartes, setToggleCheckBoxMartes] = useState(false);
  const [toggleCheckBoxMiercoles, setToggleCheckBoxMiercoles] = useState(false);
  const [toggleCheckBoxJueves, setToggleCheckBoxJueves] = useState(false);
  const [toggleCheckBoxViernes, setToggleCheckBoxViernes] = useState(false);
  const [toggleCheckBoxSabado, setToggleCheckBoxSabado] = useState(false);
  const [toggleCheckBoxDomingo, setToggleCheckBoxDomingo] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Profile}
        showsVerticalScrollIndicator={false}
        listKey={(item) => item.toString()}
        renderItem={({item}) => (
          <>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={TriboLogo} />
            </View>
            <Titles
              titleType={'screenTitle'}
              title={TitlesText.titleProfileEditBussiness}
            />
            <View style={styles.sectionContainer}>
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titleMyAccountNombre}
              />
              <TextInput placeholderText={item.accountName} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titleStoreInfoPhone}
              />
              <TextInput placeholderText={item.bussinessPhone} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountDireccion}
              />
              <TextInput placeholderText={item.bussinessAddress} />
              <TextInput placeholderText={item.bussinessNeihgbourhood} />
              <View style={styles.directionContainer}>
                <TextInput
                  customStyle={styles.postalCodeAndStateInput}
                  placeholderText={item.bussinessPC}
                />
                <TextInput
                  customStyle={styles.postalCodeAndStateInput}
                  placeholderText={item.bussinessState}
                />
              </View>
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountGiro}
              />
              <TextInput placeholderText={item.bussinessRol} />
            </View>
            <View style={styles.sectionContainer}>
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountVende}
              />
              <RadioButtom
                formHorizontal={false}
                customStyle={styles.radioButtom}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountFormaPago}
              />
              <CheckBox
                title={ContentText.textRegistrationScreenCheckboxEfectivo}
                value={toggleCheckBoxEfectivo}
                onChange={(newValue) => setToggleCheckBoxEfectivo(newValue)}
              />
              <CheckBox
                title={ContentText.textRegistrationScreenCheckboxTarjeta}
                value={toggleCheckBoxTarjeta}
                onChange={(newValue) => setToggleCheckBoxTarjeta(newValue)}
              />
              <CheckBox
                title={ContentText.textRegistrationScreenCheckboxTransferencia}
                value={toggleCheckBoxTransferencia}
                onChange={(newValue) => setToggleCheckBoxTransferencia(newValue)}
              />
              <CheckBox
                title={ContentText.textRegistrationScreenCheckboxDeposito}
                value={toggleCheckBoxDeposito}
                onChange={(newValue) => setToggleCheckBoxDeposito(newValue)}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountTipoEntrega}
              />
              <CheckBox
                title={ContentText.textRegistrationScreenCheckboxRecoger}
                value={toggleCheckBoxRecoger}
                onChange={(newValue) => setToggleCheckBoxRecoger(newValue)}
              />
              <CheckBox
                title={
                  ContentText.textRegistrationScreenCheckboxServicioDomicilio
                }
                value={toggleCheckBoxServicioDomicilio}
                onChange={(newValue) => setToggleCheckBoxServicioDomicilio(newValue)}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Titles
                titleType={'formTitle'}
                title={
                  ContentText.textRegistrationScreenCheckboxServicioDomicilio
                }
              />
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxLunes}
                  value={toggleCheckBoxLunes}
                  onChange={(newValue) => setToggleCheckBoxLunes(newValue)}
                />
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxMiercoles}
                  value={toggleCheckBoxMiercoles}
                  onChange={(newValue) => setToggleCheckBoxMiercoles(newValue)}
                />
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxViernes}
                  value={toggleCheckBoxViernes}
                  onChange={(newValue) => setToggleCheckBoxViernes(newValue)}
                />
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxDomingo}
                  value={toggleCheckBoxDomingo}
                  onChange={(newValue) => setToggleCheckBoxDomingo(newValue)}
                />
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxMartes}
                  value={toggleCheckBoxMartes}
                  onChange={(newValue) => setToggleCheckBoxMartes(newValue)}
                />
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxJueves}
                  value={toggleCheckBoxJueves}
                  onChange={(newValue) => setToggleCheckBoxJueves(newValue)}
                />
                <CheckBox
                  title={ContentText.textRegistrationScreenCheckboxSabado}
                  value={toggleCheckBoxSabado}
                  onChange={(newValue) => setToggleCheckBoxSabado(newValue)}
                />
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountHorario}
              />
              <View style={styles.scheduleContainer}>
                <TextInput
                  customStyle={styles.inputTimeSchedule}
                  placeholderText={item.bussinessScheduleInicio}
                />
                <Text style={styles.scheduleText}>
                  {ContentText.textRegistrationScreenA}
                </Text>
                <TextInput
                  customStyle={styles.inputTimeSchedule}
                  placeholderText={item.bussinessScheduleFin}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                size={ConfigBtnCustom.SIZE.SMALL}
                titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                bgBtn={ConfigBtnCustom.COLOR.DISABLED}
                borderColorBtn={ConfigBtnCustom.COLOR.DISABLED}
                titleColor={ConfigBtnCustom.COLOR.WHITE}
                widthBtn={'82%'}
                title={ContentText.textRegistrationScreenButtonCancelar}
                marginTop={16}
                disabled={false}
              />
              <CustomButton
                size={ConfigBtnCustom.SIZE.SMALL}
                titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                bgBtn={ConfigBtnCustom.COLOR.GREEN}
                borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
                titleColor={ConfigBtnCustom.COLOR.WHITE}
                widthBtn={'82%'}
                title={ContentText.textRegistrationScreenButtonGuardar}
                marginTop={16}
                disabled={false}
              />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.GrayLight,
    marginTop: 24,
    marginBottom: 16,
  },
  sectionContainer: {
    marginVertical: 10,
  },
  directionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkBoxContainer: {
    alignContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxHeight: 170,
    width: '60%',
  },
  scheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 64,
  },
  image: {
    height: 42,
    marginVertical: 32,
    width: 130,
  },
  postalCodeAndStateInput: {
    width: '47%',
  },
  radioButtom: {
    marginTop: 10,
  },
  inputTimeSchedule: {
    width: '40%',
  },
  scheduleText: {
    alignSelf: 'center',
  },
});
