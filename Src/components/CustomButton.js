import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'

const CustomButton = ({ButtonText,textstyle,onPress,styleButton}) => {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.ButtonBox , styleButton]}>
    <Text style={textstyle} >{ButtonText}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    ButtonBox:{
        width:windowwidth*0.73,
        height:moderateScale(45,0.3),
        backgroundColor:colors.primary,
        fontWeight:'bold',
        borderRadius:moderateScale(20,0.6),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
})