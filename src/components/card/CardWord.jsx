//card word
import { useState } from "react";
import styles from "./CardWord.module.css";

function CardWord({ word, transcription, translation, clicked, btnFunction }) {
  //const [clicked, setCliked] = useState();
  
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card_word}>{word}</div>
        <div className={styles.card_transcription}>{transcription}</div>
        <div>
          {!clicked ? (
                      <button
                          onClick={btnFunction}
                          className={styles.card_button }
                      > check </button>
          ) : (
              <div
                onClick={btnFunction}
                              className={styles.card_translation}>{translation}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CardWord;
