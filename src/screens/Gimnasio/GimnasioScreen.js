import React from "react";
import { View, Text } from "react-native"
import { Button } from "react-native-elements";
import { screen } from "../../utilidades";

export function GimnasioScreen(props) {
    const { navigation } = props;

    const goToAddGimnasio = () => {
        //navigation.navigate(screen.gimnasio.addGimnasio)

        navigation.navigate(screen.account.tab, { screen: screen.account.account });
    };
    return (
        <View>
            <Text> Estamos en la screem Gimnasio</Text>
            <Button title="Crear Gimnasio" onPress={goToAddGimnasio} />
        </View>
    );
}