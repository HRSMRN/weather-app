const key = 'ZExhgDtfL6dAox3Epys81gGqyodNBaKB';

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    
}

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    
}

const forecast =  async (loc) => {
    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${loc}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
}
getCity('london').then(data => {
        return getWeather(data.Key);
    }).then(data => console.log(data))
    .catch(err => console.log(err));

getCity('london').then(data => {
    return forecast(data.Key);
    }).then(data => console.log(data.DailyForecasts))
    .catch(err => console.log(err));
