import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { ChatScreen } from "../screens/Chat/ChatScreen";
import { screen } from "../utilidades"; // Importa configuraciones de pantalla

const Stack = createNativeStackNavigator();

export function ChatStack() {
    return (//inicia una pila de navegación con Stack.Navigator
        <Stack.Navigator>
            <Stack.Screen
                name={screen.chat.chat} // Define una pantalla con el nombre de acuerdo a la configuración
                component={ChatScreen}
                options={{ title: "Chat" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

        </Stack.Navigator>
    )
}