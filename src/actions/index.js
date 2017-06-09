import axios from 'axios';

const API_KEY = 'c92487ea1fcc254e3094a3344a26ec64';
// http://api.openweathermap.org/data/2.5/forecast?q=Moscow,ru&appid=c92487ea1fcc254e3094a3344a26ec64
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ru`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
