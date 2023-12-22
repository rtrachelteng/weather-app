import {Grid, Typography, Box} from "@mui/material";
import OpacityIcon from '@mui/icons-material/Opacity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import sun from '../assets/sun.png';
import cloud from '../assets/cloud.png';

export default function CurrentWeather(props) {
  const { weather } = props;

  const additionalDetailsList = [
    {
      id: 'humidity',
      icon: OpacityIcon,
      value: `${weather.humidity}%`,
      space: 2
    },
    {
      id: 'date_time',
      icon: CalendarMonthIcon,
      value: weather.date_time,
      space: 4
    },
    {
      id: 'sunrise',
      icon: WbSunnyRoundedIcon,
      value: weather.sunrise,
      space: 3
    },
    {
      id: 'sunset',
      icon: NightsStayRoundedIcon,
      value: weather.sunset,
      space: 3
    }
  ];

  const additionalDetailsComponent = additionalDetailsList.map((details) => {
    return (
      <Grid
        key={details.id}
        item xs={details.space}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <details.icon
          sx={{ pr: 1 }}
          color="primary" />
        <Typography variant="subtitle2">
          {details.value}
        </Typography>
      </Grid>
    )
  });

  const imageSrc =  () => weather.humidity > 70 ? cloud : sun;

  return (
    <div className={'current-weather'}>
      <Grid container>
        <Grid item xs={8}>
          <Typography
            variant="h6"
            color='text.primary'
          >
            {weather?.name?.toUpperCase()}, {weather?.country?.toUpperCase()}
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
              maxHeight: { xs: 100, md: 150 },
              maxWidth: { xs: 208, md: 258 },
            }}
            alt="weather-image"
            src={imageSrc()}
          />
        </Grid>
      </Grid>
      <br />
      <div className={'current-weather__additional-details'}>
        <Grid container spacing={1}>
          {additionalDetailsComponent}
        </Grid>
      </div>
    </div>
  );
}