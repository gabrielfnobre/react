import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

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