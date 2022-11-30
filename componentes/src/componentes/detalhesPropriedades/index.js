import React from "react";
import { SafeAreaView, Text } from "react-native";

export default (props) => {
    numeroTrocado = props.numero
    numeroTrocado = 10
    props.numero = 10
    return(
        <SafeAreaView>
            <Text>
                Esse é o número original recebido: {props.numero}
            </Text>
            <Text>
                Esse é o número que tentamos trocar por 10: {numeroTrocado}
            </Text>
        </SafeAreaView>
    )
}