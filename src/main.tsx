import React from "react";
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
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ThemeWrapper />
    </ThemeProvider>
  </React.StrictMode>
);
