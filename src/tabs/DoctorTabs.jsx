import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOutButton from '../components/LogOutButton';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
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

      //TABS ICONS
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
      <Tab.Screen name='Home' component={HomeDoctor} />
      <Tab.Screen name='Citas' component={Appointments} />
      <Tab.Screen name='Configuracion' component={DoctorSettingsStack} />

      {/* MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default DoctorTabs;