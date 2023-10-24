import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { RutinasScreen } from "../screens/Rutinas/RutinasScreen";
import { screen } from "../utilidades"; // Importa configuraciones de pantalla

const Stack = createNativeStackNavigator();

export function RutinasStack() {
    return (//inicia una pila de navegación con Stack.Navigator
        <Stack.Navigator>
            <Stack.Screen
                name={screen.rutinas.rutinas} // Define una pantalla con el nombre de acuerdo a la configuración
                component={RutinasScreen}
                options={{ title: "Rutinas" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

        </Stack.Navigator>
    )
}