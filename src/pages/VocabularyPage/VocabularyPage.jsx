
//table of words
import Vocabulary from '../../components/Vocabulary/Vocabulary';
import styles from "./VocabularyPage.module.css";


const VocabularyPage = ({ data}) => {

  
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
                {data.map((item) => {
                    return (
                        <Vocabulary
                            
                            key={item.word}
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
