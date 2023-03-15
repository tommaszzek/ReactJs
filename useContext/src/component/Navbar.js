import React from 'react'
import { useContext } from 'react';
import {UserContext} from '../context/userContext';
import {UserData}  from '../context/userContext';

export const Navbar = () => {
  // Korzystamy z useContext, aby uzyskać dostęp do wartości kontekstu
  const user_d = useContext(UserContext);
  // pobieranie danych przez funkcje z ocntextu
  const data = UserData();
   
  return (
    <nav>
      <h2>Witaj dane z conetx bezposrdnio, {user_d.name}!</h2>
    
      <h3>Witaj dane z funkcji z contex , {data.name}!</h3>
      <hr/>
    </nav>
  );
}
