import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // import Link for page redirect
import { BsFillCloudsFill } from 'react-icons/bs' // import icon
import { IoMdArrowRoundBack } from 'react-icons/io' // import icon
export default function Weather() {
    const [weatherData, setWeatherData] = useState()
    console.log("weatherData", weatherData);
    useEffect(() => {
        var weather = JSON.parse(localStorage.getItem("weatherData"));
        console.log("weather", weather.windDeg);
        setWeatherData(weather); // set state
        console.log("weather", weatherData);
    }, []);
    console.log("weatherData", weatherData);
    return (
        <>
            <div className='weather-box'>
                <div className='back-link'>
                    <Link to="/"><IoMdArrowRoundBack /> back to home</Link>
                </div>
                <div className='temperature'>
                    <BsFillCloudsFill />
                    {weatherData == undefined ? 280  // check the data undefined or not
                        :
                        <p>{weatherData.windDeg}</p>
                    }
                </div>
                <div className='other-details'>
                    {weatherData == undefined ? <p>Humidity: 87%</p>
                        :
                        <p>Humidity: {weatherData.humidity}%</p>
                    }
                    {weatherData == undefined ? <p>Wind Speed: 1 mph</p>
                        :
                        <p>Wind Speed: {weatherData.windSpeed} mph</p>
                    }
                </div>
                {weatherData == undefined ? <div>Location | London</div>
                    :
                    <div>Location | {weatherData.name}</div>
                }
            </div>
        </>
    )
}
