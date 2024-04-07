import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, SafeAreaView, Text, Button } from 'react-native';
import tw from 'twrnc'; // Importa la función tw de twrnc
import { axiosClient } from '../../../axiosClient';
import DoctorCard from './components/DoctorCard';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchDoctor = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await axiosClient.get("/doctor/");
                setDoctors(response.data.response ?? []);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };
        getDoctors();
    }, []);

    useEffect(() => {
        const filtered = doctors.filter(doctor =>
            doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [searchTerm, doctors]);

    return (
        <SafeAreaView style={tw`flex-1 p-4 bg-gray-100`}>
            <View style={tw`mx-2 mt-4 flex-row items-center border border-gray-300 rounded-md bg-white mb-2 px-3`}>
                <FontAwesome5 name="search" size={18} color="gray" style={tw`mr-2`} />
                <TextInput
                    style={tw`h-10 flex-1`}
                    placeholder="Buscar por especialidad"
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            <View style={tw`mb-2`}>
                <Button
                    title='Mis citas'
                    onPress={() => navigation.navigate("Appointments")}
                />
            </View>
            {filteredDoctors.length === 0 ? (
                <View style={tw`flex-1 justify-center items-center`}>
                    <Text>No se encontraron resultados</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredDoctors}
                    renderItem={({ item }) => <DoctorCard doctor={item} navigation={navigation} />}
                    keyExtractor={doctor => doctor._id}
                />
            )}
        </SafeAreaView>
    )
}

export default SearchDoctor;
