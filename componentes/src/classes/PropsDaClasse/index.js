import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

/*  PROPS - ATRIBUTO DE PASSAGEM DE PARÂMETROS DA CLASSE COMPONENT:

    Quando usamos componentes baseados em classe, temos uma forma especial de passar parâmetros para ele.

    Visto que estamos trabalhando com classes, não podemos passar parâmetros funcionais como fazemos com as funções. Mas a classe "Component" do React possuí um atributo que consegue acessar as propriedades passadas por através do componente. Esse atributo é o "props".

    Veja como podemos acessá-lo...

*/

export default class PropsDaClasse extends Component {

    render(){
        return (
            <View style={styles.fundo}>
                {/* Aqui está um uso do "props", veja que para acessá-lo precisamos de usar o "this" para referenciar a classe, pois ela herdou o atributo "props" a partir da herança da classe "Component".
                Quando a propriedade "numero" ela foi passada via propriedade igual fazemos no médoto funcional.
                */}
                <Text style={styles.texto}>O número passado foi {this.props.numero}</Text>
            </View>
        )
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