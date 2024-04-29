import React from "react";
import { Link } from "react-router-dom";



import styles from "./Header.module.css";

// <h1 className={styles.header}>English study app</h1>

function Header() {
  return (
    <div className={ styles.header_container} >
      <h1 className={ styles.header}><Link to="/english-study-app">English study app</Link></h1>
      <nav className={ styles.menuHeader}>
        <ul className={ styles.menuList__container}>
          <li className={ styles.menuLink}>
            <Link to="/english-study-app/vocabulary">Vocabulary</Link>
          </li>
          {/* <li className={ styles.menuLink}>
            <Link to="/english-study-app/vocabulary-list">V List</Link>
          </li> */}
          <li className={ styles.menuLink}>
            <Link to="/english-study-app/cards">Cards</Link>
          </li>
          <li className={ styles.menuLink}>
            <Link to="/english-study-app/train">Train mode</Link>
          </li>
          <li className={ styles.menuLink}>
            <Link to="/english-study-app/form">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;