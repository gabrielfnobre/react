import React from "react";
import { StyleSheet, Text} from "react-native";

export default ({nome, familia}) => {
    const intruso = 'Intruso'
    return (
            nome != intruso
            ? <Text style={styles.texto}>{nome} {familia}</Text>
            : <Text style={styles.intruso}>{nome} {familia}</Text>
        )
}

const styles = StyleSheet.create({

    texto: {
        color: 'black',
        fontSize: 16,
    },
    intruso: {
        color: 'red',
        fontSize: 16,
    },

})