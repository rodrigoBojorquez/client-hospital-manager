import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import SetCredentials from "../screens/auth/signup/SetCredentials"
import SetDoctorData from "../screens/auth/signup/SetDoctorData"
import SetDoctorSchedule from "../screens/auth/signup/SetDoctorSchedule"

const Stack = createNativeStackNavigator();

const CreateDoctorStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='SetCredentials'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='SetCredentials' component={SetCredentials} />
        <Stack.Screen name='SetDoctorData' component={SetDoctorData} />
        <Stack.Screen name="SetDoctorSchedule" component={SetDoctorSchedule} /> 
    </Stack.Navigator>
  )
}

export default CreateDoctorStack