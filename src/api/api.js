const apiKey = '12d7a8b97b9f3cc7ea32bcb7b035675d';
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const getWeather = async(city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res)=> res.json())
    .then((json)=>{
        console.log(json);
        return json;
    })
}

export default getWeather;



