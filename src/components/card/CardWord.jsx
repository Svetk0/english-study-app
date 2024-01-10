//card word
import styles from "./CardWord.module.css";
function CardWord() {
 
    return (
        <>
             <h2>CardWord</h2>
            <div className={styles.cardContainer}>
                
           <div className={ styles.card_word}>
           apple
                </div>
                <div className={ styles.card_transcription}>
                [æpl]

                </div>
                <div className={ styles.card_translate}>
           яблоко
           </div>
            </div>
        </>)
}
export default CardWord;