import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header2";

import CardPage from "./containers/CardPage/CardPage";
import VocabularyPage from "./containers/VocabularyPage/VocabularyPage";
import TrainMode from "./components/train-mode/TrainMode";
//import menu from './components/constants';
import { data } from "./store/store.js";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "English study";
  }, []);

  return (
    <Router>
      <div className="App-container">
        <Header />

        <Routes>
          <Route path="/english-study-app/cards" element={<CardPage data={data} />} />
          <Route path="/english-study-app/" element={<VocabularyPage data={data} />} />
          <Route path="/english-study-app/train" element={<TrainMode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
