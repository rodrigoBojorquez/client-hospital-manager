import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// RUTAS PUBLICAS
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

// RUTAS COMUNES
import PerfilUsuarioScreen from "./screens/PerfilUsuarioScreen/PerfilUsuarioScreen";

// RUTAS USUARIOS
import HomePage from "./screens/HomePage/HomePage";
import CitaConfirmScreen from "./screens/CitaConfirmScreen/CitaConfirmScreen";
import PerfilDoctor from "./screens/PerfilDoctor/PerfilDoctor";
import MakeAppointment from "./screens/MakeAppointment/MakeAppointment";
import ConsultarCitas from "./screens/ConsultarCitas/ConsultarCitas";

// RUTAS DOCTORES
import HomeDoctor from "./screens/HomeDoctor/HomeDoctor";

const Tab = createBottomTabNavigator();

function App({ rol, isAuth }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Login") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === "PerfilUsuarioScreen") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Register") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "Agendar") {
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
            } else if (route.name === "Perfil del Doctor") {
              iconName = focused ? "ios-medical" : "ios-medical-outline"; // Cambiado a icono de médico
            } else if (route.name === "Home Page") {
              iconName = focused ? "home" : "home-outline"; // Icono para la página de inicio
            } else if (route.name === "Consultar Citas") {
              iconName = "settings"; // Cambiar a 'settings' para utilizar un icono de configuración
            } else if (route.name === "Home doc") {
              iconName = "home"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: "#1178BD",
          inactiveTintColor: "gray",
          tabBarStyle: {
            display: "flex",
            justifyContent: "center"
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />

        {isAuth && (
          <>
            <Tab.Screen
              name="PerfilUsuarioScreen"
              component={PerfilUsuarioScreen}
            />
            {/* PATIENT */}
            {rol === "patient" && (
              <>
                <Tab.Screen name="Agendar" component={MakeAppointment} />
                {/* <Tab.Screen name="Cita Agendada" component={CitaConfirmScreen} /> */}
                <Tab.Screen name="Perfil del Doctor" component={PerfilDoctor} />
                <Tab.Screen name="Home Page" component={HomePage} />
                <Tab.Screen name="Consultar Citas" component={ConsultarCitas} />
              </>
            )}
            {/* DOCTOR */}
            {rol === "doctor" && (
              <>
                <Tab.Screen name="Home doc" component={HomeDoctor} />
              </>
            )}
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default () => <App rol={"doctor"} isAuth={true} />;
