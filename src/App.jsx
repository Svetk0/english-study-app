import { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage/HomePage";
import CardPage from "./pages/CardPage/CardPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import TrainMode from "./components/TrainMode/TrainMode";
//import menu from './components/constants';
import { data } from "./store/store.js";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";


function App() {
  useEffect(() => {
    document.title = "English study";
  }, []);

  return (
    <Router>
      <div className="App-container">
        <Header />

              <Routes>
              <Route
            path="/english-study-app/"
            element={<HomePage />}
          />
          <Route
            path="/english-study-app/cards"
            element={<CardPage data={data} />}
          />
          <Route
            path="/english-study-app/vocabulary"
            element={<VocabularyPage data={data} />}
          />
          <Route path="/english-study-app/train" element={<TrainMode />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
