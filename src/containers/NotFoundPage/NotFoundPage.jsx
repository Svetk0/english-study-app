import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img from "./img/notfound.png";
import hero from "./img/cat-emty.png";
import styles from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  let location = useLocation();
  return (
      <div className={styles.wrapper}>
          <div className={styles.img_container}>
              <img className={styles.img} src={img} alt="404" />
              <img className={styles.img} src={hero} alt="cat" />
          </div>
         
          <div className={styles.container}>
          <p className={styles.text__match}>
        No match for <u>{location.pathname}</u>
      </p>
      <div className={styles.text__tip}>
        Please, go to <Link to="/english-study-app/">    Welcome Page</Link>
      </div>
          </div>
      
    </div>
  );
};

export default NotFoundPage;
