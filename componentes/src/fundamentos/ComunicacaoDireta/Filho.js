import React from "react";
import {Text} from 'react-native';

//Veja que filho não importa nenhum componente, ele na verdade só passa componentes...
export default ({nome, pai}) => {
    return (
        <Text>Eu sou filho de {pai}, meu nome é {nome}, esse nome foi dado pelo meu pai.</Text>
    )
}