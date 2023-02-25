import {useState} from 'react';
import './App.css';


function App() {
 const [count, setCount] = useState(0);
 const handleAdd=()=>{
  setCount(count+1);
 }
 const handleSub=()=>{
  setCount(count-1);
 }
 const handleReset=()=>{
  setCount(0);
 }
  return (
    <div className="App">
     <h1>WITAJ    </h1>
     <h2>{count}</h2>
     <button onClick={handleAdd} className='add'>Ddodaj</button>
     <button onClick={handleSub} className='sub'>Odejmuj</button>
     <button onClick={handleReset} className='reset'>Reset</button>
   
    </div>
  );
}

export default App;
