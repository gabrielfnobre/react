import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
//Aqui temos a importação do componente NavigationContainer...
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./Tab";

export default props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                <Tab />
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
})