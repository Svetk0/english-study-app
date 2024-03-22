//card word
import { useState } from "react";
import Card from "../../components/Card/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ data }) => {
  //console.log("data ", data);
  const [index, setIndex] = useState(0);
  const [btnBackActive, setBackBtnActive] = useState(true);
  const [btnNextActive, setNextBtnActive] = useState(true);

  const checkCardNumbers = () => {
    let indexInc = index + 1;
    if (indexInc > data.length - 2) {
      setNextBtnActive(false);
      //setIndex(data.length-1);
    }
    if (indexInc < 1) {
      setBackBtnActive(false);
      // setIndex(0);
    }
    console.log("currIndex:", indexInc, btnNextActive);
    //return index;
  };

  const moveNext = () => {
    setBackBtnActive(true);
   setCliked(false);
      setIndex(index + 1);
      if (index > data.length - 3) {
        console.log("BTN next If index:", index);
        setNextBtnActive(false);
  
        //setIndex(data.length-1);
      }
    //checkCardNumbers();
    console.log("BTN next index:", index);
  };
  const moveBack = () => {
    console.log("BTN back INPUT index:", index);
    setCliked(false);
    setNextBtnActive(true);
    setIndex(index - 1);
    //checkCardNumbers();
    if (index < 2) {
      //console.log("BTN back If index:", index);
      setBackBtnActive(false);
      setIndex(0);
    }

    //console.log('BTN back OUTPUT index:',index);
  };
  const [clicked, setCliked] = useState(false);
  const handleCheck = () => {
    setCliked(!clicked);
  };
  return (
    <>
      <h2 className="title">CardWord</h2>
      <div className={styles.cardlist_container}>
              <button
                  className={ styles.button}
                  disabled={!btnBackActive}
                  onClick={moveBack}>
        Back
      </button>
              <div>
          {console.log("curr render index:", index)}

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
                  className={ styles.button}
                  disabled={!btnNextActive}
                  onClick={moveNext}>
        Next
      </button>
      </div>
    </>
  );
};
export default CardPage;
