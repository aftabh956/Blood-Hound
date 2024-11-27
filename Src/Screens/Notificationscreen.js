import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import Header from '../components/Header';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../components/CustomText';
import NotificationComponent from '../components/NotificationComponent';
import { SwipeListView } from 'react-native-swipe-list-view';
import Feather from 'react-native-vector-icons/Feather'
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Icon } from 'native-base';

const Notificationscreen = () => {
  const notificationList = [
    {
      id: 1,
      image: require('../Assets/images/sellerimage3.png'),
      name: 'Aarush Galloway',
      time: '52 min ago',
      whoLike: 'Shared your post',
    },
    {
      id: 2,
      image: require('../Assets/images/sellerimage4.png'),
      name: 'Arthur Aguilar',
      time: '2 h ago',
      whoLike: 'Liked your photo',
    },
    {
      id: 3,
      image: require('../Assets/images/sellerimage5.png'),
      name: 'Addie Barrera',
      time: '3 h ago',
      whoLike: 'Commend your post',
    },
    {
      id: 4,
      image: require('../Assets/images/sellerimage6.png'),
      name: 'Anne Southern Awesome UI Kit',
      time: '4 h ago',
      whoLike: 'added photo in group',
    },
    {
      id: 5,
      image: require('../Assets/images/sellerimage7.png'),
      name: 'Brenden Ramirez',
      time: '5 h ago',
      whoLike: 'Liked your post',
    },
    {
      id: 6,
      image: require('../Assets/images/sellerimage3.png'),
      name: 'Brax Stott',
      time: '6 h ago',
      whoLike: 'Liked your comments',
    },
    {
      id: 7,
      image: require('../Assets/images/sellerimage3.png'),
      name: 'Aarush Galloway',
      time: '52 min ago',
      whoLike: 'Shared your post',
    },
    {
      id: 8,
      image: require('../Assets/images/sellerimage3.png'),
      name: 'Aarush Galloway',
      time: '52 min ago',
      whoLike: 'Shared your post',
    },
    {
      id: 9,
      image: require('../Assets/images/sellerimage3.png'),
      name: 'Aarush Galloway',
      time: '52 min ago',
      whoLike: 'Shared your post',
    },
  ];
  return (
    <SafeAreaView style={styles.main_Screen}>
      <Header isRightIcon={true} title={'Notification'} />
      <View style={styles.main_Container}>
        <View
          style={{
            flexDirection: 'row',
            width: windowwidth * 0.88,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.5}>
            <CustomText
              style={{
                fontSize: moderateScale(14, 0.6),
                color: colors.grey,
              }}>
              Show all
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: colors.grey,
              }}>
              Mark all us read
            </CustomText>
          </TouchableOpacity>
        </View>

        <SwipeListView
          contentContainerStyle={{paddingBottom: moderateScale(150, 0.6)}}
          style={{marginTop: moderateScale(10, 0.6), alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          rightOpenValue={-78}
          data={notificationList}
          renderItem={({item}) => {
            return <NotificationComponent data={item} />;
          }}
          renderHiddenItem={({item})=>{
            return (
              <TouchableOpacity style={styles.Read_Button}>
                <Icon as={Feather} 
                 name={'check'} size={22} color={colors.white}/>
                <CustomText style={{
                  fontSize:moderateScale(12,0.6),
                  color:colors.white
                }}>Read</CustomText>
                </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notificationscreen;

const styles = StyleSheet.create({
  main_Screen: {
    width: windowwidth,
    height: windowheight,
  },
  main_Container: {
    paddingHorizontal: moderateScale(20, 0.6),
  },
  Read_Button:{
    width:windowwidth *0.2,
    height:windowheight *0.1,
    backgroundColor:colors.primary,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:moderateScale(12,0.6),
    alignSelf:'flex-end',
    marginVertical:moderateScale(10,0.6)
    // position:'absolute'
  }

});
