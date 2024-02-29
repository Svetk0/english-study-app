//card word
import Card from "../../components/card/CardWord";
import styles from "./CardPage.module.css";
//import { data } from '../../store/store.js';

const CardPage = ({ data}) => {
    console.log('data ', data);
    //const dataArr = Object.keys(data);
    //console.log('dataArr ', dataArr);
    return (
        <>
          
            <h2 className="title">CardWord</h2>
            {data.map((item) => (
         
                <Card
                   
                    transcription={item.transcription}
                    translation={item.translation}
                    word={item.word}
                />
        
            ))}
        </>
    );
};
export default CardPage;
