// import React from 'react'
import React, { useEffect, useState } from 'react'
export default function Search() {
    function findWeatherData() {
        var cityname = document.getElementById("cityname").value;
        console.log("cityname",cityname);
        if (cityname !== null && cityname !== '') {
            const requestOptions1 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cityName: cityname })
            };
            fetch(`http://localhost:3002/api/checkWeather`, requestOptions1)
                .then(response => response.json())
                .then(weatherData =>{ 
                    var status = weatherData.status;
                    if(status == 404){
                        window.location.href = "http://localhost:3000/error";
                    }
                    else{
                        localStorage.setItem("weatherData",JSON.stringify(weatherData.data));
                        window.location.href = "http://localhost:3000/weather";
                        console.log(JSON.parse(weatherData.data));
                    }
                });
        }

    }
    useEffect(() => {
        findWeatherData()
      }, [findWeatherData])
    return (
        <>
            <div className='search-box'>
                <h2>Weather Forecast</h2>
                <p>Enter the location name to see the weather Details</p>
                <div className='search-input-box'>
                    <input id="cityname" type="text" placeholder='Enter City Name'/>
                    <button onClick={findWeatherData} >Enter</button>
                </div>
            </div>
        </>
    )
}
