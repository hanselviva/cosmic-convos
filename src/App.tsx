import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import UniversePage from "./components/UniversePage";
import AllUniverse from "./components/AllUniverse";
import CharacterPage from "./components/CharacterPage";

const App: React.FC = () => {
  return (
    <div id="app">
      <Header />

      <Routes>
        <Route path="/" element={<AllUniverse />} />
        <Route path="/:universeId" element={<UniversePage />} />
        <Route path="/:universeId/:characterId" element={<CharacterPage />} />
      </Routes>
    </div>
  );
};

export default App;
