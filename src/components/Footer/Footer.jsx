import React from "react";
import { Link } from "react-router-dom";

import img from "./img/github.png";

import styles from "./Footer.module.css";


function Footer() {
    return (
      
        <div className={ styles.footer_wrapper }> 
        <div className={ styles.text }>developed by </div> 
            <a href="https://github.com/Svetk0/english-study-app" target="_blank">
            
                <img className={styles.img} src={img} alt="github" />
            </a>
        </div>

  );
}
export default Footer;

