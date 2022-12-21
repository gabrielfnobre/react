import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
})