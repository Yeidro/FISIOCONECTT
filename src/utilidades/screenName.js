
const accountStack = {
    tab: "AccountTab", // Nombre de la pestaña de cuentas de usuario
    account: "account", // Nombre de la pantalla de cuenta de usuario
    Login: "Login", // Nombre de la pantalla de inicio de sesión
    Register: "Register", // Nombre de la pantalla de registro
};

const rutinasStack = {
    tab: "RutinasTab",
    rutinas: "rutinas"

}

const chatStack = {
    tab: "ChatTab",
    chat: "chat"
}

const notificacionesStack = {
    tab: "NotificacionesTab",
    notificaciones: "notificaciones"
}

const pagosStack = {
    tab: "PagosTab",
    pagos: "pagos"
}



export const screen = {

    account: accountStack, // Agrupa las pantallas relacionadas con cuentas de usuario bajo la propiedad "account"
    rutinas: rutinasStack,
    chat: chatStack,
    notificaciones: notificacionesStack,
    pagos: pagosStack
};
