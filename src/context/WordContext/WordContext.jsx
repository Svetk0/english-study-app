// WordContext.js
import React, { createContext, useState, useEffect } from "react";

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setWords(data); // Инициализация состояния tasks через контекст
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <WordContext.Provider value={{ words, addWord, setWords }}>
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };