import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base';
import Appnavigation from './Src/Screens/Appnavigation';
const App = () => {
  return (
    <NativeBaseProvider>
      <Appnavigation/>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})