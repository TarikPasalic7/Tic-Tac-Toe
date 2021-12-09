
import React, { useState } from "react";
const Endgame =({again,winner})=>{
const win =()=>{
   
  if(winner==="draw")
  {
    return "Draw";

  }
  else{
      return ` You win ${winner}!! `;
  }
  


}

 return(
     <div>
         <h2>{win()}</h2>
         <button className="againbtn" onClick={again}>Wanna try again?</button>
     </div>
 )


}

export default Endgame;