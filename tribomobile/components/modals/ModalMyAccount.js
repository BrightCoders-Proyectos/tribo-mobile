//ModalMyAccount
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import titlesText from '../../src/titlesText';

function Description(props) {
  const {title, information, style} = props;
  return (
    <View style={style}>
      <Text style={styles.descriptionTitle}>{title}</Text>
      <Text style={styles.descriptionInfo}>{information}</Text>
    </View>
  );
}

function ModalMyAccount() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.iconCloseView}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text>X</Text>
                  {/* <Image style={styles.icon} source={CloseIcon} /> */}
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.myAccountTitle}>
                  {titlesText.titlteMyAccountCuenta}
                </Text>
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountTelefono}
                  information={'333 333 3333'}
                  style={styles.descriptionStyle}
                />
                <Description
                  title={titlesText.titlteMyAccountCorreo}
                  information={'negocio@lamarket.app'}
                  style={styles.descriptionStyle}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountResponsable}
                  information={'Jose Ramirez'}
                  style={styles.descriptionStyle}
                />
                <Description
                  title={titlesText.titlteMyAccountNegocio}
                  information={'Abarrotes Don Memo'}
                  style={styles.descriptionStyle}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountDireccion}
                  information={
                    'Monte Calvario #2386 Col. Independencia, Colima, Colima'
                  }
                  style={[styles.descriptionStyle, styles.fullWidth]}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountGiro}
                  information={'Abarrotes'}
                  style={styles.descriptionStyle}
                />
                <Description
                  title={titlesText.titlteMyAccountVende}
                  information={'Productos'}
                  style={styles.descriptionStyle}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountFormaPago}
                  information={'Efectivo'}
                  style={[styles.descriptionStyle, styles.fullWidth]}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountTipoEntrega}
                  information={'Recoger producto - Servicio a domicilio'}
                  style={[styles.descriptionStyle, styles.fullWidth]}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountServicioDomicilio}
                  information={'Lunes-Domingo'}
                  style={[styles.descriptionStyle, styles.fullWidth]}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <Description
                  title={titlesText.titlteMyAccountHorario}
                  information={'9:00 a.m. a 9:00 p.m.'}
                  style={[styles.descriptionStyle, styles.fullWidth]}
                />
              </View>
              <View style={styles.rowVerticalStyle}>
                <TouchableOpacity
                  onPress={() => {
                    //setModalVisible(!modalVisible);
                  }} style={{width:'50%'}}>
                  <View style={styles.buttonSyle}>
                    <Text style={{color:"#fff",fontSize:18}}>Editar info</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    //setModalVisible(!modalVisible);
                  }} style={{width:'50%'}}>
                  <View style={styles.buttonSyle}>
                    <Text style={{color:"#fff",fontSize:18}} >Eliminar cuenta</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>
          Show Modal With the info of an My account
        </Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10,9,9,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f7f4f4',
    borderRadius: 7,
    paddingTop: 25,
    paddingBottom: 40,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: '92%',
  },
  openButton: {
    backgroundColor: 'blue',
    padding: 10,
    width: '80%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconCloseView: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#828894',
  },
  iconMapsPin: {
    width: 78,
    height: 76,
    tintColor: 'black',
    marginLeft: -10,
  },
  rowVerticalStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  descriptionStyle: {
    alignContent: 'center',
    width: '50%',
    paddingHorizontal: 8,
  },
  buttonSyle: {
    justifyContent:'center',
    alignItems: 'center',
    width: '90%',
    marginHorizontal:'5%',
    height:50,
    backgroundColor:"#828282",
    borderRadius:10,
  },
  fullWidth: {
    width: '100%',
  },
  description: {
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#828282',
  },
  descriptionInfo: {
    fontSize: 14,
    color: '#828894',
  },
  myAccountTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  contactView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  contactTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#828282',
    paddingLeft: 10,
    fontSize: 19,
  },
});

export default ModalMyAccount;
