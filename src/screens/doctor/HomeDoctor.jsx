import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import rodri from "../../../assets/rodri.png"
import Icon from "react-native-vector-icons/Fontisto";
import DoctorIcon from "../../../assets/images/caduceo.png";
import { axiosClient } from '../../../axiosClient';
import { useAppStore } from "../../stores/appStore.js";


// COMPONENTS
import Appointment from "./components/appoiments.jsx";


const HomeDoctor = () => {

  const [data, setData] = useState([]);
  const profileData = useAppStore(store => store.profileData);

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const response = await axiosClient.get(`/user/me`)
        console.log(response)
        setData(response.data.response ?? []);
      } catch (err) {
        console.log(err);
        Alert.alert("Oops!", "Hubo un error al obtener información");
      }
    }
    getDataUser()
  }, [])


  const menusInfo = {
    left: "Sin asignar",
    right: "Sin asignar",
  };

  const nextAppointments = [
    {
      id: 1,
      patient: "Juanito Perez",
      description: "juanito viene a revicion medica anual",
      hour: "15:00",
    },
    {
      id: 2,
      patient: "Alexis dolores",
      description:
        "alexis viene a cita con el  doctor por una lesion en la pierna izquierda",
      hour: "18:30",
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }} showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingVertical: 25,
          paddingHorizontal: 15,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={rodri} style={{ height: 70, width: 70 }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "#858585", fontSize: 20, marginBottom: 5 }}>
                Bienvenido, Dr
              </Text>
              <Text style={{ fontSize: 23, fontWeight: 550 }}>
                {profileData.userName}
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Icon name="bell" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: "#11AEBD",
            fontSize: 25,
            fontWeight: 550,
            marginTop: 30,
          }}
        >
          Cita del día
        </Text>

        {/* GRID DE HOME */}
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              backgroundColor: "#11BD92",
              borderRadius: 10,
              color: "white",
              alignItems: "center",
              justifyContent: "space-around",
              padding: 20,
              flexDirection: "row"
            }}
          >
            <Text style={{ width: "60%", color: "white", fontSize: 17, fontWeight: 600 }}>
              La medicina es el arte de acompañar a lar personas en su camino
              hacia la salud
            </Text>
            <Image
              source={DoctorIcon}
              style={{ height: 100, width: 100, tintColor: "black" }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              gap: 15,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flex: 1, backgroundColor: "#4EACEC", borderRadius: 10, height: 130, justifyContent: "center", alignItems: "center" }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                {menusInfo.left}
              </Text>
            </View>
            <View
              style={{ flex: 1, backgroundColor: "#70D7BD", borderRadius: 10, justifyContent: "center", alignItems: "center" }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                {menusInfo.right}
              </Text>
            </View>
          </View>
        </View>

        <Text style={{ marginTop: 30, color: "#11AEBD", fontWeight: 500, fontSize: 25 }}>Próximas citas</Text>

        <View style={{ marginTop: 15 }}>
          {nextAppointments?.map((appoinment) => (
            <Appointment data={appoinment} key={appoinment.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeDoctor;