import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react'

const SetCredentials = ({ navigation, route }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { role } = route.params;

  const nextScreen = () => {
    if (role === "patient") {
      navigation.navigate("SetPatientData");
    }
    else if (role === "doctor") {
      navigation.navigate("SetDoctorData");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#64CCC5" }}>
        <View style={styles.container}>
            <Text style={styles.logo}>Crear Cuenta</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre"
                    placeholderTextColor="#607274"
                    onChangeText={text => setFirstName(text)}
                    value={firstName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Apellido"
                    placeholderTextColor="#607274"
                    onChangeText={text => setLastName(text)}
                    value={lastName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Correo"
                    placeholderTextColor="#607274"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Contraseña"
                    placeholderTextColor="#607274"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>
            <TouchableOpacity style={styles.signupBtn} onPress={nextScreen}>
                <Text style={styles.signupText}>Siguiente</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Volver</Text>
            </TouchableOpacity>
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
  signupBtn: {
      width: '80%',
      backgroundColor: '#64CCC5',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
  },
  signupText: {
      color: '#FBF9F1',
      fontSize: 16,
      fontWeight: "bold"
  },
});

export default SetCredentials