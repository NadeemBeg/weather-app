// axios -- for the api calling  
const axios = require("axios");
exports.checkWeather = async (req, res) => {
    console.log("req", req.body.cityName);
    var cityName = req.body.cityName;
    if (cityName == "" || cityName == null || cityName == undefined) {
        return res.json({
            status: 404,
            message: "City not found",
            error: err
        })
    }
    console.log("cityName", cityName);
    // use third party api 
    var api = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3a20d3800e1540e8a3f6fb331e91f796";
    var getData = axios.get(api);
    await getData.then((info) => {
        var detailes = info["data"];
        console.log("detailes",detailes);
        return res.json({
            status: 200,
            data: {
                name: detailes.name,
                country: detailes.sys.country,
                weatherTimezone: new Date(detailes.dt * 1000 - (detailes.timezone * 1000)),
                weatherTemp: detailes.main.temp,
                weatherPressure: detailes.main.pressure,
                weatherIcon : `http://openweathermap.org/img/wn/${detailes.weather[0].icon}@2x.png`,
                // weatherDescription : detailes.weather[0].description,
                humidity: detailes.main.humidity,
                clouds: detailes.clouds.all,
                visibility: detailes.visibility,
                main: detailes.weather[0].main,
                weatherFahrenheit: ((detailes.main.temp * 9 / 5) + 32),
                windSpeed: detailes.wind.speed,
                windDeg: detailes.wind.deg
            }
        });
    }).catch(err => {
        return res.json({
            status: 404,
            message: "City not found",
            error: err
        })
    })
}
