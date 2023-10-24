import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { NotificacionesScreen } from "../screens/Notificaciones/NotificacionesScreen";
import { screen } from "../utilidades"; // Importa configuraciones de pantalla

const Stack = createNativeStackNavigator();

export function NotificacionesStack() {
    return (//inicia una pila de navegación con Stack.Navigator
        <Stack.Navigator>
            <Stack.Screen
                name={screen.notificaciones.notificaciones} // Define una pantalla con el nombre de acuerdo a la configuración
                component={NotificacionesScreen}
                options={{ title: "Notificaciones" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

        </Stack.Navigator>
    )
}