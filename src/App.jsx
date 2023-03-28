import GlobalStyle from "./styles/globalStyle";
import Router from "./routes/Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import store from "./store";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

// localStorage cache
function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("app-cache", appCache);
  });

  return map;
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SWRConfig>
          <GlobalStyle />
          <Router />
        </SWRConfig>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
