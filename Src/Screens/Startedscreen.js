import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import Customimage from '../components/Customimage'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Startedscreen = () => {
const navigation = useNavigation()
  return (
   <SafeAreaView>
    <View style={styles.main_Container}>
    <View style={styles.mainImage}>
      <Customimage style={{height:'100%',width:'100%'}} source={require('../Assets/images/startedimage.png')}/>
      </View>
      <View style={{marginTop:moderateScale(30,0.6)}}>
      <View style={styles.mainText}>
        <Text style={{fontSize:moderateScale(22,0.6),
            color:colors.primary,fontWeight:'bold'
        }}>Track Your Asset</Text>
        </View>
        <View style={styles.subText}>
        <Text style={{fontSize:moderateScale(16,0.6),
            color:colors.primary,fontWeight:'bold'
        }}>Newer Lose Anything Again</Text>
      </View>
      <View style={styles.subcontent}>
        <Text style={{fontSize:moderateScale(14,0.6),
            color:colors.grey,textAlign:'center',lineHeight:21
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
      </View>
      </View>
      <View style={{marginTop:moderateScale(50,0.6)}}>
      <CustomButton onPress={()=>{
        navigation.navigate('Tabnavigation')
      }} textstyle={{color:colors.white}} ButtonText={'Let"s Get Started'}/>
      </View>
    </View>
   </SafeAreaView>
  )
}

export default Startedscreen

const styles = StyleSheet.create({
    main_Container:{
            width:windowwidth,
            height:windowheight,
            backgroundColor:colors.white,
            paddingVertical:moderateScale(50,0.3)
            },
            mainImage:{
                width:windowwidth*0.57,
                height:windowheight *0.25,
                // backgroundColor:'green',
                marginTop:moderateScale(40,0.6),
                // justifyContent:'center',
                alignSelf:'center'
            },
            mainText:{
                width:windowwidth *0.47,
                alignSelf:'center',
                // backgroundColor:'green',
                marginTop:moderateScale(20,0.6),
               
            },
            subText:{
                width:windowwidth *0.57,
                alignSelf:'center',
                // backgroundColor:'green'
            },
            subcontent:{
                width:windowwidth *0.75,
               alignSelf:'center',
        //   backgroundColor:'green',
        //   lineHeight:40,
            }
})