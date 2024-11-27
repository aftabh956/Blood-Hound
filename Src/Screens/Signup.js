import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import Customimage from '../components/Customimage'
import TextInputWithTitle from '../components/TextInputWithTitle'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { color } from 'native-base/lib/typescript/theme/styled-system'

const Signup = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
    <View style={styles.main_Container}>
    <View style={styles.mainImage}>
      <Customimage style={{height:'100%',width:'100%'}} source={require('../Assets/images/signup.png')}/>
      </View>
      <View style={styles.mainText}>
        <Text style={{fontSize:moderateScale(22,0.6),
            color:colors.black,fontWeight:'bold'
        }}>Let's Get Started!</Text>
        </View>
        <View style={styles.subText}>
        <Text style={{fontSize:moderateScale(14,0.6),
            color:colors.grey
        }}>Create an account to get all features</Text>
      </View>
      <View style={styles.detailsContainer}>
      <TextInputWithTitle fieldBox={{fontSize:moderateScale(12,0.3),color:colors.black}} selectColor={colors.grey} placeholder={'Full name'} />
      <TextInputWithTitle fieldBox={{fontSize:moderateScale(12,0.3),color:colors.black}} selectColor={colors.grey} placeholder={'Email address'}/>
      <TextInputWithTitle fieldBox={{fontSize:moderateScale(12,0.3),color:colors.black}} selectColor={colors.grey} placeholder={'Phone number'}/>
      <TextInputWithTitle fieldBox={{fontSize:moderateScale(12,0.3),color:colors.black}} selectColor={colors.grey} placeholder={'Type your password'}/>
      <TextInputWithTitle fieldBox={{fontSize:moderateScale(12,0.3),color:colors.black}} selectColor={colors.grey} placeholder={'Confirm Password'}/>
      </View>
      <CustomButton  textstyle={{fontSize:moderateScale(14,0.6),color:colors.white}} ButtonText={'Register'}/>
      <View style={styles.endTextStyle}>
        <Text style={{fontSize:moderateScale(12,0.3),
          color:colors.grey
        }}>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=>{
         navigation.navigate('Varification')
        }}>
          <Text style={{fontSize:moderateScale(12,0.3),
          color:colors.primary
        }}>Log in</Text>
        <View style={{borderWidth:0.5,borderColor:colors.primary}}></View>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    main_Container:{
        width:windowwidth,
        height:windowheight,
        backgroundColor:colors.white,
        paddingVertical:moderateScale(30,0.3)
        
    },
    mainImage:{
        width:windowwidth*0.43,
        height:windowheight *0.25,
        // backgroundColor:'green',
        marginTop:moderateScale(20,0.6),
        // justifyContent:'center',
        alignSelf:'center'
    },
    mainText:{
        width:windowwidth *0.49,
        alignSelf:'center',
        // backgroundColor:'green',
        marginTop:moderateScale(20,0.6),
       
    },
    subText:{
        width:windowwidth *0.63,
        alignSelf:'center',
        // backgroundColor:'green'
    },
    detailsContainer:{
        paddingVertical:moderateScale(15,0.3)
    },
    endTextStyle:{
        width:windowwidth*0.44,flexDirection:'row',alignSelf:'center',marginTop:moderateScale(15,0.6),
       
        
      }
})