import React from 'react'
import { Button } from 'react-native'
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'

import * as S from './styles'

const Example: React.FC = () => {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const style = useAnimatedStyle(() => ({
    width: withTiming(randomWidth.value, config),
  }))

  const handleAnimatedValue = () => {
    randomWidth.value = Math.random() * 350
  }

  return (
    <S.Container>
      <S.AnimatedBar style={style} />
      <Button title="toggle" onPress={handleAnimatedValue} />
    </S.Container>
  )
}

export default Example
