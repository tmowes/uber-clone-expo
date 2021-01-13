import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AnimatedBar = styled(Animated.View)`
  width: 100px;
  height: 80px;
  background: orangered;
  margin: 30px;
`

export const Title = styled.Text``
