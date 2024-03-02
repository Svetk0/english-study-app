
import { useEffect, useState }  from 'react';
import Header from './components/header/Header';

import CardPage from './containers/CardPage/CardPage';
import VocabularyPage from './containers/VocabularyPage/VocabularyPage';
import TrainMode from './components/train-mode/TrainMode';
//import menu from './components/constants';
import { data } from './store/store.js'
  ;
import './App.css';

function App() {
  useEffect(() => {
    document.title = "English study";
  }, []);

  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isTrainModeVisible, setIsTrainModeVisible] = useState(false);
  const [isVocabularyVisible, setIsVocabularyVisible] = useState(false);

  function toggleCardVisibility() {
    setIsCardVisible(prevIsVisible => !prevIsVisible);
    setIsTrainModeVisible(false);
    setIsVocabularyVisible(false);
  }

  function toggleTrainModeVisibility() {
    setIsTrainModeVisible(prevIsVisible => !prevIsVisible);
    setIsCardVisible(false);
    setIsVocabularyVisible(false);
  }

  function toggleVocabularyVisibility() {
    setIsVocabularyVisible(prevIsVisible => !prevIsVisible);
    setIsTrainModeVisible(false);
    setIsCardVisible(false);
  }

  return (
    <div className="App-container">
      <Header
        toggleCardVisibility={toggleCardVisibility}
        toggleTrainModeVisibility={toggleTrainModeVisibility}
        toggleVocabularyVisibility={toggleVocabularyVisibility}/>
      
      { console.log(data)}
      {isCardVisible && <CardPage data={ data} />}
      {isTrainModeVisible && <TrainMode />}
      {isVocabularyVisible && <VocabularyPage data={ data} />}
      
    </div>
  );
}

export default App;
