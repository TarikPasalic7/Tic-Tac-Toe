
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Navbar from './components/Navbar';
import React,{useState,useEfeect,} from 'react';

function App() {
  const [isRegistered,setIsregistered]=useState(false);
const start=(e)=>{

  
 setIsregistered(true);
}

  return (
    <div className="App">
     
      {isRegistered? <Navbar/>:null } 
   {!isRegistered?<Login start={start}/>:<Game/> } 
    </div>
  );
}

export default App;
