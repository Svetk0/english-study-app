//card word
import { useState } from "react";
import styles from "./Vocabulary.module.css";

function Vocabulary({ rowData }) {
  const { word, transcription, translation } = rowData;

  const [clicked, setCliked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState({ ...rowData });
    const [inputValue, setInputValue] = useState({ ...value });

    function getValue(event) {
       // setInputValue({ ...value });
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: [event.target.value] };
    });
  }



  const handleEdit = () => {
    setIsSelected(!isSelected);
  };
  const handleSave = () => {
    setValue({ ...value });
      setIsSelected(!isSelected);
      setInputValue({ ...value });
  };
    
  const handleCancel = () => {
    setValue({ ...inputValue });
    setIsSelected(!isSelected);
  };

  return isSelected ? (
    <tr className={styles.cardContainer}>
      <td>
        <input
          className={styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.word}
          name="word"
        />
      </td>
      <td>
        <input
          className={styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.transcription}
          name="transcription"
        />
      </td>
      <td>
        <input
          className={styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.translation}
          name="translation"
        />
      </td>
      <td>
        <button className={styles.btnSave} onClick={handleSave}>
          Save
        </button>
      </td>
      <td>
              <button
                  className={styles.btnCancel}
              onClick={handleCancel}>Cancel</button>
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
