import React from "react";
import { StyleSheet, TouchableHighlight, Text, Dimensions } from "react-native";

export default props => {

    const estiloBotao = [styles.botao]
    if(props.botaoDuplo) estiloBotao.push(styles.botaoDuplo)
    if(props.botaoTriplo) estiloBotao.push(styles.botaoTriplo)
    if(props.botaoOperacao) estiloBotao.push(styles.botaoOperacao)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={estiloBotao}>{props.valor}</Text>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({

    botao: {
        backgroundColor: '#f0f0f0',
        borderColor: '#888',
        borderWidth: 1,
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        width: Dimensions.get('window').width / 4
    },
    botaoOperacao: {
        backgroundColor: '#fa8231',
        color: '#fff',
    },
    botaoDuplo: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    botaoTriplo: {
        width: (Dimensions.get('window').width / 4) * 3,
    }

})