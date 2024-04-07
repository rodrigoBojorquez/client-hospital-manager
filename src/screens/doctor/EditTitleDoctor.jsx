import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native-animatable';
import { Button, TextInput } from 'react-native-paper';
import tw from 'twrnc';
import { axiosClient } from '../../../axiosClient';

export default function EditarTitulo() {
    const [university, setUniversity] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleGuardar = async () => {
        try {
            const data = {
                university: university,
                speciality: speciality,
                from_date: fromDate,
                to_date: toDate
            };
            const response = await axiosClient.post(`/doctor/education/${doctorId}`, data);
            console.log(response.data); 
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            Alert.alert("Oops!", "Hubo un error al guardar la información");
        }
    };

    return (
        <View style={tw`flex-1 p-5 bg-white`}>
            <Text style={tw`text-2xl text-[#11AEBD] text-center mt-6 font-bold`}>
                Agregue sus datos
            </Text>
            <Text style={tw`text-2xl text-[#11AEBD] text-left mt-3 font-bold`}>
                Titulación
            </Text>
            <Text style={tw`text-xl text-[#11AEBD] text-left mt-3 font-bold`}>
                Datos de la institución
            </Text>
            <View>
                <View style={tw`mt-2`}>
                    <Text style={tw`text-xl text-left mt-3 font-bold`}>
                        Universidad de estudios
                    </Text>
                    <TextInput
                        style={tw`w-full h-12 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                        underlineColorAndroid='transparent'
                        placeholder='Nombre de la institución'
                        value={university}
                        onChangeText={text => setUniversity(text)}
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`text-xl text-left mt-3 mb-1 font-bold`}>
                        Especialidad
                    </Text>
                    <TextInput
                        style={tw`w-full h-12 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                        underlineColorAndroid='transparent'
                        placeholder='Nombre de su especialidad'
                        value={speciality}
                        onChangeText={text => setSpeciality(text)}
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`text-xl text-left mt-3 mb-1 font-bold`}>
                        Fecha de inicio de su carrera
                    </Text>
                    <TextInput
                        style={tw`w-full h-12 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                        underlineColorAndroid='transparent'
                        placeholder='Fecha de inicio'
                        value={fromDate}
                        onChangeText={text => setFromDate(text)}
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`text-xl text-left mt-3 mb-1 font-bold`}>
                        Fecha de finalización de su carrera
                    </Text>
                    <TextInput
                        style={tw`w-full h-12 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                        underlineColorAndroid='transparent'
                        placeholder='Fecha de graduación'
                        value={toDate}
                        onChangeText={text => setToDate(text)}
                    />
                </View>
            </View>
            <View style={tw`flex justify-end mt-4`}>
                <Button style={tw`w-full bg-[#1178BD] h-12`} onPress={handleGuardar}>
                    <Text style={tw`text-xl text-white font-bold`}>
                        Guardar
                    </Text>
                </Button>
            </View>
        </View>
    );
}
