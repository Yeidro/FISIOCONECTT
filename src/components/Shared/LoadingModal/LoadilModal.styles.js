import { StyleSheet } from "react-native"; // Importa el módulo StyleSheet de React Native

export const styles = StyleSheet.create({ // Crea un objeto de estilos llamado "styles"

    overlay: { // Estilos para un componente llamado "overlay"
        height: 100, // Altura de 100 unidades
        width: 200, // Ancho de 200 unidades
        backgroundColor: "fff", // Fondo en blanco (debería ser "#fff" para ser el color blanco)
        borderColor: "#00a680", // Color del borde
        borderWidth: 2, // Ancho del borde de 2 unidades
        borderRadius: 10, // Radio de borde de 10 unidades
    },
    view: { // Estilos para un componente llamado "view"
        flex: 1, // Ocupa todo el espacio disponible
        alignItems: "center", // Alinea los elementos hijos en el centro horizontal
        justifyContent: "center" // Alinea los elementos hijos en el centro vertical
    },
    text: { // Estilos para un componente llamado "text"
        color: "#00a680", // Color del texto
        textTransform: "uppercase", // Transforma el texto a mayúsculas
        marginTop: 10 // Margen superior de 10 unidades
    }
});
