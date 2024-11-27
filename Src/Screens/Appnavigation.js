import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './Splashscreen';
import Login from './Login';
import Signup from './Signup';
import Varification from './Varification';
import Startedscreen from './Startedscreen';
import Home from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Filterscreen from './Filterscreen';
import Searchscreen from './Searchscreen';
import Notificationscreen from './Notificationscreen';
import Profilescreen from './Profilescreen';
import { colors, windowheight, windowwidth } from '../Utils/theme';
import { withDecay } from 'react-native-reanimated';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Detailscreen from './Detailscreen';
const Stack = createNativeStackNavigator();
    const Tabs = createBottomTabNavigator();
const Appnavigation = () => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splashscreen'
       screenOptions={{headerShown:false}}
       >
        <Stack.Screen name='Splashscreen' component={Splashscreen}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Varification' component={Varification}/>
        <Stack.Screen name='Startedscreen' component={Startedscreen}/>
        {/* <Stack.Screen name='Home' component={Home}/> */}
        <Stack.Screen name='Tabnavigation' component={Tabnavigation}/>
        <Stack.Screen name='Detailscreen' component={Detailscreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigation
const Tabnavigation = () => {
  return(
    <Tabs.Navigator initialRouteName='Home'
     screenOptions={({route}) =>({
      headerShown:false,
      tabBarStyle: {
        backgroundColor: colors.primary,
        height: windowheight * 0.07,
        width:windowwidth
      },
      tabBarShowLabel:false,
      tabBarIcon:({focused}) => {
        let iconName;
          let color = colors.white;
          let size = moderateScale(20,0.6);
          let type = Ionicons;
          if (route.name === 'Filter') {
            type= MaterialIcons;
            iconName='tune' 
            color = focused ? colors.primary : colors.white
            size = focused ? moderateScale(25, 0.6) : moderateScale(20, 0.6)
          } else if (route.name === 'Search') {
            iconName='search'
            color = focused ? colors.primary : colors.white
            size = focused ? moderateScale(25,0.6) : moderateScale(19,0.6)
          } else if (route.name === 'Home') {
            iconName='home-outline'
            color = focused ? colors.primary : colors.white
            size = focused ? moderateScale(27,0.6) : moderateScale(22,0.6)
          } else if (route.name === 'Notification') {
            iconName='notifications-outline'
            color = focused ? colors.primary : colors.white
            size = focused ? moderateScale(27,0.6) : moderateScale(22,0.6)
          } else if (route.name === 'Profile') {
            type=FontAwesome
            iconName='user-circle-o'
            color = focused ? colors.primary : colors.white
            size = focused ? moderateScale(25,0.6) :moderateScale(22,0.6)
          }
        return focused ? (
          <View style={styles.navigatorCircle}>
          <View style={{
            width:windowwidth *0.13,
            height:windowwidth *0.13,
            borderRadius:windowwidth *0.13/2,
            backgroundColor:colors.white,
            alignItems:'center',justifyContent:'center',
            bottom:moderateScale(20,0.6)
          }}>
           <Icon
                name={iconName}
                as={type}
                color={color}  
                size={size}
              />
          </View>
          </View>
        ) : (
          <Icon
              name={iconName}
              as={type}
              color={color}
              size={size}
            />
        )
      }
     })}>
      
      <Tabs.Screen name={'Filter'} component={Filterscreen}/>
      <Tabs.Screen name={'Search'} component={Searchscreen}/>
      <Tabs.Screen name={'Home'} component={Home}/>
      <Tabs.Screen name={'Notification'} component={Notificationscreen}/>
      <Tabs.Screen name={'Profile'} component={Profilescreen}/>
    </Tabs.Navigator>
  )
}
const styles = StyleSheet.create({
  navigatorCircle:{
    width:windowheight *0.11,
    height:windowheight *0.16,
    borderRadius:windowheight *0.15/2,
    backgroundColor:colors.primary,
    position:'absolute',
    alignItems:'center',justifyContent:'center',
    // bottom:moderateScale(5,0.6),
    // bottom: moderateScale(6, 0.6),
  }
})