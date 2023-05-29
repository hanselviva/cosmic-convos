import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Landing from "./components/Landing";

const App: React.FC = () => {
  return (
    <div id="app">
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/universe" element={<Landing />} />
        <Route path="/universe/:id" element={<Content />} />
      </Routes>
    </div>
  );
};

export default App;
