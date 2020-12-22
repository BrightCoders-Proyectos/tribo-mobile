import React, {useState} from 'react';
import { TouchableHighlight, Text, View, TouchableOpacity } from 'react-native';
import SideBarStyle from '../styles/SideBarStyle';

const BarGray = () => {
  return(
    <View style={{width: 15}}>
      <Text> </Text>
    </View>
  );
}

const SideBarOption = (props)=>{
  const [hide, setHide] = useState(false);

  const {
    textBold,
    textNormal
  } = props;

  const onPress = () => {
    setHide(true);
  }

  return(
    <>
      <TouchableHighlight 
        style={{maxWidth: '80%'}}
        onPress={onPress}
        underlayColor= "lightgray"
      >
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'gray'}}>
            {hide && <BarGray/>}
          </View>
          <View style={SideBarStyle.textContainer}>
            <View>
              <View>
                <Text style={SideBarStyle.textBold}>{textBold}</Text>
              </View>
              <View>
                <Text style={SideBarStyle.textNormal}>{textNormal}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
}

export default SideBarOption;