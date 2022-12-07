import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

/*  RENDERIZAÇÕES CONDICIONAIS:

    No react-native é muito importante saber fazer renderizações condicionais, por se tratar de aplicativos, muitas vezes vamos ter que mudar toda a renderização de uma página com apenas um click.

    Existem formas mais eficazes de fazer renderizações no react. Veja algumas:

*/

//OPERADOR TERNÁRIO:
//Abaixo temos um componente com 2 botões que aumentam e abaixam um determinado valor, sempre que o valor é impar ele pinta o quadrado de vermelho, quando é par, pinta o quadrado de verde.
export default () => {
    const [num, setNum] = useState(1)
    const [status, setStatus] = useState('impar')
    
    const comparaValor = (valor) => {
        if((valor % 2) === 0){
            setStatus('impar')
        } else {
            setStatus('par')
        }
    }

    const aumentaValor = () => {
        setNum(num + 1)
        comparaValor(num)
    }
    
    const abaixaValor = () => {
        setNum(num - 1)
        comparaValor(num)
    }

    
    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.enunciado}>Se o valor for "par" o quadrado fica vermelho, se for "impar" fica verde...</Text>
            <Text style={styles.texto}>{`${num} é ${status}`}</Text>
            <View style={styles.wrapperBotoes}>
                <Button title='+' onPress={aumentaValor} />
                <Button title='-' onPress={abaixaValor} />
            </View>
            {
                /* Aqui temos o uso do ternário, veja que quando o valor é par ele renderiza de um modo, quando é impar ele renderiza de outro.
                Note que fizemos isso apenas com um trecho de código invés de gerar um if else com todo o componente. */
                num % 2 == 0 
                ? <View style={[styles.quadrado, styles.green]} />
                : <View style={[styles.quadrado, styles.red]} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    enunciado: {
        fontSize: 24,
        margin: 10,
    },
    texto: {
        color: 'black',
        fontSize: 20,
        margin: 10,
    },
    wrapperBotoes: {
        height: 40,
        margin: 10,
        width: 80,
    },  
    quadrado: {
        height: 100,
        margin: 40,
        width: 100,
    },
    red: {
        backgroundColor: 'red',
    },
    green: {
        backgroundColor: 'green',
    },
})