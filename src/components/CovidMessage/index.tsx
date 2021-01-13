import React from 'react'
import { covidWarning } from '../../data'

import * as S from './styles'

const CovidMessage: React.FC = () => {
  const { tittle, body, action } = covidWarning
  return (
    <S.Container>
      <S.Title>{tittle}</S.Title>
      <S.Body>{body}</S.Body>
      <S.LeanMore>{action}</S.LeanMore>
    </S.Container>
  )
}

export default CovidMessage
