import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { RutinasScreen } from "../screens/Rutinas/RutinasScreen/RutinasScreen";
import { screen } from "../utilidades"; // Importa configuraciones de pantalla
import { HombreScreen } from "../screens/Rutinas/HombreScreen/HombreScreen";
import { MujerScreen } from "../screens/Rutinas/MujerScreen/MujerScreen";
import { BrazosScreen } from "../screens/Rutinas/HombreScreen/BrazosScreen/BrazosScreen";
import { AbdominalesScreen } from "../screens/Rutinas/HombreScreen/AbdominalesScreen/AbdominalesScreen";
import { GluteosScreen } from "../screens/Rutinas/HombreScreen/GluteosScreen/GluteosScreen";
import { PiernasScreen } from "../screens/Rutinas/HombreScreen/PiernasScreen/PiernasScreen";
import { MujerBrazosScreen } from "../screens/Rutinas/MujerScreen/MujerBrazosScreen/MujerBrazosScreen";
import { MujerAbdominalesScreen } from "../screens/Rutinas/MujerScreen/MujerAbdominalesScreen/MujerAbdominalesScreen";
import { MujerGluteosScreen } from "../screens/Rutinas/MujerScreen/MujerGluteosScreen/MujerGluteosScreen";
import { MujerPiernasScreen } from "../screens/Rutinas/MujerScreen/MujerPiernasScreen/MujerPiernasScreen";

const Stack = createNativeStackNavigator();

export function RutinasStack() {
    return (//inicia una pila de navegación con Stack.Navigator
        <Stack.Navigator>
            <Stack.Screen
                name={screen.rutinas.rutinas} // Define una pantalla con el nombre de acuerdo a la configuración
                component={RutinasScreen}
                options={{ title: "Rutinas" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen
                name={screen.rutinas.hombre} // Define una pantalla con el nombre de acuerdo a la configuración
                component={HombreScreen}
                options={{ title: "Rutinas Hombre" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

            <Stack.Screen
                name={screen.rutinas.mujer} // Define una pantalla con el nombre de acuerdo a la configuración
                component={MujerScreen}
                options={{ title: "Rutinas Mujer" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

            <Stack.Screen
                name={screen.rutinas.brazos} // Define una pantalla con el nombre de acuerdo a la configuración
                component={BrazosScreen}
                options={{ title: "Brazos" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen
                name={screen.rutinas.abdominales} // Define una pantalla con el nombre de acuerdo a la configuración
                component={AbdominalesScreen}
                options={{ title: "Abdominales" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

            <Stack.Screen
                name={screen.rutinas.gluteos} // Define una pantalla con el nombre de acuerdo a la configuración
                component={GluteosScreen}
                options={{ title: "Gluteos" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen
                name={screen.rutinas.piernas} // Define una pantalla con el nombre de acuerdo a la configuración
                component={PiernasScreen}
                options={{ title: "Piernas" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

            <Stack.Screen
                name={screen.rutinas.brazosm} // Define una pantalla con el nombre de acuerdo a la configuración
                component={MujerBrazosScreen}
                options={{ title: "Brazos" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen
                name={screen.rutinas.abdominalesm} // Define una pantalla con el nombre de acuerdo a la configuración
                component={MujerAbdominalesScreen}
                options={{ title: "Abdominales" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen
                name={screen.rutinas.gluteosm} // Define una pantalla con el nombre de acuerdo a la configuración
                component={MujerGluteosScreen}
                options={{ title: "Gluteos" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

            <Stack.Screen
                name={screen.rutinas.piernasm} // Define una pantalla con el nombre de acuerdo a la configuración
                component={MujerPiernasScreen}
                options={{ title: "Piernas" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />

        </Stack.Navigator>
    )
}