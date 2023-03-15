import { createContext,useContext} from 'react';


  export const UserContext = createContext(null);



export const UserProvider=({children})=> {
    const user = {name:'Janek',wiek:19};
  
  
    return (
      // Ustawiamy wartość kontekstu dla całej aplikacji
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    );
  }

  
export const  UserData=()=>{
    const data=useContext(UserContext);
    return data;
}
