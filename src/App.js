//import Header from './components/Header';
import { useEffect }  from 'react';
import Header from './components/header/Header';
import Card from './components/card/CardWord';
import TrainMode from './components/train-mode/TrainMode';
import './App.css';

function App() {
  useEffect(() => { 
    document.title = "English study";
  }, []);
  
  return (
    <div className="App-container">
      
      <Header />
      <Card />
      <TrainMode />
    </div>
  );
}

export default App;
