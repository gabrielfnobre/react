import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaComPush from "../views/TelaComPush";
import PassoStackComPush from "../componentes/PassoStackComPush";
import TelaInitialPush from "../views/TelaInitialPush";

/*  MÉTODO PUSH:

    No Stack podemos contar com 2 métodos para ir para uma próxima tela, podemos contar como método "navigate" e 
    o método "push". Aparentemente parecem que os 2 fazem a mesma coisa: "ir para a próxima tela", mas não, 
    existem diferenças muito importantes entre estes médotos, e essas diferenças devem ser consideradas:

        * Método navigate:
            Esse método faz com que avancemos para uma próxima tela. Porém, digamos que desejamos que ao apertar 
            um botão para a mesma tela, onde, queremos renderizar a mesma tela, porém com um resultado 
            diferente. Isso seria impossível com o "navigate", ele não chama a mesma tela!

        * Métoso push:
            O método "push", faz a mesma coisa que o "navigate", com a diferença de que ele consegue renderizar 
            a mesma tela. Isso é muito último quando queremos usar o mesmo estilo de layout, porém mostrar 
            conteúdo diferente.

    Vejamos um exemplo...

*/

const Stack = createNativeStackNavigator()


/*No exemplo abaixo temos um componente que vai chamar a mesma tela, porém, a cada chamada de tela ele mostra 
quantas telas nós avançamos. Além disso, de apertarmos no voltar, ele mostra quantas telas nós retornamos...
*/
export default props => {
    
    //Como vamos trabalhar com renderização, vamos usar hooks...
    const [num, setNum] = useState(0)
    const addNum = () => setNum(num + 1)
    const minusNum = () => setNum(num - 1)
    return (
        <Stack.Navigator initialRouteName="TelaInitialPush" screenOptions={{headerShown: false}}>
            <Stack.Screen name='TelaInitialPush'>
                {props => (
                    <PassoStackComPush {...props} avancar="TelaComNumeros" funcoes={[addNum]}>
                        <TelaInitialPush enum={num} />
                    </PassoStackComPush>
                )}
            </Stack.Screen>
            <Stack.Screen name='TelaComNumeros'>
                {/* Note aqui que estamos usando uma tela para chamar ela mesma... */}
                {props => (
                    <PassoStackComPush {...props} avancar="TelaComNumeros" voltar funcoes={[addNum, minusNum]}>
                        <TelaComPush enum={num} />
                    </PassoStackComPush>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}