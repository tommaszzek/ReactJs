import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom';



export const Contact = () => {
  const nawigate = useNavigate();

  const handelNavigate=(id)=>{
      if(id===1){
        console.log('Nawgacja en');
        return nawigate('/contact/en');
      }
      else if(id===2){
          console.log('Nawgacja pl');
          return nawigate('/contact/pl');
      } else {
          console.log('Nawgacja admin');
          return nawigate('/admin');
      }
    }

  return (
    <div className='component'>
      <p>Contact</p>
      <button onClick={()=>handelNavigate()}>- Nawigacja  Admin-</button>
      <button onClick={()=>handelNavigate(1)}>- Nawigacja EN -</button>
      <button onClick={()=>handelNavigate(2)}>- Nawigacja PL-</button>
      <Outlet/>
    </div>
  )
}
