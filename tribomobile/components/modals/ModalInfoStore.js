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
import Card from '../../assets/card.png';
import Cash from '../../assets/cash.png';
import DeliveryIcon from '../../assets/deliveryicon.png';
import PickupProduct from '../../assets/pickupproduct.png';
import TitlesText from '../../src/TitlesText';
import Titles from '../Titles';
import marker_food from '../../assets/marker_food.png';
import marker_store from '../../assets/marker_store.png';
import marker_service from '../../assets/marker_service.png';
import ContentText from '../../screensText/ContentText';
import {CustomButton, ConfigBtnCustom} from '../CustomButton';

function Description(props) {
  const {title, information, style} = props;
  return (
    <View style={style}>
      <Titles txtAlign="left" titleType="screenTitle" title={title} />
      {/* <Text style={styles.descriptionTitle}>{title}</Text> */}
      <Text style={styles.descriptionInfo}>{information}</Text>
    </View>
  );
}

function Contact(props) {
  const {icon, title,color} = props;
  return (
    <View style={styles.contactView}>
      <CustomButton
        icon={icon}
        size={36}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={color}
        borderColorBtn={color}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={246}
        title={title}
      />
    </View>
    // <View style={styles.contactView}>
    //   <Image style={styles.icon} source={icon} />
    //   <Text style={styles.contactTitle}>{title}</Text>
    // </View>
  );
}

function ModalInfoStore(props) {
  const {serviceType, storeID} = props;
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.iconCloseView}>
                <TouchableOpacity onPress={props.close}>
                  <Image style={styles.icon} source={CloseIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.mapsPinView}>
                <View style={{height: 110}}>
                  <Image
                    style={styles.iconMapsPin}
                    source={
                      serviceType === 'Food'
                        ? marker_food
                        : serviceType === 'Service'
                        ? marker_service
                        : marker_store
                    }
                  />
                </View>
                <Description
                  title={'La tiendita de Don Memo'}
                  information={'Tienda de abarrotes, frutas y verduras'}
                  style={styles.descriptionLeft}
                />
              </View>
              <View>
                <Text style={styles.infoText}>
                  {ContentText.textMyAccountScreenServicio}
                </Text>
                <Text style={styles.infoText}>
                  {ContentText.textMyAccountScreenHorario}
                </Text>
                <View style={{marginBottom: 15}}>
                  <Titles
                    txtAlign="left"
                    titleType=""
                    title={TitlesText.titleStoreInfoAddress}
                  />
                  <Text style={{fontSize: 16}}>
                    {ContentText.textoStoreInformationScreenDireccion}
                  </Text>
                </View>
                <View style={{marginBottom: 15}}>
                  <Titles
                    txtAlign="left"
                    titleType=""
                    title={TitlesText.titleStoreInfoTiposEntrega}
                  />
                  <View style={styles.tiposContainer}>
                    <Image source={PickupProduct} />
                    <Text style={styles.tiposText}>
                      {ContentText.textoStoreInformationRecogerProducto}
                    </Text>
                  </View>
                  <View style={styles.tiposContainer}>
                    <Image source={DeliveryIcon} />
                    <Text style={styles.tiposText}>
                      {ContentText.textoStoreInformationEnvioADomicilio}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 15}}>
                  <Titles
                    txtAlign="left"
                    titleType=""
                    title={TitlesText.titleStoreInfoTiposPagos}
                  />
                  <View style={styles.tiposContainer}>
                    <Image source={Cash} />
                    <Text style={styles.tiposText}>
                      {ContentText.textoStoreInformationEfectivo}
                    </Text>
                  </View>
                  <View style={styles.tiposContainer}>
                    <Image source={Card} />
                    <Text style={styles.tiposText}>
                      {ContentText.textoStoreInformationTarjeta}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 15}}>
                  <Titles
                    txtAlign="left"
                    titleType=""
                    title={TitlesText.titleStoreInfoPhone}
                  />
                  <Text style={{fontSize: 16}}>
                    {ContentText.textoStoreInformationScreenTelefono}
                  </Text>
                </View>
              </View>
              <Contact color={ConfigBtnCustom.COLOR.YELLOW} icon={PhoneIcon} title={'Llamar por teléfono'} />
              <Contact color={ConfigBtnCustom.COLOR.GREEN} icon={WhatsappIcon} title={'Envía un Whatsapp'} />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  tiposContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tiposText: {
    fontSize: 16,
    marginLeft: 8,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10,9,9,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#ffffff',
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
    width: 72,
    height: 96,
    //tintColor: 'black',
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
