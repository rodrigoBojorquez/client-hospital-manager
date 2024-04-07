import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

const DoctorCard = ({ doctor }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("DoctorInfo", { doctorId: doctor._id });
    };

    return (
        <TouchableOpacity style={tw`mx-2 bg-white rounded-lg p-4 mb-5 shadow-md flex-row`} onPress={handlePress}>
            <View style={tw`mr-4`}>
                <MaterialIcons name="local-hospital" size={50} color="black" />
            </View>
            <View style={tw`flex-1`}>
                <Text style={tw`text-xl font-bold text-black`}>{doctor.username ?? ""}</Text>
                <Text style={tw`text-base font-bold text-[#6e6e6e]`}>{doctor.speciality ?? ""}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DoctorCard;
