import { useEffect, useContext } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { WordContext } from "./context/WordContext/WordContext";
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
import Form2 from "./components/Form/Form";
import VocabularyList from "./components/Vocabulary/VocabularyList";


import { WordProvider } from "./context/WordContext/WordContext";
function App() {
  useEffect(() => {
    document.title = "English study";
  }, []);
  //const { words, setWords } = useContext(WordContext);

  return (
  
    <WordProvider>
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
            element={<CardPage dataList={data} />}
          />
          <Route
            path="/english-study-app/vocabulary"
            element={<VocabularyPage data={data} />}
          />
            <Route
            path="/english-study-app/form"
            element={<Form2/>}
          />
          <Route path="/english-study-app/train"
            element={<TrainMode />} />
          
   
    
      <Route path="/english-study-app/vocabulary-list"
        element={<VocabularyList />} />
    
         
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </div>
      </Router>
      </WordProvider>
  );
}

export default App;
