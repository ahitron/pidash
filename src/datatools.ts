import dummyData from './dummy.json' with { type: 'json' }
import { type CurrentWeather, type WeatherData } from './types'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getData = async (): Promise<WeatherData> => {
  await sleep(500)
  const { current } = dummyData
  return {
    current: parseCurrent(current)
  }
}

const parseCurrent = (data: any): CurrentWeather => {
  const { dt, temp, feels_like: feels, weather: { main: condition }, humidity, uvi: uv, wind_speed: wind } = data
  return {
    dt: new Date(dt * 1000),
    city: 'Ramsey',
    temp,
    feels,
    condition: 'Cloudy',
    humidity,
    uv,
    wind,
    aq: 'Good'
  }
}

