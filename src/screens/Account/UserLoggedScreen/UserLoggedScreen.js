import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth';
import { InfoUser } from "../../../components/Account"; // Importa el componente de información del usuario
import { styles } from "./UserLoggedScreen.styles"; // Importa los estilos específicos de la pantalla




export function UserLoggedScreen() {

    const logout = async () => {
        const auth = getAuth();
        await signOut(auth);

    }
    return (
        <View style={styles.content}>
            <InfoUser />

            <Button title="Cerrar sesión"
                buttonStyle={styles.btnStyles}
                titleStyle={styles.btnTextStyles}
                onPress={logout} />
        </View>
    )
}