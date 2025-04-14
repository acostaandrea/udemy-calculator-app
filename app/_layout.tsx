import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <View>
      <Text>_hhlayout</Text>
      <Slot/>
    </View>
  )
}

export default RootLayout