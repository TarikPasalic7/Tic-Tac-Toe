
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Navbar from './components/Navbar';
import React,{useState,useEfeect,} from 'react';

function App() {
  const [isRegistered,setIsregistered]=useState(false);
const startapp=(player1,player2)=>{

  localStorage.setItem('player1',JSON.stringify(player1));
  localStorage.setItem('player2',JSON.stringify(player2));
  localStorage.setItem('history',JSON.stringify([]));



 setIsregistered(true);
}

  return (
    <div className="App">
     
      {isRegistered? <Navbar/>:null } 
   {!isRegistered?<Login start={startapp}/>:<Game/> } 
    </div>
  );
}

export default App;
