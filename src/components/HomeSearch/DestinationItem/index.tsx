import React from 'react'

import * as S from './styles'
import { DestinationItemProps } from './types'

const DestinationItem = (props: DestinationItemProps) => {
  const { type, address } = props
  return (
    <S.Row>
      <S.IconCircle customType={type === 'home'}>
        {type === 'home' ? <S.HomeIcon /> : <S.Icon />}
      </S.IconCircle>
      <S.Destination>{address}</S.Destination>
    </S.Row>
  )
}

export default DestinationItem
