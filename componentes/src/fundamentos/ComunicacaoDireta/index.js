import React from "react";
import {Text} from 'react-native';
import Filho from "./Filho";

/*  COMUNICAÇÃO DIRETA:

    Comunicação Direta é um conceito que faz parte da funcionalidade do React que também é importante de ser entendido.

    Esse conceito explica como funciona uma comunicação de ligação e passagem de parâmetros entre de um Componente Pai para um Componente Filho. 
    
    
    PRIMEIRAMENTE O QUE É UM COMPONENTE PAI E UM COMPONENTE FILHO?

    Um Componente Pai é um Componente que importa um Componente, usa uma instância dele no seu código e também passa parâmetros para esse Componente Filho.
    
    Um Componente Filho é um Componente que é importado por um Componente Pai, que tem uma instância gerada em algum determinado Componente Pai e que recebe parâmetros do Componente Pai.


    POR QUE RECEBE O NOME DE COMUNICAÇÃO DIRETA?

    Quando falamos de Comunicação Direta estamos nos referindo a Comunicação que acontece de um Componente Pai para um Componente Filho. Ela é direta por que ela acontece de forma explícita entre o Pai e o Filho, o "import" não deixa dúvidas de que a comunicação está acontecendo e a passagem de parâmetros é feita também de forma explícita, fica óbvio que ela está acontecendo.


    A COMUNICAÇÃO DIRETA SEMPRE ACONTECE QUANDO:

        * É de Componente Pai para Filho;
        * É explícita por através do import e da passagem de parâmetros;
        
    Abaixo temos um exemplo de comunicação direta entre elemento Pai e Filho...

*/

//ComunicacaoDireta é um elemento Pai, por que ele importa Filho, gera uma instância dele e passa parâmetros para ele...
export default ({pai, filho}) => {
    return (
        <>
            <Text>Eu sou o Pai, meu nome é {pai}. Meu filho vai se apresentar...</Text>
            <Filho nome={filho} pai={pai} />
        </>
    )
}