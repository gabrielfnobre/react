import React from "react";
import { Button, StyleSheet, View } from "react-native";
import TextoCentral from "../componentes/TextoCentral";

/*  MÉTODOS OPENDRAWER CLOSEDRAWER E TOGGLEDRAWER DO NAVIGATION DRAWER:

    Na biblioteca drawer da react-navigation, temos alguns métodos que podem ser usados para abri um drawer
    navigation, fechá-lo e até alterná-lo.

    Vejamos alguns exemplos logo abaixo...

*/

export default props => {
    return (
        <View style={styles.wrapperFora}>
            <View style={styles.wrapperBotao}>
                <Button 
                    title="Abrir e Alternar" 
                    onPress={() => {
                        //Note que estamos usando openDrawer para abrir o drawer através de um botão...
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            //Usamos closeDrawer para fechar o drawer automáticamente depois de 3 segundos...
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                /*E agora usamos o toggleDrawer para deixar o drawer louco, alternando entre
                                    fechado e aberto de 1 em 1 segundo...*/
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