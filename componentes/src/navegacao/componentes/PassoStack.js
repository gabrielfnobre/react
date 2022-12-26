import React from "react";
import { View, StyleSheet, Button } from "react-native";


export default props => {

    //Note que mesmo aqui estamos usando os métodos "navigate" e "goBack" esses métodos são do componente Stack que retirou do método "createNativeStackNavigator", só conseguimos utilizar esses métodos aqui por que eles foram passados via "props" lá no componente Stack. Precisa ser assim para que o React Native entenda que esse componente e as suas Telas estão referenciando ao mesmo menu Stack.
    
    //O método navigate indica para que tela devemos ir...
    const avancar = tela => props.navigation.navigate(tela)

    //O método goBack indica que devemos voltar para a tela de onde viemos...
    const voltar = () => props.navigation.goBack()
    
    return (
        <View style={styles.flexInteiro}>
            <View>
                {/* Note que a função principal desse componente é incluir ou não botões de "avançar" e "voltar" dependendo do que for passado como parâmetro. */}
                {props.voltar ? <Button title="Voltar" onPress={voltar} /> : false}
                {props.avancar ? <Button title="Avançar" onPress={() => avancar(props.avancar)} /> : false}
            </View>
            <View style={styles.flexInteiro}>
                {/* //Não se esqueça que "props.children" pode renderizar tudo oque estiver dentro de um componente pai, no caso, onde quer que coloquemos o componente "PassoStack" e lá nós coloquemos qualquer coisa dentro dele por através de um wrapper, essas coisas serão renderizadas dentro dessa View. */}
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexInteiro: {
        flex: 1,
    },
})