import React from 'react'
import Familia from './src/componentes/propsPontoChildren/Familia'
import Filhos from './src/componentes/propsPontoChildren/Filhos'

const familia1 = "Silva"
const familia2 = "Gusmão"

export default () => {
  return (
    /* Coloque seus componentes abaixo...*/
    <>
      {/* Neste caso App.js faz o papel de componente Mor */}
      <Familia familia={familia1}>
        {/* Note que os componentes Fihos estão sendo passados como conteúdo... */}
        <Filhos nome="Isadora" familia={familia1} />
        <Filhos nome="Felipe" familia={familia1} />
        <Filhos nome="Adriano" familia={familia1} />
      </Familia>
      <Familia familia={familia2}>
        <Filhos nome="Anabela" familia={familia2} />
        <Filhos nome="Raique" familia={familia2} />
        <Filhos nome="Janderson" familia={familia2} />
      </Familia>
    </>
  )
}
