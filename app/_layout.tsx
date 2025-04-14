import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global-styles.styles';
import * as NavigationBar from 'expo-navigation-bar';


const isAndroid = Platform.OS === 'android';
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync(Colors.background);
}



const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })
  if (!loaded) {
    return null;
  }
  return (
    <View style={globalStyles.background}>
      <Text>_hhlayout</Text>
      <Slot/>
      <StatusBar style='auto'/>
    </View>
  )
}

export default RootLayout