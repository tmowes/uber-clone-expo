import styled, { css } from 'styled-components/native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { IconCircleProps } from './types'

export const Row = styled.View`
  ${({ theme: { colors } }) => css`
    padding: 8px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.foodGrayLight};
  `}
`

export const IconCircle = styled.View<IconCircleProps>`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodGrayDark};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  `}
  ${({ theme: { colors }, customType }) =>
    customType &&
    css`
      background: ${colors.uberMessage};
    `}
`

export const Icon = styled(AntDesign).attrs({
  name: 'clockcircle',
  size: 18,
  color: 'white',
})``

export const HomeIcon = styled(Entypo).attrs({
  name: 'home',
  size: 20,
  color: 'white',
})``

export const Destination = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 16px;
  `}
`
