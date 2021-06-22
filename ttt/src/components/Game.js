
import React, { useState } from "react";
import Board from "./Board";


const style = {
  width: "200px",
  margin: "20px auto",
};

function Game() {

    const calculateWinner=(squares)=> {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    }
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setBoard(Array(9).fill(null))}>
          Reset Game
        </button>
      </div>
    );
  };
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p style={{ textAlign: "center" }}>
          {winner
            ? `Winner: ` + winner
            : `Next Player: ` + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;