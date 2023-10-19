import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { AccountScreen } from "../screens/Account/AccountScreen"; // Importa la pantalla de cuenta de usuario
import { screen } from "../utilidades"; // Importa configuraciones de pantalla
import { LoginScreen } from "../screens/Account/LoginScreen"; // Importa la pantalla de inicio de sesión
import { RegisterScreen } from "../screens/Account/RegisterScreen"; // Importa la pantalla de registro

const Stack = createNativeStackNavigator(); // Crea una instancia de un Stack Navigator

export function AccountStack() {
    return (//inicia una pila de navegación con Stack.Navigator
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account} // Define una pantalla con el nombre de acuerdo a la configuración
                component={AccountScreen} // Asocia la pantalla de cuenta de usuario como componente
                options={{ title: "Cuenta" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen name={screen.account.Login} // Define una pantalla de inicio de sesión
                component={LoginScreen} // Asocia la pantalla de inicio de sesión como componente
                options={{ title: "Iniciar sesión" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen name={screen.account.Register} // Define una pantalla de registro
                component={RegisterScreen} // Asocia la pantalla de registro como componente
                options={{ title: "Regístrate" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
        </Stack.Navigator>
    )
}