import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RutinasScreen.styles";
import { screen } from "../../../utilidades"; // Importa configuraciones de pantalla

export function RutinasScreen() {
    const navigation = useNavigation();

    const goToMalePage = () => {
        navigation.navigate(screen.rutinas.hombre); // Utiliza la ruta definida en 'screen' para la página de Hombre
    };

    const goToFemalePage = () => {
        navigation.navigate(screen.rutinas.mujer); // Reemplaza con la ruta de tu página de Mujer si es necesario
    };

    return (
        <ScrollView style={styles.content}>
            <Text style={styles.textSexo}>¿CUÁL ES TU SEXO?</Text>
            <Text style={styles.textSubtitulo}>Cuéntanos más sobre ti</Text>
            <Image source={require("../../../../assets/img/Elige.jpg")} style={styles.image} />
            <View style={styles.container}>
                <Button
                    title="Hombre"
                    onPress={goToMalePage}
                    buttonStyle={styles.button}
                />
                <Button
                    title="Mujer"
                    onPress={goToFemalePage}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
    );
}
