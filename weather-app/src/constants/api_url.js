
const location = 'Buenos Aires,ar'
const api_key = '42cb6505fb56f3a2d5635064d0664327';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

