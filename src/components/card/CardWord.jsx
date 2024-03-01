//card word
import { useState } from "react";
import styles from "./CardWord.module.css";

function CardWord({ word, transcription, translation }) {
  const [clicked, setCliked] = useState(false);
  const handleCheck = () => {
    setCliked(!clicked);
  };
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card_word}>{word}</div>
        <div className={styles.card_transcription}>{transcription}</div>
        <div>
          {!clicked ? (
                      <button
                          onClick={handleCheck}
                          className={styles.card_button }
                      > check </button>
          ) : (
                          <div
                          onClick={handleCheck}
                              className={styles.card_translation}>{translation}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CardWord;
