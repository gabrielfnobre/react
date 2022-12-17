import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Botao from './src/componentes/Botao';
import Display from './src/componentes/Display';
import estilo from './src/estilos/centralizaTudoLayout'

export default () => {

  const [num, setNum] = useState(0)

  const addDigit = () => {
    setNum('Eureka!!!!')
  }

  return(
    <SafeAreaView style={estilo.centralizaTudoLayout}>
      <Display valorDaTela={num} />
      <View style={styles.wrapperBotao}>
        <Botao valor='AC' botaoTriplo onClick={addDigit}/>
        <Botao valor='/' botaoOperacao/>
        <Botao valor='7' />
        <Botao valor='8' />
        <Botao valor='9' />
        <Botao valor='*' botaoOperacao/>
        <Botao valor='4' />
        <Botao valor='5' />
        <Botao valor='6' />
        <Botao valor='-' botaoOperacao/>
        <Botao valor='1' />
        <Botao valor='2' />
        <Botao valor='3' />
        <Botao valor='+' botaoOperacao/>
        <Botao valor='0' botaoDuplo />
        <Botao valor='.' />
        <Botao valor='=' botaoOperacao/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  wrapperBotao: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

})
