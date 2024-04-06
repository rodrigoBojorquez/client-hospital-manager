import { NavigationContainer } from '@react-navigation/native';
import { useAppStore } from './src/stores/appStore';
import * as SecureStore from "expo-secure-store"
import { useEffect, useState } from 'react';
import { axiosClient } from './axiosClient';


// STACKS AND TABS
import PatientTabs from './src/tabs/PatientTabs';
import DoctorTabs from './src/tabs/DoctorTabs';
import DevTabs from './src/tabs/DevTabs';
import AuthStack from './src/stacks/AuthStack';

export default function App() {

  const authUser = useAppStore(state => state.authUser);
  const profileData = useAppStore(state => state.profileData);

  useEffect(() => {

    const checkToken = async () => {
      try {
        const accessToken = await SecureStore.getItemAsync("AppToken");
  
        if (accessToken) {
          const config = {
            headers: { "Authorization": `Bearer ${accessToken}` }
          }
    
          const userRes = await axiosClient("/user/me", config);
    
          authUser({
            userName: userRes.data.username,
            role: userRes.data.rol,
            token: accessToken,
            id: userRes.data._id
          });
        }
      
        return profileData
      } catch (err) {
        console.log(err);
        await SecureStore.deleteItemAsync("AppToken");
      }
    }

    checkToken()
  }, [])
  
  return (
    <NavigationContainer>
      {
        profileData.auth ? 
          profileData.role === "patient" ? (
            <PatientTabs />
          ) :
          profileData.role === "doctor" ? (
            <DoctorTabs/>
          ) :
          profileData.role === "developer" && (
            <DevTabs />
          )
        :
        (<AuthStack />)
      }
    </NavigationContainer>
  );
}