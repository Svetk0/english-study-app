//card word
import styles from "./CardWord.module.css";

function CardWord({ word, transcription, translation }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card_word}>{word}</div>
        <div className={styles.card_transcription}>{transcription}</div>
        <div className={styles.card_translation}>{translation}</div>
      </div>
    </>
  );
}
export default CardWord;
