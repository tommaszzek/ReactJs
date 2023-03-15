import React from 'react'
import { useContext } from 'react';
import {UserContext} from '../context/userContext';
import {UserData}  from '../context/userContext';

export  const Profile = () => {
    const user = useContext(UserContext);

    // pobieranie danych przez funkcje z ocntextu
  const data = UserData();
  console.log(data);

    return (
      <div>
        <hr/>
        <h1>Profil użytkownika</h1>
        <p>Imię: {user.name}</p>
        <p>Wiek: {user.wiek}</p>
        <hr/>
      </div>
    );
}

