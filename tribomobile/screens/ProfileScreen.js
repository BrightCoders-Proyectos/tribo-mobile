import React from 'react';
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
import {
  ModalDeleteStoreOrAccount,
  ModalDeleteTexts,
} from '../components/modals/ModalDeleteStoreOrAccout';
import TriboLogo from '../assets/tribologo.png';
import Profile from '../data/ProfileData';
import Titles from '../components/Titles';
import TitlesText from '../src/TitlesText';

const ProfileDataText = (props) => {
  const {dataText} = props;
  return <Text style={styles.dataTextStyle}>{dataText}</Text>;
};

function profileDataCheck(item) {
  item.length === 7 ? (item = ['Lunes - Domingo']) : item;
  return (
    <FlatList
      data={item}
      listKey={(item) => item.toString()}
      renderItem={({item}) => <ProfileDataText dataText={item} />}
      keyExtractor={(item) => item.toString()}
    />
  );
}

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <FlatList
        data={Profile}
        renderItem={({item}) => (
          <>
            <View style={[styles.container, styles.imageContainer]}>
              <Image style={styles.logo} source={TriboLogo} />
            </View>

            <View style={styles.container}>
              <Titles
                titleType={'screenTitle'}
                title={TitlesText.titlteMyAccountCuenta}
              />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titleProfileName}
              />
              <ProfileDataText dataText={item.accountName} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titleProfileEmail}
              />
              <ProfileDataText dataText={item.accountMail} />
            </View>

            <View style={styles.container}>
              <Titles
                titleType={'screenTitle'}
                title={TitlesText.titlteMyAccountMisNegocios}
              />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titleMyAccountNombre}
              />
              <ProfileDataText dataText={item.bussinessName} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titleStoreInfoPhone}
              />
              <ProfileDataText dataText={item.bussinessPhone} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountDireccion}
              />
              <ProfileDataText dataText={item.bussinessAddress} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountGiro}
              />
              <ProfileDataText dataText={item.bussinessRol} />
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountVende}
              />
              {profileDataCheck(item.bussinessSells)}
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountFormaPago}
              />
              {profileDataCheck(item.bussinessPaymentMethod)}
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountTipoEntrega}
              />
              {profileDataCheck(item.bussinessDeliveryType)}
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountServicioDomicilio}
              />
              {profileDataCheck(item.bussinessDeliverySchedule)}
              <Titles
                titleType={'formTitle'}
                title={TitlesText.titlteMyAccountHorario}
              />
              <View style={styles.scheduleContainer}>
                <ProfileDataText dataText={item.bussinessScheduleInicio} />
                <ProfileDataText dataText={item.bussinessScheduleA} />
                <ProfileDataText dataText={item.bussinessScheduleFin} />
              </View>
              <View style={styles.myBussinessButtonContainer}>
                <ModalDeleteStoreOrAccount
                  isBussiness={true}
                  title={ModalDeleteTexts.title.business}
                  description={item.bussinessName}
                />
                <CustomButton
                  size={ConfigBtnCustom.SIZE.SMALL}
                  titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                  bgBtn={ConfigBtnCustom.COLOR.YELLOW}
                  borderColorBtn={ConfigBtnCustom.COLOR.YELLOW}
                  titleColor={ConfigBtnCustom.COLOR.WHITE}
                  widthBtn={'82%'}
                  title={TitlesText.titleMyAccountButtonEditar}
                  marginTop={10}
                  disabled={false}
                />
              </View>
            </View>
            <View style={styles.longButtonsContainer}>
              <CustomButton
                size={ConfigBtnCustom.SIZE.SMALL}
                titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                bgBtn={ConfigBtnCustom.COLOR.GREEN}
                borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
                titleColor={ConfigBtnCustom.COLOR.WHITE}
                widthBtn={'100%'}
                title={TitlesText.titleMyAccountButtonAñadirNuevoNegocio}
                marginTop={0}
                disabled={false}
              />
              <ModalDeleteStoreOrAccount
                title={ModalDeleteTexts.title.account}
                description={ModalDeleteTexts.description.account}
              />
              <CustomButton
                size={ConfigBtnCustom.SIZE.SMALL}
                titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
                bgBtn={ConfigBtnCustom.COLOR.YELLOW}
                borderColorBtn={ConfigBtnCustom.COLOR.YELLOW}
                titleColor={ConfigBtnCustom.COLOR.WHITE}
                widthBtn={'100%'}
                title={TitlesText.titleMyAccountButtonEditarInfo}
                marginTop={16}
                disabled={false}
              />
            </View>
          </>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    width: '100%',
  },
  container: {
    borderBottomColor: Colors.GrayLight,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  myBussinessButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    width: '100%',
  },
  longButtonsContainer: {
    marginBottom: 64,
    width: '100%',
  },
  scheduleContainer: {
    flexDirection: 'row',
  },
  logo: {
    height: 42,
    marginVertical: 32,
    width: 130,
  },
  dataTextStyle: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 8,
  },
});

export default ProfileScreen;
