export interface CurrentWeather {
    dt: Date,
    city: string,
    temp: number,
    condition: string,
    feels: number,
    humidity: number,
    wind: number,
    uv: number,
    aq: string,
}

export interface CurrentWeatherProps {
    current: CurrentWeather,
}

export interface WeatherData {
    current: CurrentWeather,
}