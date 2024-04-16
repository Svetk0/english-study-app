import { useState, useEffect, useContext } from "react";
import styles from "./AddNew.module.css";
import { API_ADD_WORD } from "../../utils/constants";


const AddNew = () => {
    const [isSubmit, setIsSubmit] = useState(false);
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
    setIsSubmit(true);
    //setIsSubmit();
  };

  useEffect(() => {}, [text]);

  const handleChange = (event) => {
      setEditedText("");
      setIsSubmit(false);
    setText((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  };

  const postNewWord = async () => {
    try {
        text.id = Math.random() * 10;
       
        console.log("newPost", text);
       
      const response = await fetch(API_ADD_WORD, {
        method: "POST",
        //add object
        body: JSON.stringify(text),
      });

      if (!response.ok) {
        throw new Error("Failed to ADD task");
      }
    } catch (error) {
      console.error("Error ADDING task:", error);
    }
  };

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input_wrapper}>
          <label htmlFor="" name="english">
            {" "}
            word
          </label>
          <input
            className={styles.form__input}
            onChange={handleChange}
            value={text.english}
            name="english"
          />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="" name="transcription">
            {" "}
            transcription
          </label>
          <input
            className={styles.form__input}
            onChange={handleChange}
            value={text.transcription}
            name="transcription"
          />
        </div>

        <div className={styles.input_wrapper}> 
          <label htmlFor="" name="russian">
            {" "}
            translation
          </label>
          <input
            className={styles.form__input}
            onChange={handleChange}
            value={text.russian}
            name="russian"
          />
              </div>
              <div className={styles.input_wrapper}>
                  <label className={ styles.label_btn} htmlFor=""> ''</label>
                  <input className={styles.form__button} type="submit" value="Add New" />
                  </div>
      </form>
      <div className={isSubmit ? styles.newWord : styles.newWord__off}>
       <b>You've added a new word:</b> 
        <br /> english: {editedText.english}
        <br /> transcription: {editedText.transcription}
        <br /> translation: {editedText.russian}
      </div>
    </div>
  );
};

export default AddNew;
