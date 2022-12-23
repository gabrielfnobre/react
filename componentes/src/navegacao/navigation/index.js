import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

/*  REACT NAVIGATION:

    React Navigation é um biblioteca criada para ser utilizada no React Native e Expo apps. A função dessa biblioteca é facilitar a criação de áreas de navegação dentro do app, para isso essa biblioteca conta com vários estilos de navegação: Stack (Telas Empilhadas), Tabs (Campo inferior ou superior com opções), Drawer (Menu Lateral) e outros.

    Para mais detalhes sobre a biblioteca e usabilidade consulte o site:
    https://reactnavigation.org/

    Essa biblioteca tem que ser baixada no nosso projeto, toda a documentação para baixar essa biblioteca tanto do react-native (versão bare) como no expo, está disponível na documentação do site e é simples de seguir.


 */

export default props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
})