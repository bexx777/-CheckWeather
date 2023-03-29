// "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
const box = document.getElementById("weatherBox");
const weathercodeElement = document.getElementById("weatherCod");
const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temp");
const windElement = document.getElementById("wind");
const timeElement = document.getElementById("time")
const imgWeather = document.getElementById("imgWeather");

async function weather() {
    let res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    let obj = await res.json();
    const { country, city, latitude, longitude } = obj;
    console.log(latitude, longitude);
    let weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
    let weatherObj = await weatherRes.json();
    const { temperature, windspeed, winddirection, weathercode, time } = weatherObj.current_weather;
    console.log(temperature, winddirection, windspeed, weathercode, time);
    cityElement.innerText = city;
    const { id, src, alt } = imgWeather;

    imgWeather.innerHTML = getWeatherCode(weathercode);
    windElement.innerText += windspeed + " m/s";
    temperatureElement.innerText += temperature + " C";
    timeElement.innerText += time;

}
weather();

function getWeatherCode(code) {
    switch (code) {
        case 61, 63, 65, 66, 67:
            return "https://i.gifer.com/Cbd.gif";
        case 1, 2, 3:
            return "https://i.gifer.com/68J.gif";
        default: return "https://i.gifer.com/1d.gif";
    }
}





