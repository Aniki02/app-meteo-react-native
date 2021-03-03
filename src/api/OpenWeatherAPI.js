const API_KEY = '69750e9dfdf9b2795a9c13d1cce813e6'

export function  getCityDataFromOpenWeatherAPIWithId(id) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?id='+id+'&appid='+API_KEY
    return fetch(url)
        .then((response) => response.json());
}
