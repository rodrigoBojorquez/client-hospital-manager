import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Perfil from '../screens/patient/Perfil'
const Stack = createNativeStackNavigator();

const PatientSettingsStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Perfil'
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name='Perfil' component={Perfil} />
    </Stack.Navigator>
  )
}

export default PatientSettingsStack