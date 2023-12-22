import {useState} from 'react';
import {Box, Grid, TextField} from "@mui/material";
import Logo from '../assets/weather-icon.png';


function SearchInput(props) {
  const [value, setValue] = useState('')
  const [isValid, setValid] = useState(true)

  const handleChange = event => {
    setValue(event.target.value);
  };

  // Get weather details after Enter was pressed
  // If weather found valid = true and reset input, else valid = false
  const onKeyPress = async event =>  {
    if(event.keyCode === 13) {
      const valid = await props.handleClick(value);
      setValid(valid)
      if (valid) setValue('');
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
            error={!isValid && value !== ''}
            helperText={!isValid && value !== ''? 'Invalid input. Please try again' : ''}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchInput;