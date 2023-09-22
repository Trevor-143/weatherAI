type props ={
    params: {
        city: string,
        lat: string,
        long: string
    }
}

export default function WeatherPage({params: { city, lat, long }}: props) {
  return (
    <div>WeatherPage from { city } with lat { lat } and long { long } </div>
  )
}
