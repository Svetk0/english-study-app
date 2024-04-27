import { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CardPage from "./pages/CardPage/CardPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import TrainMode from "./components/TrainMode/TrainMode";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Form2 from "./components/Form/Form";
import WordStore from "./mobx/WordStore";
import { Provider } from "mobx-react";
import VocabularyListMobx from "./components/Vocabulary/VocabularyListMobx";

import { data } from "./store/store.js";
import "./App.css";


const store = {
  wordStore: new WordStore(),
};

function App() {
  useEffect(() => {
    document.title = "English study";
  }, []);

 
  return (
  

    <Router>
      <Provider {...store}>
      <div className="App-container">
        <Header />

              <Routes>
              <Route
            path="/english-study-app/"
            element={<HomePage />}
          />
          <Route
            path="/english-study-app/cards"
            element={<CardPage dataList={data} />}
          />
          <Route
            path="/english-study-app/vocabulary"
            element={<VocabularyPage  />}
          />
            <Route
            path="/english-study-app/form"
            element={<Form2/>}
          />
          <Route path="/english-study-app/train"
            element={<TrainMode />} />
          
          <Route path="/english-study-app/test"
            element={<VocabularyListMobx />} />
            
            <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
        <Footer/>
        </div>
        </Provider>
      </Router>
    
  );
}

export default App;
