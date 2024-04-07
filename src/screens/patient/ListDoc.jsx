import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import tw from 'twrnc'; // Importa la función tw de twrnc
import rodri from "../../../assets/rodri.png";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ListDoc = () => {
    const [search, setSearch] = useState('');
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/doctor/');
                if (!response.ok) {
                    throw new Error(`Error fetching doctors: ${response.statusText}`);
                }
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error(error);
            }
        };
      
        fetchDoctors();
    }, []);

    const updateSearch = (text) => {
        setSearch(text);
    };

    return (
        <View style={tw`flex-1 bg-white`}>
            <View style={tw`bg-white pt-4 py-3 mx-2`}>
                <View style={tw`flex flex-row items-center bg-white justify-around`}>
                    <Image source={rodri} style={tw`w-24 h-24 mr-4`} />
                    <View>
                        <Text style={tw`text-2xl font-bold text-[#858585]`}>Bienvenido,</Text>
                        <Text style={tw`text-2xl font-bold text-black mt-1`}>Rodrigo Bojorquez</Text>
                    </View>
                    <View style={tw`ml-2 bg-white rounded-full border-2 border-black p-2`}>
                        <Ionicons name="notifications" size={24} color="black" />
                    </View>
                </View>
                <View style={tw`flex flex-row mx-4 items-center mt-4 px-4 py-4 bg-gray-200 rounded-lg`}>
                    <FontAwesome style={tw`mr-2`} name="search" size={20} color="gray" />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Buscar un Doctor"
                        onChangeText={updateSearch}
                        value={search}
                    />
                    <FontAwesome name="microphone" size={20} color="gray" />
                </View>
            </View>
            <ScrollView style={tw`bg-white`} contentContainerStyle={tw`items-center pb-12`}>
                {doctors.map((doctor, index) => (
                    <View key={index} style={tw`flex flex-row items-center px-4 py-4 mt-4 bg-white rounded-lg`}>
                        <View style={tw`w-16 h-16 mr-4 overflow-hidden`}>
                            <Image source={{ uri: doctor.image }} style={tw`w-full h-full`} />
                        </View>
                        <View style={{ width: 200 }}>
                            <Text style={tw`text-xl font-bold text-black`}>{doctor.userName}</Text>
                            <Text style={tw`text-xl font-bold text-[#858585]`}>{doctor.specialty}</Text>
                            <Text style={tw`text-xl font-bold text-[#858585]`}>{doctor.contact_number}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ListDoc;
