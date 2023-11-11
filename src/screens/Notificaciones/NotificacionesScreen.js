import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import { styles } from "./NotificacionesScreenstyles";

export function NotificacionesScreen() {
    // Reemplace esto con su propia lógica para obtener notificaciones
    const [notificaciones, setNotificaciones] = React.useState([]);

    // Simulación de datos de notificaciones (reemplace con su propia lógica)
    const mockNotificaciones = [
        { id: 1, text: 'Notificación 1' },
        { id: 2, text: 'Notificación 2' },
        { id: 3, text: 'Notificación 3' },
    ];

    React.useEffect(() => {
        // Cargue las notificaciones cuando se monte el componente
        setNotificaciones(mockNotificaciones);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={notificaciones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.notificacionContainer}>
                        <Text style={styles.notificacionText}>
                            {item.text}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}
