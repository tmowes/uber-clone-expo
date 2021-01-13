import React, { useMemo } from 'react'

import * as S from './styles'
import { UberTypeRowProps } from './types'

const UberTypeRow = ({ uberType }: UberTypeRowProps) => {
  const { picture, type, price, duration, passengers } = uberType

  const formattedPrice = useMemo(() => {
    return `est. $${price.toFixed(0)}`
  }, [price])

  const formattedPriceRange = useMemo(() => {
    const min = price - (price % 5)
    const max = min + 5
    return `$${min.toFixed(0)}-$${max.toFixed(0)}`
  }, [price])

  const formattedDuration = useMemo(() => {
    const min = 60 - duration
    return `08:${min.toFixed(0)} am`
  }, [duration])

  return (
    <S.Container>
      <S.Left>
        <S.UberImage source={picture} />
      </S.Left>
      <S.Center>
        <S.Row>
          <S.Type>{type}</S.Type>
          <S.PassengersIcon />
          <S.Passengers>{passengers}</S.Passengers>
        </S.Row>
        <S.Row>
          <S.BottomText>{formattedDuration}</S.BottomText>
        </S.Row>
      </S.Center>
      <S.Right>
        <S.Row>
          <S.PriceTagIcon />
          <S.Price>{formattedPrice}</S.Price>
        </S.Row>
        <S.BottomText>{formattedPriceRange}</S.BottomText>
      </S.Right>
    </S.Container>
  )
}

export default UberTypeRow
