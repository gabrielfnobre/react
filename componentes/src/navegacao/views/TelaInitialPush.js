import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => {

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Tela Inicial</Text>
            <Text style={styles.text}>Avance pelas outras pelas e veja abaixo a contagem das vezes que você avançou, se você voltar, a contagem será regredida.</Text>
            <Text style={styles.textNumbs}>{props.enum}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    text: {
        fontSize: 25,
        textAlign: "center",
    },
    textNumbs: {
        color: 'black',
        fontSize: 50,
    },
})