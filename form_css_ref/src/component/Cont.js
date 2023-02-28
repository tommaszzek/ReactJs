import { useState } from 'react';
import { useRef } from 'react';
import './Cont.css';

export const Cont = () => {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
 const inp1 = useRef();
 const inp2 = useRef();

  const handelText=(e)=>{
    if(e.target.id==='data_1'){
      console.log(inp1.current.value);
      // setinput1(e.target.value);
    }
    if(e.target.id==='data_2'){
      console.log(inp2.current.value);
      // setinput2(e.target.value);
    }
  }
  const hendelSubmit=(e)=>{
    e.preventDefault();
    setinput1(inp1.current.value);
    setinput2(inp2.current.value);
  }
  return (
    <>
    <div>Formularze</div>
    <form onSubmit={hendelSubmit}>
      <input 
      type='text'
      name='dane1'
      id='data_1'
      onChange={handelText}
      ref={inp1}
      />
      <input 
      type='text'
      name='dane2'
      id='data_2'
      onChange={handelText}
      ref={inp2}
      />
      <button type='submit'>
        zatwierdz
      </button>
    <p>{input1}</p>
    <p>{input2}</p>
    </form>
    
    </>
  )
}
