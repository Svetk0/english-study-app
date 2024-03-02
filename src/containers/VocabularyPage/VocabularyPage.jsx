
//table of words
import Vocabulary from '../../components/Vocabulary/Vocabulary';
import styles from "./VocabularyPage.module.css";


const VocabularyPage = ({ data}) => {

  
    return (
        <>
            <div>
            <h2 className="title">Vocabulary Page</h2>
            <table>
                <tr>
                    <th>Word</th>
                    <th>Transcription</th>
                        <th>Translation</th>
                        <th>Edit</th>
                        <th>Delete</th>
                </tr>
                {data.map((item) => {
                    return (
                        <Vocabulary
                        key={ item.word}
                        transcription={item.transcription}
                        translation={item.translation}
                        word={item.word}
                    />
                    )
                })}
            </table>
            </div>
        </>
    );
};
export default VocabularyPage;