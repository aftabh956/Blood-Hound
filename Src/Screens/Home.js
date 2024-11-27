import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {moderateScale} from 'react-native-size-matters';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import SellerProduct from '../components/SellerProduct';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
    const [activeButton,setActivebutton] = useState('')
    const productList = [
        {
            id: 1,
            image: require('../Assets/images/sellerimage1.png'),
            name:'Prisha Mclaughlin',
            time:'52 minute ago',
            assetImage: require('../Assets/images/bikeimage.png')
        },
        {
            id: 2,
            image: require('../Assets/images/sellerimage2.png'),
            name:'Luke Jason',
            time:'52 minute ago',
            assetImage: require('../Assets/images/bikeimage.png')
        },
        {
            id: 3,
            image: require('../Assets/images/sellerimage2.png'),
            name:'Luke Jason',
            time:'52 minute ago',
            assetImage: require('../Assets/images/bikeimage.png')
        }
    ]
  return (
    <SafeAreaView style={styles.main_Screen}>
      <Header isCameraicon={true} title={'Timeline'} isRightIcon={true} />
      <View style={styles.main_Container}>
        <View style={styles.buttonStyle}>
          <CustomButton onPress={()=>{
            setActivebutton('Stolen')
          }}
            styleButton={[{
              width: windowwidth * 0.43,
              borderRadius: moderateScale(10, 0.6),
            backgroundColor:colors.primary 
            }, activeButton === 'Stolen' ? {backgroundColor:colors.primary} : {backgroundColor:colors.white}]}
            textstyle={[{color: colors.white, fontSize: moderateScale(16, 0.6) , fontWeight:'bold'},
                activeButton === 'Stolen' ? {color:colors.white} : {color:colors.grey}
            ]}
            ButtonText={'Stolen'}></CustomButton>
          <CustomButton onPress={()=>{
            setActivebutton('Founded')
          }}
            styleButton={[{
              width: windowwidth * 0.43,
              borderRadius: moderateScale(10, 0.6),
              backgroundColor: colors.white,
            },activeButton === 'Founded' ? {backgroundColor:colors.primary} : {backgroundColor:colors.white} ]}
            textstyle={[{
              color: colors.grey,
              fontWeight: 'bold',
              fontSize: moderateScale(16, 0.6),
            },activeButton === 'Founded' ? {color:colors.white} : {color:colors.grey}]}
            ButtonText={'Founded'}></CustomButton>
        </View>
        <FlatList contentContainerStyle={{paddingBottom:moderateScale(200,0.6)}} showsVerticalScrollIndicator={false} data={productList}
        renderItem={({item})=>{
            return(
                <SellerProduct  onPress={()=>{
                  navigation.navigate('Detailscreen')
                }} data={item}/>
            )
        }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_Screen: {
    width: windowwidth,
    height: windowheight,
  },
  buttonStyle: {
    flexDirection: 'row',
    gap: moderateScale(10, 0.6),
  },
  main_Container: {
    paddingHorizontal: moderateScale(20, 0.6),
    // paddingVertical:moderateScale(10,0.6)
  },
});
