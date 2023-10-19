import React from 'react';
import { View, Text } from 'react-native';
import { InfoUser } from "../../../components/Account"; // Importa el componente de información del usuario
import { styles } from "./UserLoggedScreen.styles"; // Importa los estilos específicos de la pantalla



export function UserLoggedScreen() {
    return (
        <View style={styles.content}>
            <InfoUser />
        </View>
    )
}