import {useState} from 'react';
import './App.css';


function App() {
  


 const [zadania, setZadanie] = useState([
  {id:Math.floor(Math.random()*10000),nazwa:'Wyjść z psem ' , status:false},
  {id:Math.floor(Math.random()*10000),nazwa:'Nauczyć się na biologię ' , status:false},
  {id:Math.floor(Math.random()*10000),nazwa:'Napisać projekt z react ' , status:true},
  {id:Math.floor(Math.random()*10000),nazwa:'Klasówka z chemi ' , status:false}

 ]);
 const [name, setName] = useState('');
 const [status, setStatus] = useState(true);
 const [update, setUpdate] = useState();

 const handleUdpate=(id)=>{
  if(id){
    setUpdate('t');
            let rek=zadania.filter(zad=>zad.id===id);
            console.log(rek);
            setZadanie(zadania.filter(zad=>zad.id !==id));
            setName(rek[0].nazwa);
            
    
}
  else{
      setName('');
      setUpdate();
      zadania.push({
        id:Math.floor(Math.random()*10000),
        nazwa: name,
        status:false
      })
  }

 }

const handleDelete=(id)=>{
  setZadanie(zadania.filter(zad=>zad.id !==id));
}
 
 const handleAdd=(id)=>{
  let rek=zadania.filter(zad=>zad.id===id);
  rek[0].status=true;

     setZadanie(Object.assign(rek,zadania));
  }
  return (
    <div className="App">
     <h1>WITAJ    </h1>
     <hr/>
     <h2> Dodaj zaanie :</h2>
     <input
     type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        
      />
      <button 
      onClick={() => {handleUdpate()}
      
    }
      className={update ? `sub_1 ` :`add`}
      >
        {update ? `Update ` :`Add`}
      </button>
      <hr/>
     <h2>Oto twoje zadania :</h2>
     <button onClick={()=>setStatus(!status)} className={status ? `sub` :`add`}>{status ? `Ukryj` :`Pokaz`} </button>
     <button onClick={()=>setZadanie([])} className='sub_1'>USUŃ WSZYSTKIE ZADANIA </button>
    <ul>
      {status && zadania.map((zad)=>(
        <li key={zad.id} >
         <span className={zad.status ? `complete` :`incomplete`}> {zad.nazwa} </span>
          <button onClick={()=>handleDelete(zad.id)} className='sub_1'>Usuń</button>
          <button onClick={()=>handleUdpate(zad.id)} className='sub'>Update</button>
          <button 
          onClick={()=>handleAdd(zad.id)} 
          className={!zad.status ? `add`: `add_dis`}>{!zad.status ? `Do zrobienia`: `Wykonane`} </button>
        </li>
      ))}

    </ul>
    </div>
  );
}

export default App;
