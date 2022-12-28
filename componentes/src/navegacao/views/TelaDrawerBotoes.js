import React from "react";
import { Button, StyleSheet, View } from "react-native";
import TextoCentral from "../componentes/TextoCentral";

export default props => {
    return (
        <View style={styles.wrapperFora}>
            <View style={styles.wrapperBotao}>
                <Button 
                    title="Abrir e Alternar" 
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 3000)
                    }}
                />
            </View>
            <View style={styles.wrapperFora}>
                <TextoCentral children={'TelaBotoes'} corFundo="blue" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperBotao: {
        flexDirection: 'row',
        justifyContent: 'flex-end',       
    },
    wrapperFora: {
        flex: 1,
    },
})