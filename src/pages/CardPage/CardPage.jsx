
import { useState, useEffect } from "react";
import Card from "../../components/CardWord/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ dataList }) => {
    const [data, setData] = useState(dataList);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnedWords, setLearnedWords] = useState([]);
    const [showTranslation, setShowTranslation] = useState(false);

    useEffect(() => {
        checkCurrentIndex(currentIndex);
    }, [currentIndex]);

    const checkCurrentIndex = (index) => {
        const isBackActive = index > 0;
        const isNextActive = index < data.length - 1;
        setBackBtnActive(isBackActive);
        setNextBtnActive(isNextActive);
    };
    const checkUniqueLearnedWord = (array) => { 
        console.log('initialArray', array);
        const uniqueArray = array.reduce(
            (res, cur) =>
                res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
                    ? res
                    : [...res, cur],
            []
        );
        uniqueArray.sort((a, b) => a - b); 
        uniqueArray.forEach(object => {
            object.learned = true;
          });
        console.log('unique:', uniqueArray);
        return uniqueArray; 
    };
    

    
    const handleCheck = (id) => {
        console.log('id', id);
        setShowTranslation(true);
        learnedWords.push(data[id]);
        setLearnedWords(checkUniqueLearnedWord(learnedWords));
       
       
    };

    const moveBack = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setShowTranslation(false); 
    };

    const moveNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setShowTranslation(false); // 
    };

    const [btnBackActive, setBackBtnActive] = useState(true);
    const [btnNextActive, setNextBtnActive] = useState(true);

    const restartGame = () => { 
        dataList.forEach(object => {
            object.learned = false;
          })
        setData(dataList);
        setCurrentIndex(0);
        setLearnedWords([])
        setShowTranslation(false);
        console.log('restart', data);
    }
    useEffect(() => {
        restartGame();
    }, [dataList]);
    return (
        <>
            <div className={styles.cardlist_main}>
        
            <h2 className="title">CardWord</h2>
           

            <div className={styles.cardlist_container}>
                <button className={styles.button} disabled={!btnBackActive} onClick={moveBack}>
                    Back
                </button>

                <div className={styles.cardItems_wrapper}>
               
                        <div className={styles.cardItems_learnedRestart}>
                            <p>You have learned: {learnedWords.length}/{data.length}</p>
                            <button className={styles.button_restart}  onClick={restartGame}>
                    restart Game
                </button>
                        </div>
                   

                    {data.map((card, index) => (
                        <div key={card.word} style={{ display: index === currentIndex ? "block" : "none" }}>
                            <Card
                                transcription={card.transcription}
                                translation={card.translation}
                                word={card.word}
                                isLearned={card.learned }
                                clicked={showTranslation} // Передаем состояние showTranslation
                                btnFunction={() => handleCheck(index)}
                            />
                        </div>
                    ))}

                    <p>
                        {currentIndex + 1}/{data.length}
                    </p>
                </div>

                <button className={styles.button} disabled={!btnNextActive} onClick={moveNext}>
                    Next
                </button>
                </div>
                </div>
        </>
    );
};

export default CardPage;