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
import titlesText from '../src/TitlesText';
import contentText from '../screensText/ContentText';
import Mountains from '../assets/mountains.png';
import LogoTribo from '../components/LogoTribo';
import Titles from '../components/Titles';
import TextInputs from '../components/TextInputs';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FormInput = (props) => {
  const {title, placeholderText} = props;
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
        placeholder={placeholderText}
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
          <View style={{width: '100%', height: 100, marginTop: 20}}>
            <LogoTribo width={150} height={150} line={true} sideNav={false} />
          </View>
          <Text style={styles.title}> {titlesText.titleLogo} </Text>
          <View>
            <View style={{alignItems: 'center'}}>
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
          <View style={{alignItems: 'flex-start', width: '100%', marginTop:50}}>
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
            {/* <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titlteMyAccountTelefono}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputEscribe}
            />
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationCorreo}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputRecibirás}
            /> 
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationNombreResponsble}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputEgNombre}
            />
            <Titles
              txtAlign="left"
              titleType=""
              title={titlesText.titleRegistrationNombreNegocio}
            />
            <TextInputs
              placeholderText={contentText.textRegistrationScreenInputEgNegocio}
            />*/}
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
              <Text style={{margin: 15}}>
                {contentText.textRegistrationScreenA}
              </Text>
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
