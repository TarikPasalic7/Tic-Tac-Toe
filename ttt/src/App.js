
import './App.css';
import Login from './components/Login';
import React,{useState,useEfeect,} from 'react';

function App() {
  const [isRegistered,setIsregistered]=useState(false);
const start=(e)=>{

  
 setIsregistered(true);
}

  return (
    <div className="App">
   {!isRegistered?<Login start={start}/>:<div>yx</div> } 
    </div>
  );
}

export default App;
