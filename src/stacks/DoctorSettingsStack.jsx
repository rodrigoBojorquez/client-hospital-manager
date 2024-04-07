import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Perfil from '../screens/patient/Perfil'
import ProfileDoctor from '../screens/doctor/ProfileDoctor';
const Stack = createNativeStackNavigator();

const DoctorSettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Perfil'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Perfil' component={ProfileDoctor} />
    </Stack.Navigator>
  )
}

export default DoctorSettingsStack