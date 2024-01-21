import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'blue',
    width:'90%',
    alignSelf:'center',
    marginTop:20,
    padding:15
  },
  baseText: {
    fontFamily:'Cochin',
    color: 'white',
    fontSize:16,
    marginTop:10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
  sizeTextBig:{
    fontSize:20,
  },
  sizeTextSmall:{
    fontSize:10,
  },
  styleText:{
    textDecorationLine:'underline',
    letterSpacing:20,
    fontWeight:'bold',
  },
  rightText:{
    textAlign:'right',
  },
  styleText2:{
    textAlign:'center',
    fontWeight:'bold',
    color:'orange',
  },
  styleText3:{
    fontWeight:'bold',
    color: 'black',
  },
  tipStyle:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
    marginHorizontal:15,
    marginTop:10,
  },
})