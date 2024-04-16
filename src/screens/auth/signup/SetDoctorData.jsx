import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react'
import GoBackButton from '../../../components/GoBackButton';
import { useAppStore } from '../../../stores/appStore';

const SetDoctorData = ({ navigation }) => {

  const [specialization, setSpecialization] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [clinicCity, setClinicCity] = useState('');

  const setDoctorData = useAppStore(store => store.setDoctorData);

  const handleSubmit = () => {
    setDoctorData({
        speciality: specialization,
        contactNumber: contactNumber,
        licenseNumber: licenseNumber,
        clinic: {
            name: clinicName,
            address: clinicAddress,
            city: clinicCity
        }
    });
    navigation.navigate("SetDoctorSchedule")
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#64CCC5" }}>
        <ScrollView style={styles.container}>
            <GoBackButton 
              onPress={() => navigation.goBack()}
            />

            <Text style={styles.heading}>Tus datos</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Especialidad"
                    placeholderTextColor="#607274"
                    onChangeText={text => setSpecialization(text)}
                    value={specialization}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Contacto Celular"
                    placeholderTextColor="#607274"
                    onChangeText={text => setContactNumber(text)}
                    value={contactNumber}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Número de Licencia"
                    placeholderTextColor="#607274"
                    onChangeText={text => setLicenseNumber(text)}
                    value={licenseNumber}
                />
            </View>
            <Text style={styles.subHeading}>Clínica</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre"
                    placeholderTextColor="#607274"
                    onChangeText={text => setClinicName(text)}
                    value={clinicName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Dirección"
                    placeholderTextColor="#607274"
                    onChangeText={text => setClinicAddress(text)}
                    value={clinicAddress}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Ciudad"
                    placeholderTextColor="#607274"
                    onChangeText={text => setClinicCity(text)}
                    value={clinicCity}
                />
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Siguiente</Text>
            </TouchableOpacity>
        </ScrollView>
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
      fontSize: 30,
      color: '#64CCC5',
      marginBottom: 20,
  },
  subHeading: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#64CCC5',
      marginTop: 10,
      marginBottom: 10,
  },
  inputView: {
      width: '80%',
      backgroundColor: 'white',
      borderColor: "#E5E1DA",
      borderRadius: 25,
      height: 40,
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
  goBackBtn: {
      marginTop: 10,
  },
  goBackText: {
      color: '#607274',
      fontSize: 16,
      textDecorationLine: 'underline',
  },
});

export default SetDoctorData