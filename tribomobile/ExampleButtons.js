import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {CustomButton, ConfigBtnCustom} from './components/CustomButton';

function ExampleButtons() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setIsActive(!isActive);
        }}
        title="Desactivar/activar boton 3 y 6..."
        color="#841584"
      />

      <CustomButton
        size={ConfigBtnCustom.SIZE.LARGE}
        titleSize={ConfigBtnCustom.TITLE_SIZE.LARGE}
        bgBtn={ConfigBtnCustom.COLOR.GREEN}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={ConfigBtnCustom.WIDTH.LARGE_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
      />

      <CustomButton
        size={ConfigBtnCustom.SIZE.MEDIUM}
        titleSize={ConfigBtnCustom.TITLE_SIZE.MEDIUM}
        bgBtn={ConfigBtnCustom.COLOR.YELLOW}
        borderColorBtn={ConfigBtnCustom.COLOR.YELLOW}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={ConfigBtnCustom.WIDTH.MEDIUM_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
      />

      <CustomButton
        size={ConfigBtnCustom.SIZE.SMALL}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={ConfigBtnCustom.COLOR.GREEN}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={ConfigBtnCustom.WIDTH.SMALL_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
        disabled={isActive}
      />
      <CustomButton
        size={ConfigBtnCustom.SIZE.LARGE}
        titleSize={ConfigBtnCustom.TITLE_SIZE.LARGE}
        bgBtn={ConfigBtnCustom.COLOR.WHITE}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.GREEN}
        widthBtn={ConfigBtnCustom.WIDTH.LARGE_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
      />

      <CustomButton
        size={ConfigBtnCustom.SIZE.MEDIUM}
        titleSize={ConfigBtnCustom.TITLE_SIZE.MEDIUM}
        bgBtn={ConfigBtnCustom.COLOR.WHITE}
        borderColorBtn={ConfigBtnCustom.COLOR.YELLOW}
        titleColor={ConfigBtnCustom.COLOR.YELLOW}
        widthBtn={ConfigBtnCustom.WIDTH.MEDIUM_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
      />

      <CustomButton
        size={ConfigBtnCustom.SIZE.SMALL}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={ConfigBtnCustom.COLOR.WHITE}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.GREEN}
        widthBtn={ConfigBtnCustom.WIDTH.SMALL_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
        disabled={isActive}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    height: '100%',
  },
  labelInput: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#828282',
    marginTop: 30,
    marginHorizontal: 30,
  },
  textInput: {
    height: 60,
    borderColor: '#828894',
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 10,
    marginHorizontal: 30,
    paddingHorizontal: 15,
  },
  textButtonRegister: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonRegister: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#B9B9B9',
    width: 180,
    color: 'white',
    height: 50,
    marginHorizontal: '28%',
    borderRadius: 25,
    marginTop: 40,
  },
  linkSkip: {
    alignItems: 'center',
    marginTop: 20,
  },
  textLinkSkip: {
    color: '#828282',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default ExampleButtons;
