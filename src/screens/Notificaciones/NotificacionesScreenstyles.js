import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    notificacionesContainer: {
        padding: 10,
    },
    notificacionContainer: {
        marginBottom: 10,
        alignItems: 'flex-start', // Cambie a 'flex-end' si desea alinear a la derecha
        backgroundColor: "#ECECEC", // Estilo de notificación
        padding: 10,
        borderRadius: 10,
    },
    notificacionText: {
        fontSize: 16,
    },
});
