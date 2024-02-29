
import { useEffect, useState }  from 'react';
import Header from './components/header/Header';

import CardPage from './containers/CardPage/CardPage';
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

  function toggleCardVisibility() {
    setIsCardVisible(prevIsVisible => !prevIsVisible)
  }

  function toggleTrainModeVisibility() {
    setIsTrainModeVisible(prevIsVisible => !prevIsVisible)
  }

  return (
    <div className="App-container">
      <Header toggleCardVisibility={toggleCardVisibility} toggleTrainModeVisibility={toggleTrainModeVisibility}/>
      { console.log(data)}
      {isCardVisible && <CardPage data={ data} />}
      
      {isTrainModeVisible && <TrainMode/>}
    </div>
  );
}

export default App;
