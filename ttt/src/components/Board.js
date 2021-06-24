import React,{useState} from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

function Board(props) {

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
  
  console.log(board)
  const play = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    }
   
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }; 
  const remove =()=>{
    setBoard(Array(9).fill(null))
    let  his=JSON.parse(localStorage.getItem("history"))
    let player1=JSON.parse(localStorage.getItem("player1"));
    let player2=JSON.parse(localStorage.getItem("player2"));
    let date=new Date();
    
    let day=date.getDate();
    let month=date.getUTCMonth()+1;
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let endTime="";
    endTime=day+"." + month + " " + hour + ":" + minutes;
    const d={
      startTime:endTime,
      opponents:`${player1} vs ${player2}`,
      won:`player won`
    }
   his.push(d);
   localStorage.setItem("history",JSON.stringify( his));
   console.log(his);

  }
  const resetgame = () => {
     

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={remove }>
          Reset Game
        </button>
      </div>
    );
  };



 
  const s=[];
     for (let i=0;i<board.length;i++) {
      s.push(<div className="square" onClick={()=>play(i)} key={i}>{board[i]}</div>)
    }
  return (
    <div className="container2">
      {s}
      <div >
        <p style={{ textAlign: "center" }}>
          {winner
            ? `Winner: ` + winner
            : `Next Player: ` + (xIsNext ? "X" : "O")}
        </p>
        {resetgame()}
      </div>
    </div>
  );
}

export default Board;

 