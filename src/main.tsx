import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";

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

export const ThemeWrapper: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const toogleTheme = (isDark: boolean) => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeWrapper />
  </React.StrictMode>
);
