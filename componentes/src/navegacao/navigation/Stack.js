import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../componentes/PassoStack";

/*  STACK:

    Uma das navegações que o React Navigation usa é a navegação em Stack, esse tipo de navegação consiste em fazer com que o aplicativo navegue entre telas como se elas estivessem empilhadas. Mas mais legal é que elas não precisam necessariamente estarem empilhadas de uma determinada forma para que possamos ir para uma determinada tela ou outra. Podemos escolher para que tela queremos navegar.
                          ________
                         /       /  -----> Tela 1
                        /       /___  
                       /_______/   / -----> Tela 2
                          /       /___    
                         /_______/   / 
                            /       / ------> Tela 3
                           /_______/

    Para usar o Stack precisamos seguir um passo a passo importante:
        
        1º Criação de um Componente que terá um wrapper onde todas as telas serão comportadas;    

        2º Dentro deste componente, teremos que importar a função "createNativeStackNavigator" da biblioteca 
           "native-stack", conforme podemos checkar mais acima. Para facilitar temos o costume de atribuir essa 
           função a uma variável entitulada Stack;

        3º Criar um wrapper de navegação usando o componente "Navigator" a partir da variável Stack, é esse 
           wrapper que irá comportar as telas;

        4º Todos os Componentes deverão ser passados por através de um componente "Screen", esse componente 
           também é nativo da variável "Stack", os componentes podem ser passados tanto por através de propriedade quanto por através de wrapper. Todas as telas deverão ficar dentro do componente "Screen";

        5º 

*/

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