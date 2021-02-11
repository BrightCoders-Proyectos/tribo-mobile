import React, {useState} from 'react';
import {TouchableHighlight, Text, View, TouchableOpacity} from 'react-native';
import SideBarStyle from '../styles/SideBarStyle';
import ContentText from '../screensText/ContentText';


const SideBarOption = (props) => {
  const [hide, setHide] = useState(false);

  const {textBold} = props;

  const onPress = () => {
    console.log('Pressed');
  };

  const styleCont = [SideBarStyle.textContainer, SideBarStyle.textContainer2]

  return (
    <>
      <TouchableHighlight
        style={{
          maxWidth: '80%',
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          margin: 12
        }}
        onPress={onPress}
        underlayColor="#FFCF87">
          <View style={[textBold === '#QuédateEnCasa' ? styleCont[1]: styleCont[0]]}>
              <View>
                <Text style={SideBarStyle.textBold}>{textBold}</Text>
              </View>
              {textBold == '#QuédateEnCasa' && (
              <View>
                <Text style={SideBarStyle.textNormal}>
                  {ContentText.title2_1}
                </Text>
              </View>
              )}
            </View>
      </TouchableHighlight>
    </>
  );
};

export default SideBarOption;
