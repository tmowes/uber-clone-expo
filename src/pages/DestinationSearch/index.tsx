import React, { useEffect, useState } from 'react'
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete'

import * as C from '../../components'
import { GOOGLE_PLACE_KEY } from '../../secrets'
import * as S from './styles'

const DestinationSearch: React.FC = () => {
  const [originPlace, setOriginPlace] = useState(null)
  const [destPlace, setDestPlace] = useState(null)
  useEffect(() => {
    if (originPlace && destPlace) {
      console.log('Redirect to result')
    }
  }, [originPlace, destPlace])

  return (
    <S.Container>
      <S.Header style={{ elevation: 10 }}>
        <S.Input
          placeholder="From"
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetail | null = null,
          ) => {
            setOriginPlace({ data, details })
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACE_KEY,
            language: 'pt-BR',
            types: '(cities)',
          }}
          suppressDefaultStyles
        />
        <S.Input
          placeholder="Where to?"
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetail | null = null,
          ) => {
            setDestPlace({ data, details })
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACE_KEY,
            language: 'pt-BR',
            types: '(cities)',
          }}
          suppressDefaultStyles
        />
      </S.Header>
      <S.Title>DestinationSearch</S.Title>
    </S.Container>
  )
}

export default DestinationSearch
