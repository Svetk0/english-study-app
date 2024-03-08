//card word
import { useState } from "react";
import Card from "../../components/card/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ data }) => {
  console.log("data ", data);
  const [index, setIndex] = useState(0);
    const [btnBackActive, setBackBtnActive] = useState(true);
    const [btnNextActive, setNextBtnActive] = useState(true);

    const checkCardNumbers = () => { 
        let indexInc = index+1;
        if (indexInc > data.length-2) {
            setNextBtnActive(false);
           
            //setIndex(data.length-1);
        }
        if (indexInc < 1) {
            setBackBtnActive(false);
           // setIndex(0);
        }
        console.log('currIndex:', indexInc, btnNextActive);
        //return index;
    }

    const moveNext = () => {
        setBackBtnActive(true);
      setIndex(index + 1);
      checkCardNumbers();
      console.log('BTN next index:',index);
  };
  const moveBack= () => {
    setNextBtnActive(true);
    setIndex(index - 1);
    checkCardNumbers();
    console.log('BTN back index:',index);
};
    

  return (
    <>
      <h2 className="title">CardWord</h2>
          <button
              disabled={!btnBackActive}
              onClick={moveBack}
          >
              Back
          </button>

          <button
              disabled={ !btnNextActive}
              onClick={moveNext}
          >
              Next
          </button>

      <div className={styles.cardlist_container}>
       
          
              <div>
                  {console.log('curr render index:', index)}
               
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
