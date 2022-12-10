import React, {useState} from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

/*  TEXTINPUT:

    O TextInput é para o React o que o input é para o HTML.
    Com ele podemos adicionar um campo para recebimento de valores textuais.

    Temos que ficar atentos pois o TextInput é um Componente controlado, por isso para que possamos realmente receber valores e gerar alterações reais, temos que usar Controle de Estados.

    Veja como usar...

*/

//Abaixo temos um input que ao receber um valor irá atualizar a frase que há acima dele, chamamos isso de Componente Controlado, pois ele gera uma mudança na interface gráfica...
export default () => {

    const [nome, setNome] = useState('')

    return (
        <View>
            <Text style={styles.texto}>{nome}</Text>
            {/* Aqui temos um exemplo de TextInput na prática... */}
            <TextInput style={styles.input}
                //Podemos usar um placeholder para gerar em texto com dica...
                placeholder="Digite um texto e veja o texto de cima mudar..."
                //No value iremos receber o valor que será colocado no input, note que a variável colocada aqui é uma variável gerada usando useState, portanto, a medida que formos digitando ou apagando a variável tem o seu valor atualizado.
                value={nome}
                //Essa propriedade é essencial para pegar o valor e fazer a mudança de estado, note que ela recebe como parâmetro uma callback, onde chamamos o set do useState...
                onChangeText={palavra => setNome(palavra)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: 'navy',
        fontSize: 32,
    },
    input: {
        borderWidth: 1,
        borderColor: 'navy',
        borderStyle: 'solid',
        fontSize: 24,
        margin: 10,
    }
})