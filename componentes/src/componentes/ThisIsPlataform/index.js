import React from "react";
import { Text, Platform } from "react-native";

/* PLATFORM:

    O componente "Platform" é usado para identificar qual é o sistema operacional de um aparelho.

    Usando esse componente junto o valor "OS", teremos como valor retornado o nome do Sistema Operacional, sendo "android" ou "iOS".

    Esse componente é muito útil para quando queremos retornar um determinado trecho de código específico dependendo o sistema operacional.

    Veja o exemplo abaixo...

*/

export default () => {

    //Note que ele retorna exatamente o nome do dispositivo...
    if(Platform.OS === 'iOS'){
        return <Text>{Platform.OS}</Text>
    } else if (Platform.OS === 'android'){
        return <Text>{Platform.OS}</Text>
    }
}