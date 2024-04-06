import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import GoBackButton from '../../components/GoBackButton';
import { axiosClient } from '../../../axiosClient';

const CreateAppoint = ({ navigation, route }) => {
  const { hourAppoint, doctorInfo, patientId } = route.params;
  const [comment, setComment] = useState('');

  const handleAppointmentCreation = async () => {

    try {
        const data = {
            patient_id: patientId,
            doctor_id: doctorInfo.doctorId,
            date: hourAppoint,
            commentary: comment
        }
        const response = await axiosClient.post(`/appointment/`, data)

        Alert.alert("Genial!", response.data.message ?? "Cita agregada con éxito")

        setTimeout(() => {
            navigation.navigate("Appointments")
        }, 2000)

        console.log(response);
    } catch (err) {
        console.log(err);
        Alert.alert("Oops!", "Hubo un error al agendar la cita");
    }

    console.log({
      hourAppoint,
      doctorInfo,
      patientId,
      comment,
    });

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text>Agendar cita</Text>
    
      <View style={styles.section}>
        <Text style={styles.label}>Doctor:</Text>
        <Text style={styles.text}>{doctorInfo.username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Especialidad:</Text>
        <Text style={styles.text}>{doctorInfo.speciality}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Hora de la cita:</Text>
        <Text style={styles.text}>{hourAppoint.split("T")[1]}</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setComment}
        value={comment}
        multiline
        numberOfLines={4}
        placeholder="Escribe aquí cualquier comentario para el doctor..."
      />

      <TouchableOpacity style={styles.button} onPress={handleAppointmentCreation}>
        <Text style={styles.buttonText}>Agendar Cita</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlignVertical: 'top', // Asegura que el texto comience desde la parte superior en Android
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CreateAppoint;
