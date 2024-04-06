import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useAppStore } from '../../../stores/appStore'

const AvailableHours = ({ navigation, item, doctor, date }) => {

  const profileData = useAppStore(store => store.profileData);

  const goToAppoint = () => {
    navigation.navigate("CreateAppoint", {
        hourAppoint: `${date}T${item}`, 
        doctorInfo: { 
            doctorId: doctor._id, 
            username: doctor.username, 
            speciality: doctor.speciality 
        }, 
        patientId: profileData.id
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hourText}>{item}</Text>
      <TouchableOpacity style={styles.button} onPress={goToAppoint}>
        <Text style={styles.buttonText}>Agendar cita</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    },
    hourText: {
      color: '#333',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#4CAF50', // Un color verde para indicar acción/positivo
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default AvailableHours