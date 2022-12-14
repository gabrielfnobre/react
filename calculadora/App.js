import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Botao from './src/componentes/Botao';
import Display from './src/componentes/Display';
import estilo from './src/estilos/centralizaTudoLayout'

const initialState = {
  //Mostra o valor a ser exibido na tela...
  displayValue: '0',
  //Mostra se o display está pronto para receber um novo número ou não...
  clearDisplay: false,
  //Mostra que operação deverá ser feita depois que o número for digitado...
  operation: '',
  //Armazena o primeiro valor de uma operação e o segundo...
  values: [0, 0],
  //Mostra onde o valor digitado deve ser armazenado, se no índice 0 ou 1 de values...
  current: 0,
}


export default () => {

  const [state, setState] = useState({...initialState})

  const addDigit = n => {

      //Essa variável será usada para limpar o display quando necessário, isso acontece só em 2 ocasiões:
      /* - Quando o valor do display for "0" ele precisa ser limpo para receber outro valor...
         - Quando o clearDisplay na variável de estado estiver "true"*/
      const clearDisplay = state.displayValue === '0' || state.clearDisplay

      //Lógica para não permitir que o ponto seja incluso 2 vezes
      if(n === '.' && !clearDisplay && state.displayValue.includes('.')){
        return
      }
      
      //A variável "currentValue" é usada para mostrar qual é o valor corrente no momento que deve ser operado.
      //Note a lógica, se o clearDisplay for "true", significa que nenhum valor está disponível para a próxima operação.
      //Agora se o clearDisplay for "false" então o valor corrente será o valor da chave "displayValue"
      const currentValue = clearDisplay ? '' : state.displayValue

      //Essa variável serve para concatenar os valores digitados que foram pegos pelo currentValue...
      const displayValue = currentValue + n

      //No paradigma funcional o react-native não aceita que peguemos uma única chave para operar e atribuir novos valores, tem que atribuir um novo objeto completamente... 
      const objectTemporary = {
        displayValue: displayValue,
        clearDisplay: false,
        operation: state.operation,
        values: state.values,
        current: state.current,
      }
      setState({...objectTemporary})

      //Essa lógica faz com que os números digitados fiquem armazenados em memória somente quando eles são terminados.
      //Note que há uma lógica onde, se o valor setado for um "." ele ainda não será mandado para a variável armazenadora que no caso é a chave "values" do state, ele só é armazenado quando os números estão completados.
      if (n !== '.') {
        //Essa constante recebe a string atribuída a chave displayValue e a transforma num float...
        const newValue = parseFloat(displayValue)
        //Essa variárivel recebe os índices da chave "values" do state...
        const values = [...state.values]

        //Aqui um valor é adicionado ao índice 0 ou 1 de values, vai depender do valor que estiver na chave current no momento...
        values[state.current] = newValue

        //Aqui queremos operar apenas sobre a chave values, mas temos que atribuir todo o objeto novamente por causa do paradigma funcional...
        const newObject = {
          displayValue: displayValue,
          clearDisplay: false,
          operation: state.operation,
          values: values,
          current: state.current,
        }
        setState({...newObject})
      }
    }

  const clearMemory = () => {
    //Note que retorna ao estado inicial...
    setState({...initialState})
  }
  

  const setOperation = operation => {
    //Essa função é responsável por setar uma operação...
    //Caso o current esteja setado no número índice de 0 do value, a operação será setada e o current vai mudar para o valor 1.
    if(state.current === 0){
      const newObject = {
          displayValue: state.displayValue,
          clearDisplay: true,
          operation: operation,
          values: state.values,
          current: 1,
      }
      setState({...newObject})
      //Se o current já for o índice 1 do value, temos que operar os valores de acordo com a operação que tiver sido passada...
    } else {
      const equals = operation === '='
      const values = [...state.values]
      //O try catch aqui serve para pegar uma operação feita com "=", como "=" operado entre dois valores iria gerar um erro, quando o erro é feito ele vai para o catch que simplemente atribuí ao índice 0 de value o valor que já existia no índice 0...
      try {
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
      } catch(e) {
        values[0] = state.values[0]
      }

      //Ao final da operação com o operador, o índice 1 do value volta o número 0, o novo valor operado é mostrado no display, o clearDisplay é setado como true, a operação recebe a operação a menos que ela seja um "=" e o current recebe o valor 0 se a operação for um igual ou 1 se não for um igual.
      values[1] = 0
      const newObject = {
        displayValue: `${values[0]}`,
        clearDisplay: !equals,
        operation: equals ? '' : operation,
        values: values,
        current: equals ? 0 : 1,
      }
      setState({...newObject})

    }
  }

  return(
    <SafeAreaView style={estilo.centralizaTudoLayout}>
      <Display valorDaTela={state.displayValue} operador={state.operation} segundoValor={state.values}/>
      <View style={styles.wrapperBotao}>
        <Botao valor='AC' botaoTriplo onClick={clearMemory}/>
        <Botao valor='/' botaoOperacao onClick={setOperation}/>
        <Botao valor='7' onClick={addDigit}/>
        <Botao valor='8' onClick={addDigit}/>
        <Botao valor='9' onClick={addDigit}/>
        <Botao valor='*' botaoOperacao onClick={setOperation}/>
        <Botao valor='4' onClick={addDigit}/>
        <Botao valor='5' onClick={addDigit}/>
        <Botao valor='6' onClick={addDigit}/>
        <Botao valor='-' botaoOperacao onClick={setOperation}/>
        <Botao valor='1' onClick={addDigit}/>
        <Botao valor='2' onClick={addDigit}/>
        <Botao valor='3' onClick={addDigit}/>
        <Botao valor='+' botaoOperacao onClick={setOperation}/>
        <Botao valor='0' botaoDuplo onClick={addDigit}/>
        <Botao valor='.' onClick={addDigit}/>
        <Botao valor='=' botaoOperacao onClick={setOperation}/>
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
