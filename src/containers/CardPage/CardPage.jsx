//card word
import { useState } from "react";
import Card from "../../components/card/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ data }) => {
  console.log("data ", data);
  const [index, setIndex] = useState(0);
    const [btnBackActive, setBackBtnActive] = useState(true);
    const [btnNextActive, setNextBtnActive] = useState(true);

  const moveNext = () => {
      if (index > data.length-1) {
        setNextBtnActive(false);
        setIndex(data.length);
      }
      setIndex(index + 1);
      console.log('BTN index:',index);
  };
    
    const showCurrentCard = (index) => { 
        

    }

  return (
    <>
      <h2 className="title">CardWord</h2>
      <button    disabled={ !btnBackActive}>Back</button>
          <button
              disabled={ !btnNextActive}
              onClick={moveNext}
          >
              Next
          </button>
      <div className={styles.cardlist_container}>
        {data.map((item, index) => {
          return (
            <div>
              <Card
                key={item.word}
                transcription={item.transcription}
                translation={item.translation}
                word={item.word}
              />
              <p>
                {index + 1}/{data.length}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CardPage;
