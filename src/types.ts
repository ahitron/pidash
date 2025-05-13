export interface PrimaryWeatherData {
    city: string,
    temp: string,
    condition: string,
    icon: string,
}

export interface CurrentWeatherStat {
    title: string,
    value: string,
}

export interface CurrentWeatherData {
    primary: PrimaryWeatherData,
    stats: CurrentWeatherStat[],
}

export interface DailyWeatherData {
    name: string,
    condition: string,
    icon: string,
    hi: string,
    lo: string,
    precip: string,
}

export interface HourlyWeatherData {
    time: string,
    condition: string,
    icon: string,
    temp: string,
    precip: string,
}

export interface WeatherData {
    updated: string,
    current: CurrentWeatherData,
    daily: DailyWeatherData[],
    hourly: HourlyWeatherData[],
}

export interface APIWeather {
    main: string,
    icon: string,
}

export interface APIHour {
    dt: number,
    temp: number,
    weather: APIWeather[],
    pop: number,
}

export interface APIDay {
    dt: number,
    temp: { 
        min: number,
        max: number,
    },
    weather: APIWeather[],
    pop:number,
}

export interface APICurrent {
    dt: number,
    temp: number,
    feels_like: number,
    humidity: number,
    uvi: number,
    wind_speed: number,
    weather: APIWeather[],
  }

export interface APIData {
    current: APICurrent,
    daily: APIDay[],
    hourly: APIHour[],
}

export interface CurrentProps {
    updated: string,
    current: CurrentWeatherData,
}

export interface PrimaryProps {
    city: string,
    temp: string,
    condition: string,
    icon: string,
}

export interface StatProps {
    title: string,
    value: string,
}

export interface HourlyProps {
    hours: HourlyWeatherData[],
}

export interface DailyProps {
    days: DailyWeatherData[],
}