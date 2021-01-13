import React from 'react'
import MapViewDirections from 'react-native-maps-directions'
import { useTheme } from 'styled-components/native'
import { uberCars } from '../../data'
import { GOOGLE_PLACE_KEY } from '../../secrets'

import * as S from './styles'

const RouteMap: React.FC = () => {
  const { colors } = useTheme()

  const coordinates = {
    latitude: 28.450627,
    longitude: -16.263045,
  }
  const initialRegion = {
    ...coordinates,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const fromLocation = {
    latitude: 28.45243813853591,
    longitude: -16.27276532007505,
  }

  const toLocation = {
    latitude: 28.510981551807657,
    longitude: -16.31091706142327,
  }

  return (
    <S.MapContainer initialRegion={initialRegion}>
      <S.MarkerContainer coordinate={fromLocation} />
      <S.MarkerContainer coordinate={toLocation} />
      <MapViewDirections
        apikey={GOOGLE_PLACE_KEY}
        strokeWidth={4}
        strokeColor={colors.backgroundColor}
        origin={fromLocation}
        destination={toLocation}
        optimizeWaypoints
        // onReady={result => onReady(result)}
      />
    </S.MapContainer>
  )
}

export default RouteMap
