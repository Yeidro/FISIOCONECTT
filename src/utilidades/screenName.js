const gimnasioStack = {
    tab: "GimnasiosTab", // Nombre de la pestaña de gimnasios
    gimnasios: "Gimnasios", // Nombre de la pantalla de gimnasios
    addGimnasio: "AddGimnasio", // Nombre de la pantalla de agregar gimnasio
};

const accountStack = {
    tab: "AccountTab", // Nombre de la pestaña de cuentas de usuario
    account: "account", // Nombre de la pantalla de cuenta de usuario
    Login: "Login", // Nombre de la pantalla de inicio de sesión
    Register: "Register", // Nombre de la pantalla de registro
};

export const screen = {
    gimnasio: gimnasioStack, // Agrupa las pantallas relacionadas con gimnasios bajo la propiedad "gimnasio"
    account: accountStack, // Agrupa las pantallas relacionadas con cuentas de usuario bajo la propiedad "account"
};
