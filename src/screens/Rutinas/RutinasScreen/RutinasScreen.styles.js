import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: "60%",
        height: 350,
        marginTop: 20,
        borderRadius: 10,
        marginLeft: 82, // Margen izquierdo desde el borde izquierdo de la pantalla
    },
    content: {
        backgroundColor: "#021653", // Color de fondo del componente
        marginHorizontal: 0, // Margen horizontal, en este caso, no hay margen horizontal
    },

    textSexo: {
        marginTop: 20,
        marginBottom: 0, // Margen superior desde el elemento anterior
        textAlign: "center",
        color: "#F5F5F5", // Color del texto
        fontSize: 20
    },

    textSubtitulo: {
        color: "#F5F5F5", // Color del texto
        textAlign: "center", // Margen horizontal izquierdo y derecho
        marginTop: 10,

    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,

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
    buttonText: {
        marginLeft: 5,
        color: '#FFFFFF', // Color del texto
    },
});