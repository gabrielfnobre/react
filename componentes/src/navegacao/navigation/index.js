import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

/*  REACT NAVIGATION:

    Como navegar de uma tela para a outra em aplicativos React-Native?
    A grande resposta é o React-Navigation uma Biblioteca React que pode ser baixada na nossa aplicação, que traz uma série de modelos para navegar 


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