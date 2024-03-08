//card word
import { useState } from "react";
import Card from "../../components/card/CardWord";
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

  return (
    <>
      <h2 className="title">CardWord</h2>
      <button disabled={!btnBackActive} onClick={moveBack}>
        Back
      </button>

      <button disabled={!btnNextActive} onClick={moveNext}>
        Next
      </button>

      <div className={styles.cardlist_container}>
        <div>
          {console.log("curr render index:", index)}

          <Card
            transcription={data[index].transcription}
            translation={data[index].translation}
            word={data[index].word}
          />
          <p>
            {index + 1}/{data.length}
          </p>
        </div>
      </div>
    </>
  );
};
export default CardPage;
