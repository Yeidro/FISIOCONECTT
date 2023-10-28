import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from "./PagosScreenstyles";

export function PagosScreen() {
    // Reemplace esto con su propia lógica para manejar los pagos
    const [monto, setMonto] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [tarjeta, setTarjeta] = React.useState('');

    const handlePagar = () => {
        // Lógica para procesar el pago
        // Puede agregar su propia lógica de validación y procesamiento de pagos aquí
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Realizar un Pago</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.etiqueta}>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={text => setNombre(text)}
                    placeholder="Nombre del titular de la tarjeta"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.etiqueta}>Número de Tarjeta:</Text>
                <TextInput
                    style={styles.input}
                    value={tarjeta}
                    onChangeText={text => setTarjeta(text)}
                    placeholder="Número de tarjeta de crédito o débito"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.etiqueta}>Monto a Pagar:</Text>
                <TextInput
                    style={styles.input}
                    value={monto}
                    onChangeText={text => setMonto(text)}
                    placeholder="Cantidad en USD"
                />
            </View>
            <Button
                title="Pagar"
                onPress={handlePagar}
            />
        </View>
    );
}
