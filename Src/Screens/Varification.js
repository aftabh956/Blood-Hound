import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import Customimage from '../components/Customimage'
import { CodeField } from 'react-native-confirmation-code-field'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Varification = () => {
    const navigation =useNavigation()
//     const CELL_COUNT = 4
// const ref = useRef(null)
  return (
    <SafeAreaView>
        <View style={styles.main_Container}>
        <View style={styles.mainImage}>
      <Customimage style={{height:'100%',width:'100%'}} source={require('../Assets/images/varification.png')}/>
      </View>
      <View style={styles.mainText}>
        <Text style={{fontSize:moderateScale(22,0.6),
            color:colors.black,fontWeight:'bold'
        }}>Verification</Text>
        </View>
        <View style={styles.subText}>
        <Text style={{fontSize:moderateScale(12,0.6),
            color:colors.grey
        }}>We send OPT number on your phone</Text>
      </View>
      {/* <View>
        <CodeField 
        {...props} ref={ref}/>
      </View> */}
      <View style={{marginTop:moderateScale(50,0.6)}}>
      <CustomButton onPress={()=>{
        navigation.navigate('Startedscreen')
      }} textstyle={{color:colors.white}} ButtonText={'Verify'}/>
      </View>
        </View>
    </SafeAreaView>
  )
}

export default Varification

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
        marginTop:moderateScale(40,0.6),
        // justifyContent:'center',
        alignSelf:'center'
    },
    mainText:{
        width:windowwidth *0.33,
        alignSelf:'center',
        // backgroundColor:'green',
        marginTop:moderateScale(20,0.6),
       
    },
    subText:{
        width:windowwidth *0.55,
        alignSelf:'center',
        // backgroundColor:'red'
    },
})