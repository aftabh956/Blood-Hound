import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { useNavigation } from '@react-navigation/native'

const Splashscreen = () => {
    const navigation = useNavigation()
    setTimeout(()=>(
        navigation.navigate('Login')
    // console.log('aftab')
    ), 3000);
  return (
   <SafeAreaView>
   <View style={styles.main_Container}>
   <View style={styles.image_Style}>
    <Image style={{height:'100%',width:'100%'}} source={require('../Assets/images/splashimage.png')}/>
   </View>
   </View>
   </SafeAreaView>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    main_Container:{
        width:windowwidth,
        height:windowheight,
        alignItems:'center',justifyContent:'center',
        backgroundColor:colors.primary
    },
    image_Style:{
        height:windowheight *0.25,
        width:windowwidth *0.48,
        // backgroundColor:'green'
    }
})