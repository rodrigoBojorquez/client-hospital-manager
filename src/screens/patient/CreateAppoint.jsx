import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';
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
      };
      const response = await axiosClient.post(`/appointment/`, data);

      Alert.alert("¡Genial!", response.data.message ?? "Cita agregada con éxito");

      navigation.navigate("CitaAgendada");

      console.log(response);
    } catch (err) {
      console.log(err);
      Alert.alert("¡Oops!", "Hubo un error al agendar la cita");

    }

    console.log({
      hourAppoint,
      doctorInfo,
      patientId,
      comment,
    });
  };

  return (
    <ScrollView contentContainerStyle={tw`bg-white h-full p-4`}>
      <Text style={tw`text-2xl mb-6 font-bold text-center`}>Agendar cita</Text>
    
      <View style={tw`mb-6`}>
        <Text style={tw`text-lg font-bold`}>Doctor:</Text>
        <Text style={tw`text-lg`}>{doctorInfo.username}</Text>
      </View>

      <View style={tw`mb-6`}>
        <Text style={tw`text-lg font-bold`}>Especialidad:</Text>
        <Text style={tw`text-lg`}>{doctorInfo.speciality}</Text>
      </View>

      <View style={tw`mb-6`}>
        <Text style={tw`text-lg font-bold`}>Hora de la cita:</Text>
        <Text style={tw`text-lg`}>{hourAppoint.split("T")[1]}</Text>
      </View>

      <TextInput
        style={tw`border border-gray-400 p-4 mb-6 rounded-md`}
        onChangeText={setComment}
        value={comment}
        multiline
        numberOfLines={4}
        placeholder="Escribe aquí cualquier comentario para el doctor..."
      />

      <TouchableOpacity style={tw`bg-blue-500 py-4 rounded-md items-center`} onPress={handleAppointmentCreation}>
        <Text style={tw`text-white font-bold text-lg`}>Agendar Cita</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateAppoint;
