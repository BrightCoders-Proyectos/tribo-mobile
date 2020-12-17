import {StyleSheet} from 'react-native';

const SideBarStyle = StyleSheet.create({
  textContainer: {
    marginLeft: 50,
    margin: 18, 
    flexDirection: 'row'
},
  textBold: {
    fontSize:22, 
    color:'gray', 
    fontWeight: 'bold' 
  },
  textNormal: {
    fontSize:21,
    color:'gray'
  }
});

export default SideBarStyle;
