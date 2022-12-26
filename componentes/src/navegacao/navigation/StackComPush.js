import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaComPush from "../views/TelaComPush";
import PassoStackComPush from "../componentes/PassoStackComPush";
import TelaInitialPush from "../views/TelaInitialPush";

const Stack = createNativeStackNavigator()

export default props => {
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
                {props => (
                    <PassoStackComPush {...props} avancar="TelaComNumeros" voltar funcoes={[addNum, minusNum]}>
                        <TelaComPush enum={num} />
                    </PassoStackComPush>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}