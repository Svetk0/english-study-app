import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import img from "./img/cat-home.png";

import styles from "./HomePage.module.css";
const HomePage = () => {
  let location = useLocation();
  return (
      <div className={styles.wrapper}>
           <div className="title">Welcome my friend! </div>
          <img className={styles.img} src={img} alt="welcome" />
          <div className={styles.container}>
              <div className="title">let's upskilling your English together</div>
              <div  className={styles.text__tip}> <i> choose any play mode above</i></div>
    
          </div>
      
    </div>
  );
};

export default HomePage;
