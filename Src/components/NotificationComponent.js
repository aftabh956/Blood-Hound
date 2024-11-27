import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import Customimage from './Customimage'
import CustomText from './CustomText'

const NotificationComponent = ({data}) => {
  return (
    <View style={styles.box}>
     <View style={styles.boxStyle}>
     <View style={styles.imageStyle}>
     <Customimage style={{height:'100%',width:'100%'}} source={data.image}/>
     </View>
     <View style={{width:windowwidth*0.35,
        marginLeft:moderateScale(10,0.6)
     }}>
        <CustomText style={{
            fontSize:moderateScale(12,0.6),
            color:colors.black,fontWeight:'bold'
        }}>{data.name}</CustomText>
        <CustomText style={{
            fontSize:moderateScale(12,0.6),
            color:colors.grey,top:moderateScale(8,0.6)
        }}>{data.time}</CustomText>
     </View>
     <CustomText style={{
            fontSize:moderateScale(12,0.6),
            color:colors.grey
        }}>{data.whoLike}</CustomText>
        </View>
    </View>

  )
}

export default NotificationComponent

const styles = StyleSheet.create({
    box:{
        width:windowwidth*0.88,
        height:windowheight *0.11,
        paddingHorizontal:moderateScale(15,0.6),
        paddingVertical:moderateScale(10,0.6),
        marginTop:moderateScale(7,0.6),
        backgroundColor:colors.white
    },
    imageStyle:{
      width:windowwidth *0.13,
      height:windowheight *0.065,
    //   backgroundColor:'red'
    },
    boxStyle:{
        flexDirection:'row',
        // alignItems:'center'
    }
})