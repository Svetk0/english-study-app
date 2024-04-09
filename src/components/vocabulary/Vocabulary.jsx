//card word
import { useState } from "react";
import styles from "./Vocabulary.module.css";
import { useEffect } from "react";

function Vocabulary({ rowData }) {
  const {id, word, transcription, translation } = rowData;
  const [errors, setErrors] = useState({
    word: false,
    transcription: false,
    translation: false,
  });
  const [errorDescription, setErrorDescription] = useState('');
  const [value, setValue] = useState({
    id:id,
    word: word,
    transcription: transcription,
    translation: translation,
  });
 
  const [isSelected, setIsSelected] = useState(false);
  const [btnSaveDisabled, setBtnSaveDisabled] = useState(false);
  //const [value, setValue] = useState({ ...rowData });
  const [inputValue, setInputValue] = useState({ ...value });

  function getValue(event) {
    // setInputValue({ ...value });
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
      
    });
    setErrors({ ...errors, [event.target.name]: !event.target.value.trim() });
    
  }
  useEffect(() => {
    checkErrorsAreExist();
  
}, [errors]);

  const checkErrorsAreExist = () => { 
    if (errors.word || errors.transcription || errors.translation) {
      setBtnSaveDisabled(true);
      setErrorDescription('Field cannot be empty');
    }
    else { 
      setBtnSaveDisabled(false);
    }
    console.log('btnSave', btnSaveDisabled);
  }

  const handleEdit = () => {
    setIsSelected(!isSelected);
  };
  const handleSave = () => {
    setValue({ ...value });
    setIsSelected(!isSelected);
    setInputValue({ ...value });
   
    
    console.log('errors',errors);
  };

  const handleCancel = () => {
    setValue({ ...inputValue });
    setIsSelected(!isSelected);
  };


  
  return isSelected ? (

    <tr className={styles.cardContainer}>
      <td>
        <input
          className = { errors.word  ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.word}
          name="word"
        />
      </td>
      <td>
        <input
       className = { errors.transcription  ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.transcription}
          name="transcription"
        />
      </td>
      <td>
        <input
        className = { errors.translation  ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.translation}
          name="translation"
        />
      </td>
      <td>
        <button
          className={styles.btnSave}
          onClick={handleSave}
          disabled={ btnSaveDisabled}
        >
          
          Save
        </button>
      </td>
      <td>
        <button className={styles.btnCancel} onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  ) : (
    <tr className={styles.cardContainer}>
      <td className={styles.card_word}>{value.word}</td>
      <td className={styles.card_transcription}>{value.transcription}</td>
      <td className={styles.translation}>{value.translation}</td>
      <td>
        <button className={styles.btnEdit} onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td>
        <button className={styles.btnDelete}>Delete</button>
      </td>
    </tr>
  );
}
export default Vocabulary;
