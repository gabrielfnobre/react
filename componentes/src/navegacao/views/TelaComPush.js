import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => {

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Tela dos Números</Text>
            <Text style={styles.textNumbs}>{props.enum}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
    },
    textNumbs: {
        color: 'black',
        fontSize: 50,
    },
})