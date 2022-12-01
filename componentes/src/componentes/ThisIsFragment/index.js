import React, {Fragment} from "react";
import {StyleSheet, Text, View} from 'react-native'

/* FRAGMENT:

    No React não podemos colocar componentes um embaixo do outro sem eles estarem envolvidos dentro de um elemento como uma View, SafeAreaView ou o famoso "Fragment".

    O Fragment é uma forma de envolvermos os elementos sem que esse conjunto de elementos envolvidos tenha algum peso semântico, só por juntar mesmo.

    Existem 3 formas de usarmos o fragment:

*/

export function FragmentComReactFragment() {
    /* 1ª FORMA: React.Fragment

        Podemos chamar diretamente pelo componente Fragment, isso é útil quando precisamos de usar uma propriedade com o objetivo de fazer alguma coisa dentro do código.
        
        OBSERVAÇÃO: Fragment não aceita todas as propriedades, como a style por exemplo, ele só aceita algumas.
     */

    console.warn('Você pode receber algumas propriedades')
    return (
        <React.Fragment key={'react-fragment'}>
            <Text style={styles.background}>Esse é o Texto usando React.Fragment</Text>
        </React.Fragment>
    )
}

export function FragmentComFragment() {
    /* 2ª: Fragment

        Podemos importar o Fragment diretamente do React e usar somente o nome do componente. O Fragment, assim como o React.Fragment também aceita algumas propriedades, afinal estamos falando do mesmo componente.
     */

    console.warn('Você também pode receber algumas propriedades')
    return (
        <Fragment key={'fragment'}>
            <Text style={styles.backgroundFragment}>Esse é o Texto usando Fragment</Text>
        </Fragment>
    )
}

export function FragmentVazio() {
    /* 3ª: O Fragment vazio

        O Fragment vazio consiste em colocar apenas as tags vazias de abertura e fechamento. O react já entenderá que se trata de um Fragment. Porém esse estilo tem a desvantagem de não aceitar nenhuma propriedade. Mas esse é de longe o método mais usado.
     */

    console.warn('Você NÃO pode receber algumas propriedades')
    return (
        <>
            <Text style={styles.backgroundFragmentEmpty}>Esse é o Texto usando Fragment vazio</Text>
        </>
    )
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        color: 'white',
    },
    backgroundFragment: {
        backgroundColor: 'blue',
        color: 'white',
    },
    backgroundFragmentEmpty: {
        backgroundColor: 'green',
        color: 'white',
    },
})