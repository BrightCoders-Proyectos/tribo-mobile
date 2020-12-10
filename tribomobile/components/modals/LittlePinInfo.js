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

function Description(props) {
  const {title, information, style} = props;
  return (
    <View style={style}>
      <Text style={styles.descriptionTitle}>{title}</Text>
      <Text style={styles.descriptionInfo}>{information}</Text>
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
              <View style={styles.mapsPinView}>
                <View>
                  <Image style={styles.iconMapsPin} source={MapsPin} />
                </View>
                <Description
                  title={'La tiendita de Don Memo'}
                  information={'+ INFO'}
                  style={styles.descriptionLeft}
                />
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
        <Text style={styles.textStyle}>show info(store) in a little pin</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
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
    paddingBottom: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: '48%',
  },
  openButton: {
    backgroundColor: 'green',
    padding: 10,
    width: '80%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconMapsPin: {
    width: 58,
    height: 56,
    tintColor: 'black',
    marginLeft: -10,
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

export default ModalInfoStore;
