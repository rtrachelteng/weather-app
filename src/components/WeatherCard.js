import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CurrentWeather from "./CurrentWeather";


export default function WeatherCard(props) {
  return (
    <div
      className={'weather-card'}
      style={{
        visibility: props.weather ? 'visible' : 'hidden'
      }}
    >
      <Card
        sx={{ minWidth: 275, bgcolor: 'rgba(250,250,250,0.5)' }}
      >
        <CardContent>
          <div className={'weather-card__content-container'}>
            <CurrentWeather weather={props.weather}/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}