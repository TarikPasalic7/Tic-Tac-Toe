const Endgame =({again,winner})=>{
const win =()=>{
  if(winner==="draw")
  {
    return "Draw";

  }
  else{
      return `${winner} wins`;
  }
  


}

 return(
     <div>
         <h2>{win()}</h2>
         <button onClick={again}>Wanna try again?</button>
     </div>
 )


}

export default Endgame;