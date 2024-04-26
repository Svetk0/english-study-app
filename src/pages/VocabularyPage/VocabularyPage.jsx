
//table of words
import { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";

import Vocabulary from '../../components/Vocabulary/VocabularyMobx';

import styles from "./VocabularyPage.module.css";
import AddWord from "../../components/AddWord/AddWord";



const VocabularyPage = ({ words}) => {

  
    return (
        <>
            <div>
                <h2 className="title">Vocabulary Page</h2>
                <AddWord/>
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

export default inject(({ wordStore }) => {
    const { words, loadData } = wordStore;
  
    useEffect(() => {
      loadData();
    }, []);
  
    return {
      words,
      loadData,
    };
  })(observer(VocabularyPage));
