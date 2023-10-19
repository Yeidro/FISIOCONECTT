import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Importa la función para crear un Tab Navigator
import { Icon } from "react-native-elements"; // Importa el componente Icon de react-native-elements
import { screen } from "../utilidades"; // Importa configuraciones de pantalla
import { GimnasioStack } from "./GimnasioStack"; // Importa la navegación relacionada con gimnasios
import { AccountStack } from "./AccountStack"; // Importa la navegación relacionada con cuentas de usuario



const Tab = createBottomTabNavigator(); // Crea una instancia de un Tab Navigator

export function AppNavigation() {// Define un componente funcional llamado "AppNavigation" para la navegación principal
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false, // Oculta la barra de navegación
            tabBarActiveTintColor: "#00a680", // Color de los iconos de pestañas activas
            tabBarInactiveTintColor: "#646464", // Color de los iconos de pestañas inactivas
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size), // Define los iconos de las pestañas
        })}>
            <Tab.Screen
                name={screen.gimnasio.tab} // Asigna el nombre de la pestaña relacionada con gimnasios
                component={GimnasioStack} // Asocia la navegación relacionada con gimnasios como componente
                options={{ title: "Gimnasio" }} // Define opciones de navegación, incluyendo el título de la pestaña
            />

            <Tab.Screen
                name={screen.account.tab} // Asigna el nombre de la pestaña relacionada con cuentas de usuario
                component={AccountStack} // Asocia la navegación relacionada con cuentas de usuario como componente
                options={{ title: "Cuenta" }} // Define opciones de navegación, incluyendo el título de la pestaña
            />
        </Tab.Navigator>
    );

}


function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.gimnasio.tab) {
        iconName = "compass-outline";  // Establece el nombre del icono "compass-outline"
    }

    if (route.name === screen.account.tab) {
        iconName = "heart-outline";    // Establece el nombre del icono "heart-outline"
    }

    return (
        <Icon
            type="material-community"
            name={iconName}
            color={color}
            size={size} />  // Renderiza un icono con el nombre, color y tamaño determinados
    )

}