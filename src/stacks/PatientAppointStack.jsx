import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// SCREENS
import SearchDoctor from '../screens/patient/SearchDoctor';
import DoctorInfo from '../screens/patient/DoctorInfo';
import CreateAppoint from '../screens/patient/CreateAppoint';
import Appointments from '../screens/patient/Appointments';
import GoBackButton from '../components/GoBackButton';
import CitaAgendada from '../screens/patient/CitaAgendada';
const Stack = createNativeStackNavigator();

const PatientAppointStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Search'
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name='Search' component={SearchDoctor} />
        <Stack.Screen name='DoctorInfo' component={DoctorInfo} />
        <Stack.Screen name='CreateAppoint' component={CreateAppoint } />
        <Stack.Screen name='Appointments' component={Appointments} />
        <Stack.Screen name='CitaAgendada' component={CitaAgendada} />

    </Stack.Navigator>
  )
}

export default PatientAppointStack