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
    }
    if (indexInc < 1) {
      setBackBtnActive(false);
    }
    console.log("currIndex:", indexInc, btnNextActive);
  };

  //Button NEXT
  const moveNext = () => {
    setBackBtnActive(true);
    setCliked(false);
    setIndex(index + 1);
    if (index > data.length - 3) {
      console.log("BTN next If index:", index);
      setNextBtnActive(false);
    }

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
  };

  //Button CHECK
  const [clicked, setCliked] = useState(false);
  const handleCheck = () => {
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
