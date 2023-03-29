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


    imgWeather.src = getWeatherCode(weathercode);
    windElement.innerText += windspeed + " m/s";
    temperatureElement.innerText += temperature + " C";
    timeElement.innerText += time;


}
weather();

function getWeatherCode(code) {
    switch (code) {
        case 0:
            return "https://i.gifer.com/1d.gif";
        case 1, 2, 3:
            return "https://i.gifer.com/68J.gif";
        case 61, 63, 65, 66, 67:
            return "https://i.gifer.com/Cbd.gif";
        case 45, 48:
            return "https://media.giphy.com/media/RI42LtoMA5mxi/giphy.gif";	
        case 51, 53, 55:
            return "https://media.tenor.com/pg4B9jtXt4EAAAAC/snoopy-raining.gif";
        case 71, 73, 75, 77, 85, 86, 56, 57:
            return "https://media.tenor.com/tpK5Qe8O_NYAAAAC/its-snowing.gif"; 
                case 80, 81, 82, 95, 96, 99:
            return "https://i.pinimg.com/originals/dd/e5/f4/dde5f4d61ca1f8b611a5014286a1cb71.gif";


        default: "https://z3.hs-offenburg.de/fileadmin/default_upload/giphy.gif"
    }
}





