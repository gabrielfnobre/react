import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import TelaBotoes from "../views/TelaDrawerBotoes";

/*  DRAWER NAVIGATION:

    Uma das navegações que o React Navigation usa é a navegação em Drawer (Gaveta), esse tipo de navegação 
    consiste em fazer com que uma aba lateral fique escondida ao lado esquerdo ou direito da aplicação e possa 
    ser acessada puxando, ou apertando um botão.

                 _______________                         _______________
                |               |                       |____________   |
                |               |                       |            |  |
                |               |                       |            |  |
                |  <------ Tela Fica escondida          |            | <------ Tela foi puxada
                |              na lateral...            |            |  |        para o meio
                |               |                       |        ------>>  
                |               |                       |            |  |
                |               |                       |____________|  |
                |_______________|                       |_______________|

    Para usar o Drawer precisamos seguir um passo a passo importante:

        0º OBSERVAÇÃO: O drawer têm uma particularidade interessante, como ele trabalha com gestos feitos
            diretamente na tela do smartphone, ele vai precisar utilizar algumas bibliotecas do react para 
            trabalhar em conjunto com ele, que são:
            -  "react-native-gesture-handler" (passo a passo instalação: 
                https://reactnavigation.org/docs/drawer-navigator/#installation)
            -  "react-native-reanimated"  (passo a passo instalação: 
                https://reactnavigation.org/docs/drawer-navigator/#installation)
            -  "react-native-reanimated" (passo a passo instalação: 
                https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/)
        
        1º Criação de um Componente que terá um wrapper onde todas as telas serão comportadas;    

        2º Dentro deste componente, teremos que importar o método "createDrawerNavigator" da biblioteca 
           "drawer", conforme podemos ver nas linhas de cima. Para facilitar temos o costume de atribuir 
           esse método a uma variável entitulada "Drawer";

        3º Criar um wrapper de navegação usando o componente "Navigator" a partir da variável Drawer, é esse 
           wrapper que irá comportar as telas;

        4º Todos os Componentes deverão ser passados por através de um componente "Screen", esse componente 
           também é nativo da variável "Drawer", os componentes podem ser passados tanto por através da propriedade 
           "component", embutida no próprio componente Screen, quanto por através de wrapper, onde o componente 
           Screen será o wrapper do componente passado (Nesse caso não poderemos ter a propriedade "component" 
           declarada sobre o componente Screen);

        5º Todo esse componente, com suas devidas telas, deverá ser exportado para um componente externo que irá 
            renderizar a nossa tela de navegação Drawer. O componente externo deverá importar o componente 
            "NavigationContainer" a partir da biblioteca "@react-navigation/native". Esse componente que irá 
            comportar o nosso componente Drawer.

        Veja um exemplo detalhado abaixo...

*/

//Veja que atribuímos o método "createDrawerNavigator" à constante "Drawer"
const Drawer = createDrawerNavigator()

export default props => {
    
    return (
        /* Usamos um wrapper Navigator, esse wrapper pode receber algumas propriedades que nos ajudam a 
            renderizar as opções, temos muitas outras que podem nos ajudar com estilização e imagens de 
            icones...
        */
        <Drawer.Navigator
            //Note que escolhemos a tela B como a tela inicial...
            initialRouteName="TelaB"
        >
            {/* Não há necessidade de passar para onde a tela irá, visto que todas as telas ficam expostas na tab inferior... */}
            <Drawer.Screen name="TelaA" component={TelaA} />
            <Drawer.Screen name="TelaB" component={TelaB} />
            <Drawer.Screen name="TelaC" component={TelaC} />
            <Drawer.Screen name="TelaBotoes" component={TelaBotoes} />
        </Drawer.Navigator>
    )
}