//card word
import Card from "../../components/card/CardWord";
import styles from "./CardPage.module.css";


const CardPage = ({ data}) => {
    console.log('data ', data);
  
    return (
        <>
          
            <h2 className="title">CardWord</h2>
            <div className={styles.cardlist_container}>
            
                {data.map((item) => (
         <Card
             key={ item.word}
             transcription={item.transcription}
             translation={item.translation}
             word={item.word}
         />
 
     ))}
            </div>
         
        </>
    );
};
export default CardPage;
