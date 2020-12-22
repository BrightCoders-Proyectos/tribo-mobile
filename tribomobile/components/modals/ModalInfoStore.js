import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CloseIcon from '../../assets/close.png';
import MapsPin from '../../assets/maps-pin.png';
import PhoneIcon from '../../assets/phone-call.png';
import WhatsappIcon from '../../assets/whatsapp.png';
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

function Contact(props) {
  const {icon, title} = props;
  return (
    <View style={styles.contactView}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.contactTitle}>{title}</Text>
    </View>
  );
}

function ModalInfoStore() {
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
                  <Image style={styles.icon} source={CloseIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.mapsPinView}>
                <View>
                  <Image style={styles.iconMapsPin} source={MapsPin} />
                </View>
                <Description
                  title={'La tiendita de Don Memo'}
                  information={'Tienda de abarrotes, frutas y verduras'}
                  style={styles.descriptionLeft}
                />
              </View>
              <Description
                title={titlesText.titleStoreInfoAddress}
                information={
                  'Monte Calvario #2387 entre Jorulio y Monte Atlas, Col. Independencia, Colima,Colima'
                }
                style={styles.description}
              />
              <Description
                title={titlesText.titleStoreInfoPhone}
                information={'333 333 333 3333'}
                style={styles.description}
              />
              <Contact icon={PhoneIcon} title={'Llamar por teléfono'} />
              <Contact icon={WhatsappIcon} title={'Envía un mensaje'} />
            </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal Map with info of store</Text>
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
    backgroundColor: '#F194FF',
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
  mapsPinView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  descriptionLeft: {
    maxWidth: '75%',
    paddingHorizontal: 8,
  },
  description: {
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#828282',
  },
  descriptionInfo: {
    color: '#828894',
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

export default ModalInfoStore;
