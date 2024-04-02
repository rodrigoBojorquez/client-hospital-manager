import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

// SCREENS
import SetCredentials from '../screens/auth/signup/SetCredentials';
import SetPatientData from "../screens/auth/signup/SetPatientData";

const Stack = createNativeStackNavigator();

const CreatePatientStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='SetCredentials'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='SetCredentials' component={SetCredentials} />
        <Stack.Screen name='SetPatientData' component={SetPatientData} />
    </Stack.Navigator>
  )
}

export default CreatePatientStack