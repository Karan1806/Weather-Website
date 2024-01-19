
import "../Components/Weather.css";
import Search from "../Components/Assets/search.png";
import Cloud from "../Components/Assets/cloud.png";
import Rain from "../Components/Assets/rain.png";
import Snow from "../Components/Assets/snow.png";
import Drizzle from "../Components/Assets/drizzle.png";
import Clear from "../Components/Assets/clear.png";
import Wind from "../Components/Assets/wind.png";
import Humidity from "../Components/Assets/humidity.png";

import { useState } from "react";




function WeatherComponent() {


  const api= "24c0484e740fad3229fa86055c5d0214";
  const [wicon,Setwicon]=useState(Clear);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
  
    let url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${element[0].value}&appid=${api}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity=document.getElementsByClassName ("humidity");
    const temp=document.getElementsByClassName("temp");
    const city=document.getElementsByClassName("city");
    const wind=document.getElementsByClassName("wind");
    humidity[0].innerHTML=data.main.humidity+"%";
    temp[0].innerHTML=Math.round(data.main.temp)+"°C";
    city[0].innerHTML=data.name;
    wind[0].innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main == "Clouds"){
      Setwicon(Cloud);
  }
  else if(data.weather[0].main == "Clear"){
      Setwicon(Clear);
  }
  else if(data.weather[0].main == "Rain"){
    Setwicon(Rain);
    
  }
  else if(data.weather[0].main == "Drizzle"){
    Setwicon(Drizzle);
      
  }
  else if(data.weather[0].main == "Mist"){
    Setwicon(Snow);
     
  }
  else{
    Setwicon(Clear);
  }

 console.log(data);
  };



  return (
    <div className="container">
      <div className="search-container">

        <input type="text" className="cityInput" placeholder="Search"></input>
        <img src={Search} alt="search" className="search-icon" onClick={() => {search()}}></img>

      </div>
      <div className="clouddata">
      <img src={wicon} className="clearimage"></img> 
      <span className="temp"></span>
      <span className="city">New Delhi</span>     

      </div>
      <div className="leftdata">
      <div className="humiddata">
      <img src={Humidity} className="humidityimage"></img>
      <div className="humidity">63%<div className="humidity2">Humidity</div></div>
      </div>
      <div className="winddata">
      
      <img src={Wind} className="windimage"></img>
      <div className="wind">18km/h<div class="wind2">Wind Speed</div></div>
      </div>
      
      </div>
    </div>
  );
}

export default WeatherComponent;

