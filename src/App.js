import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import "./App.css";
import Results from "./Components/Results";
import requests from "./request";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />

      {/* In Nav bar im passing modifier */}

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
