import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Quadrado from "./Quadrado";

/*  FLEXBOX:

    No React e React-Native o Flexbox funciona igual ao CSS.
    Mas no React-Native é importante ressaltar que os Componentes como View, SafeAreaView e outros, já tem o display flex por padrão.

    Além disso, o display flex dos Componentes é sempre Column, fazendo com que os elementos sempre sejam alinhados na vertical.

    Vamos explorar algumas propriedades e ver suas funcionalidades:

*/

//FLEX:
export function Flex() {
    return (
        //Veja como a propriedade flex é aplicada aqui:
        //A propriedade flex ou flexGrow (Ambas tem a mesma funcionalidade aqui), são usadas para atribuir um tamanho geral a um container flex, onde podem ocupar um determinado tamanho de acordo com a numeração que for passada ao flex. Se dois elementos estiverem dentro de um elemento pai, e um tiver o flex maior, o que tiver o flex maior ocupará mais espaço de acordo com o valor que foi passado.
        //Se o container estiver sozinho e for passado "flex: 1" ele ocupará todo o espaço no eixo principal, e no eixo secundário ele ocupará o tamanho dos elementos dentro dele (caso nenhum tamanho seja declarado).
        //Abaixo temos um exemplo de um SafeAreaView que não disputa espaço com ninguém, e já possuí uma largura padrão de ocupar toda a largura, note como ela ocupa toda a largura do dispositivo como também o comprimento.
        //E temos também uma View, que por não possuir um tamanho de largura padrão, ocupa o espaço que for delimitado pelos elementos dentro dele, mas no comprimento (onde é o seu eixo principal), ela ocupa todo o espaço por ter "flex: 1".
        <SafeAreaView style={styles.fundoFlex}>
            <Text style={styles.textoFlex}>Sou o container de fora</Text>
            <View style={styles.fundoFlex}>
                <Text style={styles.textoFlex}>Sou o container de dentro</Text>
                <Quadrado cor='#ff801a' />
                <Quadrado cor='#50d1f6' />
                <Quadrado cor='#dd22c1' />
                <Quadrado cor='#8312ed' />
                <Quadrado cor='#36c9a7' />
            </View>
        </SafeAreaView>
    )
}
    
const styles = StyleSheet.create({
    fundoFlex: {
        alignItems: 'center',
        backgroundColor: '#000a',
        flex: 1,
        justifyContent: 'center',
    },
    textoFlex: {
        color: 'white',
    },
})