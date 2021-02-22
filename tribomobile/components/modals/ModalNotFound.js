import React, {useState} from 'react';
import {Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomButton, ConfigBtnCustom} from '../CustomButton';
import ContentText from '../../screensText/ContentText';
import TitlesText from '../../src/TitlesText';

function Description(props) {
  const {title, information, style} = props;
  return (
    <View style={style}>
      <Text style={styles.descriptionTitle}>{title}</Text>
      <Text style={styles.descriptionInfo}>{information}</Text>
    </View>
  );
}

export default function ModalNotFound({visibleState}) {
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleState}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Description
              title={TitlesText.titleBussinessNotFound}
              information={ContentText.textModalNotFound}
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
                widthBtn={'80%'}
                title={ContentText.textModalNotFoundButton}
                disabled={false}
                marginTop={32}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
    height: 350,
    marginVertical: 20,
    marginHorizontal: 16,
    backgroundColor: '#f7f4f4',
    borderRadius: 15,
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
    maxWidth: '90%',
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
    marginBottom: 20,
  },
  descriptionInfo: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
});
