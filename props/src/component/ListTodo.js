import {useState} from 'react';
import { AddTask } from './AddTask';
import { Tasks } from './Tasks';

export const ListTodo = () => {

const [status, setStatus] = useState(true);
const [update, setUpdate] = useState();
const [name, setName] = useState('');


 const [zadania, setZadanie] = useState([
    {id:Math.floor(Math.random()*10000),nazwa:'Wyjść z psem ' , status:false},
    {id:Math.floor(Math.random()*10000),nazwa:'Nauczyć się na biologię ' , status:false},
    {id:Math.floor(Math.random()*10000),nazwa:'Napisać projekt z react ' , status:true},
    {id:Math.floor(Math.random()*10000),nazwa:'Klasówka z chemi ' , status:false}
  
   ]);
  
   
  
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

        <AddTask  handleUdpate={handleUdpate} name={name} setName={setName} update={update} />
        <Tasks zadania={zadania} setZadanie={setZadanie} setStatus={setStatus} status={status} 
        handleDelete={handleDelete} handleUdpate={handleUdpate} handleAdd={handleAdd} />
       
      </div>
    );

}
