export const Tasks = ({zadania,setZadanie,setStatus,status,handleDelete,handleUdpate,handleAdd}) => {
  return (
    <>
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
      </>
  )
}
