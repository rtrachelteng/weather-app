import './App.css';
import {useState, useEffect} from "react";
import { Container } from '@mui/material';
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import HistoryCard from "./components/HistoryCard";
import WeatherTransform from "./transforms/Weather";
import {API_KEY} from "./contants";

function App() {

  const [weatherDetails, setWeatherDetails] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  // Get Singapore weather as default value
  useEffect(()=>{
    getWeatherDetails('Singapore', false);  // To indicate that the loading is complete
  }, [])

  // Make API call to OpenWeatherAPI and set state
  async function getWeatherDetails(location, store = true) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`
    ).then(resp => resp.json());

    if (response.cod === 200) {
      const result = WeatherTransform.fetch(response);
      setWeatherDetails(result);
      // To append explicitly searched weather in search history list
      if (store) setSearchHistory(prevState => {
        const id = prevState.length + 1;
        return [Object.assign(result, { id, }), ...prevState]
      });
      return true;
    } else return false;
  }

  // Delete search record by id
  function deleteSearchRecord(id) {
    setSearchHistory(prevState => prevState.filter((obj) => obj.id !== id));
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <SearchInput handleClick={getWeatherDetails}/>
        <WeatherCard weather={weatherDetails}/>
        <HistoryCard
          historyList={searchHistory}
          handleSearch={getWeatherDetails}
          handleDelete={deleteSearchRecord}
        />
      </Container>
    </div>
  );
}

export default App;
