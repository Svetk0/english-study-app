import { useState } from "react";
import { useEffect } from "react";
import "./trainMode.css";
import pathIconApple from "./img/iconApple.png";
import pathIconCar from "./img/iconCar.png";
import pathIconCake from "./img/iconCake.png";
import pathIconCat from "./img/iconCat.png";
import pathIconDog from "./img/iconDog.png";
import pathIconWatermelon from "./img/iconWatermelon.png";
import pathIconShark from "./img/iconShark.png";
import pathIconTractor from "./img/iconTractor.png";

import pathIconBackground from "./img/iconBack.png";

const initialArrayCards = [
  { id: 1, img: pathIconApple },
  { id: 2, img: pathIconCar },
  { id: 3, img: pathIconShark },
  { id: 4, img: pathIconDog },
  { id: 5, img: pathIconTractor },
    { id: 6, img: pathIconCake },
   // { id: 7, img: pathIconCat },
    //{ id: 8, img: pathIconWatermelon },
];
// Double of cards
const pairOfArrayCards = [...initialArrayCards, ...initialArrayCards];

console.log(pairOfArrayCards);

function TrainMode() {
  const [arrayCards, setArrayCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  // Random shuffle of cards placements
  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;
   

    while (currentIndex > 0) {
      //console.log("currIndex: " + currentIndex);
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
    
    
  useEffect(() => {
    setArrayCards(shuffle(pairOfArrayCards));
  }, []);

  //check pair of cards
  const flipCard = (index) => () => {
    setOpenedCards((opened) => [...opened, index]);
    setMoves((prevMove) => prevMove + 1);
  };
  useEffect(() => {
    if (openedCards < 2) return;
    const firstMatched = arrayCards[openedCards[0]];
    const secondMatched = arrayCards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 1500);
  }, [openedCards]);

  // restart the game
    function handleGameRestart() {
        setOpenedCards([]);
        setMatched([]);
        setMoves(0);
        setArrayCards(shuffle(pairOfArrayCards));
  }

  return (
      <div className="trainMode_container">
          
     
          <h1 className="title">Train Mode</h1>
          <p className="numberSteps">Steps: { moves/2 }</p>
      <div className="cards">
        {arrayCards.map((item, index) => {
          let isFlipped = false;

          if (openedCards.includes(index)) isFlipped = true;
          if (matched.includes(item.id)) isFlipped = true;
          return (
            <div
              key={index}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img className="image-card" src={item.img} alt="front card" />
                </div>
                <div className="back">
                  <img
                    className="image-card"
                    src={pathIconBackground}
                    alt="card back-side"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="button button-restart" onClick={handleGameRestart}>
        restart game
      </button>
    </div>
  );
}

export default TrainMode;
