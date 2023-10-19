import { color } from "@rneui/base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        backgroundColor: "#021653",
        marginHorizontal: 0,
        marginTop: 1
    },
    image: {
        resizeMode: "contain",
        height: 400,
        width: "100%",
        marginBottom: 5,
        marginTop: 10
    },
    title: {
        marginTop: 35,
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
        color: "white"
    },
    description: {

        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "white"
    },

    btnStyle: {
        backgroundColor: "#021653",



    },

    btnTitleStyle: {
        fontSize: 18, // Tamaño de la letra del título del botón
        fontWeight: 'bold', // Texto en negrita
        color: 'white', // Color del texto
    },


});
