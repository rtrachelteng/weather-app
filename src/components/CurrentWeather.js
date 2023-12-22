import {Grid, Typography, Box} from "@mui/material";
import sun from '../assets/sun.png';
import cloud from '../assets/cloud.png';
import CurrentWeatherDetails from "./CurrentWeatherDetails";

export default function CurrentWeather(props) {
  const { weather } = props;

  return (
    <div className={'current-weather'}>
      <Grid container>
        <Grid item xs={8}>
          <Typography
            variant="h6"
            color='primary.main'
          >
            {weather?.name}, {weather?.country}
          </Typography>
          <Typography
            variant="h2"
            color='primary.main'
            sx={{ fontWeight: 'bold' }}
          >
            {weather.temp}</Typography>
          <Typography
            variant="subtitle1"
            color='text.secondary'
          >
            {weather.description} ({weather.temp_range})
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: 150, md: 200 },
            }}
            alt="weather-image"
            src={weather.humidity > 70 ? cloud : sun}
          />
        </Grid>
      </Grid>
      <br />
      <CurrentWeatherDetails weather={weather} />
    </div>
  );
}