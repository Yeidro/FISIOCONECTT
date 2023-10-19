import React from 'react'; // Importa la biblioteca React
import { View, ScrollView } from 'react-native'; // Importa los componentes View y ScrollView de react-native
import { Text, Image } from 'react-native-elements'; // Importa los componentes Text e Image de react-native-elements
import { useNavigation } from "@react-navigation/native"; // Importa el hook useNavigation para la navegación
import { LoginForm } from "../../../components/Auth"; // Importa el componente LoginForm desde la ruta especificada
import { screen } from "../../../utilidades"; // Importa configuraciones de pantalla
import { styles } from "./LoginScreen.styles"; // Importa los estilos desde un archivo externo


export function LoginScreen() { // Define un componente funcional llamado "LoginScreen"
    const navigation = useNavigation(); // Obtiene el objeto de navegación

    const goToRegister = () => {
        navigation.navigate(screen.account.Register);
    }
    return (
        <ScrollView style={styles.content}>
            <Image source={require("../../../../assets/img/Usuario.jpg")} style={styles.image} />
            <View style={styles.content}>
                < LoginForm />
                <Text style={styles.textRegister}>
                    ¿Aún no tienes cuenta? <Text style={styles.btnRegister} onPress={goToRegister}> Regístrarse</Text>
                </Text>
            </View>

        </ScrollView>
    )
}