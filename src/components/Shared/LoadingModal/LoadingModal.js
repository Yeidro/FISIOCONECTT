import React from 'react'; // Importa la biblioteca React
import { View, ActivityIndicator } from 'react-native'; // Importa los componentes View y ActivityIndicator de react-native
import { Overlay, Text } from "react-native-elements"; // Importa los componentes Overlay y Text de react-native-elements
import { styles } from "./LoadilModal.styles"; // Importa los estilos desde un archivo externo llamado "LoadilModal.styles"


export function LoadingModal(props) { // Define un componente funcional llamado "LoadingModal" que recibe propiedades como argumento
    const { show, text } = props; // Desestructura las propiedades "show" y "text" desde las props

    return (
        <Overlay isVisible={show}

            overlayStyle={styles.overlay} >

            <View style={styles.view}>
                <ActivityIndicator size="large" color="#00a680" />
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    );
}

LoadingModal.defaultProps = { // Define valores por defecto para las propiedades
    show: false, // La propiedad "show" es falsa por defecto
}


