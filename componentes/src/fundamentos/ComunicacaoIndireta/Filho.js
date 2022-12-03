import React from "react";
import { Text } from "react-native";

export default ({pai, letra, funcao}) => {

    //Aqui o Componente Filho faz uso da função que utiliza o set do useState e atualiza os valores, passando dados para o Componente Pai por através de mudança de Estados.
    const geraNome = (letra) => {
        const nomeCompleto = `${letra}esus`
        funcao(nomeCompleto)
    }

    geraNome(letra)

    return (
        <>
            <Text>Eu sou o Filho de {pai}.</Text>
            <Text>A primeira letra passada por Ele foi {letra}</Text>
        </>
    )
}