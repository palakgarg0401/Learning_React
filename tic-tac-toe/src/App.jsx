import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleclick() {
    setValue('X');
  }

  return (  
    <>
      <button className="square2" onClick={handleclick}>{value}</button>
    </>
  )
}
export default function Board() {
  return (
    <>
      <div className = "board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
