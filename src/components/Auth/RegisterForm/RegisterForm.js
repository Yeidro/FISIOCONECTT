import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utilidades"; // Importa rutas de pantalla desde un archivo de utilidades.
import Toast from "react-native-toast-message"; // Importa un componente de notificación de Toast.
import { initialValues, validationSchema } from "./RegisterForm.data"; // Importa valores iniciales y esquema de validación desde otro archivo.
import { useFormik } from "formik"; // Importa la función useFormik de la biblioteca Formik.
import { styles } from "./RegisterForm.styles"; // Importa estilos desde otro archivo.

/**
 * Componente para el formulario de registro.
 */
export function RegisterForm() {
    // Estado para mostrar u ocultar la contraseña.
    const [showPassword, setShowPassword] = useState(false);

    // Obtiene el objeto de navegación.
    const navigation = useNavigation();

    // Formulario para el registro.
    const formik = useFormik({
        // Valores iniciales del formulario.
        initialValues: initialValues(),

        // Esquema de validación del formulario.
        validationSchema: validationSchema(),

        // Función que se ejecuta cuando se envía el formulario.
        onSubmit: async (formValue) => {
            try {
                // Obtiene la instancia de autenticación de Firebase.
                const auth = getAuth();

                // Crea una nueva cuenta de usuario con el correo electrónico y la contraseña proporcionados.
                await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);

                // Navega a la pantalla de la cuenta.
                navigation.navigate(screen.account.account);
            } catch (error) {
                // Muestra un mensaje de error si el registro falla.
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al registrarse, intentelo mas tarde"
                });


            }
        }
    })

    /**
     * Función para mostrar u ocultar la contraseña.
     */
    const showHidenPassword = () => setShowPassword((prevState) => !prevState);

    // Devuelve el componente.
    return (
        <View style={styles.content} >

            {/* Entrada de correo electrónico. */}
            <Input placeholder='Correo electronico' containerStyle={styles.input} inputStyle={{ color: 'white' }}
                rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon} />}
                onChangeText={(text) => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
            />

            {/* Entrada de contraseña. */}
            <Input placeholder='Contraseña' containerStyle={styles.input} inputStyle={{ color: 'white' }}
                secureTextEntry={showPassword ? false : true}
                rightIcon={<Icon type="material-community" name={showPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon}
                    onPress={showHidenPassword} />}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
            />

            {/* Entrada para confirmar la contraseña. */}
            <Input placeholder='Confirmar contraseña' containerStyle={styles.input} inputStyle={{ color: 'white' }}
                secureTextEntry={showPassword ? false : true}
                rightIcon={<Icon type="material-community" name={showPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon}
                    onPress={showHidenPassword} />}
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                errorMessage={formik.errors.repeatPassword}
            />

            {/* Botón de registro. */}
            <Button title="Registrarse"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}

            />


        </View>
    )
}
