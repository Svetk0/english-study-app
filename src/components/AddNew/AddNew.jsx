import { useState, useEffect } from "react";
import styles from "./AddNew.module.css";
import { API_ADD_WORD } from "../../utils/constants";

const AddNew = () => {
  const [text, setText] = useState({
    id: "",
    english: "",
    transcription: "",
    russian: "",
  });
    const [editedText, setEditedText] = useState("");
    
  const handleSubmit = (e) => {
    e.preventDefault();
      setEditedText({ ...text });
      postNewWord();
    //setText("");
  };
  useEffect(() => {
   // checkErrorsAreExist();
  
}, [text]);

  const handleChange = (event) => {
    setEditedText("");
    //setText(e.target.value);
    setText((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  };
  const modifyText = (content) => {
    const styledText = content.toUpperCase();
    return styledText;
  };
    
  const postNewWord= async () => {
      try {
          text.id = Math.random()*10;
        console.log('newPost', text);
      const response = await fetch(API_ADD_WORD, {
          method: "POST",
          //add object 
          body: JSON.stringify(text)
      
      });

      if (!response.ok) {
        throw new Error("Failed to ADD task");
      }

      // Если задача успешно удалена на сервере, удаляем ее локально
        console.log('ADD: : ',text.id, text.english);
      //setWords(words.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error ADDING task:", error);
    }
  };
    

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.form__input}
          onChange={handleChange}
          value={text.english}
          name="english"
        />
        <input
          className={styles.form__input}
          onChange={handleChange}
          value={text.transcription}
          name="transcription"
        />

        <input
          className={styles.form__input}
          onChange={handleChange}
                  value={text.russian}
                  name="russian"
        />
        <input className={styles.form__button} type="submit" value="Add New" />
      </form>
      <p>Your request: {editedText.english}</p>
    </div>
  );
};

export default AddNew;
