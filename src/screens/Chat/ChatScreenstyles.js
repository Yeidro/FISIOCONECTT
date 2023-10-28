import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "#FFF",
    },
    chatContainer: {
        flex: 1,
        padding: 10,
    },
    messageContainer: {
        marginBottom: 10,
        alignItems: 'flex-start', // Cambie a 'flex-end' si desea alinear a la derecha
    },
    userMessage: {
        backgroundColor: "#DCF8C6", // Estilo de mensaje del usuario
        padding: 10,
        borderRadius: 10,
    },
    botMessage: {
        backgroundColor: "#ECECEC", // Estilo de mensaje del bot
        padding: 10,
        borderRadius: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#ECECEC",
        backgroundColor: "#FFF",
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: "#ECECEC",
        borderRadius: 20,
        marginRight: 10,
    },
});
