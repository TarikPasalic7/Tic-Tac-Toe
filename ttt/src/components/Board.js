import React,{useState,useEffect} from "react";
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
         
           
            return "draw";
        }
        else{
            counter++;
            return null;
        }
        
            
        
        
      }
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
const [isEnd,setIsEnd]=useState(false);
const [historynext,sethistoryNext]=useState(false);
let [winner,setWinner]=useState("");
  
 
useEffect(() => {
    const w = calculateWinner(board);
    setWinner(w);
    if(w==="X" || w==="O" || w==="draw"){

        setIsEnd(true);
        setTimeout(() => {
            
            setIsEnd(false);
            sethistoryNext(true);
        }, 3000);
    }
}, [board])
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
      setIsEnd(false);
      sethistoryNext(false);
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
    setIsEnd(false);
      sethistoryNext(false);
    setBoard(Array(9).fill(null))
    setXisNext(true);
    counter=0;
    update();

}
const message =()=>{
   
 if(winner ==="X")
 return "PLayer1 wins";
 if(winner ==="O")
 return "PLayer2 wins";
 if(winner ==="draw")
 return "draw";
   
 

}

const history =()=>{
    let  his=JSON.parse(localStorage.getItem("history"));

    return his.map((k,index)=>(
     
        <div key={index} >

        <div  key={index} >

            {`${k.startTime} ${k.player1} vs  ${k.player2}   ${k.won} won`}
        </div>

        </div>

   ))



}
 
  const s=[];
     for (let i=0;i<board.length;i++) {
      s.push(<div className="square" onClick={()=>play(i)} key={i}>{board[i]}</div>)
    }
  return (
      <div>
    <div className="container2">
      {s}
     
    </div>
    <div >
        <p style={{ textAlign: "center" }}>
          {winner
            ? <Endgame  again={again} winner={win}/>
            : `Next Player: ` + (xIsNext ? plr1 : plr2)}
              <div>
            {
               isEnd? <div> {message()} </div>:null
            }
             {
                historynext? <div>{history()}</div>:null
            }
        </div>
        </p>
      
        {resetgame()}
      </div>
    </div>
  );
}

export default Board;

 