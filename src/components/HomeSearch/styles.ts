import styled, { css } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodWhiteLighter};
    padding: 16px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  `}
`

export const InputView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.uberInput};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
  `}
`

export const Input = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 20px;
    padding: 8px;
  `}
`

export const TimeView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodWhiteLighter};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
    padding: 8px;
    border-radius: 99px;
  `}
`
export const TimeIcon = styled(AntDesign).attrs({
  name: 'clockcircle',
  size: 18,
  color: 'black',
})`
  margin: 0 8px;
`
export const DownIcon = styled(Feather).attrs({
  name: 'chevron-down',
  size: 16,
  color: 'black',
})`
  margin: 0 8px;
`

export const TimeText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 18px;
  `}
`
export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLighter};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  `}
`
