import React from 'react'
import {Text, View} from 'react-native'

export default function Profile({navigation}) {
  return (
        <VIew>
            <Text onPress={()=> navigation.navigate("Profile")}>
            </Text>
        </VIew>
  )
}
