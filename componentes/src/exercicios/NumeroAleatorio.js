import React from "react"
import { SafeAreaView, Text } from "react-native"

export default ({min, max}) => {
    return (
        <SafeAreaView>
            <Text>O valor gerado é:</Text>
            <Text>{geraAleatorio(min, max)}</Text>
        </SafeAreaView>
    )
}

function geraAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(geraAleatorio(0, 9))