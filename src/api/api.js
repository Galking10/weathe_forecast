import axios from "axios";

const key = "2ace31913150cbff24fcf647f8dd9588";
const address = "https://api.openweathermap.org/data/2.5/weather?";

const API = axios.create({ baseURL: address });

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=${keyApi}

export const getWeatherByCity = (city) =>
  API.get(`${address}q=${city}&appid=${key}`);

export const getByCoordinate = (lat, lon) =>
  API.get(`${address}?access_key=${key}&query=${lat},${lon}`);
