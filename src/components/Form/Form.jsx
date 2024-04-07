import { useState, useEffect } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [text, setText] = useState("");
  const [editedText, setEditedText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditedText(modifyText(text));
    setText("");
  };

  const handleChange = (e) => {
    setEditedText("");
    setText(e.target.value);
  };
  const modifyText = (content) => {
    const styledText = content.toUpperCase();
    return styledText;
  };

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={handleSubmit}  className={styles.form}>
        <input className={styles.form__input} onChange={handleChange} value={text} />
        <input className={styles.form__button} type="submit" value="Search" />
      </form>
      <p>Your request: {editedText}</p>
    </div>
  );
};

export default Form;
