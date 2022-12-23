import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../componentes/PassoStack";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
            {/* Eu poderia colocar dentro do componente "Stack.Screen" a propriedade "component" com o nome do componente que eu quero gerar, mas como aqui nós queremos envolver esse componente dentro de outro componente e aproveitar as propriedades internas de cada um, geramos um wrapper em volta do "Stack.Screen" */}
            <Stack.Screen 
                name='TelaA'
                // component={TelaA} #OBS: não é possível fazer um wrapper e um component juntos!!!
                options={{title: 'Info'}}
                >
                {/* Veja que detalhe importante logo abaixo:
                    Note que invés de envolver o corpo de arrow function com chaves, nós a envolvemos com parênteses, isso faz com que a arrow function retorne uma expressão literal (uma expressão vai ser lida instântaneamente pelo código) em vez de uma função de corpo comum que precisará de ser invocada.
                    E por que usamos uma função aqui invés de chamar o PassoStack diretamente?
                    Por que precisamos das propriedades de navegação que o props vai receber a partir do elemento pai, que no caso é o "Stack.Navigation" que está neste mesmo arquivo. Pois caso você olhe no arquivo do "PassoStack" vai perceber que ele precisa usar o método "navigate" para indicar para onde a Tela A vai, por através do botão "Avançar". Esse método só pode ser alcançado a partir desse arquivo em que estamos no momento.
                */}
                {props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA />
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name='TelaB'>
                {props => (
                    <PassoStack {...props} avancar="TelaC" voltar>
                        <TelaB />
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name='TelaC' component={TelaC} />
        </Stack.Navigator>
    )
}