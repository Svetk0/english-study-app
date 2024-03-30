//card word
import { useState, useEffect } from "react";
import Card from "../../components/Card/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ dataList }) => { 
    //const initialData = [...dataList];
    const initialData = dataList.slice();
    console.log('compare: ', dataList === initialData);
    const [btnBackActive, setBackBtnActive] = useState(true);
  const [btnNextActive, setNextBtnActive] = useState(true);
    const [data, setData] = useState(dataList); //for filter

    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnedWords, setLearnedWords] = useState(0);
    const [clicked, setCliked] = useState(false);
    //const [clicked, setCliked] = useState(false);
   
    useEffect(() => {
        //setCurrentIndex(currentIndex);
        console.log('useEffect!-----', currentIndex);
        checkCurrentIndex(currentIndex);
        setCliked(false);
    }, [currentIndex]);

    const checkCurrentIndex = (index) => { 
        if (index === 0) { 
            setBackBtnActive(false);
            //setNextBtnActive(true);
        }
        if (index === data.length-1) { 
            setNextBtnActive(false);
            //setBackBtnActive(true);
        }

    }

    const deleteItem = (id) => { 

        console.log('data.id :', data[id]);
        const updatedDataList = data.splice(id, 1);
        //setData(updatedDataList);
        console.log('updatedDataList:', updatedDataList);
      }

    const handleCheck = (id) => { 
        console.log('id', id);
        setCliked(!clicked); 
        setLearnedWords(learnedWords + 1);
        deleteItem(id);
    }
    const moveBack = () => {
       // console.log("moveBack", currentIndex);
        setCurrentIndex(currentIndex - 1);
        setNextBtnActive(true);
    }
    const moveNext = () => {
        setCurrentIndex(currentIndex + 1);
        setBackBtnActive(true);
       // console.log("moveNext", currentIndex);
    }
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
          <p>
           You have learned: {learnedWords}/{initialData.length}
                    </p>
                  
                {data.map((card, index) => (
                    <div key={card.word} style={{ display: index === currentIndex ? "block" : "none" }}>
                            <Card 
                            transcription={card.transcription}
                            translation={card.translation}
                            word={card.word}
                            clicked={ clicked}
                            btnFunction={() => handleCheck(index)}
                        />
                      
                    </div>
                    ))}
      
      <p>
                        {currentIndex+1}/{data.length}
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
            )
}
export default CardPage;