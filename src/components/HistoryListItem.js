import {Grid, IconButton, Typography, Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

export default function HistoryListItem (props) {
  const { history } = props;

  // Get weather details based on entry selected
  function onSearch() {
    props.handleSearch(history.name);
  }

  // Delete search record based on entry selected
  function onDelete() {
    props.handleDelete(history.id);
  }

  return (
    <Box
      sx={{
        bgcolor: 'rgba(25, 117, 209, 0.1)',
        borderRadius: 2,
        border: '2px solid',
        borderColor: 'rgba(25, 117, 209, 0.6)',
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
                  border: '1px solid',
                  borderColor: 'rgba(25, 117, 209, 0.6)',
                  '&:hover': {
                    bgcolor: 'rgba(25, 117, 209, 0.2)',
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
                  border: '1px solid',
                  borderColor: 'rgba(25, 117, 209, 0.6)',
                  '&:hover': {
                    bgcolor: 'rgba(25, 117, 209, 0.2)',
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