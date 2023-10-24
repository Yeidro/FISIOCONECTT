import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements'; // Importa los componentes Text, Button e Image de react-native-elements
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RutinasScreen.styles"; // Importa los estilos desde un archivo externo

export function RutinasScreen() {
    const navigation = useNavigation();

    const goToMalePage = () => {
        // Navegar a la página de Hombre
        navigation.navigate('MalePage'); // Reemplaza 'MalePage' con la ruta de tu página de Hombre
    };

    const goToFemalePage = () => {
        // Navegar a la página de Mujer
        navigation.navigate('FemalePage'); // Reemplaza 'FemalePage' con la ruta de tu página de Mujer
    };

    return (
        <ScrollView style={styles.content}>
            <Text style={styles.textSexo}>¿CUÁL ES TU SEXO?</Text>
            <Text style={styles.textSubtitulo} >Cuéntanos más sobre ti</Text>
            <Image source={require("../../../assets/img/Elige.jpg")} style={styles.image} />
            <View style={styles.container}>
                <Button
                    title="Hombre"
                    onPress={goToMalePage}
                    buttonStyle={styles.button} // Usa buttonStyle para el color de fondo
                />
                <Button
                    title="Mujer"
                    onPress={goToFemalePage}
                    buttonStyle={styles.button} // Usa buttonStyle para el color de fondo
                />
            </View>
        </ScrollView>
    );
}
