import {useState} from 'react';
import {Grid, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function SearchInput(props) {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onClick = () =>  {
    props.handleClick(value);
  }

  const onKeyPress = event =>  {
    if(event.keyCode === 13) onClick();
  }

  return (
    <div className={'search-input'}>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <TextField
            label="Country or City"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onKeyDown={onKeyPress}
            value={value}
          />
        </Grid>
        <Grid item xs={1}>
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