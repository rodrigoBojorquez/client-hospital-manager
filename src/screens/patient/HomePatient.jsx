import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import tw from 'twrnc'; // Importa la función tw de twrnc
import rodri from "../../../assets/rodri.png";
import OneNotifi from "../../../assets/OneNotifi.png";
import Buscar from "../../../assets/Buscar.png";
import Micro from "../../../assets/Micro.png";

const HomePatient = () => {
    const [search, setSearch] = React.useState('');

    const updateSearch = (text) => {
        setSearch(text);
    };
    
    return (
        <ScrollView style={tw`bg-white pt-12 h-full`}>
            <View style={tw`items-center bg-white`}>
                <View style={tw`flex flex-row items-center bg-white justify-around`}>
                    <Image source={rodri} style={tw`w-24 h-24 mr-4`} />
                    <View>
                        <Text style={tw`text-2xl font-bold text-[#858585]`}>Bienvenido,</Text>
                        <Text style={tw`text-2xl font-bold text-black mt-1`}>Rodrigo Bojorquez</Text>
                    </View>
                    <Image source={OneNotifi} />
                </View>
                <View style={tw`flex flex-row mx-4 items-center mt-4 px-4 py-4 bg-gray-200 rounded-lg`}>
                    <Image source={Buscar} style={tw`mr-3`} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Buscar un Doctor"
                        onChangeText={updateSearch}
                        value={search}
                    />
                    <Image source={Micro} />
                </View>
            </View>
        </ScrollView>
    )
}

export default HomePatient;
