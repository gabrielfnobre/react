import React from "react";
import { SafeAreaView, View } from "react-native";

/*  ESTILOS INLINE:

    No React-Native, assim como no HTML, temos 3 formas de atribuir estilos a um elemento:

        # Inline - por através da propriedade style
        # Interno - por através do componente StyleSheet
        # Externo - por através de importação com StyleSheet

    Aqui nessa aula vamos ver como fazer a formatação de estilos Inline:

*/

//Abaixo temos uma SafeAreaView que contém uma View quadrada, note nos estilos que a SafeAreaView centraliza as os elemento no meio da tela, enquanto os estilos aplicados a View a transformam num quadrado preto...
export default () => {
    return(
        //Veja que para atribuir estilos inline usamos um objeto que gera os estilos usando as propriedades CSS diretamente...
        <SafeAreaView style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        }}>
            <View style={{
                backgroundColor: 'black',
                height: 20,
                width: 20,
            }} 
            />
        </SafeAreaView>
    )
}