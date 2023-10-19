import React, { useState } from 'react';
import { View } from 'react-native'
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { useNavigation } from '@react-navigation/native';
import { screen } from "../../../utilidades";
import { initialValues, validationSchema, } from './LoginForm.data';
import { styles } from './LoginForm.styles';

/**
 * Componente para el formulario de inicio de sesión.
 */
export function LoginForm() {
    // Estado para mostrar o ocultar la contraseña.
    const [showPassword, setShowPassword] = useState(false);

    // Obtiene el objeto de navegación.
    const navigation = useNavigation();

    /**
     * Función para mostrar o ocultar la contraseña.
     */
    const onShowHidePassword = () => setShowPassword((prevState) => !prevState);

    /**
     * Formulario para el inicio de sesión.
     */
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                // Obtiene la instancia de autenticación de Firebase.
                const auth = getAuth();

                // Inicia sesión al usuario con el correo electrónico y la contraseña proporcionados.
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );

                // Navega a la pantalla de la cuenta.
                navigation.navigate(screen.account.account);

            } catch (error) {
                // Muestra un mensaje de error si el inicio de sesión falla.
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Usuario o contraseña incorrectos",
                });
            }
        },

    });

    return (
        <View style={styles.content}>

            <Input placeholder='Correo electronico'
                containerStyle={styles.input}
                inputStyle={{ color: 'white' }}
                rightIcon={
                    <Icon type="material-community" name="at" iconStyle={styles.icon} />
                }
                onChangeText={(text) => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
                keyboardType="email-address"
            />

            <Input placeholder='Contraseña'
                containerStyle={styles.input}
                inputStyle={{ color: 'white' }}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                    <Icon type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={onShowHidePassword} />
                }
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}

            />


            <Button title="iniciar sesión" containerStyle={styles.btnContainer} buttonStyle={styles.btn}
                onPress={formik.handleSubmit} loading={formik.isSubmitting}
            />
        </View>
    );
}
