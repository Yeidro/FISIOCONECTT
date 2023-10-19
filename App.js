// Importa el componente LogBox para ignorar los registros de advertencia
import { LogBox } from "react-native";

// Importa los componentes necesarios de React Navigation y otras bibliotecas
import { NavigationContainer } from '@react-navigation/native';
import Toast from "react-native-toast-message";

// Importa el componente de navegación de la aplicación
import { AppNavigation } from "./src/navigation/AppNavigation";

// Inicializa Firebase
import { initFirebase } from "./src/utilidades"

// Ignora todos los registros de advertencia para evitar que se muestren en la consola
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />

    </>

  );
}

