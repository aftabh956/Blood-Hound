import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import Customimage from './Customimage';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import {Icon} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const SellerProduct = ({data,onPress}) => {
  return (
    <View style={styles.box}>
      <View style={styles.sellerHeader}>
        <View style={styles.sellerImage}>
          <Customimage
            style={{height: '100%', width: '100%'}}
            source={data.image}
          />
        </View>
        <View
          style={{
            width: windowwidth * 0.45,
            marginLeft: moderateScale(10, 0.6),
          }}>
          <CustomText
            style={{
              fontSize: moderateScale(15, 0.6),
              color: colors.black,
              fontWeight: 'bold',
            }}>
            {data.name}
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(11, 0.6),
              color: colors.grey,
            }}>
            {data.time}
          </CustomText>
        </View>
        <CustomButton
          styleButton={{
            width: windowwidth * 0.27,
            height: windowheight * 0.047,
          }}
          ButtonText={'Message'}
          textstyle={{color: colors.white, fontSize: moderateScale(11, 0.6)}}
        />
      </View>
      <View
        style={{width: windowwidth * 0.74, marginTop: moderateScale(15, 0.6)}}>
        <CustomText
          style={{fontSize: moderateScale(12, 0.6), color: colors.grey}}>
          I Lost My Electric Motor Bike before Todays ago
        </CustomText>
        <TouchableOpacity>
          <CustomText
            style={{fontSize: moderateScale(12, 0.6), color: colors.primary}}>
            Read More...
          </CustomText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.bikeImageStyle}>
        <Customimage
          resizeMode={'stretch'}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: moderateScale(10, 0.6),
          }}
          source={data.assetImage}
        />
      </TouchableOpacity>
      <View style={styles.blueCircle}></View>
      <View style={styles.commentsSection}>
     
        <Icon
          size={moderateScale(17, 0.6)}
          color={colors.grey}
          as={MaterialCommunityIcons}
          name="message-processing-outline"
        />
        <CustomText
          style={{
            fontSize: moderateScale(12, 0.6),
            color: colors.grey,
            marginLeft:moderateScale(5,0.6),
            width:windowwidth*0.25,
          }}>
          12 Coments
        </CustomText>
        <Icon
          size={moderateScale(19, 0.6)}
          color={colors.grey}
          as={EvilIcons}
          name="heart"
        />
        <CustomText
          style={{
            fontSize: moderateScale(12, 0.6),
            color: colors.grey,
            marginLeft:moderateScale(5,0.6),
            width:windowwidth*0.23,
          }}>
          85 Likes
        </CustomText>
        <Icon
          size={moderateScale(19, 0.6)}
          color={colors.grey}
          as={Entypo}
          name="forward"
          
        />
        <CustomText
          style={{
            fontSize: moderateScale(12, 0.6),
            color: colors.grey,
            marginLeft:moderateScale(5,0.6)
          }}>
          36 Shared
        </CustomText>
      </View>
    </View>
  );
};

export default SellerProduct;

const styles = StyleSheet.create({
  box: {
    width: windowwidth * 0.88,
    height: windowheight * 0.61,
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    // backgroundColor:'green',
    marginTop: moderateScale(10, 0.6),
  },
  sellerImage: {
    width: windowwidth * 0.09,
    height: windowheight * 0.045,
  },
  sellerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'green'
  },
  bikeImageStyle: {
    width: windowwidth * 0.83,
    height: windowheight * 0.38,
    marginTop: moderateScale(15, 0.6),
    borderRadius: moderateScale(10, 0.6),
    // backgroundColor:'red'
  },
  blueCircle: {
    width: windowwidth * 0.02,
    height: windowwidth * 0.02,
    borderRadius: (windowwidth * 0.02) / 2,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    top: moderateScale(8, 0.6),
  },
  commentsSection: {
    flexDirection: 'row',
    marginTop:moderateScale(15,0.6)
  },
});
