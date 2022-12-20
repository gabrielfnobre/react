import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default (props) => {

    //Note que display tem uma lógica, onde, se o houver dois valores armazenados em memória para serem operados a tela vai mostrar os dois valores e a operação. Se não tiver, vai mostrar uma operação só.
    if(props.segundoValor[1] === 0){
        return (
            <View style={styles.display}>
                <Text style={styles.displayValue} numberOfLines={1}>
                    {`${props.valorDaTela} ${props.operador}`}
                </Text>
            </View>
        )    
    } else {
        return (
            <View style={styles.display}>
                <Text style={styles.displayValue} numberOfLines={1}>
                    {`${props.segundoValor[0]} ${props.operador} ${props.valorDaTela}`}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.6)',
        alignItems: 'flex-end',
        width: '100%',
    },
    displayValue: {
        fontSize: 60,
        color: "#fff",
    },

})