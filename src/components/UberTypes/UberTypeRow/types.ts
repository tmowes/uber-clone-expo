import { ImageSourcePropType } from 'react-native'

export type UberTypeRowProps = {
  uberType: UberTypeProps
}

export type UberTypeProps = {
  id: string
  type: string
  picture: ImageSourcePropType
  price: number
  duration: number
  passengers: number
}
