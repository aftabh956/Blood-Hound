import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
const TextInputWithTitle = ({placeholder,showRightIcon,iconName,iconStyle,iconType,secureTextEntry,selectColor,
    fieldBox
}) => {
  return (
    <View style={styles.inputBox}>
        <FontAwesome as={iconType} style={iconStyle} size={20} name={iconName}/>
        <TextInput  secureTextEntry={secureTextEntry} style={fieldBox} 
        placeholderTextColor={selectColor} placeholder={placeholder}/>
        { showRightIcon &&<View style={styles.showCircle}>
         <AntDesign style={{color:colors.white}} size={10} name={'check'}/>
        </View>}
    </View>
  )
}

export default TextInputWithTitle

const styles = StyleSheet.create({
    inputBox:{
        width:windowwidth *0.78,
        // height:moderateScale(40,0.6),
        paddingHorizontal:moderateScale(15,0.6),
        paddingVertical:moderateScale(7,0.3),
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        // backgroundColor:'green'
    },
    showCircle:{
        width:windowwidth *0.04,
        height:windowwidth *0.04,
        borderRadius:windowwidth *0.04/2,
         alignItems:'center',justifyContent:'center',
        //  alignSelf:'flex-end',
        backgroundColor:colors.primary
    }
})