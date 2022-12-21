import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => {

    const corFundo = props.corFundo || "#000"
    const corTexto = props.corTexto || "#fff"

    return (
        <View style={[styles.view, {backgroundColor: corFundo}]}>
            <Text style={[styles.text, {color: corTexto}]}>
                {props.children}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
    },
    view:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})