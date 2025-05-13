export interface PrimaryWeatherData {
    city: string,
    temp: string,
    condition: string,
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
    hi: string,
    lo: string,
    precip: string,
}

export interface HourlyWeatherData {
    time: string,
    condition: string,
    temp: string,
    precip: string,
}

export interface WeatherData {
    updated: string,
    current: CurrentWeatherData,
    daily: DailyWeatherData[],
    hourly: HourlyWeatherData[],
}

export interface APIHour {
    dt: number,
    temp: number,
    weather: { 
        main: string,
    }[],
    pop: number,
}

export interface APIDay {
    dt: number,
    temp: { 
        min: number,
        max: number,
    },
    weather: {
        main: string,
    }[],
    pop:number,
}

export interface APICurrent {
    dt: number,
    temp: number,
    feels_like: number,
    humidity: number,
    uvi: number,
    wind_speed: number,
    weather: {
        main: string,
    }[],
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