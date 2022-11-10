import React from "react";
import SongOverview from "./components/SongOverview";
import Header from "./components/Header";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SongOverview />
    </div>
  );
}

export default App;
