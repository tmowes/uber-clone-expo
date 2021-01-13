import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    background: ${colors.foodWhiteLight};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.foodGrayLight};
  `}
`

export const Type = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 20px;
    font-weight: bold;
  `}
`
export const Price = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 18px;
  `}
`

export const BottomText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
    font-size: 13px;
    align-self: flex-end;
  `}
`

export const UberImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 56px;
  height: 56px;
`

export const Left = styled.View`
  ${({ theme: { colors } }) => css`
    align-items: center;
    margin-right: 8px;
    background: ${colors.foodWhiteLight};
    border-radius: 99px;
    overflow: hidden;
  `}
`

export const Center = styled.View`
  flex: 1;
  align-items: center;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 2px 0;
`

export const PassengersIcon = styled(FontAwesome5).attrs({
  name: 'users',
  size: 16,
})`
  margin: 0 8px;
`

export const PriceTagIcon = styled(Ionicons).attrs({
  name: 'pricetag',
  size: 18,
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.uberTag}
    margin-right: 4px;
  `}
`

export const Passengers = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 14px;
  `}
`

export const Right = styled.View``
