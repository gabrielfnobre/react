import React, { useState } from "react";
import { Text } from "react-native";
import Filho from "./Filho";

/*  COMUNICAÇÃO INDIRETA:

    Comunicação Indireta é um conceito que faz parte da funcionalidade do React que também é importante de ser entendido.

    Esse conceito explica como funciona a passagem de parâmetros de um Componente Filho para um Componente Pai. 
    
    
    PRIMEIRAMENTE O QUE É UM COMPONENTE PAI E UM COMPONENTE FILHO?

    Um Componente Pai é um Componente que importa um Componente, usa uma instância dele no seu código e também passa parâmetros para esse Componente Filho.
    
    Um Componente Filho é um Componente que é importado por um Componente Pai, que tem uma instância gerada em algum determinado Componente Pai e que recebe parâmetros do Componente Pai.


    POR QUE RECEBE O NOME DE COMUNICAÇÃO INDIRETA?

    É chamada assim por que essa comunicação acontece de forma escondida entre o Pai e o Filho, pois o filho não faz "import" do Componente Pai e nem gera instâncias dele. Mas ainda assim é possível que um Componente Filho passe parâmetros para um Componente Pai.


    COMO ACONTECE A COMUNICAÇÃO INDIRETA?

    Ela é feita sempre que um Componente Pai recebe um parâmetro entregue por um Componente Filho e faz uso desse parâmetro. 
    
    Para isso o Componente Pai precisa usar Hooks que recebam os dados do Componente Filho por através de Estados, para que possa renderizar esses dados. Para isso uma função "set" passada por através do Hook, deverá ser passada como parâmetro para o Componente Filho, irá usá-la e fará a atualização dos dados no Componente Pai.


    A COMUNICAÇÃO INDIRETA SEMPRE ACONTECE QUANDO:

        * É de Componente Filho para Pai;
        * É escondida e é feita por através de mudança de Estados;
        * O Componente Filho tem que receber a função "set" do Hook;
        * O Componente Pai faz uso do valor que foi atualizado no Componente Filho; 
        
    Abaixo temos um exemplo de comunicação Indireta entre Componente Pai e Filho...

 */

export default ({nome, letra}) => {

    //Note que o componente pai está usando um useState onde o valor do nome do Filho será atualizado...
    const [filho, setFilho] = useState('')
    //Uma função que usa o setFilho é passada ao Filho...
    const voltaNome = (letra) => setFilho(letra) 

    return (
        <>
            <Text>O nome do Pai é {nome}</Text>
            <Filho pai={nome} letra={letra} funcao={voltaNome} />
            {/* Note que quem faz uso do valor atualizado é o Pai... */}
            <Text>O nome devolvido pelo meu filho é {filho}</Text>
        </>
    )
}