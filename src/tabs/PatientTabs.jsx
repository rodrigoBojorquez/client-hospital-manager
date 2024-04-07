import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LogOutButton from '../components/LogOutButton';

// SCREENS
import HomePatient from "../screens/patient/HomePatient";
import InfoPersonal from '../screens/patient/infoPersonal';
import PerfilUsuarioScreen from '../screens/patient/perfiluser';
import ListDoc from '../screens/patient/ListDoc';
const Tab = createBottomTabNavigator();

const PatientTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerRight: (props) => <LogOutButton />
      }}
    >
      <Tab.Screen name='Home' component={HomePatient} />
      <Tab.Screen name='Informacion Personal' component={InfoPersonal} />
      <Tab.Screen name='perfil' component={PerfilUsuarioScreen} />
      <Tab.Screen name='lista de doctores' component={ListDoc} />


      {/* AGREGAR MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default PatientTabs