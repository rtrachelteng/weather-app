import {Typography, Stack, Container} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HistoryListItem from "./HistoryListItem";

export default function HistoryCard(props) {
  const { historyList } = props

  function handleSearch(value) {
    props.handleSearch(value);
  }
  function handleDelete(value) {
    props.handleDelete(value);
  }

  const historyListComponent = historyList.map((history) => {
    return (
      <HistoryListItem
        key={history.date_time}
        history={history}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
      />
    )
  });

  return (
    <div
      className={'history-card'}
      style={{
        visibility: !!historyList.length ? 'visible' : 'hidden'
      }}
    >
      <Card
        sx={{ minWidth: 275, bgcolor: 'rgba(250,250,250,0.5)' }}
      >
        <CardContent>
          <div className={'weather-card__content-container'}>
            <Typography
              variant="h6"
              color='text.primary'
            >
              Search history
            </Typography>
            <Container sx={{ pt: 4 }}>
              <Stack
                direction='column'
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                {historyListComponent}
              </Stack>
            </Container>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}