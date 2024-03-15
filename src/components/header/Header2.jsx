import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import CardPage from '../../containers/CardPage/CardPage';
import VocabularyPage from '../../containers/VocabularyPage/VocabularyPage';
import TrainMode from '../../components/train-mode/TrainMode';

import "./header.css";


// <h1 className={styles.header}>English study app</h1>

function Header() {  
  return (
   
      <div className="header-container">
          <h1 className="header">English study app</h1>
        <nav className="menu-header">
        <ul className='menu-list__container'>
              <li className="menu-link">
                <Link to="/">Vocabulary</Link>
              </li>
              <li className="menu-link">
                <Link to="/cards">Cards</Link>
              </li>
              <li className="menu-link">
                <Link to="/train">Train mode</Link>
              </li>
            </ul>
        </nav>
      </div>
  );
}
export default Header;
