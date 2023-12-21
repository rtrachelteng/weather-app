import './App.css';
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import { Container } from '@mui/material';
import {useState} from "react";
import WeatherTransform from "./transforms/Weather";
import {API_KEY} from "./contants";
import {useEffect} from 'react'


function App() {
  const [weatherDetails, setWeatherDetails] = useState([]);

  useEffect(() => {
    getWeatherDetails('Singapore');
  }, [])
  async function getWeatherDetails (location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data?.cod === 200) setWeatherDetails(WeatherTransform.fetch(data));
      }).catch(error => {
      return new Error(error);
    });
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <SearchInput handleClick={getWeatherDetails}/>
        <WeatherCard weather={weatherDetails}/>
      </Container>
    </div>
  );
}

export default App;
