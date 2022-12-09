import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import produtos from "./produtos";

/*  FLATLIST:

    No React temos 2 tipos de criação de lista, podemos criar listas usando o "map" e renderizando cada item por vez, ou podemos usar o componente "FlatList" do React.

    Nesse exemplo vamos ver como criar uma lista usando FlatList, a forma mais recomendada de gerar uma lista...

*/

//Vamos ter abaixo uma lista de produtos gerada a partir de um array de produtos que importamos...
export default () => {
    return (
        <View style={styles.background}>
            <Text style={styles.titulo}>Lista de Produtos FlatList</Text>
            {/* Note que é apenas um único componente que vai ser usado para gerar a lista... */}
            <FlatList 
                // Veja as propriedades...
                // data vai receber o array ou objeto com os produtos...
                data={produtos}
                // keyExtractor é usado para gerar as keys, ele recebe uma callback que automáticamente irá puxar os valores passados em data...
                keyExtractor={item => `${item.id}`}
                //rederItem é usado para gerar os itens da lista, como se fosse um map.
                //Note que ele tem algumas particularidades, ele tem que receber uma callback onde o parâmetro da callback obrigatoriamente deve ser uma chave item, TEM QUE TER ESSE NOME: item! 
                //Podemos dar a item um nome do nosso desejo atribuindo um nome qualquer, como fizemos com "produto". E com o parâmetro "item" ou "produto", podemos puxar os valores de cada iteração do array ou objeto.
                //OBS: geralmente não colocamos a callback aqui, nós extraimos ela e só refenciamos aqui dentro, mas como estamos exemplicando, fica melhor mostrar assim...
                renderItem={({item: produto}) => {
                    return <Text style={styles.item}>{produto.id} - {produto.produto} tem o preço de R$ {produto.preco}</Text>
                }}
            />
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