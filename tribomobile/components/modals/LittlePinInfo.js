import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapsPin from '../../assets/maps-pin.png';
import Backicon from '../../assets/backicon.png';
import Food from '../../assets/foodicon.png';
import Store from '../../assets/storeicon.png';
import Service from '../../assets/serviceicon.png';
import CloseIcon from '../../assets/close.png';
import Colors from '../../src/Colors';
import { Content } from 'native-base';

function Description(props) {
  const {title, information, style} = props;
  return (
    <View style={style}>
      <Text style={styles.descriptionTitle}>{title}</Text>
      <Text style={styles.descriptionInfo}>{information}</Text>
    </View>
  );
}

function LittlePinInfo(props) {
  const {serviceType, modalVisible, setModalVisible} = props;
  let iconColor = 'red';
  //const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {/* <View style={styles.centeredView}>*/}
      {/* <Modal
          animationType="slide"
          transparent={true}
          visible={false}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>  */}
      <View style={styles.centeredView}>
        <View style={[styles.modalView, styles.shadowStyle]}>
          {/* <View style={styles.iconCloseView}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Image style={styles.icon} source={CloseIcon} />
                </TouchableOpacity>
              </View> */}
          <View style={styles.mapsPinView}>
            <View style={styles.iconContainer}>
              <Text style={{height:95}}>
                <Image
                  resizeMode="cover"
                  style={[
                    //styles.iconMapsPin,
                    serviceType === 'Food'
                      ? styles.foodPin
                      : serviceType === 'Service'
                      ? styles.servicePin
                      : styles.storePin,
                  ]}
                  source={Backicon}
                />
              </Text>
              <Text style={{height: 40,top: -65,left:8}}>
                <Image
                  resizeMode="cover"
                  style={styles.iconImagePin}
                  source={
                    serviceType === 'Food'
                      ? Food
                      : serviceType === 'Service'
                      ? Service
                      : Store
                  }
                />
              </Text>
            </View>
            <Description
              title={'La tiendita de Don Memo'}
              information={'+ INFO'}
              style={styles.descriptionLeft}
            />
          </View>
        </View>
        <View style={[styles.modalArrow, styles.shadowStyle]}></View>
      </View>
      {/* </Modal> */}
      {/* </View> */}
      {/* <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>show info(store) in a little pin</Text>
      </TouchableOpacity> */}
    </>
  );
}
const styles = StyleSheet.create({
  iconCloseView: {
    //height:0,
    alignItems: 'flex-end',
    //marginHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#828894',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f7f4f4',
    borderRadius: 7,
    paddingTop: 12,
    paddingBottom: 5,
    paddingHorizontal: 15,
    maxWidth: '50%',
    zIndex: 1,
  },
  modalArrow: {
    marginTop: -45,
    backgroundColor: '#f7f4f4',
    height: 45,
    width: 50,
    transform: [{rotateZ: '45deg'}],
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    marginTop: 10,
    backgroundColor: 'green',
    padding: 10,
    width: '80%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent:'center'
  },
  iconMapsPin: {
    height: 70,
    justifyContent: 'flex-start',
    backgroundColor: Colors.BackgroundLight,
    width: 53,
  },
  iconImagePin: {
    tintColor: Colors.White,
    top: -60,
    height: 25,
    width: 30,
    zIndex: 1,
  },
  foodPin: {
    tintColor: Colors.Yellow,
  },
  servicePin: {
    tintColor: Colors.OrangeFonts,
  },
  storePin: {
    tintColor: Colors.BlueDark,
  },
  mapsPinView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionLeft: {
    maxWidth: '75%',
    paddingHorizontal: 8,
  },
  descriptionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#828282',
  },
  descriptionInfo: {
    color: '#828894',
  },
});

export default LittlePinInfo;
