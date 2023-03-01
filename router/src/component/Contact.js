import React from 'react'
import { useNavigate } from 'react-router-dom';



export const Contact = () => {
  const nawigate = useNavigate();

  const handelNavigate=()=>{
      console.log('Nawgacja poszla');
      return nawigate('/admin');
    }

  return (
    <div className='component'>
      <p>Contact</p>
      <button onClick={handelNavigate}>- Nawigacja -</button>
      
    </div>
  )
}
