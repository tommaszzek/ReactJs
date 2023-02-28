import './Cont.css';

export const Cont = () => {
  let show=true;
  return (
    <>
    <div>ZAWARTOŚĆ</div>
    <p style={{
        color: show ? "black" : 'blue'
    }}     >  lorem
    </p>
    </>
  )
}
