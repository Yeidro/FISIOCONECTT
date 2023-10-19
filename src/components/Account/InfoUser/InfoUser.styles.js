import { StyleSheet } from "react-native"; // Importa el módulo StyleSheet de React Native

export const styles = StyleSheet.create({ // Crea un objeto de estilos llamado "styles"

    content: { // Estilos para un componente llamado "content"
        alignItems: "center", // Alinea los elementos hijos en el centro horizontal
        justifyContent: "center", // Alinea los elementos hijos en el centro vertical
        flexDirection: "row", // Establece la dirección de los elementos hijos como fila (horizontal)
        backgroundColor: "#f2f2f2", // Color de fondo gris claro
        paddingVertical: 30, // Relleno vertical de 30 unidades
    },

    avatar: { // Estilos para un componente llamado "avatar"
        marginRight: 20, // Margen derecho de 20 unidades
        backgroundColor: "green", // Color de fondo verde
    },

    displayName: { // Estilos para un componente llamado "displayName"
        fontWeight: "bold", // Texto en negrita
        paddingBottom: 5, // Espacio en la parte inferior de 5 unidades
    }

});


