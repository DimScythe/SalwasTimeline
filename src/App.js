import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle, Title, AudioContainer } from "./styles";
import { ThemeProvider } from "styled-components";
import EventList from "./components/EventList";

const theme = {
  mainColor: "DarkSlateBlue",
  backgroundColor: "#FAEBD7",
  blue: "#191970",
  dark: "DarkSlateBlue",
  itemBorder: "#191970",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Welcome To My World</Title>

      <AudioContainer>
        <audio
          src="../Rewrite The Stars - The Greatest ShowmanEASY PIANO TUTORIAL + SHEET MUSIC by Betacustic.mp3"
          controls
        ></audio>
      </AudioContainer>

      <EventList />
    </ThemeProvider>
  );
}

export default App;
