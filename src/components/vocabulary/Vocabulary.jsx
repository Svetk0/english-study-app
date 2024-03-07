//card word
import { useState } from "react";
import styles from "./Vocabulary.module.css";

function Vocabulary({ rowData }) {
  const { word, transcription, translation } = rowData;

  const [clicked, setCliked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({ ...rowData });

  function getValue(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: [event.target.value] };
    });
  }

  const handleCheck = () => {
    setCliked(!clicked);
  };

  const handleEdit = () => {
    setIsSelected(!isSelected);
  };
    const handleSave = () => { 
        setValue ({...value});
        setIsSelected(!isSelected);
        
    }

  return isSelected ? (
    <tr className={styles.cardContainer}>
      <td>
        <input type="text" onChange={getValue} value={value.word} name="word" />
      </td>
      <td>
        <input
          type="text"
          onChange={getValue}
          value={value.transcription}
          name="transcription"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={getValue}
          value={value.translation}
          name="translation"
        />
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
      <td>
        <button>Cancel</button>
      </td>
    </tr>
  ) : (
    <tr className={styles.cardContainer}>
      <td className={styles.card_word}>{value.word}</td>
      <td className={styles.card_transcription}>{value.transcription}</td>
      <td className={styles.translation}>{value.translation}</td>
      <td>
        <button onClick={handleEdit}>e</button>
      </td>
      <td>
        <button>x</button>
      </td>
    </tr>
  );
}
export default Vocabulary;
