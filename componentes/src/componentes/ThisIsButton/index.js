import React from "react";
import { Button } from "react-native";

/* BUTTON:
    
    O Button é um componente usado para quando queremos adicionar um botão a nossa aplicação.
    
    Todo Button possuí algumas propriedades importantes:

        - title: Usada para que adicionemos um título ao botão;
        - onPress: Ela recebe uma callback que será executada quando o botão for pressionado;

    Abaixo temos o exemplo de um Button que executa um warn determinadas vezes e retorna o número de vezes que o botão foi clicado. E outro botão que executa uma callback em forma de arrow function, criada dentro da propriedade onPress.

 */

let count = 0

function mostraWarn() {
    count++
    return console.warn(`O botão foi clicado ${count} vez(es)`)
}

export function BotaoNormal() {
    return (
        <Button 
            title="Executar!"
            onPress={mostraWarn}
        />
    )
}

export function BotaoArrow() {
    return (
        <Button 
            title="Mostra Mensagem Doida"
            onPress={() => console.warn('Mensagem Doida!')}
        />
    )
}