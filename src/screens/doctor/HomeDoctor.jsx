import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import tw from 'twrnc'; // Importa la función tw de twrnc
import rodri from "../../../assets/rodri.png";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeDoctor = () => {
  const [search, setSearch] = React.useState('');

  const updateSearch = (text) => {
      setSearch(text);
  };
  
  return (
      <ScrollView style={tw`bg-white pt-4 h-full`}>
          <View style={tw`items-center bg-white`}>
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

      </ScrollView>
  )
}
export default HomeDoctor