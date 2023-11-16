import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloudy.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import sun_icon from "../Assets/sun.png";
import wind_icon from "../Assets/wind.png";


const WeatherApp = () => {

    let api_key = "9d04769f85fab3c8c9f3e20815719d01";

    const [weather_icon, set_icon] = useState(cloud_icon)

    const search = async () =>{
        const element = document.getElementsByClassName("input");
        if(element[0].value === "")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();


        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        const wind_speed = document.getElementsByClassName("wind-speed");
        const feels_like = document.getElementsByClassName("feels-temp");

        temperature[0].innerHTML = data.main.temp + "°F";
        location[0].innerHTML = data.name;
        wind_speed[0].innerHTML = "Wind Speed: " + data.wind.speed + " mp/h";
        feels_like[0].innerHTML = data.main.feels_like + "°F";

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            set_icon(sun_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            set_icon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            set_icon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            set_icon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            set_icon(rain_icon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            set_icon(rain_icon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            set_icon(snow_icon);
        }
        else{
            set_icon(sun_icon);
        }

        

    }

    return(
        <div class = "container">
            <div class = "top-bar">
                <input type = "text" className = "input" placeholder = "ex. Boston"/>
                <div class = "search-icon" onClick={()=>{search()}}>
                    <img src = {search_icon} class ="icon" alt=""/>
                </div> 
            </div>
            <div className = "weather-image">
                <img src = {weather_icon} className = "icon" alt = ""/>
            </div>
            <div className= "weather-temp">48°F</div>
            <div className='weather-location'>Troy</div>

            <div class = "bottom-container">
                <div class = "wind-data">
                    <img src = {wind_icon} class = "weather-wind" alt=""/>
                    <div className = "wind-speed">Wind Speed: 12 mp/h</div>
                </div>
                <div class = "feels-data">
                    <div class = "weather-feels">Feels Like°</div>
                    <div className = "feels-temp">46°F</div>
                </div>
                
            </div>
            

        </div>
    )
}


export default WeatherApp