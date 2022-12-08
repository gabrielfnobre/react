import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Filhos from './Filhos'

/* PROPS.CHILDREN:

    O props.crildren é uma forma de renderizarmos as propriedades que foram passadas para um Componente Filho que está dentro de um Componente Pai, porém os parâmetros foram passados por um Componente Mor que renderizou o Componente Pai, e não pelo Componente Pai, ficando impossível que o Componente Pai renderize as propriedades do Componente Filho.

    Esquisito né? 
    Veja o diagrama embaixo e você vai entender...

        Componente Mor
            |    passou parâmetros pra
            |    Componente Filho
            |
            |_______________________Componente Pai
                                        |       recebeu o Componente
                                        |       Filho, mas não passou
                                        |       parâmetro nenhum para 
                                        |       ele.
                                        |
                                        |_________________Componente Filho
                                                                recebeu parâmetros do 
                                                                componente Mor, mas 
                                                                ele mesmo está dentro 
                                                                do componente Pai, como 
                                                                conteúdo, por isso 
                                                                quando o Componente Pai
                                                                tenta renderizar os 
                                                                dados, ele não consegue

    Para resolver esse problema, usamos o props.children, veja como...

*/

export default props => {
    return (
        <View style={styles.background}>
            <Text style={styles.texto}>Família {props.familia}</Text>
            {/* Veja que o componente Familia é o pai, que vai receber o componente Filhos, mas para renderizá-los, ele precisa de usar o props.children */}
            {props.children}
            {/* Veja que quando passamos valores diretamente a um filho ele renderiza sem problemas, ele só não renderiza quando é de um componente Mor para um filho. */}
            <Filhos nome="Intruso" familia='Intruso'/>
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        margin: 20,
    },
    texto: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
    }

})