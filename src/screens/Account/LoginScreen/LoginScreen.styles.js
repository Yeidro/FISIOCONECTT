import { StyleSheet } from "react-native"; // Importa la función StyleSheet desde react-native

export const styles = StyleSheet.create({ // Define los estilos utilizando StyleSheet.create
    content: {
        backgroundColor: "#021653", // Color de fondo del componente
        marginHorizontal: 0, // Margen horizontal, en este caso, no hay margen horizontal
    },

    image: {
        resizeMode: "contain",
        width: "40%", // Ancho de la imagen
        height: 150, // Altura de la imagen
        marginTop: 50, // Margen superior desde la parte superior de la pantalla
        marginLeft: 120, // Margen izquierdo desde el borde izquierdo de la pantalla
    },
    textRegister: {
        marginTop: 15, // Margen superior desde el elemento anterior
        marginHorizontal: 80, // Margen horizontal izquierdo y derecho
        color: "#F5F5F5", // Color del texto
    },
    btnRegister: {
        color: "#36AAD0", // Color del texto del enlace "Regístrate"
        fontWeight: "bold", // Peso de la fuente en negrita
    }
});
