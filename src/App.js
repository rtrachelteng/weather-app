import './App.css';
import SearchInput from "./components/SearchInput";
import CurrentContainer from "./components/CurrentContainer";
import { Container } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <SearchInput />
        <CurrentContainer />
      </Container>
    </div>
  );
}

export default App;
