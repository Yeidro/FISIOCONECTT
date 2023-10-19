import { StyleSheet } from "react-native"; // Importa el módulo StyleSheet de React Native

export const styles = StyleSheet.create({ // Crea un objeto de estilos llamado "styles"

    content: { // Estilos para un componente llamado "content"
        flex: 1, // Ocupa todo el espacio disponible
        alignItems: "center", // Alinea los elementos hijos en el centro horizontal
        justifyContent: "center", // Alinea los elementos hijos en el centro vertical
        marginTop: 30, // Margen superior de 30 unidades
    },

    input: { // Estilos para un componente llamado "input"
        width: "80%", // Ancho del componente al 80% del contenedor
        marginTop: 20, // Margen superior de 20 unidades
    },

    icon: { // Estilos para un componente llamado "icon"
        color: "#c1c1c1", // Color del ícono
    },

    btnContainer: { // Estilos para un componente llamado "btnContainer"
        marginTop: 20, // Margen superior de 20 unidades
        width: "75%", // Ancho del componente al 75% del contenedor
        borderRadius: 15, // Radio de borde de 15 unidades
    },

    btn: { // Estilos para un componente llamado "btn"
        backgroundColor: "#36AAD0", // Color de fondo del botón
    }
});
