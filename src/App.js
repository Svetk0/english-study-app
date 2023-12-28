//import Header from './components/Header';
import { useEffect }  from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  useEffect(() => { 
    document.title = "English study";
  }, []);
  
  return (
    <div className="App-container">
      
      <Header/>
    </div>
  );
}

export default App;
