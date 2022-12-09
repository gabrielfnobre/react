import React from "react";
import { StyleSheet, Text, View } from "react-native";
import produtos from "./produtos";

/*  LISTAS USANDO MAP:

    No React temos 2 tipos de criação de lista, podemos criar listas usando o "map" e renderizando cada item por vez, ou podemos usar o componente "Flatlist" do React.

    Nesse exemplo vamos ver como criar uma lista usando map...

*/

//Note que criarmos uma função para gerar os Componentes Textuais que vão gerar cada item da lista, para isso usamos o map...
function obterProdutos(){
    return produtos.map(prod => {
        //Algo interessante a se notar no map, é que geramos uma propriedade key para cada item da lista. Fizemos isso por que o React reconhece que objetos gerados com map são listas, isso é automático do React, e para o React cada elemento de uma lista deve ter uma key única para que ele possa trabalhar com os vários elementos de uma lista. Com a key, o React consegue identificar quando um item é atualizado, quando a ordem é trocada, quando um item é deletado e etc. Isso otimiza a utilização do React.
        return <Text key={prod.id} style={styles.item}>{prod.id} - {prod.produto} tem o preço de R$ {prod.preco}</Text>
    })
}

export default () => {
    return (
        <View style={styles.background}>
            <Text style={styles.titulo}>Lista de Produtos</Text>
            {/* Aqui temos a chamada da função que renderiza todos os itens da lista para nós... */}
            {obterProdutos()}
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        marginTop: '10%',
        marginHorizontal: '15%',
    },
    titulo: {
        color: 'navy',
        fontSize: 24,
        fontWeight: 'bold',
    },
    item: {
        color: 'black',
        fontSize: 16,
    }

})