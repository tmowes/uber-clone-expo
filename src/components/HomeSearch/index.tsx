import React from 'react'
import DestinationItem from './DestinationItem'

import * as S from './styles'

const HomeSearch: React.FC = () => {
  return (
    <S.Container>
      <S.InputView>
        <S.Input>Where to?</S.Input>
        <S.TimeView>
          <S.TimeIcon />
          <S.TimeText>Now</S.TimeText>
          <S.DownIcon />
        </S.TimeView>
      </S.InputView>
      <DestinationItem address="Chapecó St." />
      <DestinationItem address="Home" type="home" />
    </S.Container>
  )
}

export default HomeSearch
