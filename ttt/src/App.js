
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Navbar from './components/Navbar';
import React,{useState,useEfeect,useReducer} from 'react';

function App() {
  const [isRegistered,setIsregistered]=useState(false);
  const [player1,setPlayer1]=useState("");
  const [player2,setPlayer2]=useState("");
  const [, update] = useReducer(x => x + 1, 0);

  const getplr1 =()=>{
      
    const history=JSON.parse(localStorage.getItem("history"));
   let player1won= history.filter((element)=>{
        return element.won===player1;
    })
      
    return player1won.length;

  }
const startapp=(player1,player2)=>{

  localStorage.setItem('player1',JSON.stringify(player1));
  localStorage.setItem('player2',JSON.stringify(player2));
  localStorage.setItem('history',JSON.stringify([]));
 setPlayer1(player1);
 setPlayer2(player2);


 setIsregistered(true);
}


  return (
    <div className="App">
     
      {isRegistered? <Navbar  plr1={player1} plr2={player2} getplr1={()=>getplr1()}/>:null } 
   {!isRegistered?<Login start={startapp}/>:<Game update={update} plr1={player1} plr2={player2}/> } 
    </div>
  );
}

export default App;
