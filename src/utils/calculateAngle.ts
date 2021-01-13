export type CoordsProps = {
  latitude: number
  longitude: number
}
const calculateAngle = (coordinates: CoordsProps[]) => {
  const startLat = coordinates[0].latitude
  const startLng = coordinates[0].longitude
  const endLat = coordinates[1].latitude
  const endLng = coordinates[1].longitude
  const dx = endLat - startLat
  const dy = endLng - startLng

  return (Math.atan2(dy, dx) * 180) / Math.PI
}

export default calculateAngle
