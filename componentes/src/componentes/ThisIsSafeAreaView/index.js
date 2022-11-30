import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default () => {
    return (

        /* SafeAreaView 

            É um componente react-native usado para quando queremos uma "div" que não ocupe a área da StatusBar no iOS, já que as View ocupam toda a tela no iOS.
        */
        <SafeAreaView style={styles.background}>
            <Text style={styles.texts}>Um texto que não fica junto a StatusBar do iOS</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        background: {
            padding: 10,
        },
        texts: {
            color: 'red',
        },
    }
)