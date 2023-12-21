import {useState} from 'react';
import {Grid, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
  const [country, setCountry] = useState('')

  const handleChange = event => {
    setCountry(event.target.value);
    console.log('value is:', event.target.value);
  };

  const onClick = () =>  {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return (
    <div className={'search-input'}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <TextField
            label="Country or City"
            variant="filled"
            fullWidth
            onChange={handleChange}
            value={country}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            aria-label="search"
            size="large"
            color="primary"
            onClick={onClick}
          >
            <SearchIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchInput;