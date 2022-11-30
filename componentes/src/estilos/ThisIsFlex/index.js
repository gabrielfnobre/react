import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default () => {

    /* flex

        Os aplicativos trabalham sempre com o flexbox. Podemos usar a propriedade "flex" ou "flexGrow" para definir todo o tamanho de um determinado elemento.
        
        Quando usamos o flex com valor 1, ele ocupa todo o tamanho da dela.
        
        Quando usamos mais de um elemento com flex na mesma tela, quem tiver o flex maior vai ocupar uma porcentagem maior da tela.

        ATENÇÃO!!!
        Se usamos um elemento flex dentro de outro elemento que ocupa um determinado espaço, o nosso flex vai se ajustar ao tamanho do elemento pai.
     */

    return (
        <View style={styles.background}>
            <Text style={styles.texts}>Note que no flex podemos usar o valor 1 e sabemos que ele ocupará a tela inteira</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex: 1,
    },
    texts: {
        color: 'white',
    }
})