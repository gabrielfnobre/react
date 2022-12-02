import React from 'react'
import { ComUseState, SemUseState } from './src/fundamentos/EstadosNoReact'

export default () => {
  return (
    /* Coloque seus componentes abaixo...*/
    <>
      <SemUseState inicial={100} />
      <ComUseState inicial={100} />
    </>
  )
}
