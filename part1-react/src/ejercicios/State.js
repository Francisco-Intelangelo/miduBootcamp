import { useState } from 'react';


function State() {
  const [contadorValue, updateContador] = useState(0);
  const handleClick = () => {  
      updateContador((prevcontador) =>{
        return prevcontador + 1;
    })
  }
  const jsylcdtm= () =>{
    updateContador((prevcontador) => {
      return prevcontador - 1;
    })
  }
  return (
    <>
      <h1>{contadorValue}</h1> 
      <button onClick={handleClick}>
        increment
      </button>
      <button onClick={jsylcdtm}>dismin</button>
    </>
  );
  
}
export default State;