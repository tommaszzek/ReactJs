export const AddTask = ({handleUdpate,name,setName,update}) => {
    
    return (
    <>
     <h2> Dodaj zaanie :</h2>
     <input  type="text"
           value={name}
           onChange={e => setName(e.target.value)}
           />
    <button 
         onClick={() => {handleUdpate()}}
         className={update ? `sub_1 ` :`add`}
         >
        {update ? `Update ` :`Add`}
         </button>
    <hr/>
    </>
  )
  
}
