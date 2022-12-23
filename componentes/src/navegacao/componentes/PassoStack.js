import React from "react";
import { View, StyleSheet, Button } from "react-native";


export default props => {

    const avancar = tela => props.navigation.navigate(tela)
    const voltar = () => props.navigation.goBack()
    
    return (
        <View style={styles.flexInteiro}>
            <View>
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