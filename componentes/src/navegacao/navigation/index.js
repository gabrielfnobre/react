//Note que é necessária a importação da biblioteca "react-native-gesture-handler"
import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
//Aqui temos a importação do componente NavigationContainer...
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./Drawer";

export default props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
})