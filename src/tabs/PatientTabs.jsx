import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LogOutButton from '../components/LogOutButton';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// SCREENS
import HomePatient from "../screens/patient/HomePatient";
import PatientAppointStack from '../stacks/PatientAppointStack';
import PatientSettingsStack from '../stacks/PatientSettingsStack';
import HeaderGoBack from '../components/HeaderGoBack';

const Tab = createBottomTabNavigator();

const PatientTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'

      // TABS ICONS 

      screenOptions={({ route, navigation }) => ({
        headerRight: (props) => <LogOutButton />,
        // headerLeft: props => <HeaderGoBack navigation={navigation} /> ,
        tabBarIcon: ({ foucused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return <Entypo name='home' size={25} color="black" />
          }
          else if (route.name === "Citas") {
            return <AntDesign name='calendar' size={25} color={"black"} />
          }
          else if (route.name === "Configuracion") {
            return <MaterialIcons name="settings" size={25} color="black" />
          }
        },
      })}
    >
      <Tab.Screen name='Home' component={HomePatient} />
      <Tab.Screen name='Citas' component={PatientAppointStack} />
      <Tab.Screen name='Configuracion' component={PatientSettingsStack} />

      {/* AGREGAR MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default PatientTabs