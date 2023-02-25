import {useState} from 'react';
import './App.css';


function App() {
 const [zadania, setZadanie] = useState([
  {id:1,nazwa:'Wyjść z psem ' , status:false},
  {id:2,nazwa:'Nauczyć się na biologię ' , status:false},
  {id:3,nazwa:'Napisać projekt z react ' , status:true},
  {id:4,nazwa:'Klasówka z chemi ' , status:false}

 ]);
const handleDelete=(id)=>{
  setZadanie(zadania.filter(zad=>zad.id !==id));
}
 
  return (
    <div className="App">
     <h1>WITAJ    </h1>
     <h2>Oto twoje zadania :</h2>
    <ul>
      {zadania.map((zad)=>(
        <li key={zad.id}>
          {zad.id} - treść : {zad.nazwa}
          <button onClick={()=>handleDelete(zad.id)} className='sub'>Usuń</button>
        </li>
      ))}

    </ul>
    </div>
  );
}

export default App;
