import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOutButton from '../components/LogOutButton';

//SCREENS
import HomeDoctor from "../screens/doctor/HomeDoctor";
import Appointments from '../screens/doctor/Appointments';
import ProfileDoctor from '../screens/doctor/ProfileDoctor';
import DoctorSettingsStack from '../stacks/DoctorSettingsStack';

const Tab = createBottomTabNavigator();

const DoctorTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerRight: (props) => <LogOutButton />
      }}
    >
      <Tab.Screen name='Home' component={HomeDoctor} />
      <Tab.Screen name='Citas' component={Appointments} />
      <Tab.Screen name='Configuracion' component={DoctorSettingsStack} />



      {/* MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default DoctorTabs;