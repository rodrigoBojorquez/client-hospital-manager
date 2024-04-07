import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc'; // Importa la función tw de twrnc
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

            // Redirigir a la pantalla CitaAgendada
            navigation.navigate("CitaAgendada");

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
        <ScrollView contentContainerStyle={tw`p-4 bg-gray-100 flex-grow`}>
            <View style={tw`flex items-center`}>
                <Text style={tw`text-3xl font-bold text-blue-500 mb-4`}>Agendar cita</Text>

                <View style={tw`bg-white rounded-lg shadow-md p-6 w-full mb-4`}>
                    <View style={tw`mb-4`}>
                        <Text style={tw`font-bold text-lg mb-2`}>Doctor:</Text>
                        <Text style={tw`text-lg`}>{doctorInfo.username}</Text>
                    </View>
                    <View style={tw`mb-4`}>
                        <Text style={tw`font-bold text-lg mb-2`}>Especialidad:</Text>
                        <Text style={tw`text-lg`}>{doctorInfo.speciality}</Text>
                    </View>
                    <View style={tw`mb-4`}>
                        <Text style={tw`font-bold text-lg mb-2`}>Hora de la cita:</Text>
                        <Text style={tw`text-lg`}>{hourAppoint.split("T")[1]}</Text>
                    </View>
                </View>

                <TextInput
                    style={tw`border border-gray-300 rounded-md w-full p-4 mb-4`}
                    onChangeText={setComment}
                    value={comment}
                    multiline
                    numberOfLines={4}
                    placeholder="Escribe aquí cualquier comentario para el doctor..."
                />

                <TouchableOpacity
                    style={tw`bg-blue-500 py-4 rounded-lg w-full items-center`}
                    onPress={handleAppointmentCreation}
                >
                    <Text style={tw`text-white font-bold text-lg`}>Agendar Cita</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default CreateAppoint;
