import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Routes, theme } from "./config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
