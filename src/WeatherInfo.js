import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
            <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={weatherData.date} /></li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
                <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
              <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">℃</span>
              </div>
            </div>
          </div>
        <div className="col-6">
            <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}</li>
            </ul>
        </div>
    </div>
    </div>
    );
}