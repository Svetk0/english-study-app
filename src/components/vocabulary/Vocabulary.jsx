//card word
import { useState } from "react";
import styles from "./Vocabulary.module.css";

function Vocabulary({ word, transcription, translation }) {
  const [clicked, setCliked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(word);

  function getValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  const handleCheck = () => {
    setCliked(!clicked);
  };

  return (
    <>
      <tr className={styles.cardContainer}>
        {isSelected ? (
          <input
            type="text"
            onChange={getValue}
            value={value}
            onBlur={() => setIsSelected(false)}
          />
        ) : (
          <td className={styles.card_word} onClick={() => setIsSelected(true)}>
            {" "}
            {value}
          </td>
        )}

        {/* <td className={styles.card_word}>{word}</td> */}
        <td className={styles.card_transcription}>{transcription}</td>
        <td className={styles.translation}>{translation}</td>
        <td>
                  <button
                  onClick={() => setIsSelected(true)}
                  >e</button>
        </td>
        <td>
          <button>x</button>
        </td>
      </tr>
    </>
  );
}
export default Vocabulary;
