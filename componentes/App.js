import React from 'react'
import {SafeAreaView} from 'react-native'
import ThisIsText from './src/componentes/ThisIsText'

export default () => {
  return (
    <SafeAreaView>
      {/* Essa safeAreaView é somente para adicionarmos componentes */}
      <ThisIsText/>
    </SafeAreaView>
  )
}
