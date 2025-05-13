import dummyData from './dummy.json' with { type: 'json' }
import { type APICurrent, type APIData, type APIDay, type APIHour, type CurrentWeatherData, type DailyWeatherData, type HourlyWeatherData, type WeatherData } from './types'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getData = async (numItems: number): Promise<WeatherData> => {
  await sleep(500)
  const data = dummyData as APIData
  return parseData(data, numItems)
}

const parseData = (data: APIData, numItems: number): WeatherData => {
  const { current: { dt }, current, daily, hourly } = data
  return {
    updated: epochToUpdated(dt),
    current: parseCurrent(current),
    daily: parseDaily(daily, numItems),
    hourly: parseHourly(hourly, numItems),
  }
}

const parseHourly = (hourly: APIHour[], numItems: number): HourlyWeatherData[] => {
  return hourly.slice(0, numItems).map((hour) => {
    const { dt, temp, weather, pop } = hour
    const { main: condition, icon } = weather[0]
    return {
      time: epochToHour(dt),
      condition,
      icon: iconToURL(icon),
      temp: kToFDeg(temp),
      precip: decToPercent(pop),
    }
  })
}

const parseDaily = (daily: APIDay[], numItems: number): DailyWeatherData[] => {
  return daily.slice(0, numItems).map((day, idx) => {
    const { dt, temp: { min, max }, weather, pop } = day
    const { main: condition, icon } = weather[0]
    return {
      name: idx == 0 ? 'today' : idx == 1 ? 'tomorrow' : epochToDayOfWeek(dt),
      condition,
      icon: iconToURL(icon),
      hi: kToFDeg(max),
      lo: kToFDeg(min),
      precip: decToPercent(pop),
    }
  })
}

const parseCurrent = (current: APICurrent): CurrentWeatherData => {
  const {
    temp,
    feels_like: feel,
    humidity,
    uvi: uv,
    wind_speed: wind,
    weather,
  } = current
  const { main: condition, icon } = weather[0]
  return {
    primary: {
      city: 'Ramsey',
      temp: kToFDeg(temp),
      condition,
      icon: iconToURL(icon),
    },
    stats: [
      { title: 'feels like', value: kToFDeg(feel) },
      { title: 'humidity', value: `${humidity}%` },
      { title: 'wind', value: `${wind} mph` },
      { title: 'uv index', value: uv.toFixed(1) },
      { title: 'air quality', value: 'good' },
    ],
  }
}

const kToFDeg = (k: number): string => `${((k - 273.15) * 9 / 5 + 32).toFixed(0)}°`

const epochToDayOfWeek = (epoch: number): string => ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][new Date(epoch * 1000).getDay()]

const epochToHour = (epoch: number): string => {
  const hour = new Date(epoch * 1000).getHours()
  return `${(hour % 12 == 0 ? 12 : hour % 12)} ${hour >= 12 ? 'P' : 'A'}M`
}

const epochToUpdated = (epoch: number): string => {
  const date = new Date(epoch * 1000)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `Last updated: ${date.getMonth()}/${date.getDate()}/${date.getFullYear() % 100} at ${hours % 12 == 0 ? 12 : hours % 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`
}

const decToPercent = (dec: number) => `${(100 * dec).toFixed(0)}%`

const iconToURL = (icon: string) => `https://openweathermap.org/img/wn/${icon}@2x.png`