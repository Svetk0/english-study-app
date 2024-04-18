//card word
import { useState, useEffect, useContext } from "react";
import { WordContext } from "../../context/WordContext/WordContext";
import styles from "./CardWord.module.css";


function CardWord({ word, transcription, translation,isLearned,clicked, btnFunction }) {
  //const [clicked, setCliked] = useState(false);
  const { words, setWords } = useContext(WordContext);
  return (
    <>
      <div className={!isLearned ? (styles.cardContainer ):( styles.cardContainer__learned )}>
        <div className={styles.card_word}>{word}</div>
        <div className={styles.card_transcription}>{transcription}</div>
        <div>
          {!clicked && !isLearned ? (
                      <button
                          onClick={btnFunction}
                          className={styles.card_button }
                      > check </button>
          ) : (
              <div
                
                              className={styles.card_translation}>{translation}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CardWord;
