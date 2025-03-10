import { useState } from "react";

function Square({ value, onSquareClick }) {

  return (  
    <>
      <button className="square2" onClick={onSquareClick}>{value}</button>
    </>
  )
}
export default function Board() {
  const [xIsNext, setXIsNext] =useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleclick(i) {
    if(squares[i]) return;
    const newSquares = squares.slice();
    if(xIsNext) newSquares[i] = "X";
    else newSquares[i] = "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className = "board">
        <Square value={ squares[0] } onSquareClick={ () => handleclick(0) } />
        <Square value={ squares[1] } onSquareClick={ () => handleclick(1) } />
        <Square value={ squares[2] } onSquareClick={ () => handleclick(2) } />
        <Square value={ squares[3] } onSquareClick={ () => handleclick(3) } />
        <Square value={ squares[4] } onSquareClick={ () => handleclick(4) } />
        <Square value={ squares[5] } onSquareClick={ () => handleclick(5) } />
        <Square value={ squares[6] } onSquareClick={ () => handleclick(6) } />
        <Square value={ squares[7] } onSquareClick={ () => handleclick(7) } />
        <Square value={ squares[8] } onSquareClick={ () => handleclick(8) } />
      </div>
    </>
  )
}
