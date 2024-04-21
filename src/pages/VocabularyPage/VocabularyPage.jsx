
//table of words
import React, { useContext, useEffect } from "react";
import Vocabulary from '../../components/Vocabulary/Vocabulary';
import styles from "./VocabularyPage.module.css";
import { WordContext } from "../../context/WordContext/WordContext";
import AddNew from "../../components/AddNew/AddNew";
import LED from "../../components/LED/LED";

const VocabularyPage = () => {
    const { words, setWords } = useContext(WordContext);
    useEffect(() => {
        
          
      }, [words]);
 
    console.log('vocab',words);
    return (
        <>
            <div>
                <h2 className="title">Vocabulary Page</h2>
                <AddNew />
                <LED />
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
                            
                            key={item.id}
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
