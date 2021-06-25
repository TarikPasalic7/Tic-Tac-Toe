import React,{useState} from "react";
import Square from "./Square";
import Endgame from "./Endgame";
const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
let counter=0;
let win="";
function Board({plr1,plr2,update}) {
    console.log(counter);
    
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
              if(squares[a]==="X")
              {
              
                 win=plr1;
                 let  his=JSON.parse(localStorage.getItem("history"))
    let player1=plr1
    let player2=plr2
    let date=new Date();
    
    let day=date.getDate();
    let month=date.getUTCMonth()+1;
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let endTime="";
    endTime=day+"." + month + " " + hour + ":" + minutes;
    const d={
        id:1,
      startTime:endTime,
      player1:player1,
      player2:player2,
      won:win
    }
   his.push(d);
   localStorage.setItem("history",JSON.stringify( his));

                  return squares[a];
              }
              else{
                  
                 win=plr2;
                let  his=JSON.parse(localStorage.getItem("history"))
   let player1=plr1
   let player2=plr2
   let date=new Date();
   
   let day=date.getDate();
   let month=date.getUTCMonth()+1;
   let hour=date.getHours();
   let minutes=date.getMinutes();
   let endTime="";
   endTime=day+"." + month + " " + hour + ":" + minutes;
   const d={
       id:1,
     startTime:endTime,
     player1:player1,
     player2:player2,
     won:win
   }
  his.push(d);
  localStorage.setItem("history",JSON.stringify( his));


               
                  return squares[a];
              }
           
          }
        }
        if(counter===9)
        {
            win="draw";
            let  his=JSON.parse(localStorage.getItem("history"))
            let player1=plr1
            let player2=plr2
            let date=new Date();
            
            let day=date.getDate();
            let month=date.getUTCMonth()+1;
            let hour=date.getHours();
            let minutes=date.getMinutes();
            let endTime="";
            endTime=day+"." + month + " " + hour + ":" + minutes;
            const d={
                id:1,
              startTime:endTime,
              player1:player1,
              player2:player2,
              won:win
            }
           his.push(d);
           localStorage.setItem("history",JSON.stringify( his));
           console.log(his);
            

            return "draw";
        }
        else{
            counter++;
            return null;
        }
        
            
        
        
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
    setXisNext(true);
    counter=0;

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

const again=()=>{
 
    setBoard(Array(9).fill(null))
    setXisNext(true);
    counter=0;
    update();

}

 
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
            ? <Endgame again={again} winner={win}/>
            : `Next Player: ` + (xIsNext ? plr1 : plr2)}
        </p>
        {resetgame()}
      </div>
    </div>
  );
}

export default Board;

 