import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ({cor}) => {
    return (
        <View style={[styles.quadrado, {
            backgroundColor: cor
        }]}></View>
    )
}

const styles = StyleSheet.create({
    quadrado: {
        height: 30,
        width: 30,
    },
})