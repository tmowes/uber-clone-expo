import React from 'react'
import { uberCars } from '../../data'

import * as S from './styles'

const HomeMap: React.FC = () => {
  const coordinates = {
    latitude: 28.3915637,
    longitude: -16.6291304,
  }
  const initialRegion = {
    ...coordinates,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <S.MapContainer initialRegion={initialRegion}>
      {uberCars.map(({ id, picture, coordinate }) => (
        <S.MarkerContainer
          key={id}
          coordinate={coordinate}
          rotation={Math.random() * 360}
        >
          <S.TopCarsImage source={picture} />
        </S.MarkerContainer>
      ))}
    </S.MapContainer>
  )
}

export default HomeMap
