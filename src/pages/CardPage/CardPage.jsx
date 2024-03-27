//card word
import { useState } from "react";
import Card from "../../components/Card/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ data }) => {
  //console.log("data ", data);
  const [index, setIndex] = useState(0);
  const [btnBackActive, setBackBtnActive] = useState(true);
  const [btnNextActive, setNextBtnActive] = useState(true);
  


  //Button NEXT
  const moveNext = () => {
    setBackBtnActive(true);
    setCliked(false);
    setIndex(index + 1);
  
    if (index > data.length - 3) {
      console.log("BTN next If index:", index);
      setNextBtnActive(false);
      
    }
    setIndexInner(index+1);
    console.log("BTN next index:", index);
  };

    //Button BACK
  const moveBack = () => {
    console.log("BTN back INPUT index:", index);
    setCliked(false);
    setNextBtnActive(true);
    setIndex(index - 1);
   
    if (index < 2) {
      setBackBtnActive(false);
      setIndex(0);
    }
    setIndexInner(index-1);
  };

  //Button CHECK
  const [indexInner, setIndexInner] = useState(index);
  const [learnedWords, setLearnedWords] = useState(0);
  const [clicked, setCliked] = useState(false);
  const handleCheck = () => {
    
    if ((clicked === false) && (indexInner===index)) {
      setLearnedWords(learnedWords + 1);
      setIndexInner(indexInner*0.1);
      //по идее здесь нужно добавить удаление данной карточки из этого списка, т.е создание нового массива через метод filter()
    };
    setCliked(!clicked);
  };


  return (
    <>
      <h2 className="title">CardWord</h2>
      <div className={styles.cardlist_container}>
        <button
          className={styles.button}
          disabled={!btnBackActive}
          onClick={moveBack}
        >
          Back
        </button>
        <div>
        
          {console.log("curr render index:", index, indexInner)}
          <p>
           You have learned: {learnedWords}/{data.length}
          </p>
          <Card
            transcription={data[index].transcription}
            translation={data[index].translation}
            word={data[index].word}
            clicked={clicked}
            btnFunction={handleCheck}
          />
          <p>
            {index + 1}/{data.length}
          </p>
        </div>
        <button
          className={styles.button}
          disabled={!btnNextActive}
          onClick={moveNext}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default CardPage;
