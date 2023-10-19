import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa la función para crear un Stack Navigator
import { GimnasioScreen } from "../screens/Gimnasio/GimnasioScreen"; // Importa la pantalla relacionada con gimnasios
import { AddGimnasioScreen } from "../screens/Gimnasio/AddGimnasioScreen"; // Importa la pantalla relacionada con la adición de gimnasios
import { screen } from "../utilidades"; // Importa configuraciones de pantalla


const Stack = createNativeStackNavigator(); // Crea una instancia de un Stack Navigator

export function GimnasioStack() { // Define un componente funcional llamado "GimnasioStack"

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.gimnasio.gimnasios} // Asigna el nombre de la pantalla relacionada con gimnasios
                component={GimnasioScreen} // Asocia la pantalla relacionada con gimnasios como componente
                options={{ title: "Gimnasio" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
            <Stack.Screen
                name={screen.gimnasio.addGimnasio} // Asigna el nombre de la pantalla relacionada con la adición de gimnasios
                component={AddGimnasioScreen} // Asocia la pantalla relacionada con la adición de gimnasios como componente
                options={{ title: "Nuevo Gimnasio" }} // Define opciones de navegación, incluyendo el título de la pantalla
            />
        </Stack.Navigator>



    )
}