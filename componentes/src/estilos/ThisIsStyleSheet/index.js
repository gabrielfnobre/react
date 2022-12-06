import React from "react";
import { StyleSheet, Text } from "react-native";

/*  STYLESHEET:

    O StyleSheet é um componente do React-Native que é usado para gerar estilos na nossa aplicação.

    Para utilizá-lo temos que:

        1º - Importar o componente do próprio react-native;
        2º - Gerar o estilo usando o médoto create, onde vamos gerar objetos que irão conter o estilo da nossa aplicação;
        3º - Atribuir os objetos criados em StyleSheet por através da propriedade "style" diretamente nos componentes que vão receber aquele determinado estilo;

    Veja abaixo um exemplo de como podemos fazer isso...

 */

//Note que atribuímos todos os nossos estilos a uma constante "styles"...
const styles = StyleSheet.create({

    estilo1: {
        backgroundColor: 'red',
        color: 'white',
        padding: 10,
    },
    estilo2: {
        backgroundColor: 'blue',
    }
    
})

export default () => {
    return (
        <>
            {/* No componente atribuímos o objeto à propriedade style... */}
            <Text style={styles.estilo1}>Estilo com 1 único estilo</Text>
            {/* É possível mesclar estilos, para isso temos que colocar os estilos dentro de um array! Note que Text recebe o estilo de "estilo 1" e também recebe o estilo de "estilo 2", como "estilo 2" foi o último, ele sobrescreve o estilo anterior. */}
            <Text style={[styles.estilo1, styles.estilo2]}>Estilo com 2 estilos</Text>
        </>
    )
}