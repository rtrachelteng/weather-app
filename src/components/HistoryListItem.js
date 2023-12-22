import {Grid, IconButton, Typography, Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

export default function HistoryListItem (props) {
  const { history } = props;

  function onSearch() {
    props.handleSearch(history.name);
  }

  function onDelete() {
    props.handleDelete(history.id);
  }

  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: 'rgba(222, 222, 222, 0.4)'
      }}
    >
      <Grid container spacing={1} sx={{ px: 2, py: 1 }}>
        <Grid item>
          <Typography>{history.name}, {history.country}</Typography>
        </Grid>
        <Grid item xs>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={1}
          >
            <Grid item>
              <Typography>{history.date_time}</Typography>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="search"
                color="primary"
                sx={{
                  bgcolor: 'rgba(250, 250, 250, 1)',
                  '&:hover': {
                    bgcolor: 'rgba(250, 250, 250, 0.4)',
                  },
                }}
                onClick={onSearch}>
                <SearchIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                color="primary"
                sx={{
                  bgcolor: 'rgba(250, 250, 250, 1)',
                  '&:hover': {
                    bgcolor: 'rgba(250, 250, 250, 0.4)',
                  },
                }}
                onClick={onDelete}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}