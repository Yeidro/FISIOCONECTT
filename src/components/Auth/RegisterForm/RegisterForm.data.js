import * as Yup from "yup"; // Importa la biblioteca Yup para validación de esquemas

export function initialValues() { // Define una función para los valores iniciales del formulario
    return {
        email: "", // Valor inicial para el campo de correo electrónico
        password: "", // Valor inicial para el campo de contraseña
        repeatPassword: "", // Valor inicial para el campo de repetición de contraseña
    };
}

export function validationSchema() { // Define una función para el esquema de validación
    return Yup.object({
        email: Yup.string() // Campo de correo electrónico
            .email("El email no es correcto") // Valida que sea un correo electrónico válido
            .required("El email es obligatorio"), // Requiere que el campo no esté vacío y muestra un mensaje de error si lo está

        password: Yup.string() // Campo de contraseña
            .required("La contraseña es obligatoria"), // Requiere que el campo no esté vacío y muestra un mensaje de error si lo está

        repeatPassword: Yup.string() // Campo de repetición de contraseña
            .required("La contraseña es obligatoria") // Requiere que el campo no esté vacío y muestra un mensaje de error si lo está
            .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"), // Compara con el campo "password" para asegurarse de que sean iguales
    });
}
