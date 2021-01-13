import React from 'react'

import UberTypeRow from './UberTypeRow'

import * as S from './styles'
import { uberTypes } from '../../data'

const UberTypes: React.FC = () => {
  return (
    <S.Container>
      {uberTypes.map(uberType => (
        <UberTypeRow key={uberType.id} uberType={uberType} />
      ))}
      <S.Title>UberTypes</S.Title>
      <S.ConfirmButton>
        <S.Title>Confirm Uber</S.Title>
      </S.ConfirmButton>
    </S.Container>
  )
}

export default UberTypes
