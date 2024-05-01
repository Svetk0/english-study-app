import { makeAutoObservable } from "mobx";
  import { API_ALL_WORDS } from "../utils/apiUrls";
  
  class WordStore {
  words = [];
  
  constructor() {
  makeAutoObservable(this);
  }
  
  loadData = async () => {
  try {
  const response = await fetch(API_ALL_WORDS);
  if (!response.ok) {
  throw new Error("Failed to fetch words");
  }
  const data = await response.json();
  this.words = data;
  } catch (error) {
  console.error("Error fetching words:", error);
  }
  };
  
  deleteWord = async (id) => {
  try {
  const response = await fetch(`${API_ALL_WORDS}/${id}/delete`, {
  method: "POST",
  });
  if (!response.ok) {
  throw new Error("Failed to delete word");
  }
  this.words = this.words.filter((word) => word.id !== id);
  } catch (error) {
  console.error("Error deleting word:", error);
  }
  };
      
      addWordLocal = (newWord) => {
          console.log('before: ',  newWord, this.words );  
          this.words = [
              ...this.words,
              {
                  english: newWord.english,
                  transcription: newWord.transcription,
                  russian: newWord.russian,

              }
          ];
          console.log('after: ',   this.words ); 
      }
      

  
  updateWord = async (updatedWord) => {
  const body = {
  id: updatedWord.id,
  english: updatedWord.english,
  transcription: updatedWord.transcription,
  russian: updatedWord.russian,
  tags: "",
  tags_json: "[\"\"]",
  };
  
  try {
  const response = await fetch(`${API_ALL_WORDS}/${updatedWord.id}/update`, {
  method: "POST",
  body: JSON.stringify(body),
  });
  if (!response.ok) {
  throw new Error("Failed to update word");
  }
  const index = this.words.findIndex((word) => word.id === updatedWord.id);
  
  if (index !== -1) {
  this.words[index] = updatedWord;
  }
  } catch (error) {
  console.error("Error updating word:", error);
  }
  };
  }
  
  export default WordStore;
