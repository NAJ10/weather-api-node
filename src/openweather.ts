import * as axios from "axios"

export interface Coord {
    lat: number,
    lon: number
}

export interface City {
    id: number,
    name: string,
    coord: Coord,
    country: string,
    population: number,
    timezone: number,
    sunrise: number
    sunset: number
}

export interface Details {
  temp: number,
  feels_like: number,
  temp_min: number, 
  temp_max: number, 
  pressure: number, 
  sea_level: number,
  grnd_level: number,
  humidity: number,
  temp_kf: number,
}

export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface Wind {
    speed: number,
    deg: number,
}

export interface Clouds {
    all: number
}

export interface Forecast {
    dt: number,
    main: Details,
    weather: Weather [],
    clouds: Clouds,
    wind: Wind
}

export interface ForecastResponse {
    cod: string,
    message: number,
    cnt: number,
    list: Forecast [],
    city: City
}
const apiKey = process.env.WEATHER_API_KEY

export function weather(city: String) : Promise<ForecastResponse> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    return axios.default.get(url).then(response => response.data)
}
