import React from "react";
import "./WearherComponent.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { TbDroplet } from "react-icons/tb";
import { GrSun } from "react-icons/gr";
import { FcAddColumn } from "react-icons/fc";
import sunny from "../../react-weather-app-public1/icons/sunny.svg";
import night from "../../react-weather-app-public1/icons/night.svg";
import day from "../../react-weather-app-public1/icons/day.svg";
import cloudynight from "../../react-weather-app-public1/icons/cloudy-night.svg";
import cloudy from "../../react-weather-app-public1/icons/cloudy.svg";
import perfectday from "../../react-weather-app-public1/icons/perfect-day.svg";
import rain from "../../react-weather-app-public1/icons/rain.svg";
import rainnight from "../../react-weather-app-public1/icons/rain-night.svg";
import storm from "../../react-weather-app-public1/icons/storm.svg";
const WeatherIcons = {
    "01d": sunny,
    "01n": night,
    "02d": day,
    "02n": cloudynight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": perfectday,
    "04n": cloudynight,
    "09d": rain,
    "09n": rainnight,
    "10d": rain,
    "10n": rainnight,
    "11d": storm,
    "11n": storm,
  };

function WearherComponent(props) {
    
  console.log("inside weather app", props.data);
  const data = props.data;
  // const isDay = data?.weather[0].icon?.includes('d')

  return (
    <div className="weatherInfo-container">
      <div className="d-flex justify-content-around weather-logo">
        <div className="d-flex">
          <span>
            <span>
            {data.main ? Math.round(data && data.main && data.main.temp) : 0}°C
            </span>
            |
            <span style={{ textTransform: "capitalize", fontSize: "12px" }}>
              {data && data.weather && data.weather[0].description}
            </span>
          </span>
        </div>
       
        <img src={data.weather?WeatherIcons[data.weather[0].icon]:perfectday} />
      </div>
      {/* "react-weather-app-public/icons/perfect-day.svg" */}
      <p>{data.name?data?.name:"City"},{data.sys?data?.sys?.country:"country"}</p>
      <div className="wether-info-title">weather info</div>
      <div class="row m-0">
        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <GrSun />
          </h4>
          <span className="dflex-c we-c">
            {data.main ? Math.round(data && data.main && data.main.temp) : 0}°C
            <span className="wether-info-container">tempracture</span>
          </span>
        </div>

        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <BsWind />
          </h4>
          <span className="dflex-c we-c">
            {data.wind ? data?.wind?.speed : 0}m/s
            <span className="wether-info-container">Wind</span>
          </span>
        </div>
      </div>
      <div class="row m-0">
        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <BsBoxArrowInRight />
          </h4>
          <span className="dflex-c we-c">
            {data.visibility ? data?.visibility : 0}mi
            <span className="wether-info-container">Visibility</span>
          </span>
        </div>
        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <TbDroplet />
          </h4>
          <span className="dflex-c we-c">
            {data.main ? data?.main?.humidity : 0}%
            <span className="wether-info-container">Humidity</span>
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default WearherComponent;
