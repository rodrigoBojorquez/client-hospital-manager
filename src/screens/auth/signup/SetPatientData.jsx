import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker"
import GoBackButton from '../../../components/GoBackButton';
import { useAppStore } from '../../../stores/appStore';
import { axiosClient } from '../../../../axiosClient';

const SetPatientData = ({ navigation }) => {

  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [date, setDate] = useState(new Date());
  const setPatientData = useAppStore(state => state.setPatientData);
  const patientData = useAppStore(state => state.patientData);

  const handleDate = (e, selected) => {
    setDate(selected)
  }

  const handleSubmit = async () => {
      const rawDate = date.toISOString();
      const formatedDate = rawDate.split("T")[0];

      setPatientData({
        contactNumber: contactNumber,
        address: address,
        dateOfBirth: formatedDate,
        emergencyContact: emergencyContact
      })

      try {
        const response = await axiosClient.post("/public/patients",{
            username: patientData.userName,
            lastname: patientData.lastName,
            email: patientData.email,
            password: patientData.password,
            rol: "patient",
            contact_number: patientData.contactNumber,
            address: patientData.address,
            date_of_birth: patientData.dateOfBirth,
            emergency_contact: emergencyContact
        });

        console.log(response);
        Alert.alert("Genial!", response.data.message ?? "Tu cuenta se ha creado con éxito");

        // VOLVER A LOGIN
        setTimeout(() => {
            navigation.navigate("Login");
        }, 1000)

      } catch (err) {
        console.log(err)
        Alert.alert("Oops", "Hubo un error al crear tu cuenta");
      }
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
                    placeholder="Contacto de Emergencia"
                    placeholderTextColor="#607274"
                    onChangeText={text => setEmergencyContact(text)}
                    value={emergencyContact}
                />
            </View>
            <Text style={styles.pickerText}>Fecha de nacimiento</Text>
            <View style={{marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <DateTimePicker 
                    testID={"dateTimePicker"}
                    mode="date"
                    value={date}
                    onChange={handleDate}
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
  pickerText: {
    color: '#607274',
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15
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