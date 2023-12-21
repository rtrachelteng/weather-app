import {Typography} from "@mui/material";

const mock = {
  location: 'London',
  description: 'Moderate rain',
  temp_min: '29.5°C',
  temp_max: '30.1°C',
  humidity: '89%',
  dt: '2023-02-01 05:15 PM'
}

function CurrentContainer() {
  return (
    <div className={'current__container'}>
      <Typography>{mock.location}</Typography>
      <Typography>{mock.description}</Typography>
      <Typography>{mock.temp_min}</Typography>
      <Typography>{mock.temp_max}</Typography>
      <Typography>{mock.humidity}</Typography>
      <Typography>{mock.dt}</Typography>
    </div>
  );
}

export default CurrentContainer;