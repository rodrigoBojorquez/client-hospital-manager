import { useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { axiosClient } from '../../../../axiosClient';
import { useAppStore } from '../../../stores/appStore';
import qs from "qs"
import * as SecureStore from "expo-secure-store"

const Login = ({ navigation, route }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authUser = useAppStore(state => state.authUser);
    const profileData = useAppStore(state => state.profileData)
    console.log(profileData)

    const handleLogin = async () => {
      const data = qs.stringify({
        username: username,
        password: password
      });
    
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
    
      try {
        const res = await axiosClient.post("/public/token", data, config);
    
        const accessToken = res.data.access_token;
        const secondConfig = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        };
    
        if (accessToken !== null) {
          await SecureStore.setItemAsync("AppToken", accessToken);
    
          const userRes = await axiosClient.get("/user/me", secondConfig);

          console.log(userRes);
        
          authUser({
            userName: userRes.data.username,
            role: userRes.data.rol,
            token: accessToken,
            id: userRes.data._id
          });

        }
      } catch (error) {
        console.log(error);
        Alert.alert("Oops!", error.response.data.detail ?? "Error al iniciar sesión");
      }
    };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#64CCC5"}}>
        <View style={styles.container}>
            <Text style={styles.logo}>Doc Link</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                placeholder="Correo"
                placeholderTextColor='#607274'
                onChangeText={text => setUsername(text)}
                value={username}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Contraseña"
                placeholderTextColor='#607274'
                onChangeText={text => setPassword(text)}
                value={password}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.signupView}>
                <Text style={styles.signupText}>¿Todavía no tienes cuenta?</Text>

                <View 
                    style={{alignItems: "center", gap: 20, marginTop: 10}}
                >
                    <TouchableOpacity onPress={
                        () => navigation.navigate("CreatePatient", {screen: "SetCredentials", params: {role: "patient"}})
                    }>
                        <Text style={styles.signupButton}>Soy paciente</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("CreateDoctor", {screen: "SetCredentials", params: {role: "doctor"}})}>
                        <Text style={styles.signupButton}>Soy doctor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FBF9F1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#64CCC5',
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: 'white',
      borderColor: "#E5E1DA",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 50,
      color: '#607274',
      fontSize: 16,
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#64CCC5',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    loginText: {
      color: '#FBF9F1',
      fontSize: 16,
      fontWeight: "bold"
    },
    signupView: {
      marginTop: 30,
    //   width: "80%"
    },
    signupButton: {
        color: "#64CCC5",
        fontSize: 16,
        fontWeight: "bold"
    },
    signupText: {
        fontSize: 14,
        color: '#607274',
        textAlign: "center"
    }
  });

export default Login