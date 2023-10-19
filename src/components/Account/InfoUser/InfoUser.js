import React from 'react' // Importa la biblioteca React
import { View } from 'react-native' // Importa el componente "View" de react-native
import { Avatar, Text } from "react-native-elements" // Importa los componentes "Avatar" y "Text" de react-native-elements
import { getAuth } from "firebase/auth" // Importa la función "getAuth" de "firebase/auth"
import { styles } from "./InfoUser.styles" // Importa un objeto de estilos desde el archivo "InfoUser.styles"

export function InfoUser() { // Define una función de componente llamada "InfoUser"
    const { uid, photoURL, displayName, email } = getAuth().currentUser; // Obtiene propiedades del usuario actual usando "getAuth"

    const changeAvatar = () => { // Define una función llamada "changeAvatar"
        console.log('Cambiar avatar') // Imprime un mensaje en la consola al llamar a la función
    }

    return (
        <View style={styles.content}>
            <Avatar size="large"
                rounded
                icon={{ type: "material", name: "person" }} // Configura un ícono de avatar
                containerStyle={styles.avatar} // Aplica estilos al contenedor del avatar
                source={{ uri: photoURL }} // Configura la imagen de perfil a través de una URL
            >
                <Avatar.Accessory size={24} onPress={changeAvatar} />
            </Avatar>
            <View>
                <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    )
}


