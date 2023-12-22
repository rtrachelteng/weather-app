import {useState} from 'react';
import {Box, Grid, TextField} from "@mui/material";
import Logo from '../assets/weather-icon.png';


function SearchInput(props) {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onKeyPress = event =>  {
    if(event.keyCode === 13) {
      props.handleClick(value);
      setValue('');
    }
  }

  return (
    <div >
      <Grid
        className={'search-input'}
        container spacing={1}
      >
        <Grid item xs={2}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 40, md: 80 },
            }}
            alt="weather-logo"
            src={Logo}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Enter a Country or City"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onKeyDown={onKeyPress}
            value={value}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchInput;