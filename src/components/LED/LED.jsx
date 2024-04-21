import React, { useContext, useEffect } from "react";
import { WordContext } from "../../context/WordContext/WordContext";
import styles from "./LED.module.css";

const LED = () => {
  const { words, setWords } = useContext(WordContext);
  useEffect(() => {}, [words]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color", color);
    return color;
  };
  //console.log("led", words,color);
  return (
    <>
      {/* <div>
              {array.map((item,index) => {
                  let color = getRandomColor();
            return (
                <div className={styles.led} style={{ backgroundColor: color }}>
                    {index}
              </div>
          );
        })}
      </div> */}
            <div className={styles.led} style={{ backgroundColor: getRandomColor }}>
                    {'vb'}
              </div>
    </>
  );
};
export default LED;
