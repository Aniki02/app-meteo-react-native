const API_KEY = '69750e9dfdf9b2795a9c13d1cce813e6'

export function getOneCallFromOpenWeatherAPI(lat, lon) {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude={part}&appid='+API_KEY
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

/*const getCurrentByName = (text) => {
        if (city.length >= 3){
            setLoading(true);
            getCurrentFromOpenWeatherAPIWithName(text, units)
                .then((json) => setData(json))
                .catch((error) => console.log('Error : ' + error))
                .finally(() => setLoading(false));
        }
    };

 */
