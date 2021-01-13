import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    background: ${colors.foodWhiteLight};
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodBackground};
    font-size: 32px;
  `}
`

export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    padding: 28px 16px 0;
    width: 100%;
    background: ${colors.foodWhiteLight};
  `}
`

export const Input = styled(GooglePlacesAutocomplete).attrs({
  styles: {
    textInput: {
      backgroundColor: '#E9E9E9',
      height: 48,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      marginBottom: 16,
    },
  },
})``
