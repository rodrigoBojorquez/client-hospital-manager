import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import DoctorIcon from "../../../assets/images/caduceo.png";
import { axiosClient } from "../../../axiosClient";
import { useAppStore } from "../../stores/appStore.js";
import tw from "twrnc"; // Importación de twrnc para Tailwind CSS

// COMPONENTS
import Appointment from "./components/appoiments.jsx";

const HomeDoctor = ({ navigation }) => {
  const [data, setData] = useState([]);
  const profileData = useAppStore((store) => store.profileData);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointmentsData = async () => {
      try {
        const patientId = profileData.id;
        const response = await axiosClient.get(
          `/appointment/doctor/${patientId}?patient_id=${patientId}`
        );
        setAppointments(response.data.response ?? []);
        console.log(response.data.response); // Imprimir los datos de las citas
      } catch (err) {
        console.log(err);
        Alert.alert("Oops!", "Hubo un error al obtener información");
      }
    };
    getAppointmentsData();
  }, []);


  const frases = [
    "El único modo de hacer un gran trabajo es amar lo que haces. (Steve Jobs)",
    "Sé el cambio que quieres ver en el mundo. (Mahatma Gandhi)",
    "El poder de la imaginación nos hace infinitos. (John Muir)",
    "Los sueños se realizan cuando mantienes el compromiso con ellos.",
  ];

  const [fraseSeleccionada, setFraseSeleccionada] = useState(
    "Todo lo que siempre has querido está al otro lado del miedo. (George Addair)"
  );

  const obtenerFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setFraseSeleccionada(frases[indiceAleatorio]);
  };

  return (
    <ScrollView style={tw`bg-white pt-2 h-full`}>
      <View style={tw`p-4 flex-1`}>
        <View style={tw`flex-row items-center justify-center`}>
          <View style={tw`flex-row items-center`}>
            <View style={tw`ml-4 items-center`}>
              <Text style={tw` text-2xl font-bold text-[#858585]`}>
                Bienvenido, Dr
              </Text>
              <Text style={tw`text-2xl font-bold`}>{profileData.userName}</Text>
            </View>
          </View>
        </View>

        <Text style={tw`text-[#11AEBD] text-left text-2xl font-bold mt-6`}>
          Cita del día
        </Text>

        {/* GRID DE HOME */}
        <View style={tw`mt-4`}>
          <View
            style={tw`bg-[#11BD92] rounded-lg flex-row items-center justify-between p-4`}
          >
            <Text style={tw`text-white text-lg font-bold w-3/5`}>
              {fraseSeleccionada}
            </Text>
            <TouchableOpacity onPress={obtenerFraseAleatoria}>
              <Image source={DoctorIcon} style={tw`h-24 w-24`} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Citas')}
           style={tw`mt-4 flex-row gap-4 justify-between`}>
            <View
              style={tw`flex-1 bg-[#4EACEC] rounded-lg h-32 justify-center items-center`}
            >
              <Text style={tw`text-white text-lg font-bold`}>Citas </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Configuracion')}
              style={tw`flex-1 bg-[#70D7BD] rounded-lg h-32 justify-center items-center`}
            >
              <Text style={tw`text-white text-lg font-bold`}>
                Configuracion
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <Text style={tw`mt-6 text-[#11AEBD] font-bold text-2xl`}>
          Próximas citas
        </Text>

        <View style={tw`mt-4`}>
          {appointments
            .sort((a, b) => new Date(a.date) - new Date(b.date)) // Ordenar las citas por fecha
            .slice(0, 3) // Tomar solo las dos primeras citas
            .map((appointment) => (
              <View
                key={appointment._id}
                style={tw`flex-1 bg-[#D9D9D9] mb-4 rounded-lg h-32 justify-center`}
              >
                <View>
                  <Text style={tw` ml-4 font-bold text-lg `}>
                    Descripcion de la cita:
                  </Text>
                  <Text style={tw` ml-4 font-semibold text-lg `}>
                    {appointment.commentary}
                  </Text>
                </View>
                <View>
                  <Text style={tw` ml-4 font-bold text-lg `}>
                    {new Date(appointment.date).toLocaleTimeString()}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeDoctor;
