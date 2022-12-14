import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

/* MÉTODO RENDER:

    O método "render" é um médoto da class "Component" do React, que usamos para renderizar o nosso JSX na tela do aplicativo.

    Veja como usá-lo

*/

export default class Render extends Component {

    //Note que o método "render" do React, envolve todo o return do JSX de um componente, sem ele é impossível renderizar o JSX na tela...
    render() {
        return (
            <View style={styles.fundo}>
                <Text style={styles.texto}>
                    Esse é um Componente gerado à partir de uma Classe.
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    fundo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    texto: {
        color: 'black',
        fontSize: 32,
    },
})