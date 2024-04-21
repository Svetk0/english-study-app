// WordContext.js
import React, { createContext, useState, useEffect } from "react";
import { API_ALL_WORDS } from "../../utils/constants";

//import  getResource  from "../../utils/getResource.js";

//const API_ALL_WORDS = "http://itgirlschool.justmakeit.ru/api/words";

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };
  
  useEffect(() => {
    getResource(API_ALL_WORDS);
      
  }, []);

  const getResource = async (url) => {
    try {
      const response = await fetch(
        url
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
        const data = await response.json();
        console.log('await res', data);
      setWords(data); // Инициализация состояния tasks через контекст
    } catch (error) {
      console.error("Error fetching info:", error);
    }
  };

  return (
    <WordContext.Provider value={{ words, addWord, setWords }}>
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };