import axios from "axios";

const key = "c87eed3b62ba3e0fb9ab356c0976b931";
const address = "https://api.openweathermap.org/data/2.5/weather?";
const addressGeo = "https://api.openweathermap.org/data/2.5/weather?" ;

const API = axios.create({ baseURL: address });

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=${keyApi}
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

export const getWeatherByCity = (city) =>
  API.get(`${address}q=${city}&appid=${key}`);

export const getByCoordinate = (lat, lon) =>
  API.get(`${addressGeo}lat=${lat}&lon=${lon}&appid=${key}`);
