import React from "react";
import { SafeAreaView, Text } from "react-native";

export default () => {
    
    /* console.warn

        O "console.warn" é um método de visualizarmos na tela do dispositivo quando acontece um determinado trecho de código, assim como o console.log no terminal.

        É muito útil para o período de desenvolvimento quando precisamos visualizar eventos acontecendo no código.
     */
    
    console.warn("Quero ver essa mensagem na tela")
    return (
        <SafeAreaView>
            <Text>Note que como warn podemos colocar informações que desejamos visualizar diretamente na tela.</Text>
        </SafeAreaView>
    )
}