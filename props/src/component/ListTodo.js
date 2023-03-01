import {useState,useEffect} from 'react';
import { AddTask } from './AddTask';
import { Tasks } from './Tasks';

export const ListTodo = () => {

const [status, setStatus] = useState(true);
const [update, setUpdate] = useState();
const [name, setName] = useState('');


 const [zadania, setZadanie] = useState(JSON.parse(localStorage.getItem('zadania')) || []);
  

 useEffect(()=>{
localStorage.setItem('zadania',JSON.stringify(zadania));
 },[zadania])
  
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
        // zadania.push({
        //   id:Math.floor(Math.random()*10000),
        //   nazwa: name,
        //   status:false
        // })
        let rek={
          id:Math.floor(Math.random()*10000),
          nazwa: name,
          status:false
        }
        setZadanie([...zadania,rek]);
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
