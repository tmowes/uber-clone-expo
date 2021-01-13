import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    background: ${colors.foodWhiteLight};
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLight};
    font-size: 24px;
  `}
`

export const ConfirmButton = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    background: ${colors.backgroundColor};
    padding: 8px 16px;
    margin: 16px auto;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: 94%;
  `}
`
