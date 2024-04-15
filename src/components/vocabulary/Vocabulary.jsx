//card word
import { useState } from "react";
import styles from "./Vocabulary.module.css";
import { useEffect, useContext } from "react";
import { WordContext } from "../../context/WordContext/WordContext";
import { API_ALL_WORDS } from "../../utils/constants";


function Vocabulary({ rowData }) {
  const { words, setWords } = useContext(WordContext);
  const { id, english, transcription, russian } = rowData;
  
  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });
  const [errorDescription, setErrorDescription] = useState('');
  const [value, setValue] = useState({
    id:id,
    english: english,
    transcription: transcription,
    russian: russian,
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

  const handleDelete = async (id) => {
    try {
     
      const response = await fetch(`${API_ALL_WORDS}/${id}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      // Если задача успешно удалена на сервере, удаляем ее локально
      console.log('delete id', id);
      setWords(words.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
   

    // setWords(words.filter((task) => task.id !== id)); // local deleting
    // console.log('check values', value);

  };


  
  return isSelected ? (

    <tr className={styles.cardContainer}>
      <td>
        <input
          className = { errors.english  ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.english}
          name="english"
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
        className = { errors.russian  ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.russian}
          name="russian"
        />
      </td>
      <td className={styles.tdButtons}>
        <button
          className={styles.btnSave}
          onClick={handleSave}
          disabled={ btnSaveDisabled}
        >
          
          Save
        </button>
      </td>
      <td className={styles.tdButtons}>
        <button className={styles.btnCancel} onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  ) : (
    <tr className={styles.cardContainer}>
      <td className={styles.card_word}>{value.english}</td>
      <td className={styles.card_transcription}>{value.transcription}</td>
      <td className={styles.translation}>{value.russian}</td>
      <td className={styles.tdButtons}>
        <button className={styles.btnEdit} onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td className={styles.tdButtons}>
          <button className={styles.btnDelete}
            onClick={() => handleDelete(value.id)}
          >Delete</button>
      </td>
    </tr>
  );
}
export default Vocabulary;
