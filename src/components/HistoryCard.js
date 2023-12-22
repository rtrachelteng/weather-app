import {Typography, Stack, Container} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HistoryListItem from "./HistoryListItem";

export default function HistoryCard(props) {
  const { historyList } = props

  // Get weather details
  function handleSearch(value) {
    props.handleSearch(value);
  }

  // Delete specific search record
  function handleDelete(value) {
    props.handleDelete(value);
  }

  // Generate component depending on search history list provided
  const historyListComponent = historyList.map((history) => {
    return (
      <HistoryListItem
        key={history.id}
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
        visibility: !!historyList.length ? 'visible' : 'hidden',
        opacity: !!historyList.length ? '1' : '0'
      }}
    >
      <Card
        sx={{ minWidth: 560, bgcolor: 'rgba(250,250,250,0.5)' }}
      >
        <CardContent>
          <div className={'weather-card__content-container'}>
            <Typography
              variant="h6"
              color='primary.main'
            >
              Search History
            </Typography>
            <Container sx={{ pt: 3 }}>
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