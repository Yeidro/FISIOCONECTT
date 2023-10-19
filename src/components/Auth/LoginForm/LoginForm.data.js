import * as Yup from "yup"; // Importa la biblioteca Yup para validación de esquemas

// Define una función llamada "initialValues" que devuelve un objeto con valores iniciales para el formulario
export function initialValues() {
    return {
        email: "", // Valor inicial para el campo de correo electrónico
        password: "", // Valor inicial para el campo de contraseña
    };
}

// Define una función llamada "validationSchema" que crea un esquema de validación utilizando Yup
export function validationSchema() {
    return Yup.object({
        email: Yup.string() // Campo de correo electrónico
            .email("El email no es válido") // Valida que sea un correo electrónico válido
            .required("El email es obligatorio"), // Requiere que el campo no esté vacío y muestra un mensaje de error si lo está

        password: Yup.string() // Campo de contraseña
            .required("La contraseña es obligatoria"), // Requiere que el campo no esté vacío y muestra un mensaje de error si lo está
    });
}
