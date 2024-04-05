import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react'
import GoBackButton from '../../../components/GoBackButton';
import TermsCheckbox from '../../../components/TermsCheckbox';

const SetPatientData = ({ navigation }) => {

  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  // const [isChecked, setIsChecked] = useState(false);


  const handleSubmit = () => {
      console.log("Información del paciente:", { contactNumber, address, birthDate, emergencyContact });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#64CCC5" }}>
        <View style={styles.container}>
            <GoBackButton
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.heading}>Sobre ti</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Número de Contacto"
                    placeholderTextColor="#607274"
                    onChangeText={text => setContactNumber(text)}
                    value={contactNumber}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Dirección"
                    placeholderTextColor="#607274"
                    onChangeText={text => setAddress(text)}
                    value={address}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Fecha de Nacimiento"
                    placeholderTextColor="#607274"
                    onChangeText={text => setBirthDate(text)}
                    value={birthDate}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Contacto de Emergencia"
                    placeholderTextColor="#607274"
                    onChangeText={text => setEmergencyContact(text)}
                    value={emergencyContact}
                />
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Crear cuenta</Text>
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
  heading: {
      fontWeight: 'bold',
      fontSize: 40,
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
  submitBtn: {
      width: '80%',
      backgroundColor: '#64CCC5',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
  },
  submitText: {
      color: '#FBF9F1',
      fontSize: 16,
      fontWeight: "bold"
  },
});

export default SetPatientData