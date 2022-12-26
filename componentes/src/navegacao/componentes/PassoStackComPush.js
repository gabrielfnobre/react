import React from "react";
import { View, StyleSheet, Button } from "react-native";


export default props => {

    // Aqui utilizamos as funções para somar um valor ao hook ou retirar o valor
    const avancar = tela => {
        props.navigation.push(tela)
        props.funcoes[0]()
    }
    const voltar = () => {
        props.navigation.goBack()
        props.funcoes[1]()
    }
    
    return (
        <View style={styles.flexInteiro}>
            <View>
                {props.voltar ? <Button title="Voltar" onPress={voltar} /> : false}
                {props.avancar ? <Button title="Avançar" onPress={() => avancar(props.avancar)} /> : false}
            </View>
            <View style={styles.flexInteiro}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexInteiro: {
        flex: 1,
    },
})