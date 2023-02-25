import {useState} from 'react';
import './App.css';


function App() {
  let index=0;


 const [zadania, setZadanie] = useState([
  {id:index++,nazwa:'Wyjść z psem ' , status:false},
  {id:index++,nazwa:'Nauczyć się na biologię ' , status:false},
  {id:index++,nazwa:'Napisać projekt z react ' , status:true},
  {id:index++,nazwa:'Klasówka z chemi ' , status:false}

 ]);
 const [name, setName] = useState('');
 const [status, setStatus] = useState(true);


const handleDelete=(id)=>{
  setZadanie(zadania.filter(zad=>zad.id !==id));
}
 
 const handleAdd=(id)=>{

  zadania.map((zad)=>{if(zad.id===id) zad.status=true});
  
  setZadanie(zadania);
  }
  return (
    <div className="App">
     <h1>WITAJ    </h1>
     <hr/>
     <h2> Dodaj zaanie :</h2>
     <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button 
      onClick={() => {
        setName('');
        zadania.push({
          id:index++,
          nazwa: name,
          status:false
        })
      
      }
      
    }
      className='add'
      >Add</button>
      <hr/>
     <h2>Oto twoje zadania :</h2>
     <button onClick={()=>setStatus(!status)} className='sub'>{status ? `Ukryj` :`Pokaz`} </button>
     
    <ul>
      {status && zadania.map((zad)=>(
        <li key={zad.id} className={zad.status ? `complete` :`incomplete`}>
          {zad.id} - treść : {zad.nazwa}
          <button onClick={()=>handleDelete(zad.id)} className='sub'>Usuń</button>
          <button 
          onClick={()=>handleAdd(zad.id)} 
          className='add'>Zrobione</button>
        </li>
      ))}

    </ul>
    </div>
  );
}

export default App;
