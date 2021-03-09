const API_KEY = '69750e9dfdf9b2795a9c13d1cce813e6'

export function getOneCallFromOpenWeatherAPI(lat, lon, units) {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}
export function  getCurrentFromOpenWeatherAPIWithId(id, units) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?id='+id+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}

export function  getCurrentFromOpenWeatherAPIWithName(name, units) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}

export function  getCurrentFromOpenWeatherAPIWithLatLon(lat, lon, units) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}

export function  getHourlyFromOpenWeatherAPIWithId(id, units) {
    const url = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?id='+id+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}

export function  getHourlyFromOpenWeatherAPIWithName(name, units) {
    const url = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q='+name+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}

export function  getDailyFromOpenWeatherAPIWithId(id, units) {
    const url = 'https://pro.openweathermap.org/data/2.5/forecast/daily?id='+id+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}

export function  getDailyFromOpenWeatherAPIWithName(name, units) {
    const url = 'https://pro.openweathermap.org/data/2.5/forecast/daily?q='+name+'&units='+units+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}
