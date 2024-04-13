
//table of words
import React, { useContext } from "react";
import Vocabulary from '../../components/Vocabulary/Vocabulary';
import styles from "./VocabularyPage.module.css";
import { WordContext } from "../../context/WordContext/WordContext";

const VocabularyPage = () => {
    const { words, setWords } = useContext(WordContext);
    //setWords(data);
    console.log('vocab',words);
    return (
        <>
            <div>
            <h2 className="title">Vocabulary Page</h2>
            <table>
                    <tr className={ styles.mainLine}>
                    <th>Word</th>
                    <th>Transcription</th>
                        <th>Translation</th>
                        <th></th>
                        <th></th>
                </tr>
                {words.map((item) => {
                    return (
                        <Vocabulary
                            
                            key={item.english}
                            rowData={ item}
                        
                    />
                    )
                })}
            </table>
            </div>
        </>
    );
};
export default VocabularyPage;
