import React from 'react'

import * as C from '../../components'
import * as S from './styles'

const Home: React.FC = () => {
  return (
    <S.Container>
      <C.HomeMap />
      <C.CovidMessage />
      <C.HomeSearch />
    </S.Container>
  )
}

export default Home
