import React, { Component } from "react";
import "./App.css";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "",
      temperature: "",
      icon: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&APPID=143cc3e71f52aefc4fc09113d65a2013`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          weather: responseData.weather[0].main,
          temperature: responseData.main.temp,
          icon:
            "http://openweathermap.org/img/w/" +
            responseData.weather[0].icon +
            ".png"
        });
      });
  }

  render() {
    return (
      <div className="box">
        <div>Weather: {this.state.weather}</div>
        <div>Temperature: {this.state.temperature}</div>
        <div>
          <img src={this.state.icon} />
        </div>
      </div>
    );
  }
}

export default Weather;
