import type { CurrentWeather } from "./types"

function Current({ dt, city, temp, condition, feels, humidity, wind, uv, aq }: CurrentWeather) {
    const hours = dt.getHours()
    const minutes = dt.getMinutes()
    return (
        <div>
            As of {`${dt.getMonth()}/${dt.getDate()}/${dt.getFullYear() % 100}`} at {hours % 12 == 0 ? 12 : hours % 12}:{minutes} {hours >= 12 ? 'PM' : 'AM'}
            <br />
            {city}
            <br />
            {temp}°
            <br />
            {condition}
            <br />
            Feels Like {feels}
            <br />
            Humidity {humidity}
            <br />
            Wind {wind}
            <br />
            UV {uv}
            <br />
            Air Quality {aq}
        </div>
    )
}

export default Current