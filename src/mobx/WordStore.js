import { makeAutoObservable } from "mobx";
import { API_ALL_WORDS } from "../utils/apiUrls";
class WordStore {
  words = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    try {
      const response = await fetch(
        API_ALL_WORDS
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      this.words = data;
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };


}

export default WordStore;