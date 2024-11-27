import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import Customimage from '../components/Customimage'
import { moderateScale } from 'react-native-size-matters'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import TextInputWithTitle from '../components/TextInputWithTitle'
import CustomButton from '../components/CustomButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
 const navigation = useNavigation()
  return (
        <SafeAreaView>
      <View style={styles.main_Container}>
        <View style={styles.mainImage}>
      <Customimage style={{height:'100%',width:'100%'}} source={require('../Assets/images/loginimage.png')}/>
      </View>
      <View style={styles.mainText}>
        <Text style={{fontSize:moderateScale(22,0.6),
            color:colors.black,fontWeight:'bold'
        }}>Welcome Back!</Text>
        </View>
        <View style={styles.subText}>
        <Text style={{fontSize:moderateScale(14,0.6),
            color:colors.grey
        }}>Let’s login for explore continues</Text>
      </View>
      <View style={styles.detailsContainer}>
      <Text style={{fontSize:moderateScale(13,0.6),
        color:colors.grey
      }}>Email or Phone Number</Text>
        
       <TextInputWithTitle fieldBox={{width:windowwidth*0.55,color:colors.black}} iconStyle={{color:colors.grey,width:windowwidth*0.1}} 
       selectColor={colors.grey} iconName={'envelope-o'} showRightIcon={true} placeholder={'Hello@Zachry.com'}/>
       <Text style={{fontSize:moderateScale(13,0.6),
        color:colors.grey,marginTop:moderateScale(15,0.3)
      }}>Password</Text>
      <TextInputWithTitle fieldBox={{width:windowwidth*0.55,color:colors.black}} selectColor={colors.grey} 
      secureTextEntry={true} iconStyle={{width:windowwidth*0.1,color:colors.grey,
        left:moderateScale(5,0.6)
      }} iconType={EvilIcons} iconName={'lock'} placeholder={'Enter Password'}/>
      </View>
      <View style={{marginTop:moderateScale(10,0.6)}}>
      <CustomButton textstyle={{color:colors.white,fontSize:moderateScale(14,0.6)}} ButtonText={'Log in'}/>
      </View>
      <View style={styles.connectBox}>
      <View style={styles.Widhth1}></View>
      <Text style={{fontSize:moderateScale(12,0.3),
        color:colors.grey
      }}>You can Connect with</Text>
      <View style={styles.Widhth2}></View>
      </View>
      <View style={styles.SvgButtonStyle}>
        <TouchableOpacity  style={{width:windowwidth*0.1,height:windowwidth*0.1,borderRadius:windowwidth *0.1/2,
     
          }}>
          <Customimage style={{height:'100%',width:'100%'}} source={require('../Assets/images/google.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom:moderateScale(2,0.3)}}
          >
          <AntDesign size={22} name={'apple1'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.endTextStyle}>
        <Text style={{fontSize:moderateScale(12,0.3),
          color:colors.grey
        }}>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Signup')
        }}>
          <Text style={{fontSize:moderateScale(12,0.3),
          color:colors.primary
        }}>Sign Up here</Text>
        <View style={{borderWidth:0.5,borderColor:colors.primary}}></View>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    main_Container:{
        width:windowwidth,
        height:windowheight,
        backgroundColor:colors.white
    },
    mainImage:{
        width:windowwidth*0.44,
        height:windowheight *0.2,
        // backgroundColor:'green',
        marginTop:moderateScale(30,0.6),
        // justifyContent:'center',
        alignSelf:'center'
    },
    mainText:{
        width:windowwidth *0.45,
        alignSelf:'center',
        marginTop:moderateScale(20,0.6),
       
    },
    subText:{
        width:windowwidth *0.55,
        alignSelf:'center',
        // backgroundColor:'green'
    },
    emailBox:{
      width:windowwidth *0.65,
      height:moderateScale(40,0.6)
    },
    detailsContainer:{
      paddingHorizontal:moderateScale(40,0.6),
      marginVertical:moderateScale(30,0.6),
    },
    Widhth1:{
      height:moderateScale(1,0.3),
      width:windowwidth *0.2,
      borderWidth:1,
      borderColor:colors.lightgrey,
      // backgroundColor:'green'
    },
    Widhth2:{
      height:moderateScale(1,0.3),
      width:windowwidth *0.2,
      borderWidth:1,
      borderColor:colors.lightgrey,
      // backgroundColor:'green'
    },
    connectBox:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      alignSelf:'center',
      marginTop:moderateScale(10,0.6),
      // backgroundColor:'green',
      width:windowwidth *0.82
    },
    SvgButtonStyle:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:moderateScale(10,0.3),
      marginTop:moderateScale(10,0.6)
    },
    endTextStyle:{
      width:windowwidth*0.44,flexDirection:'row',alignSelf:'center',marginTop:moderateScale(15,0.6),
     
      
    }
})