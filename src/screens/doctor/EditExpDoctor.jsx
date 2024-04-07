import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import tw from 'tailwind-rn';
import { axiosClient } from '../../../axiosClient';

export default function EditarExp() {
    const [clinic, setClinic] = useState('');
    const [work, setWork] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const profileData = useAppStore(state => state.profileData);


    const handleGuardar = async () => {
        try {
            const doctorId = profileData.id;
            const data = {
                clinic: clinic,
                work: work,
                from_date: fromDate,
                to_date: toDate
            };
            const response = await axiosClient.post(`/doctor/experience/${doctorId}`, data);
            console.log(response.data); 
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            Alert.alert("Oops!", "Hubo un error al guardar la información");
        }
    };

    return (
        <ScrollView style={{ marginBottom: 5 }}>
            <View style={tw`flex-1 p-5 bg-white`}>
                <Text style={tw`text-2xl text-[#11AEBD] text-center mt-6 font-bold`}>
                    Edite sus datos
                </Text>
                <Text style={tw`text-2xl text-[#11AEBD] text-left mt-3 font-bold`}>
                    Experiencia
                </Text>
                <Text style={tw`text-xl text-[#11AEBD] text-left mt-3 font-bold`}>
                    Datos de la institución médica
                </Text>
                <View>
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-xl text-left mt-3 font-bold`}>
                            Nombre de la institución
                        </Text>
                        <TextInput
                            style={tw`w-full h-12 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                            underlineColorAndroid='transparent'
                            placeholder='Nombre de la institución'
                            value={clinic}
                            onChangeText={text => setClinic(text)}
                        />
                    </View>
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-xl text-left mt-3 mb-1 font-bold`}>
                            Trabajo realizado
                        </Text>
                        <TextInput
                            style={tw`w-full h-16 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                            underlineColorAndroid='transparent'
                            placeholder='Introduzca una pequeña descripción del trabajo que desempeñó'
                            value={work}
                            onChangeText={text => setWork(text)}
                        />
                    </View>
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-xl text-left mt-3 mb-1 font-bold`}>
                            Fecha de inicio
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
                            Fecha de finalización
                        </Text>
                        <TextInput
                            style={tw`w-full h-12 rounded-md bg-[#D9D9D9] border-none shadow-lg`}
                            underlineColorAndroid='transparent'
                            placeholder='Fecha de finalización'
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
        </ScrollView>
    );
}
