import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
//Aqui temos a importação do componente NavigationContainer...
import { NavigationContainer } from "@react-navigation/native";
import StackComPush from "./StackComPush";

export default props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Note que o NavigationContainer comporta a nossa Stack... */}
            <NavigationContainer>
                <StackComPush />
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
})