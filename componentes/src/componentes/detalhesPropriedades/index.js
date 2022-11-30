import React from "react";
import { SafeAreaView, Text } from "react-native";

/* PROPRIEDADES SÃO SOMENTE LEITURA:

    Cuidado propriedades são somente leitura, elas não guardam valores fixos quando chegam aos componentes, e se você mexer nelas diretamente, elas vão mudar o valor.

    É sempre mais seguro criar uma variável para que o valor recebido possa ser trabalhado, do que tentar manipular a propriedade diretamente.

 */

export default (props) => {
    numeroTrocado = props.numero //Veja que não guarda valor na memória...
    numeroTrocado = 10 //Trocamos esse valor e só vai referenciar a esta variável...
    props.numero = props.numero + 10 //Porém se trocarmos o valor da propriedade diretamente, ela vai mudar o valor da propriedade.
    return(
        <SafeAreaView>
            <Text>
                Esse é o número original recebido: {props.numero}
            </Text>
            <Text>
                Esse é o número que tentamos trocar por 10: {numeroTrocado}
            </Text>
        </SafeAreaView>
    )
}