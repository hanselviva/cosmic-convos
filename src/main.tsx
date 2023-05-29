import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter } from "react-router-dom";

const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff8f00",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Do Hyeon",
  },
  shape: {
    borderRadius: 16,
  },
});

const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff8f00",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Do Hyeon",
  },
  shape: {
    borderRadius: 16,
  },
});

interface ContextType {
  isDark: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsDark: any;
}

export const ThemeContext = createContext<ContextType>({
  isDark: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsDark: undefined,
});

export const ThemeWrapper: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <CssBaseline />
        <App />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
