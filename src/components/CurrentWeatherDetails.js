import {Grid, Typography} from "@mui/material";
import OpacityIcon from '@mui/icons-material/Opacity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';

export default function CurrentWeatherDetails(props) {
  const { weather } = props;

  // Provide list of additional details to be displayed
  const additionalDetailsList = [
    {
      id: 'date_time',
      icon: CalendarMonthIcon,
      value: weather.date_time,
      space: 4
    },
    {
      id: 'humidity',
      icon: OpacityIcon,
      value: `${weather.humidity}%`,
      space: 2
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

  // Generate component to be rendered based on list of additional details required.
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

  return (
    <div className={'current-weather__additional-details'}>
      <Grid container spacing={1}>
        { additionalDetailsComponent }
      </Grid>
    </div>
  );
}