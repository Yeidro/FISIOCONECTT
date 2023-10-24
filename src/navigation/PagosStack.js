import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { PagosScreen } from "../screens/Pagos/PagosScreen";
import { screen } from "../utilidades"; // Importa configuraciones de pantalla

const Stack = createNativeStackNavigator();

export function PagosStack() {
    return (//inicia una pila de navegación con Stack.Navigator
        <Stack.Navigator>
            <Stack.Screen
                name={screen.pagos.pagos} // Define una pantalla con el nombre de acuerdo a la configuración
                component={PagosScreen}
                options={{ title: "Pagos" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

        </Stack.Navigator>
    )
}