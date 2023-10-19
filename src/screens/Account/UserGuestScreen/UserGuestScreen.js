import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utilidades"; // Importa las configuraciones de pantalla
import { styles } from "./UserGuestScreen.styles"; // Importa los estilos específicos de la pantalla



export function UserGuestScreen() {

    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.navigate(screen.account.Login); // Navega a la pantalla de inicio de sesión al hacer clic en el botón
    }
    return (
        <ScrollView centerContent={true} style={styles.content}>
            <Text style={styles.title}>ENTRENAMIENTO EN CASA</Text>
            <Image source={require("../../../../assets/img/comenzar.png")} style={styles.image} />
            <Text style={styles.description}>¡Tranforma tu cuerpo!</Text>
            <View>
                <Button title="COMENZAR" onPress={goToLogin} buttonStyle={styles.btnStyle} titleStyle={styles.btnTitleStyle} />
            </View>

        </ScrollView>
    )
}