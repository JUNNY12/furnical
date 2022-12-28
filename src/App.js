import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Routes, theme } from "./config";
import { Suspense } from "react";
import Loader from "./component/Loader";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback= {<Loader />}>
          <Routes />
          </Suspense>
        </BrowserRouter>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
