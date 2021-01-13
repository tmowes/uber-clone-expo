import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.uberMessage};
    padding: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
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

export const Body = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${`${colors.foodWhiteIsh}c0`};
    font-size: 16px;
    margin-bottom: 8px;
  `}
`

export const LeanMore = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteIsh};
    font-size: 16px;
    font-weight: bold;
  `}
`
