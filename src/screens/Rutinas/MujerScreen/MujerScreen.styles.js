import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    content: {
        backgroundColor: "#021653", // Color de fondo del componente
        marginHorizontal: 0, // Margen horizontal, en este caso, no hay margen horizontal
    },
    image: {
        resizeMode: "contain",
        width: "60%",
        height: 350,
        marginTop: 20,
        borderRadius: 10,
        marginLeft: 82, // Margen izquierdo desde el borde izquierdo de la pantalla
    },
    textTitulo: {
        marginTop: 20,
        marginBottom: 0, // Margen superior desde el elemento anterior
        textAlign: "center",
        color: "#F5F5F5", // Color del texto
        fontSize: 20
    },
    button: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#021653",
        borderRadius: 10,
        borderWidth: 1, // Agrega un borde blanco
        elevation: 5, // Agrega una sombra
    },


});