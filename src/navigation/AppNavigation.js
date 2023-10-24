import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Importa la función para crear un Tab Navigator
import { Icon } from "react-native-elements"; // Importa el componente Icon de react-native-elements
import { screen } from "../utilidades"; // Importa configuraciones de pantalla
import { AccountStack } from "./AccountStack"; // Importa la navegación relacionada con cuentas de usuario
import { RutinasStack } from "./RutinasStack";
import { ChatStack } from "./ChatStack";
import { NotificacionesStack } from "./NotificacionesStack";
import { PagosStack } from "./PagosStack";





const Tab = createBottomTabNavigator(); // Crea una instancia de un Tab Navigator

export function AppNavigation() {// Define un componente funcional llamado "AppNavigation" para la navegación principal
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false, // Oculta la barra de navegación
            tabBarActiveTintColor: "#36AAD0", // Color de los iconos de pestañas activas
            tabBarInactiveTintColor: "#021653", // Color de los iconos de pestañas inactivas
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size), // Define los iconos de las pestañas
        })}>
            <Tab.Screen
                name={screen.account.tab} // Asigna el nombre de la pestaña relacionada con cuentas de usuario
                component={AccountStack} // Asocia la navegación relacionada con cuentas de usuario como componente
                options={{ title: "Cuenta" }} // Define opciones de navegación, incluyendo el título de la pestaña
            />
            <Tab.Screen
                name={screen.rutinas.tab}
                component={RutinasStack}
                options={{ title: "Rutinas" }} />
            <Tab.Screen
                name={screen.chat.tab}
                component={ChatStack}
                options={{ title: "Chat" }} />
            <Tab.Screen
                name={screen.notificaciones.tab}
                component={NotificacionesStack}
                options={{ title: "Notificaciones" }} />

            <Tab.Screen
                name={screen.pagos.tab}
                component={PagosStack}
                options={{ title: "Pagos" }} />

        </Tab.Navigator>
    );

}


function screenOptions(route, color, size) {
    let iconName;


    if (route.name === screen.account.tab) {
        iconName = "account-outline";    // Establece el nombre del icono "heart-outline"
    }
    if (route.name === screen.rutinas.tab) {
        iconName = "clock-outline";
    }
    if (route.name === screen.chat.tab) {
        iconName = "chat-outline";
    }

    if (route.name === screen.notificaciones.tab) {
        iconName = "bell-outline";
    }
    if (route.name === screen.pagos.tab) {
        iconName = "credit-card-outline";
    }

    return (
        <Icon
            type="material-community"
            name={iconName}
            color={color}
            size={size} />  // Renderiza un icono con el nombre, color y tamaño determinados
    )

}