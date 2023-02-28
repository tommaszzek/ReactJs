import React from 'react'
import {useEffect} from 'react';


export const Data = () => {
    // const [user_s, setuser_s] = useState(initialState)    

    // console.log(user_s)
    // const users='https://jsonplaceholder.typicode.com/users';
    // fetch(users).then(response=>response.json()).then(data=>setuser_s(data));
    useEffect(() => {
        console.log('Montowanie')
        return console.log('Demontowanie Montowanie');
    }, []);   
 

  return (

    <div>data</div>
   

  )
}
