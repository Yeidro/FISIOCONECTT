import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements'
import { styles } from "./HombreScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utilidades"; // Importa configuraciones de pantalla


export function HombreScreen() {
    const navigation = useNavigation();

    const goToBrazos = () => {
        navigation.navigate(screen.rutinas.brazos);
    };

    const goToAbdominales = () => {
        navigation.navigate(screen.rutinas.abdominales);
    };
    const goToGluteos = () => {
        navigation.navigate(screen.rutinas.gluteos);
    };

    const goToPiernas = () => {
        navigation.navigate(screen.rutinas.piernas);
    };

    return (
        <ScrollView style={styles.content}>
            <Text style={styles.textTitulo}>ELIGE TU ZONA OBJETIVO</Text>
            <Image source={require("../../../../assets/img/HombreR.png")} style={styles.image} />
            <View style={styles.container}>
                <Button
                    title="BRAZOS"
                    onPress={goToBrazos}
                    buttonStyle={styles.button}
                />
                <Button
                    title="ABDOMINALES"
                    onPress={goToAbdominales}
                    buttonStyle={styles.button}
                />

                <Button
                    title="GLUTEOS"
                    onPress={goToGluteos}
                    buttonStyle={styles.button}
                />
                <Button
                    title="PIERNAS"
                    onPress={goToPiernas}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
    )
}


