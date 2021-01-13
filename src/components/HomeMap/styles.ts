import MapView, { Marker } from 'react-native-maps'
import styled, { css } from 'styled-components/native'

export const MapContainer = styled(MapView)`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    background: ${colors.uberMap};
    width: 100%;
    flex: 1;
  `}
`
export const MarkerContainer = styled(Marker)`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
  `}
`

export const TopCarsImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 64px;
  height: 64px;
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 32px;
  `}
`
