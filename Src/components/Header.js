import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Icon } from 'native-base'
import { colors, windowwidth } from '../Utils/theme'
import Feather from 'react-native-vector-icons/Feather'
import CustomText from './CustomText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Header = ({title,isCameraicon,isRightIcon,textStyle}) => {
  return (

      <View style={styles.header_Styling}>
        <TouchableOpacity>
        {isCameraicon ? <Icon color={colors.grey} name='camera' as={Feather} size={moderateScale(22,0.6)}/>
        : <Icon as={AntDesign} name='arrowleft' size={moderateScale(22,0.6)} color={colors.grey}/>}
        </TouchableOpacity>
        <CustomText style={[styles.text_Header,textStyle]}>{title}</CustomText>
        <TouchableOpacity>
        { isRightIcon && <Icon color={colors.grey} as={MaterialCommunityIcons} name='message-processing-outline' size={moderateScale(22,0.6)}/>}
        </TouchableOpacity>
      </View>

  )
}

export default Header

const styles = StyleSheet.create({
    text_Header:{
        fontSize:moderateScale(20,0.6),
        color:colors.grey,
        fontWeight:'bold',
        // alignSelf:'center'
        // width:windowwidth*0.25
    },
    header_Styling:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:moderateScale(22,0.6),
        paddingVertical:moderateScale(15,0.6)
    }
})