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
import TitlesText from '../../src/TitlesText';
import {CustomButton, ConfigBtnCustom} from '../CustomButton';
import PropTypes from 'prop-types';

function Description(props) {
  const {title, information, style} = props;
  return (
    <View style={style}>
      <Text style={styles.descriptionTitle}>{title}</Text>
      <Text style={styles.descriptionInfo}>{information}</Text>
    </View>
  );
}

const ModalDeleteStoreTexts = {
  title: {
    business: TitlesText.titleDeleteBusiness,
    account: TitlesText.titleDeleteAccount,
  },
  description: {
    business: TitlesText.descriptionDeleteBussines,
    interrogationSimbol: TitlesText.interrogationSimbol,
    account: TitlesText.descriptionDeleteAccount,
  },
};

function ModalDeleteStore(props) {
  const {title, description} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {}}>
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
              <Description
                title={title}
                information={description}
                style={styles.description}
              />
              <View style={styles.containerButtons}>
                <CustomButton
                  style={{backgroundColor: 'black'}}
                  size={ConfigBtnCustom.SIZE.SMALL}
                  titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                  bgBtn={ConfigBtnCustom.COLOR.GREEN}
                  borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
                  titleColor={ConfigBtnCustom.COLOR.WHITE}
                  widthBtn={165}
                  title={'Confirmar'}
                  disabled={false}
                />
                <CustomButton
                  size={ConfigBtnCustom.SIZE.SMALL}
                  titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                  bgBtn={ConfigBtnCustom.COLOR.DISABLED}
                  borderColorBtn={ConfigBtnCustom.COLOR.DISABLED}
                  titleColor={ConfigBtnCustom.COLOR.WHITE}
                  widthBtn={165}
                  title={'Cancelar'}
                  disabled={false}
                  action={closeModal}
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
        <Text style={styles.textStyle}>Show Modal delete store</Text>
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
    marginHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#828894',
  },
  description: {
    maxWidth: '98%',
    marginHorizontal: 15,
  },
  descriptionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  descriptionInfo: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

ModalDeleteStore.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};


export { ModalDeleteStore, ModalDeleteStoreTexts };
