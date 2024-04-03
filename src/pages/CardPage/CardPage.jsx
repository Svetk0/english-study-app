
import { useState, useEffect } from "react";
import Card from "../../components/Card/CardWord";
import styles from "./CardPage.module.css";

const CardPage = ({ dataList }) => {
    //const [initialData] = useState(dataList);
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
        ).sort((a, b) => a - b); 
        console.log('unique:', uniqueArray);
        return uniqueArray; 
    };
    

    
    const handleCheck = (id) => {
        console.log('id', id);
        setShowTranslation(true);
        learnedWords.push(data[id]);
        setLearnedWords( checkUniqueLearnedWord(learnedWords));
       
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

    return (
        <>
            <h2 className="title">CardWord</h2>
            <div className={styles.cardlist_container}>
                <button className={styles.button} disabled={!btnBackActive} onClick={moveBack}>
                    Back
                </button>

                <div>
                    <p>You have learned: {learnedWords.length}/{data.length}</p>

                    {data.map((card, index) => (
                        <div key={card.word} style={{ display: index === currentIndex ? "block" : "none" }}>
                            <Card
                                transcription={card.transcription}
                                translation={card.translation}
                                word={card.word}
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
        </>
    );
};

export default CardPage;