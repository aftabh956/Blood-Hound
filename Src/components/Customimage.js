import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Customimage = ({onPress,resizeMode,style,source}) => {
  return (
    <TouchableOpacity onPress={onPress && onPress} activeOpacity={0.9}>
      <Image
        
        resizeMode={resizeMode}
        style={style}
        source={source}
        
      />
    </TouchableOpacity>
  )
}

export default Customimage

const styles = StyleSheet.create({})