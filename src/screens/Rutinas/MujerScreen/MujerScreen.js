import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements'
import { styles } from "./MujerScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utilidades"; // Importa configuraciones de pantalla


export function MujerScreen() {
    const navigation = useNavigation();

    const goToBrazosMujer = () => {
        navigation.navigate(screen.rutinas.brazosm);
    };
    const goToAbdominalesMujer = () => {
        navigation.navigate(screen.rutinas.abdominalesm);
    }

    const goToGluteosMujer = () => {
        navigation.navigate(screen.rutinas.gluteosm);
    }

    const goToPiernasMujer = () => {
        navigation.navigate(screen.rutinas.piernasm);
    }
    return (
        <ScrollView style={styles.content}>
            <Text style={styles.textTitulo}>ELIGE TU ZONA OBJETIVO</Text>
            <Image source={require("../../../../assets/img/MujerR.png")} style={styles.image} />
            <View style={styles.container}>
                <Button
                    title="BRAZOS"
                    onPress={goToBrazosMujer}
                    buttonStyle={styles.button}

                />
                <Button
                    title="ABDOMINALES"
                    onPress={goToAbdominalesMujer}
                    buttonStyle={styles.button}
                />

                <Button
                    title="GLUTEOS"
                    onPress={goToGluteosMujer}
                    buttonStyle={styles.button}
                />
                <Button
                    title="PIERNAS"
                    onPress={goToPiernasMujer}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
    )
}