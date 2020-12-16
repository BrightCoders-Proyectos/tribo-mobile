import React, {useState} from 'react';
import { TouchableHighlight, Text, View, TouchableOpacity } from 'react-native';

const  BarGray = () => {
  return(
    <View style={{width: 15}}>
      <Text> </Text>
  </View>
  );
}

const SideBarOption = (props)=>{
  const [hide, setHide] = useState(false);

  const {
    textSideBar,
    textSideBar2
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
          <View style={{marginLeft: 50, margin: 18, flexDirection: 'row'}}>
            <View>
              <View>
                <Text style={{fontSize:22, color:'gray', fontWeight: 'bold' }}>{textSideBar}</Text>
              </View>
              <View>
                <Text style={{fontSize:21, color:'gray'}}>{textSideBar2}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
}


export default SideBarOption;